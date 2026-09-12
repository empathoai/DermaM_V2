# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — Fix: normalize brand name casing to `DERMA.M` sitewide (V1.0.1)

- Nancy flagged inconsistent "Derma.M"/"DERMA.M" casing site-wide. Normalized to `DERMA.M` in 49 files: `index.html` title, all `src/data/*.js`, components with literal brand text, all pages/routes, `public/llms.txt`/`robots.txt`/`.htaccess` comments, team vCards, `metadata.json`, and operational docs (`CLAUDE.md`, `DESIGN.md`, `PRODUCT.md`, `MEMORY.md`, `DECISIONS.md`). Left `graphify-out/` (cache), `_audit/`, `auditorias-externas/` (historical snapshots) untouched.
- Pure text change, no layout risk — full `test:visual` suite: 17/17 passed, no re-baseline needed.
- `package.json` bumped `1.0.0` → `1.0.1` per the footer-version-bump rule (user-visible copy change).
- Commit: `1ddc9d7`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
