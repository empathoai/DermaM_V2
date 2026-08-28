# Cluster de schema `#organization` — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Consolidar el nodo JSON-LD `#organization` en una fuente única (`src/data/organizationSchema.js`) con la señal de entidad local corregida y ampliada, y arreglar el pin del mapa de `/contacto`.

**Architecture:** Se crea `organizationNode` como `export const` en `src/data/organizationSchema.js`. `Home.jsx` y `Contacto.jsx` lo importan y lo ponen en su `@graph`. `Contacto.jsx` deja de re-declarar una copia parcial del negocio: su `ContactPage.mainEntity` pasa a `{ "@id": ".../#organization" }`. `NancyNieto.jsx` hace lo mismo en `Person.worksFor` y suma LinkedIn a `Person.sameAs`. Nada de esto se renderiza (es `<script type="application/ld+json">` en `<head>` vía `react-helmet-async`), salvo el `src` del `<iframe>` del mapa de `/contacto`, que corrige la ubicación del pin.

**Tech Stack:** React 19 + Vite, `react-helmet-async` (JSON-LD en `<Helmet>`), JS/JSX sin TypeScript. Sin runner de tests unitarios (`npm run lint` es no-op). Regresión visual: `npm run test:visual` (Playwright, baseURL `http://localhost:3003`, arrancar `vite --port=3003` a mano). Validación de schema: https://validator.schema.org/ (manual, en el browser).

## Global Constraints

- Proyecto near-final: tocar **solo** los 4 archivos del alcance. Sin componentes, sin CSS, sin otros `src/data`.
  - **Crear:** `src/data/organizationSchema.js`
  - **Modificar:** `src/pages/Home.jsx`, `src/pages/Contacto.jsx`, `src/pages/NancyNieto.jsx`
- Spec: `docs/superpowers/specs/2026-08-27-organization-schema-entity-cluster-design.md`. Análisis origen: `docs/seo-setrategies/LOCAL-SEO-ANALYSIS-dermam-redesign.md`.
- Compliance (`docs/MEDICAL_COMPLIANCE.md`): sin garantías de resultado, sin "clínica" como autodenominación, health-first. La `description` nueva ya cumple.
- **Nombre de marca = `"Derma.M"`** en `name`. Variantes "med spa"/"medspa" viven **solo** en `alternateName`/`keywords`, nunca en `name` (`DECISIONS.md` 2026-08-27).
- Coords verificadas: `latitude: 26.6627718`, `longitude: -80.0558881` (schema; el `-80.0558883` del Place export difiere en el 7º decimal, ~0.2 m — se mantiene el valor actual del schema).
- Place ID confirmado: `ChIJ85kuJaTX2IgRXPrdsU0jNRs`.
- `npm run test:visual` debe cerrar **34/34 sin diffs nuevos** (baseline actual 34/34). El JSON-LD no se pinta; `/contacto` no está en baseline.
- Ningún test asserta schema (`tests/faq-consistency.spec.js:37` lee `ld+json` pero solo busca entidades FAQ — no se ve afectado).
- Un cambio por ciclo: al aprobarse, actualizar `PROGRESS.md` / `MEMORY.md` / `DECISIONS.md` / `docs/SEO_AUDIT_2026.md` antes de cerrar.
- Commits: mensaje en español, terminar con `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>`. `docs/` está gitignoreado → `git add -f` para los docs.

---

### Task 1: Crear `organizationNode` y cablearlo en `Home.jsx`

**Files:**
- Create: `src/data/organizationSchema.js`
- Modify: `src/pages/Home.jsx:33-105` (el bloque `<script type="application/ld+json">` con el `@graph`)

**Interfaces:**
- Produces: `export const organizationNode` — objeto plano JS (no stringificado) que representa el nodo `HealthAndBeautyBusiness` con `@id: "https://dermamskinhealth.com/#organization"`. Lo consumen Task 2 (`Contacto.jsx`) y, por `@id`, Task 3.

- [ ] **Step 1: Crear `src/data/organizationSchema.js`**

