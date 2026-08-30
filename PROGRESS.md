# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — /nosotros: videos de Tony Díaz y Miguel Ramos

- **Media + data (`feat`).** Los 2 `.mp4` que el usuario dejó sin trackear, integrados en un solo ciclo (el usuario pidió ejecutar ambos y omitir el hold regulatorio dental para Miguel Ramos).
  - **Tony Díaz, DO** (IV Therapy): `dr-tony-diaz.mp4` → renombrado a `tony-diaz.mp4` (los demás videos del team no llevan título). El slot ya estaba cableado en `aboutPage.js` (`mediaType: "video"`, `videoSrc`/`mediaSrc` a `tony-diaz.*`) → **sin cambio de data**.
  - **Dr. Miguel Ramos** (Estética Dental): `aboutPage.js` cambió `mediaType: "image"` → `"video"`, `mediaSrc: undefined` → `.../miguel-ramos.jpg`, y se agregó `videoSrc: ".../miguel-ramos.mp4"`.
- **Optimización.** `optimize.js` (x264 CRF 28, `-an`): 1.31 MB → 290 KB (tony) / 302 KB (miguel), en línea con los siblings. Poster `.jpg` extraído del frame 0 con ffmpeg (49/46 KB) + `.webp` (`generate-webp.js`, 2 creados, ningún sibling ajeno).
- **Sin cambio de componente.** `TeamMemberCard` ya lee `mediaType`/`videoSrc`/`mediaSrc`/`mediaPosition` y ramifica a `ViewportVideo` (video `muted` + `playsInline` + autoplay en viewport, poster).
- **Encuadre.** Fuente 720×1280 (retrato) en frame `cover` → sin `mediaPosition` se perdían las cabezas. Ambos entries llevan `mediaPosition: "center 18%"` (= mismo valor que Melisa/Mikaela).
- **Verificación.** `:3000` `/nosotros`: ambas cards pintan su video (no el fallback `og-default`), consola sin errores. `test:visual` 34/34 sin diffs (la sección de equipo queda fuera del viewport de los snapshots de `/nosotros`). WCAG: media decorativa adyacente al nombre visible, sin audio.
- **Queda:** `samantha-atencio.{jpg,mp4}` y las 6 `.jpg` de team + `hero.jpg` siguen siendo slots vacíos de `/nosotros`.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
