# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — /nosotros/nancy-nieto §2 "Historia": sin imagen, layout tipo Filosofía + credenciales en lista

- **Imagen fuera.** La sección 2 (`#founder-spotlight`) del bio dejaba de ser un `spotlightRow` de 2 columnas: se elimina todo el bloque de imagen (`spotlightMedia` → `MediaBlock` con la modelo stock `home/founder.jpg`). El hero de Nancy queda como único retrato de la página; las fotos vuelven en §4 (Academy). `home/founder.jpg` sigue en disco (lo referencia el mapa de migración).
- **Layout = Filosofía (`FounderBioPage.jsx`).** §2 pasa a `SectionHeader` (eyebrow + `<h2 id="founder-heading">`, `variant="light"`, `align="left"`) en la columna angosta + contenido en la ancha — mismo esqueleto que §3, sobre canvas claro `#F2F0F1` (no el dark de Filosofía). §2 (claro, "qué es") y §3 (oscuro, "en qué cree") quedan como par visual.
- **Credenciales en `<dl>` (`aboutPage.js`).** `historia.body` denso → `historia.credentials[]` (3 bloques: Estados Unidos / Ecuador / Formación continua) renderizados como `<dl>` con detalle de borde-izquierdo (mismo patrón que `.philosophySupport`). `body` queda solo con el párrafo narrativo. Sin `secondaryBody`. Puro reorden de copy ya vetada — sin banned words, sin nº de licencia, sin claims nuevos.
- **CSS.** Clases nuevas `.historia*` en `FounderBioPage.module.css` que copian el layout de `.philosophy*` (contenedor centrado, grid `1fr` → `4fr 6fr` ≥1024px, padding 96/120) con colores claros. `.spotlight*` intactas (las usa §4 Academy).
- **Verificación.** `:3000` desktop + mobile, consola limpia. `test:visual` **34/34 sin diffs** (el snapshot del bio solo cubre el hero). WCAG AA: `#4E4D4D`/`#363633` sobre `#F2F0F1` OK. `id="founder-spotlight"` se mantiene (ancla de `TeamMemberCard`).

---

**Pendiente próximo ciclo:** bloque `founderSpotlight` de `/nosotros` (AboutPage) — quitar la misma foto stock; el usuario mandará la foto real de Nancy (`about/nancy-nieto-fundadora.jpg`). NO borrar la sección (es el link-driver a la bio casi huérfana + anchor de E-E-A-T de la página About).

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
