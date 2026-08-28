# Spec — WarningBox: título por defecto en las 25 páginas de tratamiento

Fecha: 2026-08-27
Estado: aprobado (brainstorming), pendiente de plan de implementación

## Problema

`src/components/shared/WarningBox/WarningBox.jsx:7` define `title = 'CUÁNDO CONSULTAR ANTES'`
como valor por defecto de prop. El único consumidor,
`src/components/templates/TreatmentDetailPage/TreatmentDetailPage.jsx:240`
(`<WarningBox variant="warm" items={safetyPrecautions} />`), no pasa `title`, por lo que
ese texto se renderiza idéntico en las **25 páginas de tratamiento** (sección 9,
`warningSection`). El usuario marcó "ANTES" como copy seco y poco informativo.

Ninguna landing ni otra plantilla usa `WarningBox`.

## Cambio

Un solo archivo: `src/components/shared/WarningBox/WarningBox.jsx`. Dos defaults de prop.

| Prop | Antes | Después |
|---|---|---|
| `title` (L7) | `'CUÁNDO CONSULTAR ANTES'` | `'PRECAUCIONES Y CONTRAINDICACIONES'` |
| `eyebrow` (L6) | `'PRECAUCIONES DE SEGURIDAD'` | `'ANTES DE RESERVAR'` |

Nada más se toca: ni el `body`, ni `items`, ni el CSS, ni el consumidor, ni los datos.

### Por qué también el `eyebrow`

Es consecuencia directa del cambio pedido, no scope creep. El `eyebrow` se renderiza
inmediatamente encima del `title` (apilado en mobile <1024px, con un `divider` de por medio;
en columnas lado a lado en desktop ≥1024px — `metaCol` 25% / `contentCol` 70%). Dejar
`'PRECAUCIONES DE SEGURIDAD'` sobre `'PRECAUCIONES Y CONTRAINDICACIONES'` repite la palabra
"PRECAUCIONES" en dos líneas contiguas. `'ANTES DE RESERVAR'` elimina el choque y reancla la
intención de "consultar antes" (que sale del título) al CTA de reserva de la página.

## Compliance

"Precauciones" / "contraindicaciones" es lenguaje de advertencia estándar; no figura en la
lista de términos prohibidos de `docs/MEDICAL_COMPLIANCE.md`. El cambio refuerza el
posicionamiento health-first (más informativo y honesto que "cuándo consultar antes").

## Riesgo visual

Esperado: nulo. `tests/visual.spec.js:114` solo snapshotea `whatIsSection` de hidrofacial
(sección 4). `WarningBox` vive en `warningSection` (sección 9), que no está capturada en
ningún baseline. El cambio es texto dentro de cajas de tamaño fijo (mismo layout, mismos
estilos).

## Verificación (definition of done)

1. `npm run test:visual` → **22/22 sin diffs** (arrancar `vite --port=3003` antes).
2. DOM en `/faciales/hidrofacial`, `/corporales/lipo-360`, `/laser-y-luz/depilacion-laser`:
   - `<h2>` de `warningSection` = "PRECAUCIONES Y CONTRAINDICACIONES".
   - eyebrow = "ANTES DE RESERVAR".
   - sin overflow horizontal en desktop (~1532px) ni mobile (375px).
   - 0 errores de consola.
3. `grep -rn "CUÁNDO CONSULTAR ANTES" src/` → 0 resultados.

## Registro al cerrar

- `PROGRESS.md` — entrada nueva arriba.
- `MEMORY.md` — actualizar el ítem de backlog de `WarningBox.jsx` (marcarlo hecho).
- `DECISIONS.md` — entrada breve: por qué se cambió también el `eyebrow` (choque de "PRECAUCIONES").
