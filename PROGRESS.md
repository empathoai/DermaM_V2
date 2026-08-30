# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — Home FounderSection: imagen propia de Nancy + saca logo mobile

- **Imagen (`feat`).** `FounderSection` dejaba de usar `home/founder.jpg` (compartido con /nosotros y el bio) y pasa a `home/nancy-nieto-fundadora.jpg` (retrato propio, 1000×1200 = 5:6, 64 KB) + `.webp`. Encuadre pensado mobile-first: la caja mobile es 375×450 (~5:6), así la foto entra casi sin recorte y Nancy llena el frame (antes se "perdía" con un plano entero). En desktop la caja es apaisada (~990×680) → se ve una franja cara+torso, tradeoff aceptado.
- **Logo mobile (`refactor`).** Se elimina `.mobileLogoContainer` (img de `global/logo.png`) del JSX + su CSS: solo se renderizaba en <1024px, repetía el logo del navbar arriba del bloque de Nancy.
- **Pendiente del mapeo de imágenes de Nancy (4 slots):** hechos = Home. Faltan = /nosotros `founderSpotlight.image`, bio hero, bio retrato (+ schema). `home/founder.jpg` viejo NO se borra hasta migrar esos 3.
- **Verificación.** `:3000` mobile + desktop: Nancy llena el frame, sin logo repetido, consola limpia. `test:visual` re-baseline intencional de `home-founder` (desktop + mobile); resto 0-diff, 34/34.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
