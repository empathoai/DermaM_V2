# 2026-08-27 — FAQ bilingüe en /contacto + mask del hero flaky

Dos arreglos chicos e independientes para no arrastrar tests en rojo tras 8.9/8.10.
Un commit por cambio.

## Cambio 1 — FAQ "¿Atienden en español e inglés?" en /contacto

### Problema
`tests/faq-consistency.spec.js` espera 5 FAQ en `/contacto`; `contactPage.contactFaq.items`
tiene 4 desde `6a17f67` ("Remove Miami location"). Drift preexistente, sin relación con 8.9/8.10.

### Solución
Agregar un 5º item a `contactFaq.items` en `src/data/contactPage.js`. Eso alinea el test
(cuenta 5), suma un nodo al `FAQPage` JSON-LD y una fila al acordeón accesible. Cero cambio
de componente/template — el conteo de items ya alimenta schema + `button[aria-expanded]`.

### Contenido (verificable, sin inventar datos)
- **Pregunta:** `¿Atienden en español e inglés?`
- **Respuesta:** `Sí. Nuestro equipo te atiende en español e inglés, tanto en la clínica en West Palm Beach como por WhatsApp y teléfono.`

### Por qué esta pregunta
- **SEO local / AEO:** responde una consulta real del mercado bilingüe de West Palm Beach
  ("…que hable español" / "…in English"), citable textual por motores de respuesta.
- **No se solapa** con las 4 existentes (cita previa, WhatsApp, ubicación, qué servicios).
- **Compliance (`docs/MEDICAL_COMPLIANCE.md`):** sin palabras prohibidas, sin promesa de
  resultados, sin diagnóstico. Refuerza NAP (ciudad + canales).
- Datos ya presentes en el sitio: ciudad (`contactFaq` item ubicación), canales
  WhatsApp/teléfono (`+1 561 253 5384`, ya citado).

### Ubicación en la lista
Al final de `items` (5º), después de "¿Qué servicios puedo consultar?".

### Verificación
- `npx playwright test tests/faq-consistency.spec.js` → verde (5/5 rutas).
- `/contacto` en dev: acordeón con 5 preguntas, la nueva abre/cierra, `FAQPage` JSON-LD
  con 5 `mainEntity`, sin errores de consola.

## Cambio 2 — mask del video en el test `Home Page - Hero Viewport`

### Problema
`tests/visual.spec.js:9` captura el viewport completo del home. El fondo del hero es un
`<video>` (`HeroMedia.jsx`); cada corrida agarra un frame distinto → diff de pixeles solo
en esa zona, ~1 de cada 2 corridas. Texto, logo, menú, botones y barra superior: idénticos.

### Solución
Pasar `mask` a esa única aserción `toHaveScreenshot`, apuntando a la media del hero:

```js
await expect(page).toHaveScreenshot('home-hero.png', {
  mask: [page.locator('section').first().locator('video, img').first()],
});
```

Playwright pinta un recuadro sólido sobre esa zona en la captura de referencia y en la
nueva antes de comparar → esos pixeles no pueden generar diff. El resto del above-the-fold
se sigue comparando igual.

### Impacto / cobertura perdida
- Se deja de vigilar visualmente el frame del video del hero. Riesgo bajo: es un asset
  estático que casi no se toca, y `HeroMedia.jsx:25` ya tiene `poster` (imagen) + la rama
  `<img>` cae a `og-default.jpg` en `onError` → si el video se rompe, se ve imagen igual.
- Un cambio real del video del hero sería pedido explícito y visible al instante en el navegador.
- A cambio: el test deja de dar falsos positivos y vuelve a ser confiable.

### Alternativa descartada
Subir `maxDiffPixelRatio` en la aserción → afloja la tolerancia de toda la pantalla,
podría tragarse un botón desplazado o un cambio de color del titular. El `mask` es quirúrgico.

### Verificación
- `npx playwright test tests/visual.spec.js` 2 corridas seguidas → `Home Page - Hero Viewport`
  verde en ambas (desktop-chrome + mobile-safari).
- Confirmar que las otras 19 aserciones siguen verdes (sin tocar sus baselines).

## Fuera de alcance
- No se migra el slug `/prf-y-fibrina`.
- No se tocan otros baselines visuales (ya reconciliados en `231d7a8`).
- No se añaden más FAQ ni se reordenan las existentes.
