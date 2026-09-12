# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — Close CPY-07: stale audit checkbox, already fixed in code (cont. 77, docs only) — `084bee9`

- User pushed back on a stale "CPY-07 still open" tracking line. Verified against the actual code (not the audit doc): grepped `headline:`/`problemContextHeadline:`/`question:`/`eyebrow:`/`label:` in `categoryPages.js` and `treatmentPages.js` — no Title Case anglosajón anywhere, ALL-CAPS reserved to short eyebrows, sentence case everywhere else. Already resolved by Task 25 (2026-08-31); the tracking docs were never updated after that fix landed.
- Corrected `auditorias-externas/resultados/copy.md` (CPY-07 row) and `NEXT.md`. All 27 external-audit findings now closed.
- Doc-only, mechanical — no DECISIONS.md entry.
- `logo_dermam_nav.svg` shows as modified in this cycle's diff — the user replaced that source file directly (mtime confirms, not an agent edit) right before asking to use it as the icon source.
- Verified: `apple-touch-icon.png` serves 200 OK on the dev server. `test:visual` not gated — meta/head-only change, no visible layout/CSS.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