```js
// Nodo canónico de la organización para JSON-LD (schema.org).
// Fuente única — lo importan Home.jsx y Contacto.jsx; NancyNieto.jsx lo referencia por @id.
// Ver docs/superpowers/specs/2026-08-27-organization-schema-entity-cluster-design.md
export const organizationNode = {
  '@type': 'HealthAndBeautyBusiness',
  '@id': 'https://dermamskinhealth.com/#organization',
  name: 'Derma.M',
  legalName: 'DERMA.M, LLC',
  alternateName: ['Derma.M Med Spa', 'DERMA.M', 'Derma M', 'DermaM'],
  url: 'https://dermamskinhealth.com',
  logo: 'https://dermamskinhealth.com/assets/images/global/logo.jpg',
  image: 'https://dermamskinhealth.com/assets/images/global/og-default.jpg',
  description:
    'Derma.M es un medical spa en West Palm Beach, Florida, con tratamientos estéticos faciales, corporales, de láser y luz, dental estético, IV therapy y capilar. Todos los servicios requieren una valoración profesional previa.',
  telephone: '+15612535384',
  email: 'info@dermamskinhealth.com',
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card',
  hasMap:
    'https://www.google.com/maps/place/?q=place_id:ChIJ85kuJaTX2IgRXPrdsU0jNRs',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5707 S Dixie Hwy UNIT D',
    addressLocality: 'West Palm Beach',
    addressRegion: 'FL',
    postalCode: '33405',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.6627718,
    longitude: -80.0558881,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'West Palm Beach' },
    { '@type': 'AdministrativeArea', name: 'Palm Beach County' },
  ],
  knowsAbout: [
    'Medical spa',
    'Medicina estética',
    'Cuidado de la piel',
    'Plasma rico en plaquetas y fibrina (PRP y PRF)',
    'Bioestimulación cutánea',
    'Tratamientos faciales',
    'Hidrofacial',
    'Microneedling con Dermapen',
    'HIFU facial (ultrasonido focalizado de alta intensidad)',
    'Peel coreano',
    'Radiofrecuencia facial',
    'Oxigenoterapia facial',
    'Rejuvenecimiento facial',
    'Tratamiento del acné',
    'Tratamiento de manchas y cicatrices',
    'Dermabrasión facial (microdermoabrasión)',
    'Plasma frío',
    'Carboxiterapia facial',
    'Limpieza facial profunda',
    'Tratamientos corporales',
    'Lipo 360 no quirúrgico',
    'Levantamiento de glúteos sin cirugía',
    'Marcación abdominal no invasiva',
    'HIFU corporal',
    'Corrientes rusas (electroestimulación)',
    'Tratamiento de estrías y celulitis',
    'Carboxiterapia corporal',
    'Maderoterapia',
    'Drenaje linfático manual',
    'Cuidados postoperatorios estéticos',
    'Depilación láser',
    'Luz pulsada intensa (IPL)',
    'Odontología estética',
    'Blanqueamiento dental',
    'Limpieza dental estética',
    'Tratamiento capilar (bioestimulación del cuero cabelludo)',
    'IV therapy (sueroterapia intravenosa)',
  ],
  keywords:
    'medical spa West Palm Beach, med spa West Palm Beach, medspa WPB, skin care clinic West Palm Beach, facial spa, laser hair removal West Palm Beach',
  sameAs: [
    'https://www.instagram.com/dermamskinhealth',
    'https://www.facebook.com/DermaMskinhealth',
    'https://www.yelp.com/biz/derma-m-west-palm-beach',
    // TODO(8.19): añadir la URL de Google Maps del GBP cuando esté verificado
    // (https://www.google.com/maps/place/?q=place_id:ChIJ85kuJaTX2IgRXPrdsU0jNRs o el ?cid= de la ficha)
  ],
};
```

Notas de decisión aplicadas: **sin** `aggregateRating` (C1 — se reintroduce en 8.20), **sin** `medicalSpecialty` (C2), `@type` sigue `HealthAndBeautyBusiness` (C2), `description` sin "clínica" (C3), `address`/`geo`/`openingHoursSpecification` planos en el nodo — sin `location` anidado (C7).

- [ ] **Step 2: Editar el `<script>` JSON-LD de `Home.jsx`**

En `src/pages/Home.jsx`:
1. Agregar el import arriba (junto a los otros): `import { organizationNode } from '../data/organizationSchema';`
2. Reemplazar el `@graph` completo (desde `"@graph": [` hasta su `]` de cierre, hoy ~L35-104) por:

