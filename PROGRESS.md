# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — Footer: pulido 1d (blurb, nav, hubs, año) — cierra la auditoría del footer
- `Footer.jsx` (1 componente):
  - **Blurb** "centro de estética, belleza y salud clínica" → "**medical spa en West Palm Beach, Florida**, enfocado en el cuidado integral de la piel, el cuerpo y el bienestar." Entidad consistente con hero tag / schema / `PRODUCT.md` + keyword local. Cross-check `MEDICAL_COMPLIANCE.md` OK.
  - **Columna Navegación**: se quita "Tratamientos" (iba a `/faciales`, mal etiquetado y redundante con la columna de tratamientos al lado). Queda Inicio · Nosotros · Contacto (espeja el navbar top-level).
  - **Columna Tratamientos**: +IV Therapy +Capilar (`/iv-therapy`, `/capilar`) — eran 6 de 8 hubs. Dental sigue afuera hasta la revisión regulatoria dental (`NEXT.md §Bloqueado`).
  - **`© 2026`** → `{new Date().getFullYear()}`.
- Verificado en `:3000`. Sin `test:visual` (1 componente, footer fuera de snapshots). Commit `6392595`.
- **Auditoría del footer CERRADA** (ítems 1a→1d). Quedan pendientes solo cosas atadas al deploy (sitemap) o al hold dental.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
