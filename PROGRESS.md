# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — /nosotros: hero copy recortado (H1 + body)

- **Data-only (`feat`).** `aboutPage.js` → `hero`: `title` `CUIDADO ESTÉTICO CON CRITERIO, EXPERIENCIA Y ATENCIÓN PERSONAL` (58 ch, 6 líneas) → `CRITERIO, EXPERIENCIA Y ATENCIÓN PERSONAL` (40 ch, ~4). `body` reescrito a `En DERMA.M cada plan empieza por entender tus objetivos. Estética informada y acompañada, no improvisada.` (lidera con la escucha = diferenciador; saca "medical spa en West Palm Beach" que el `localTag` ya dice).
- **Alcance.** Solo 2 strings. `hero.title` alimenta únicamente el `<h1>` visual del `PageHero`; el `<title>`/meta de SEO están hardcodeados en `Nosotros.jsx`, sin tocar. Ningún componente.
- **Verificación.** `:3000`: H1 4 líneas, body 2, CTAs OK, consola limpia. Compliance: sin banned words, "no improvisada" = contraste de proceso, no promesa. `test:visual`: re-baseline intencional de `nosotros-viewport-desktop-chrome` y `nosotros-founder-with-link-mobile-safari` (hero más corto → todo sube / el scroll de la sección de fundadora arranca distinto); resto 0-diff, 34/34 tras re-basear.
- Spec: `docs/superpowers/specs/2026-08-30-nosotros-hero-copy-trim-design.md` (gitignored).

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