```jsx
"@graph": [
  organizationNode,
  {
    "@type": "WebSite",
    "@id": "https://dermamskinhealth.com/#website",
    "url": "https://dermamskinhealth.com",
    "name": "Derma.M",
    "publisher": {
      "@id": "https://dermamskinhealth.com/#organization"
    }
  }
]
```

Mantener el `"@context": "https://schema.org"` y el `JSON.stringify({ ... })` que envuelven. El nodo `WebSite` no cambia.

- [ ] **Step 3: Verificar que la build no rompe**

Run: `npm run build 2>&1 | tail -20`
Expected: build OK, sin errores de import ni de sintaxis.

- [ ] **Step 4: Verificar el DOM de `/` en el browser**

Con el dev server en `:3000` (o arrancar `npm run dev`): abrir `http://localhost:3000/`, y en la consola del browser:

```js
JSON.parse([...document.querySelectorAll('script[type="application/ld+json"]')].map(s=>s.textContent).find(t=>t.includes('#organization')))
```

Comprobar en el `@graph`:
- Hay **un** nodo `HealthAndBeautyBusiness` con `@id` `…/#organization`.
- `description` contiene "medical spa" y **no** "clínica".
- `sameAs` = las 3 URLs (instagram, facebook, yelp).
- `alternateName` (4 ítems), `knowsAbout` (37 ítems, incluye `"Plasma rico en plaquetas y fibrina (PRP y PRF)"`), `keywords`, `areaServed`, `hasMap` presentes.
- `address` / `geo` / `openingHoursSpecification` están **directo** en el nodo (no dentro de `location`).
- **No** hay `aggregateRating` ni `medicalSpecialty`.
- El nodo `WebSite` sigue presente.
- Consola: 0 errores.

- [ ] **Step 5: Validar en schema.org**

Copiar el JSON-LD de `/` y pegarlo en https://validator.schema.org/ → 0 errores, 0 warnings nuevos.

- [ ] **Step 6: Commit**

```bash
git add src/data/organizationSchema.js src/pages/Home.jsx
git commit -m "feat(seo): nodo #organization como fuente única + señal de entidad local

- Nuevo src/data/organizationSchema.js (organizationNode)
- Home.jsx importa el nodo en su @graph
- Quita aggregateRating (sin reviews visibles, reintroduce en 8.20) y
  medicalSpecialty (inválido en HealthAndBeautyBusiness)
- description: 'clínica de medicina estética' -> 'medical spa'
- sameAs real (Instagram/Facebook/Yelp), alternateName, knowsAbout (37),
  keywords, areaServed, hasMap (Place ID)
- Aplana address/geo/openingHours en el nodo (sin location anidado)

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 2: `Contacto.jsx` — usar `organizationNode`, referenciar por `@id`

**Files:**
- Modify: `src/pages/Contacto.jsx` (import + el `<script>` JSON-LD, hoy ~L87-140)

**Interfaces:**
- Consumes: `organizationNode` de `src/data/organizationSchema.js` (Task 1).
- Produces: nada nuevo.

- [ ] **Step 1: Agregar el import**

En `src/pages/Contacto.jsx`, junto a los otros imports: `import { organizationNode } from '../data/organizationSchema';`

- [ ] **Step 2: Reescribir el `<script>` JSON-LD**

Reemplazar el objeto stringificado actual (`ContactPage` con `mainEntity` = copia parcial del negocio + `location` anidado + `aggregateRating`) por un `@graph` con el nodo canónico + el `ContactPage` que lo referencia:

```jsx
<script type="application/ld+json">{JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    organizationNode,
    {
      "@type": "ContactPage",
      "@id": "https://dermamskinhealth.com/contacto#contactpage",
      "name": "Contacto | Derma.M",
      "url": "https://dermamskinhealth.com/contacto",
      "description": "Agenda tu evaluación personalizada en Derma.M. Escríbenos por WhatsApp o visítanos en West Palm Beach, Florida.",
      "mainEntity": { "@id": "https://dermamskinhealth.com/#organization" }
    }
  ]
})}</script>
```

Conservar el `description` textual que ya tenía el `ContactPage`. No tocar el resto del `<Helmet>` (title, canonical, OG, twitter, robots).

- [ ] **Step 3: Build**

Run: `npm run build 2>&1 | tail -20`
Expected: OK.

- [ ] **Step 4: Verificar el DOM de `/contacto`**

`http://localhost:3000/contacto`, en consola:

