# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — `/nancy-nieto`: `.spotlightTitle` desktop 56px → 44px
- `FounderBioPage.module.css` `@media (min-width:1024px)` `.spotlightTitle`: **56px → 44px**. Base 40px (mobile/tablet) sin tocar.
- Motivo: 56px era casi indistinguible del H1 de hero (64px) y empujaba los títulos largos de "Historia" y "Academy" a 4 líneas en la columna angosta. Ahora "Historia" son 3 líneas; jerarquía 64→44 clara.
- Afecta las 2 secciones que comparten `.spotlightTitle` (Historia + Academy) — quedan consistentes.
- **Verificación:** `npm run test:visual` 34/34 sin diffs. El H2 de "Historia" está a ~1536px del top → fuera del viewport que captura el snapshot `nancy-nieto`, no hubo re-baseline.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
