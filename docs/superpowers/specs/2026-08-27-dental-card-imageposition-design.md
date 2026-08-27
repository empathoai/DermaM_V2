# Diseño — Encuadre de cards dentales (`imagePosition`) en hub y "Te puede interesar"

Fecha: 2026-08-27
Estado: aprobado (pendiente review del spec por el usuario)

## Problema

Los heros de `blanqueamiento-dental` y `limpieza-dental` (landscape 1672×941) tienen el
sujeto en el ~55% derecho del cuadro y ~40% de pared oscura vacía a la izquierda. Cuando
se muestran como card cuadrada (`TreatmentCard`, `aspect-ratio: 1/1`, `object-fit: cover`,
`object-position: center`), el recorte centrado corta a la profesional y deja demasiada
pared. Pasa en dos contextos: el hub `/dental-estetico` (cards de tratamientos destacados)
y el bloque "Te puede interesar" de las páginas de tratamiento dental.

## Mecanismo existente (no se crea nada nuevo)

- `MediaBlock.jsx` acepta prop `imagePosition` → `style={{ objectPosition: imagePosition }}`
  sobre el `<img>`. Default CSS: `object-position: center center`.
- `TreatmentCard.jsx` acepta `imagePosition` y lo pasa a `MediaBlock`.
- `TreatmentGrid.jsx` hace `<TreatmentCard {...item} />` → cualquier `imagePosition` en el
  item llega solo.
- `CategoryPage.jsx` ya lee `t.imagePosition` de `categoryPages.js` `featuredTreatments`
  (lo usan 8 tratamientos de corporales + 2 más, valores `NN% center`).
- `RelatedTreatments.jsx` arma sus items con `items.map(t => ({...}))` y **no** incluye
  `imagePosition` → "Te puede interesar" siempre usa `center`.
- `treatmentPages.js` `getBaseTreatment()` devuelve un shape fijo desde la entrada de
  `categoryPages.js`; el array `related` se arma con ese shape y tampoco incluye
  `imagePosition`.

## Enfoque elegido — A: fuente única, cableada en los 2 contextos

Un solo valor `imagePosition` por tratamiento en `categoryPages.js`, consumido tanto por
el hub (ya funciona) como por "Te puede interesar" (hay que cablear el paso).

Descartados:
- **B — solo dental, lookup hardcodeado** `{slug: posición}` en `RelatedTreatments` o
  `treatmentPages`: feo, no escala, deja el hub dental inconsistente con su propio
  "Te puede interesar".
- **C — CSS por categoría**: `TreatmentCard` no emite clase de categoría y saltea el
  mecanismo `imagePosition` que ya existe.

## Cambios

### 1. `src/data/categoryPages.js` — SIN CAMBIO

Descubierto al implementar: `dentalEstetico.featuredTreatments.treatments` **ya tiene**
`imagePosition: '74% center'` en `blanqueamiento-dental` (línea 853) y `limpieza-dental`
(línea 868). El hub `/dental-estetico` ya lo aplica. Se conserva `74% center` como fuente
única — no se toca el valor (cambiarlo a 70% movería también el hub por ~4%).

### 2. `src/data/treatmentPages.js`

- `getBaseTreatment()` — en el `return` del branch `if (found)`, agregar:
  `imagePosition: found.imagePosition` (queda `undefined` si la entrada no lo define).
  El fallback puro (tratamiento no encontrado en `categoryPages`) no lo agrega.
- En el `.map` que arma `related` (dentro de `compileTreatments`), agregar al objeto:
  `imagePosition: rBase.imagePosition`.

### 3. `src/components/shared/RelatedTreatments/RelatedTreatments.jsx`

En `items.map(t => ({ ... }))`, agregar: `imagePosition: t.imagePosition`.

## Efecto colateral (esperado, a validar)

Con el paso cableado, las cards de "Te puede interesar" de **corporales** empiezan a
honrar el `imagePosition` que sus entradas ya tienen en `categoryPages.js` (hoy lo
ignoran, aunque el hub de corporales ya lo aplica). Es un arreglo de consistencia, no un
bug — pero hay que verificar que no genere recortes raros.

Faciales y capilar (sin `imagePosition` en sus entradas) siguen en `center` → sin cambio.

## Verificación

1. `/dental-estetico/blanqueamiento-dental` y `/dental-estetico/limpieza-dental` →
   sección "Te puede interesar": la card muestra `object-position: 70% center`, sujeto
   centrado, menos pared. Screenshot.
2. `/dental-estetico` (hub) → las 2 cards dentales con el mismo encuadre `70% center`.
3. Regresión corporales: `/corporales/lipo-360` (u otro) → "Te puede interesar" con las
   cards honrando su `imagePosition`, sin recortes raros. Screenshot.
4. Regresión faciales: `/faciales/hidrofacial` → "Te puede interesar" sigue en `center`,
   sin cambio visual. 3 cards 426×426 (fix previo intacto).
5. Consola sin errores en todas.

## Registro (post-aprobación)

- `PROGRESS.md` — entrada nueva.
- `DECISIONS.md` — enfoque A (fuente única en `categoryPages.js`, cableado a
  `RelatedTreatments` vía `getBaseTreatment` + `related`), y por qué no el lookup
  hardcodeado ni CSS por categoría. Nota del efecto colateral en corporales.
- `MEMORY.md` — `imagePosition` de `categoryPages.js` ahora también llega a las cards de
  "Te puede interesar" (antes solo al hub vía `CategoryPage`).
