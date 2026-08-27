# Sub-proyecto C — Respuesta Directa / GEO — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Dar a las 25 páginas de tratamiento de Derma.M un párrafo "EL PROTOCOLO" en forma de respuesta directa citable por motores de IA, más un `dateModified` tipado en el schema — sin tocar layout, componentes ni CSS.

**Architecture:** Todo el contenido vive en `src/data/treatmentPages.js` (`customDetails['<slug>']`, patrón `custom.X || <fallback>`). Se reescribe el string `whatIsBody` y se agrega el override `whatIsHeadline` por tratamiento; el builder ya cablea `whatIsHeadline`. Para `dateModified` se agrega un campo `contentUpdated` por tratamiento, una línea en el builder, y un nodo `MedicalWebPage` condicional en `src/components/shared/TreatmentSEO/TreatmentSEO.jsx`. Ejecución en 6 tareas: 1 de cableado de código + 5 de reescritura de copy por categoría, cada una con su ciclo de verificación (`npm run test:visual` + checks de DOM/consola/grep/compliance) y revisión del usuario.

**Tech Stack:** Vite + React 19, `react-helmet-async` (schema JSON-LD), Playwright (`npm run test:visual`, baseURL `http://localhost:3003`). No hay test runner unitario ni linter. Verificación = visual regression + inspección de DOM en el navegador (Browser pane / MCP) + `grep`.

## Global Constraints

Copiado verbatim del spec `docs/superpowers/specs/2026-08-27-sub-c-respuesta-directa-geo-design.md` y de `CLAUDE.md` / `docs/MEDICAL_COMPLIANCE.md`. Aplica a **todas** las tareas:

- **Proyecto near-final.** No modificar nada que no pida este plan. Sin refactors, sin "de paso", sin cambios de layout / componente / CSS / ruta.
- **Una cosa a la vez.** Una tarea (= una categoría, o el cableado) se cierra por completo — con aprobación del usuario y registro en `PROGRESS.md`/`DECISIONS.md`/`MEMORY.md` — antes de empezar la siguiente.
- **Archivos protegidos, no tocar:** `public/.htaccess`, `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`. Tampoco baselines de Playwright (`tests/**/*.png`).
- **`npm run test:visual` debe dar 22/22 sin diffs** tras cada tarea. Cualquier diff en la suite = alarma, se frena la tarea y se investiga. La sección 4 "EL PROTOCOLO" no está en ningún baseline, así que el resultado esperado es 0 diffs.
- **Compliance de copy médico** (`docs/MEDICAL_COMPLIANCE.md`). Palabras/expresiones **prohibidas** en cualquier `whatIsBody` nuevo: `"sin efectos secundarios"`, `"indoloro"` / `"sin dolor"`, `"permanente"`, `"sin tiempo de recuperación"` / `"sin downtime"`, `"garantizado"` / "resultados garantizados", `"aprobado por la FDA"` / `"FDA-approved"`, `"clínicamente probado"` / `"clinically proven"`. Nada de diagnosticar, prescribir ni afirmar que se "cura" una condición. Beneficios siempre con lenguaje atenuado: "puede ayudar a mejorar", "está diseñado para favorecer", "suele", "busca".
- **Patrón `whatIsBody` (C1.3):**
  - **Regla 1 (no negociable):** la 1ª oración es una definición autónoma citable — *qué es* + *mecanismo* + *para qué sirve* — que arranca con el nombre del tratamiento y se entiende sin contexto previo (sin "este protocolo", "el mismo", pronombres colgados).
  - **Regla 2 (flexible):** el resto suma hasta **40–70 palabras en total**, con beneficios en lenguaje compliant + una mención **orgánica** de "West Palm Beach" + una señal de valoración / indicación profesional previa.
  - **Redacción variada:** está prohibido que dos páginas terminen con la misma oración textual (huella de boilerplate).
  - **Base factual (Q3-B):** se redacta SOLO a partir de lo que ya vive en el archivo para ese tratamiento (`whatIsBody` actual + `description` + `benefits` + `problemContextHeadline` + `problemContextBody` + las 5 entradas de `custom.faq`). No se inventan hechos. Si el texto actual arrastra un problema de compliance, se corrige y se documenta en la revisión.
- **Lista autoritativa de slugs:** `slugsByCategory` en `src/data/treatmentPages.js` (~L1145). La key del objeto (`laserYLuz`, `dentalEstetico`) **difiere** del segmento de URL / `categorySlug` (`laser-y-luz`, `dental-estetico`).
- **Fuera de alcance:** C2 (dato cuantitativo + enlace de autoridad), backlog de `WarningBox.jsx`, llenar `metaTitle`/`metaDescription`.
- **Commits:** al final de cada tarea, tras aprobación. Mensaje en español, prefijo `seo(geo):` o `feat(schema):`. Terminar el mensaje con la línea `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>`.

