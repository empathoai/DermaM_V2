# Spec — Sub-proyecto C: respuesta directa / GEO en páginas de tratamiento

Fecha: 2026-08-27
Estado: aprobado en brainstorming, pendiente de revisión de spec.

## Origen

Auditoría `seo-checklist-65` (score global 63/100) → descomposición A → B → C → D.
A (head/schema de las páginas de tratamiento; contó 24, en realidad son 25), B (tune de LCP) y D (pulido de alt +
relatedLinks) están cerrados. **C** es el tramo de contenido: dar a cada página de
tratamiento una superficie de "respuesta directa" extraíble por motores de IA
(ChatGPT, Perplexity, Google AI Overviews), que hoy no existe.

**Piloto ya hecho y commiteado** (`c972ea8`, 2026-08-27): `whatIsBody` +
`whatIsHeadline` de `microneedling` reescritos con el patrón de respuesta directa.
`test:visual` 22/22 sin diffs. Este spec **escala ese patrón a los 24 tratamientos
restantes** y agrega `dateModified` al schema.

## Alcance

**En alcance:**

- **C1** — reescribir `whatIsBody` + agregar `whatIsHeadline` a los **24 tratamientos
  restantes** (todos menos `microneedling`), con el patrón de respuesta directa GEO.
  El total de páginas de tratamiento es **25** — la lista autoritativa es
  `slugsByCategory` en `src/data/treatmentPages.js` (incluye `maderoterapia-corporal`,
  que el spec de A no contó).
- **`dateModified`** — campo `contentUpdated` por tratamiento + nodo `MedicalWebPage`
  nuevo en el `@graph` de `TreatmentSEO`.
- Ejecución en **5 tandas por categoría**: faciales (11 restantes) → corporales (8) →
  láser-y-luz (2) → dental-estético (2) → capilar (1). Cada tanda: reescritura →
  `test:visual` → revisión del usuario → commit, antes de la siguiente.

**Fuera de alcance (ciclos aparte, cada uno con su spec):**

- **C2** — dato cuantitativo + enlace de autoridad por tratamiento. Requiere curar 1–2
  fuentes médicas por tratamiento y sign-off de compliance con la clínica. Es el 80%
  del esfuerzo real de C.
- Backlog `WarningBox.jsx:7` — default `title = 'CUÁNDO CONSULTAR ANTES'` que se
  renderiza en las 24 páginas; el usuario marcó "ANTES" como seco. Candidato a
  `PRECAUCIONES Y CONTRAINDICACIONES`. 24 páginas + sección posiblemente snapshoteada.
- Llenar `metaTitle` / `metaDescription` por página (siguen con el fallback compuesto
  de `TreatmentSEO`).
- Cualquier cambio de layout, componente, CSS o ruta.

## Estado actual (verificado)

- `src/data/treatmentPages.js`:
  - Cada tratamiento tiene un bloque `customDetails['<slug>']` con overrides opcionales
    (`whatIsBody`, `problemContextHeadline`, `problemContextBody`, `beforeAfter`,
    `heroImageAlt`, `whatIsImageAlt`, `faq`, etc.). Patrón: `custom.X || <fallback>`.
  - El piloto ya agregó al bloque `microneedling`:
    `whatIsHeadline: 'Microneedling con Dermapen: qué es y para qué sirve'` +
    `whatIsBody` reescrito.
  - Builder (aprox. L1264-1268 del objeto compilado):
    ```js
    whatIs: {
      eyebrow: 'EL PROTOCOLO',
      headline: custom.whatIsHeadline || `TRATAMIENTO DE ${title}`,   // ya cableado en el piloto
      body: custom.whatIsBody || `El tratamiento de ${title} en Derma.M ...`,
      image: `${treatmentAssetBase}/whatis.jpg`,
      ...
    }
    ```
  - El objeto compilado ya expone `metaTitle: base.metaTitle || null` y
    `metaDescription: base.metaDescription || null`. **No** expone `contentUpdated` aún.
