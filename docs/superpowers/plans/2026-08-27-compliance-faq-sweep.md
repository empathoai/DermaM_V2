# Barrido de Compliance en FAQ / problemContext / whoForList — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eliminar de los campos `faq` / `problemContext*` / `whoForList` de las 25 páginas de tratamiento y las 3 landings toda expresión prohibida por `docs/MEDICAL_COMPLIANCE.md`, sin cambiar el sentido ni degradar la percepción del tratamiento.

**Architecture:** Todo el texto vive en `src/data/treatmentPages.js` (`customDetails['<slug>']`) y `src/data/landingPages.js`. Son swaps de frase puntuales sobre strings existentes — sin componentes, CSS, rutas ni schema. `npm run test:visual` es el guardrail (FAQ/whoForList no están snapshoteados; solo `hidrofacial` snapshotea `problemSection`/`whoForSection` y hoy no tiene nada marcado ahí). 3 tareas: (1) lectura completa + lista consolidada + gate de aprobación, (2) aplicar en `treatmentPages.js` + verificar + commit, (3) aplicar en `landingPages.js` + verificar + commit + cierre.

**Tech Stack:** Vite + React 19, Playwright (`npm run test:visual`, baseURL `http://localhost:3003`, arrancar `vite --port 3003` a mano). Sin test runner unitario. Verificación = visual regression + inspección de DOM (Browser pane / MCP) + `grep`.

## Global Constraints

Copiado del spec `docs/superpowers/specs/2026-08-27-compliance-faq-sweep-design.md` y de `CLAUDE.md`. Aplica a todas las tareas:

- **Proyecto near-final.** Solo lo que pide este plan. Sin refactors, sin cambios de layout/componente/CSS/ruta/schema.
- **Una cosa a la vez.** Cada tarea se cierra (aprobación + registro) antes de la siguiente.
- **NO se toca:** `whatIsBody` / `whatIsHeadline` (limpios en C1); el campo `disclaimer` `"Requiere valoración previa para garantizar tu seguridad y resultados."` (CTA exigida literalmente por `MEDICAL_COMPLIANCE.md` — "garantizar tu seguridad" ahí es obligatorio); testimonios (`categoryPages.js`); `WarningBox` title; `NoticePrivacyPractices.jsx` / `TreatmentDisclaimer.jsx`; archivos protegidos (`.htaccess`, `robots.txt`, `sitemap.xml`, `llms.txt`); baselines de Playwright.
- **`npm run test:visual` → 22/22 sin diffs** tras cada tarea que edita datos. Si al leer aparece algo marcado en el `problemContextBody`/`whoForList` de **hidrofacial** (hoy no hay nada), regenerar `hidrofacial-{problem,whofor}-*.png` verificando en el `-diff.png` que sea solo texto. Un diff en cualquier otro baseline = alarma, parar.
- **Criterio de reemplazo (del spec):**
  1. **"sin dolor" / "indoloro"** → sensación real sin el absoluto ("suave y muy tolerable", "sin ardor ni quemaduras", "muy cómoda").
  2. **"sin sangrado"** junto a "sin dolor" → separar. "sin dolor" se reemplaza (regla 1). "sin sangrado" se evalúa: si es hecho del procedimiento (microdermoabrasión, micro-infusión capilar) se mantiene como hecho ("no produce sangrado"); si no aporta, se elimina.
  3. **Negación de downtime** → reincorporación, no ausencia absoluta ("con reincorporación inmediata a tu rutina", "no requiere reposo; puedes retomar tu día", "Reincorporación inmediata"). `hifu-corporal` problemContext "sin reposo posoperatorio" → "de forma no invasiva".
  4. **"permanente" / "para siempre" / "definitiva" sobre RESULTADOS** → duración honesta. Preguntas: "¿… es permanente?" → "¿Cuánto duran los resultados…?". "marcas permanentes" describiendo la **condición** → se mantiene.
  5. **Cifra de eficacia sin fuente** → cualitativo. `depilacion-laser` "85% al 90%" → "No de forma total. Se logra una reducción notable y duradera; los folículos debilitados pueden requerir sesiones de retoque."
  6. **"elimina … por completo / al 100%"** → "atenúa" / "mejora el aspecto de". Preguntas-mito respondidas con "No, …" honesto → se mantienen (patrón AEO).
  7. **Typo** `tratamiento-acne.resultado` "and" → "y".
- **Principio transversal:** ante la duda → **"dejar y anotar"**, no reescribir. El usuario decide en el gate. No degradar la percepción del tratamiento.
- **Commits:** en español, prefijo `fix(copy):`. Terminar con `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>`.

---

## Task 1: Lectura completa + lista consolidada + gate de aprobación

**Files:**
- Ninguno modificado. Produce la lista revisada de cambios.