---

## Task 1: Cableado de `contentUpdated` + nodo `MedicalWebPage`

**Files:**
- Modify: `src/components/shared/TreatmentSEO/TreatmentSEO.jsx` (nodo `Service`: agregar `@id`; `@graph`: agregar `MedicalWebPage` condicional)
- Modify: `src/data/treatmentPages.js` (builder: una línea `contentUpdated: custom.contentUpdated || null`; bloque `customDetails.microneedling`: agregar `contentUpdated: '2026-08-27'`)

**Interfaces:**
- Consumes: nada de tareas previas.
- Produces:
  - Campo `data.contentUpdated` (`string 'YYYY-MM-DD' | null`) en el objeto compilado de cada tratamiento — lo consumen las tareas 2-6 al setearlo por tratamiento, y `TreatmentSEO` al decidir si emite el nodo.
  - `TreatmentSEO` emite `@graph = [Service(#service), BreadcrumbList]` siempre, y agrega `MedicalWebPage(#webpage)` cuando `data.contentUpdated` es truthy.

- [ ] **Step 1: Confirmar el `@id` de `#website`**

Run:
```bash
grep -n "#website\|@type.*WebSite" src/pages/Home.jsx
```
Expected: aparece `"@type": "WebSite"` con `"@id": "https://dermamskinhealth.com/#website"` (verificado 2026-08-27, líneas ~96-97). Si NO aparece: usar `"@id": "https://dermamskinhealth.com/#organization"` en `isPartOf` (ese `@id` sí existe y ya se referencia desde `provider`), y anotar la desviación en `DECISIONS.md`.

- [ ] **Step 2: Agregar `@id` al nodo `Service` en `TreatmentSEO.jsx`**

En el objeto `graph['@graph']`, primer elemento (`'@type': 'Service'`), agregar `'@id'` como primera propiedad:

```jsx
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name,
        description,
        url,
        serviceType: 'Aesthetic Treatment',
        image,
        areaServed: { '@type': 'City', name: 'West Palm Beach' },
        provider: {
          '@type': 'HealthAndBeautyBusiness',
          '@id': `${SITE}/#organization`,
          name: 'Derma.M',
        },
      },
```

(`url` ya está definido en el componente como `` `${SITE}/${categorySlug}/${slug}` ``.)

- [ ] **Step 3: Agregar el nodo `MedicalWebPage` condicional**

Justo antes del `return`, después de construir `graph`, insertar:

```jsx
  if (data.contentUpdated) {
    graph['@graph'].push({
      '@type': 'MedicalWebPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      inLanguage: 'es',
      isPartOf: { '@id': `${SITE}/#website` },
      about: { '@id': `${url}#service` },
      dateModified: data.contentUpdated,
    });
  }
```

(`title` ya está definido en el componente — es el string compuesto con geo. Si en el Step 1 `#website` no existía, cambiar `isPartOf` a `{ '@id': `${SITE}/#organization` }`.)

- [ ] **Step 4: Agregar `contentUpdated` al objeto compilado del builder**

En `src/data/treatmentPages.js`, dentro de `compiled[catKey][slug] = { ... }`, junto a `metaTitle` / `metaDescription`:

```js
        metaTitle: base.metaTitle || null,
        metaDescription: base.metaDescription || null,
        contentUpdated: custom.contentUpdated || null,
```

- [ ] **Step 5: Retro-completar `microneedling`**

En `src/data/treatmentPages.js`, bloque `customDetails.microneedling` (ya tiene `whatIsHeadline` + `whatIsBody` del piloto), agregar:

```js
    contentUpdated: '2026-08-27',
```

- [ ] **Step 6: Arrancar el server de test y correr la suite visual**

Run:
```bash
(npx vite --port 3003 --strictPort > /tmp/vite3003.log 2>&1 &) ; sleep 4 ; curl -s -o /dev/null -w "%{http_code}" http://localhost:3003/faciales/microneedling
```
Expected: `200`.

Run:
```bash
npx playwright test tests/visual.spec.js
```
Expected: `22 passed`, sin diffs.

- [ ] **Step 7: Verificar el `@graph` en el DOM de microneedling**

Con el Browser pane (dev server puerto 3000) navegar a `/faciales/microneedling` y ejecutar en consola:
```js
JSON.parse([...document.querySelectorAll('script[type="application/ld+json"]')]
  .map(s => s.textContent).find(t => t.includes('"MedicalWebPage"')))
```
Expected: un `@graph` con 3 nodos — `Service` (con `"@id"` terminando en `#service`), `BreadcrumbList`, y `MedicalWebPage` con `"dateModified": "2026-08-27"`, `"about": { "@id": ".../faciales/microneedling#service" }`, `"isPartOf"` presente. Verificar que sigue existiendo un `<script>` **aparte** con `FAQPage` (de `FAQAccordion`).

