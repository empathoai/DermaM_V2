# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — /faciales/manchas-cicatrices: sección antes/después (2 pares)
- **Data + media (`feat`).** `beforeAfter` con 2 `items` en el entry `manchas-cicatrices`. Fotos del cliente llegaron como collage vertical (antes arriba / después abajo por imagen, 2 imágenes) → partidas y recortadas a 4:5 centrado en la mejilla con ffmpeg (costura en y≈612/627, no exactamente 625), sin línea divisoria. 4 JPG ~15–31 KB + `.webp`; los 2 collages originales no se versionan.
- **Sin cambio de componente.** `TreatmentDetailPage` ya renderiza "EVIDENCIA DE APOYO / EVOLUCIÓN Y RESULTADOS ASISTIDOS" + disclaimer estándar con `items.length > 0`. Acá el encabezado de resultados **sí corresponde** (es antes/después real, a diferencia de oxigenoterapia/plasma-frío).
- **Verificación.** `:3000`: 2 filas ANTES/DESPUÉS, 4 `.webp` cargan (496×600, no rotas), consola limpia. Alt trazable al copy del entry (hiperpigmentación solar, tono irregular, atenuación), sin banned words, imágenes reales del cliente. `test:visual` skip (data-only, ruta no snapshoteada).

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
