# zonymouslabs.com

Marketing site for Zonymous Labs. One static page — Next.js 16 App Router,
exported statically, served from Firebase Hosting.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Static export into `./out` |
| `npm start` | Serve `./out` as production will |
| `npm run deploy` | `build` + deploy to Firebase Hosting |
| `npx tsc --noEmit` | Typecheck |

Check with `npm start` before deploying, not just `npm run dev` — the dev
server resolves things the static export does not.

## Layout

```
app/          layout (metadata, JSON-LD), page, globals.css, robots, sitemap
components/   18 section components, one per band of the page
lib/
  site.ts     name/url/description — single source for all metadata
  diagram.ts  shared SVG helpers
  hooks/      one hook per interactive diagram, plus useReveal
public/fonts/ 13 self-hosted woff2 subsets
reference/    the original design-canvas bundle it was converted from
scripts/      the one-shot conversion
docs/         deployment and DNS runbooks
```

## Before you edit

**Eight sections ship no JavaScript.** `Automation`, `Capabilities`,
`Engagements`, `Footer`, `GlobalReach`, `Pillars`, `SelectedWork` and `Writing`
are server components. Adding an event handler or a hook to one turns it into a
client component and ships its markup twice.

**`scripts/` regenerates `components/` and discards hand edits.** The page was
converted from a design-canvas bundle by script rather than by hand, so 105KB
of inline-styled markup and SVG survived intact. Once design work moves into
the React code, delete the scripts rather than fight them.

**Don't remove the `<noscript>` block in `app/layout.tsx`.** 40 elements ship at
`opacity:0` and are lifted by an IntersectionObserver. Without that rule the
page reads as blank to anything that doesn't run JavaScript.

**Don't reorder the `firebase.json` headers.** The first entry must stay first
and must stay `"**"` — [docs/deploy.md](docs/deploy.md) explains why.

**Inline styles are intentional.** Converting 105KB of them to Tailwind by hand
is a large surface for visual drift. Do it per-section when a section gets
reworked, not in one pass.

## Docs

- [docs/deploy.md](docs/deploy.md) — Firebase Hosting setup, the cache-header rule
- [docs/dns-migration.md](docs/dns-migration.md) — moving the domain off Vercel
