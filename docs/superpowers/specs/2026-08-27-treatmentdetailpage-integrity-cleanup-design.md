# Spec — Limpieza de integridad de `TreatmentDetailPage` (25 páginas de tratamiento)

Fecha: 2026-08-27
Estado: aprobado en brainstorming, pendiente de revisión de spec.

## Origen

Del "mapa de imágenes" de `/faciales/peel-coreano`. Tres defectos que afectan a
**todas** las páginas de tratamiento (`TreatmentDetailPage`), no solo peel-coreano.

Datos verificados:
- **25** carpetas de slug bajo `public/assets/images/treatments/`.
- **Solo 3** tienen antes/después reales en disco: `blanqueamiento-dental`, `limpieza-dental`,
  `peel-coreano` — y las 3 tienen override `customDetails.beforeAfter`.
- Las **22 restantes** renderizan la sección B/A con rutas de convención
  (`before-after-1/2.jpg`) que no existen → `<img>` roto + `alt="Before"/"After"`.
- **Ninguna** de las 25 carpetas tiene `protocol.jpg`; `treatmentPages.js` lo referencia
  incondicionalmente → 25 requests 404 por crawl/carga.
- `TreatmentHero.jsx:36` → `alt=""` (hero LCP sin alt en las 25).
- Whatis `<Picture>` (`TreatmentDetailPage.jsx:137`) → `alt={title}`, y `title` está en
  MAYÚSCULAS en los datos (`categoryPages.js`, p.ej. `'PEEL COREANO'`).

## Alcance

- **Este spec:** los 3 cambios de abajo. `TreatmentDetailPage.jsx`, `treatmentPages.js`
  (builder), `TreatmentHero.jsx` (1 línea).
- **Fuera de alcance (backlog):** renombrar `hero.jpg` / `whatis.jpg` / `cta.jpg` en las
  ~25 carpetas + cambiar la convención del builder. Blast radius ~150 archivos, retorno SEO
  débil (la ruta `/treatments/<cat>/<slug>/` ya lleva el contexto). También: `alt`
  descriptivo por página (se llena oportunistamente vía los campos opcionales del Cambio 3).

## Cambio 1 — Sección antes/después: renderizar solo con imágenes reales

**`TreatmentDetailPage.jsx`:**
- Línea ~61: `const beforeAfterItems = beforeAfter?.items ?? [ {convención...} ]`
  → `const beforeAfterItems = beforeAfter?.items ?? [];`
- Sección ~253 (`{/* 11. Before & After */}`): envolver todo el `<section
  className={styles.beforeAfterSection}>` en `{beforeAfterItems.length > 0 && ( ... )}`.
- Eliminar la variable `categoryFolder` si queda sin uso tras quitar el fallback
  (verificar: hoy solo se usa para construir esas rutas).

**Impacto SEO/eficiencia:**
- Elimina 44 requests de imagen rotos (22 páginas × 2).
- Borra `alt="Before"/"After"` — inglés y no descriptivo en un sitio médico en español
  (señal de calidad/E-E-A-T negativa).
- Quita una sección "de resultados" vacía/rota que se lee como contenido thin.

**No rompe nada:**
- Las 3 páginas con B/A real tienen `customDetails.beforeAfter` (`items` no vacío) →
  siguen renderizando igual.
- Ningún snapshot de `tests/visual.spec.js` cubre una sección B/A de tratamiento
  (`hidrofacial-whatis` = sección whatIs; `hidrofacial` = viewport del hero).
- Reactivar cualquier página: cargar 2 fotos con nombre `<slug>-antes.jpg` /
  `<slug>-despues.jpg` + agregar `customDetails['<slug>'].beforeAfter` (rutas + `alt`).
  Sin cambio de template. Igual que `peel-coreano` (2026-08-27).

## Cambio 2 — `protocol.jpg`: no referenciar un archivo inexistente

**`treatmentPages.js`** (builder, ~línea 1241):
- `protocolImage: \`${treatmentAssetBase}/protocol.jpg\`` → `protocolImage: custom.protocolImage || null`

**`TreatmentDetailPage.jsx`** (~línea 196): ya es
`style={{ backgroundImage: \`url(${protocolImage || image}), url(${image})\` }}` → con
`protocolImage` null usa `image` (hero) en ambas capas. **Visualmente idéntico a hoy**
(ya está cayendo a ese fallback porque el archivo no existe).

