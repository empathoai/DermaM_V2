# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — /faciales/plasma-frio: bloque de procedimiento (video + still)
- **Data + media (`feat`).** Entry `plasma-frio` en `src/data/treatmentPages.js`: objeto `beforeAfter` (`eyebrow: 'EL PROCEDIMIENTO'`, headline propio, labels `EN CABINA`/`EQUIPO`, disclaimer de procedimiento). Slot `before` = video del electrodo de vidrio con gas ionizado (HEVC 41 s/38 MB → H.264, `-an`, recortado a 18 s, 2.78 MB); slot `after` = still de detalle. Poster + still (41/45 KB) + `.webp`. En `public/assets/images/treatments/faciales/plasma-frio/`.
- **Sin cambio de componente.** `TreatmentDetailPage.jsx` (override de `eyebrow`/`headline` ya shippeado en el ciclo anterior) y `BeforeAfterGrid` sin tocar.
- **Verificación.** `:3000`: video autoplaya muted+loop (`readyState 4`), still en 2º slot, disclaimer OK, sección 1350px (= oxigenoterapia, sin expansión), consola limpia. `test:visual` 34/34 sin diffs. Compliance OK (alt trazable a "gas ionizado"/"plasma frío", sin banned words).

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
