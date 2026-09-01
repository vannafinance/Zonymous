// Compares what Vercel's nameservers currently answer against what the new
// Cloud DNS zone answers, before the registrar switch makes it irreversible.
//
// Queries each authoritative server directly rather than a public resolver,
// so the new zone can be checked while the domain is still delegated to Vercel.
//
//   node infra/dns/verify.mjs
//
// After the switch, both sides answer identically and every row reads SAME.
import dns from 'node:dns/promises';

const OLD_NS = 'ns1.vercel-dns.com';
const NEW_NS = 'ns-cloud-b1.googledomains.com';
const D = 'zonymouslabs.com';

/**
 * Records that must survive the move. Site records are expected to differ.
 *
 * 'exact'    — the answer must be identical.
 * 'superset' — everything Vercel answers must still be there; additions are
 *              fine. The apex TXT rrset gains Firebase's `hosting-site=` value
 *              alongside the untouched SPF, so exact equality would flag a
 *              healthy zone.
 */
const CARRY_OVER = [
  ['MX', D, 'exact'],
  ['TXT', D, 'superset'],
  ['CAA', D, 'exact'],
  ['TXT', `spacemail._domainkey.${D}`, 'exact'],
];

const SITE = [
  ['A', D],
  ['CNAME', `www.${D}`],
  ['TXT', `_acme-challenge.${D}`],
  ['TXT', `_acme-challenge.www.${D}`],
];

async function resolverFor(nsHost) {
  const { address } = await dns.lookup(nsHost, { family: 4 });
  const r = new dns.Resolver();
  r.setServers([address]);
  return r;
}

/** Normalise to a stable, comparable form. TXT chunks concatenate; order is not significant. */
async function query(resolver, type, name) {
  try {
    switch (type) {
      case 'A':
        return (await resolver.resolve4(name)).sort();
      case 'CNAME':
        return (await resolver.resolveCname(name)).sort();
      case 'MX':
        return (await resolver.resolveMx(name))
          .map((m) => `${m.priority} ${m.exchange}`)
          .sort();
      case 'TXT':
        return (await resolver.resolveTxt(name)).map((c) => c.join('')).sort();
      case 'CAA':
        return (await resolver.resolveCaa(name))
          .map((c) => Object.entries(c).map(([k, v]) => `${k}=${v}`).join(' '))
          .sort();
      default:
        throw new Error(`unhandled type ${type}`);
    }
  } catch (e) {
    return [`<${e.code || e.message}>`];
  }
}

const oldR = await resolverFor(OLD_NS);
const newR = await resolverFor(NEW_NS);

let mismatches = 0;

const trim = (v) => (v.length > 96 ? `${v.slice(0, 96)}… (${v.length} chars)` : v);

async function compare(label, rows, mustCarry) {
  console.log(`\n=== ${label} ===`);
  for (const [type, name, mode = 'exact'] of rows) {
    const [a, b] = await Promise.all([query(oldR, type, name), query(newR, type, name)]);

    const identical = JSON.stringify(a) === JSON.stringify(b);
    const kept = a.every((v) => b.includes(v));
    const ok = mode === 'superset' ? kept : identical;

    let verdict;
    if (!mustCarry) verdict = identical ? 'SAME' : 'changed';
    else if (!ok) { verdict = 'MISMATCH'; mismatches++; }
    else verdict = identical ? 'SAME' : 'KEPT+ADDED';

    console.log(`\n${verdict.padEnd(10)} ${type} ${name}`);
    if (identical) {
      a.forEach((v) => console.log(`           ${trim(v)}`));
    } else {
      a.forEach((v) => console.log(`  vercel:  ${trim(v)}`));
      b.forEach((v) => console.log(`  cloud :  ${trim(v)}${mustCarry && !a.includes(v) ? '   <- added' : ''}`));
    }
  }
}

console.log(`old: ${OLD_NS}   new: ${NEW_NS}`);
await compare('must carry over — email and cert authority', CARRY_OVER, true);
await compare('expected to change — the site itself', SITE, false);

console.log(
  mismatches === 0
    ? '\nOK — everything that must carry over is byte-identical.'
    : `\nSTOP — ${mismatches} record(s) that must carry over do not match.`,
);
process.exit(mismatches === 0 ? 0 : 1);
