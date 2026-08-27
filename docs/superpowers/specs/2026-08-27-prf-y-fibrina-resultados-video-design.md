# Diseño — Sección "RESULTADOS" de prf-y-fibrina: procedimiento (video) + resultado (imagen)

Fecha: 2026-08-27
Estado: aprobado (pendiente review del spec por el usuario)

## Problema

La landing `/prf-y-fibrina` tiene su sección "RESULTADOS" (`beforeAfter` en
`landingPages.js`) apuntando a `before-after-1.jpg` / `before-after-2.jpg` que no existen
→ 2 cajas negras. No hay fotos antes/después de este tratamiento. Lo que hay:

- **1 imagen de resultado** (jpg, la aporta el usuario, 1000×1250 / 4:5).
- **1 video 4:5** (mp4, merge de 2 clips, lo aporta el usuario) que muestra el
  procedimiento.

Decisión del usuario: mostrar los dos lado a lado en los 2 slots — **izquierda =
PROCEDIMIENTO (video)**, **derecha = RESULTADO (imagen)**. Mismo criterio de layout que
`blanqueamiento-dental`.

`BeforeAfterGrid` y `MediaBlock` son solo imagen (`<Picture>`). Hay infraestructura de
video en el repo: `HeroMedia.jsx` (renderiza `<video autoplay muted playsinline>` si el
src termina en `.mp4`, `poster` = el `.jpg` homónimo) y `TeamMemberCard` (video con
play/pause por IntersectionObserver).

## Alcance

- Solo `prf-y-fibrina`.
- `BeforeAfterGrid` gana soporte de video en un slot (capacidad nueva, contenida).
- Se corrige el disclaimer placeholder de esta landing ("cuando estén disponibles").
- Fuera de alcance: el slug `/prf-y-fibrina` (ruta, redirect 301, es parte del backlog
  8.9/8.10 de posicionamiento PRP/PRF); las otras 2 landings sin imágenes
  (`limpieza-facial-profunda` ya hecha, `tratamientos-postoperatorios` pendiente);
  `prefers-reduced-motion` (el sitio ya hace autoplay de video sin honrarlo — se mantiene
  la paridad; si se quiere honrar acá, es un add-on aparte).

## Nombres de archivo (SEO)

Base **`plasma-rico-en-plaquetas`** (no `prf-*`): "PRF" es técnico, sin volumen de
búsqueda; "plasma rico en plaquetas" es el término consolidado y describe lo que muestran
el video y la imagen. "fibrina" no va en el filename (no aporta búsqueda) pero **sí en el
`alt`**. Carpeta `public/assets/images/landings/prf-y-fibrina/`:

| Qué | Archivo | Origen |
|---|---|---|
| Video procedimiento | `plasma-rico-en-plaquetas-procedimiento.mp4` | usuario (4:5) |
| Poster del video | `plasma-rico-en-plaquetas-procedimiento.jpg` | extraído con ffmpeg (frame ~0) |
| Imagen resultado | `plasma-rico-en-plaquetas-resultado.jpg` | usuario (1000×1250) |
| WebP de la imagen | `plasma-rico-en-plaquetas-resultado.webp` | generado con sharp q78 |

## Cambios

### 1. `src/components/shared/BeforeAfterGrid/BeforeAfterGrid.jsx`

- Helper local `isVideo = (s) => typeof s === 'string' && s.toLowerCase().endsWith('.mp4')`.
- En cada slot, si el src (`item.before` / `item.after`) es video → renderizar:
  ```jsx
  <video
    className={styles.image}
    src={src}
    poster={src.replace(/\.mp4$/i, '.jpg')}
    aria-label={alt || undefined}
    autoPlay muted loop playsInline
    preload="metadata"
    onError={(e) => { e.target.style.display = 'none'; }}
  />
  ```
  (usa `src` directo, no `<source>`, para poder aplicar `onError` como en `<Picture>`.)
- Si no es video → `<Picture>` como ahora.
- `styles.image` ya es `width/height:100%; object-fit:cover; display:block` → sirve igual
  para `<video>`.
- Sin props nuevas: `beforeLabel` / `afterLabel` / `item.beforeAlt` / `item.afterAlt` ya
  existen (cambio dental 2026-08-26).
- Impacto en el componente compartido: nulo para el resto de callers — el branch de video
  solo se activa con un src `.mp4`, y hoy ningún caller (landings ni tratamientos) pasa
  uno.

### 2. `src/components/templates/LandingPage/LandingPage.jsx`

