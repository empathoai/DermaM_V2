# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-11 — Route Contacto page WhatsApp CTAs through the shared helper (cont. 62, cleanup)

- **What:** `src/pages/Contacto.jsx` had a 3rd hardcoded copy of the `wa.me` URL construction (found while auditing for any WhatsApp button missed by cont. 60/61). Its message was already correct and deliberate ("Hola, quiero agendar una evaluación personalizada con DERMA.M.", same as `FloatingWhatsApp`'s) — no typo, no bug — so this is pure DRY cleanup: now built via `buildWhatsAppUrl()` from `src/utils/whatsapp.js`. No message or number change.
- **Why:** user asked to check for any other WhatsApp button not yet considered; this one was out of cont. 60/61's scope (not treatment/landing/hub) but still worth centralizing.
- **Verified:** browser on `/contacto` — both hero/start WhatsApp buttons still open the same message, `wa.me/15612535384?text=...`.
- Commit `148f90a`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