- `src/components/shared/TreatmentSEO/TreatmentSEO.jsx`: owner único del `<head>` de
  éxito. Emite un `<script type="application/ld+json">` con
  `@graph = [Service, BreadcrumbList]`. El nodo `Service` **no tiene `@id`** hoy.
  `provider` referencia `{"@id": "https://dermamskinhealth.com/#organization"}`.
- `TreatmentDetailPage.jsx` sección 4 "EL PROTOCOLO" renderiza
  `whatIs.eyebrow` / `whatIs.headline` (`<h2>`) / `whatIs.body` (`<p>`) +
  `whatIs.image` al lado. El `<h2>` tiene `text-transform: uppercase` por CSS.
- Los 24 tratamientos restantes muestran el H2 default `TRATAMIENTO DE <NOMBRE>`
  (con `<NOMBRE>` en MAYÚSCULAS desde `categoryPages.js`).
- `test:visual` (`tests/visual.spec.js`, 22 tests): la única página de tratamiento
  snapshoteada es Hidrofacial, y sólo su viewport superior — la sección 4 **no** entra
  en ningún baseline. baseURL `http://localhost:3003` (arrancar `vite --port 3003`
  a mano; no hay `webServer` en la config).

## Cambios

### C1.1 — Campos por tratamiento (`src/data/treatmentPages.js`)

En cada `customDetails['<slug>']` de los 24 restantes:

- **`whatIsHeadline`** — string. H2 declarativo. Patrón:
  `<Nombre en Title Case>: qué es y para qué sirve`.
  Variantes admitidas cuando la forma base no encaja:
  - Condiciones (no procedimientos): `<Nombre>: qué es y cómo se trata`
    (ej. "Manchas y cicatrices", "Acné").
  - Nombres que ya arrancan con "Tratamiento": se evita "Tratamiento de tratamiento…"
    → se usa el nombre a secas + sufijo.
  El nombre se toma del `title` del tratamiento pasado a Title Case (los `title` están
  en MAYÚSCULAS en `categoryPages.js`; `titleCase()` vive en `src/utils/text.js`).
  La normalización final de cada uno de los 24 se resuelve al redactar la tanda y se
  lista en la revisión.

- **`whatIsBody`** — se **reescribe** el string existente con el patrón C1.3.

- **`contentUpdated`** — string `'YYYY-MM-DD'`. Fecha real en que se reescribió ese
  `whatIsBody` (= fecha de la tanda). Fallback `null`.

`microneedling` se retro-completa con `contentUpdated: '2026-08-27'` (ya tiene
`whatIsHeadline` + `whatIsBody`).

### C1.2 — Builder (`src/data/treatmentPages.js`)

Una línea nueva en el objeto compilado, junto a `metaTitle` / `metaDescription`:

```js
contentUpdated: custom.contentUpdated || null,
```

`headline: custom.whatIsHeadline || \`TRATAMIENTO DE ${title}\`` ya está cableado
(piloto). Sin más cambios de builder.

### C1.3 — Patrón de redacción del `whatIsBody`

**Regla 1 (no negociable):** la **1ª oración** es una definición autónoma citable —
*qué es* + *mecanismo* + *para qué sirve*. Arranca con el nombre del tratamiento.
Se entiende sin ningún contexto previo (sin "este protocolo", "el mismo", etc.).

**Regla 2 (flexible):** el resto suma hasta **40–70 palabras en total** e incluye:
- Beneficios en lenguaje de `MEDICAL_COMPLIANCE.md`: "puede ayudar a mejorar",
  "está diseñado para favorecer", "suele" — nunca "elimina", "borra", "garantiza".
- Una mención **orgánica** de "West Palm Beach" (no un pegote al final).
- Una señal de valoración / indicación profesional previa.
- **Redacción variada entre tratamientos** — está prohibido que las 25 páginas
  terminen con la misma oración textual (huella de boilerplate / contenido duplicado).

