# Auditoría visual — páginas legales

**Fecha:** 3 de julio de 2026`r`n**Alcance:** desktop 1440×900 y mobile 390×844`r`n**Rutas:** privacidad, términos, reservas/cancelaciones, descargo de tratamientos, accesibilidad, aviso de prácticas de privacidad y centro legal.

## Resultado

**Estado final: aprobado con correcciones implementadas.**

La revisión detectó inconsistencias compartidas en el layout legal y una separación superior incorrecta en cuatro páginas. Los ajustes se aplicaron en los componentes y páginas del proyecto, sin cambiar el contenido legal.

## Evidencia

- Capturas originales desktop y mobile: [screenshots/before](./legal-visual-audit-2026/screenshots/before/)
- Hoja comparativa desktop/mobile: [contact-sheet-current.png](./legal-visual-audit-2026/screenshots/before/contact-sheet-current.png)
- Hoja comparativa mobile: [contact-sheet-mobile.png](./legal-visual-audit-2026/screenshots/before/contact-sheet-mobile.png)

> La recaptura final automatizada quedó limitada por un timeout del navegador integrado después de aplicar los cambios. La compilación y la suite visual completa sí finalizaron correctamente.

## Hallazgos y correcciones

| Prioridad | Hallazgo | Corrección | Estado |
|---|---|---|---|
| Alta | Espacio vacío excesivo entre navegación y encabezado en reservas, descargo, accesibilidad y aviso de privacidad | Eliminado el `pt-24` duplicado de sus contenedores `<main>` | Corregido |
| Alta | Texto legal principal de 14 px, insuficiente para lectura prolongada en mobile | Elevado a 16 px con interlineado relajado | Corregido |
| Alta | Etiquetas, metadatos e índice usaban gris de contraste insuficiente | Sustituido por `#666463` sobre fondos claros | Corregido |
| Media | Páginas extensas no tenían navegación por secciones en mobile | Añadido índice nativo desplegable y navegable por teclado | Corregido |
| Media | Líneas de lectura demasiado largas en desktop | Contenido limitado a `72ch` | Corregido |
| Media | Enlaces legales e índice sin foco suficientemente visible | Añadidos estados `focus-visible` AA | Corregido |
| Media | Saltos a anclas podían quedar ocultos bajo la navegación | Añadido `scroll-mt-32` | Corregido |
| Baja | Títulos largos podían comprimir o desbordar en tamaños intermedios | Tipografía fluida con `clamp()` y corte seguro | Corregido |

## Validación

- `npm run build`: **aprobado**
- `npm run test:visual`: **16/16 pruebas aprobadas**
- Breakpoints auditados: **1440×900** y **390×844**
- Navegación del índice: enlaces semánticos, foco visible y orden natural de teclado
- Copy médico/legal: no se modificó durante esta auditoría visual

## Archivos ajustados

- `src/components/layout/LegalPageLayout.jsx`
- `src/components/layout/LegalContent.jsx`
- `src/pages/BookingPolicy.jsx`
- `src/pages/TreatmentDisclaimer.jsx`
- `src/pages/Accessibility.jsx`
- `src/pages/NoticePrivacyPractices.jsx`

