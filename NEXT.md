# NEXT

Estado: Arquitectura de contenido del founder en curso — Ciclo 1 (Home `FounderSection` → primer
+ link a `/nosotros`) HECHO, commit `fd39a56`. Quedan Ciclo 2 y 3. Spec+plan en
`docs/superpowers/{specs,plans}/2026-08-28-founder-content-architecture*` · Track B GBP cerrado
(12 servicios + `Skin care clinic` + descr., pending review) · cruce sitio↔GBP no-dental saldado
(`DECISIONS.md:215-217`) — no re-abrir · árbol limpio · docs/ gitignored · dev server `:3000` +
un `vite --port=3003` levantado esta sesión (para `test:visual`) — apagar ambos al cerrar

## Próximo (en orden)
1. **Founder — Ciclo 2: `/nosotros`.** `src/data/aboutPage.js`: trim `founderSpotlight.body`/
   `.secondaryBody` a copy-puente + `hero.localTag: 'Medical Spa · West Palm Beach'`.
   `AboutPage.jsx`: pasar `localTag` a `<PageHero>`. Ver plan Task 2. Cierra con `test:visual`
   (no está en baseline) + cross-check `MEDICAL_COMPLIANCE.md`. Esto además cubre el ítem viejo
   "coherencia del diferenciador relacional" en `/nosotros`.
2. **Founder — Ciclo 3: `/nancy-nieto`.** `founderBioPage` standalone (sin referenciar
   `aboutPage.founderSpotlight`) + secciones Historia/Formación y DERMA.M & Academy + cita larga.
   `FounderBioPage.jsx` +1-2 `<section>`. Actualizar `MEMORY.md` "Founder bio page". Ver plan Task 3.
3. **Track A — ciclos de código** (cada uno brainstorm→aprobación, ver findings doc §S5):
   naming PRF canónico en `landingPages.js`/`treatmentPages.js`/schema/`llms.txt`/metas;
   ciudad en el `<h1>` de las 3 landings; FAQ sembradas desde las PAA reales; "deep cleansing
   facial" como término EN en `/limpieza-facial-profunda`; página "mejores med spa de WPB".
4. **Estrategia PRF (Tema 4, must-win)** — ya informada por el research: apropiarse de
   "Plasma Rico en Plaquetas y Fibrina (PRF)", demand-gen vía ads (término real a nivel nacional,
   0 competencia local). Content strategy con brainstorming.
5. **Cuña postop demand-gen** — GBP posts + FAQ + pieza "por qué el postoperatorio importa"
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
