# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — Home: link de la sección de fundadora → bio de Nancy (fix de orfandad)
- `src/data/aboutPage.js` `founderPrimer`: `linkTo` `/nosotros` → **`/nosotros/nancy-nieto`**; `linkLabel` "Conoce a Nancy y al equipo" → **"Conoce a Nancy Nieto"**.
- La sección `FounderSection` del Home es 100% sobre Nancy (título, credenciales, filosofía) → su bio es el destino natural. `/nosotros/nancy-nieto` pasa de **1 a 2 links internos entrantes**, el 2º desde la página de más tráfico, con ancla de nombre completo (ayuda a 8.19). `/nosotros` sigue en navbar + footer.
- **Verificación:** click probado en `:3000` (`/` → `/nosotros/nancy-nieto` ✓). `npm run test:visual` 34/34 sin diffs (link below-the-fold en Home).
- Fix parcial de orfandad; el otro paso (entrada en `sitemap.xml`) sigue atado al deploy a Hostinger. Ver DECISIONS 2026-08-29.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
