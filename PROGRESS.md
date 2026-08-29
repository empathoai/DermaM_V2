# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — Footer: links de redes (Instagram / TikTok / Facebook) + `sameAs` alineado
- `Footer.jsx` — fila de 3 links en la columna de marca, debajo de la descripción (donde iba el `.socialBlock` muerto). Instagram + Facebook desde `lucide-react` (ya importados); **TikTok como `<svg>` inline** (lucide 0.546 no trae el glifo). Íconos 24px, monocromo `#CCC9C1`, `aria-label` por link, `aria-hidden` en los SVG, `:focus-visible`.
- `Footer.module.css` — `.socialBlock` gana `margin-top: 28px`; nueva `.socialLink` (color + hover a `#F2F0F1` + focus).
- `organizationSchema.js` — `sameAs` +`https://www.tiktok.com/@derma.m` (antes solo IG/FB/Yelp) para que footer y schema declaren lo mismo. URLs de las 3 redes salen de la ficha de GBP (`INTAKE.md:147`).
- Cierra el ítem 1a de la auditoría del footer (código muerto → footer sin redes pese a `sameAs`).
- **Verificación:** browser `:3000` (3 links, hrefs correctos, `_blank`+`noopener`), aprobado a ojo. `test:visual` 34/34 — **ningún snapshot captura el footer** (todos above-the-fold), confirmado en 2 corridas.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
