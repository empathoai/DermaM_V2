# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — "Mejores med spa de WPB": ítem [XL] descartado → 1 FAQ en `/contacto` (5 → 6)
- **Decisión de alcance:** el ítem #1 de `NEXT.md` ("página mejores med spa de West Palm Beach", [XL]) se **saca de la cola**. Origen real = posicionar vía un premio (BusinessRate.com "Best of 2026"), ya descartado 2026-08-27 (`INTAKE.md:66` — pay-to-display, riesgo FTC, choca con `MEDICAL_COMPLIANCE.md`). Sin el premio, una página nueva para el término es esfuerzo XL con impacto B-tier (map pack nulo, orgánico cabeza bajo, solo AEO/long-tail modesto); la palanca del término es off-site (Yelp/reseñas), ya en Bloqueado/backlog.
- **Cambio ejecutado:** append de 1 ítem a `contactFaq.items` (`src/data/contactPage.js`), posición 6; los 5 existentes intactos. `tests/faq-consistency.spec.js` count `/contacto` 5 → 6. `FAQPage.mainEntity` auto-derivado.
- **Ítem nuevo:** "¿Cómo elijo un buen med spa en West Palm Beach?" — responde la **decisión** (licencia + quién ejecuta + valoración previa + explicación en tu idioma), no el superlativo. Derma.M vía hechos verificables (bilingüe ya afirmado en la página, credenciales de Nancy verbatim de `aboutPage.js`) + diferenciador relacional. Sin claim de superioridad.
- **Verificación:** `faq-consistency` 12/12 · `npm run test:visual` **34/34 sin diffs** (snapshot de `/contacto` = Viewport, no la FAQ) · cross-check `MEDICAL_COMPLIANCE.md` OK (sin banned words, sin claim comparativo).
- Spec: `docs/superpowers/specs/2026-08-29-contacto-faq-med-spa-eleccion-design.md`.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md) (entradas de sesiones cerradas hasta 2026-08-29).
