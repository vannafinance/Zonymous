# Deploying

The site is a pure static export — no SSR, no API routes, no middleware.
`npm run build` writes a plain static directory to `out/`, and Firebase Hosting
serves it.

Hosting lives in the GCP project **`zonymous-website`** (`.firebaserc`).

## First-time setup

`firebase-tools` is a devDependency, so `npx firebase` works after
`npm install` — no global install needed.

```bash
npx firebase login
npx firebase projects:list      # zonymous-website must appear
npm run deploy
```

Required APIs are already enabled on the project (`firebase`,
`firebasehosting`, `dns`).

If `zonymous-website` does **not** appear in `projects:list`, Firebase has not
been enabled for the Google Workspace domain that owns it. A super admin turns
it on at **admin.google.com → Apps → Additional Google services → Firebase →
ON**. After that, `firebase projects:addfirebase` may still return 403 even for
a project Owner — that is expected and unnecessary. If the project shows in
`projects:list`, just deploy.

Verify on `https://zonymous-website.web.app` before pointing any DNS at it.

## Rollback

```bash
npx firebase hosting:rollback
```

Deploys are atomic and every release is retained, which is most of the reason
this is on Firebase Hosting rather than a GCS bucket.

## The cache-header rule that must not move

The first entry in `firebase.json`'s `headers` array **must stay first and must
stay `"**"`**.

`cleanUrls: true` serves pages at directory URLs — `/`, `/404/`. A glob like
`**/*.@(html|txt)` does **not** match those, so without a catch-all the
homepage silently falls through to Firebase's `max-age=3600` default and stale
HTML gets served for an hour after every deploy. This bit vanna.finance.

Firebase applies **every** matching rule and the **last one wins per header
key**. That is what makes the ordering work: the `**` entry sets the baseline
`Cache-Control: max-age=0, must-revalidate` plus the security headers, and the
asset-specific rules that follow override only `Cache-Control`, leaving the
security headers intact.

| Path | Cache-Control |
|---|---|
| `**` (baseline) | `public, max-age=0, must-revalidate` |
| `/_next/static/**` | `public, max-age=31536000, immutable` |
| `/fonts/**` | `public, max-age=31536000, immutable` |
| images | `public, max-age=86400, stale-while-revalidate=604800` |

Both immutable paths are content-addressed — Next hashes its chunks, and the
font filenames carry the source asset's uuid — so they change whenever the
bytes change.

## Why Firebase Hosting and not GCS + Load Balancer + Cloud CDN

Both are GCP. Firebase Hosting is not a separate platform; the site lives in
the same `zonymous-website` project, same billing account, same IAM.

The load-balancer path needs six resources (bucket, backend bucket, URL map,
target HTTPS proxy, forwarding rule, static IP) plus a managed cert, and the
**forwarding rule alone costs ~$18/month before anyone visits**. Firebase has
no fixed cost, a real free tier, one config file, free auto-renewing TLS, and
atomic deploys with one-command rollback.

The crossover measured for vanna.finance is roughly **3,460 visits/day
(~104k/month)** — past that, cheaper egress beats the fixed fee.

Revisit if traffic gets there, or if Cloud Armor, geo-restrictions or signed
URLs are needed. If the site ever grows SSR or API routes, Firebase Hosting
cannot serve it at all and the answer becomes Cloud Run.
