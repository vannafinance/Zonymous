# DNS migration — zonymouslabs.com off Vercel

**Status: not started.** Both apex and `www` return `402 DEPLOYMENT_DISABLED`
— the site is down, not merely at risk.

The Vercel team "Vanna Group" is blocked, and the Vercel DNS panel refuses all
edits (`npx vercel dns ls` fails with a permissions error). Records therefore
**cannot** be changed in Vercel. The only way out is changing nameservers at
the registrar, which bypasses Vercel entirely.

`vanna.finance` was already migrated this way; the same playbook applies.

## What's there now

Verified by live query, not assumed.

| | |
|---|---|
| Registrar | **Spaceship, Inc.** — *not* Namecheap, which is vanna.finance |
| Nameservers | `ns1.vercel-dns.com`, `ns2.vercel-dns.com` |
| Domain status | `clientTransferProhibited` — blocks registrar transfers, **not** nameserver changes |
| Apex A | Vercel IPs, to be replaced |
| Email | **Spacemail** — `mx1.spacemail.com`, `mx2.spacemail.com` |
| SPF | `v=spf1 include:spf.spacemail.com ~all` |
| DKIM | present, selector `spacemail` (408 chars) |
| DMARC | **absent** — worth adding during the migration |
| CAA | allows `pki.goog`, `letsencrypt.org`, `sectigo.com` — Firebase certs will issue |

**A wildcard `*` record exists.** `zzq9xrandom.zonymouslabs.com` resolves, so
every probed subdomain returns Vercel IPs and real subdomains cannot be
distinguished from wildcard hits from outside. Do not build the zone from
guesses.

The DKIM value is currently only retrievable from Vercel's DNS, and that
account is blocked. It is recoverable from the Spacemail panel if lost, but
painfully — capture it before touching anything.

## Order of operations

The one thing not to get wrong.

1. **Screenshot the full Vercel DNS record list** (Domains → zonymouslabs.com →
   DNS Records). Capture Name, Type, Value, TTL, Priority for every row. The
   wildcard makes this the only source of truth.
2. **Verify every value with a DNS query.** Never transcribe from a screenshot
   — on vanna.finance an `_acme-challenge` value rendered as `8el` when the
   real value was `8eI` (capital i).
3. **Deploy to Firebase Hosting** and confirm on `zonymous-website.web.app`.
4. **Build the Cloud DNS zone** with every record, including MX, SPF and DKIM.
5. **Query the new nameservers directly** and confirm MX/SPF/DKIM answer
   correctly — *before* switching.
6. **Only then change nameservers at Spaceship.**
7. Wait 2–3 days of everything working.
8. Only then clean up anything in Vercel.

> **Never remove the domain from Vercel before step 6.** Vercel's nameservers
> stay authoritative until then. Deleting the zone would take down DNS for the
> whole domain — website *and email*.

`www` redirects to the apex; the apex is canonical. Set that up when adding the
custom domain in the Firebase console, not in `firebase.json` — Firebase
redirects are path-based, not host-based.

Cloud DNS nameservers are assigned per zone. Read them with
`gcloud dns managed-zones describe <zone> --format="value(nameServers)"` — do
not reuse vanna.finance's (`ns-cloud-e1..e4`), they may differ.

## Commands

`dig` is unavailable on Windows. Use `nslookup` or DNS-over-HTTPS. `nslookup`
cannot query CAA — read CAA from `dns.google` or `gcloud`.

```bash
# any record, authoritative, no auth needed
curl -s "https://dns.google/resolve?name=zonymouslabs.com&type=MX"

# registrar / delegation
curl -s -A "Mozilla/5.0" https://rdap.verisign.com/com/v1/domain/zonymouslabs.com

# query the new zone BEFORE switching nameservers
nslookup -type=MX zonymouslabs.com ns-cloud-XX.googledomains.com

# create + populate the zone
gcloud dns managed-zones create <zone> --dns-name="zonymouslabs.com." --visibility=public
gcloud dns record-sets import <file>.zone --zone=<zone> --zone-file-format
gcloud dns record-sets list --zone=<zone> --format="table(name,type,ttl,rrdatas.list())"
```

## Open items

- **Who can change nameservers in the Spaceship panel?** The founder holds
  registrar access.
- **Does anything other than Spacemail send mail for this domain** (Mailchimp,
  SendGrid, HubSpot)? The current SPF authorises only `spf.spacemail.com`, so
  any other sender is already soft-failing and would need adding.