- [ ] **Step 8: Verificar una página SIN `contentUpdated`**

Navegar a `/faciales/hidrofacial` (todavía sin `contentUpdated`). En consola:
```js
[...document.querySelectorAll('script[type="application/ld+json"]')]
  .map(s => s.textContent).some(t => t.includes('"MedicalWebPage"'))
```
Expected: `false` — el nodo NO aparece cuando `contentUpdated` es `null`.

- [ ] **Step 9: Chequear consola**

En ambas páginas: 0 errores en la consola del navegador (`read_console_messages` con `onlyErrors`).

- [ ] **Step 10: Matar el server de test**

Run:
```bash
powershell -NoProfile -Command "Get-NetTCPConnection -LocalPort 3003 -State Listen -ErrorAction SilentlyContinue | Select-Object -Expand OwningProcess | ForEach-Object { Stop-Process -Id \$_ -Force }"
```

- [ ] **Step 11: Registro + commit** (tras aprobación del usuario)

- `PROGRESS.md`: entrada nueva arriba — "Sub-proyecto C1 — cableado: `contentUpdated` + nodo `MedicalWebPage` en `TreatmentSEO`; microneedling retro-completado". Anotar la resolución de `isPartOf` (`#website` vs `#organization`).
- `DECISIONS.md`: agregar sólo si `#website` no existía y se usó fallback.
- `MEMORY.md`: en la nota de sub-proyecto C, documentar el campo `contentUpdated` + el nodo `MedicalWebPage` condicional.
- `graphify update .` (cambió `TreatmentSEO.jsx`).

