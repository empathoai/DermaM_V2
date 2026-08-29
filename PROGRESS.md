# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — Footer: horario en la columna Contacto (auditoría 1b)
- `Footer.jsx` — nueva línea después de la dirección: "Horario: Lun–Sáb 9:00 AM – 5:00 PM · Dom 9:00 AM – 1:00 PM". String idéntico a `Contacto.jsx:367` y coherente con `openingHoursSpecification` del schema (L–S 09–17, Dom 09–13). Orden NAP: nombre → dirección → horario → teléfono → email → WhatsApp.
- Contenido de 1 componente → **sin `test:visual`**; verificado en `:3000`.
- Cierra ítem **1b** de la auditoría del footer. Commit `2269fd9`.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