**Base factual (Q3 → opción B):** se redacta a partir del material que ya vive en el
archivo para ese tratamiento — `whatIsBody` actual + `description` + `benefits` +
`problemContext` (`problemContextHeadline` / `problemContextBody`) + las 5 entradas de
`custom.faq`. **No se inventan hechos.** Si el texto actual arrastra un problema de
compliance preexistente (garantía implícita, palabra prohibida, claim sin respaldo),
se corrige en la reescritura y se documenta en la revisión de esa tanda.

**Keywords:** se usan las formas de consulta obvias por tratamiento ("qué es X",
"para qué sirve X", "cómo funciona X"). Sin ronda separada de keyword research.

**Palabras prohibidas** (de `MEDICAL_COMPLIANCE.md`, recordatorio):
`"sin efectos secundarios"`, `"indoloro"` / `"sin dolor"`, `"permanente"`,
`"sin tiempo de recuperación"`, `"garantizado"`, `"aprobado por la FDA"`,
`"clínicamente probado"`. Nada de diagnosticar, prescribir ni "curar".

### C1.4 — `dateModified` en `TreatmentSEO.jsx`

**a)** Darle `@id` al nodo `Service` existente:
`"@id": "<SITE>/<categorySlug>/<slug>#service"`.
(`SITE = 'https://dermamskinhealth.com'`; `categorySlug` y `slug` ya son props del
componente.)

**b)** Agregar al `@graph` un nodo `MedicalWebPage`, **sólo si `data.contentUpdated`
es truthy**:

```json
{
  "@type": "MedicalWebPage",
  "@id": "<SITE>/<categorySlug>/<slug>#webpage",
  "url": "<SITE>/<categorySlug>/<slug>",
  "name": "<title compuesto de A2>",
  "inLanguage": "es",
  "isPartOf": { "@id": "https://dermamskinhealth.com/#website" },
  "about": { "@id": "<SITE>/<categorySlug>/<slug>#service" },
  "dateModified": "<data.contentUpdated>"
}
```

- `name` = el mismo string que ya calcula `TreatmentSEO` para `<title>` (A2).
- **`isPartOf`:** antes de usar `#website`, verificar en `src/pages/Home.jsx` que ese
  `@id` exista en su `@graph`. Si **no** existe: usar
  `{ "@id": "https://dermamskinhealth.com/#organization" }` (ese sí existe y ya se
  referencia desde `provider`), o si tampoco encaja semánticamente, **omitir
  `isPartOf`** del nodo. Decisión se toma al implementar la tanda de faciales y se
  registra en `DECISIONS.md` si no es obvia.
- **No** se agrega `dateModified` al `Service` (schema.org no define esa propiedad
  para `Service`; Google la tolera pero puede emitir warning).
- El `FAQPage` lo sigue emitiendo `FAQAccordion` — `TreatmentSEO` no lo toca.

`TreatmentSEO.jsx` + el builder se tocan **una sola vez**, en la primera tanda
(faciales). Las tandas 2-5 sólo editan datos.

## Ejecución por tandas

| # | Categoría (`categorySlug` de la ruta) | key en `slugsByCategory` | Tratamientos | Toca `TreatmentSEO`/builder |
|---|---|---|---|---|
| 1 | `faciales` | `faciales` | 11 (los 12 menos `microneedling`) | **Sí** (C1.2 + C1.4) |
| 2 | `corporales` | `corporales` | 8 (incluye `maderoterapia-corporal`) | No |
| 3 | `laser-y-luz` | `laserYLuz` | 2 | No |
| 4 | `dental-estetico` | `dentalEstetico` | 2 | No |
| 5 | `capilar` | `capilar` | 1 | No |

Total reescrito por C1 = 24 (+ `microneedling` ya hecho = 25). Los slugs exactos
salen de `slugsByCategory` en `src/data/treatmentPages.js` (bloque en ~L1145). Ojo:
la key del objeto (`laserYLuz`, `dentalEstetico`) difiere del segmento de URL
(`laser-y-luz`, `dental-estetico`); `categorySlug` que recibe `TreatmentSEO` es el
segmento de URL.

**Por tanda, en orden:**
1. Reescribir `whatIsHeadline` + `whatIsBody` + setear `contentUpdated` de cada
   tratamiento de la categoría.
