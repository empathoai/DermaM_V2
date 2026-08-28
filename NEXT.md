# NEXT

Estado: HEAD esperado `d2afee9`, pusheado, árbol limpio, sin servers levantados.
Arquitectura de contenido del founder — Ciclo 1 (Home, `fd39a56`), Ciclo 2 (`/nosotros`
reestructurado, `5223f2d` + `c1cf90a`) y Ciclo 2b (`/nosotros` podado, `ad2be76` + `d2afee9`)
HECHOS y pusheados. **Queda el Ciclo 3.** Spec+plan (en disco, `docs/` gitignored):
`docs/superpowers/specs/2026-08-28-founder-content-architecture-design.md` (leer "Cycle 2b re-scope")
y `docs/superpowers/plans/2026-08-28-founder-content-architecture.md` (**Task 3 = copy verbatim lista**).
Track B GBP cerrado (12 servicios + `Skin care clinic` + descr., pending review en Google) ·
cruce sitio↔GBP no-dental saldado (`DECISIONS.md:215-217`) — no re-abrir · `docs/` gitignored.

## Cómo retomar (Ciclo 3, `/nancy-nieto`)
1. `npm run dev` (`:3000`) → abrir el sitio en el browser pane.
2. Para `test:visual`: en otra terminal `npx vite --port=3003 --host=0.0.0.0`, luego `npx playwright test`.
3. Abrir el **plan Task 3** — trae el objeto `founderBioPage` standalone completo (copy verbatim
   del mensaje de la clínica del 2026-08-28) + los pasos de `FounderBioPage.jsx`/`.module.css`.
   NO hace falta re-brainstormear: el diseño está aprobado. Ejecutar Task 3 tal cual → commit →
   ritual de docs → push.
4. Al terminar: quitar de `MEMORY.md` la línea "reuses `aboutPage.founderSpotlight`… by reference"
   (Task 3 step 4) y sacar el puente inline `founderPhilosophy` de `aboutPage.js`.

## Próximo (en orden)
1. **Founder — Ciclo 3: `/nancy-nieto`.** `founderBioPage` standalone (hoy tiene el puente
   temporal `founderPhilosophy` inline con la copy `ESCUCHAR ANTES DE RECOMENDAR` — reescribir
   sin referencias a `aboutPage.*`). Absorbe: visión, framing `ESCUCHAR ANTES DE RECOMENDAR`,
   cita corta (se descarta a favor de la larga), + secciones Historia/Formación y DERMA.M &
   Academy (misión/visión completa: el sueño de Nancy, oportunidades para mujeres profesionales,
   expansión). `FounderBioPage.jsx` +1-2 `<section>`. Actualizar `MEMORY.md` "Founder bio page".
   Texto real: mensaje de la clínica del 2026-08-28 (ver plan Task 3, copy verbatim). Cierra con
   `test:visual` + cross-check `MEDICAL_COMPLIANCE.md` ("seguros"/"resultados reales" solo como
   filosofía de Nancy en 1ª persona).
2. **Track A — ciclos de código** (cada uno brainstorm→aprobación, ver findings doc §S5):
   naming PRF canónico en `landingPages.js`/`treatmentPages.js`/schema/`llms.txt`/metas;
   ciudad en el `<h1>` de las 3 landings; FAQ sembradas desde las PAA reales; "deep cleansing
   facial" como término EN en `/limpieza-facial-profunda`; página "mejores med spa de WPB".
3. **Estrategia PRF (Tema 4, must-win)** — ya informada por el research: apropiarse de
   "Plasma Rico en Plaquetas y Fibrina (PRF)", demand-gen vía ads (término real a nivel nacional,
   0 competencia local). Content strategy con brainstorming.
4. **Cuña postop demand-gen** — GBP posts + FAQ + pieza "por qué el postoperatorio importa"
   (pocos proveedores, cirujanos no lo recomiendan). Audiencia real existente.

## Bloqueado (espera al usuario / terceros)
- **Yelp:** reclamarlo lo hace Nancy (dueña) — el listicle "TOP 10 BEST Medical Spas in WPB"
  domina "best med spa WPB". Rol del usuario: pasarle a Nancy el NAP + descripción optimizados.
- Tema 6 intake: **velocidad de captación de reseñas** (cadencia de respuesta ya OK, 85%).
- Tema 7 / GMBspy sobre Élévatione / Beverly Hills / Pure Skin → secundarias de competencia
  (antes de tocar más categorías del GBP — Pedro: no churnear categorías).
- C2: sign-off de compliance de la clínica por dato cuantitativo + enlace de autoridad.
- **Dental en el sitio:** `/dental-estetico` hub + blanqueamiento + limpieza dental están en vivo.
  Mismo riesgo regulatorio que motivó sacar dental del GBP — evaluar si las páginas deben salir/
  reencuadrarse. Ciclo aparte con brainstorm; decisión del usuario. No tocar sin pedido explícito.
- Deploy: fecha y quién deploya (Hostinger/Apache + DNS) — condiciona verificación GSC por Dominio.
  Al deployar: reemplazar `public/.htaccess` con el bloque de `docs/seo-setrategies/REDIRECT-MAP-VALIDATION-2026.md`
  §8 (reordenado + 27 reglas nuevas), luego verificar con el script `curl -I` del mismo doc.
- Doc-hygiene: `docs/seo-setrategies/INTAKE.md:56` dice "deploy en Vercel" — es Hostinger/Apache, corregir.
- Nota operativa para la clínica: servicio postop tiene punto débil documentado (ayuda con
  la faja + protección ocular en luz LED) — de las 2 reseñas negativas.

## Infra resuelta (no rehacer)
graphify fuera del workflow · engram off · GSC prefijo creado sin verificar
(`public/google2f0ede1a410e8a22.html`) · GA4 `G-9272VHFT03` en index.html · Apify token en
`.env.local` raíz (`APIFY_API_KEY`, formato `KEY: valor`)

## Contexto por área — grep, no full-read
PROGRESS.md = log · DECISIONS.md = por qué · docs/seo-setrategies/INTAKE.md = proyecto SEO local ·
docs/seo-setrategies/COMPETENCIA-SERVICIOS-2026.md = research competencia/servicios + reseñas
