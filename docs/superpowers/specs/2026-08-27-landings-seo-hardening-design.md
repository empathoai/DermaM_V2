# Spec — Endurecimiento SEO de las 3 landings (auditoría `/tratamientos-postoperatorios`)

Fecha: 2026-08-27
Estado: alcance aprobado en brainstorming, pendiente de revisión de spec.

## Origen

Auditoría on-page de `/tratamientos-postoperatorios` (skill `seo-audit`). 7 hallazgos.
3 son patrón en las **3 landings** (`prf-y-fibrina`, `limpieza-facial-profunda`,
`tratamientos-postoperatorios`); 4 son específicos de postoperatorios.

Hallazgo al investigar: el `FAQPage` duplicado **solo** está en las 3 landings —
`FAQAccordion.jsx` ya emite un `FAQPage` en todas partes (landings, `TreatmentDetailPage`,
`Contacto`) y las 3 landings además lo repiten en su Helmet. `TreatmentDetailPage` y
`Contacto` están limpios.

## Alcance

- **Transversal a las 3 landings:** ítems 1–4.
- **Solo `tratamientos-postoperatorios`:** ítems 5–7.
- **Fuera de alcance (backlog):** breadcrumb visual en landings; auditoría de schema/alt de
  hubs y `TreatmentDetailPage`; `og:image` dedicada 1200×630; aplicar `relatedLinks` a
  prf/limpieza.

## Archivos tocados

- `src/pages/landings/Postoperatorios.jsx`, `PrfYFibrina.jsx`, `LimpiezaFacial.jsx` (Helmet)
- `src/components/sections/PageHero/PageHero.jsx` (nueva prop `imageAlt`, con fallback)
- `src/components/templates/LandingPage/LandingPage.jsx` (pasar `imageAlt`; alt de problem; bloque `relatedLinks`)
- `src/data/landingPages.js` (nuevos campos de contenido)
- `tests/visual.spec.js` (si el bloque `relatedLinks` cae en región snapshoteada)

No se toca `FAQAccordion.jsx`, `Home.jsx`, ni ningún archivo protegido.

---

## Ítem 1 — Dedupe `FAQPage` (3 landings)

**Qué:** eliminar el objeto `{ "@type": "FAQPage", "mainEntity": [...] }` del array `@graph`
en los 3 Helmets de landing. El `@graph` queda con un solo nodo (`Service`); se conserva el
wrapper `{ "@context": ..., "@graph": [ <Service> ] }`.

**Por qué:** `FAQAccordion` (renderizado por `LandingPage` en las 3) ya emite el `FAQPage`
canónico. Dos `FAQPage` en la misma URL = structured data en conflicto.

**Verificación:** en el DOM renderizado de cada landing, exactamente **1**
`script[type="application/ld+json"]` cuyo contenido incluye `"@type":"FAQPage"` (el de
`FAQAccordion`), con las mismas N preguntas del acordeón.

---

## Ítem 2 — `BreadcrumbList` schema (3 landings)

**Qué:** agregar al `@graph` de cada Helmet un nodo:

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://dermamskinhealth.com/" },
    { "@type": "ListItem", "position": 2, "name": "<HUB>", "item": "<HUB_URL>" },
    { "@type": "ListItem", "position": 3, "name": "<LEAF>", "item": "<CANONICAL>" }
  ]
}
```

| Landing | HUB / HUB_URL | LEAF / CANONICAL |
|---|---|---|
| postoperatorios | Tratamientos Corporales — `https://dermamskinhealth.com/corporales` | Tratamientos Postoperatorios — `https://dermamskinhealth.com/tratamientos-postoperatorios` |
| prf-y-fibrina | Tratamientos Faciales — `https://dermamskinhealth.com/faciales` | Plasma Rico en Plaquetas y Fibrina — `https://dermamskinhealth.com/prf-y-fibrina` |
| limpieza-facial-profunda | Tratamientos Faciales — `https://dermamskinhealth.com/faciales` | Limpieza Facial Profunda — `https://dermamskinhealth.com/limpieza-facial-profunda` |

(URLs de hub confirmadas contra `src/pages/hubs/*.jsx` canonical.)

**Sin** breadcrumb visual — solo JSON-LD. **Verificación:** Rich Results Test o
`JSON.parse` del `@graph` → `BreadcrumbList` válido, 3 niveles, `item` absolutos, `name` del
leaf == nombre público del tratamiento (ver [[decisions]] 2026-08-27 naming de PRF).

---

## Ítem 3 — `alt` de hero y de la imagen del bloque "problema" (3 landings)

**Estado actual:**
- `PageHero.jsx:41` pasa `alt={title}` a `HeroMedia` → `<img alt="TRATAMIENTOS POSTOPERATORIOS">` (MAYÚSCULAS, duplica el H1).
- `LandingPage.jsx:81` renderiza la imagen del bloque problema con `alt={problem.headline}` (MAYÚSCULAS, duplica el H2).
- La imagen de la sección "Cómo funciona" es `background-image` CSS (decorativa, sin `<img>`) → no aplica.

