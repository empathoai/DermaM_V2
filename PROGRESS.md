# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — Plan de remediación de auditorías (cont. 21, sin código)

- **Llegaron los 3 informes externos** → `auditorias-externas/resultados/{ui-ux,seo,copy}.md` (12 hallazgos UX + 10 SEO + 7 CPY).
- **Triaje completo → cola priorizada de 27 tareas** por severidad × impacto de negocio × riesgo de regresión. Fusiones: UX-01=CPY-02 (botón muerto), UX-02=SEO-05 (contenido fantasma en `CategoryPage`).
- **Plan paso a paso:** `docs/superpowers/plans/2026-08-30-remediacion-auditorias-externas.md` (gitignored, en disco) — por tarea: archivos exactos, enfoque, verificación, impacto SEO/GEO/AEO, gate (brainstorm / visual / archivo protegido). Resumen de la cola inline en `NEXT.md` §cont. 21.
- **Nada ejecutado.** Cada tarea entra por su ciclo: brainstorm → aprobación → 1 cambio → verificación → ritual. Empezar por Tarea 1 (CTA muerto Postoperatorios, XS). Tarea 2 (`.htaccess`) bloqueada hasta el deploy a Hostinger.
- Se corrigió el template TDD de `superpowers:writing-plans` a formato de backlog: no hay runner unitario y la regla de un-cambio-por-ciclo de `CLAUDE.md` prevalece.

---

## 2026-08-30 — Briefs de auditoría externa (cont. 20, sin código)

- **`auditorias-externas/` nueva carpeta versionada.** Prepara una revisión read-only por un LLM externo conectado a una copia del repo (acceso de lectura a todo, escritura solo en `resultados/`).
  - `PROMPT.md` — el único texto que el usuario pega en el LLM externo: rol + "leé `INSTRUCCIONES-AUDITORIA.md` y seguilo" + guardrails resumidos + los 3 archivos de salida.
  - `INSTRUCCIONES-AUDITORIA.md` — detalle completo: guardrails no negociables, contexto de proyecto, source-of-truth docs (con nota de que `docs/` es gitignored y puede faltar), cómo invocar skills del repo con fallback a leer `SKILL.md`, las 3 auditorías, formato de salida, constraint sobre recomendaciones.
  - `resultados/.gitkeep` — destino de `seo.md`, `ui-ux.md`, `copy.md`.
- **Alcance de las 3 auditorías:** (1) UI/UX/A11y → skill `impeccable` sobre todos los templates + `/contacto` (nunca criticado) + WCAG 2.1 AA + tokens `DESIGN.md`. (2) SEO/GEO/AEO/Local → `seo-checklist-65` → `seo-audit`+`schema` → `ai-seo` → `geo-aeo-playbook` → `bencium-aeo` → `seo-local`, más checklist técnico (headings, meta por tipo de página, JSON-LD, sitemap/robots/llms.txt/.htaccess, canonicals, huérfanas, canibalización PRF). (3) Copy → cross-check duro vs `MEDICAL_COMPLIANCE.md` + posicionamiento relacional + calidad del español + CTAs + redundancias; solo flag.
- **Sin código, sin spec en `docs/superpowers/`** — el entregable son los propios docs. Brainstorm → aprobación del usuario → escritura.
- **Estado:** bloqueado esperando los 3 informes. Al retomar: leer `resultados/*.md`, triar, cada hallazgo su ciclo con gate; nada se ejecuta sin priorización del usuario.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
