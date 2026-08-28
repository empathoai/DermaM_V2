# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-28 — #5 Fase 1: H1 con intención local en Home + quitar eyebrow del hero de Home
- **Sub-línea local en el `<h1>` del hero de Home** (`Hero.jsx`, commit `cb55140`). `<span>` block dentro del mismo `<h1>`, después de "Salud/profesional/para tu/piel": **`Medical Spa · West Palm Beach`** (separador U+00B7), `text-[15px] lg:text-[16px] tracking-[0.12em] font-normal text-[#CCC9C1]`, `uppercase` heredado del `<h1>`. El titular grande no se tocó. Da entidad correcta + locale dentro del heading (los `<title>` ya lo tenían, el `<h1>` no). Aprobado por el usuario en el gate (capturas 375/1280).
- **Quitado el eyebrow "Centro de estética, belleza y salud"** (rayita + `<p>`) del hero de Home (`Hero.jsx`, commit `a0679f5`). Motivo: en mobile partía en 2 líneas y sumaba ruido sobre el titular; SEO nulo (tagline genérico sin keyword/locale, y usaba un 3er encuadre de categoría distinto al canónico "medical spa"). El H1 pasa a liderar directo. **Solo Home** — los 6 hubs conservan su eyebrow porque ahí es la categoría ("TRATAMIENTOS FACIALES", etc.).
- **`home-hero-mobile-safari-win32.png` regenerado 2 veces** (una por cambio). En cada caso se verificó el `-diff.png`: solo la línea nueva / el desplazamiento vertical por el bloque removido, sin reflow lateral ni cambios de topbar/navbar/CTA. desktop-chrome quedó bajo tolerancia ambas veces. Verde ×2 tras cada regen.
- **Spec/plan** (en `docs/`, gitignored): `docs/superpowers/specs/2026-08-28-h1-intencion-local-home-hubs-design.md`, `docs/superpowers/plans/2026-08-28-h1-intencion-local-home-hubs.md`.
- **PENDIENTE — Fase 2 del plan** (ciclo propio, ya aprobado el enfoque): replicar la sub-línea a los 6 hubs vía prop opcional `localTag` en `PageHero` (+ `.localTag` en su module.css + `CategoryPage` pasa la prop + `categoryPages.js` `hero.localTag` ×6), y corregir `<title>`/`og:title`/`twitter:title` de `Home.jsx` → `Derma.M | Medical Spa en West Palm Beach, FL` (hoy dice "Tratamientos Estéticos").
- **graphify sacado de la cadena de ejecución** (commit `c752ec6`): borrado el bloque `hooks` de `.claude/settings.json` (forzaba `graphify query` antes de cada Read/Grep — round-trip sin valor) y la sección de reglas de `CLAUDE.md`. `graphify-out/` queda en disco; `/graphify` sigue como skill manual. Grep/Glob/Read directo de ahora en más. (El hook ya cargado muere al reiniciar `claude`.)
- **engram desactivado en este proyecto** (commit `8cb7c5f`): `.claude/settings.json` → `"engram@engram": false`. Correrlo junto con los 3 archivos era contabilidad doble. Los 3 archivos en git son la única memoria del proyecto de ahora en más. `CLAUDE.md` "Memory persistence" lo dice explícito. engram sigue activo a nivel global para otros proyectos.
- Dev server `:3000` detenido al cierre.

## 2026-08-28 — Continuidad optimizada: archivado de PROGRESS/DECISIONS + Tema 8 + scrub Miami/Legacy MD
- **Arranque de sesión pasó de ~45k a ~20k tok de bookkeeping.** `PROGRESS.md` 663→145 líneas (resto → `docs/PROGRESS_ARCHIVE.md`); `DECISIONS.md` 228→143 líneas (entradas 2026-08-19/20 → `docs/DECISIONS_ARCHIVE.md`, salvo la de Nancy/nº de licencia que sigue activa). `CLAUDE.md` "Memory persistence" actualizado: archivos son consulta on-demand, no lectura de arranque; regla nueva de doc-hygiene timeboxed. MEMORY.md sin tocar.
- **Intake Tema 8 capturado** (`INTAKE.md`): director médico Tony Diaz D.O. (perfil es de ortopedia, sin vínculo público con Derma.M → flag para `Physician`/`sameAs`); Sunbiz DERMA.M LLC (doc `L21000435735`, EIN `87-3024328`, ACTIVE, NAP coincide); preguntas para Nancy marcadas "no re-mostrar cada sesión". Certificaciones/afiliaciones = PENDIENTE.
- **Scrub Miami / Legacy MD** de todos los archivos de contexto: `PRODUCT.md` consolidado a sede única WPB (era el único que afirmaba Miami como ubicación real); menciones históricas en PROGRESS/DECISIONS/INTAKE colapsadas a texto neutro. `grep -i` de ambos en los archivos de arranque = 0. `src/`+`public/` ya estaban limpios desde `6a17f67`.
- **Skill `geo-aeo-playbook/SKILL.md`** hecha genérica: nombre de clínica ficticia, dirección Miami/Brickell, quote falsa con nombre real y la tabla con branding "EmpathoAI" → placeholders. Tácticas y templates sin tocar.
- Commits: `b6eee37` (Miami + Tema 8), `b936657` (skill). Este cierre = commit aparte.
- Sin cambios de código de app. Dev server levantado en `:3000`.