```js
JSON.parse([...document.querySelectorAll('script[type="application/ld+json"]')].map(s=>s.textContent).find(t=>t.includes('#organization')))
```

- `@graph` con **un** `HealthAndBeautyBusiness` (`@id …/#organization`, idéntico al de `/`) + un `ContactPage` cuyo `mainEntity` es `{ "@id": ".../#organization" }`.
- **No** hay copia parcial del negocio, **no** hay `aggregateRating`, **no** hay `location` anidado.
- Consola: 0 errores.

- [ ] **Step 5: Validar en schema.org** — pegar el JSON-LD de `/contacto` → 0 errores/warnings nuevos.

- [ ] **Step 6: Commit**

```bash
git add src/pages/Contacto.jsx
git commit -m "feat(seo): /contacto usa organizationNode y referencia #organization por @id

Elimina la copia parcial del negocio (sin @id/url/logo/sameAs) que
re-declaraba address/geo/hours. ContactPage.mainEntity ahora es {@id}.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 3: `NancyNieto.jsx` — `worksFor` por `@id` + LinkedIn

**Files:**
- Modify: `src/pages/NancyNieto.jsx:25-41` (el `<script>` JSON-LD del `Person`)

**Interfaces:**
- Consumes: el `@id` `https://dermamskinhealth.com/#organization` (string literal — no importa el módulo).
- Produces: nada.

- [ ] **Step 1: Editar el nodo `Person`**

En `src/pages/NancyNieto.jsx`, dentro del `JSON.stringify({ ... })`:
1. Reemplazar el objeto `worksFor` (hoy `HealthAndBeautyBusiness` parcial con name/legalName/url/telephone/email) por:
   ```jsx
   "worksFor": { "@id": "https://dermamskinhealth.com/#organization" },
   ```
2. Agregar, después de `worksFor`, la propiedad `sameAs` (hoy no existe):
   ```jsx
   "sameAs": ["https://www.linkedin.com/in/nancy-nieto-581160144"]
   ```

Resultado esperado del nodo:
```jsx
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nancy Nieto",
  "jobTitle": "Fundadora y Directora",
  "description": "Flebotomista certificada en Estados Unidos y especialista facial con licencia en Florida. Fundadora y directora de DERMA.M.",
  "url": "https://dermamskinhealth.com/nosotros/nancy-nieto",
  "image": "https://dermamskinhealth.com/assets/images/home/founder.jpg",
  "worksFor": { "@id": "https://dermamskinhealth.com/#organization" },
  "sameAs": ["https://www.linkedin.com/in/nancy-nieto-581160144"]
}
```

- [ ] **Step 2: Build**

Run: `npm run build 2>&1 | tail -20`
Expected: OK.

- [ ] **Step 3: Verificar el DOM de `/nosotros/nancy-nieto`**

```js
JSON.parse([...document.querySelectorAll('script[type="application/ld+json"]')].map(s=>s.textContent).find(t=>t.includes('"Person"')))
```
- `worksFor` = `{ "@id": "https://dermamskinhealth.com/#organization" }`.
- `sameAs` = `["https://www.linkedin.com/in/nancy-nieto-581160144"]`.
- Consola: 0 errores.

- [ ] **Step 4: Validar en schema.org**

Pegar el JSON-LD. Si el validador marca el `@id` sin nodo local resuelto como warning (no error), aplicar el fallback del spec: `"worksFor": { "@id": "https://dermamskinhealth.com/#organization", "@type": "HealthAndBeautyBusiness", "name": "Derma.M" }`. Si no se queja, dejar el `@id` solo.

- [ ] **Step 5: Commit**

