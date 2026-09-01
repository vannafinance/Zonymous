// One-shot: unpack the original dc-canvas bundle into fonts + globals.css.
// Kept in-repo so the extraction is reproducible, not a lost manual step.
import fs from 'node:fs';
import zlib from 'node:zlib';
import path from 'node:path';

const lines = fs.readFileSync('reference/original-bundle.html', 'utf8').split('\n');
const manifest = JSON.parse(lines[170]);
const tpl = JSON.parse(lines[178]);
const helmet = tpl.slice(tpl.indexOf('<helmet>') + 8, tpl.indexOf('</helmet>'));

const faceBlocks = helmet.match(/@font-face\s*\{[^}]*\}/g) || [];
const slug = {};
for (const b of faceBlocks) {
  const fam = (b.match(/font-family:\s*['"]([^'";]+)/) || [])[1] || 'font';
  const u = (b.match(/url\("([0-9a-f-]{36})"\)/) || [])[1];
  if (u) slug[u] = fam.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

fs.mkdirSync('public/fonts', { recursive: true });
const map = {};
for (const [uuid, e] of Object.entries(manifest)) {
  if (!e.mime.startsWith('font/')) continue;
  let buf = Buffer.from(e.data, 'base64');
  if (e.compressed) buf = zlib.gunzipSync(buf);
  const name = `${slug[uuid] || 'font'}-${uuid.slice(0, 8)}.woff2`;
  fs.writeFileSync(path.join('public/fonts', name), buf);
  map[uuid] = `/fonts/${name}`;
}

let fontCss = faceBlocks.join('\n');
for (const [u, p] of Object.entries(map)) fontCss = fontCss.split(`"${u}"`).join(`"${p}"`);
const leftover = fontCss.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-/);
if (leftover) throw new Error(`unrewritten uuid remains: ${leftover[0]}`);

const baseCss = helmet.slice(helmet.lastIndexOf('<style>') + 7, helmet.lastIndexOf('</style>')).trim();
fs.writeFileSync('app/globals.css', `${fontCss}\n\n${baseCss}\n`);

console.log(`fonts: ${Object.keys(map).length}`);
console.log(`globals.css: ${fs.statSync('app/globals.css').size} bytes`);