```bash
git add src/components/shared/TreatmentSEO/TreatmentSEO.jsx src/data/treatmentPages.js PROGRESS.md MEMORY.md DECISIONS.md graphify-out
git commit -m "feat(schema): nodo MedicalWebPage + contentUpdated en páginas de tratamiento

Service gana @id (#service); TreatmentSEO agrega un nodo MedicalWebPage
condicional (sólo si data.contentUpdated) con dateModified tipado y about ->
Service. Builder cablea contentUpdated: custom.contentUpdated || null.
microneedling retro-completado con 2026-08-27. test:visual 22/22 sin diffs.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

## Task 2: Reescritura GEO — categoría `faciales` (11 tratamientos)

**Files:**
- Modify: `src/data/treatmentPages.js` — bloques `customDetails` de los 11 slugs de abajo. Por cada uno: reescribir `whatIsBody`, agregar `whatIsHeadline`, agregar `contentUpdated: '<fecha de hoy>'`.

**Interfaces:**
- Consumes: de Task 1 — el campo `contentUpdated` ya está cableado en el builder y `TreatmentSEO` ya emite el nodo `MedicalWebPage` cuando existe.
- Produces: nada que consuman las tareas siguientes (cada categoría es independiente).

**Slugs (key `slugsByCategory.faciales`, menos `microneedling`) + `whatIsHeadline` propuesto:**

| slug | `title` actual | `whatIsHeadline` propuesto |
|---|---|---|
| `hidrofacial` | HIDROFACIAL | `Hidrofacial: qué es y para qué sirve` |
| `hifu-facial` | HIFU FACIAL | `HIFU facial: qué es y para qué sirve` |
| `peel-coreano` | PEEL COREANO | `Peel coreano: qué es y para qué sirve` |
| `radiofrecuencia-facial` | RADIOFRECUENCIA FACIAL | `Radiofrecuencia facial: qué es y para qué sirve` |
| `oxigenoterapia-facial` | OXIGENOTERAPIA FACIAL | `Oxigenoterapia facial: qué es y para qué sirve` |
| `rejuvenecimiento-facial` | REJUVENECIMIENTO FACIAL | `Rejuvenecimiento facial: qué es y para qué sirve` |
| `tratamiento-acne` | TRATAMIENTO DE ACNÉ | `Tratamiento de acné: en qué consiste y para quién es` |
| `manchas-cicatrices` | MANCHAS Y CICATRICES | `Tratamiento de manchas y cicatrices: qué es y cómo funciona` |
| `dermabracion-facial` | DERMABRASIÓN FACIAL | `Dermabrasión facial: qué es y para qué sirve` |
| `plasma-frio` | PLASMA FRÍO | `Plasma frío: qué es y para qué sirve` |
| `carboxiterapia-facial` | CARBOXITERAPIA FACIAL | `Carboxiterapia facial: qué es y para qué sirve` |

Los `whatIsHeadline` son propuestas — se ajustan en la revisión si el usuario prefiere otra forma. No usar `¿?` (decisión de `DECISIONS.md` 2026-08-27).

- [ ] **Step 1: Leer el material fuente de los 11**

Run:
```bash
grep -nE "  (hidrofacial|hifu-facial|peel-coreano|radiofrecuencia-facial|oxigenoterapia-facial|rejuvenecimiento-facial|tratamiento-acne|manchas-cicatrices|dermabracion-facial|plasma-frio|carboxiterapia-facial): \{" src/data/treatmentPages.js
```
Luego `Read` cada bloque `customDetails['<slug>']` completo (whatIsBody actual, problemContext*, las 5 faq) + su entrada en `src/data/categoryPages.js` (`description`, `benefits`).

- [ ] **Step 2: Redactar los 11 `whatIsBody` nuevos**

Aplicar el patrón C1.3 (ver Global Constraints) a cada uno. Para cada tratamiento:
- 1ª oración: definición autónoma (`<Nombre> es un tratamiento estético facial que <mecanismo> para <objetivo>.`).
- Resto (40–70 palabras totales): beneficios atenuados tomados de `benefits` / `whatIsBody` actual + mención orgánica de West Palm Beach + señal de valoración previa. **Cierre distinto en cada uno.**
- Cruzar contra la lista de palabras prohibidas ANTES de escribir al archivo.

Presentar los 11 borradores al usuario en la revisión (Step 6) junto con una lista de correcciones de compliance si el texto viejo tenía alguna.

- [ ] **Step 3: Escribir los cambios en `src/data/treatmentPages.js`**

Por cada uno de los 11 bloques `customDetails['<slug>']`:
- Reemplazar el string `whatIsBody`.
- Agregar `whatIsHeadline: '<de la tabla>'`.
- Agregar `contentUpdated: '<YYYY-MM-DD de hoy>'`.

- [ ] **Step 4: Arrancar server de test + suite visual**

Run:
```bash
(npx vite --port 3003 --strictPort > /tmp/vite3003.log 2>&1 &) ; sleep 4 ; curl -s -o /dev/null -w "%{http_code}" http://localhost:3003/faciales/hidrofacial
```
Expected: `200`.

Run:
```bash
npx playwright test tests/visual.spec.js
```
Expected: `22 passed`, sin diffs. (Si aparece un diff en `hidrofacial-*` u otro baseline → PARAR, investigar: la sección 4 no debería estar snapshoteada.)

- [ ] **Step 5: Check de DOM + consola (2-3 rutas)**

Con el Browser pane, para `/faciales/hidrofacial`, `/faciales/tratamiento-acne` y `/faciales/manchas-cicatrices`:
- El `<h2>` de "EL PROTOCOLO" muestra el `whatIsHeadline` nuevo (en MAYÚSCULAS por CSS, sin `¿?`).
- La 1ª oración del `<p>` siguiente es la definición autónoma y arranca con el nombre del tratamiento.
- Aparecen "West Palm Beach" y una señal de valoración en el párrafo.
- `read_console_messages` (onlyErrors): 0 errores.
- (Si `contentUpdated` se seteó) en consola: el `@graph` incluye `MedicalWebPage` con `dateModified` = la fecha de hoy.

- [ ] **Step 6: Revisión del usuario**

Presentar: los 11 `whatIsBody` nuevos (texto completo), los 11 `whatIsHeadline`, y la lista de correcciones de compliance preexistentes (si hubo). Esperar aprobación o pedido de cambios. Si hay cambios → aplicarlos y re-correr Steps 4-5.

- [ ] **Step 7: `grep` de sanidad**

Run:
```bash
grep -c "whatIsHeadline" src/data/treatmentPages.js
```
Expected: al menos 12 (microneedling + 11 de esta tanda).

Verificar que ningún `whatIsBody` viejo de faciales quedó — comparar contra lo leído en Step 1.

- [ ] **Step 8: Matar server de test**

```bash
powershell -NoProfile -Command "Get-NetTCPConnection -LocalPort 3003 -State Listen -ErrorAction SilentlyContinue | Select-Object -Expand OwningProcess | ForEach-Object { Stop-Process -Id \$_ -Force }"
```

- [ ] **Step 9: Registro + commit**

- `PROGRESS.md`: entrada nueva arriba — categoría faciales, 11 tratamientos, correcciones de compliance aplicadas (listar).
- `DECISIONS.md`: sólo si se normalizó algún nombre de forma no obvia.
- `graphify update .` (cambió `treatmentPages.js`).

```bash
git add src/data/treatmentPages.js PROGRESS.md DECISIONS.md graphify-out
git commit -m "seo(geo): respuesta directa en whatIsBody — 11 faciales

