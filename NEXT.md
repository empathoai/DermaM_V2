# NEXT

Estado: HEAD esperado = commit del ritual de docs sobre `0d4e0f3` (`fix(hero): standardize /nosotros
and /nancy-nieto hero CTAs to RESERVAR/WHATSAPP`). Árbol limpio, sin servers salvo el `:3000`.

Sesión 2026-08-29 (cont. 5) — CERRADO:
- **Heroes `/nosotros` + `/nancy-nieto`: CTAs → `RESERVAR` / `WHATSAPP`** (antes labels verbosos que
  ensanchaban el botón vs. los 10+ hero estándar). Solo data (`aboutPage.js`), 2 botones se mantienen.
  `test:visual` 34/34 sin diffs. Ver DECISIONS 2026-08-29.
- **BUG detectado (próximo ciclo):** los CTA del hero del Home (`Hero.jsx`) son `<button>` sin handler
  → no hacen nada. Ver cola de código ítem 1 + DECISIONS 2026-08-29.

Sesión 2026-08-29 (cont. 4) — CERRADO:
- **`.spotlightTitle` desktop 56px → 44px** en `FounderBioPage.module.css` — jerarquía vs H1 de hero
  (64px), títulos largos de Historia/Academy pasan de 4 a 3 líneas. Base 40px intacto.
  `test:visual` 34/34 (el H2 está fuera del viewport del snapshot). Ver DECISIONS 2026-08-29.

Sesión 2026-08-29 (cont. 3) — CERRADO:
- **Home CTA: contenedor alineado a `shared/FinalCTA`** — `.container` de `sections/FinalCTA.module.css`
  pierde `min-height: 75vh` y el override de padding; queda `clamp(80px,12vw,160px) clamp(24px,4vw,64px)`.
  Sección 990px → 763px, sin efecto "zoom" en la imagen. Los 2 componentes `FinalCTA` NO se unificaron
  (blast radius de `shared`). Ver DECISIONS 2026-08-29.
- **Línea `supportingInfo` fuera** del CTA del Home ("West Palm Beach · 561 253 5384"). Commit `29e48aa`.
  `test:visual` 34/34 (el CTA del Home es below-the-fold en los snapshots).
- **Auditoría del footer** (read-only, sin código) — 7 hallazgos → cola de pulido abajo. DECISIONS 2026-08-29.

Sesión 2026-08-29 (cont. 2) — CERRADO:
- **`/nancy-nieto` sección Academy → 2 columnas** (formato `.spotlight*` de "Historia", imagen a la
  **derecha**) + **link saliente seguido** a `dermamacademy.com` ("Conoce DERMA.M Academy ↗",
  refuerza audit 8.19). Data `href`/`linkLabel` en `dermamYAcademy` (`aboutPage.js`).
- **`.spotlightRow` desktop: `height` fijo → `min-height`** — arregla clipping de texto en
  secciones 2 y 4. Commits `f357fc4`→`b4c354e`. `test:visual` 34/34 (2×), sin diffs.
- **Evaluado y descartado:** link a `/nosotros/nancy-nieto` en el navbar (costo > ganancia blanda).
  Fix de orfandad queda como 2 ítems abajo. Ver DECISIONS 2026-08-29.
- Spec/plan: `docs/superpowers/{specs,plans}/2026-08-29-nancy-academy-two-column*` (gitignored).

Sesión 2026-08-29 (cont.):
- **Skill `add-media` creada** — `.agents/skills/add-media/SKILL.md` + copia en `.claude/skills/`.
  3 acciones: A (rellenar slot existente), B (slot nuevo, gate brainstorming), C (video de hero).
  Envuelve `assets-optimizer`. Handoff de archivos crudos = `scratchpad/media-in/`.
  Spec: `docs/superpowers/specs/2026-08-29-add-media-skill-design.md`.
