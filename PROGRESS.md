# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — /faciales/oxigenoterapia-facial: bloque de procedimiento (video + still)
- **Template (`feat`).** `TreatmentDetailPage.jsx` (2 líneas): el render de `BeforeAfterGrid` pasa a aceptar `eyebrow`/`headline` desde `customDetails.beforeAfter` con los strings actuales como fallback → retrocompatible; capilar/acné/PRF sin cambio (verificado en browser). `BeforeAfterGrid.jsx` y su CSS **sin tocar**.
- **Data + media.** Entry `oxigenoterapia-facial`: objeto `beforeAfter` con `eyebrow: 'EL PROCEDIMIENTO'`, headline propio, slot `before` = video `.mp4` del procedimiento (cápsula de O2 + panel LED), slot `after` = still de detalle, labels `EN CABINA` / `EQUIPO`, disclaimer de procedimiento (sin claim de resultado). Video en `public/assets/images/treatments/faciales/oxigenoterapia-facial/` transcodificado a H.264, `-an`, 2.6 MB; poster + still extraídos con ffmpeg (79/67 KB) + `.webp`.
- **Verificación.** `:3000`: video autoplaya muted+loop (`readyState 4`), 2º slot con still, sin fallback gris, consola limpia, assets 200. Tamaño del bloque intacto (tiles 4:5, 1350px vs 1370px en acné). `test:visual` 34/34 sin diffs. Compliance OK (footage real, alt trazable a lo que se ve, sin banned words). Ver DECISIONS 2026-08-30.
- **Pendiente (no en este ciclo).** El copy del entry + la FAQ "bruma de oxígeno" describen "chorro a alta presión" — no matchea la cápsula. Reescribir en ciclo aparte. Anotado en `NEXT.md`.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