Reescribe el párrafo 'EL PROTOCOLO' de hidrofacial, hifu-facial, peel-coreano,
radiofrecuencia-facial, oxigenoterapia-facial, rejuvenecimiento-facial,
tratamiento-acne, manchas-cicatrices, dermabracion-facial, plasma-frio y
carboxiterapia-facial como respuesta directa citable (1a oracion autonoma).
+ whatIsHeadline declarativo + contentUpdated. test:visual 22/22 sin diffs.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

## Task 3: Reescritura GEO — categoría `corporales` (8 tratamientos)

**Files:**
- Modify: `src/data/treatmentPages.js` — bloques `customDetails` de los 8 slugs de abajo.

**Interfaces:**
- Consumes: de Task 1 — `contentUpdated` cableado.
- Produces: nada para tareas siguientes.

**Slugs (key `slugsByCategory.corporales`) + `whatIsHeadline` propuesto:**

| slug | `title` actual | `whatIsHeadline` propuesto |
|---|---|---|
| `lipo-360` | LIPO 360 | `Lipo 360: qué es y para qué sirve` |
| `levantamiento-gluteos` | LEVANTAMIENTO DE GLÚTEOS | `Levantamiento de glúteos: qué es y para qué sirve` |
| `marcacion-abdominal` | MARCACIÓN ABDOMINAL | `Marcación abdominal: qué es y para qué sirve` |
| `hifu-corporal` | HIFU CORPORAL | `HIFU corporal: qué es y para qué sirve` |
| `corrientes-rusas` | CORRIENTES RUSAS | `Corrientes rusas: qué son y para qué sirven` |
| `estrias-celulitis` | ESTRÍAS Y CELULITIS | `Tratamiento de estrías y celulitis: qué es y cómo funciona` |
| `carboxiterapia-corporal` | CARBOXITERAPIA CORPORAL | `Carboxiterapia corporal: qué es y para qué sirve` |
| `maderoterapia-corporal` | MADEROTERAPIA CORPORAL | `Maderoterapia corporal: qué es y para qué sirve` |

- [ ] **Step 1: Leer el material fuente de los 8**

`grep` de los 8 bloques en `src/data/treatmentPages.js`; `Read` cada `customDetails['<slug>']` + su entrada en `categoryPages.js`.

- [ ] **Step 2: Redactar los 8 `whatIsBody` nuevos**

Patrón C1.3. 1ª oración: `<Nombre> es un protocolo estético corporal que <mecanismo> para <objetivo>.` Resto 40–70 palabras, beneficios atenuados, West Palm Beach orgánico, valoración previa, cierre distinto por tratamiento. Cruzar palabras prohibidas.

Nota compliance corporales: no prometer pérdida de peso ni medidas ("reduce X cm", "elimina la grasa"). Usar "puede ayudar a mejorar la apariencia de", "acompaña", "favorece la firmeza".

- [ ] **Step 3: Escribir los cambios**

Por cada bloque: reemplazar `whatIsBody`, agregar `whatIsHeadline`, agregar `contentUpdated: '<hoy>'`.

- [ ] **Step 4: Server de test + suite visual**

```bash
(npx vite --port 3003 --strictPort > /tmp/vite3003.log 2>&1 &) ; sleep 4 ; curl -s -o /dev/null -w "%{http_code}" http://localhost:3003/corporales/lipo-360
npx playwright test tests/visual.spec.js
```
Expected: `200`, luego `22 passed` sin diffs.

- [ ] **Step 5: Check de DOM + consola**

Browser pane en `/corporales/lipo-360`, `/corporales/estrias-celulitis`, `/corporales/maderoterapia-corporal`: H2 nuevo, 1ª oración autónoma, "West Palm Beach" + valoración presentes, 0 errores de consola, `@graph` con `MedicalWebPage` + `dateModified` de hoy.

- [ ] **Step 6: Revisión del usuario**

Presentar los 8 borradores + `whatIsHeadline` + correcciones de compliance. Aprobación o cambios → aplicar y re-correr Steps 4-5.

- [ ] **Step 7: `grep` de sanidad**

`grep -c "whatIsHeadline" src/data/treatmentPages.js` → ≥ 20. Verificar que ningún `whatIsBody` viejo de corporales quedó.

- [ ] **Step 8: Matar server de test**

```bash
powershell -NoProfile -Command "Get-NetTCPConnection -LocalPort 3003 -State Listen -ErrorAction SilentlyContinue | Select-Object -Expand OwningProcess | ForEach-Object { Stop-Process -Id \$_ -Force }"
```

