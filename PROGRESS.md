# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — Fix: el botón flotante de WhatsApp tapaba el footer
- `FloatingWhatsApp.jsx` + `.module.css` — el FAB (`position: fixed` abajo-derecha) cubría el bloque legal / contacto del footer al llegar al fondo.
- Fix: `IntersectionObserver` sobre `<footer>` (re-adquirido en cada cambio de ruta vía `useLocation`, porque el footer se monta por página). Estado `nearFooter` → clase `.hidden` (`opacity: 0; translateY(24px); pointer-events: none` con transición). Reaparece al scrollear arriba.
- Verificado en `/` y `/contacto`: se oculta al bajar, vuelve al subir, no queda pegado tras navegar. `npm run test:visual` 34/34 sin diffs (el FAB en estado top-of-page no cambia).
- Commit `d357419`.
- **Evaluación aparte (read-only, sin cambio):** el CTA del navbar ("AGENDA TU VALORACIÓN") NO es redundante — el navbar es `sticky`, así que es la única acción de reserva persistente en desktop cuando el CTA del hero sale de vista. Mantener. Hallazgo real: mobile tiene el booking primario detrás del hamburger → posible CTA sticky en mobile (ciclo aparte, no pedido).

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
