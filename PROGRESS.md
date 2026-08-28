# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-28 — Track A #2: sub-tag de hero `West Palm Beach, FL` con fuente única
- **Hallazgo que re-encuadró el ítem:** la ciudad YA estaba dentro del `<h1>` en las 3 landings — `PageHero.jsx:70-73` renderiza `localTag` como `<span>` hijo del `<h1>`. §S5.2 del findings doc se escribió sobre un estado anterior (la landing no pasaba `localTag`). El trabajo real: consistencia NAP del string del sub-tag + fuente única para frenar el drift.
- **Audit:** `"Medical Spa · West Palm Beach"` duplicado en ~10 call sites, 4 mecanismos (literal en `LandingPage.jsx` + `TreatmentDetailPage.jsx` + `Hero.jsx` de Home; dato en `categoryPages.js` ×6 hubs + `aboutPage.js`). Sin fuente común → causa raíz del drift.
- **Cambio:** nuevo `src/data/siteMeta.js` → `export const HERO_LOCAL_TAG = 'Medical Spa · West Palm Beach, FL'`. Los ~10 call sites la importan. `FL` (no "Florida") alinea hero ↔ `<title>` de Home ↔ address GBP ↔ footer. Prosa / meta descriptions / schema (`addressLocality`, `areaServed` City name) **intactos** — solo el sub-tag del hero. `/nancy-nieto` sigue sin sub-tag.
- **Verificación:** las 6 superficies de hero muestran `Medical Spa · West Palm Beach, FL`; `/nancy-nieto` sin tag. `grep "Medical Spa · West Palm Beach" src/` → solo `siteMeta.js`. `test:visual` **34/34 sin diffs** (el ", FL" cae dentro de la tolerancia del 2%, sin re-baseline). Screenshot Home hero: 1 línea, sin romper layout. Commit `4a4603e`.
- Spec: `docs/superpowers/specs/2026-08-28-hero-localtag-city-state-consistency-design.md`.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md) (entradas de sesiones cerradas hasta 2026-08-28).