- [ ] **Step 9: Registro + commit**

`PROGRESS.md` (categoría corporales, 8, compliance), `DECISIONS.md` si aplica, `graphify update .`.

```bash
git add src/data/treatmentPages.js PROGRESS.md DECISIONS.md graphify-out
git commit -m "seo(geo): respuesta directa en whatIsBody — 8 corporales

lipo-360, levantamiento-gluteos, marcacion-abdominal, hifu-corporal,
corrientes-rusas, estrias-celulitis, carboxiterapia-corporal y
maderoterapia-corporal: parrafo 'EL PROTOCOLO' como respuesta directa citable
+ whatIsHeadline declarativo + contentUpdated. test:visual 22/22 sin diffs.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

## Task 4: Reescritura GEO — categoría `laser-y-luz` (2 tratamientos)

**Files:**
- Modify: `src/data/treatmentPages.js` — `customDetails['depilacion-laser']`, `customDetails['ipl']`.

**Interfaces:**
- Consumes: de Task 1 — `contentUpdated` cableado.
- Produces: nada.

**Slugs (key `slugsByCategory.laserYLuz`, segmento URL `laser-y-luz`) + `whatIsHeadline`:**

| slug | `title` actual | `whatIsHeadline` propuesto |
|---|---|---|
| `depilacion-laser` | DEPILACIÓN LÁSER | `Depilación láser: qué es y cómo funciona` |
| `ipl` | IPL | `IPL (luz pulsada intensa): qué es y para qué sirve` |

- [ ] **Step 1: Leer material fuente de los 2**

`Read` `customDetails['depilacion-laser']` + `customDetails['ipl']` + sus entradas en `categoryPages.js`.

- [ ] **Step 2: Redactar los 2 `whatIsBody`**

Patrón C1.3. Compliance láser: sin "elimina el vello para siempre" / "permanente" (usar "reducción progresiva y duradera del vello"), sin claims de enfermedad, sin "aprobado por la FDA". West Palm Beach orgánico, valoración previa, cierre distinto entre los 2.

- [ ] **Step 3: Escribir los cambios**

`whatIsBody` reescrito + `whatIsHeadline` + `contentUpdated: '<hoy>'` en cada bloque.

- [ ] **Step 4: Server de test + suite visual**

```bash
(npx vite --port 3003 --strictPort > /tmp/vite3003.log 2>&1 &) ; sleep 4 ; curl -s -o /dev/null -w "%{http_code}" http://localhost:3003/laser-y-luz/depilacion-laser
npx playwright test tests/visual.spec.js
```
Expected: `200`, `22 passed` sin diffs.

- [ ] **Step 5: Check de DOM + consola**

Browser pane en `/laser-y-luz/depilacion-laser` y `/laser-y-luz/ipl`: H2 nuevo, 1ª oración autónoma, WPB + valoración, 0 errores, `@graph` con `MedicalWebPage`.

- [ ] **Step 6: Revisión del usuario** — 2 borradores + headlines + compliance. Cambios → re-correr Steps 4-5.

- [ ] **Step 7: `grep`** — `grep -c "whatIsHeadline"` ≥ 22; sin `whatIsBody` viejo de láser.

- [ ] **Step 8: Matar server**

```bash
powershell -NoProfile -Command "Get-NetTCPConnection -LocalPort 3003 -State Listen -ErrorAction SilentlyContinue | Select-Object -Expand OwningProcess | ForEach-Object { Stop-Process -Id \$_ -Force }"
```

- [ ] **Step 9: Registro + commit**

`PROGRESS.md`, `DECISIONS.md` si aplica, `graphify update .`.

```bash
git add src/data/treatmentPages.js PROGRESS.md DECISIONS.md graphify-out
git commit -m "seo(geo): respuesta directa en whatIsBody — depilacion-laser + ipl

Parrafo 'EL PROTOCOLO' como respuesta directa citable + whatIsHeadline
declarativo + contentUpdated. test:visual 22/22 sin diffs.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

## Task 5: Reescritura GEO — categoría `dental-estetico` (2 tratamientos)

**Files:**
- Modify: `src/data/treatmentPages.js` — `customDetails['blanqueamiento-dental']`, `customDetails['limpieza-dental']`.

**Interfaces:**
- Consumes: de Task 1 — `contentUpdated` cableado.
- Produces: nada.

**Slugs (key `slugsByCategory.dentalEstetico`, segmento URL `dental-estetico`) + `whatIsHeadline`:**

| slug | `title` actual | `whatIsHeadline` propuesto |
|---|---|---|
| `blanqueamiento-dental` | BLANQUEAMIENTO DENTAL | `Blanqueamiento dental: qué es y para qué sirve` |
| `limpieza-dental` | LIMPIEZA DENTAL | `Limpieza dental: qué es y para qué sirve` |