**Interfaces:**
- Consumes: nada.
- Produces: **lista aprobada** `{archivo, línea, slug, campo, viejo, nuevo|"MANTENER", motivo}` que las Tasks 2 y 3 aplican al pie de la letra.

- [ ] **Step 1: Leer todos los FAQ + problemContext + whoForList de `treatmentPages.js`**

`Read` `src/data/treatmentPages.js` completo (o por bloques). Para cada `customDetails['<slug>']` revisar `faq` (5 entradas: `question` + `answer`), `problemContextBody`, `problemContextHeadline`, `whoForList`, `safetyPrecautions`, `resultado`. Contrastar contra el Criterio 1-7 de Global Constraints y contra `docs/MEDICAL_COMPLIANCE.md` (palabras prohibidas: "sin efectos secundarios", "indoloro"/"sin dolor", "permanente", "sin tiempo de recuperación"/"sin downtime", "garantizado", "aprobado por la FDA", "clínicamente probado"; nada de diagnosticar/prescribir/"curar").

- [ ] **Step 2: Leer los FAQ de `landingPages.js`**

`Read` los bloques de las 3 landings (`limpiezaFacial`, `prfYFibrina`, `tratamientosPostoperatorios`) — campo `faq` (y `problem.body` si existe). Mismo contraste.

- [ ] **Step 3: Construir la lista consolidada**

Tabla por categoría del spec. Punto de partida conocido (verificar líneas exactas al leer — pueden haber corrido):

| archivo | slug | campo | viejo | nuevo propuesto | cat |
|---|---|---|---|---|---|
| treatmentPages | `hidrofacial` | faq answer | "facilitando una extracción sin dolor y previniendo…" | "facilitando una extracción suave y muy tolerable, y previniendo…" | 1 |
| treatmentPages | `hifu-facial` | whoForList | "…definición de contornos sin tiempo de recuperación." | "…definición de contornos con reincorporación inmediata a tu rutina." | 3 |
| treatmentPages | `hifu-facial` | faq answer | "…no daña la epidermis externa, por lo que no requiere tiempo de recuperación ni cuidados especiales más allá de la hidratación y protección solar." | "…no daña la epidermis externa, por lo que no requiere reposo; puedes retomar tu rutina el mismo día, manteniendo hidratación y protección solar." | 3 |
| treatmentPages | `radiofrecuencia-facial` | faq answer | "…similar a un masaje con piedras calientes, sin dolor ni quemaduras." | "…similar a un masaje con piedras calientes, sin ardor ni quemaduras." | 1 |
| treatmentPages | `oxigenoterapia-facial` | faq answer | "…refrescante sobre la cara, sin dolor." | "…refrescante sobre la cara y muy cómoda." | 1 |
| treatmentPages | `tratamiento-acne` | resultado | "Reducción de imperfecciones and piel equilibrada" | "Reducción de imperfecciones y piel equilibrada" | 7 |
| treatmentPages | `dermabracion-facial` | faq answer | "…un masaje de succión muy cómodo en el rostro, sin dolor ni sangrado." | "…un masaje de succión muy cómodo en el rostro; no produce sangrado." | 1+2 |
| treatmentPages | `lipo-360` | faq answer | "…diseñados para desinflamar de forma confortable, sin dolor ni tracción." | "…diseñados para desinflamar de forma confortable y suave, sin tracción." | 1 |
| treatmentPages | `levantamiento-gluteos` | faq question | "¿El resultado de levantamiento es permanente?" | "¿Cuánto duran los resultados del levantamiento de glúteos?" | 4 |
| treatmentPages | `hifu-corporal` | problemContextBody | "…aportar un tensado profundo desde adentro, sin reposo posoperatorio." | "…aportar un tensado profundo de forma no invasiva." | 3 |
| treatmentPages | `hifu-corporal` | faq answer | "Cero tiempo de reposo. Puedes regresar al trabajo o realizar actividades físicas inmediatamente después de tu visita." | "Reincorporación inmediata. Puedes regresar al trabajo o a tus actividades habituales el mismo día." | 3 |
| treatmentPages | `depilacion-laser` | faq question | "¿Se elimina el vello de forma definitiva para siempre?" | "¿La depilación láser elimina el vello para siempre?" | 4 |
| treatmentPages | `depilacion-laser` | faq answer | "Logramos una reducción duradera del 85% al 90% del vello. Los folículos debilitados pueden requerir una sesión de retoque anual." | "No de forma total. Se logra una reducción notable y duradera del vello; los folículos debilitados pueden requerir sesiones de retoque." | 5 |
| treatmentPages | `tratamiento-capilar` | faq answer | "…micro-aperturas sumamente tolerables y cómodas, sin dolor ni sangrado." | "…micro-aperturas sumamente tolerables y cómodas; no producen sangrado." | 1+2 |