- **2 specs draft escritos, PENDIENTES de revisión del usuario** (no implementar sin "go"):
  - `2026-08-29-nosotros-academy-link-block-design.md` — restaurar bloque Academy compacto en
    `/nosotros` (imagen + link a `dermamacademy.com`), entre equipo y reseñas. **Revierte
    decisión del 2026-08-28** (el usuario lo pidió explícito); mitigado con prosa mínima + link
    followed explícito (ayuda a 8.19). CSS `.academy*` sigue intacto; `dermam-academy.jpg` en disco.
  - `2026-08-29-reviews-alignment-8.20-rescope-design.md` — rescope de 8.20: sin integración
    online (Apify descartado), reseñas curadas estáticas, relevancia por página (postop→postop),
    link saliente a Google reviews para confianza, **sin `aggregateRating`**. Cycle 1 = link +
    curación Opción A; Cycle 2 opcional = unificar en `src/data/reviews.js` con tags de tema.

Sesión 2026-08-29 (3 ciclos previos):
- **Ítem #5b CERRADO** (`293f8d2`) — 4 FAQ comparativas en `/prf-y-fibrina` (count 8→12). Ítem #5a DESCARTADO.
- **Ítem #6 CERRADO** — cuña postop demand-gen: 3 FAQ en `/tratamientos-postoperatorios` (count 9→12).
- **Ítem "mejores med spa de WPB" [XL] DESCARTADO** → resuelto como 1 FAQ en `/contacto` (`contactFaq`
  5→6, `faq-consistency` count 5→6): "¿Cómo elijo un buen med spa en West Palm Beach?", criterios de
  decisión, sin claim de superioridad. Premio BusinessRate ya descartado (`INTAKE.md:66`); la palanca
  del término es off-site (Yelp/reseñas). `test:visual` 34/34 sin diffs.
  Spec: `docs/superpowers/specs/2026-08-29-contacto-faq-med-spa-eleccion-design.md`.
  Detalle del descarte y cómo/cuándo reconsiderar: DECISIONS 2026-08-29.

Contexto vigente de sesiones previas (no re-abrir):
- Ítem #5 (estrategia PRF) cerrado como spec 2026-08-28. Ítem #4 (FAQ PAA) cerrado.

## Cómo retomar
1. `npm run dev` (`:3000`) → abrir el sitio en el browser pane.
2. Para `test:visual`: en otra terminal `npx vite --port=3003 --host=0.0.0.0`, luego `npx playwright test`.
   (Git Bash: prefijar `MSYS_NO_PATHCONV=1` si se usa `-g` con un patrón que empiece por `/`.)
3. Elegir el próximo ítem de la cola. Cada uno: brainstorm (`superpowers:brainstorming`) → aprobación
   del usuario → un cambio por ciclo → `test:visual` + cross-check `MEDICAL_COMPLIANCE.md` + WCAG AA →
   commit → ritual de docs → push confirmado.

## Lógica de esfuerzo (t-shirt sizing)

Se ataca en orden de size ascendente (XS→XL) salvo que el usuario diga otra cosa. No re-preguntar
"¿por dónde empezamos?". Cada ciclo mantiene su gate: brainstorm → aprobación → 1 cambio.
Escala: **XS** copy 1 sitio · **S** 1–3 archivos mecánico · **M** multi-archivo con criterio ·
**L** multi-fase o captura de data previa · **XL** página/feature nueva entera.

## Próximo (en orden de size)

**PRIMERO — 2 specs draft esperan revisión del usuario (pedidos explícitamente el 2026-08-29):**
1. `docs/superpowers/specs/2026-08-29-nosotros-academy-link-block-design.md` — [S]. Al aprobar:
   `superpowers:writing-plans` → 1 ciclo (data `academy` en `aboutPage.js` + render en `AboutPage.jsx`
   entre Team y Testimonials + baseline `nosotros-viewport`). Registrar la reversión en `DECISIONS.md`.
2. `docs/superpowers/specs/2026-08-29-reviews-alignment-8.20-rescope-design.md` — [M]. Cycle 1 =
   link a Google reviews (`GOOGLE_REVIEWS_URL` en `siteMeta.js`, validar URL) + curación por tema
   (Opción A) + update de docs 8.20/INTAKE. Cycle 2 opcional = `src/data/reviews.js` con tags.
   Pendiente de decisión del usuario en el spec: Opción A vs B, y confirmación de "sin aggregateRating".

