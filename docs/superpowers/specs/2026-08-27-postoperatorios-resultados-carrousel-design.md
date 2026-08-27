# Spec — Sección "RESULTADOS" de `/tratamientos-postoperatorios` → carrousel de antes/después

Fecha: 2026-08-27
Estado: aprobado en brainstorming, pendiente de revisión de spec.

## Problema

En `/tratamientos-postoperatorios` la sección "RESULTADOS" (`beforeAfter`) apunta a
`before-after-1.jpg` / `before-after-2.jpg`, archivos que **no existen**. El dev server
devuelve el fallback SPA, así que se ven **dos rectángulos negros vacíos**. El disclaimer
actual (*"Las imágenes de resultados, cuando estén disponibles, serán ejemplos
informativos…"*) es un parche sobre una sección sin contenido.

Ahora hay **8 imágenes reales**:
- **7 composites**: cada archivo ya trae el antes y el después juntos en una sola imagen
  (fondo blanco, sin texto sobrepuesto).
- **1 de resultado único**: una sola foto, sin antes.

## Objetivo

Reemplazar la grilla estática por un **carrousel** de una imagen por vista que muestre
las 8, reutilizando el lenguaje visual del slot actual (`BeforeAfterGrid`), sin librerías
nuevas y sin tocar `BeforeAfterGrid` (lo comparten `/` landings y treatment pages).

## No-objetivos (YAGNI)

- Sin autoplay.
- Sin zoom / lightbox / modal.
- Sin thumbnails.
- Sin caption por caso ni contador "1 / 8".
- No se toca `BeforeAfterGrid.jsx` ni su `.module.css`.
- No se cambia el slug ni la ruta.

## Diseño

### Componente nuevo

`src/components/shared/BeforeAfterCarousel/`
- `BeforeAfterCarousel.jsx`
- `BeforeAfterCarousel.module.css`

CSS propio. Los valores de chip de etiqueta, marco y disclaimer se **copian** de
`BeforeAfterGrid.module.css` (no se importa ese módulo), para mantener el mismo aspecto:
- Marco: sin `border-radius`, `background:#1A1919`, `overflow:hidden`, `object-fit:cover`.
- Chip: `.imageLabel` — `position:absolute; top:16px`, `font 11px/0.1em Poppins 500`,
  `text-transform:uppercase`, `padding:6px 12px`, `background:rgba(20,19,19,.4)` + `blur(4px)`,
  color `#F2F0F1`. Variante `light`: `background:rgba(242,240,241,.6)`, color `#141313`.
- Disclaimer: `.disclaimer` — `12px` (`13px` ≥768), Poppins 300, color `#BBB8B5`
  (`#706E6B` en `light`), con `border-top` y `margin-top:48px` como en el original.

Header de la sección: sigue usando `SectionHeader` (mismo `eyebrow` + `title` + `variant`).

### Props

```
BeforeAfterCarousel({ eyebrow, headline, items, disclaimer, variant = 'light' })
```

`items`: array de `{ src, alt, type }` donde `type` ∈ `'comparison' | 'result'`.

### Estructura y comportamiento

- **1 imagen por vista** siempre (desktop y mobile).
- Track horizontal: `display:flex`, `overflow-x:auto`, `scroll-snap-type:x mandatory`,
  scrollbar oculta (`scrollbar-width:none` + `::-webkit-scrollbar{display:none}`).
- Cada slide: `flex:0 0 100%`, `scroll-snap-align:center`.
- Todos los slides usan `object-fit:cover`. Las 8 imágenes son 1000×1250 (4:5), la misma
  proporción del marco → no hay recorte; no se necesita caso especial para `result`.
- **Proporción del marco (`aspect-ratio`)**: `4 / 5` (idéntico al `.imageContainer` actual
  de `BeforeAfterGrid`). Resuelto: los 8 assets ya son 1000×1250.
- Swipe nativo en touch (no se intercepta).
- Estado `activeIndex` derivado del scroll (listener `scroll` con `Math.round(scrollLeft / slideWidth)`),
  o actualizado directamente al clickear flecha/dot. `IntersectionObserver` por slide es la
  alternativa aceptable si el cálculo por scroll resulta impreciso.
- Navegación programática: `track.scrollTo({ left: index * slideWidth, behavior })` donde
  `behavior` = `'auto'` si `matchMedia('(prefers-reduced-motion: reduce)')` matchea, si no
  `'smooth'`.

### Controles

**Flechas** (`ChevronLeft` / `ChevronRight` de `lucide-react`, `strokeWidth={1.5}`, 20px,
color `#363633`):
- `<button type="button">`, círculo 44×44, `border:1px solid rgba(54,54,51,.3)`,
  `background:transparent`, `border-radius:9999px`. Hover: `background:rgba(54,54,51,.06)`.
  Focus visible: outline del sistema del proyecto (no se redefine).
- En el primer slide se deshabilita "anterior"; en el último, "siguiente"
  (`disabled` + `opacity:.35`). No hay loop.
- **Desktop (≥768px)**: fila `‹  [marco]  ›`, flechas centradas verticalmente, fuera del marco.
- **Mobile (<768px)**: flechas `position:absolute` en las esquinas inferiores del marco
  (`bottom:16px`, una a `left:16px`, otra a `right:16px`), `background:rgba(242,240,241,.7)`
  + `backdrop-filter:blur(4px)`.

**Dots**: fila centrada debajo del marco (y debajo de las flechas en desktop).
- 8 `<button type="button">`, 8×8, `border-radius:9999px`, sin borde.
- Activo: `background:#363633`. Inactivo: `background:rgba(54,54,51,.25)`. `gap:8px`.
- Click → navega a ese índice.

### Etiquetas por slide

- `type: 'comparison'` → **dos** chips sobre la misma imagen:
  `ANTES` en `top:16px; left:16px`; `DESPUÉS` en `top:16px; right:16px`.
- `type: 'result'` → **un** chip `RESULTADO` en `top:16px; left:16px`.
- Ambos con la variante `light` del chip (la sección es `variant:'light'`).

### Accesibilidad

- Contenedor del carrousel: `role="region"`, `aria-roledescription="carousel"`,
  `aria-label="Resultados de tratamientos postoperatorios"`.
- Cada slide: `role="group"`, `aria-roledescription="diapositiva"`,
  `aria-label="{n} de {total}"`.
- Flechas: `aria-label="Imagen anterior"` / `"Imagen siguiente"`.
- Dots: `aria-label="Ir a la imagen {n}"`; el activo lleva `aria-current="true"`.
- El track es focuseable (`tabIndex={0}`) para permitir scroll con teclado; las flechas y
  dots ya cubren la navegación por teclado.
- Contraste de chips y dots verificado AA sobre fondo claro de la sección.

## Integración en el template

`src/components/templates/LandingPage/LandingPage.jsx`:

Dentro del bloque `{beforeAfter && ( ... )}` existente (LandingPage.jsx ~línea 124), se
conserva el `<section>` y cualquier wrapper actual **sin cambios**, y solo se reemplaza el
hijo `<BeforeAfterGrid ... />` por un ternario:

```jsx
{beforeAfter.layout === 'carousel' ? (
  <BeforeAfterCarousel
    eyebrow={beforeAfter.eyebrow}
    headline={beforeAfter.headline}
    items={beforeAfter.items}
    disclaimer={beforeAfter.disclaimer}
    variant={beforeAfter.variant || 'light'}
  />
) : (
  <BeforeAfterGrid
    /* props actuales, sin cambios */
  />
)}
```

Ninguna otra landing define `layout: 'carousel'`, así que su render no cambia.

## Datos

`src/data/landingPages.js` — `tratamientosPostoperatorios.beforeAfter`:

```js
beforeAfter: {
  layout: 'carousel',
  variant: 'light',
  eyebrow: 'RESULTADOS',
  headline: 'ACOMPAÑAMIENTO VISIBLE DURANTE TU PROCESO DE RECUPERACIÓN',
  items: [
    { src: '/assets/images/landings/tratamientos-postoperatorios/postoperatorio-caso-1.jpg', alt: '…', type: 'comparison' },
    { src: '/assets/images/landings/tratamientos-postoperatorios/postoperatorio-caso-2.jpg', alt: '…', type: 'comparison' },
    { src: '/assets/images/landings/tratamientos-postoperatorios/postoperatorio-caso-3.jpg', alt: '…', type: 'comparison' },
    { src: '/assets/images/landings/tratamientos-postoperatorios/postoperatorio-caso-4.jpg', alt: '…', type: 'comparison' },
    { src: '/assets/images/landings/tratamientos-postoperatorios/postoperatorio-caso-5.jpg', alt: '…', type: 'comparison' },
    { src: '/assets/images/landings/tratamientos-postoperatorios/postoperatorio-caso-6.jpg', alt: '…', type: 'comparison' },
    { src: '/assets/images/landings/tratamientos-postoperatorios/postoperatorio-caso-7.jpg', alt: '…', type: 'comparison' },
    { src: '/assets/images/landings/tratamientos-postoperatorios/postoperatorio-caso-resultado.jpg', alt: '…', type: 'result' },
  ],
  disclaimer:
    'Fotografías de casos reales de pacientes de Derma.M. Cada proceso postoperatorio es individual: los resultados varían según el procedimiento previo realizado, las características de cada persona y el seguimiento de las indicaciones. Ningún contenido de este sitio garantiza resultados específicos.',
}
```

`alt` por imagen: descriptivo, en español, sin promesas de resultado. Patrón:
*"Abdomen de paciente antes y después de acompañamiento postoperatorio con drenaje linfático
en Derma.M, West Palm Beach"* (variar la zona/técnica según lo que muestre cada foto; la
número 8 describe solo el resultado).

