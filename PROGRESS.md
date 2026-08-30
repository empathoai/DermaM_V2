# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — /faciales/oxigenoterapia-facial: copy a modalidad cápsula
- **Fix (`fix`).** `src/data/treatmentPages.js` entry `oxigenoterapia-facial`: `heroDescription`, `whatIsBody`, `application` ("Nebulización" → "Cápsula de oxígeno") y `faq[0]` ("bruma de oxígeno") describían una pistola de O2 a alta presión. La sesión real (video del propio entry) es cápsula transparente + bruma de activos + luz LED, sin chorro sobre la piel. Reescrito para que matchee. Sin banned words (cross-check `MEDICAL_COMPLIANCE.md`). Data-only, sin `test:visual`. Render verificado en `:3000`. Cierra el ítem abierto por el ciclo del bloque de procedimiento.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
