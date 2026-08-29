# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — Navbar top info bar: mobile-first (tap-to-call visible + número identificado)
- `Navbar.jsx` + `Navbar.module.css`:
  - **Mobile (<768px):** se oculta el label "West Palm Beach" (redundante — ya está en hero tag / footer / schema) y se **muestran** teléfono + WhatsApp (antes eran desktop-only). Convierte 28px muertos en barra de tap-to-call.
  - **Identificador:** ícono `Phone` (lucide, 12px) + `aria-label="Llamar al 561 253 5384"` → el número se lee como teléfono, no como nº de licencia/referencia. Ícono `aria-hidden`.
  - **Área de toque:** `.topInfoRight` + `.topInfoLink` estiran a la altura de la barra → 15px → 27px (44px WCAG no entra en 28px).
  - Desktop igual que antes salvo el ícono.
- **Verificación:** browser desktop + mobile (sin overflow, links `tel:`/WhatsApp clickeables). `npm run test:visual` 34/34 (la barra superior no está en ningún snapshot; se corrió igual por ser componente compartido). Commit `22507ae`.
- Evaluaciones read-only previas de esta tanda (sin cambio): CTA del navbar (se mantiene, navbar sticky) · helper bubble de `FloatingWhatsApp` (analizado, opciones dadas — pendiente de decisión del usuario).

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
