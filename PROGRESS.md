# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — `.htaccess` cache-control hardening for static assets

- **Why:** `pagespeed.web.dev` flagged 3.2 MB of potential savings from missing/weak cache headers — the biggest remaining mobile lever per `NEXT.md`.
- `public/.htaccess` `mod_expires` block: added `video/mp4`, `video/webm`, `font/woff`, `font/woff2`, `font/ttf`, `image/x-icon` (previously uncached — `hero.mp4` had no cache header at all); bumped `text/css`/`application/javascript` from 1 month to 1 year (Vite content-hashes these filenames, so they're safe to cache long); added `text/javascript` alongside `application/javascript`.
- Added a `Cache-Control: public, max-age=31536000, immutable` header scoped to `/assets/` via `mod_setenvif` + `Header set ... env=`, since `<FilesMatch>` matches basenames only and can't filter by directory path.
- Config-only change (no runtime/render impact) — no `test:visual` run, per DoD gate; verification is the next live PageSpeed re-check post-deploy. Commit `6d6927c`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