**Cambios de componente (con fallback = comportamiento actual):**
- `PageHero.jsx`: agregar prop `imageAlt`; `alt={imageAlt || title}`. Ningún otro caller
  (hubs, `TreatmentDetailPage`, `Nosotros`, etc.) pasa `imageAlt` → sin cambio para ellos.
- `LandingPage.jsx`:
  - `<PageHero ... imageAlt={hero.imageAlt} />`
  - imagen de problema: `alt={problem.imageAlt || problem.headline}`

**Contenido (`landingPages.js`, 3 landings):** agregar `hero.imageAlt` y `problem.imageAlt`.
Redacción: **el implementador abre cada archivo (`hero.jpg`, y el `problem.image` de cada
landing) en el browser y describe lo que la foto realmente muestra.** Reglas:
- Español, sin MAYÚSCULAS sostenidas, ≤125 caracteres.
- Patrón: `[qué se ve] + [contexto de tratamiento] + ", Derma.M, West Palm Beach"` cuando sea natural.
- Sin promesas de resultado ni lenguaje médico prohibido (cross-check `docs/MEDICAL_COMPLIANCE.md`).
- No repetir literalmente el H1/H2.

**Verificación:** DOM de cada landing → `<img>` de hero y de problema con `alt` descriptivo,
distinto del encabezado, sin caps.

---

## Ítem 4 — Enriquecer el `Service` schema (3 landings)

En el nodo `Service` de cada Helmet:

1. **`name`**: string literal en Title Case, **no** `hero.title` interpolado (que viene en
   MAYÚSCULAS). Valores: `"Tratamientos Postoperatorios"`, `"Plasma Rico en Plaquetas y
   Fibrina"`, `"Limpieza Facial Profunda"`.
2. **`provider`**: reemplazar el bloque parcial `HealthAndBeautyBusiness` + `address[]` por
   una **referencia** al nodo canónico de `Home.jsx`:
   ```json
   "provider": {
     "@type": "HealthAndBeautyBusiness",
     "@id": "https://dermamskinhealth.com/#organization",
     "name": "Derma.M"
   }
   ```
   (El nodo `#organization` en `Home.jsx` ya tiene address, telephone, geo, horarios,
   aggregateRating. Referenciar por `@id` consolida la entidad en vez de fragmentarla.)
3. **`areaServed`**: `{ "@type": "City", "name": "West Palm Beach" }`
4. **`image`**: URL absoluta de una foto real de la página. Usar el `hero.jpg` de cada
   landing (mismo asset que `og:image`, ya conocido): p.ej.
   `"https://dermamskinhealth.com/assets/images/landings/tratamientos-postoperatorios/hero.jpg"`.
5. Conservar `url`, `serviceType: "Aesthetic Treatment"`, `description` (sigue saliendo de
   `hero.body`).

**Verificación:** Rich Results Test → `Service` válido, `provider.@id` presente,
`areaServed` + `image` presentes, `name` sin caps.

---

## Ítem 5 — Enlaces internos contextuales (solo postoperatorios)

**Problema:** `<main>` tiene 5 links y solo 1 interno (`/booking-cancellation-refund-policy`).
Cero enlaces contextuales a páginas del sitio. La copy de `LandingPage` se renderiza como
texto plano (`{problem.body}`, `{item.answer}`…) — no hay punto de inyección de `<a>` sin
cambio de template.

**Enfoque:** nuevo campo opcional `relatedLinks` en el data de la landing + un bloque
mínimo en `LandingPage.jsx` que **solo renderiza si `relatedLinks` existe** (→ hoy solo
postoperatorios lo lleva).

**Data (`landingPages.js`, `postoperatorios`):**
```js
relatedLinks: {
  label: 'Explora también',
  links: [
    { text: 'Tratamientos corporales', to: '/corporales' },
    { text: 'Agenda una valoración', to: '/contacto' }
  ]
}
```

**Template (`LandingPage.jsx`):** bloque nuevo tras la sección `beforeAfter` (antes del
`BrandDivider` de `brandPromise`):
```jsx
{relatedLinks?.links?.length > 0 && (
  <section className={styles.relatedLinks}>
    <div className={styles.container}>
      <p className={styles.relatedLinksLabel}>{relatedLinks.label}</p>
      <ul className={styles.relatedLinksList}>
        {relatedLinks.links.map((l) => (
          <li key={l.to}><Link to={l.to}>{l.text}</Link></li>
        ))}
      </ul>
    </div>
  </section>
)}
```
- `Link` de `react-router-dom` — **agregar el import** en `LandingPage.jsx` (hoy no está; el resto de links del template son `<a>` externos).
- CSS nuevo en `LandingPage.module.css`: prose discreta, coherente con la sección
  (`variant light`, tipografía Poppins, sin inventar un patrón visual nuevo). Underline en
  los links, foco visible del sistema.
