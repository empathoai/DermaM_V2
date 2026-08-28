# WarningBox Title Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Cambiar el título (y el eyebrow, para evitar repetición) por defecto de `WarningBox` para que las 25 páginas de tratamiento muestren "PRECAUCIONES Y CONTRAINDICACIONES" en vez de "CUÁNDO CONSULTAR ANTES".

**Architecture:** Edición de dos valores por defecto de prop en un solo componente presentacional (`WarningBox.jsx`). Su único consumidor (`TreatmentDetailPage.jsx`) no pasa esas props, así que el cambio se propaga solo a las 25 páginas de tratamiento sin tocar datos, CSS ni el consumidor.

**Tech Stack:** React 19, JSX (sin TypeScript), CSS Modules. Playwright para regresión visual (`npm run test:visual`, baseURL `http://localhost:3003`).

## Global Constraints

- Proyecto near-final: no tocar nada fuera de lo pedido. Solo `src/components/shared/WarningBox/WarningBox.jsx`.
- Copy de compliance: no introducir términos de `docs/MEDICAL_COMPLIANCE.md` (garantías, "sin dolor", "permanente", etc.). "Precauciones"/"contraindicaciones" están permitidos.
- Grafías exactas (verbatim del spec):
  - `title` → `'PRECAUCIONES Y CONTRAINDICACIONES'`
  - `eyebrow` → `'ANTES DE RESERVAR'`
- `npm run test:visual` debe cerrar **22/22 sin diffs**. Arrancar `vite --port=3003` a mano antes (no hay `webServer` en la config de Playwright).
- Un solo cambio, cerrado del todo: actualizar `PROGRESS.md`, `MEMORY.md`, `DECISIONS.md` al final.

---

### Task 1: Cambiar `title` y `eyebrow` por defecto en WarningBox

**Files:**
- Modify: `src/components/shared/WarningBox/WarningBox.jsx:6-7`

**Interfaces:**
- Consumes: nada.
- Produces: nada nuevo. `WarningBox` conserva su firma de props (`eyebrow`, `title`, `body`, `items`, `variant`); solo cambian dos valores por defecto.

- [ ] **Step 1: Arrancar el dev server para Playwright**

Run: `npm run dev -- --port=3003` (en una terminal aparte; dejar corriendo)
Expected: Vite sirve en `http://localhost:3003`.

- [ ] **Step 2: Capturar baseline actual de test:visual**

Run: `npm run test:visual`
Expected: PASS 22/22. Deja constancia de que el estado previo está limpio.

- [ ] **Step 3: Editar los dos defaults**

En `src/components/shared/WarningBox/WarningBox.jsx`, en la desestructuración de props del componente:

```jsx
export default function WarningBox({
  eyebrow = 'ANTES DE RESERVAR',
  title = 'PRECAUCIONES Y CONTRAINDICACIONES',
  body = 'Este tratamiento requiere valoración previa para confirmar si es adecuado para ti.',
  items = [
    'Si tienes condiciones activas en la zona a tratar',
    'Si estás embarazada o en lactancia',
    'Si estás bajo tratamiento especializado o estético reciente',
    'Si presentas sensibilidad, irritación o lesiones visibles',
    'Si tienes dudas sobre compatibilidad con tu estado actual'
  ],
  variant = 'warm' // 'warm' (#CCC9C1) or 'light' (#EFEFEB)
}) {
```

No tocar `body`, `items`, `variant`, el JSX ni el import.

- [ ] **Step 4: Verificar que no queda el texto viejo**

Run: `grep -rn "CUÁNDO CONSULTAR ANTES" src/`
Expected: 0 resultados.

Run: `grep -rn "PRECAUCIONES DE SEGURIDAD" src/`
Expected: 0 resultados.

- [ ] **Step 5: Regresión visual**

Run: `npm run test:visual`
Expected: PASS **22/22 sin diffs**. (El `WarningBox` está en `warningSection` / sección 9; el único snapshot de secciones, `hidrofacial-whatis.png` en `tests/visual.spec.js:114`, captura `whatIsSection` / sección 4 y no se ve afectado.)

