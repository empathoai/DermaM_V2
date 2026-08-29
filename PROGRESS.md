# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — BUG fix: los CTA del hero del Home no navegaban
- `src/components/sections/Hero/Hero.jsx` — "Reservar" y "Contacto" eran `<button>` sin `onClick`/`href` (residuo del scaffold de AI Studio) → click sin efecto.
- Fix (patrón de `PageHero`/`FinalCTA`): "Reservar" → `<a href={bookingUrl} target="_blank" rel="noopener noreferrer">` (`VITE_SQUARE_BOOKING_URL` + fallback Square); "Contacto" → `<Link to="/contacto">`. Añadido `import { Link }` + const `bookingUrl`, clase `no-underline`. Clases Tailwind del botón sin cambios.
- **Verificación:** navegación real en `:3000` (`/` → click "Contacto" → `/contacto` por SPA ✓; "Reservar" href = URL de Square, `_blank`). `npm run test:visual` 34/34 sin diffs (`<button>`→`<a>` render idéntico).
- Debugging: `superpowers:systematic-debugging` — root cause = CTAs nunca cableados, no un handler roto.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
