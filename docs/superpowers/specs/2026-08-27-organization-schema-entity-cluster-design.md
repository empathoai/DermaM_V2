# Spec — Cluster de schema del nodo `#organization` (identidad de entidad local)

Fecha: 2026-08-27
Estado: aprobado (brainstorming), pendiente de plan
Sub-proyecto A del trabajo de SEO local. Fuente: `docs/seo-setrategies/LOCAL-SEO-ANALYSIS-dermam-redesign.md` (Top-10 #2, #3, #4, #6, #8, #9).

## Contexto

El rediseño se deploya pronto en Vercel sobre el mismo dominio `dermamskinhealth.com`,
reemplazando el sitio viejo. Este cluster tiene que entrar **con** ese deploy: cuando el
sitio nuevo reemplaza al viejo, lo que Google ve es lo que tenga el rediseño.

El nodo JSON-LD `#organization` (`@type: HealthAndBeautyBusiness`, `@id:
https://dermamskinhealth.com/#organization`) se declara casi idéntico en `src/pages/Home.jsx`
(dentro de un `@graph`) y en `src/pages/Contacto.jsx`. Hoy tiene 5 defectos que debilitan
la señal de entidad local y crean exposición:

1. `aggregateRating` 4.9/117 hardcodeado **sin reseñas visibles en la página** → riesgo de
   acción manual de Google sobre todo el dominio + choca con `docs/MEDICAL_COMPLIANCE.md`.
2. `medicalSpecialty: "Dermatology"` en un `HealthAndBeautyBusiness` → **propiedad inválida**
   en ese tipo (Google la ignora) + overclaim (Derma.M no ejerce dermatología).
3. `description`: "Derma.M es una **clínica de medicina estética**…" → contradice el
   posicionamiento canónico "medical spa, NO clínica" (`DECISIONS.md` 2026-08-27,
   `public/llms.txt`, `index.html`).
4. `sameAs: ["https://dermamskinhealth.com"]` → **autorreferencia inútil**. No apunta a
   ningún perfil externo (Instagram, Facebook, Yelp).
5. `address` / `geo` / `openingHoursSpecification` viven **solo** dentro de un `location: [{
   "@type": "HealthAndBeautyBusiness", … }]` anidado → patrón raro; un parser puede
   interpretar "dos negocios". Falta además `alternateName`, `knowsAbout`, `keywords`,
   `areaServed` a nivel org.

Aparte, en `src/pages/Contacto.jsx` el `<iframe>` de Google Maps (L467) tiene un `feature
ID` y coordenadas de centro (`26.6531589, -80.0543666`) que **no coinciden** con la
dirección real (`26.6627718, -80.0558883`, verificada en Google Maps para
`5707 S Dixie Hwy Ste D, West Palm Beach, FL 33405`). El `geo` del **schema ya es correcto**
— el que está mal es el embed del mapa.

## Arquitectura — fuente única

Hoy el nodo `#organization` está triplicado y de forma inconsistente:
- `Home.jsx`: `@graph` con `#organization` **completo** (`@id`, todos los campos) + `#website`.
- `Contacto.jsx`: **no** es `@graph`. Es un `ContactPage` cuyo `mainEntity` es una **copia
  parcial** del negocio (sin `@id`, `url`, `logo`, `sameAs`, `description`) que vuelve a
  declarar `address`/`geo`/`openingHoursSpecification`. Riesgo: Google lo lee como un
  segundo negocio mal descrito.
- `NancyNieto.jsx`: el `Person.worksFor` **también** re-declara un `HealthAndBeautyBusiness`
  parcial.

**Solución:** una sola fuente de verdad.

- **Crear `src/data/organizationSchema.js`** → `export const organizationNode = { … }` con el
  nodo `#organization` canónico completo (ya con todos los cambios C1–C7 de abajo).
- `Home.jsx`: importar → `"@graph": [organizationNode, websiteNode]`.
- `Contacto.jsx`: importar → `"@graph": [organizationNode, contactPageNode]`, donde
  `contactPageNode` es el `ContactPage` actual pero con
  `"mainEntity": { "@id": "https://dermamskinhealth.com/#organization" }` (referencia, no
  copia). Se elimina la copia parcial del negocio.
- `NancyNieto.jsx`: `Person.worksFor` pasa a `{ "@id":
  "https://dermamskinhealth.com/#organization" }` (referencia cross-page, Google la
  resuelve); + `Person.sameAs` gana la URL de LinkedIn.

## Alcance

**Archivos:**
- **Crear:** `src/data/organizationSchema.js`
- **Modificar:** `src/pages/Home.jsx`, `src/pages/Contacto.jsx`, `src/pages/NancyNieto.jsx`

Sin componentes, sin CSS.

**Fuera de alcance** (ciclos propios, ya en backlog `docs/SEO_AUDIT_2026.md`):
- #5 H1 con intención local (Home + 6 hubs) — toca `Hero`, `PageHero`, `categoryPages.js`.
- Hubs: `CollectionPage` + `BreadcrumbList`.
- Horario visible en `/contacto`.
- 8.20 — reseñas reales on-page vía APIFY (reintroduce `aggregateRating` + `Review`),
  depende de la sesión B (GBP).
- 8.19 — verificar/crear el GBP (sesión B). Cuando exista su URL de Maps, se agrega a
  `sameAs` (nota en el plan).

## Cambios

Todos los cambios de campo (C1–C7) se aplican **una sola vez** en `organizationNode`
(`src/data/organizationSchema.js`), que Home y Contacto importan. Las referencias `~Lxx` son
a la ubicación actual en `Home.jsx` (de donde sale el objeto base).

### C1 — Quitar `aggregateRating`
Eliminar el bloque
`"aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "117" }`
(hoy en `Home.jsx` ~L51-55 y `Contacto.jsx` ~L98-101).
Ningún componente lo lee (`grep` confirma: solo aparece en esos 2 `<script>` JSON-LD).
Se reintroducirá respaldado por reseñas visibles en el ítem 8.20.

### C2 — `@type` / `medicalSpecialty`
- `@type` queda `"HealthAndBeautyBusiness"` (sin cambio).
- Eliminar `"medicalSpecialty": "Dermatology"`.
- `additionalType` ("Medical spa"): **solo si** se verifica el ID de Wikidata correcto
  durante la implementación. Si no se verifica con certeza, **no se agrega**.

### C3 — `description`
Antes:
> `Derma.M es una clínica de medicina estética con tratamientos faciales, corporales, láser y bienestar en West Palm Beach, Florida.`

Después:
> `Derma.M es un medical spa en West Palm Beach, Florida, con tratamientos estéticos faciales, corporales, de láser y luz, dental estético, IV therapy y capilar. Todos los servicios requieren una valoración profesional previa.`

### C4 — `sameAs`
En `organizationNode` (`src/data/organizationSchema.js`):
```json
"sameAs": [
  "https://www.instagram.com/dermamskinhealth",
  "https://www.facebook.com/DermaMskinhealth",
  "https://www.yelp.com/biz/derma-m-west-palm-beach"
]
```
`NancyNieto.jsx` — en el nodo `Person`, agregar `sameAs` (crear el array; hoy no tiene):
`["https://www.linkedin.com/in/nancy-nieto-581160144"]`.

El GBP se agregará a `sameAs` de `organizationNode` cuando se resuelva 8.19 — dejar
comentario `// TODO(8.19): añadir URL de Google Maps del GBP cuando esté verificado`.

### C5 — `alternateName` + `knowsAbout` + `keywords`
Agregar a `organizationNode`:
```json
"alternateName": ["Derma.M Med Spa", "DERMA.M", "Derma M", "DermaM"],
"knowsAbout": [
  "Medical spa",
  "Medicina estética",
  "Cuidado de la piel",
  "Plasma rico en plaquetas y fibrina (PRP y PRF)",
  "Bioestimulación cutánea",
  "Tratamientos faciales",
  "Hidrofacial",
  "Microneedling con Dermapen",
  "HIFU facial (ultrasonido focalizado de alta intensidad)",
  "Peel coreano",
  "Radiofrecuencia facial",
  "Oxigenoterapia facial",
  "Rejuvenecimiento facial",
  "Tratamiento del acné",
  "Tratamiento de manchas y cicatrices",
  "Dermabrasión facial (microdermoabrasión)",
  "Plasma frío",
  "Carboxiterapia facial",
  "Limpieza facial profunda",
  "Tratamientos corporales",
  "Lipo 360 no quirúrgico",
  "Levantamiento de glúteos sin cirugía",
  "Marcación abdominal no invasiva",
  "HIFU corporal",
  "Corrientes rusas (electroestimulación)",
  "Tratamiento de estrías y celulitis",
  "Carboxiterapia corporal",
  "Maderoterapia",
  "Drenaje linfático manual",
  "Cuidados postoperatorios estéticos",
  "Depilación láser",
  "Luz pulsada intensa (IPL)",
  "Odontología estética",
  "Blanqueamiento dental",
  "Limpieza dental estética",
  "Tratamiento capilar (bioestimulación del cuero cabelludo)",
  "IV therapy (sueroterapia intravenosa)"
],
"keywords": "medical spa West Palm Beach, med spa West Palm Beach, medspa WPB, skin care clinic West Palm Beach, facial spa, laser hair removal West Palm Beach"
```
- `knowsAbout` (37) = espejo 1:1 del contenido del sitio (6 hubs + 25 tratamientos + 3
  landings). Español primero (mercado hispano WPB, la búsqueda es en español), término
  técnico/inglés entre paréntesis donde también se busca así. **Plasma rico en plaquetas y
  fibrina en posición #4** (prioridad de negocio del usuario). Nombres de suero IV
  individuales NO van (son SKU, no competencias). `DefinedTerm` + `sameAs` Wikipedia/Wikidata
  = mejora futura opcional.
- Variantes "med spa"/"medspa" viven **solo** en `alternateName`/`keywords` — el `name`
  sigue siendo `"Derma.M"`, sin lockup de marca (respeta `MEMORY.md`/`DECISIONS.md`
  2026-08-27).
- Impacto de tamaño: el array suma ~1.5 KB al `<script>` JSON-LD inline. Al estar en el
  módulo compartido, se declara una sola vez en el código (aunque se serializa en cada
  página que lo usa). Aceptable.

### C6 — `areaServed` a nivel org
Agregar a `organizationNode`:
```json
"areaServed": [
  { "@type": "City", "name": "West Palm Beach" },
  { "@type": "AdministrativeArea", "name": "Palm Beach County" }
]
```
Modesto a propósito (no inflar cobertura — "test del dolor").

### C7 — Aplanar el `location` anidado
En `organizationNode`: mover `address`, `geo`, `openingHoursSpecification` desde el objeto
anidado `location: [{ "@type": "HealthAndBeautyBusiness", … }]` **directamente** al nodo, y
eliminar el wrapper `location` y su `name` redundante ("Derma.M — West Palm Beach"). Es una
sola ubicación → sin pérdida de información. Los valores no cambian (incl.
`geo: 26.6627718, -80.0558881` — verificado correcto contra Google Maps).

### C8 — Embed del mapa en `/contacto`
Datos confirmados (del export de Google Quick Builder que trajo el usuario, + verificación
en Maps):
- **Place ID:** `ChIJ85kuJaTX2IgRXPrdsU0jNRs`
- **Coords:** `26.6627718, -80.0558883`

`Contacto.jsx` (~L465-473): reemplazar el `src` del `<iframe>` por un embed **sin API key**
basado en el Place ID:
`https://www.google.com/maps?q=place_id:ChIJ85kuJaTX2IgRXPrdsU0jNRs&output=embed`
(mantener `width`, `height`, `style`, `loading="lazy"`, `referrerpolicy`, `title`/`aria-label`
actuales). **No** usar Locator Plus / `@googlemaps/extended-component-library` — requiere
cuenta de billing de Google Cloud y un `<script>` externo; innecesario para una sola
ubicación. El `?pb=` actual apunta a un feature ID/coords equivocados.

Si el embed `q=place_id:…&output=embed` no renderiza bien en el `<iframe>`, fallback:
regenerar el `?pb=` desde Maps (Share → Embed) para la dirección correcta, con el browser.

### C8b — `hasMap` + Place ID en el schema
En `organizationNode`, agregar:
```json
"hasMap": "https://www.google.com/maps/place/?q=place_id:ChIJ85kuJaTX2IgRXPrdsU0jNRs"
```
Guardar el Place ID en el spec para la sesión B (8.19): si el GBP se verifica, su URL de
Maps (`https://www.google.com/maps/place/?q=place_id:ChIJ85kuJaTX2IgRXPrdsU0jNRs` o el
`?cid=` de la ficha) entra en `sameAs`.

## Orden de aplicación (commits)

1. **Crear `organizationNode`** (`src/data/organizationSchema.js`) ya con C1–C7 aplicados +
   cablearlo en `Home.jsx` (`@graph: [organizationNode, websiteNode]`).
2. **`Contacto.jsx`**: importar `organizationNode`, pasar a `@graph: [organizationNode,
   contactPageNode]`, `contactPageNode.mainEntity` → `{ "@id": ".../#organization" }`.
   Eliminar la copia parcial.
3. **`NancyNieto.jsx`**: `Person.worksFor` → `{ "@id": ".../#organization" }`; `Person.sameAs`
   += LinkedIn.
4. **C8 — mapa `/contacto`**: regenerar el `<iframe src>` (commit aparte, concern distinto).

## Verificación (definition of done)

1. `npm run test:visual` → sin diffs nuevos (baseline actual: 34/34). El JSON-LD no se
   renderiza; el `<iframe>` cambia de `src` pero `/contacto` no está en baseline — confirmar.
2. DOM en `/` y `/contacto`: el `@graph` tiene **un solo** nodo `HealthAndBeautyBusiness`
   (`@id …#organization`) — no dos, no copias parciales — con: `description` con "medical
   spa" (sin "clínica"), `sameAs` con las 3 URLs externas, `alternateName` (4),
   `knowsAbout` (37, "Plasma rico en plaquetas y fibrina" presente), `keywords`,
   `areaServed`, `address`/`geo`/`openingHoursSpecification` **directo** en el nodo (sin
   `location` anidado), **sin** `aggregateRating`, **sin** `medicalSpecialty`. En `/contacto`
   el `ContactPage.mainEntity` es `{ "@id": ".../#organization" }`. 0 errores de consola.
3. DOM en `/nosotros/nancy-nieto`: `Person.worksFor` = `{ "@id": ".../#organization" }`;
   `Person.sameAs` incluye la URL de LinkedIn.
4. Validar el JSON-LD de `/`, `/contacto` y `/nosotros/nancy-nieto` con
   https://validator.schema.org/ — 0 errores, 0 warnings nuevos. (`@id` cross-page sin nodo
   local en NancyNieto es aceptable — Google lo resuelve; si el validador se queja, dejar un
   stub `{ "@id": …, "@type": "HealthAndBeautyBusiness", "name": "Derma.M" }`.)
