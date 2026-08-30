# NEXT

**Este archivo = estado vivo + cola + cómo retomar.** Un ciclo cerrado no deja bloque aquí: su
resumen va a `PROGRESS.md`. Mantener bajo ~110 líneas — los "CERRADO" viejos son sedimento, se podan.

## Estado

HEAD esperado = `docs: cont.22 — poda de NEXT.md` sobre `fdf7b7e`. Árbol limpio salvo
`M docs/PROGRESS_ARCHIVE.md` (preexistente, no de este ciclo — no tocar). Dev server `:3000` = de
otro chat, no tocar.

## Cola activa — remediación de auditorías (cont. 21)

27 tareas triadas de `auditorias-externas/resultados/{ui-ux,seo,copy}.md`. **Detalle por tarea**
(archivos, enfoque, verificación, impacto SEO/GEO/AEO, gate): `docs/superpowers/plans/2026-08-30-remediacion-auditorias-externas.md`.

Nada ejecutado. Cada tarea: `superpowers:brainstorming` → aprobación del usuario → 1 cambio → verificación → ritual.

**Próxima: Tarea 1** — CTA muerto "Agenda tu valoración" en Postoperatorios (`FeaturedServices.jsx:124`), XS.

Orden: **1 → 3 → 4 → 7 → 9 → 6 → 5 → 8** · luego `11 → 18 → 10 → 12 → 13 → 17 → 20 → 21 → 14 → 15 → 16 → 19 → 22` · luego `23 → 24 → 26 → 27 → 25`.