**Integración de media faltante — usar la skill `add-media`, Acción A, un slot por ciclo.**
Bloqueado en input del usuario: hay que dejar los archivos crudos en `scratchpad/media-in/` y
confirmar el mapeo 1 archivo ↔ 1 slot antes de procesar. Slots vacíos hoy (todos `/nosotros`):
- `/assets/images/about/hero.jpg`
- `/assets/images/about/team/{melisa-rios,mikaela-guajardo,daniela-parra,elianne-trujillo,samantha-atencio,tony-diaz}.jpg`
- `/assets/images/about/team/{samantha-atencio,tony-diaz}.mp4`
Cada ciclo: `add-media` A (localizar → optimizar → webp → alt español → render `:3000` →
`test:visual` re-baseline → WCAG → ritual). Nombres `hero.jpg`/`<slug>.jpg` se mantienen (los
data refs de `aboutPage.js` ya los usan; renombre SEO 7.1 sería sub-ciclo aparte).

Otras secciones "con media faltante" fuera de `/nosotros`: identificar con
`grep -rhoE '/assets/images/[^"]+\.(jpg|mp4|webp)' src | while read p; do [ -f public$p ] || echo $p; done`
antes de cada tanda.

**Cola de código no bloqueada (en orden de size):**
1. **BUG — CTAs del hero del Home no navegan** — [XS]. `src/components/sections/Hero/Hero.jsx` líneas
   ~80-85: "Reservar" y "Contacto" son `<button>` sin `onClick`/`href`. Fix: "Reservar" →
   `<a href={bookingUrl} target="_blank" rel="noopener noreferrer">` (mismo `bookingUrl` que `PageHero`);
   "Contacto" → `<Link to="/contacto">`. Reusar las clases Tailwind actuales. Ver DECISIONS 2026-08-29.
   `test:visual`: el hero del Home está en el snapshot `home-hero` pero `<button>`→`<a>` mismo texto/estilo
   no debería diffear — verificar.
2. **Link contextual Home → `/nosotros/nancy-nieto`** — [XS/S]. Enlazar el bloque de fundadora de Home
   (foto de Nancy en `FeaturedServices`/founder) a su bio. Fix parcial de orfandad; blast radius local
   a Home. Ver DECISIONS 2026-08-29.
3. **Footer — hallazgos de auditoría** (DECISIONS 2026-08-29). Prioridad: 3a → 3b → 3c; 3d agrupable.
   - **3a** [S]: `Footer.jsx` importa `Instagram/Facebook` (lucide) + tiene `.socialBlock` CSS pero
     **no renderiza redes**. Cablear links a IG/FB (URLs en `organizationSchema.js` `sameAs`) o borrar
     el código muerto. Footer entra en varios snapshots → `test:visual` completo.
   - **3b** [XS]: falta el horario en el footer (Contacto: "Lun-Sáb 9:00–17:00 · Dom 9:00–13:00").
   - **3c** [XS/S]: bloque legal incompleto — bottom bar solo Privacidad + Términos. Sumar `/accessibility`
     y `/legal` (hub). `/treatment-disclaimer` y `/booking-cancellation-refund-policy` opcionales.
   - **3d** [XS]: blurb dice "salud clínica" → cambiar a "med spa / medspa en West Palm Beach" (entidad
     consistente, keyword local); "Tratamientos" (col. Navegación) apunta a `/faciales` (label→destino
     incoherente); col. "Tratamientos" lista 3 de 6 hubs (falta IV Therapy + Capilar; Dental se omite
     a propósito por §Bloqueado dental); `© 2026` hardcodeado → año dinámico.

Sin ítem de doc-hygiene pendiente por ahora.

**Para cerrar el proyecto solo falta (NO es código, NO es este workflow):**
1. Subir el sitio a **Hostinger/Apache** (prod real; Vercel es solo demo para el cliente).
2. Verificar **GSC** por Dominio una vez en Hostinger + DNS.
Ver §Bloqueado para el detalle de `.htaccess` y el orden de pasos.

