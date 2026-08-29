# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — `/nancy-nieto` sección Academy → 2 columnas (formato spotlight) + link saliente
- **Sección 4 de `FounderBioPage` ("DERMA.M y DERMA.M Academy")** pasó de prosa a una sola columna al **patrón `.spotlight*` de la sección "Historia"**: panel de texto + imagen a sangre completa. Espejada → imagen a la **derecha** (Historia la tiene a la izquierda). Imagen: `public/assets/images/about/dermam-academy.jpg` (webp), alt español trazable.
- **Link saliente seguido** "Conoce DERMA.M Academy ↗" a `https://dermamacademy.com` (`target=_blank rel="noopener noreferrer"`, sin `nofollow`) — refuerza desambiguación de entidad med spa ≠ academy (audit 8.19). Data: `href` + `linkLabel` nuevos en `dermamYAcademy` (`src/data/aboutPage.js`).
- **`.spotlightRow` desktop: `height` fijo → `min-height`** — la fila ahora crece hasta encajar el texto. Arregla el clipping de los 2 párrafos largos de "Historia" contra los 800px fijos. Afecta secciones 2 y 4 (únicas que usan `.spotlightRow`).
- **Evaluado y descartado: link a `/nosotros/nancy-nieto` en el navbar** — costo (dilución de nav de 3 ítems, riesgo en componente sitewide, re-baseline) > ganancia SEO/E-E-A-T blanda. Fix real de la orfandad (1 solo link entrante, ausente del sitemap) = entrada en `sitemap.xml` en el deploy + link contextual desde Home. Ver DECISIONS 2026-08-29.
- **Verificación:** `npm run test:visual` 34/34 sin diffs (2 corridas). Salvedad: los baselines de `nancy-nieto` capturan solo el viewport above-the-fold → la sección Academy (y la parte baja de Historia) no están en ningún snapshot. Console limpia, webp cargando, 1 tab stop (link), focus-visible, contraste #363633/#F2F0F1 ~8.6:1.
- Spec: `docs/superpowers/specs/2026-08-29-nancy-academy-two-column-design.md` · Plan: `docs/superpowers/plans/2026-08-29-nancy-academy-two-column.md` (ambos en `docs/`, gitignored).

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