5. `/contacto`: el mapa carga y el pin cae en `5707 S Dixie Hwy Ste D` (verificación visual
   en el browser).
6. `grep` en `src/`: 0 ocurrencias de `medicalSpecialty`, `aggregateRating`, `"clínica de
   medicina estética"`; `organizationNode` importado en `Home.jsx` y `Contacto.jsx`.

## Registro al cerrar

- `PROGRESS.md` — entrada nueva.
- `MEMORY.md` — actualizar la sección de schema/`#head` de tratamiento con el estado nuevo
  del `#organization` (aplanado, `sameAs` real, sin `aggregateRating`/`medicalSpecialty`).
- `DECISIONS.md` — (a) por qué `HealthAndBeautyBusiness` solo y no `MedicalBusiness`;
  (b) por qué se quitó `aggregateRating` en vez de mostrar reseñas ahora (→ 8.20 / APIFY);
  (c) variantes "med spa"/"medspa" solo en `alternateName`/`keywords`, nunca en `name`;
  (d) `#organization` extraído a `src/data/organizationSchema.js` como fuente única; Contacto
  y NancyNieto lo referencian por `@id` en vez de re-declarar copias parciales.
- `docs/SEO_AUDIT_2026.md` — marcar 8.14 y 8.18 como Hecho; 8.19 sigue Pendiente (sesión B);
  8.20 Pendiente.