- [ ] **Step 1: Leer material fuente de los 2**

`Read` ambos bloques `customDetails` + entradas en `categoryPages.js`. Nota: ambos ya tienen `beforeAfter` real (no tocar ese campo).

- [ ] **Step 2: Redactar los 2 `whatIsBody`**

Patrón C1.3. Compliance dental: es estético, no odontología clínica — "aclara el tono", "remueve placa y sarro superficial"; sin "blanquea permanentemente", sin diagnóstico. WPB orgánico, valoración previa, cierre distinto.

- [ ] **Step 3: Escribir los cambios** — `whatIsBody` + `whatIsHeadline` + `contentUpdated: '<hoy>'`.

- [ ] **Step 4: Server de test + suite visual**

```bash
(npx vite --port 3003 --strictPort > /tmp/vite3003.log 2>&1 &) ; sleep 4 ; curl -s -o /dev/null -w "%{http_code}" http://localhost:3003/dental-estetico/limpieza-dental
npx playwright test tests/visual.spec.js
```
Expected: `200`, `22 passed` sin diffs.

- [ ] **Step 5: Check de DOM + consola**

Browser pane en `/dental-estetico/blanqueamiento-dental` y `/dental-estetico/limpieza-dental`: H2 nuevo, 1ª oración autónoma, WPB + valoración, 0 errores, `@graph` con `MedicalWebPage`. Confirmar que la sección antes/después real sigue intacta.

- [ ] **Step 6: Revisión del usuario** — 2 borradores + headlines + compliance. Cambios → re-correr Steps 4-5.

- [ ] **Step 7: `grep`** — `grep -c "whatIsHeadline"` ≥ 24; sin `whatIsBody` viejo dental.

- [ ] **Step 8: Matar server**

```bash
powershell -NoProfile -Command "Get-NetTCPConnection -LocalPort 3003 -State Listen -ErrorAction SilentlyContinue | Select-Object -Expand OwningProcess | ForEach-Object { Stop-Process -Id \$_ -Force }"
```

- [ ] **Step 9: Registro + commit**

`PROGRESS.md`, `DECISIONS.md` si aplica, `graphify update .`.

```bash
git add src/data/treatmentPages.js PROGRESS.md DECISIONS.md graphify-out
git commit -m "seo(geo): respuesta directa en whatIsBody — blanqueamiento + limpieza dental

Parrafo 'EL PROTOCOLO' como respuesta directa citable + whatIsHeadline
declarativo + contentUpdated. test:visual 22/22 sin diffs.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

## Task 6: Reescritura GEO — categoría `capilar` (1 tratamiento) + cierre de C1

**Files:**
- Modify: `src/data/treatmentPages.js` — `customDetails['tratamiento-capilar']`.
- Modify: `MEMORY.md` — marcar C1 completo.

**Interfaces:**
- Consumes: de Task 1 — `contentUpdated` cableado.
- Produces: C1 cerrado; queda C2 y los backlogs para ciclos aparte.

**Slug (key `slugsByCategory.capilar`) + `whatIsHeadline`:**

| slug | `title` actual | `whatIsHeadline` propuesto |
|---|---|---|
| `tratamiento-capilar` | TRATAMIENTO CAPILAR | `Tratamiento capilar: qué es y para qué sirve` |

- [ ] **Step 1: Leer material fuente**

`Read` `customDetails['tratamiento-capilar']` + entrada en `categoryPages.js`.

- [ ] **Step 2: Redactar el `whatIsBody`**

Patrón C1.3. 1ª oración autónoma con "tratamiento capilar" al inicio. Compliance: sin "detiene la caída", "revierte la calvicie", "resultados garantizados" — usar "puede ayudar a fortalecer", "está diseñado para favorecer". WPB orgánico, valoración previa.

- [ ] **Step 3: Escribir el cambio** — `whatIsBody` + `whatIsHeadline` + `contentUpdated: '<hoy>'`.

- [ ] **Step 4: Server de test + suite visual**

```bash
(npx vite --port 3003 --strictPort > /tmp/vite3003.log 2>&1 &) ; sleep 4 ; curl -s -o /dev/null -w "%{http_code}" http://localhost:3003/capilar/tratamiento-capilar
npx playwright test tests/visual.spec.js
```
Expected: `200`, `22 passed` sin diffs.

- [ ] **Step 5: Check de DOM + consola**

Browser pane en `/capilar/tratamiento-capilar`: H2 nuevo, 1ª oración autónoma, WPB + valoración, 0 errores, `@graph` con `MedicalWebPage`.

- [ ] **Step 6: Verificación global de C1**

Run:
```bash
grep -c "whatIsHeadline" src/data/treatmentPages.js
grep -c "contentUpdated" src/data/treatmentPages.js
```
Expected: `whatIsHeadline` ≥ 25 (las 25 páginas). `contentUpdated` ≥ 26 (25 en `customDetails` + 1 en el builder).

Recorrer 1 ruta por categoría en el Browser pane y confirmar que las 5 tienen H2 declarativo + 1ª oración autónoma + `MedicalWebPage` en el `@graph`.

- [ ] **Step 7: Revisión del usuario** — el borrador de capilar + confirmación de que C1 está completo. Cambios → re-correr Steps 4-5.

- [ ] **Step 8: Matar server**

```bash
powershell -NoProfile -Command "Get-NetTCPConnection -LocalPort 3003 -State Listen -ErrorAction SilentlyContinue | Select-Object -Expand OwningProcess | ForEach-Object { Stop-Process -Id \$_ -Force }"
```

- [ ] **Step 9: Registro + commit de cierre**

- `PROGRESS.md`: entrada de capilar + entrada de cierre "Sub-proyecto C1 COMPLETO (25/25 páginas de tratamiento con respuesta directa + `dateModified`)".
- `MEMORY.md`: la nota "Sub-proyecto C1 — EN CURSO" pasa a "C1 COMPLETO (25/25)"; dejar anotado que C2 (dato + fuente de autoridad) y el backlog de `WarningBox.jsx` siguen pendientes.
- `DECISIONS.md`: sólo si hubo decisión no obvia.
- `graphify update .`.

```bash
git add src/data/treatmentPages.js PROGRESS.md MEMORY.md DECISIONS.md graphify-out
git commit -m "seo(geo): respuesta directa en whatIsBody — tratamiento-capilar (cierra C1)

