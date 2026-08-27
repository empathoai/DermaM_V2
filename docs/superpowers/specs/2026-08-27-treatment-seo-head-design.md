# Spec — Sub-proyecto A: SEO head de páginas de tratamiento

Fecha: 2026-08-27
Estado: aprobado en brainstorming, pendiente de revisión de spec.

## Origen

Auditoría `seo-checklist-65` sobre `/tratamientos-postoperatorios` + `/faciales/peel-coreano`.
Score global 63/100. Las 3 landings quedaron endurecidas en sesiones previas; las **~24
páginas de tratamiento** (`/{categoria}/{slug}`, 5 categorías) no. Este sub-proyecto cierra
los 3 hallazgos críticos de head/schema. **Es 100% background** — nada visible en la página;
`test:visual` no cambia.

Sub-proyectos B (CLS width/height), C (bloques de respuesta directa / GEO) y D (pulido de
`alt` + `relatedLinks` en prf/limpieza + enlaces de autoridad) van después, cada uno con su spec.

## Estado actual (verificado)

- 5 archivos de ruta casi idénticos: `src/pages/treatments/{faciales,corporales,laser,dental,capilar}/[treatment].jsx`
  (rutas `/faciales/:treatment`, `/corporales/:treatment`, `/laser-y-luz/:treatment`,
  `/dental-estetico/:treatment`, `/capilar/:treatment`). Cada uno tiene su `<Helmet>` de
  éxito inline, difieren solo en el segmento de URL del canonical.
- `<title>` = `` `${treatmentData.title} | Derma.M` `` → `treatmentData.title` está en
  MAYÚSCULAS en `categoryPages.js` (`'PEEL COREANO'`). Resultado: `"PEEL COREANO | Derma.M"`
  (~21 char, sin geo).
- `<meta description>` = `treatmentData.description` → tagline corta (~40 char, p. ej.
  `"Renovación suave y luminosidad inmediata."`). Ese mismo campo se usa como **tagline
  visible** bajo el H1 y en las cards de `RelatedTreatments` → no se puede alargar.
- Schema: solo `Service` (sin `BreadcrumbList` pese a haber breadcrumb visual que no emite
  JSON-LD). `Service.name` cae a `treatmentData.title` (MAYÚSCULAS). `provider` re-declara
  `address` inline en vez de `@id`. Sin `areaServed`, sin `image`.
- Sin ninguna etiqueta `og:*` / `twitter:*`.
- `FAQPage` lo emite `FAQAccordion` (fuente única, correcto — no tocar).

## Cambios

### A1 — Componente compartido `TreatmentSEO`

**Nuevo:** `src/components/shared/TreatmentSEO/TreatmentSEO.jsx`.

```jsx
<TreatmentSEO data={treatmentData} categorySlug="faciales" slug={treatment} />
```

- Props: `data` (objeto compilado de `treatmentPages`), `categorySlug` (segmento de URL:
  `'faciales'` | `'corporales'` | `'laser-y-luz'` | `'dental-estetico'` | `'capilar'`),
  `slug` (`treatment` del `useParams`).
- Renderiza **todo** el `<Helmet>` de éxito: `<title>`, `description`, `canonical`,
  `robots`, bloque OG/Twitter (A4) y **un** `<script type="application/ld+json">` con
  `@graph` (A3).
- Constantes internas:
  ```js
  const SITE = 'https://dermamskinhealth.com';
  const HUB = {
    'faciales':        'Tratamientos Faciales',
    'corporales':      'Tratamientos Corporales',
    'laser-y-luz':     'Tratamientos Láser y Luz',
    'dental-estetico': 'Estética Dental',
    'capilar':         'Tratamientos Capilares',
  };
  ```
- Los 5 `[treatment].jsx` reemplazan su `<Helmet>` de la rama de éxito por
  `<TreatmentSEO … />`. **La rama "Tratamiento no encontrado" NO se toca** (mantiene su
  `<Helmet>` con `<title>` propio + `robots: noindex, nofollow`).
- `import { Helmet }` puede quedar sin uso en los `[treatment].jsx` de éxito → quitarlo solo
  si la rama "no encontrado" no lo usa en ese archivo (la usa → se queda).

### A2 — `<title>` y `<meta description>`

**Helper compartido:** mover `titleCase()` a `src/utils/text.js` y exportarlo
(hoy vive inline en `TreatmentDetailPage.jsx` — ese pasa a importarlo).

```js
export const titleCase = (s = '') =>
  s.toLowerCase().replace(/(^|\s|\/)([a-záéíóúñ])/g, (_, p, c) => p + c.toUpperCase());
```

En `TreatmentSEO`:

