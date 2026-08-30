# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — /nosotros `founderSpotlight`: foto real de Nancy (reemplaza modelo stock)

- **Slot llenado (Acción A, skill `add-media`).** `aboutPage.js` → `founderSpotlight.image`: `/assets/images/home/founder.jpg` (modelo stock) → `/assets/images/about/nancy-nieto-fundadora.jpg` (retrato real de Nancy en oficina, 1000×1200, 110 KB) + `.webp` sibling generado. Alt: `"Nancy Nieto, fundadora y directora…"` → `"Retrato de Nancy Nieto, fundadora y directora de DERMA.M"`.
- **Sin cambio de estructura.** La sección se mantiene tal cual (`spotlightRow` imagen+texto, link `Conoce más sobre Nancy →`) — es el link-driver a la bio casi huérfana + anchor de E-E-A-T de `/nosotros`. Solo cambió el asset. La reducción a "founder-primer compacto" quedó como follow-up opcional, NO ejecutada (sin aprobación).
- **Verificación.** `:3000`: pinta el retrato, `.webp` 200, distinto del crop del hero (no compiten). `test:visual`: re-baseline intencional de `nosotros-founder-with-link` desktop + mobile (único diff); 34/34 tras update. WCAG AA: alt descriptivo, texto sobre `#F2F0F1` OK.
- **Mapa de imágenes de Nancy: 3/4.** Última: el `image` del JSON-LD en `NancyNieto.jsx:32` (aún apunta a `home/founder.jpg` vía URL absoluta). Cuando migre esa, `home/founder.jpg` queda sin referencias y se puede borrar.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
