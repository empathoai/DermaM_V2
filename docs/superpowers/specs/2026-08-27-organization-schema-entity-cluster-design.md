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

## Alcance

**Archivos:** `src/pages/Home.jsx`, `src/pages/Contacto.jsx`, `src/pages/NancyNieto.jsx`.
Sin componentes, sin CSS, sin `src/data`.

**Fuera de alcance** (ciclos propios, ya en backlog `docs/SEO_AUDIT_2026.md`):
- #5 H1 con intención local (Home + 6 hubs) — toca `Hero`, `PageHero`, `categoryPages.js`.
- Hubs: `CollectionPage` + `BreadcrumbList`.
- Horario visible en `/contacto`.
- 8.20 — reseñas reales on-page vía APIFY (reintroduce `aggregateRating` + `Review`),
  depende de la sesión B (GBP).
- 8.19 — verificar/crear el GBP (sesión B). Cuando exista su URL de Maps, se agrega a
  `sameAs` (nota en el plan).

## Cambios

### C1 — Quitar `aggregateRating`
`Home.jsx` (~L51-55) y `Contacto.jsx` (~L98-101): eliminar el bloque
`"aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "117" }`.
Ningún componente lo lee (`grep` confirma: solo aparece en esos 2 `<script>` JSON-LD).
Se reintroducirá respaldado por reseñas visibles en el ítem 8.20.

### C2 — `@type` / `medicalSpecialty`
- `@type` queda `"HealthAndBeautyBusiness"` (sin cambio).
- Eliminar `"medicalSpecialty": "Dermatology"` de `Home.jsx` (~L50) y `Contacto.jsx`.
- `additionalType` ("Medical spa"): **solo si** se verifica el ID de Wikidata correcto
  durante la implementación. Si no se verifica con certeza, **no se agrega**.

### C3 — `description`
Reemplazar en `Home.jsx` (~L44) y `Contacto.jsx` (mismo string):

Antes:
> `Derma.M es una clínica de medicina estética con tratamientos faciales, corporales, láser y bienestar en West Palm Beach, Florida.`

Después:
> `Derma.M es un medical spa en West Palm Beach, Florida, con tratamientos estéticos faciales, corporales, de láser y luz, dental estético, IV therapy y capilar. Todos los servicios requieren una valoración profesional previa.`

### C4 — `sameAs`
`Home.jsx` (~L91-93) y `Contacto.jsx` `#organization`:
```json
"sameAs": [
  "https://www.instagram.com/dermamskinhealth",
  "https://www.facebook.com/DermaMskinhealth",
  "https://www.yelp.com/biz/derma-m-west-palm-beach"
]
```
`NancyNieto.jsx` — en el nodo `Person` de su JSON-LD, agregar a `sameAs` (crear el array si
no existe): `"https://www.linkedin.com/in/nancy-nieto-581160144"`.

El GBP se agregará a los `sameAs` de `#organization` cuando se resuelva 8.19 — dejar
comentario `// TODO(8.19): añadir URL de Google Maps del GBP cuando esté verificado`.

### C5 — `alternateName` + `knowsAbout` + `keywords`
Agregar al `#organization` en `Home.jsx` y `Contacto.jsx`:
```json
"alternateName": ["Derma.M Med Spa", "DERMA.M", "Derma M", "DermaM"],
"knowsAbout": [
  "Medical spa", "Aesthetic medicine", "Skin care",
  "Facial treatments", "Hydrafacial", "Microneedling", "Chemical peel",
  "Facial radiofrequency", "High-intensity focused ultrasound (HIFU)",
  "Oxygen facial therapy", "Acne treatment", "Hyperpigmentation treatment",
  "Microdermabrasion", "Cold plasma therapy",
  "Body contouring", "Manual lymphatic drainage", "Post-operative recovery care",
  "Cellulite treatment", "Carboxytherapy", "Wood therapy (maderoterapia)",
  "Laser hair removal", "Intense pulsed light (IPL)",
  "Esthetic dentistry", "Teeth whitening",
  "IV therapy", "Scalp and hair treatments"
],
"keywords": "medical spa West Palm Beach, med spa West Palm Beach, medspa WPB, skin care clinic West Palm Beach, facial spa, laser hair removal West Palm Beach"
```
Las variantes "med spa" / "medspa" viven **solo** en `alternateName`/`keywords` — el `name`
sigue siendo `"Derma.M"` y no se introduce ningún lockup de marca (respeta `MEMORY.md` /
`DECISIONS.md` 2026-08-27). `knowsAbout`: strings ahora; convertir entidades fuertes a
`DefinedTerm` con `sameAs` a Wikipedia/Wikidata queda como mejora futura opcional.