- `const name = titleCase(data.title);`
- **`title`** = `data.metaTitle` || (`` `${name} en West Palm Beach | Derma.M` `` si ≤ 60
  caracteres, si no `` `${name} | Derma.M` ``).
- **`description`** = `data.metaDescription` || `clamp(`` `${data.description} ${name} en Derma.M, West Palm Beach. Requiere valoración profesional previa.` ``, 155)`
  donde `clamp` corta en el último espacio antes de 155 y hace trim.
- Campos opcionales nuevos `metaTitle` / `metaDescription` en `categoryPages.js` (entradas
  de tratamiento) → cableados en `treatmentPages.js` (`found.metaTitle || null`,
  `found.metaDescription || null`) tanto en el retorno de `getBaseTreatment` como en el
  objeto compilado. **No se llenan en este sub-proyecto** — el fallback cubre las 24; quedan
  para hand-tuning por página.

### A3 — Schema `@graph`: `Service` + `BreadcrumbList`

Un solo `<script type="application/ld+json">`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "<titleCase(title)>",
      "description": "<description de A2>",
      "url": "<SITE>/<categorySlug>/<slug>",
      "serviceType": "Aesthetic Treatment",
      "image": "<SITE><data.image>",
      "areaServed": { "@type": "City", "name": "West Palm Beach" },
      "provider": {
        "@type": "HealthAndBeautyBusiness",
        "@id": "https://dermamskinhealth.com/#organization",
        "name": "Derma.M"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "<SITE>/" },
        { "@type": "ListItem", "position": 2, "name": "<HUB[categorySlug]>", "item": "<SITE>/<categorySlug>" },
        { "@type": "ListItem", "position": 3, "name": "<titleCase(title)>", "item": "<SITE>/<categorySlug>/<slug>" }
      ]
    }
  ]
}
```

- `data.image` ya viene absoluto-relativo (`/assets/images/treatments/…/hero.jpg`); anteponer `SITE`.
- **`dateModified`: fuera** — no hay dato por entrada; una fecha de build falsa perjudica.
  Va al backlog del sub-proyecto C (con contenido real).
- `FAQPage` sigue saliendo de `FAQAccordion`; `TreatmentSEO` NO lo emite.

### A4 — Open Graph / Twitter

En `TreatmentSEO`, con los mismos `title` / `description` / `canonical` de A2:

```
og:type = website
og:title, og:description  → = title / description
og:url                    → = canonical (SITE/categorySlug/slug)
og:image                  → SITE + data.image
twitter:card = summary_large_image
twitter:title, twitter:description, twitter:image → espejo
```

## Verificación (definición de done)

- `npm run test:visual` → **22/22 sin diffs** (solo `<head>`).
- DOM, 1 página por categoría (5 rutas reales, p. ej. `/faciales/peel-coreano`,
  `/corporales/<slug>`, `/laser-y-luz/<slug>`, `/dental-estetico/limpieza-dental`,
  `/capilar/<slug>`):
  - `<title>` en Title Case, con "West Palm Beach" salvo que el nombre lo lleve > 60 char; nunca MAYÚSCULAS sostenidas.
  - `<meta description>` entre ~110 y 155 caracteres, con el nombre del tratamiento + ubicación.
  - `canonical` **idéntico** al actual (`SITE/<categorySlug>/<slug>`).
  - `robots` = `index, follow`.
  - Exactamente **1** `script[application/ld+json]` con `@graph` = `[Service, BreadcrumbList]`;
    `Service.provider["@id"]` presente, `areaServed` + `image` presentes; `BreadcrumbList`
    de 3 niveles con `item` absolutos y `name` del leaf en Title Case.
  - Sigue habiendo el `FAQPage` de `FAQAccordion` (script aparte).
  - `og:*` y `twitter:*` presentes; `og:image` absoluta.
  - Ruta inexistente (`/faciales/no-existe`) → sigue `robots: noindex, nofollow`.
- `grep`: ninguno de los 5 `[treatment].jsx` contiene `application/ld+json` inline.
- Sin errores de consola en las 5 páginas.
- Rich Results Test (chequeo mental / manual): `Service`, `BreadcrumbList`, `FAQPage` válidos, sin warnings nuevos.

## Registro al cerrar

- `PROGRESS.md`: entrada nueva arriba.
- `DECISIONS.md`: (a) `TreatmentSEO` compartido reemplaza los 5 Helmets inline; (b) campos
  opcionales `metaTitle`/`metaDescription` en `categoryPages.js` con fallback compuesto;
  (c) schema de tratamiento a paridad con landings (`@id` + `BreadcrumbList` + `areaServed`).
- `MEMORY.md`: el `<head>` de páginas de tratamiento lo controla `TreatmentSEO`; helper
  `titleCase` en `src/utils/text.js`; `dateModified` pendiente (sub-proyecto C).
