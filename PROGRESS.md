# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — Ítem #5b: 4 FAQ comparativas en `/prf-y-fibrina` (8 → 12)
- **Cambio:** append de 4 ítems a `prfYFibrina.faq.items` (`src/data/landingPages.js`), posiciones 9–12; los 8 existentes intactos. `tests/faq-consistency.spec.js` count `/prf-y-fibrina` 8 → 12. `FAQPage.mainEntity` auto-derivado. Commit `293f8d2`.
- **Ítems:** "¿El PRF es mejor que el PRP?" (posiciona el PRF como evolución por **mecanismo** — matriz de fibrina → liberación sostenida vs liberación inicial única; **sin claim de superioridad** en el body) · "¿El PRF ayuda con las marcas del post-acné?" (deriva de `problem.list`) · "¿Hay personas que no deberían hacerse PRF?" (contraindicaciones, deriva del ítem 8) · "¿En qué zonas del cuerpo puede aplicarse el PRF?" (rostro + contorno de ojos/boca, escote, manos, orejas, cuero cabelludo — lista confirmada por la dueña).
- **Alcance recortado:** ítem #5a de la spec (secciones comparativas vs PRP/fillers/PDGF + tabla) **descartado** tras review — la FAQ ya carga la intención comparativa y una tabla médica "X vs Y" abría un tipo de sección nuevo en `LandingPage` + baseline + exposición a claim de superioridad, sin justificarse en un sitio near-final. Sin PDGF (sin fuente vetada). Sin ángulo "West Palm Beach" en respuestas (sin fuente + roza claim de foto-daño + geo ya cubierto por schema/H1).
- **Verificación:** `faq-consistency` 12/12 · `npm run test:visual` **34/34 sin diffs** (snapshot de la landing = Viewport, no la FAQ — sin re-baseline) · cross-check `MEDICAL_COMPLIANCE.md` OK.
- Spec/plan: `docs/superpowers/{specs,plans}/2026-08-29-prf-landing-faq-comparative-cluster*`. Cierra el ciclo hijo #2 de la spec de estrategia PRF.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md) (entradas de sesiones cerradas hasta 2026-08-29).