Condicionales (no ejecutar sin que se cumpla la condición):
- **Pieza/sección "por qué el postoperatorio importa"** — sección nueva en `LandingPage` (+ baseline visual)
  o ruta nueva. Solo si `/tratamientos-postoperatorios` gana tracción. Material ya vetado en el spec de #6.
- PRF §8.3 página EN — solo si el tráfico EN de ads convierte.
- PRF §8.4 guía pilar "Qué es el PRF" — solo si el landing enriquecido rankea para el cluster.

## Backlog off-site (NO es parte del sitio — no consume ciclo de código)
Trabajo de GBP / ads / listings. Vive en specs y research; se ejecuta en sesiones aparte
con el usuario logueado, no toca `src/`. Sin prioridad asignada.
- Posts de GBP + copy base de Facebook ads para postop — `docs/superpowers/specs/2026-08-29-postop-demand-gen-wedge-design.md` §"Specified, NOT executed".
- Servicios 1–3 + descripción de GBP — `COMPETENCIA-SERVICIOS-2026.md` §S1–S3.
- Ads de PRF (canales/ángulos/términos) — `2026-08-28-prf-content-strategy-design.md`.

## Bloqueado (espera al usuario / terceros)
- **Yelp:** reclamarlo lo hace Nancy (dueña). Rol del usuario: pasarle el NAP + descripción optimizados.
- Tema 6 intake: velocidad de captación de reseñas (cadencia de respuesta ya OK, 85%).
- Tema 7 / GMBspy sobre Élévatione / Beverly Hills / Pure Skin → secundarias de competencia.
- C2: sign-off de compliance de la clínica por dato cuantitativo + enlace de autoridad.
- **Dental en el sitio:** `/dental-estetico` hub + blanqueamiento + limpieza dental en vivo. Mismo riesgo
  regulatorio que sacó dental del GBP — evaluar si las páginas deben salir/reencuadrarse. Ciclo aparte,
  decisión del usuario. No tocar sin pedido explícito.
- Deploy: **estado actual** = Vercel auto en cada push, **solo como demo para el cliente**.
  **Prod real = Hostinger/Apache, pendiente de implementar.** No tocar nada de Hostinger (ni `.htaccess`,
  ni corregir refs de docs que digan "Vercel") hasta que el usuario diga explícitamente "vamos a hacer el
  deploy en Hostinger".
  Al deployar en Hostinger: reemplazar `public/.htaccess` con el bloque de
  `docs/seo-setrategies/REDIRECT-MAP-VALIDATION-2026.md` §8, verificar con el script `curl -I` del mismo doc,
  y recién ahí corregir `docs/seo-setrategies/INTAKE.md:56` ("deploy en Vercel" → Hostinger/Apache).
  **Aprovechar la tanda para agregar `/nosotros/nancy-nieto` a `public/sitemap.xml`** (priority ~0.6):
  hoy está ausente y es casi huérfana (1 solo link entrante). `sitemap.xml` es archivo protegido → no
  tocar antes del deploy. Ver DECISIONS 2026-08-29.
  Condiciona la verificación GSC por Dominio.
- Nota operativa para la clínica: servicio postop tiene punto débil documentado (ayuda con la faja +
  protección ocular en luz LED) — de las 2 reseñas negativas.

## Infra resuelta (no rehacer)
graphify fuera del workflow · engram off · GSC prefijo creado sin verificar
(`public/google2f0ede1a410e8a22.html`) · GA4 `G-9272VHFT03` en index.html · Apify token en
`.env.local` raíz (`APIFY_API_KEY`, formato `KEY: valor`)

## Contexto por área — grep, no full-read
PROGRESS.md = log · DECISIONS.md = por qué · docs/seo-setrategies/INTAKE.md = proyecto SEO local ·
docs/seo-setrategies/COMPETENCIA-SERVICIOS-2026.md = research competencia/servicios + reseñas
