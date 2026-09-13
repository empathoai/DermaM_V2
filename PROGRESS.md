# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — PageSpeed API tooling + root-caused the residual cache-lifetime flag

- Added `npm run pagespeed [mobile|desktop] [url]` (`scripts/pagespeed.sh`) — calls Google's PageSpeed Insights v5 API directly against the live published site (not local, unlike `npm run lighthouse`), printing score/FCP/LCP/TBT/CLS plus the cache-lifetime audit's flagged items. Key goes in `.env.pagespeed` (gitignored, `.env.pagespeed.example` committed as template).
- **Root-caused via `superpowers:systematic-debugging`** why `pagespeed.web.dev` kept flagging `hero.mp4` at `cacheLifetimeMs: 0` (~3.2 MB) despite the prior cycle's `.htaccess` fix showing correct headers on manual checks: Hostinger's `hcdn` CDN drops the `Cache-Control` header entirely when serving the video from its edge cache (`HIT`) — it only appears on `MISS`/`EXPIRED` (origin passthrough). `hero.jpg`/JS don't show this. No origin-side fix exists; documented in `BACKLOG.md` + `DECISIONS.md` with options (Hostinger support ticket, or move video off `hcdn`).

## 2026-09-12 — `.htaccess` cache-control hardening for static assets

- **Why:** `pagespeed.web.dev` flagged 3.2 MB of potential savings from missing/weak cache headers — the biggest remaining mobile lever per `NEXT.md`.
- `public/.htaccess` `mod_expires` block: added `video/mp4`, `video/webm`, `font/woff`, `font/woff2`, `font/ttf`, `image/x-icon` (previously uncached — `hero.mp4` had no cache header at all); bumped `text/css`/`application/javascript` from 1 month to 1 year (Vite content-hashes these filenames, so they're safe to cache long); added `text/javascript` alongside `application/javascript`.
- Added a `Cache-Control: public, max-age=31536000, immutable` header scoped to `/assets/` via `mod_setenvif` + `Header set ... env=`, since `<FilesMatch>` matches basenames only and can't filter by directory path.
- Config-only change (no runtime/render impact) — no `test:visual` run, per DoD gate; verification is the next live PageSpeed re-check post-deploy. Commit `6d6927c`.
- **Deployed (`npm run deploy`) and re-checked live 2026-09-12.** Live header checks confirm `hero.jpg`/`hero.mp4` now serve `Cache-Control: public, max-age=31536000, immutable`; `index-*.js` stays capped at 7 days by Hostinger's `hcdn` CDN layer regardless of origin headers (recorded in `BACKLOG.md`). `pagespeed.web.dev` mobile re-check: 69 (unchanged), cache-lifetime audit still flags `hero.mp4` at 0ms despite the correct live header — likely CDN edge-propagation lag at crawl time, not a real regression; needs a later re-check (also in `BACKLOG.md`).

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
