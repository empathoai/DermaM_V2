# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — /faciales/tratamiento-acne: sección antes/después
- **Media (`feat`).** `src/data/treatmentPages.js`: `beforeAfter: { items: [...] }` (1 par) en el entry `tratamiento-acne` — mismo patrón que `tratamiento-capilar`, el template `TreatmentDetailPage` ya lo renderiza, sin cambio de componente. Imágenes del usuario en `public/assets/images/treatments/faciales/tratamiento-acne/tratamiento-acne-{antes,despues}.jpg` (116/131 KB, 1000×1250) + `.webp` sibling. Alt español trazable al copy del entry, sin banned words.
- **Verificación.** Browser `:3000`: sección "EVIDENCIA DE APOYO" pinta con imágenes reales (no `og-default`), sin errores de consola. `test:visual` omitido (edit data-only en `src/data/*`, gate CLAUDE.md §DoD). WCAG: alt presente y descriptivo. Compliance OK (disclaimer de resultados individuales lo pone el template).

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
