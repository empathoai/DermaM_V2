# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — /capilar/tratamiento-capilar: sección antes/después + skill add-media ajustada
- **Media (`feat`).** `src/data/treatmentPages.js`: `beforeAfter: { items: [...] }` (1 par) en el entry `tratamiento-capilar` — el template `TreatmentDetailPage` ya lo renderiza, sin cambio de componente. Imágenes del usuario en `public/assets/images/treatments/capilar/tratamiento-capilar/tratamiento-capilar-{antes,despues}.jpg` (185/156 KB, 1000×1250) + `.webp` sibling. Alt español trazable al entry, sin banned words.
- **Verificación.** Browser `:3000`: sección pinta con imágenes reales (no `og-default`), `.webp` 200 OK. `test:visual` 34/34 sin diffs (ruta no snapshoteada → sin re-baseline). WCAG: alt presente y descriptivo. Compliance OK.
- **Skill `add-media` (`docs(skills)`).** 4 ajustes tras el primer uso real: paso Locate distingue data-only vs ciclo de componente; recepción = "dar nombres + ruta primero, el usuario coloca; si solo pide nombres, parar"; sin `find` recursivo (colgó 120s); gotcha de `generate-webp.js` (crea siblings no relacionados → reportar aparte). Shape `beforeAfter` corregido a `{ items: [...] }`. Ambas copias sincronizadas. Ver DECISIONS 2026-08-29.
- **Side-effect.** `generate-webp.js` creó `landings/prf-y-fibrina/plasma-rico-en-plaquetas-procedimiento.webp` (sibling que faltaba, `.jpg` ya referenciado) → commit `chore(assets)` aparte.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
