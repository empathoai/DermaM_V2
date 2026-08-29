# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — Home CTA: contenedor alineado a `shared/FinalCTA` + línea WPB/teléfono fuera
- **`sections/FinalCTA.module.css` `.container`**: se quitó `min-height: 75vh` y el override de padding de `120px 64px` en `@media 1024px`; ahora `padding: clamp(80px,12vw,160px) clamp(24px,4vw,64px)` = mismo que `shared/FinalCTA`. Sección del Home **990px → 763px**, mismo ritmo que todos los demás CTA y sin el efecto "zoom" en la imagen de fondo.
- **Línea `supportingInfo` eliminada** ("West Palm Beach · 561 253 5384") — JSX en `sections/FinalCTA.jsx` + su regla CSS (ahora muerta). Pedido explícito del usuario.
- Sin tocar: tipografía, imagen `<img>` + animación de zoom, filtro `grayscale`, botones, disclaimer, overlay.
- **Verificación:** `npm run test:visual` 34/34 sin diffs (el CTA del Home está below-the-fold en los snapshots). Console limpia.
- **Auditoría del footer** (read-only, no code): 7 hallazgos registrados en `NEXT.md` cola de pulido. Top-3: (1) `Instagram/Facebook` importados + `.socialBlock` CSS pero SIN render → footer sin redes pese a `sameAs`; (2) falta horario; (3) bloque legal incompleto (sin `/accessibility` ni `/legal`). NAP exacto ✅, Aviso ES/EN compliant ✅.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
