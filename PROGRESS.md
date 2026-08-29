# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-28 — FAQ #4 (pág. 2/2): 4 ítems PAA en `/tratamientos-postoperatorios` — **ítem #4 cerrado**
- **Cambio:** append de 4 ítems a `postoperatorios.faq.items` (`src/data/landingPages.js`), posiciones 6–9; los 5 existentes intactos. `tests/faq-consistency.spec.js` count `/tratamientos-postoperatorios` 5 → 9. `FAQPage.mainEntity` auto-derivado. Commit `7d6126d`.
- **Ítems:** "¿Qué pasa si no me hago los masajes de drenaje…?" · "¿Cuánto tiempo dura el proceso…?" (timeline, distinto del ítem de nº de sesiones) · "¿Puedo hacerlo si me operé en otra clínica?" (conecta con la cuña demand-gen §S7) · "¿El drenaje ayuda a prevenir la fibrosis?". Fraseo confirmado con 2 web searches ES; respuestas derivadas de `problem`/`benefits`/`howItWorks`/`quickFacts` vetados.
- **Compliance (página más pesada):** "prevenir la fibrosis" permitido (el usuario lo confirmó; ya es título de beneficio); **prohibido "cura/trata/elimina/resuelve la fibrosis"**; sin claims de complicación médica (seroma/trombosis); deferimiento al cirujano en 6/8/9. Ver `DECISIONS.md`.
- **Verificación:** `faq-consistency` 12/12 · `npm run test:visual` **34/34 sin diffs** (snapshots de la landing = Viewport + carrusel, no la FAQ — sin re-baseline).
- Spec/plan: `docs/superpowers/{specs,plans}/2026-08-28-postoperatorios-faq-paa*`. **Cierra el ítem #4 de la cola completo** (PRF en #3, limpieza `b7a6452`, postop `7d6126d`).

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md) (entradas de sesiones cerradas hasta 2026-08-28).
