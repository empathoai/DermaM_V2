# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-08 — Limpieza FAQ: "al salir del spa" → "después de la sesión" (cont. 52, copy)

- **What:** one FAQ question on `/limpieza-facial-profunda` ([landingPages.js:328](src/data/landingPages.js)) reworded — "¿Qué cuidados posteriores debo seguir al salir del spa?" → "…después de la sesión?". It was the only line on the page calling the location "el spa" (off-voice vs the rest of the block, which uses "Derma.M" / "la sesión" / "el procedimiento").
- **Why:** DERMA.M change-request batch (2026-09-08); user flagged the "spa"-only phrasing as inconsistent.
- **Verified:** browser desktop on `/limpieza-facial-profunda` after hard reload — question renders. Copy-only edit in `src/data/*`; `test:visual` not gated. `faq-consistency.spec.js` checks FAQ structure/a11y, not question text → unaffected. No `MEDICAL_COMPLIANCE` impact.
- **SEO/AEO/GEO:** neutral-positive — "después de la sesión" is natural post-care query phrasing; "al salir del spa" is not a search pattern. No keyword loss ("limpieza facial profunda" saturated across the other FAQ items).
- Commit `PENDING`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