## Assets

Origen: 8 archivos que aporta el usuario.

**Hecho** (2026-08-27):
- 8 `.jpg` cargados por el usuario en
  `public/assets/images/landings/tratamientos-postoperatorios/`:
  `postoperatorio-caso-1..7.jpg` + `postoperatorio-caso-resultado.jpg`. Todos 1000×1250 (4:5).
- `.webp` q78 generados con `sharp` (41–70 KB c/u). El componente usa `Picture` → sirve
  webp con fallback jpg automáticamente.

Pendiente:
- `alt` descriptivo por imagen (al implementar, según lo que muestre cada foto).
- `card.jpg.placeholder` y `.gitkeep` de esa carpeta: NO tocar (fuera de alcance).

## Tests / verificación

- `tests/visual.spec.js` solo snapshotea `postoperatorios-problem.png`; la sección de
  resultados no está cubierta → **sin churn de baselines**.
- Agregar un test visual nuevo: navegar a `/tratamientos-postoperatorios`, localizar la
  sección del carrousel, `toHaveScreenshot('postoperatorios-resultados-carrousel.png')`
  con el primer slide activo (marco + 2 chips + flechas + dots). Baseline nueva, generada
  con `--update-snapshots`.
- Verificación manual en dev (`npm run dev`, :3000):
  - Las 8 imágenes cargan (webp vía HTTP 200 real, no fallback SPA), sin 404 a
    `before-after-*`.
  - Flechas: avanzan/retroceden, `disabled` en extremos, sin loop.
  - Dots: 8, el activo sigue al slide, click navega.
  - Swipe en viewport mobile (375px) mueve de a 1; flechas sobre el marco, sin overflow-x.
  - Slide 8 (`result`, `postoperatorio-caso-resultado`) muestra un solo chip `RESULTADO`.
  - Slides 1–7: chips `ANTES` / `DESPUÉS` a la misma altura.
  - `prefers-reduced-motion`: el scroll no anima.
  - Sin errores de consola.
- `docs/MEDICAL_COMPLIANCE.md`: el disclaimer nuevo no usa garantías ni diagnósticos;
  cross-check al implementar.
- WCAG AA: contraste de chips/dots, foco visible en flechas/dots, orden de tabulación
  (flechas → track → dots), `aria-*` presentes.

## Registro al cerrar (definición de done del proyecto)

- `PROGRESS.md` — entrada nueva arriba: qué cambió, `aspect-ratio` final elegido, nombres
  de assets.
- `DECISIONS.md` — decisión: carrousel propio en vez de extender `BeforeAfterGrid`
  (motivo: componente compartido, blast radius); sin autoplay (a11y/movimiento).
- `MEMORY.md` — nuevo componente compartido `BeforeAfterCarousel` y la convención
  `beforeAfter.layout === 'carousel'` en el template `LandingPage`.
- Backlog 7.2 / 7.3: `tratamientos-postoperatorios` deja de estar "sin media".
