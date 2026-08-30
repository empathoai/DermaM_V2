# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — /corporales: imagen en la card complementaria de maderoterapia
- **Data + media (`feat`).** `src/data/categoryPages.js`, objeto `corporales` → `complementaryTreatments.treatments[0]` (MADEROTERAPIA CORPORAL): `image: null` → ruta real + `imagePosition: 'center 80%'` (recorte 1:1). Era la única card complementaria del hub → quedaba una tarjeta de texto huérfana en grilla de 3 col. Imagen del usuario (herramientas de maderoterapia sobre camilla) PNG 1.9 MB → JPG 133 KB + `.webp`.
- **Sin cambio de componente.** `CategoryPage.jsx` ya pasa `showMedia={true}` a la grilla complementaria. Otros 5 hubs sin tocar (solo cambia 1 valor en el objeto `corporales`). `image: null` en cards complementarias sigue siendo el patrón en faciales (6) e iv-therapy (11) — no se tocaron (6–11 cards se leen bien como grilla de texto; corporales era el caso de 1 sola).
- **Verificación.** Render `:3000` en `/corporales`: card con imagen (webp 200), recorte OK (herramientas visibles), 1:1 424px, alt "Maderoterapia Corporal" (autogenerado por `TreatmentCard`, = resto del sitio), consola limpia. `test:visual` skip (`/corporales` no snapshoteada, edit data-only). Ver DECISIONS 2026-08-30.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
