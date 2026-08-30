# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — /nosotros: sección de equipo aplanada en grid único con eyebrow de especialidad

- **Componente (`refactor` `0bdd848`).** `TeamMemberCard`: nuevo slot `specialtyLabel` (eyebrow arriba de la card, `.eyebrow` uppercase 11px letter-spacing 0.2em) + nombre `h4` → `h3`.
- **Grid + data (`feat` `837bd1d`).** `TeamBySpecialty` deja de agrupar: renderiza `SectionHeader` (con `titleId="team-heading"`, antes el `aria-labelledby` apuntaba a nada) + un solo `.grid` de `TeamMemberCard`. Se borran `.groupsList/.groupBlock/.groupHeader/.groupTitle/.groupSupport/.line`. `AboutPage` pasa `members={team}`.
- **`aboutPage.js`:** `teamBySpecialty` (agrupado) → `team` plano, 7 miembros en orden estratégico: Nancy → Mikaela → Daniela → Elianne → Tony → Miguel → Melisa. Cada uno con `specialtyLabel`. **Samantha Atencio eliminada** de la data (no había `.mp4`; no quedaban archivos suyos que borrar). Nancy nueva: `mediaType: "image"`, `mediaSrc: null` → `MediaBlock` renderiza panel `.fallback` vacío (usuario eligió "sin media" hasta tener clip); su `.vcf` ya existía.
- **Verificación.** `:3000` en tab fresco: 7 cards, orden correcto, grid 3col desktop / 2col tablet (max-width 960) / 1col mobile, filas 3+3+1, headings `H2`+7×`H3` (sin salto), eyebrow contraste ~10.5:1, sin errores de consola, sin 404. `test:visual` 34/34 sin diffs (snapshots de `/nosotros` son above-the-fold). Compliance: labels de área + bio de Nancy (verbatim de `founderSpotlight`) sin banned words.
- **Queda:** card de Nancy sin media (necesita clip o still vía `add-media`). Sección "Fundadora" de arriba sin tocar (posible dedupe futuro). `samantha-atencio.vcf` queda como huérfano inofensivo.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
