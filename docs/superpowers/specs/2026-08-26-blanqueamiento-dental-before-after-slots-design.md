# Diseño — Slots antes/después de `blanqueamiento-dental` (procedimiento + secuencia)

Fecha: 2026-08-26
Estado: aprobado (pendiente review del spec por el usuario)

## Problema

La página `/dental-estetico/blanqueamiento-dental` muestra el bloque `BeforeAfterGrid` con
dos cajas negras: nunca hubo imágenes antes/después en `public/assets/images/treatments/`.
La clienta aportó solo dos fotos:

1. **Secuencia real** — una tira vertical de 3 paneles del mismo paciente (dientes amarillos
   con barrera azul → proceso → dientes blancos). Es un antes/después legítimo compuesto en
   un solo archivo. El usuario la reencuadró a 1000×1250 (4:5).
2. **Procedimiento en cabina** — paciente reclinada con lámpara LED azul + profesional.
   Sin contenido antes/después. Reencuadrada a 1000×1250 (4:5).

Decisión de layout del usuario (fijada): **slot izquierdo = procedimiento**, **slot
derecho = secuencia antes/después**. Los labels hardcodeados `ANTES` / `DESPUÉS` del
componente quedan incorrectos para este contenido.

## Alcance

- **Solo `blanqueamiento-dental`.** Ningún otro tratamiento.
- Fuera de alcance (registrado como backlog):
  - Ocultar la sección `BeforeAfterGrid` en páginas de tratamiento sin imágenes reales
    (`limpieza-dental` y ~18 más siguen con cajas negras).
  - Bug `categoryFolder` en `TreatmentDetailPage.jsx` (no mapea `dentalEstetico` →
    `dental-estetico`). El override de este cambio lo saltea; el bug permanece para el
    resto de tratamientos dentales que usen la convención de nombres.
  - Corregir el texto del disclaimer de las páginas de tratamiento (parkeado en una
    conversación previa: "corrige el disclaimer" → "espera").
  - Backlog SEO 7.2 (alt `"Before"`/`"After"` hardcodeado) para las landings — este
    cambio solo lo resuelve para el override dental, no globalmente.

## Enfoque elegido

**A — Props de label en el componente compartido + override de datos por tratamiento.**
Mínimo, retrocompatible, un solo tratamiento afectado. Descartados: labels por item
(YAGNI, siempre hay 1 item), sistema de labels global (sobre-ingeniería, ninguna landing
lo necesita).

## Cambios

### 1. `src/components/shared/BeforeAfterGrid/BeforeAfterGrid.jsx`

- Firma: agregar props `beforeLabel = 'ANTES'`, `afterLabel = 'DESPUÉS'`.
- Reemplazar el texto literal `ANTES` del primer `imageLabel` por `{beforeLabel}` y
  `DESPUÉS` del segundo por `{afterLabel}`.
- `alt`: cambiar `alt="Before"` → `alt={item.beforeAlt || 'Before'}` y
  `alt="After"` → `alt={item.afterAlt || 'After'}`.
- Sin otros cambios. Las landings no pasan las props nuevas ni `beforeAlt`/`afterAlt` →
  comportamiento idéntico al actual (labels `ANTES`/`DESPUÉS`, alt `Before`/`After`).

### 2. `src/components/templates/TreatmentDetailPage/TreatmentDetailPage.jsx`

- Extraer `beforeAfter` de `data` (junto al resto del destructuring de `data`).
- `beforeAfterItems`:
  ```js
  const beforeAfterItems = beforeAfter?.items ?? [
    {
      before: `/assets/images/treatments/${categoryFolder}/${slug}/before-after-1.jpg`,
      after: `/assets/images/treatments/${categoryFolder}/${slug}/before-after-2.jpg`
    }
  ];
  ```
  (La rama `??` conserva exactamente el comportamiento actual para todo tratamiento sin
  override, `categoryFolder` incluido y su bug.)
