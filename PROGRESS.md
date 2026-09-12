# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — Add missing favicon `<link>` (cont. 74, code) — `4b5ba7e`

- `index.html` had a `favicon.ico` file in `public/assets/images/global/` but no `<link rel="icon">` referencing it — browsers never loaded it. Added `<link rel="icon" href="/assets/images/global/favicon.ico" />` in `<head>`.
- Verified live: navigated to `/assets/images/global/favicon.ico` on the dev server, confirmed 200 + valid 32×32 ico.
- `test:visual` not gated per `CLAUDE.md` §DoD (single `<head>` meta link, no CSS/class/layout change) — ran anyway since already in flight, passed with no diffs.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