## 2026-08-28 — CIERRE DE SESIÓN / handoff (SEO local: infra de medición + intake parcial)

**Hecho (todo pusheado a `main`, 4 commits: `5a821d3` `5770327` `5ff324e` `7b0d9a5`):**
1. **Tooling decidido — SIN herramienta paga.** Analizados y descartados: OpenSEO/DataForSEO
   (`docs/seo-setrategies/OPEN-SEO-ANALYSIS.md`), Semrush, pipeline con la API de Gemini.
   Método = browser pane manual + skills SEO/GEO/Local instaladas + `docs/pedro-seo/` (5
   transcripciones) y `docs/open-seo/` como referencia (`docs/seo-setrategies/PEDRO-SEO-VALIDACION-Y-ESTRATEGIA.md`).
   Repos clonados en `docs/` (gitignored).
2. **GSC** — propiedad prefijo de URL `https://dermamskinhealth.com/` creada (cuenta
   `empathoai@gmail.com`), SIN verificar. **`public/google2f0ede1a410e8a22.html`** en el repo
   (método HTML file). Verificar post-deploy. Token del `<meta>` alternativo en `INTAKE.md`.
3. **GA4** — property "Derma.M" + stream "Derma.M Web" creados. **Measurement ID `G-9272VHFT03`**.
   Snippet `gtag.js` en `index.html` `<head>` (sin código de router — Enhanced measurement
   cubre la SPA). Verificado funcionando en dev. Datos reales post-deploy.
4. **Bing Webmaster** — DIFERIDO (login MS bloquea el browser). Post-deploy se importa de GSC.
5. **Auditoría read-only del GBP DERMA.M** — 4.9 ★ / ~130 reseñas (el `4.9/117` viejo NO era
   inventado). Primaria "Medical spa" OK + 4 secundarias. NAP 100% consistente con
   `organizationSchema.js`. 4 gaps anotados (website field http/www, service area vacío,
   profile strength <100%, revisar secundarias).
6. **Validado el sitio público actual** — todas las variantes 301 → `https://dermamskinhealth.com/`;
   canónico live coincide; server LiteSpeed (rediseño no deployado). GSC/GA4 quedaron con la URL correcta.
7. **Tema 7 competencia** — local pack "med spa west palm beach" mapeado (8 players). Primaria
   "Medical spa" universal. DERMA.M último en volumen de reseñas (130 vs 149–810), rating 4.9
   competitivo → **palanca nº1 = volumen + velocidad de reseñas**.

**Intake — estado (`docs/seo-setrategies/INTAKE.md`, LEER AL INICIO):**
Temas 1,2,3,4,5 = RESPONDIDOS. Tema 7 = PARCIAL. **Temas 6 y 8 = PENDIENTES de respuestas del usuario.**

**Próxima sesión — pendientes en orden:**
1. **Usuario: completar Tema 6** (sistema de captación de reseñas, cadencia, quién responde,
   fotos reales del local) y **Tema 8** (nombre del director médico, registro del med spa en FL).
2. **Usuario (opcional): GMBspy en su Chrome** sobre Élévation / Beverly Hills / MedClub →
   pasar sus categorías secundarias (para decidir las de DERMA.M).
3. **Track A código (ciclos propios, con aprobación):**
   - **#5 H1 con intención local** (Home + 6 hubs — los `<title>` tienen ciudad, los `<h1>` no).
   - Hubs → `CollectionPage` + `BreadcrumbList`.
   - Horario visible en `/contacto` (hoy solo en schema).
   - Task 4 (embed mapa `/contacto` vía Place ID `ChIJ85kuJaTX2IgRXPrdsU0jNRs`) — diferida.
   - Corregir website field del GBP → `https://dermamskinhealth.com/` (cosmético).
4. **8.20** — `ReviewsSection` con reseñas reales (fuente = GBP 4.9/~130, no curar ocultando
   negativas). Depende de la sesión de optimización del GBP.
5. **Sesión de optimización del GBP** (Track B, usuario logueado): website field, service
   areas, secundarias, profile strength, plan de posts, plan de captación de reseñas.
