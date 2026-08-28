# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-28 — Arquitectura de contenido del founder · Ciclo 2: `/nosotros` reestructurado
- **Ciclo 2 re-scopeado** (el usuario marcó que el tope de `/nosotros` era una mezcla sin progresión): de "trim + sub-H1" a "reestructurar + reescribir" (sin replanteo estructural total).
- **Fusión:** "Founder Philosophy" (`ESCUCHAR ANTES DE RECOMENDAR` + cita) + "Approach" (`CÓMO CUIDAMOS CADA DECISIÓN` + 3 columnas) decían la misma tríada 3× (con el hero) → una sola sección oscura: eyebrow `NUESTRO ENFOQUE`, heading `ESCUCHAR ANTES DE RECOMENDAR`, intro + 3 pilares (`BenefitColumns variant="dark"`) + cita de Nancy al cierre.
- **Eliminado:** el bloque de conversión anidado en la lista de beneficios (página informativa, ya hay CTA en hero + FinalCTA). La sección `DERMA.M Academy` de `/nosotros` (Academy = capacitación para profesionales externas, no señal de equipo interno) → queda 1 línea de autoridad en la Founder Spotlight; el desarrollo completo va a `/nancy-nieto` (Ciclo 3).
- Hero `body` reescrito (sin enumerar la tríada) + `localTag: "Medical Spa · West Palm Beach"` (sí en `/nosotros`, no en `/nancy-nieto`). Founder Spotlight `body`/`secondaryBody` trim. `aboutPage.js` −127/+34 líneas.
- Baseline `nosotros-viewport` (desktop) regenerado. `test:visual` 34/34. Commit `5223f2d`.
- **Pendiente:** Ciclo 3 (`/nancy-nieto` — `founderBioPage` standalone + secciones Historia/Formación y DERMA.M & Academy con misión/visión completa + cita larga, con el texto real que pasó la clínica).

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md) (entradas de sesiones cerradas hasta 2026-08-28).
