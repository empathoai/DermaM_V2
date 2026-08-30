# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — JSON-LD de Nancy: `image` de Persona → foto real (cierra el mapa de imágenes, 4/4)

- **1 línea, `NancyNieto.jsx:32`.** El `image` del `Person` schema pasaba de `.../home/founder.jpg` (modelo stock) a `.../about/nancy-nieto-fundadora.jpg`. No visible; es el dato de entidad para panel de conocimiento / IA. Mapa de imágenes de Nancy: **4/4**.
- **`home/founder.jpg` + `.webp`** quedan sin referencias en código (solo aparecen en `docs/` gitignored y `graphify-out/`). Se pueden `git rm` — el intento en este ciclo lo bloqueó el classifier; queda como limpieza mecánica pendiente para cuando el usuario lo apruebe.
- Sin `test:visual` (structured data, fuera de todo snapshot).

---

## 2026-08-30 — /nosotros `founderSpotlight`: foto real de Nancy (reemplaza modelo stock)

- **Slot llenado (Acción A, skill `add-media`).** `aboutPage.js` → `founderSpotlight.image`: `/assets/images/home/founder.jpg` (modelo stock) → `/assets/images/about/nancy-nieto-fundadora.jpg` (retrato real de Nancy en oficina, 1000×1200, 110 KB) + `.webp` sibling generado. Alt: `"Nancy Nieto, fundadora y directora…"` → `"Retrato de Nancy Nieto, fundadora y directora de DERMA.M"`.
- **Sin cambio de estructura.** La sección se mantiene tal cual (`spotlightRow` imagen+texto, link `Conoce más sobre Nancy →`) — es el link-driver a la bio casi huérfana + anchor de E-E-A-T de `/nosotros`. Solo cambió el asset. La reducción a "founder-primer compacto" quedó como follow-up opcional, NO ejecutada (sin aprobación).
- **Verificación.** `:3000`: pinta el retrato, `.webp` 200, distinto del crop del hero (no compiten). `test:visual`: re-baseline intencional de `nosotros-founder-with-link` desktop + mobile (único diff); 34/34 tras update. WCAG AA: alt descriptivo, texto sobre `#F2F0F1` OK.
- **Mapa de imágenes de Nancy: 3/4.** Última: el `image` del JSON-LD en `NancyNieto.jsx:32` (aún apunta a `home/founder.jpg` vía URL absoluta). Cuando migre esa, `home/founder.jpg` queda sin referencias y se puede borrar.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
