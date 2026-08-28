# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-28 — Arquitectura de contenido del founder · Ciclo 3: `/nosotros/nancy-nieto` standalone
- `founderBioPage` en `src/data/aboutPage.js` reescrito como objeto **standalone** — sin referencias a `aboutPage.*` (se saca el puente inline `founderPhilosophy` de la Task 2b). Secciones propias: `hero` / `historia` / `filosofia` / `dermamYAcademy` / `quote` (solo la larga) / `cta`. Copy verbatim del mensaje de la clínica del 2026-08-28.
- `FounderBioPage.jsx`: sección 2 pasa de "Founder Spotlight" a **Historia y formación** (mismo layout foto+texto, Clinical Canvas, `historia.*`, foto `/assets/images/home/founder.jpg`); sección 3 **Filosofía + cita larga** (`filosofia.*`, Dark Authority); nueva sección 4 **DERMA.M y DERMA.M Academy** (Off-White `#EFEFEB`, eyebrow + línea + `<h2>` + 2 párrafos, sin imagen); FinalCTA sin cambios.
- `FounderBioPage.module.css`: clases `.academy*` nuevas al mismo type-scale que `.philosophy*`; `.academySection` sumada al bump de padding en `min-width:1024px`. Sin restyle de clases existentes.
- `SectionHeader` acepta `titleId` → la Filosofía queda con `aria-labelledby`. Orden de headings limpio: 1×`<h1>` + `<h2>` por sección.
- `MEMORY.md` "Founder bio page": la línea "reuses `aboutPage.founderSpotlight`… by reference" ya no aplica — actualizada a "standalone object".
- `test:visual` 34/34 (incl. `nancy-nieto-viewport` — sin diff, el cambio de hero body queda dentro de tolerancia). Compliance OK: "tratamientos seguros, éticos y orientados a resultados reales" aparece 1× como visión fundacional de Nancy, sin números de licencia. Commit `45e7a5c`.
- **Cierra el plan founder-content-architecture** (Ciclos 1 + 2 + 2b + 3, todos pusheados).

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md) (entradas de sesiones cerradas hasta 2026-08-28).