**Impacto SEO/eficiencia:** mata 25 requests 404 (uno por página de tratamiento por
crawl/carga). Crawl más limpio, menos ruido de red, marginal en CWV.

**No rompe nada:** la sección "Cómo funciona" ya se ve con el hero de fondo hoy. Se conserva
`custom.protocolImage` como override futuro (mismo patrón que `beforeAfter`).

## Cambio 3 — `alt` de hero y whatis (las 25 páginas)

**Helper en `TreatmentDetailPage.jsx`** (o util compartido si ya existe uno de strings):
```js
const titleCase = (s = '') =>
  s.toLowerCase().replace(/(^|\s|\/)([a-záéíóúñ])/g, (_, p, c) => p + c.toUpperCase());
```
`'PEEL COREANO'` → `'Peel Coreano'`; `'HIFU FACIAL'` → `'Hifu Facial'`;
`'MICRONEEDLING / DERMAPEN'` → `'Microneedling / Dermapen'`.

**`TreatmentHero.jsx`:**
- Nueva prop opcional `imageAlt`.
- `alt=""` → `alt={imageAlt || title}`.
- `TreatmentDetailPage.jsx` pasa `imageAlt={heroImageAlt || \`${titleCase(title)} en Derma.M, West Palm Beach\`}`.

**`TreatmentDetailPage.jsx` whatis `<Picture>`:**
- `alt={title}` → `alt={whatIsImageAlt || \`Aplicación de ${titleCase(title)} en Derma.M\`}`

**Campos opcionales nuevos** en el objeto compilado (builder): `heroImageAlt` y
`whatIsImageAlt`, ambos `custom.heroImageAlt || null` / `custom.whatIsImageAlt || null`.
Se llenan por página cuando cada una reciba atención (como el B/A de peel-coreano). Hoy
ninguna los define → todas usan el fallback en Title Case.

**Impacto SEO/eficiencia:** `alt=""` en la imagen LCP de las 25 páginas = señal de
Google Imágenes y de accesibilidad perdida; `alt` en MAYÚSCULAS = mala a11y (lectores de
pantalla deletrean/gritan). Fallback con el nombre del tratamiento + locale, en Title Case,
es ganancia real para image search y WCAG 2.1 AA.

**No rompe nada:** cambio de atributo, sin layout. `hidrofacial-whatis.png` no ve el `alt`.

## Verificación (definición de done)

- `npm run test:visual` → **22/22 sin diffs** (nada de esto es visual: guard de sección
  que solo afecta páginas hoy rotas; `protocol` ya cae al hero; `alt` no renderiza).
- DOM de 4 páginas de tratamiento (≥1 con B/A real, ≥2 sin, incl. `hidrofacial`):
  - Sin B/A real → **no existe** `section.beforeAfterSection` en el DOM.
  - Con B/A real (`peel-coreano`) → sección presente, imágenes sirviendo, labels ANTES/DESPUÉS.
  - **Cero** requests a `.../protocol.jpg` en la pestaña Network.
  - `<img>` del hero: `alt` en Title Case, no vacío, no MAYÚSCULAS.
  - `<img>` del whatis: `alt` = "Aplicación de <Tratamiento> en Derma.M", no MAYÚSCULAS.
  - Sección "Cómo funciona" con el fondo del hero, sin cambio visual.
- Sin errores de consola en las 4 páginas.
- `grep` post-cambio: `before-after-1.jpg` ya no aparece en `TreatmentDetailPage.jsx`;
  `protocol.jpg` ya no aparece en `treatmentPages.js`.

## Registro al cerrar

- `PROGRESS.md`: entrada nueva arriba.
- `DECISIONS.md`: (a) sección B/A de tratamiento es opt-in vía `customDetails.beforeAfter`
  (se cae el fallback de convención); (b) `protocolImage` opt-in vía `custom.protocolImage`;
  (c) `TreatmentHero` prop `imageAlt` + fallback Title Case + campos `heroImageAlt`/`whatIsImageAlt`.
- `MEMORY.md`: la sección B/A de `TreatmentDetailPage` solo renderiza con `customDetails.beforeAfter`;
  `TreatmentHero` acepta `imageAlt`; helper `titleCase` para `alt` desde `title` (que está en MAYÚSCULAS).
