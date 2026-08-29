# NEXT

Estado: HEAD esperado = 1 commit encima de `d1d1dfc` — `contactFaq` 5→6 + `faq-consistency`
count `/contacto` 5→6 + docs de cierre — pusheado, árbol limpio, sin servers levantados
salvo el `:3000` del browser pane.

Sesión 2026-08-29 (3 ciclos):
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

**Cola de código no bloqueada: vacía.** Todo lo abierto es condicional o backlog off-site.
Próxima sesión sin pedido nuevo del usuario: doc-hygiene (empezar por `INTAKE.md:56`
"deploy en Vercel" → Hostinger/Apache, ver Bloqueado) como ciclo mecánico único.

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
- Deploy: fecha y quién deploya (Hostinger/Apache + DNS) — condiciona verificación GSC por Dominio.
  Al deployar: reemplazar `public/.htaccess` con el bloque de `docs/seo-setrategies/REDIRECT-MAP-VALIDATION-2026.md`
  §8, luego verificar con el script `curl -I` del mismo doc.
- Doc-hygiene: `docs/seo-setrategies/INTAKE.md:56` dice "deploy en Vercel" — es Hostinger/Apache, corregir.
- Nota operativa para la clínica: servicio postop tiene punto débil documentado (ayuda con la faja +
  protección ocular en luz LED) — de las 2 reseñas negativas.

## Infra resuelta (no rehacer)
graphify fuera del workflow · engram off · GSC prefijo creado sin verificar
(`public/google2f0ede1a410e8a22.html`) · GA4 `G-9272VHFT03` en index.html · Apify token en
`.env.local` raíz (`APIFY_API_KEY`, formato `KEY: valor`)

## Contexto por área — grep, no full-read
PROGRESS.md = log · DECISIONS.md = por qué · docs/seo-setrategies/INTAKE.md = proyecto SEO local ·
docs/seo-setrategies/COMPETENCIA-SERVICIOS-2026.md = research competencia/servicios + reseñas
