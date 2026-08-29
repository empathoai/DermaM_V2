# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-29 — Ítem #6: cuña postop demand-gen — 3 FAQ en `/tratamientos-postoperatorios` (9 → 12) + spec GBP/ads
- **Cambio:** append de 3 ítems a `postoperatorios.faq.items` (`src/data/landingPages.js`), posiciones 10–12; los 9 existentes intactos. `tests/faq-consistency.spec.js` count `/tratamientos-postoperatorios` 9 → 12. `FAQPage.mainEntity` auto-derivado.
- **Ítems (derivados de 2 transcripts de video de ads de la clínica, 2026-08-29):** "¿Son suficientes 6 u 8 sesiones de masajes postoperatorios?" (mito → no; etapas) · "¿Por qué conviene continuar el acompañamiento después de que baja la inflamación?" (el drop-off; fase de reparación) · "¿Debo hacer drenaje postoperatorio si mi cirujano no me lo indicó?" (demand-gen core → consultar en el control). Marco de **dos fases** (activa intensiva + mantenimiento espaciado); el ítem viejo de "10 a 15 sesiones" **no se tocó**.
- **Coherencia ads ↔ sitio:** mismo mensaje de los videos alimenta la FAQ on-site y la spec de posts de GBP + copy base de Facebook ads (entregable A, **especificado no ejecutado**, para sesión Track B con la dueña logueada en GBP).
- **Compliance:** "prevenir endurecimientos/fibrosis/adherencias" + deferimiento al cirujano (OK per DECISIONS 2026-08-28). Fuera del sitio: "seromas" como gancho, "no pongas tu inversión en riesgo" — quedan solo para paid social a criterio de la clínica.
- **Verificación:** `faq-consistency` 12/12 · `npm run test:visual` **34/34 sin diffs** · cross-check `MEDICAL_COMPLIANCE.md` OK.
- Spec: `docs/superpowers/specs/2026-08-29-postop-demand-gen-wedge-design.md`. Diferido a `NEXT.md`: pieza "por qué el postoperatorio importa" (sección/ruta nueva, ciclo propio, condicional a tracción).

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md) (entradas de sesiones cerradas hasta 2026-08-29).
