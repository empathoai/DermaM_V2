# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — Sanity check de documentación + registro de estado de deploy
- **Estado de deploy registrado** (memoria `project_deploy_state_vercel_hostinger` + `NEXT.md`): **prod real = Hostinger/Apache, pendiente**. Vercel auto-push = solo demo para el cliente, no es prod definitiva. Para cerrar el proyecto solo falta: subir a Hostinger + verificar GSC. Nada de código.
- **Doc-hygiene (XS), 3 correcciones de datos falsos en docs fuente de verdad:**
  - `SEO_AUDIT_2026.md` 8.17 + `TECHNICAL_SEO_GEO_AUDIT_2026.md` 8.17 — decían "no hay GA4"; **GA4 está live** (`G-9272VHFT03` en `index.html`). Reescrito: GA4 hecho, faltan GSC + Bing WT.
  - `SEO_AUDIT_2026.md` 7.3 — marcado "Pendiente"; ya **hecho** (`TreatmentDetailPage.jsx:259` `{beforeAfterItems.length > 0 && …}`).
  - `SEO_AUDIT_2026.md` 7.4 — marcado "Pendiente"; ya **resuelto** (`TreatmentDetailPage.jsx:59` mapea `dentalEstetico → dental-estetico`; el `categoryFolder` descrito ya no existe).
- **Sin cambios de código.** Sitio sin deuda que impida producción.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
