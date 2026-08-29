# NEXT

Estado: HEAD esperado `32ecb14` (+ este commit de NEXT.md encima), pusheado, árbol limpio, sin servers levantados.
Sesión 2026-08-28: Track A #1 (`91bed37`), #2 (`4a4603e`), #3 (`cb53307`) + follow-ups
cerrados y pusheados. **Ítem #4 CERRADO** — FAQ PAA: PRF (#3), `/limpieza-facial-profunda`
(`b7a6452`, 6→9), `/tratamientos-postoperatorios` (`7d6126d`, 5→9).
**Ítem #5 CERRADO** como estrategia registrada — spec `docs/superpowers/specs/2026-08-28-prf-content-strategy-design.md`
(doc interno, sin cambio on-site; `docs/` gitignored → solo se commitearon PROGRESS/DECISIONS/NEXT).
La spec §8 lista 4 ciclos hijo; el #1 (enriquecer el landing PRF con secciones comparativas + tabla) es candidato de próximo.
**Plan founder-content-architecture CERRADO** — Ciclo 1 (Home, `fd39a56`), Ciclo 2 (`5223f2d`+`c1cf90a`),
Ciclo 2b (`ad2be76`+`d2afee9`) y Ciclo 3 (`/nosotros/nancy-nieto` standalone, `45e7a5c`) hechos y pusheados.
`founderBioPage` ya es objeto standalone (sin refs a `aboutPage.*`); `/nosotros` = página del equipo;
`/nancy-nieto` = persona completa (Historia / Filosofía + cita larga / DERMA.M & Academy). Spec+plan en disco
(`docs/` gitignored): `docs/superpowers/{specs,plans}/2026-08-28-founder-content-architecture*`.
Track B GBP cerrado · cruce sitio↔GBP no-dental saldado (`DECISIONS.md`) — no re-abrir.

## Cómo retomar
1. `npm run dev` (`:3000`) → abrir el sitio en el browser pane.
2. Para `test:visual`: en otra terminal `npx vite --port=3003 --host=0.0.0.0`, luego `npx playwright test`.
3. Elegir el próximo ítem de la cola. Cada uno: brainstorm (`superpowers:brainstorming`) → aprobación
   del usuario → un cambio por ciclo → `test:visual` + cross-check `MEDICAL_COMPLIANCE.md` + WCAG AA →
   commit → ritual de docs → push confirmado.

## Lógica de esfuerzo (t-shirt sizing)

Cada ítem de la cola lleva size. **Se ataca en orden de size ascendente** (XS→XL) salvo que
el usuario diga otra cosa. No re-preguntar "¿por dónde empezamos?": el próximo ítem es el de
menor size no bloqueado. Igual cada ciclo mantiene su gate: brainstorm → aprobación → 1 cambio.
Escala: **XS** copy 1 sitio, 0 decisiones · **S** 1–3 archivos mecánico, quizá re-baseline visual ·
**M** multi-archivo con criterio + posible archivo protegido/schema · **L** multi-fase o necesita
capturar data antes · **XL** página/feature nueva entera (ruta+template+copy+schema+compliance+baseline).

## Próximo (en orden de size — Track A, cada uno brainstorm→aprobación, findings doc §S5)
1. ~~**[XS–S]** "deep cleansing facial" como término EN en `/limpieza-facial-profunda`~~ ✅ HECHO
   (Track A #1 commit `91bed37`). 3 capas: meta description ×3 + `Service.alternateName` +
   6º ítem FAQ español + `llms.txt` línea 38. `<title>` intacto. Spec:
   `docs/superpowers/specs/2026-08-28-deep-cleansing-facial-en-term-design.md`.
2. ~~**[S]** ciudad en el `<h1>` de las 3 landings~~ ✅ HECHO (Track A #2 commit `4a4603e`).
   Re-encuadrado: la ciudad ya estaba en el `<h1>` (localTag = `<span>` hijo del `<h1>`). Se hizo
   consistencia NAP: sub-tag de hero → `Medical Spa · West Palm Beach, FL` en fuente única
   `src/data/siteMeta.js` (`HERO_LOCAL_TAG`), ~10 call sites importan. §S5.2 del findings doc
   quedó obsoleto. Spec: `docs/superpowers/specs/2026-08-28-hero-localtag-city-state-consistency-design.md`.
3. ~~**[M]** naming PRF canónico + FAQ del PRF landing~~ ✅ HECHO (Track A #3 commit `cb53307`).
   "(PRF)" en title/og/twitter + H1 + `Service.name` (+`alternateName`) + `BreadcrumbList` +
   `knowsAbout` + `llms.txt`; nav/footer/cards con nombre ES completo limpio. FAQ del PRF landing
   reescrita 7→8 (voz de búsqueda, Q→A autocontenidas, +fillers/duración/efectos secundarios).
   `faq-consistency` count 7→8. Spec: `docs/superpowers/specs/2026-08-28-prf-canonical-naming-design.md`.
4. ~~**[M/L]** FAQ sembradas desde PAA reales~~ ✅ HECHO — PRF (#3), `/limpieza-facial-profunda`
   (`b7a6452`, 6→9; spec/plan `…limpieza-facial-faq-paa*`), `/tratamientos-postoperatorios`
   (`7d6126d`, 5→9; spec/plan `…postoperatorios-faq-paa*`). Método: sin Apify, seeds §189 +
   pase `WebSearch` ES, append-only, sin ítem de precio, count en `faq-consistency.spec.js`.
   Ruling de compliance (`DECISIONS.md` 2026-08-28): "prevenir la fibrosis" OK, "cura/trata" no.
5. ~~**[L]** Estrategia PRF (Tema 4, must-win)~~ ✅ HECHO como estrategia registrada — spec
   `docs/superpowers/specs/2026-08-28-prf-content-strategy-design.md`. Consolida research §1a/§S1/§S5/§S7.
   Deja 4 ciclos hijo (§8 de la spec): **5a** enriquecer landing PRF (secciones comparativas + tabla),
   **5b** expandir FAQ del landing con cluster comparativo, **5c** (condicional) página EN,
   **5d** (condicional) guía pilar. Cada uno brainstorm→aprobación→1 cambio.
5a. **[M/L] ← PRÓXIMO** Enriquecer `/prf-y-fibrina`: secciones vs PRP / vs fillers / vs PDGF·under-eye /
   duración + tabla comparativa. Data en `landingPages.js`; copy derivada de copy vetada; compliance
   vs `MEDICAL_COMPLIANCE.md`; posible re-baseline del snapshot del landing.
6. **[L] ← PRÓXIMO (empatado con #5a)** Cuña postop demand-gen — GBP posts + FAQ + pieza
   "por qué el postoperatorio importa" (pocos proveedores, cirujanos no lo recomiendan).
   Audiencia real existente. (Del `/llm-council` de 4a: el Expansionist lo marcó como el
   verdadero upside de esta área; va con su propio brainstorm, no como scope-creep de FAQ.)
7. **[XL]** página "mejores med spa de WPB" (ruta+template+copy+schema+internal linking+
   compliance+baseline visual; brainstorm largo).

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