En el `<BeforeAfterGrid>` de la sección `beforeAfter` (hoy pasa `eyebrow`, `headline`,
`items`, `disclaimer`, `variant`), agregar:
```jsx
beforeLabel={beforeAfter.beforeLabel}
afterLabel={beforeAfter.afterLabel}
```
(`TreatmentDetailPage` ya los pasa; `LandingPage` no. `undefined` → defaults
`ANTES`/`DESPUÉS` del componente, así las otras 2 landings no cambian.)

### 3. `src/data/landingPages.js` → `prfYFibrina.beforeAfter`

```js
beforeAfter: {
  eyebrow: 'RESULTADOS',
  headline: 'EVOLUCIÓN VISIBLE, PROGRESIVA Y PERSONALIZADA',
  items: [{
    before: '/assets/images/landings/prf-y-fibrina/plasma-rico-en-plaquetas-procedimiento.mp4',
    after:  '/assets/images/landings/prf-y-fibrina/plasma-rico-en-plaquetas-resultado.jpg',
    beforeAlt: '<alt del video — finalizar al ver el archivo>',
    afterAlt:  '<alt de la imagen — finalizar al ver el archivo>'
  }],
  beforeLabel: 'PROCEDIMIENTO',
  afterLabel:  'RESULTADO',
  disclaimer: 'Contenido de referencia con fines informativos. Los resultados pueden variar según cada persona, tratamiento y condición individual.'
}
```

Borrador de `alt` (se ajusta al ver los archivos, como se hizo con `limpieza-dental`):
- Video: `"Aplicación del tratamiento de plasma rico en plaquetas y fibrina en Derma.M, West Palm Beach"`
- Imagen: `"Resultado visible en la piel del rostro tras el tratamiento de plasma rico en plaquetas y fibrina en Derma.M"`

### 4. Assets

- Usuario sube: `plasma-rico-en-plaquetas-procedimiento.mp4` (4:5) y
  `plasma-rico-en-plaquetas-resultado.jpg` (1000×1250) a la carpeta de la landing.
- Optimización del mp4: skill **`assets-optimizer`**
  (`node .agents/skills/assets-optimizer/scripts/optimize.js "<ruta al mp4>"`) — comprime
  con ffmpeg, target < 3 MB.
- Poster del video: extraer un frame con ffmpeg →
  `plasma-rico-en-plaquetas-procedimiento.jpg` (mismo basename que el mp4, así el
  `poster={src.replace('.mp4','.jpg')}` lo encuentra).
- WebP de la imagen: `sharp` q78 → `plasma-rico-en-plaquetas-resultado.webp`.

## Verificación

1. `/prf-y-fibrina` sección "RESULTADOS":
   - Izquierda: `<video>` reproduciéndose (autoplay, loop, muted, playsInline), label
     `PROCEDIMIENTO`, `aria-label` presente.
   - Derecha: imagen resultado sirviendo `.webp`, `naturalWidth` 1000, label `RESULTADO`.
   - Disclaimer nuevo (sin "cuando estén disponibles").
   - Consola sin errores; sin request 404 a `before-after-*.jpg`.
2. Regresión landing con imágenes: `/limpieza-facial-profunda` → labels `ANTES`/`DESPUÉS`,
   imágenes intactas, `alt` descriptivo (fix previo), sin `<video>`.
3. Regresión landing sin media: `/tratamientos-postoperatorios` → sigue con cajas negras
   / `ANTES`/`DESPUÉS`, sin cambio.
4. Regresión tratamiento: `/dental-estetico/blanqueamiento-dental` → `PROCEDIMIENTO` /
   `ANTES Y DESPUÉS` con imágenes, sin `<video>`, related card 426×426.
5. `npm run test:visual` → diff esperado en `prf-y-fibrina` (y los ya conocidos). El
   usuario decide `--update-snapshots`.

## Registro (post-aprobación)

- `PROGRESS.md` — entrada nueva.
- `DECISIONS.md` — `BeforeAfterGrid` ahora renderiza `<video>` para src `.mp4` (branch por
  extensión, no prop nueva); por qué no un componente `ResultShowcase` nuevo. Nombre de
  archivo `plasma-rico-en-plaquetas-*` en vez de `prf-*` y por qué (keyword vs sigla;
  "fibrina" al `alt`, no al filename).
- `MEMORY.md` — `BeforeAfterGrid` soporta video en un slot (autoplay/loop/muted,
  poster derivado del `.jpg` homónimo). `LandingPage` ahora pasa `beforeLabel`/`afterLabel`.
- Backlog `docs/SEO_AUDIT_2026.md` 7.2 — `prf-y-fibrina` ya tiene `alt` real (queda solo
  `tratamientos-postoperatorios`).
