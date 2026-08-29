# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — Footer: Accesibilidad + Recursos legales en el bottom bar (auditoría 1c)
- `Footer.jsx` bottom bar — de `Política de privacidad | Términos de uso` a `… | Accesibilidad | Recursos legales`. `/accessibility` (postura ADA) + `/legal` (hub que agrupa privacidad, términos, disclaimer, política de reservas, accesibilidad). Labels de los `<title>` de cada página.
- Verificado en `:3000`: 4 links visibles a ancho desktop (viewport real 1434px), envuelven a 2 filas en mobile (`flex-wrap`). Sin `test:visual` (1 componente).
- Cierra ítem **1c** de la auditoría del footer. Commit `ffc0e0f`.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
