# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — /nosotros hero: placeholder interino = `contact/hero.jpg` (recepción real), no stock genérica

- **1 línea, data-only.** `aboutPage.js:11` `hero.backgroundImage`: `/assets/images/about/hero.jpg` (nunca existió → `PageHero` caía a `global/og-default.webp`, modelo stock de OG) → `/assets/images/contact/hero.jpg` (recepción real de DERMA.M, ya optimizada 177 KB + `.webp` 131 KB). Cross-ref al asset de `contact/`, no se copia a `about/`.
- **Interino.** El slot `about/hero.jpg` sigue esperando foto propia (composición de equipo, pendiente de que el usuario la consiga). Cuando llegue → `add-media` la pone en `about/hero.jpg` (+ `.webp`) y se revierte esta línea.
- **Trade-off:** mismo hero en `/contacto` y `/nosotros` hasta la definitiva (cosmético).
- **Verificación.** `:3000`: la recepción pinta, `.webp` 200 (PageHero resuelve el sibling), overlay degradado mantiene el H1/body blancos legibles (mismo patrón que el hero de `/contacto`, ya shippeado). Sin `test:visual` (swap de bg en 1 página, gate DoD → skip). Sin cambio de copy → compliance N/A.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
