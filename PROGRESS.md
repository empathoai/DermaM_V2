# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-11 — Extend contextual WhatsApp message to category hubs (cont. 61, feature)

- **What:** `CategoryPage.jsx`'s closing `FinalCTA` now passes `whatsappTopic={breadcrumb?.[breadcrumb.length - 1]?.label}` (e.g. "Faciales", "Láser y Luz", "Dental Estético") — 1 file, 1 line. Reuses the `whatsappTopic` prop/helper already built in cont. 60; no new data field, since every hub's breadcrumb already carries a short category label.
- **Why:** user asked to validate expanding cont. 60's scope to hub pages; the hub hero doesn't even render a WhatsApp button today, so only the bottom `FinalCTA` needed the prop.
- **Verified:** browser on `/laser-y-luz` and `/dental-estetico` — CTA opens `wa.me` with "Hola, vi su sitio web sobre Láser y Luz / Dental Estético y me gustaría más información."
- Commit `9da1ac0`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
