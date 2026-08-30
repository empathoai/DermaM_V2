# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — Heroes /nosotros y /nancy-nieto: CTA primario → "AGENDA TU VALORACIÓN"
- `src/data/aboutPage.js` (2 líneas): `primaryCta` de `aboutPage.hero` y `founderBioPage.hero` pasa de `"RESERVAR"` a `"AGENDA TU VALORACIÓN"`. Eran los **únicos 2 heroes del sitio** que quedaban en "RESERVAR" — supersede la decisión del mismo día que los había alineado a "RESERVAR" (premisa equivocada: se creía que los ~10 heroes de tratamiento decían "RESERVAR", pero `TreatmentHero` y `LandingPage` ya default a "AGENDA TU VALORACIÓN", y los heroes de hub no tienen CTA).
- Ahora todos los heroes con CTA + el navbar dicen el mismo string. Eyebrows sin tocar (el eco eyebrow=botón que se temía es en `FinalCTA` de hubs, no en heroes).
- **Verificación:** browser mobile 375px + desktop, ambos heroes, sin wrap. `test:visual` 22/22 sin diffs (botón fuera del área capturada). Compliance OK, WCAG OK (solo texto). Commit `a25e317`. Ver DECISIONS 2026-08-29.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