**MANTENER** (marcar en la lista con motivo, no editar): `manchas-cicatrices` problemContext "marcas permanentes" (describe la condición); `estrias-celulitis` faq "¿…elimina las estrías blancas por completo?" y `manchas-cicatrices` "¿…eliminar las manchas de sol por completo?" (preguntas-mito respondidas con "No" honesto).

Añadir a la lista cualquier ítem nuevo encontrado en Steps 1-2 (variantes de downtime tipo "¿tiempo de recuperación? / Ninguno", "¿inactividad? / Cero…", etc.).

- [ ] **Step 4: Presentar al usuario**

Mostrar la lista completa (viejo → nuevo → motivo + los "MANTENER"). Esperar aprobación o ajustes. Si el usuario cambia una redacción o mueve un ítem a "MANTENER", actualizar la lista. **No se aplica nada hasta aprobación explícita.**

---

## Task 2: Aplicar en `src/data/treatmentPages.js` + verificar + commit

**Files:**
- Modify: `src/data/treatmentPages.js` — solo los `faq`/`problemContext*`/`whoForList`/`resultado` de la lista aprobada.

**Interfaces:**
- Consumes: lista aprobada de Task 1 (subconjunto `archivo == treatmentPages`).
- Produces: nada para Task 3.

- [ ] **Step 1: Aplicar cada cambio de la lista con `Edit`**

Un `Edit` por ítem, usando el `old_string` exacto de la lista aprobada. No tocar nada fuera de la lista.

- [ ] **Step 2: `grep` de control**

Run:
```bash
grep -niE "sin dolor|indoloro|sin tiempo de recuperación|no requiere tiempo de recuperación|cero tiempo de reposo|sin reposo posoperatorio|definitiva para siempre|85% al 90%|imperfecciones and" src/data/treatmentPages.js
```
Expected: solo las líneas explícitamente marcadas "MANTENER" en la lista (si hay). Cero de las que se cambiaron.

- [ ] **Step 3: Arrancar server de test + suite visual**

Run:
```bash
(npx vite --port 3003 --strictPort > /tmp/vite3003.log 2>&1 &) ; sleep 7 ; curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3003/faciales/hidrofacial
npx playwright test tests/visual.spec.js
```
Expected: `200`, luego `22 passed` sin diffs. Si `hidrofacial-problem` o `hidrofacial-whofor` diffea (solo si la lista tocó esos campos de hidrofacial): verificar el `-diff.png` (solo texto), regenerar con `npx playwright test tests/visual.spec.js -g "Hidrofacial Detail Page" --update-snapshots`, re-correr la suite → 22/22. Cualquier otro baseline diffeando → PARAR.

- [ ] **Step 4: Check de DOM + consola**

Con el Browser pane (dev server puerto 3000), abrir 3-4 páginas tocadas (p. ej. `/faciales/hidrofacial`, `/laser-y-luz/depilacion-laser`, `/corporales/hifu-corporal`, `/capilar/tratamiento-capilar`). Para cada una:
- Expandir el/los FAQ modificado(s) → confirmar que abre y muestra el texto nuevo.
- En consola: `[...document.querySelectorAll('script[type="application/ld+json"]')].map(s=>s.textContent).find(t=>t.includes('"FAQPage"'))` → parsear → `mainEntity.length === 5`.
- `read_console_messages` (onlyErrors) → 0.

- [ ] **Step 5: Matar server de test**

Run:
```bash
powershell -NoProfile -Command "Get-NetTCPConnection -LocalPort 3003 -State Listen -ErrorAction SilentlyContinue | Select-Object -Expand OwningProcess | ForEach-Object { Stop-Process -Id \$_ -Force }"
```

- [ ] **Step 6: Registro + commit**

- `PROGRESS.md`: entrada nueva arriba — lista de qué se cambió (por slug/campo) y qué se mantuvo con motivo.
- `DECISIONS.md`: solo si hubo criterio no obvio (p. ej. "sin sangrado" conservado como hecho en microdermoabrasión).
- `graphify update .`.

