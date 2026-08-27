# Spec — Sub-proyecto B: tune de LCP (re-scopeado)

Fecha: 2026-08-27
Estado: aprobado en brainstorming, pendiente de revisión de spec.

## Origen y re-scope

El audit `seo-checklist-65` marcó "sin `width`/`height` en hero y antes/después → riesgo CLS".
**Verificado que la premisa está mal:** todos los contenedores de imagen del sitio ya
reservan su caja por CSS:
- `TreatmentHero` / `PageHero`: `min-height: 70vh` (+ `82vh` / `calc(100vh-304px)`) con media `position:absolute; inset:0`
- `BeforeAfterGrid .imageContainer` / `BeforeAfterCarousel .slide`: `aspect-ratio: 4/5`
- `LandingPage .problemImage`: `aspect-ratio: 4/5` (mobile) / `height:100%` (desktop, flex)
- `TreatmentCard .imageWrapper`: `aspect-ratio: 1/1` · `FeaturedServices`: `aspect-ratio: 16/9` / `4/5`
- `whatIs` `<Picture>`: ya tiene `width="960" height="1200"`

CLS medido en el audit = 0. Agregar `width`/`height` "en todas las imágenes" no tiene
impacto medible aquí.

Este sub-proyecto se re-scopea a un **tune de LCP verificable, sin impacto de UI**:
todo son atributos / hints de carga; el CSS sigue controlando el render (`test:visual`
debe quedar 22/22 sin diffs).

## Cambios

### B1 — Prioridad de descarga del hero (LCP)

`src/components/utils/HeroMedia.jsx`, rama de imagen (`<Picture>`):
- Agregar `fetchpriority="high"`.
- Agregar `width={1920} height={1080}` (ratio 16:9 aprox. del hero).

`Picture.jsx` ya hace `{...rest}` → los atributos llegan al `<img>`. `HeroMedia` lo usan
`PageHero` (landings) y `TreatmentHero` (tratamientos) → un cambio, las dos superficies.

- **Impacto:** `fetchpriority="high"` en la imagen LCP hace que el navegador la baje antes
  que el resto → mejora directa de LCP. `width/height` = pista de ratio; el CSS
  (`objectFit:cover; width:100%; height:100%` en `combinedStyle`) sigue mandando → cero
  cambio visual. De paso silencia el Factor 30 de Lighthouse en el hero.
- **No toca** `PageHero.jsx` ni `TreatmentHero.jsx`.

### B2 — Imágenes bajo el fold no `eager`

- `src/components/shared/BeforeAfterGrid/BeforeAfterGrid.jsx`, `SlotMedia` → el `<Picture>`
  de imagen: agregar `loading="lazy"` (hoy sin atributo = eager).
- `src/components/shared/BeforeAfterCarousel/BeforeAfterCarousel.jsx`: el slide 0 hoy usa
  `loading={idx === 0 ? undefined : 'lazy'}` → cambiar a `loading="lazy"` para todos.

- **Impacto:** la sección antes/después está siempre muy por debajo del fold en toda
  página que la usa; ninguna de sus imágenes es candidata a LCP. Que bajen `eager` compite
  con el hero por ancho de banda en la carga inicial.
- El `<video>` de `SlotMedia` (rama `.mp4`) **no se toca** (ya tiene `preload="metadata"`).

### B3 — `width`/`height` solo en contenedores de ratio fijo conocido

Con el ratio exacto del contenedor (hint puro, el CSS ya controla el render):
- `BeforeAfterGrid` `SlotMedia` `<Picture>` y `BeforeAfterCarousel` `<Picture>`:
  `width={1000} height={1250}` (4:5, ratio de `.imageContainer` / `.slide` y de todos los
  assets B/A del proyecto, que son 1000×1250).
- `LandingPage.jsx` bloque problema `<Picture>`: `width={800} height={1000}` (4:5, ratio de
  `.problemImage` en mobile; en desktop el CSS pone `height:100%` y lo ignora).

- **Excluido `MediaBlock`**: se usa con contenedores de ratio variable (`1/1` en
  `TreatmentCard`, otros en otras superficies) — un hint fijo mentiría en algunos. Su
  `.wrapper { height:100% }` + el `aspect-ratio` del padre ya reservan la caja.
- **Excluido el hero** (cubierto en B1) y `whatIs` (ya tiene dims).

## Verificación (definición de done)

- **`npm run test:visual` → 22/22 sin diffs.** Es el guardrail principal: si algún hint de
  ratio no coincide con el CSS, el snapshot lo caza.
- DOM:
  - Hero (`/` y una página de tratamiento): `<img>` con `fetchpriority="high"` + `width="1920" height="1080"`, `loading="eager"`.
  - B/A (`/tratamientos-postoperatorios` carrusel + `/faciales/peel-coreano` grid): `<img>` con `loading="lazy"` + `width="1000" height="1250"`.
  - `LandingPage` problema: `<img>` con `width="800" height="1000"`.
- Sin errores de consola en `/`, `/tratamientos-postoperatorios`, `/faciales/peel-coreano`.
- `network`: en la carga inicial de `/faciales/peel-coreano`, las imágenes B/A NO aparecen entre las primeras solicitudes (quedan diferidas por `lazy`).

## Registro al cerrar

- `PROGRESS.md`: entrada nueva arriba (incluyendo que B se re-scopeó y por qué).
- `DECISIONS.md`: el CLS de imágenes ya está cubierto por CSS `aspect-ratio` / min-height en
  todo el sitio → no se añaden `width/height` de forma masiva; el tune de CWV se limita a
  `fetchpriority` en el hero + `lazy` en B/A + hints de ratio donde el contenedor es fijo.
- `MEMORY.md`: `HeroMedia` lleva `fetchpriority="high"` + dims; imágenes B/A son `lazy`;
  no agregar `width/height` a imágenes cuyo contenedor tenga ratio variable (`MediaBlock`).