6. **Post-deploy:** verificar GSC (archivo ya en repo, o método "Google Analytics"), ver datos
   GA4 (48h), importar Bing WT desde GSC, subir sitemap. Vercel debe mantener los 301
   (www→no-www, http→https). "Quién deploya / fecha" = sigue PENDIENTE en el intake.

**Deploy:** rediseño en Vercel, mismo dominio, reemplaza al sitio viejo (LiteSpeed/WordPress),
inminente. Todo Track A tiene que entrar antes/con el deploy.

**Estado:** árbol limpio, dev server y browser pane detenidos.

---

## 2026-08-28 — GA4: property creada + snippet gtag.js en index.html

**Browser (usuario logueado, empathoai@gmail.com):**
- **GA4 property "Derma.M"** creada en la cuenta "Default Account for Firebase" (356181125).
  Zona Eastern (New York Time), USD, industria "Beauty & Fitness", tamaño Small, objetivos
  "Generate leads" + "Understand web/app traffic".
- **Data stream "Derma.M Web"** → `https://dermamskinhealth.com`, Stream ID `15515945803`,
  **Measurement ID `G-9272VHFT03`**, Enhanced measurement ON.
- Property vieja de Firebase (`emphatoai-payroll` / `G-NV1WD4F9BN`) **intacta, sin usar**.
- **Bing Webmaster Tools DIFERIDO** — el login de Microsoft bloquea el browser automatizado.
  Post-deploy se importa desde el GSC verificado (1 clic).

**Cambio de código (Track A):**
- **`index.html`** — agregado el snippet estándar `gtag.js` de GA4 (`G-9272VHFT03`) en `<head>`,
  justo después del `<title>`. 9 líneas, additivo. No hay CSP en el repo (deploy Vercel, sin
  `vercel.json`/`_headers`), no había ningún GA/GTM previo.
- **SPA page_view:** NO se agregó código de router. El Enhanced measurement de GA4 captura
  "page changes based on browser history events" por default → los cambios de ruta de React
  Router se trackean solos. Snippet-only es lo correcto y mínimo.
- **Verificado en dev (`localhost:3000`, browser pane):** `window.gtag` = function; `gtag.js`
  carga (15ms); `page_view` enviado a `google-analytics.com/g/collect` con `tid=G-9272VHFT03`;
  evento `scroll` de enhanced measurement tambien dispara; **0 errores de consola**.
  `vite build` → `dist/index.html` contiene el tag ×2. `dist/` borrado post-check.
- **NO tocado:** nada mas. `robots.txt`/`sitemap.xml`/`llms.txt` intactos.

**PENDIENTE:** ver datos reales en GA4 tras el deploy (48h para "get started"). GA4 tambien
habilita verificar GSC por el metodo "Google Analytics" (ademas del archivo HTML ya en el repo).

## 2026-08-28 — GSC: propiedad creada + archivo de verificación en el repo

**Contexto:** sesión de intake SEO local (ver `docs/seo-setrategies/INTAKE.md`, Temas 1–5 respondidos).
Se analizó y descartó tooling externo (OpenSEO/DataForSEO, Semrush, pipeline con API de Gemini)
— método definido = browser manual + skills instaladas + `docs/pedro-seo/` como referencia.
Docs nuevos: `docs/seo-setrategies/OPEN-SEO-ANALYSIS.md`, `PEDRO-SEO-VALIDACION-Y-ESTRATEGIA.md`.
Repos de referencia clonados en `docs/open-seo/` y `docs/pedro-seo/` (dentro de `docs/`, gitignored).

**Cambio de código (Track A):**
- **Nuevo `public/google2f0ede1a410e8a22.html`** — archivo de verificación de Google Search
  Console (método "HTML file"). Contenido: `google-site-verification: google2f0ede1a410e8a22.html`.
  Vite copia `public/` al build → se sirve en `https://dermamskinhealth.com/google2f0ede1a410e8a22.html`.
- **Por qué el archivo y no el `<meta>` tag:** el usuario ya lo había descargado; método
  recomendado por GSC; **no toca `index.html`** (menor blast radius en proyecto near-final).
  Token alternativo del `<meta>` tag quedó guardado en `INTAKE.md` por si se cambia de método.
- **NO tocado:** `index.html`, `robots.txt`, `sitemap.xml`, `llms.txt`, `.htaccess` — intactos.
- **Verificado:** `curl http://localhost:3000/google2f0ede1a410e8a22.html` → 200 + contenido OK;
  `vite build` emite `dist/google2f0ede1a410e8a22.html` con el contenido correcto. `dist/`
  borrado post-check (gitignored). `git status`: solo el archivo nuevo + `INTAKE.md`.

