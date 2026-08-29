# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — FloatingWhatsApp: helper mobile-first + animación de atención del FAB
- `FloatingWhatsApp.jsx` + `.module.css`:
  - **Helper bubble:** en mobile (<768px) **no se renderiza** (el FAB solo alcanza; una tarjeta pop-up es demasiado ruido en pantalla chica). En desktop: el timer plano de 3s → **trigger por intención** (scroll ≥40% de la página o 15s de dwell) + **auto-hide a los 6s**. Dismiss con `sessionStorage` intacto.
  - **FAB:** énfasis de entrada (`fabEnter`, scale-in con overshoot, `backwards` para no romper el `:hover`) + ring de atención (`::after`) que pulsa **3× en los primeros ~2.5s y no vuelve nunca**. Guard `@media (prefers-reduced-motion: reduce)` → sin ring ni overshoot.
- **Verificación:** mobile (helper no aparece ni scrolleando 60%) · desktop (helper aparece al 45%, se va a los 6.5s) · console limpia. `npm run test:visual` 34/34 — **re-baseline de `home-hero` mobile-safari** (cambios intencionales: barra superior con tap-to-call, sin helper mobile, hero tag actualizado). Commit `ba4e4bc`.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