| # | Hallazgo | Talla | Flag |
|---|---|---|---|
| 1 | CTA muerto Postoperatorios (UX-01=CPY-02) | XS | |
| 2 | `.htaccess`: catch-all SPA antes de los 301 (SEO-01) | S | **BLOQUEADA → deploy Hostinger** |
| 3 | `/nosotros/nancy-nieto` fuera de sitemap/robots/llms (SEO-02) | S | PROTEGIDO |
| 4 | 3 variantes del disclaimer médico bajo CTAs → constante única (CPY-01) | M | |
| 5 | `CategoryPage` no renderiza benefits/approach/process/breadcrumb (UX-02=SEO-05) | L | |
| 6 | `BreadcrumbList` JSON-LD sin migas visibles (SEO-03) | M | |
| 7 | Entidad Organization fragmentada en Nosotros (SEO-04) | S | |
| 8 | Hero de tratamiento: video oscuro vs. hero editorial claro (UX-03) | L | |
| 9 | Texto de hero `opacity:0` hasta evento de video (UX-04) | M | |
| 10 | Cláusula 911 sin versión en inglés (CPY-06) | S | |
| 11 | `h3` antes de `h2` en layout legal (UX-05) | XS | |
| 12 | robots.txt sin directivas para crawlers de IA (SEO-06) | S | PROTEGIDO |
| 13 | sitemap.xml sin `<lastmod>` (SEO-09) | S | PROTEGIDO |
| 14 | Consolidar JSON-LD de tratamiento en un `@graph` (SEO-07) | M | |
| 15 | `tú`/`usted` inconsistente en documentos legales (CPY-03) | M | |
| 16 | Taxonomía de CTAs primarios dispersa (CPY-04) | M | |
| 17 | Marcadores circulares en `MethodProcess` rompen radio 0px (UX-06) | S | |
| 18 | `bg-white` (#FFFFFF) en LegalResources (UX-07) | XS | |
| 19 | `Contacto`: gradientes/blur/CSS zombi + token de botón (UX-08) | M | absorbe follow-ups viejos de `/contacto` |
| 20 | Viñetas cuadradas vs `<ListSparkle />` en FeaturedServices (UX-09) | S | |
| 21 | Falta enlace "Saltar al contenido" (UX-10) | S | |
| 22 | Canibalización PRF vs faciales/capilar (SEO-08) | M | reconciliar con spec PRF cerrada |
| 23 | llms.txt sin enlaces a políticas legales (SEO-10) | XS | PROTEGIDO |
| 24 | "marcas permanentes" → "persistentes" (CPY-05) | XS | |
| 25 | Capitalización/estilo de títulos ES inconsistente (CPY-07) | L | |
| 26 | Disclaimer del footer 11px → 12px (UX-11) | XS | |
| 27 | `AboutPage`: padding fijo → `clamp()` + glifos de estrella (UX-12) | S | |

Archivos protegidos (`.htaccess`/`robots.txt`/`sitemap.xml`/`llms.txt`): cada uno arranca solo con "go" nominal del usuario sobre ese archivo.

## Otros pendientes (fuera de la cola cont. 21)

**Square deep-linking — BLOQUEADO en la clínica.** Mapeo cerrado en `docs/LINKEO-SQUARE-2026.md`.
Falta confirmación de 4 filas (PRF, marcación abdominal, corrientes rusas, depilación láser) + validar
hidrofacial. Al desbloquear: `superpowers:brainstorming` → `src/data/squareServices.js` (slug→SERVICE_ID
+ helper, fallback `/start`); de paso centraliza `bookingUrl` (hoy copy-pasteado en 8 sitios: Navbar,
Hero, PageHero, TreatmentHero, FinalCTA×2, LandingPage, Contacto). Doc para la clínica = artifact
`https://claude.ai/code/artifact/3f50986c-a2cf-4f0c-9738-d8fb8214ab46` (republicar con `url=`).

**Media faltante — skill `add-media`, 1 slot por ciclo.**
- `about/hero.jpg` (hero `/nosotros`) EN HOLD: hoy apunta a `contact/hero.jpg` (placeholder, `aboutPage.js:11`).
  Espera foto de **equipo** del usuario. Deja `nosotros-viewport` (desktop-chrome) fallando en `test:visual`
  hasta que llegue; si tarda, ciclo aparte: `npx playwright test -g "Nosotros Page - Viewport" --update-snapshots`.
- Verificar posters `.jpg` de `mikaela-guajardo` / `elianne-trujillo` (`ls public/assets/images/about/team/*.jpg`).
- Mapa de imágenes de Nancy: COMPLETO (4/4).
- Otras faltantes fuera de `/nosotros`: `grep -rhoE '/assets/images/[^"]+\.(jpg|mp4|webp)' src | while read p; do [ -f public$p ] || echo $p; done`

**Reviews 8.20 — EN BACKLOG** (usuario, 2026-08-29). `docs/superpowers/specs/2026-08-29-reviews-alignment-8.20-rescope-design.md`.
No se ejecuta sin pedido. Al retomar: Opción A vs B de curación, confirmar "sin `aggregateRating`".

## Cerrar el proyecto (NO código, NO este workflow)

1. **Deploy a Hostinger/Apache** (prod real; Vercel = demo cliente). Al hacerlo: reemplazar `public/.htaccess`
   con el bloque de `docs/seo-setrategies/REDIRECT-MAP-VALIDATION-2026.md` §8 (esto también resuelve la
   Tarea 2 / SEO-01), verificar con su script `curl -I`, agregar `/nosotros/nancy-nieto` a `sitemap.xml`
   (cubre la Tarea 3 / SEO-02), corregir `docs/seo-setrategies/INTAKE.md:56` ("Vercel" → Hostinger/Apache).
2. **Verificar GSC** por Dominio en Hostinger + DNS.

## Condicionales (esperar a que se cumpla la condición)

- Sección "por qué el postoperatorio importa" (nueva en `LandingPage` o ruta) — solo si `/tratamientos-postoperatorios` gana tracción. Material vetado en el spec de #6.
- PRF §8.3 página EN — solo si el tráfico EN de ads convierte.
- PRF §8.4 guía pilar "Qué es el PRF" — solo si el landing enriquecido rankea para el cluster.
- Link a Dental en el footer — condicional al hold regulatorio dental (abajo).

## Bloqueado (usuario / terceros)

- **Deploy Hostinger:** no tocar Hostinger ni `.htaccess` hasta que el usuario diga "vamos a hacer el deploy en Hostinger".
- **Dental en el sitio** (`/dental-estetico` hub + blanqueamiento + limpieza dental): mismo riesgo regulatorio que lo sacó del GBP. Decidir si las páginas salen/reencuadran — ciclo aparte, decisión del usuario, no tocar sin pedido.
- **Yelp:** lo reclama Nancy (dueña); el usuario le pasa NAP + descripción optimizados.
- **C2:** sign-off de compliance de la clínica por dato cuantitativo + enlace de autoridad.
- Intake temas 6/7: velocidad de captación de reseñas; GMBspy sobre competencia secundaria (Élévatione / Beverly Hills / Pure Skin).
- Nota para la clínica: postop tiene punto débil documentado (ayuda con la faja + protección ocular en luz LED) — de las 2 reseñas negativas.

## Backlog off-site (no consume ciclo de código; sesiones aparte, usuario logueado)

- Posts de GBP + copy base de Facebook ads para postop — `docs/superpowers/specs/2026-08-29-postop-demand-gen-wedge-design.md` §"Specified, NOT executed".
- Servicios 1–3 + descripción de GBP — `docs/seo-setrategies/COMPETENCIA-SERVICIOS-2026.md` §S1–S3.
- Ads de PRF (canales/ángulos/términos) — `docs/superpowers/specs/2026-08-28-prf-content-strategy-design.md`.

## Cómo retomar

1. `npm run dev` (`:3000`) → abrir en el browser pane. Comandos completos en `CLAUDE.md` §Commands.
2. Cada ciclo: brainstorm → aprobación → **1 cambio** → verificación → commit → ritual de docs → push confirmado.
   Verificación: cross-check `MEDICAL_COMPLIANCE.md` (copy) + WCAG AA + browser `:3000`.
   `test:visual` **solo** si el cambio toca CSS / componente-template compartido / layout / clase reusada
   (`CLAUDE.md` §DoD). Gotcha Git Bash: prefijar `MSYS_NO_PATHCONV=1` cuando se use `-g /patrón`.
3. t-shirt sizing (ataque en orden ascendente salvo que el usuario diga otra cosa):
   **XS** copy 1 sitio · **S** 1–3 archivos mecánico · **M** multi-archivo con criterio · **L** multi-fase · **XL** feature nueva.

## Infra resuelta (cache — no rehacer)

graphify fuera del workflow · engram off · GSC prefijo creado sin verificar
(`public/google2f0ede1a410e8a22.html`) · GA4 `G-9272VHFT03` en `index.html` · Apify token en
`.env.local` raíz (`APIFY_API_KEY`, formato `KEY: valor`)

## Contexto por área — grep, no full-read

`PROGRESS.md` = log de ciclos · `DECISIONS.md` = por qué (grep el área, nunca full-read) ·
`docs/seo-setrategies/INTAKE.md` = proyecto SEO local ·
`docs/seo-setrategies/COMPETENCIA-SERVICIOS-2026.md` = research competencia/servicios + reseñas
