# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — Heroes `/nosotros` + `/nancy-nieto`: CTAs estandarizados a `RESERVAR` / `WHATSAPP`
- `src/data/aboutPage.js` — hero de `/nosotros` (líneas 9-10) y de `/nancy-nieto` (`founderBioPage.hero`, 208-209): `primaryCta`/`secondaryCta` de `"AGENDAR VALORACIÓN"` / `"HABLAR POR WHATSAPP"` → **`"RESERVAR"` / `"WHATSAPP"`**.
- Motivo: eran los 2 únicos hero con labels largos; el texto los ensanchaba respecto a los 10+ hero estándar (hubs/landings/tratamientos ya usan `RESERVAR`/`WHATSAPP`). El padding CSS de `.primaryCta`/`.secondaryCta` ya era idéntico → solo cambió el ancho por el largo del texto.
- Cambio **solo de data**, sin tocar `PageHero` ni CSS. Se decidió mantener los 2 botones (no eliminar el CTA de reserva) para no regresionar conversión y no crear otra inconsistencia (hero de 1 botón vs. 10 de 2).
- **Verificación:** `npm run test:visual` 34/34 sin diffs.
- **Bug abierto detectado en el hero del Home** (`Hero.jsx`): "Reservar" y "Contacto" son `<button>` sin `onClick`/`href` → no hacen nada. Queda como próximo ciclo (ver `NEXT.md`).

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