Si aparece un diff: NO regenerar snapshots. Abrir el reporte, confirmar que el diff es dentro de `warningSection` y reevaluar con el usuario antes de seguir.

- [ ] **Step 6: Verificación DOM en 3 rutas**

Con el dev server en `:3003` (o `:3000`), abrir en el navegador y comprobar en cada una:
- `/faciales/hidrofacial`
- `/corporales/lipo-360`
- `/laser-y-luz/depilacion-laser`

Checks por ruta:
- El `<h2>` de la sección de advertencia dice "PRECAUCIONES Y CONTRAINDICACIONES".
- El eyebrow de esa sección dice "ANTES DE RESERVAR".
- Sin scroll horizontal en desktop (~1532px) ni en mobile (375px).
- Consola del navegador: 0 errores.

- [ ] **Step 7: Commit**

```bash
git add src/components/shared/WarningBox/WarningBox.jsx
git commit -m "fix(copy): WarningBox — 'CUÁNDO CONSULTAR ANTES' -> 'PRECAUCIONES Y CONTRAINDICACIONES'

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

- [ ] **Step 8: Registrar el cambio (cerrar el ciclo)**

Editar, en este orden:

1. `PROGRESS.md` — entrada nueva arriba de todo:
   - Qué cambió: `WarningBox.jsx` defaults `title` y `eyebrow`; impacto en las 25 páginas de tratamiento (sección `warningSection`).
   - Por qué el eyebrow también: evitar "PRECAUCIONES … PRECAUCIONES" en líneas contiguas.
   - Verificación: `test:visual` 22/22, grep 0 del texto viejo, DOM en 3 rutas OK, 0 errores de consola.
2. `MEMORY.md` — en la sección de backlog de `TreatmentDetailPage`/`WarningBox` (~L62): marcar el ítem `WarningBox.jsx:7` como **hecho (2026-08-27)** con el texto nuevo.
3. `DECISIONS.md` — entrada breve al final:
   - **Decisión:** al cambiar el `title` de `WarningBox` se cambió también el `eyebrow` (`'PRECAUCIONES DE SEGURIDAD'` → `'ANTES DE RESERVAR'`).
   - **Por qué:** el eyebrow se renderiza pegado al título; dejarlo habría repetido "PRECAUCIONES" en dos líneas seguidas. `'ANTES DE RESERVAR'` reancla al CTA de reserva.
   - **How to apply:** si alguna página necesita otro título/eyebrow, pasar las props explícitamente desde `TreatmentDetailPage.jsx` en vez de volver a cambiar el default.

- [ ] **Step 9: Commit del registro**

```bash
git add PROGRESS.md MEMORY.md DECISIONS.md
git commit -m "docs: registrar cambio de título de WarningBox (PROGRESS/MEMORY/DECISIONS)

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

- [ ] **Step 10: Push (con confirmación del usuario)**

Confirmar con el usuario y luego:

```bash
git push
```

- [ ] **Step 11: Parar el dev server de Playwright**

Cerrar la terminal del `vite --port=3003` que quedó abierta en el Step 1.

---

## Self-Review

**1. Spec coverage:**
- Cambio de `title` → Task 1 Step 3. ✓
- Cambio de `eyebrow` (justificado en el spec) → Task 1 Step 3. ✓
- Compliance ("precauciones/contraindicaciones" permitidos) → Global Constraints. ✓
- Riesgo visual / `whatIsSection` no afectada → Task 1 Step 5 (explicado). ✓
- Verificación DoD (test:visual 22/22, DOM 3 rutas, grep 0, 0 consola) → Steps 4-6. ✓
- Registro en PROGRESS/MEMORY/DECISIONS → Steps 8-9. ✓

**2. Placeholder scan:** sin "TBD"/"TODO"/"handle edge cases"/"similar to Task N". Todos los valores literales están escritos. ✓

**3. Type consistency:** no se definen ni renombran funciones/tipos; la firma de props de `WarningBox` no cambia. ✓