2. (Tanda 1 únicamente) aplicar C1.2 + C1.4; retro-completar `microneedling`.
3. Arrancar `vite --port 3003`; `npm run test:visual` → **22/22 sin diffs**.
4. `read_console_messages` en 1-2 rutas de la categoría → **0 errores**.
5. DOM check (1-2 rutas): H2 = `whatIsHeadline`; 1ª oración del `<p>` es definición
   autónoma; sin palabras prohibidas; "West Palm Beach" + señal de valoración presentes.
6. (Tanda 1) Rich Results / check mental del `@graph`: `MedicalWebPage` válido,
   `about` referencia el `Service` por `@id`, `dateModified` presente; `FAQPage`
   intacto; sin warnings nuevos.
7. `grep` de los `whatIsBody` viejos de la categoría → ya no aparecen.
8. Registro: entrada en `PROGRESS.md` (categoría, correcciones de compliance si hubo).
   `DECISIONS.md` sólo si hubo una decisión no obvia (normalización de un nombre raro,
   resolución de `isPartOf`). Commit de la tanda.
9. Al cerrar la tanda 5: `MEMORY.md` marca **C1 completo**; `graphify update .`.

## Verificación (definición de done — global)

- Las 25 páginas de tratamiento con `whatIsHeadline` declarativo y `whatIsBody` en
  forma de respuesta directa (1ª oración autónoma citable).
- `npm run test:visual` **22/22 sin diffs** tras cada tanda y al final.
- 0 errores de consola en páginas tocadas.
- Ningún `whatIsBody` nuevo con palabra prohibida de `MEDICAL_COMPLIANCE.md`; ningún
  cierre de párrafo textualmente repetido entre páginas.
- `@graph` de tratamiento: `[Service(#service), BreadcrumbList, MedicalWebPage]`
  cuando hay `contentUpdated`; `[Service, BreadcrumbList]` cuando no. `FAQPage` de
  `FAQAccordion` sigue como script aparte.
- `grep`: los strings de `whatIsBody` originales de los 24 ya no están en el repo.
- Sin cambios en archivos protegidos, componentes de layout, CSS, rutas ni baselines.

## Riesgos

- **UI / wireframe:** nulo. Sólo cambia el texto de un `<h2>` y un `<p>` ya
  renderizados, en 25 páginas. `test:visual` es el guardrail; cualquier diff en la
  suite es señal de alarma y frena la tanda.
- **Schema:** bajo. `MedicalWebPage` es aditivo y condicional; el `@id` en `Service`
  es inerte salvo para la referencia `about`. Riesgo: `isPartOf` apuntando a un `@id`
  inexistente → mitigado por la verificación explícita en C1.4.
- **Compliance:** es el riesgo real. Mitigación: revisión del usuario por tanda +
  cruce explícito de cada párrafo contra `MEDICAL_COMPLIANCE.md` + lista de
  correcciones preexistentes detectadas.
- **Contenido duplicado:** 25 párrafos con la misma estructura podrían leerse como
  boilerplate. Mitigación: regla de redacción variada (C1.3) — sólo la 1ª oración
  sigue una forma fija; el resto se redacta distinto por tratamiento.
- **Reversibilidad:** cada tanda es su propio commit → `git revert` de una categoría
  sin afectar las otras.

## Registro al cerrar

- `PROGRESS.md`: una entrada por tanda (arriba de todo), + entrada de cierre de C1.
- `DECISIONS.md`: entrada ya existe (2026-08-27, "C1 respuesta directa GEO"). Agregar
  sólo si aparece una decisión no obvia durante la ejecución (resolución de
  `isPartOf`, normalización de algún nombre).
- `MEMORY.md`: la nota de "Sub-proyecto C1 EN CURSO" pasa a "C1 completo (24/24)";
  documentar el campo `contentUpdated` + el nodo `MedicalWebPage` en `TreatmentSEO`.
- `graphify update .` tras la tanda 1 (cambia `TreatmentSEO.jsx`) y al final.
