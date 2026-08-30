# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — /faciales/rejuvenecimiento-facial: sección antes/después (labels custom)
- **Data + media (`feat`).** `beforeAfter` (1 item) en el entry `rejuvenecimiento-facial`. El cliente armó los collages: slot `before` = collage antes/después de 2 paneles (label `ANTES - DESPUÉS`), slot `after` = collage de progresión de 3 paneles (label `RESULTADOS`). Imágenes 1000×1250 (= 4:5, sin recorte), `optimize.js` (130/178 KB) + `.webp`. `rejuvenecimiento-facial-despues.jpg` que había puesto el usuario lo borró él al combinar en `rejuvenecimiento-facial.jpg`.
- **Sin cambio de componente.** `TreatmentDetailPage` ya pasa `beforeLabel`/`afterLabel` desde la data. No hay slot de "imagen suelta" en la sección — todo es por pares; los labels custom fueron la salida sin tocar el componente.
- **Verificación.** `:3000`: 2 tiles, labels "ANTES – DESPUÉS" / "RESULTADOS", 2 `.webp` cargan (1000×1250, no rotas), consola limpia. Alt trazable al copy del entry, sin banned words. `test:visual` skip (data-only, ruta no snapshoteada).
- **En disco sin trackear (otro ciclo, `/nosotros`):** `about/team/dr-tony-diaz.mp4`, `about/team/miguel-ramos.mp4`.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
