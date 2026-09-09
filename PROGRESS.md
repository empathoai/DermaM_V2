# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-08 — Lipo 360: add before/after block (cont. 53, media + data)

- **What:** via the `add-media` skill (Acción B, data-only — `TreatmentDetailPage` already reads `beforeAfter`). Client supplied one real before/after pair (side-profile torso, same client). Placed `lipo-360-antes.jpg` / `lipo-360-despues.jpg` in `public/assets/images/treatments/corporales/lipo-360/` (1000×1250; `optimize.js` recompressed to 124/76 KB), generated the `.webp` siblings. Added `beforeAfter.items` (1 pair) to the `'lipo-360'` entry in `src/data/treatmentPages.js` with Spanish `beforeAlt`/`afterAlt` traceable to the page copy ("drenaje linfático manual sobre cintura, abdomen y espalda", "contornos más definidos", "por sesiones").
- **Why:** DERMA.M change-request batch (2026-09-08) — the treatment page had no visual proof.
- **Compliance:** body-contouring before/after is Florida-sensitive ("no before/after for weight loss; cosmetic OK with 'results not typical' disclosure"). Images are a genuine same-client pair, no surgical markers → reads as desinflamación/contour over massage + lymphatic-drainage sessions, matching the page's "acompañamiento / no reemplaza las indicaciones de tu cirujano" framing. Kept the template's default block disclaimer (already a full "results vary / nothing guaranteed" disclosure). Alt says "protocolo estético" + "tras varias sesiones" — no surgical/weight-loss claim. Rationale in `DECISIONS.md` 2026-09-08.
- **Verified:** browser desktop + 375px on `/corporales/lipo-360` — block renders between "Para quién es" and FAQ (eyebrow "EVIDENCIA DE APOYO", headline "EVOLUCIÓN Y RESULTADOS ASISTIDOS"), both images serve as `.webp` 200 OK, not the `og-default` fallback, disclaimer visible, no console/network 404. `npm run test:visual` (server :3003): **33 passed, 1 failed** = pre-existing `Nosotros Page - Viewport` desktop-chrome only. `/corporales/lipo-360` is not in the visual spec → no baseline change. WCAG: `alt` present + meaningful, static images.
- **SEO/AEO/GEO:** positive — indexable image with keyword-rich alt + a visual E-E-A-T/evidence signal on a treatment page that had none.
- Commit `PENDING`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
