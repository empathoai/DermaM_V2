# Spec — Sub-proyecto D: pulido (alt de cards + relatedLinks en 2 landings)

Fecha: 2026-08-27
Estado: aprobado en brainstorming, pendiente de revisión de spec.

## Origen

Cierre de WARN del audit `seo-checklist-65`. 2 ítems mecánicos y de bajo riesgo.
El 3º ítem candidato (enlaces externos de autoridad) se **saca de D** — requiere curar
fuentes por tratamiento + revisión de `docs/MEDICAL_COMPLIANCE.md` → va al sub-proyecto C.

## D1 — `alt` Title Case en `TreatmentCard` (background)

`src/components/shared/TreatmentCard/TreatmentCard.jsx`:
- `import { titleCase } from '../../../utils/text';`
- `<MediaBlock src={image} alt={title} …>` → `alt={titleCase(title)}`

**Impacto:** `TreatmentCard` lo usan `CategoryPage` (grillas de hub) y `RelatedTreatments`
("Te puede interesar" en páginas de tratamiento). Hoy `alt` = `title` en MAYÚSCULAS
(`"HIDROFACIAL"`), duplicando el `<h3>` visible. Con `titleCase` → `"Hidrofacial"`: mejor
a11y (lectores de pantalla no gritan) y señal de Google Imágenes, sin duplicar el h3.

**No rompe:** cambio de atributo, sin efecto visual. Ningún snapshot de `tests/visual.spec.js`
cubre un hub ni la sección "Te puede interesar".

## D2 — `relatedLinks` en prf-y-fibrina y limpieza-facial-profunda (visible, mínimo)

`src/data/landingPages.js` — agregar a `prfYFibrina` y `limpiezaFacial` (misma estructura
que ya tiene `postoperatorios`):

```js
relatedLinks: {
  label: 'Explora también',
  links: [
    { text: 'Tratamientos faciales', to: '/faciales' },
    { text: 'Agenda una valoración', to: '/contacto' }
  ]
}
```

Ubicación en el objeto: después de `beforeAfter`, antes de `brandPromise` (igual que en
`postoperatorios`).

`LandingPage.jsx` ya tiene el bloque `7b` que renderiza `relatedLinks` cuando existe →
**cero cambio de template**. CSS `.relatedLinks` ya existe.

**Impacto:** rompe el dead-end de enlazado saliente de esas 2 landings (hoy solo enlazan a
la política de reserva). Las 3 landings quedan consistentes.

**No rompe:** el bloque ya está en producción en `postoperatorios` (mismo CSS). Los
snapshots `PRP y Fibrina Landing - Viewport` y `Limpieza Facial Landing - Viewport`
capturan la sección `problem` (`section[class*="problem"]`), no este bloque, que va
después de `beforeAfter` y antes del `BrandDivider`.

## Verificación (definición de done)

- `npm run test:visual` → **22/22 sin diffs**.
- DOM:
  - Card en un hub (`/faciales`) y en "Te puede interesar" de una página de tratamiento:
    `<img alt>` en Title Case, sin MAYÚSCULAS sostenidas, distinto del `<h3>`.
  - `/prf-y-fibrina` y `/limpieza-facial-profunda`: `<a href="/faciales">` + `<a href="/contacto">`
    dentro de `<main>`, y el bloque "EXPLORA TAMBIÉN" visible entre la sección de resultados
    y el `BrandDivider`.
- Sin errores de consola en `/faciales`, `/prf-y-fibrina`, `/limpieza-facial-profunda`,
  y una página de tratamiento con "Te puede interesar".

## Registro al cerrar

- `PROGRESS.md`: entrada nueva arriba.
- `DECISIONS.md`: no requiere entrada (aplica patrones ya decididos: `titleCase` para alt
  desde `title` en MAYÚSCULAS; `relatedLinks` opcional en landing data).
- `MEMORY.md`: `TreatmentCard` usa `titleCase(title)` para el `alt`; prf-y-fibrina y
  limpieza-facial-profunda ahora tienen `relatedLinks` (las 3 landings lo tienen).
