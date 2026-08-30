# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — /contacto bloque de dos columnas: tarjetas simétricas + mapa a ancho completo

- **`Contacto.jsx` + `Contacto.module.css` (2 archivos, ~40 líneas).** El bloque tenía la tarjeta izquierda ("Empieza tu evaluación") y la derecha ("Sede Principal") con **alturas distintas** (bordes inferiores desalineados → parecía bug) y el **mapa colgando solo bajo la columna derecha**, con el cuadrante inferior-izquierdo vacío. Rediseño (Opción A del brainstorm):
  - `.twoColumnGrid` @≥1024: `1.1fr 0.9fr` → `1fr 1fr`; `align-items: flex-start` → `stretch` (tarjetas mismo ancho y misma altura, bordes inferiores alineados — 526px c/u @desktop).
  - `.formColumn` → `display:flex; flex-direction:column`; `.startBlock` → `flex:1`; `.startPhoneLine` → `margin: auto 0 0 0` + `padding-top: 24px` (línea de teléfono anclada al fondo, sin perder aire en móvil).
  - **Mapa** sale de la columna derecha (JSX): `.mapCardSection` pasa a ser hijo directo de `.twoColumnContainer`, **ancho completo** (1440px) debajo de ambas tarjetas. `margin-top` 40px / 60px @desktop (= gap del grid).
  - Wrapper `.infoColumn` eliminado (JSX + regla CSS — quedaba huérfano con este cambio).
- **Contexto:** cambio detonado por review del usuario del rebuild de `/contacto` (ciclo anterior). Se verificó que el skill `impeccable` **nunca se corrió** sobre `/contacto` (`.impeccable/critique/` solo tiene 2 archivos del 2026-06-25) y que el CSS bespoke de la página diverge de los tokens de `DESIGN.md` (gutters hard-coded en vez de `clamp(24px,4vw,64px)`). El fix de gutter se probó y se **revirtió** — era real pero no era lo que el usuario veía mal; queda anotado como follow-up.
- **Verificación.** DOM medido en `:3000`: grid `690px 690px` stretch, `bottomsMatch: true`, mapa `W:1440` full-width, gap 60px. Móvil 390px: stack en 1 columna, 3 bloques a ancho completo, espaciado del teléfono preservado. Consola limpia (los 500 vistos eran estados intermedios de HMR mientras se editaba). `test:visual` `Contacto Page`: **pasa sin diff** (el snapshot solo cubre el hero). WCAG / compliance: sin cambios de semántica, foco, contraste ni copy.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