```bash
git add src/data/treatmentPages.js PROGRESS.md DECISIONS.md graphify-out
git commit -m "fix(copy): compliance FAQ/problemContext/whoForList — treatmentPages

Reemplaza expresiones prohibidas por MEDICAL_COMPLIANCE.md (sin dolor, sin
tiempo de recuperación, permanente/para siempre, cifra de eficacia sin fuente,
typo 'and') por redaccion equivalente sin degradar el sentido, en los campos
que C1 no tocaba. Preguntas-mito respondidas con 'No' honesto se conservan.
test:visual 22/22.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

## Task 3: Aplicar en `src/data/landingPages.js` + verificar + commit + cierre

**Files:**
- Modify: `src/data/landingPages.js` — solo los `faq`/`problem.body` de la lista aprobada.
- Modify: `MEMORY.md` — nota de cierre.

**Interfaces:**
- Consumes: lista aprobada de Task 1 (subconjunto `archivo == landingPages`).
- Produces: barrido cerrado.

- [ ] **Step 1: Aplicar cada cambio de la lista con `Edit`**

Un `Edit` por ítem. Si la lista de Task 1 no marcó ningún ítem en `landingPages.js`, saltar a Step 3 y anotar "landings sin hallazgos" en el registro.

- [ ] **Step 2: `grep` de control**

Run:
```bash
grep -niE "sin dolor|indoloro|sin tiempo de recuperación|cero tiempo|para siempre|garantiz(a|amos) result|permanente" src/data/landingPages.js
```
Expected: solo "MANTENER" marcados (o líneas donde "garantizar" es parte de "garantizar tu seguridad/comodidad", que es admisible) — nada de lo cambiado.

- [ ] **Step 3: Server de test + suite visual**

Run:
```bash
(npx vite --port 3003 --strictPort > /tmp/vite3003.log 2>&1 &) ; sleep 7 ; curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3003/limpieza-facial-profunda
npx playwright test tests/visual.spec.js
```
Expected: `200`, `22 passed` sin diffs. Los FAQ de landings no están snapshoteados; los tests de landing capturan viewport superior. Si alguno diffea → verificar (solo texto) y regenerar, o PARAR si no cuadra.

- [ ] **Step 4: Check de DOM + consola**

Browser pane en `/limpieza-facial-profunda`, `/prf-y-fibrina`, `/tratamientos-postoperatorios` (solo las que se tocaron): expandir FAQ modificado, `FAQPage` mainEntity intacto, 0 errores de consola.

- [ ] **Step 5: Matar server de test**

```bash
powershell -NoProfile -Command "Get-NetTCPConnection -LocalPort 3003 -State Listen -ErrorAction SilentlyContinue | Select-Object -Expand OwningProcess | ForEach-Object { Stop-Process -Id \$_ -Force }"
```

- [ ] **Step 6: Registro + commit de cierre**

- `PROGRESS.md`: entrada de landings (o "sin hallazgos") + nota de cierre del barrido.
- `MEMORY.md`: nota de que los campos `faq`/`problemContext`/`whoForList` de las 25 páginas de tratamiento + 3 landings pasaron barrido de compliance (2026-08-27), con el criterio resumido; `disclaimer` NO se toca (CTA obligatoria).
- `DECISIONS.md`: si aplica.
- `graphify update .`.

```bash
git add src/data/landingPages.js PROGRESS.md MEMORY.md DECISIONS.md graphify-out
git commit -m "fix(copy): compliance FAQ — landings (cierra el barrido)

Ultima parte del barrido de compliance en campos faq. test:visual 22/22.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

## Self-Review (hecho al escribir el plan)

**1. Cobertura del spec:**
- Lectura completa 125 FAQ tratamiento + FAQ landings + problemContext/whoForList → Task 1 Steps 1-2. ✅
- Lista consolidada + un solo gate → Task 1 Steps 3-4. ✅
- Criterio 1-7 → Global Constraints (verbatim del spec) + tabla de Task 1 Step 3. ✅
- Typo `tratamiento-acne.resultado` → fila en la tabla, cat 7. ✅
- Cifra 85-90% → Q2→A aplicado en la tabla. ✅
- "MANTENER" (marcas permanentes / preguntas-mito) → listado explícito en Task 1 Step 3. ✅
- 2 commits (treatmentPages / landings) → Tasks 2 y 3. ✅
- No tocar `disclaimer` / testimonios / WarningBox / HIPAA → Global Constraints. ✅
- Verificación (test:visual 22/22, DOM, FAQPage mainEntity, grep) → Steps de Tasks 2 y 3. ✅
- Registro MEMORY al cierre → Task 3 Step 6. ✅

**2. Placeholders:** la lista final se completa en Task 1 con la lectura, pero las 14 filas conocidas ya traen `viejo` + `nuevo` concretos; el "cómo" está completo (Edit por ítem con old_string exacto, grep de control con patrón, ciclo de verificación con comandos). El gate de aprobación es parte del diseño (Q3 del brainstorming), no un placeholder.

**3. Consistencia:** los nombres de campo (`faq`, `problemContextBody`, `whoForList`, `resultado`) coinciden entre Global Constraints, la tabla y los steps. Las 3 tareas referencian la misma "lista aprobada de Task 1". El patrón de arranque/kill del server 3003 es idéntico en Tasks 2 y 3 y al de C1.

## Execution Handoff

Ver mensaje del chat.