- En el JSX de `<BeforeAfterGrid ...>` (sección `beforeAfterSection`):
  - `disclaimer={beforeAfter?.disclaimer ?? beforeAfterDisclaimer}`
  - `beforeLabel={beforeAfter?.beforeLabel}`
  - `afterLabel={beforeAfter?.afterLabel}`
  (props `undefined` → el componente aplica sus defaults `ANTES`/`DESPUÉS`.)
- No se toca `beforeAfterDisclaimer`, ni el eyebrow/headline hardcodeados, ni
  `categoryFolder`.

### 3. `src/data/treatmentPages.js`

- En `customDetails['blanqueamiento-dental']`, agregar la clave:
  ```js
  beforeAfter: {
    items: [{
      before: '/assets/images/treatments/dental-estetico/blanqueamiento-dental/blanqueamiento-dental-procedimiento.jpg',
      after:  '/assets/images/treatments/dental-estetico/blanqueamiento-dental/blanqueamiento-dental-antes-despues.jpg',
      beforeAlt: 'Blanqueamiento dental estético en cabina en Derma.M, West Palm Beach',
      afterAlt:  'Antes y después de blanqueamiento dental estético en Derma.M'
    }],
    beforeLabel: 'PROCEDIMIENTO',
    afterLabel:  'ANTES Y DESPUÉS'
  }
  ```
- En el ensamblado del objeto compilado (`compiled[catKey][slug] = { ... }`, junto a
  `protocolImage`), agregar: `beforeAfter: custom.beforeAfter || null,`
  (Los `customDetails` se leen campo por campo; una clave nueva no fluye sola.)

### 4. Imágenes

Ya en disco, sin acción:
- `.../blanqueamiento-dental/blanqueamiento-dental-procedimiento.jpg` (1000×1250) + `.webp` (q78, 71 KB)
- `.../blanqueamiento-dental/blanqueamiento-dental-antes-despues.jpg` (1000×1250) + `.webp` (q78, 50 KB)

`Picture.jsx` deriva el `.webp` del `.jpg` automáticamente. Regla ya registrada
(`DECISIONS.md` 2026-08-26): jpg agregado o reemplazado ⇒ regenerar webp.

## Verificación

1. **Objetivo** — dev server, `/dental-estetico/blanqueamiento-dental`, scroll al bloque:
   - Izquierda: foto de procedimiento, label `PROCEDIMIENTO`.
   - Derecha: compuesto antes/después, label `ANTES Y DESPUÉS`.
   - `currentSrc` de ambos `<img>` = `.webp`; `naturalWidth` = 1000.
   - `alt` = los textos del override.
   - Sin errores de consola.
2. **Regresión landings** — `/limpieza-facial-profunda`: labels `ANTES`/`DESPUÉS`
   intactos, imágenes intactas, `alt` = `Before`/`After` (sin cambios).
3. **Regresión tratamiento sin override** — una página facial cualquiera: bloque
   antes/después se comporta igual que antes (rutas generadas / cajas negras).
4. `npm run test:visual` — diffs esperados en `blanqueamiento-dental` (nuevo contenido) y
   `limpieza-facial-profunda` (ya conocido de la tarea previa). El usuario decide
   `--update-snapshots`.

## Registro (post-aprobación)

- `PROGRESS.md` — entrada nueva.
- `DECISIONS.md` — enfoque A (props de label retrocompatibles + override de datos) y por
  qué no labels-por-item ni sistema global.
- `MEMORY.md` — `BeforeAfterGrid` ahora acepta `beforeLabel`/`afterLabel` y `item.beforeAlt`/
  `item.afterAlt`; `treatmentPages.js` soporta override `beforeAfter` por tratamiento.
- Backlog (`docs/SEO_AUDIT_2026.md` u otro doc adecuado):
  - Ocultar `BeforeAfterGrid` en tratamientos sin imágenes reales.
  - Bug `categoryFolder` dental en `TreatmentDetailPage.jsx`.