### C6 — `areaServed` a nivel org
Agregar al `#organization`:
```json
"areaServed": [
  { "@type": "City", "name": "West Palm Beach" },
  { "@type": "AdministrativeArea", "name": "Palm Beach County" }
]
```
Modesto a propósito (no inflar cobertura — "test del dolor").

### C7 — Aplanar el `location` anidado
En `Home.jsx` y `Contacto.jsx`: mover `address`, `geo`, `openingHoursSpecification` desde el
objeto anidado `location: [{ "@type": "HealthAndBeautyBusiness", … }]` **directamente** al
nodo `#organization`, y eliminar el wrapper `location` y su `name` redundante
("Derma.M — West Palm Beach"). Es una sola ubicación → sin pérdida de información. Los
valores no cambian (incl. `geo: 26.6627718, -80.0558881` — correcto).

### C8 — Embed del mapa en `/contacto`
`Contacto.jsx` (~L465-473): regenerar el código de inserción desde Google Maps (Share →
Embed) para `5707 S Dixie Hwy Ste D, West Palm Beach, FL 33405` y reemplazar el atributo
`src` del `<iframe>`. Conservar los atributos existentes (`width`, `height`, `style`,
`loading="lazy"` si está, `referrerpolicy`, `title`/`aria-label`). Obtener el embed nuevo
con el browser durante la implementación.

## Orden de aplicación

C1–C7 son ediciones al mismo nodo JSON-LD en 2 archivos (+ C4 en un 3º) → **una sola
tanda**, un commit. C8 (mapa) es un segundo commit en el plan (concern distinto, mismo
archivo).

## Verificación (definition of done)

1. `npm run test:visual` → sin diffs nuevos (baseline actual: 34/34). El JSON-LD no se
   renderiza; el `<iframe>` cambia de `src` pero `/contacto` no está en baseline — confirmar.
2. DOM en `/` y `/contacto`: el `@graph` tiene `#organization` con `@type
   "HealthAndBeautyBusiness"`, `description` con "medical spa" (sin "clínica"), `sameAs` con
   las 3 URLs externas, `alternateName`/`knowsAbout`/`keywords`/`areaServed` presentes,
   `address`/`geo`/`openingHoursSpecification` **directo** en `#organization` (sin `location`
   anidado), **sin** `aggregateRating`, **sin** `medicalSpecialty`. 0 errores de consola.
3. DOM en `/nosotros/nancy-nieto`: `Person.sameAs` incluye la URL de LinkedIn.
4. Validar el JSON-LD de `/` y `/contacto` con el validador de Schema.org
   (https://validator.schema.org/) — 0 errores, 0 warnings nuevos.
5. `/contacto`: el mapa carga y el pin cae en `5707 S Dixie Hwy Ste D` (verificación visual
   en el browser).
6. `grep`: 0 ocurrencias de `medicalSpecialty`, `aggregateRating`, `"clínica de medicina
   estética"` en `src/pages/`.

## Registro al cerrar

- `PROGRESS.md` — entrada nueva.
- `MEMORY.md` — actualizar la sección de schema/`#head` de tratamiento con el estado nuevo
  del `#organization` (aplanado, `sameAs` real, sin `aggregateRating`/`medicalSpecialty`).
- `DECISIONS.md` — (a) por qué `HealthAndBeautyBusiness` solo y no `MedicalBusiness`;
  (b) por qué se quitó `aggregateRating` en vez de mostrar reseñas ahora (→ 8.20 / APIFY);
  (c) variantes "med spa"/"medspa" solo en `alternateName`/`keywords`, nunca en `name`.
- `docs/SEO_AUDIT_2026.md` — marcar 8.14 y 8.18 como Hecho; 8.19 sigue Pendiente (sesión B);
  8.20 Pendiente.