Ultima categoria. Las 25 paginas de tratamiento ahora tienen el parrafo
'EL PROTOCOLO' como respuesta directa citable + whatIsHeadline declarativo +
contentUpdated + nodo MedicalWebPage con dateModified. test:visual 22/22.
Queda C2 (dato + fuente de autoridad) para ciclo aparte.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

## Self-Review (hecho al escribir el plan)

**1. Cobertura del spec:**
- C1.1 (campos `whatIsHeadline` / `whatIsBody` / `contentUpdated` por tratamiento) → Tasks 2-6 + retro-fill en Task 1 Step 5. ✅
- C1.2 (línea `contentUpdated` en el builder) → Task 1 Step 4. ✅
- C1.3 (patrón de redacción) → Global Constraints + Step "Redactar" de cada Task 2-6. ✅
- C1.4 (`@id` en `Service` + nodo `MedicalWebPage`) → Task 1 Steps 2-3, con la resolución de `isPartOf` en Step 1. ✅
- Ejecución en 5 tandas por categoría → Tasks 2-6, una por categoría, orden faciales→corporales→láser→dental→capilar. ✅
- Verificación por tanda (`test:visual` 22/22, DOM, consola, grep, compliance, registro) → Steps 4-9 de cada Task. ✅
- Registro final en `MEMORY.md` (C1 completo) → Task 6 Step 9. ✅
- Fuera de alcance (C2, WarningBox, meta*) → declarado en Global Constraints, no hay tarea. ✅

**2. Placeholders:** los `whatIsBody` finales NO están en el plan a propósito — se redactan en ejecución y los revisa el usuario por tanda (cadencia acordada en brainstorming, Q2-A). El "cómo" está completo: slugs exactos, campos fuente exactos, patrón C1.3 con reglas verificables, `whatIsHeadline` pre-calculado por tratamiento, ciclo de verificación con comandos concretos. No hay "TBD", "agregar validación apropiada" ni pasos sin comando.

**3. Consistencia de tipos/nombres:**
- `data.contentUpdated` (`string | null`) — definido en Task 1 Step 4, consumido en Task 1 Step 3 (`if (data.contentUpdated)`) y seteado en Tasks 2-6. ✅
- `#service` / `#webpage` — `@id` con sufijo consistente entre Task 1 Step 2 y Step 3 (`about: { '@id': \`${url}#service\` }`). ✅
- `whatIsHeadline` / `whatIsBody` / `contentUpdated` — mismos nombres de campo en `customDetails` y en el builder (`custom.whatIsHeadline`, `custom.contentUpdated`) que los ya existentes del piloto. ✅
- `slugsByCategory` keys (`laserYLuz`, `dentalEstetico`) vs segmento URL (`laser-y-luz`, `dental-estetico`) — aclarado en Global Constraints y en las tablas de Tasks 4-5. ✅

## Execution Handoff

Ver mensaje del chat.
