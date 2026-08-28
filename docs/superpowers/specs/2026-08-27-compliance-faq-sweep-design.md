# Spec — Barrido de compliance en FAQ / problemContext / whoForList

Fecha: 2026-08-27
Estado: aprobado en brainstorming, pendiente de revisión de spec.

## Origen

Durante el sub-proyecto C1 (respuesta directa GEO en `whatIsBody`) se detectaron
expresiones prohibidas por `docs/MEDICAL_COMPLIANCE.md` viviendo en **otros campos**
de `src/data/treatmentPages.js` — `faq`, `problemContextBody`/`problemContextHeadline`,
`whoForList` — que C1 no tocaba. Mismo tipo de riesgo legal que motivó el fix de
"clínica" → "medical spa". Este spec limpia esos campos en las 25 páginas de
tratamiento + las 3 landings.

## Alcance

**En alcance:**

- Lectura completa de: los **125 FAQ** de tratamiento (25 tratamientos × 5) + los FAQ
  de las 3 landings en `src/data/landingPages.js` + **todos** los
  `problemContextBody` / `problemContextHeadline` / `whoForList` de `treatmentPages.js`.
- Marcado de toda expresión que cae en las categorías de la sección "Criterio".
- **Una** lista consolidada (viejo → nuevo → motivo), agrupada por categoría, para
  revisión del usuario en un solo gate.
- 2 commits: `fix(copy): compliance FAQ — treatmentPages` y `… landings`.
- 1 typo: `treatmentPages.js` `tratamiento-acne.resultado` — "imperfecciones **and**
  piel equilibrada" → "imperfecciones y piel equilibrada".

**Fuera de alcance:**

- `whatIsBody` / `whatIsHeadline` (ya limpiados en C1).
- El campo `disclaimer` `"Requiere valoración previa para garantizar tu seguridad y
  resultados."` — es la CTA pre-tratamiento **exigida literalmente** por
  `MEDICAL_COMPLIANCE.md`; "garantizar tu seguridad" ahí es obligatorio. No se toca.
- C2 (dato cuantitativo + enlace de autoridad por tratamiento).
- `WarningBox` title ("CUÁNDO CONSULTAR ANTES").
- `NoticePrivacyPractices.jsx` / `TreatmentDisclaimer.jsx` (revisión legal aparte).
- Testimonios (`categoryPages.js`) — nunca se editan.

## Estado actual (verificado, parcial — el resto sale de la lectura completa)

Ocurrencias literales ya identificadas en `treatmentPages.js`:

| Línea aprox. | Campo | Texto actual | Categoría |
|---|---|---|---|
| ~95 | `hidrofacial` faq | "facilitando una **extracción sin dolor**" | 1 |
| ~171 | `hifu-facial` whoForList | "definición de contornos **sin tiempo de recuperación**" | 3 |
| ~198 | `hifu-facial` faq | "**no requiere tiempo de recuperación** ni cuidados especiales" | 3 |
| ~276 | `radiofrecuencia-facial` faq | "similar a un masaje con piedras calientes, **sin dolor** ni quemaduras" | 1 |
| ~318 | `oxigenoterapia-facial` faq | "refrescante sobre la cara, **sin dolor**." | 1 |
| ~390 | `tratamiento-acne` resultado | "imperfecciones **and** piel equilibrada" | 7 (typo) |
| ~490 | `dermabracion-facial` faq | "masaje de succión muy cómodo en el rostro, **sin dolor ni sangrado**." | 1 + 2 |
| ~625 | `lipo-360` faq | "desinflamar de forma confortable, **sin dolor** ni tracción." | 1 |
| ~679 | `levantamiento-gluteos` faq (pregunta) | "¿El resultado de levantamiento es **permanente**?" | 4 |
| ~732 | `hifu-corporal` problemContextBody | "tensado profundo desde adentro, **sin reposo posoperatorio**." | 3 |
| ~766 | `hifu-corporal` faq | "**Cero tiempo de reposo.** Puedes regresar al trabajo… inmediatamente" | 3 |
| ~978 | `depilacion-laser` faq (pregunta) | "¿Se elimina el vello de forma **definitiva para siempre**?" | 4 |
| ~979 | `depilacion-laser` faq (respuesta) | "reducción duradera **del 85% al 90%** del vello" | 5 |
| ~1160 | `tratamiento-capilar` faq | "micro-aperturas… **sin dolor ni sangrado**." | 1 + 2 |

Pendiente de la lectura completa: variantes de negación de downtime del tipo
"¿Tiene algún tiempo de recuperación? / Ninguno.", "¿tiempo de inactividad? / Cero…",
que el grep no atrapa de forma fiable, y cualquier cosa en `problemContext`/`whoForList`
de las categorías que aún no se leyeron a fondo. Los FAQ de `landingPages.js` también
entran (mismo `prfYFibrina` "gel calmante… muy suave y rápida" ya está OK; hay que
leer los ~28).