```bash
git add src/pages/NancyNieto.jsx
git commit -m "feat(seo): NancyNieto Person.worksFor por @id + sameAs LinkedIn

Elimina la re-declaración parcial del negocio; enlaza el perfil de
LinkedIn de Nancy (E-E-A-T).

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 4: Corregir el `<iframe>` del mapa en `/contacto` (C8)

**Files:**
- Modify: `src/pages/Contacto.jsx:465-473` (el `<iframe>` de Google Maps)

**Interfaces:**
- Consumes: Place ID `ChIJ85kuJaTX2IgRXPrdsU0jNRs`.
- Produces: nada.

- [ ] **Step 1: Reemplazar el `src` del `<iframe>`**

En `src/pages/Contacto.jsx`, el `<iframe>` de Maps: cambiar **solo** el atributo `src` a:

```
src="https://www.google.com/maps?q=place_id:ChIJ85kuJaTX2IgRXPrdsU0jNRs&output=embed"
```

Conservar sin cambios todos los demás atributos (`width`, `height`, `style`, `loading`, `referrerpolicy` / `referrerPolicy`, `title` / `aria-label`, `allowFullScreen`, etc.).

- [ ] **Step 2: Verificar el mapa en el browser**

`http://localhost:3000/contacto` → scrollear al mapa:
- Carga sin error (no "for development purposes only", no gris).
- El pin cae en **5707 S Dixie Hwy**, West Palm Beach (no ~1 km al sur).
- El contenedor del mapa se ve igual que antes (mismo tamaño/posición).
- Consola: 0 errores nuevos.

Si el embed `q=place_id:…&output=embed` no rinde bien: fallback del spec → generar el `?pb=` desde Google Maps (Share → Embed) para `5707 S Dixie Hwy, West Palm Beach, FL 33405` con el browser, y usar ese `src`.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Contacto.jsx
git commit -m "fix(contacto): pin del mapa apuntaba ~1km al sur — embed por Place ID

Reemplaza el ?pb= (feature ID/coords erróneos) por
?q=place_id:ChIJ85kuJaTX2IgRXPrdsU0jNRs&output=embed (sin API key).

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 5: Regresión visual + registro y cierre

**Files:**
- Modify: `PROGRESS.md`, `MEMORY.md`, `DECISIONS.md`, `docs/SEO_AUDIT_2026.md`

- [ ] **Step 1: Regresión visual**

Arrancar `npm run dev -- --port=3003` en otra terminal, luego:

Run: `npm run test:visual 2>&1 | tail -6`
Expected: **34/34 passed**, sin diffs nuevos. Si algún baseline diffea (no debería — nada renderizado cambió salvo el `src` del iframe, y `/contacto` no está snapshoteada): abrir el reporte, confirmar la causa, **no** regenerar snapshots sin avisar al usuario.

- [ ] **Step 2: `grep` de verificación final**

Run:
```bash
grep -rn "medicalSpecialty\|aggregateRating\|clínica de medicina estética" src/
grep -rn "organizationNode" src/pages/Home.jsx src/pages/Contacto.jsx
```
Expected: primer grep → 0 resultados. Segundo → 1 import + 1 uso en cada archivo.

