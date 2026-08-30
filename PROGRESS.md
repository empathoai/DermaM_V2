# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — /faciales/peel-coreano: 2do par antes/después
- **Data + media (`feat`).** Se agrega un `item` a `beforeAfter.items` del entry `peel-coreano` (queda 2 filas). Imágenes separadas del cliente (1000×1250) → `optimize.js` (~112 KB) + `.webp`. Par 1 (`peel-coreano-antes/despues.jpg`, del 27/08) sin cambios; nuevos = `-antes-2`/`-despues-2` (no se renombra el par 1 a `-1` para no tocar data que funciona).
- **Sin cambio de componente.** Alt trazable al copy del entry (textura irregular, tono desigual → piel lisa y luminosa), sin banned words, imágenes reales del cliente.
- **Verificación.** `:3000`: 2 filas ANTES/DESPUÉS, 4 `.webp` cargan (1000×1250, no rotas), consola limpia. `test:visual` skip (data-only, ruta no snapshoteada).

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