## Criterio (regla de reemplazo por categoría)

**1. "sin dolor" / "indoloro"** → describir la sensación real sin el absoluto.
- "extracción sin dolor" → "extracción suave y muy tolerable"
- "sin dolor ni quemaduras" → "sin ardor ni quemaduras" / "muy tolerable"
- "refrescante, sin dolor" → "refrescante y muy cómoda"
- "confortable, sin dolor ni tracción" → "confortable y suave, sin tracción"

**2. "sin sangrado"** (cuando aparece junto a "sin dolor") → separar. "sin dolor" se
trata por la regla 1. "sin sangrado" se **evalúa caso por caso**: si es descripción
factual del procedimiento (microdermoabrasión con punta de diamante; micro-infusión
capilar), se **mantiene** reformulado como hecho ("no produce sangrado"), no como
parte de un combo "indoloro". Si no aporta nada, se elimina.

**3. Negación de "downtime" / tiempo de recuperación** → reincorporación, no ausencia
absoluta.
- "sin tiempo de recuperación" → "con reincorporación inmediata a tu rutina"
- "no requiere tiempo de recuperación" → "no requiere reposo; puedes retomar tu rutina el mismo día"
- "Cero tiempo de reposo." → "Reincorporación inmediata."
- "¿Tiene tiempo de recuperación? / Ninguno." → "… / No requiere reposo; puedes retomar tu día normalmente."
- `hifu-corporal` problemContext "sin reposo posoperatorio" → "de forma no invasiva"

**4. "permanente" / "para siempre" / "definitiva" (sobre RESULTADOS)** → duración honesta.
- pregunta "¿El resultado… es permanente?" → "¿Cuánto duran los resultados…?" (la respuesta
  ya es honesta — se mantiene, ajustando la primera frase si nombra "permanente").
- "¿Se elimina el vello de forma definitiva para siempre?" → "¿La depilación láser
  elimina el vello para siempre?" (la pregunta plantea el mito; la respuesta lo corrige).
- "marcas permanentes" describiendo la **condición** (no el resultado) → se **mantiene**
  (es correcto: `manchas-cicatrices` problemContext).

**5. Claim de eficacia con cifra sin fuente** → cualitativo (decisión Q2 → A).
- `depilacion-laser` "reducción duradera del 85% al 90% del vello" → "No de forma total.
  Se logra una reducción notable y duradera; los folículos debilitados pueden requerir
  sesiones de retoque." Si la clínica luego aporta la fuente del fabricante, la cifra
  se reintroduce con cita en C2.

**6. "elimina … por completo / al 100%"** → "atenúa" / "mejora el aspecto de".
Preguntas-mito que ya se responden con un "No, …" honesto (ej. estrías blancas,
manchas de sol "por completo") → se **mantienen** — plantear y desmentir es buen
patrón AEO. Solo se ajusta si la respuesta en sí sobrepromete.

**7. Typo** — `tratamiento-acne.resultado`: "and" → "y".

**Principio transversal:** ante la duda, la marca es **"dejar y anotar"** en la lista
de revisión, no reescribir. El usuario decide en el gate. No se degrada la percepción
del tratamiento: los que son genuinamente suaves siguen leyéndose como suaves, solo
sin la palabra-absoluto que crea exposición legal.

## Verificación (definición de done)

- `npm run test:visual` → **22/22 sin diffs**. FAQ/whoForList no están snapshoteados.
  `problemSection`/`whoForSection` de `hidrofacial` **sí** lo están: si la lectura
  marca algo en el `problemContext`/`whoForList` de hidrofacial (hoy no hay nada
  identificado), se regenera ese baseline verificando que el diff sea solo texto.
- DOM: abrir 3-4 páginas tocadas, expandir un FAQ modificado, confirmar render +
  que el `<script>` `FAQPage` sigue con 5 `mainEntity`. 0 errores de consola.
- `grep` post: las expresiones prohibidas ya no aparecen, salvo las marcadas
  explícitamente "mantener" (cada una con su justificación en `PROGRESS.md`).

## Registro al cerrar

- `PROGRESS.md`: entrada con la lista de qué se cambió y qué se mantuvo (con motivo).
- `DECISIONS.md`: solo si hubo un criterio no obvio (p. ej. por qué "sin sangrado" se
  conserva en microdermoabrasión).
- `MEMORY.md`: nota de que los campos `faq`/`problemContext`/`whoForList` de las 25
  páginas de tratamiento + 3 landings pasaron barrido de compliance (2026-08-27), con
  el criterio resumido; los campos `disclaimer` NO se tocan (CTA obligatoria).