- Anchor text descriptivo (no "click aquí").

**Alternativa considerada y descartada:** renderizar `<RelatedTreatments>` (componente de
`TreatmentDetailPage`) — está acoplado a la forma de datos de tratamiento y traería una
grilla de cards; sobredimensionado para 2 links.

**Verificación:** DOM de postoperatorios → `<a href="/corporales">` y `<a href="/contacto">`
dentro de `<main>`; las otras 2 landings sin el bloque (no definen `relatedLinks`).

---

## Ítem 6 — Señal local en copy visible (solo postoperatorios)

**Problema:** "West Palm Beach" no aparece en ningún párrafo/encabezado visible, solo en
meta/schema/alt.

**Cambio:** una mención natural en `postoperatorios.hero.body` **o** `postoperatorios.problem.body`
(elegir el que fluya mejor; no ambos). Ejemplo sobre `hero.body`:
> "…y recuperación progresiva después de un procedimiento estético, en nuestra clínica de West Palm Beach."

- Una sola mención. Sin keyword stuffing. Sin cambiar el sentido del párrafo.
- Cross-check `docs/MEDICAL_COMPLIANCE.md`.

**Verificación:** `get_page_text` de postoperatorios contiene "West Palm Beach" en el cuerpo.

---

## Ítem 7 — QA de los 8 `alt` del carrousel (solo postoperatorios)

Los 8 `alt` actuales (`landingPages.js`, `postoperatorios.beforeAfter.items`) se redactaron
con supuestos ("masaje reductor", zonas) sin ver cada foto, y son repetitivos.

**Método:** abrir cada uno de los 8 archivos
(`postoperatorio-caso-1..7.jpg`, `postoperatorio-caso-resultado.jpg`) en el browser (zoom),
y reescribir el `alt` para que describa lo que **realmente** muestra (zona del cuerpo,
plano, que es comparativa antes/después vs. resultado único). Variar la redacción entre
ítems. Mismas reglas del ítem 3 (≤125 char, sin caps, sin claims, locale cuando sea
natural). Confirmación final del usuario sobre que cada `alt` matchea su foto.

**Verificación:** los 8 `alt` en el DOM son distintos entre sí y coherentes con la imagen.

---

## Orden de ejecución (cada ítem se cierra y registra por separado)

1 → 2 → 4 (los 3 son ediciones de Helmet, se pueden hacer casi juntos pero se registran
como 3 entradas) → 3 (componente + data) → 6 (copy) → 5 (componente + data + posible test) →
7 (QA de alt).

Tras cada ítem aprobado: entrada en `PROGRESS.md` (arriba), y donde aplique:
- `DECISIONS.md`: (a) `FAQPage` de landing = única fuente `FAQAccordion`, las landings NO
  deben declarar `FAQPage` a nivel Helmet; (b) `Service.provider` referencia
  `#organization` por `@id` en vez de re-declarar address; (c) convención prop `imageAlt` en
  `PageHero`; (d) campo `relatedLinks` en landing data + bloque en `LandingPage`.
- `MEMORY.md`: las 3 landings ahora llevan `BreadcrumbList` + `Service` con `@id`/`areaServed`/`image`;
  `hero.imageAlt` / `problem.imageAlt` opcionales en landing data; `relatedLinks` opcional.

## Verificación global (definición de done)

- **Schema (las 3 landings):** Rich Results Test / parse del DOM →
  - exactamente 1 `FAQPage`,
  - 1 `BreadcrumbList` válido de 3 niveles,
  - `Service` con `name` Title Case + `provider.@id` + `areaServed` + `image`.
  Cero errores/warnings nuevos.
- **alt:** hero y problema con `alt` descriptivo (3 landings); 8 del carrousel revisados (postoperatorios).
- **Enlaces:** postoperatorios con ≥2 `<a>` internos contextuales en `<main>`; "West Palm Beach" en copy visible.
- **Regresión visual:** `npm run test:visual`. Cambios sin efecto visual: `imageAlt`, alt de
  problema, dedupe/breadcrumb/Service (schema en `<head>`). Con posible efecto visual: el
  bloque `relatedLinks` en postoperatorios — si cae dentro de una región snapshoteada,
  regenerar ese baseline; si no, suite sin cambios. Meta: **suite verde**.
- **Sin errores de consola** en las 3 landings; las 3 renderizan.
- `docs/MEDICAL_COMPLIANCE.md` cross-check de toda copy/alt nueva.
- WCAG AA en el bloque `relatedLinks`: contraste, foco visible, links con texto descriptivo.
