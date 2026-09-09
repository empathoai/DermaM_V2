# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-08 — Limpieza facial landing: swap ANTES/DESPUÉS images (cont. 51, assets)

- **What:** client reported the before/after photos on `/limpieza-facial-profunda` were reversed. Swapped the 4 asset files on disk — `limpieza-facial-profunda-antes.{jpg,webp}` ↔ `limpieza-facial-profunda-despues.{jpg,webp}` in `public/assets/images/landings/limpieza-facial-profunda/`. No change to `src/data/landingPages.js` (the `before`/`after` slot paths + `beforeAlt`/`afterAlt` stay correct and keyword-named).
- **Why:** DERMA.M change-request batch (2026-09-08). Showing a worse "después" than "antes" misrepresents the result.
- **Compliance:** unchanged — still real client-provided images (`MEDICAL_COMPLIANCE` Before & After rule); only which is which was corrected. Reference disclaimer already present on the block.
- **Verified:** browser desktop on `/limpieza-facial-profunda` after hard reload — ANTES now shows the oilier/pre-treatment skin, DESPUÉS the matte/renovated skin; alt text matches. `npm run test:visual` (server :3003): **33 passed, 1 failed** = only the pre-existing `Nosotros Page - Viewport` desktop-chrome (`about/hero.jpg` placeholder). The `Limpieza Facial Landing - Viewport` snapshots do NOT frame the before/after grid → no baseline change.
- **SEO/AEO/GEO:** neutral — filenames and alt unchanged. Correctness/credibility fix only.
- Commit `PENDING`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
