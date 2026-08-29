# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-28 — FAQ #4 (pág. 1/2): 3 ítems PAA en `/limpieza-facial-profunda`
- **Cambio:** append de 3 ítems a `limpiezaFacial.faq.items` (`src/data/landingPages.js`), posiciones 7–9; los 6 existentes intactos. `tests/faq-consistency.spec.js` count `/limpieza-facial-profunda` 6 → 9. `FAQPage.mainEntity` auto-derivado del array (sin editar schema). Commit `b7a6452`.
- **Ítems:** "¿Para qué sirve una limpieza facial profunda?" · "¿Cuánto dura la sesión?" · "¿Cuál es la diferencia entre una limpieza facial básica y una limpieza facial profunda?". Fraseo confirmado con 2 web searches ES (PAA reales); respuestas derivadas verbatim-en-espíritu de `problem.body`/`benefits`/`quickFacts`/`howItWorks` ya vetados; cierre relacional (§S7: "te valoramos, te explicamos"). Sin claims nuevos, sin banned words, sin garantías, sin competidor nombrado.
- **Decisión de método:** `/llm-council` (2026-08-28) descartó el ciclo "4a" de captura vía Apify — los seeds EN del findings doc §189 + un pase manual ES de ~15 min son insumo suficiente (mismo patrón que el ciclo #3 PRF). Sin ítem de precio (el sitio no publica precios). Ver `DECISIONS.md`.
- **Verificación:** `faq-consistency` 12/12 · `npm run test:visual` **34/34 sin diffs** (el snapshot "Limpieza Facial Landing" es una sección, no la FAQ — sin re-baseline).
- Spec: `docs/superpowers/specs/2026-08-28-limpieza-facial-faq-paa-design.md` · Plan: `docs/superpowers/plans/2026-08-28-limpieza-facial-faq-paa.md`. Cierra la pág. 1 del ítem #4; falta `/tratamientos-postoperatorios`.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md) (entradas de sesiones cerradas hasta 2026-08-28).