- [ ] **Step 3: `PROGRESS.md`** — entrada nueva arriba de todo:
  - Qué: cluster de schema `#organization` — nuevo `src/data/organizationSchema.js` (fuente única), Home/Contacto/NancyNieto cableados; quitados `aggregateRating` (→ 8.20) y `medicalSpecialty`; `description` sin "clínica"; `sameAs` real; `alternateName`/`knowsAbout` (37, Plasma #4)/`keywords`/`areaServed`/`hasMap`; `location` aplanado; Contacto y NancyNieto referencian `#organization` por `@id`; pin del mapa corregido vía Place ID.
  - Verificación: `test:visual` 34/34, `grep` limpio, DOM en `/` + `/contacto` + `/nosotros/nancy-nieto` OK, validator.schema.org 0 errores, mapa con pin correcto, 0 errores de consola.
  - Pendiente: 8.19 (GBP, sesión B) → su URL entra en `sameAs`; 8.20 (reseñas APIFY) → reintroduce `aggregateRating`.

- [ ] **Step 4: `MEMORY.md`** — en la sección de schema/`<head>`:
  - Nuevo `src/data/organizationSchema.js` = fuente única del nodo `#organization` (`HealthAndBeautyBusiness`, `@id …/#organization`). Lo importan `Home.jsx` (en `@graph` con `#website`) y `Contacto.jsx` (en `@graph` con un `ContactPage` que lo referencia por `@id`). `NancyNieto.jsx` `Person.worksFor` también por `@id`. Sin `aggregateRating` (pendiente 8.20) ni `medicalSpecialty`. `knowsAbout` (37) espejo del contenido del sitio.
  - Landings (`LimpiezaFacial`/`Postoperatorios`/`PrfYFibrina`) y `TreatmentSEO.jsx` siguen referenciando `#organization` por `@id` inline (no migrados a `organizationNode` — candidato futuro).

- [ ] **Step 5: `DECISIONS.md`** — entrada nueva (append):
  - (a) `HealthAndBeautyBusiness` solo, no `MedicalBusiness`: coherente con "medical spa, no clínica"; `MedicalBusiness` invita escrutinio YMYL + exige nodo `Physician` con credenciales, que choca con la instrucción de Nancy de no publicar licencias. `medicalSpecialty: "Dermatology"` era además overclaim (no ejercen dermatología).
  - (b) `aggregateRating` se quitó en vez de mostrar reseñas ahora: mostrarlas bien = pull real vía APIFY + componente + diseño = sub-proyecto propio (8.20), depende de la sesión B (GBP). El schema con rating sin reviews visibles es riesgo de acción manual.
  - (c) Variantes "med spa"/"medspa" solo en `alternateName`/`keywords`, nunca en `name`.
  - (d) `#organization` extraído a módulo compartido; Contacto/NancyNieto por `@id` en vez de copias parciales (elimina deriva NAP + entidades-fantasma).
  - (e) Mapa de `/contacto`: embed keyless por Place ID, **no** Locator Plus (requiere billing de Google Cloud + `<script>` externo; innecesario para 1 ubicación).

- [ ] **Step 6: `docs/SEO_AUDIT_2026.md`** — marcar **8.14 Hecho** (2026-08-27, `sameAs` real) y **8.18 Hecho** (2026-08-27, `aggregateRating` eliminado). 8.19 sigue Pendiente (sesión B). 8.20 Pendiente. Agregar nota: geo del schema verificada contra Place ID; pin del mapa corregido.

- [ ] **Step 7: Commit del registro**

```bash
git add PROGRESS.md MEMORY.md DECISIONS.md
git add -f docs/SEO_AUDIT_2026.md
git commit -m "docs: registrar cluster de schema #organization (PROGRESS/MEMORY/DECISIONS/SEO_AUDIT)

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

- [ ] **Step 8: Push (con confirmación del usuario)**

Confirmar con el usuario y:
```bash
git push
```

- [ ] **Step 9: Parar el dev server `:3003`** que se abrió en el Step 1.

---

## Self-Review

**1. Spec coverage:**
- C1 `aggregateRating` fuera → Task 1 Step 1 (ausente del objeto) + Task 5 grep. ✓
- C2 `@type` / `medicalSpecialty` → Task 1 Step 1. ✓
- C3 `description` → Task 1 Step 1. ✓
- C4 `sameAs` (org + NancyNieto LinkedIn) → Task 1 Step 1 + Task 3 Step 1. ✓
- C5 `alternateName`/`knowsAbout`(37)/`keywords` → Task 1 Step 1. ✓
- C6 `areaServed` → Task 1 Step 1. ✓
- C7 aplanar `location` → Task 1 Step 1 (address/geo/hours planos). ✓
- C8 iframe del mapa → Task 4. ✓
- C8b `hasMap` + Place ID → Task 1 Step 1 (`hasMap`) + TODO de `sameAs` para 8.19. ✓
- Arquitectura fuente única (módulo + Contacto/NancyNieto por `@id`) → Tasks 1-3. ✓
- Verificación (test:visual, DOM, validator, grep) → Tasks 1-5. ✓
- Registro → Task 5. ✓

**2. Placeholder scan:** el `// TODO(8.19)` en `sameAs` es intencional y trazable (no un placeholder de plan). El fallback de schema.org en Task 3 Step 4 está con código concreto. Sin "TBD"/"etc.". ✓

**3. Type consistency:** `organizationNode` se nombra igual en Tasks 1, 2, 5. El `@id` `https://dermamskinhealth.com/#organization` es idéntico en Tasks 1, 2, 3. Coords `26.6627718 / -80.0558881` idénticas donde aparecen. ✓