**Estado GSC:** propiedad **prefijo de URL** `https://dermamskinhealth.com/` creada en la cuenta
`empathoai@gmail.com`, **sin verificar** (correcto — sitio nuevo aún no deployado).
**PENDIENTE:** darle "Verify" en GSC **después del deploy**. Luego subir sitemap. Ídem alta de
GA4 y Bing Webmaster (Track C, usuario). Ruta mejor para GSC: propiedad de **Dominio** vía quien
controle el DNS de Vercel (ligado al punto "quién deploya", PENDIENTE en el intake).

**Backlog del intake:** Temas 6 (operación de reseñas), 7 (competencia 3-pack), 8 (compliance/
director médico) siguen PENDIENTE.

## 2026-08-27 — CIERRE DE SESIÓN / handoff (contexto muy grande, se continúa en otra sesión)

**Hecho esta sesión (todo pusheado a `main`):**
1. `WarningBox` — `title` default → "PRECAUCIONES Y CONTRAINDICACIONES", `eyebrow` → "ANTES DE RESERVAR" (25 páginas de tratamiento). Cerrado.
2. **Cluster de schema `#organization`** (sub-proyecto A del SEO local) — `src/data/organizationSchema.js` fuente única, cableado en Home/Contacto/NancyNieto por `@id`. Sin `aggregateRating` (→8.20) ni `medicalSpecialty`. `sameAs` real, `knowsAbout` 37 (Plasma #4), `alternateName`, `keywords`, `areaServed`, `hasMap`. Validado 0/0 en validator.schema.org, `test:visual` 34/34. Cerrado. (entrada detallada abajo)
3. **Arranque del proyecto de SEO local / GEO.** Objetivo confirmado con el usuario: **posicionar el nuevo sitio como el mejor med spa de West Palm Beach (sustanciado, no declarado) + servicios accesibles/citables desde buscadores e IA (ChatGPT/Perplexity/Gemini/Claude).**

**Docs nuevos (en `docs/seo-setrategies/`, forzados a git):**
- `LOCAL-SEO-ANALYSIS-dermam-redesign.md` — auditoría `seo-local` del rediseño. Score **48/100**. Top-10 partido en tracks A (código) / B (GBP) / C (off-site).
- `INTAKE.md` — **contexto vivo del proyecto SEO. Leer al inicio de cada sesión de SEO/GEO.** Objetivo, 3 tracks, deploy, decisiones (BusinessRate descartado), y **8 temas de intake PENDIENTES** que el usuario va a completar él y después el agente complementa.
- `repo/` + `El sistema de SEO Local con Claude...md` — skills pedro-seo (Palo Seco) + transcript de video. **La `seo-local` instalada = la misma, mejor copia.** Usar el repo solo como referencia (transcript + `thinking-framework.md`/`quality-gates.md`). NO instalar esas skills (sin `scripts/`, colisión de nombre).

**Próxima sesión — pendientes en orden:**
1. **El usuario va a pasar un repo nuevo + transcripción, aislados en una carpeta**, para evitar pagar por herramientas que se podrían auto-hostear. Analizar eso PRIMERO.
2. **El usuario completa el INTAKE** (8 temas) → el agente lo integra a `docs/seo-setrategies/INTAKE.md` y devuelve repreguntas.
3. Track A pendiente de código: **#5 H1 con intención local** (Home + 6 hubs — los `<title>` ya tienen ciudad, los `<h1>` no), hubs `CollectionPage`+`BreadcrumbList`, Task 4 (embed mapa `/contacto` vía Place ID `ChIJ85kuJaTX2IgRXPrdsU0jNRs`, diferida), horario visible en `/contacto`.
4. **8.20** — `ReviewsSection` (Home+Contacto) con reseñas reales vía APIFY/scraper → reintroduce `aggregateRating` + `Review`. Depende de la sesión B.
5. **Track B — sesión GBP** con el usuario logueado en el browser (verificar/crear ficha, categoría primaria "Medical spa" + 4-5 secundarias, descripción 700c, áreas, servicios, fotos, posts). = ítem 8.19. Palanca #1.
6. **Track C** (usuario): GSC + GA4 + Bing Webmaster (8.17, desbloquea medición), Bing Places, Apple Maps, reclamar Yelp, cadencia de reseñas, corregir CareCredit (dominio `dermamskincare.com` erróneo).

**3 desbloqueos de mayor impacto (dicho al usuario):** (a) configurar GSC/GA4/Bing WT — no toca código, desbloquea todo; (b) la sesión B (GBP); (c) decidir UNA herramienta de datos (conector Ahrefs — gratis de autorizar — o trial Semrush). Sin analítica ni datos de mercado, el agente prioriza por best-practice, no por dato.

**Deploy:** rediseño en Vercel, mismo dominio `dermamskinhealth.com`, reemplaza al sitio viejo, inminente ("para ayer"). Todo Track A tiene que entrar antes/con el deploy. **Fecha concreta y quién deploya: PENDIENTE en el intake.**

---


---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md) (entradas de sesiones cerradas hasta 2026-08-27).
