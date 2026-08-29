# NEXT

Estado: HEAD esperado `293f8d2` (código FAQ #5b) + este commit de cierre de docs encima, pusheado, árbol limpio, sin servers levantados.
Sesión 2026-08-29: **Ítem #5b CERRADO** — 4 FAQ comparativas en `/prf-y-fibrina` (`293f8d2`, count 8→12):
PRF vs PRP (evolución por mecanismo, sin claim de superioridad), marcas post-acné, contraindicaciones,
zonas del cuerpo. Append-only, los 8 previos intactos. `test:visual` 34/34 sin diffs.
**Ítem #5a DESCARTADO** (secciones comparativas + tabla) — ver `DECISIONS.md` 2026-08-29: la FAQ ya
carga la intención comparativa; una tabla médica "X vs Y" abría sección nueva en `LandingPage` +
baseline + exposición a claim de superioridad, sin justificarse. Del PRF-content solo se ejecutó §8.2 (FAQ).
Spec/plan: `docs/superpowers/{specs,plans}/2026-08-29-prf-landing-faq-comparative-cluster*`.

Contexto vigente de sesiones previas (no re-abrir):
- Ítem #5 (estrategia PRF) cerrado como spec 2026-08-28; ciclos hijo #3/#4 de la spec (§8.3 página EN,
  §8.4 guía pilar) siguen **condicionales** — solo si el landing enriquecido rankea / si el tráfico EN de ads convierte.
- Ítem #4 (FAQ PAA) cerrado. Plan founder-content-architecture cerrado. Track B GBP cerrado.

## Cómo retomar
1. `npm run dev` (`:3000`) → abrir el sitio en el browser pane.
2. Para `test:visual`: en otra terminal `npx vite --port=3003 --host=0.0.0.0`, luego `npx playwright test`.
   (Git Bash: prefijar `MSYS_NO_PATHCONV=1` si se usa `-g` con un patrón que empiece por `/`.)
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

## Próximo (en orden de size)
1. **[L] ← PRÓXIMO** Cuña postop demand-gen — GBP posts + FAQ + pieza
   "por qué el postoperatorio importa" (pocos proveedores, cirujanos no lo recomiendan).
   Audiencia real existente. (Del `/llm-council` de 4a: el Expansionist lo marcó como el
   verdadero upside de esta área; va con su propio brainstorm, no como scope-creep de FAQ.)
2. **[XL]** página "mejores med spa de WPB" (ruta+template+copy+schema+internal linking+
   compliance+baseline visual; brainstorm largo).

Condicionales (no ejecutar sin que se cumpla la condición):
- PRF §8.3 página EN — solo si el tráfico EN de ads convierte.
- PRF §8.4 guía pilar "Qué es el PRF" — solo si el landing enriquecido rankea para el cluster.

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
