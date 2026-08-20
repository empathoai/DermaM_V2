# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-20 — SEO backlog ítem 8.1: eliminado `<link rel="canonical">` duplicado (Contacto + 5 páginas de tratamiento)
- **Contexto:** primer ítem aplicado del backlog en `docs/SEO_AUDIT_2026.md` (auditoría de la sesión anterior). En `Contacto.jsx` y los 5 `src/pages/treatments/*/[treatment].jsx`, cada `<Helmet>` renderizaba **dos** `<link rel="canonical">` a la vez: uno calculado desde `VITE_SITE_URL` (condicional, con fallback a un dominio distinto — `https://dermam.com` en los 5 de tratamiento, string vacío en Contacto) y otro hardcodeado apuntando al dominio correcto (`dermamskinhealth.com`). Con `VITE_SITE_URL` seteada, ambos tags se renderizaban simultáneamente — señal ambigua para Google sobre cuál URL es la canónica.
- **Cambio:** eliminada la línea `{canonicalUrl && <link rel="canonical" .../>}` y las declaraciones `siteUrl`/`canonicalUrl` (que quedaron sin otro uso) en los 6 archivos: `Contacto.jsx`, `treatments/faciales/[treatment].jsx`, `laser/[treatment].jsx`, `dental/[treatment].jsx`, `corporales/[treatment].jsx`, `capilar/[treatment].jsx`. Queda un único `<link rel="canonical">` hardcodeado por página, ya apuntando al dominio correcto.
- No se tocó JSON-LD, copy ni el resto del `<Helmet>`. El ítem 8.2 (fallback de dominio incorrecto) queda registrado como resuelto de facto en estos 5 archivos porque el código que lo causaba fue eliminado — pendiente confirmar/cerrar 8.2 explícitamente en el backlog si no hay más ocurrencias del patrón.
- Verificado en el browser (servidor de otra sesión en :3000, reusado solo para lectura): `/contacto` y `/faciales/microneedling` muestran un único `<link rel="canonical">`, sin errores de consola. Marcado `Hecho` en `docs/SEO_AUDIT_2026.md`.

## 2026-08-20 — Auditoría SEO/GEO/AEO + skills externas de AEO/keyword research
- Se auditó el sitio completo (Helmet/meta, JSON-LD, robots/sitemap/llms.txt, rutas, E-E-A-T, performance, NAP) contra el checklist de 65 factores y el wiki de GEO/AEO. Resultado volcado en [docs/SEO_AUDIT_2026.md](docs/SEO_AUDIT_2026.md) — backlog priorizado por bloque, cada ítem pendiente de aprobación individual antes de implementarse.
- Se instalaron dos skills externas (`npx skills add`, aprobadas por el usuario) que faltaban en el wiki/checklist a nivel táctico: `bencium/bencium-marketplace@bencium-aeo` (2.5K installs) y `kostja94/marketing-skills@keyword-research` (1.1K installs), ambas en `.agents/skills/`. Se usaron para escribir la sección 3 de `docs/SEO_AUDIT_2026.md` (estrategia de keyword/AEO para las 3 landing pages destacadas). Ver [[decisions]] 2026-08-20 y `MEMORY.md`.
- No se tocó ningún archivo de código del sitio en este pase — solo documentación y la instalación de skills.

## 2026-08-20 — CLAUDE.md: referencia a wiki SecondBrain para SEO/AEO/GEO
- Se agregó una nota en [CLAUDE.md](CLAUDE.md) señalando `F:\OS-EmpathoAI-SecondBrain` como wiki personal del usuario (repo separado, fuera de este proyecto) para consultar material de SEO/AEO/GEO, validado como alineado con el suite de skills SEO/GEO/AEO/Local de este repo. Es solo fuente de lectura — no forma parte del flujo de archivos protegidos/aprobación de este proyecto. Commit [04b94ba](https://github.com/empathoai/DermaM_V2/commit/04b94ba).

## 2026-08-20 — Eliminado tratamiento CO2 Láser (Láser y Luz) y todas sus dependencias
- **Contexto:** el usuario pidió eliminar el tratamiento "CO2 Láser" de la categoría Láser y Luz. No existía archivo de ruta dedicado — se sirve por la ruta genérica `/laser-y-luz/:treatment` ([routes.jsx:55](src/routes.jsx:55)) leyendo `treatmentPages.js` por slug, así que al quitar los datos la URL pasa a 404 naturalmente.
- **Archivos tocados:**
  - [categoryPages.js](src/data/categoryPages.js): tarjeta "CO2 LÁSER" removida de la grilla del hub Láser y Luz.
  - [treatmentPages.js](src/data/treatmentPages.js): entrada de detalle `'co2-laser'` (whatIs, FAQs, etc.) eliminada; también quitado de la lista `laserYLuz` de tratamientos relacionados.
  - [LaserYLuz.jsx](src/pages/hubs/LaserYLuz.jsx): quitado del `ItemList` del JSON-LD del hub.
  - `public/sitemap.xml` y `public/llms.txt` (protegidos, se tocaron con instrucción explícita del usuario): removida la entrada `co2-laser`.
  - Carpeta de imágenes huérfana `public/assets/images/treatments/laser-y-luz/co2-laser/` eliminada.
- Verificado en navegador: hub Láser y Luz ahora solo muestra Depilación Láser e IPL. Commit [7ca53e3](https://github.com/empathoai/DermaM_V2/commit/7ca53e3), pusheado a `main`.

## 2026-08-20 — Home FounderSection: quitar fondo logo watermark, dejar Clinical Canvas sólido
- **Contexto:** el usuario confundió el `FounderSection` de Home con el `.spotlightContent` de About (entrada anterior de hoy) y preguntó por qué no se había aplicado el mismo cambio ahí. Se confirmó que eran componentes distintos y, a pedido explícito, se replicó el cambio.
- **Cambio en [FounderSection.module.css](src/components/sections/FounderSection/FounderSection.module.css):** en el breakpoint desktop (`min-width: 1024px`) del `.textBlock`, se removió `background-image: url('/assets/images/home/founder_logo.png')` (+ `background-size`/`position`/`repeat`) y se dejó `background-color: var(--color-clinical-canvas, #F2F0F1)`, igual que en About. Mobile no cambia (ya usaba `background-image: none` + logo chico inline).
- Commit [ddc3ccf](https://github.com/empathoai/DermaM_V2/commit/ddc3ccf), pusheado a `main`.

## 2026-08-20 — Formulario de Contacto: menos scroll en mobile (acordeón de aviso legal + Nombre/Teléfono en fila)
- **Contexto:** el usuario notó que el formulario de Contacto obligaba a un scroll excesivo en mobile — confirmado con captura (`ux-heuristics` + revisión de código): 6 campos apilados + dos bloques de aviso legal bilingües completos (ES/EN) + checkbox de marketing + submit, todo antes de llegar a la tarjeta de ubicación/mapa. El aviso de "no envíes info sensible" ya existía (`contactConsentCopy.sensitiveInfoEs/En`), así que no había que agregarlo, solo dejarlo más accesible.
- **Cambio en [Contacto.jsx](src/pages/Contacto.jsx) y [Contacto.module.css](src/pages/Contacto.module.css):**
  1. Los dos bloques informativos (`sensitiveInfo` + `serviceNotice`, sin checkbox asociado) se envolvieron en un `<details>/<summary>` nativo, colapsado por defecto en mobile y desktop, con label "Aviso legal / Legal notice" y chevron que rota al abrir. El checkbox de consentimiento de marketing (`marketingEs/En`) quedó **fuera** del acordeón, siempre visible — no se puede ocultar algo que el usuario debe leer para decidir si tilda la casilla.
  2. Nombre y Teléfono se emparejaron en una sola fila desde 768px (`fieldRow`: columna en mobile, grid 2 columnas en desktop). Email, Servicio, Preferencia y Mensaje siguen en columna completa.
- Sin cambios de copy, validación ni handler de submit. Proceso completo: `superpowers:brainstorming` → spec (`docs/superpowers/specs/2026-08-20-contact-form-mobile-scroll-design.md`, gitignored) → `superpowers:writing-plans` → `superpowers:executing-plans` inline.
- Verificado en el navegador de Claude Code (no Playwright, decisión explícita del usuario): acordeón abre/cierra y rota el ícono en desktop y mobile (375px), texto ES/EN intacto, Nombre/Teléfono en fila en desktop y apilados en mobile, smoke test de envío completo (llenar campos → "¡Mensaje enviado!") sin romper nada.

## 2026-08-20 — Popup de WhatsApp ya no tapa contenido al hacer scroll (fix del pendiente de la auditoría UX)
- **Contexto:** hallazgo pendiente de la auditoría `ux-heuristics` (ver entrada de abajo, "Eliminada sección 'Nuestra sede' duplicada") — la burbuja de texto del botón flotante de WhatsApp se quedaba fija indefinidamente (`position: fixed`, sin auto-hide) y tapaba contenido/botones al hacer scroll, tanto en desktop como mobile.
- **Diagnóstico con skill `cro`:** el trigger (aparece 3s después de cargar la página, sin relación a scroll) está bien y no se tocó. El problema era puramente de colisión: la burbuja no tenía ningún mecanismo para dejar de superponerse al contenido una vez que el usuario empezaba a interactuar con la página.
- **Cambio:** en [FloatingWhatsApp.jsx](src/components/shared/FloatingWhatsApp/FloatingWhatsApp.jsx) se agregó un listener de `scroll` que oculta la burbuja de texto (`setShowHelper(false)`) apenas el usuario hace el primer scroll — sin marcarla como "dismissed" en `sessionStorage`, así que sigue apareciendo normalmente en la siguiente carga de página. El botón circular de WhatsApp (54px, esquina) permanece siempre visible; solo se oculta el bloque de texto ancho (hasta 280px) que era lo que causaba la superposición.
- Verificado visualmente en desktop y mobile (375px): la burbuja aparece a los 3s como antes, y desaparece de inmediato al primer scroll, sin tapar CTAs ni contenido. Sin errores de consola. No se corrió `npm run test:visual` (decisión explícita del usuario para minimizar tokens).

## 2026-08-20 — Eliminada sección "Nuestra sede" duplicada en Contacto (UX audit post-Miami)
- **Contexto:** tras eliminar la sede de Miami (ver entrada abajo), se corrió una auditoría UX (skill `ux-heuristics`, evaluación desktop + mobile-first) sobre la página de Contacto. Hallazgo: la sección "Nuestra sede" (antes comparaba WPB vs. Miami lado a lado) quedó redundante — la sección 2 (columna derecha junto al formulario) ya muestra la misma dirección con mapa interactivo, botón "Cómo llegar" y "WhatsApp Directo"; el Quick Action Bar repite teléfono/email/WhatsApp. En mobile el costo era mayor: una pantalla completa extra de scroll repitiendo info ya vista.
- **Cambio:** eliminada la sección completa "4. Locations: Side-by-Side Sede Details" (antes líneas ~489-545) de [Contacto.jsx](src/pages/Contacto.jsx) — incluye el heading "Nuestra sede", el badge "Ubicación activa" y la tarjeta con dirección/horario/contacto duplicados. La sección de FAQ pasa a ser la "4." (antes "5.").
- **Pendiente (fuera de alcance de este cambio, ciclo aparte):** el popup flotante de WhatsApp ("¿Lista para cuidar tu piel?") tapa contenido al hacer scroll en mobile (cubrió el botón "Interactuar con mapa" y el heading/intro de la sección eliminada) — hallazgo de severidad 3 (major) de la misma auditoría, no implementado aún.
- Verificado visualmente en desktop y mobile (375px) en el preview — sin `npm run test:visual` (decisión explícita del usuario para minimizar tokens).

## 2026-08-20 — Eliminada la sede de Miami en todo el sitio (nunca se abrió, cerrada/cancelada)
- **JSON-LD/schema (prioridad SEO local):** eliminado el `location`/`address` de Miami en `src/pages/Home.jsx` (Organization `@graph`), `src/pages/Contacto.jsx` (`mainEntity.location[]`), y en las 5 páginas de tratamiento `src/pages/treatments/{capilar,corporales,dental,faciales,laser}/[treatment].jsx` (array `provider.address`). Queda un único location: West Palm Beach.
- **Meta tags (title/description/OG/Twitter):** quitado "y Miami" en `Home.jsx`, `Contacto.jsx`, `Nosotros.jsx`, las 6 hub pages (`src/pages/hubs/*.jsx`) y las 3 landing pages (`src/pages/landings/*.jsx`).
- **UI visible:** `Navbar.jsx` y `FinalCTA.jsx` ahora muestran solo "West Palm Beach" (antes "West Palm Beach / Miami"). En `Contacto.jsx` se eliminó la tarjeta "DERMA.M Miami (Próximamente)" de la sección de sedes; el título pasó de "Nuestras sedes" (plural) a "Nuestra sede" (singular), intro ajustada a singular, y el grid pasó de `md:grid-cols-2` a una sola tarjeta centrada (`max-w-xl mx-auto`).
- **Datos:** `src/data/contactPage.js` — reescrita la respuesta de "¿Dónde están ubicados?" (quitada mención a Miami "próximamente") y eliminado el FAQ item "¿Atienden en Miami?". `src/data/legalPages.js` — quitado "Miami y"/"Miami and" de la cláusula de área geográfica (ES/EN) en la política de privacidad.
- **Archivos públicos:** `public/llms.txt` — quitada la sección `### Miami` y toda mención a Miami como segunda ubicación (archivo protegido por CLAUDE.md, editado tras confirmación explícita del usuario vía plan aprobado). `public/team/vcards/*.vcf` (9 archivos) — `NOTE:` cambiado de "West Palm Beach & Miami" a "West Palm Beach".
- **Verificación:** grep case-insensitive de "miami" en `src/` y `public/` da 0 resultados. Verificado visualmente en browser (Navbar, sección "Nuestra sede" sin hueco roto, FAQ sin la pregunta de Miami) — sin correr `npm run test:visual` (decisión explícita del usuario para minimizar consumo de tokens; queda pendiente correrlo manualmente si se desea una validación de regresión formal, especialmente por el cambio de grid en Contacto.jsx).
- `src/routes.jsx`, `public/sitemap.xml`, `public/robots.txt`: sin cambios — no tenían ninguna entrada específica de Miami.

## 2026-08-20 — Navbar mega menu order: Limpieza Facial Profunda moved to last
- `src/components/layout/Navbar/Navbar.jsx`: reordered "Tratamientos Destacados" list (desktop mega menu + mobile menu) so "Limpieza Facial Profunda" is last, after "PRP y Fibrina" and "Tratamientos Postoperatorios". Verified live in browser preview.

## 2026-08-20 — Copy edits (3 landings) + About page: removed founder background image, dropped Josey González, added Estética Dental team member
- **Copy edits in `src/data/landingPages.js`:**
  - `limpieza-facial-profunda` hero body → "Preparamos la piel para que tus productos en casa funcionen perfectamente, te asesoramos y guiamos en el proceso." (fixed subjunctive "funcionan"→"funcionen" per user request text).
  - `prf-y-fibrina` problem section body + list: body updated to mention "apariencia general de la piel"; list expanded from 6 to 9 items (added "Apariencia de manchas o tono desigual", "Marcas y textura asociadas al post-acné", "Piel con tendencia acneica, según valoración profesional").
  - `tratamientos-postoperatorios` hero body → "Acompañamiento profesional durante tu proceso postoperatorio, con técnicas manuales y drenaje no invasivo orientados a favorecer tu comodidad, bienestar y recuperación progresiva después de un procedimiento estético."
- **`src/components/templates/AboutPage/AboutPage.module.css`:** removed the desktop `.spotlightContent` background-image (`/assets/images/home/founder_logo.png` watermark behind Nancy Nieto's bio) at the `min-width: 1024px` breakpoint; replaced with solid `background-color: #F2F0F1` (Clinical Canvas, matching the existing mobile/base rule).
- **`src/data/aboutPage.js`:**
  - Removed the "Josey González" team member entry (Corporales & Postoperatorio group) — group now shows only Elianne Trujillo.
  - Added a new "Estética Dental" specialty group with one member, Dr. Miguel Ramos (odontólogo, 25+ años, ortodoncia/rehabilitación oral/blanqueamiento certificado). No photo/video asset yet — `mediaSrc`/`videoSrc` left undefined, which `MediaBlock.jsx` already renders as a clean fallback block (no code change needed there).
  - vCard activated: created `public/team/vcards/miguel-ramos.vcf` following the exact pattern of every other team member's vCard (same shared clinic phone `+15612535384`, only `FN`/`TITLE` differ) — confirmed by reading `mikaela-guajardo.vcf` and `tony-diaz.vcf` before writing. `vcardEnabled: true`, `vcardUrl: "/team/vcards/miguel-ramos.vcf"`.
- All changes verified live in the browser preview (dev server on :3000) after each edit — page text and one visual screenshot per change.

**Status:** done, user-approved (each change confirmed individually before moving to the next, per one-change-at-a-time rule).
**Next:** Dr. Miguel Ramos's photo/video asset is still pending — swap in `mediaSrc`/`mediaType`/`videoSrc` in `src/data/aboutPage.js` (Estética Dental group) once the asset is delivered.

## 2026-08-20 — Applied writing-for-agents principles to CLAUDE.md; AGENTS.md reduced to a pointer
- Ran `superpowers:brainstorming` + an LLM council review before editing, per this repo's mandatory process. Scope was deliberately kept to `CLAUDE.md` + `AGENTS.md` only — the 60+ duplicated skill reference files in `.agents/skills/`/`.claude/skills/` are out of scope, deferred to future individually-approved cycles.
- `AGENTS.md` rewritten from a near-duplicate of `CLAUDE.md`'s rules (with dead `file:///d:/Derma_Content/...` links to a different machine/drive) down to a 4-line pointer telling any agent/tool to read `CLAUDE.md` first.
- `CLAUDE.md` changes: `Commands` trimmed to the two non-obvious gotchas (dev server `--host=0.0.0.0`, visual tests need a server already on port 3003) instead of restating `package.json` scripts; the SEO/GEO/AEO/Local suite section cut from a Spanish 8-row command table to just the recommended workflow order + approval-gate rule (each skill's own `description` already serves as its pointer, so the table was pure duplication); the task-routing fallback note no longer points to `AGENTS.md` as an authoritative source (it's now just a pointer, not a fallback).
- The three mandatory governance rule blocks (near-final protection, superpowers-mandatory, one-change-at-a-time) were verified byte-identical before/after via `grep` — zero rule text changed.

**Status:** done, user-approved.
**Next:** none pending for this cycle. Future skill-file cleanup (SEO suite duplication across two dirs, or the other project-local skills) is a separate future request.

## 2026-08-20 — Saneamiento fino de la Suite Canónica (post-reset)
- Auditoría de las 8 skills nuevas encontró 3 problemas menores (mucho más leve que la suite anterior): 1 enlace roto (`ai-seo/SKILL.md` → `../../tools/REGISTRY.md`, archivo inexistente), 1 vestigio de marca del proveedor anterior (`User-Agent: palo-seco-seo/1.7.0` en 3 comandos `curl` de `seo-local/references/maps-free-apis.md`), y referencias colgantes en secciones "Related Skills"/"See also" apuntando a skills nunca importadas (`content-strategy`, `competitors`, `copywriting`, `analytics`, `signup`, `popups`, `ab-testing`).
- Corregido: enlace de `ai-seo` cambiado a ancla interna `#tools-registry`; User-Agent reemplazado por `EmpathoAI-LocalEngine/2.0.0 (contact@empathoai.com)` en las 3 ocurrencias; secciones "Related Skills" de `ai-seo`, `seo-audit`, `site-architecture`, `programmatic-seo` recortadas a solo las 8 skills activas del proyecto; la de `cro/SKILL.md` (ninguna entrada válida) eliminada por completo; 3 referencias sueltas equivalentes en archivos `references/` (`cro/references/form.md`, `programmatic-seo/references/playbooks.md`, `ai-seo/references/content-types.md`) también limpiadas.
- Verificado: el supuesto enlace roto `[/features/analytics](/features/analytics)` en `site-architecture/SKILL.md` no existe como link real — todas las apariciones son ejemplos de estructura de URL en texto/tabla o ya en backticks; no requería cambio.
- Sincronizados los 9 archivos editados entre `.claude/skills/` y `.agents/skills/`; `diff -rq` final confirma los 8 directorios de la suite byte-idénticos entre ambas ubicaciones.

**Status:** suite canónica 100% saneada según los 4 puntos solicitados por el usuario.
**Next:** ninguno pendiente; esperando próxima invocación real de alguna skill contra el sitio.

## 2026-08-20 — Reset completo: suite SEO reemplazada por la "Suite Canónica" sanitizada
- Purgadas las 11 skills SEO anteriores de `.claude/skills/` y `.agents/skills/`: `seo`, `seo-local`, `seo-audit`, `seo-content`, `site-brief-builder`, `keyword-fanout-map`, `seo-content-writer`, `onpage-optimizer`, `internal-link-architect`, `ai-visibility-checker`, `seo-checklist-65` (incluía la versión saneada v3.0.0-saneado del 2026-08-19, ya obsoleta).
- Copiadas 8 skills nuevas desde `F:\OS-skillsLibrary\12-OS-Seo-skills\canonical-suite\` a ambos directorios (`.claude/skills/` y `.agents/skills/`): `ai-seo`, `seo-audit`, `seo-local`, `seo-checklist-65`, `schema`, `site-architecture`, `programmatic-seo`, `cro`. Verificado `SKILL.md` presente en las 8 antes de copiar.
- Reescrita la sección `CLAUDE.md` → `## 🛠️ Suite Canónica de SEO, GEO, AEO & Local Maps` con la tabla de 8 comandos y el flujo recomendado (checklist-65 → seo-audit/schema → ai-seo → seo-local), reemplazando la tabla anterior (checklist / skills saneadas / pipeline de 5 pasos).
- Nota: 3 skills nuevas (`schema`, `site-architecture`, `programmatic-seo`, `cro`) no tienen aún entrada equivalente documentada en `MEMORY.md` más allá de la tabla de `CLAUDE.md` — no había pipeline de 5 pasos ni modo heurístico DataForSEO documentado para ellas en el material de origen recibido; no se inventó ninguno.

**Status:** suite canónica instalada y documentada en ambos directorios, no probada en vivo.
**Next:** esperando que el usuario invoque alguna skill de la nueva suite contra el sitio para validar comportamiento.

## 2026-08-19 — Saneamiento de la suite SEO/AEO ("Palo Seco" + modo heurístico)
- Auditoría de las 11 skills importadas encontró deuda técnica en 4 de ellas (`seo`, `seo-local`, `seo-audit`, `seo-content`): referenciaban ~20 sub-skills nunca importadas (`seo-technical`, `seo-schema`, `seo-geo`, etc.) y 5 scripts Python inexistentes (`google_auth.py`, `render_page.py`, `backlinks_auth.py`, `drift_history.py`, `google_report.py`), más una firma promocional automática ("Creado por Palo Seco / palos-seco.com") y una ruta de referencia rota en `seo-content` (`skills/seo/references/...` en vez de `../seo/references/...`).
- Reescribí las 4 (`v3.0.0-saneado`) para razonar directamente sin esa infraestructura fantasma: `seo` se consolidó en un único "Consultor Estratégico SEO/AEO" (sin orquestación a sub-skills/subagentes inexistentes), `seo-audit` hace el rastreo/análisis directo sin scripts, `seo-content` y `seo-local` tienen sus rutas de referencia corregidas y sus dependencias DataForSEO/FLOW convertidas a modo heurístico o eliminadas. Cada archivo lleva una nota "Nota de saneamiento" documentando qué se quitó y por qué. También limpié 2 referencias rotas dentro de `references/thinking-framework.md` y 4 dentro de `references/free-backlink-sources.md` (ambas cargadas por la skill `seo`).
- Añadí "Modo Heurístico / Input Manual" a las 3 skills del pipeline de 5 pasos que bloqueaban duro sin el conector DataForSEO (`keyword-fanout-map`, `internal-link-architect`, `ai-visibility-checker`) y ablandé `onpage-optimizer` para live URLs — ninguna bloquea ahora, todas etiquetan `⚠️ ESTIMADO` cuando no hay dato real y `ai-visibility-checker` mantiene la regla de nunca simular una respuesta de motor de IA (pide al usuario pegar la respuesta real en vez de inventar una).
- Actualicé `CLAUDE.md` → `## 🛠️ Suite de Habilidades SEO, AEO & Local Maps` reflejando la suite saneada (tabla reorganizada en checklist / skills estratégicas / pipeline de 5 pasos, nota de modo heurístico global para DataForSEO).
- Sincronizadas todas las ediciones entre `.claude/skills/` y `.agents/skills/` (verificación `diff -rq` final: 11/11 idénticas).

**Status:** suite saneada y documentada, no probada en vivo contra el sitio.
**Next:** esperando que el usuario invoque alguna skill SEO contra el sitio para validar el comportamiento en modo heurístico (sin DataForSEO conectado en este proyecto).

## 2026-08-19 — Imported SEO/AEO/Local skill suite
- Copied 11 skills from the central vault `F:\OS-skillsLibrary\12-OS-Seo-skills\` into both `.claude/skills/` and `.agents/skills/`: `seo-checklist-65`, `seo`, `seo-local`, `seo-audit`, `seo-content`, `ai-visibility-checker`, `internal-link-architect`, `keyword-fanout-map`, `onpage-optimizer`, `seo-content-writer`, `site-brief-builder`.
- Verified each has an intact `SKILL.md` and no broken absolute path references to the source vault.
- Documented the full suite in `CLAUDE.md` under `## 🛠️ Suite de Habilidades SEO, AEO & Local Maps`: command table, purpose per skill, and two recommended flows (audit flow and 5-step content flow).

**Status:** skills imported and documented, not yet invoked/tested.
**Next:** waiting on user to run one of the SEO skills against the live site.

## 2026-08-19 — Guardrails: superpowers mandatory, project protection, one-change-at-a-time
- Enabled `superpowers` plugin scoped to this project (`.claude/settings.json` → `enabledPlugins` + `extraKnownMarketplaces`, source `github.com/obra/superpowers-marketplace`). Previously only user-global.
- Registered in `CLAUDE.md` as mandatory: superpowers process skills (brainstorming, systematic-debugging, TDD, writing-plans, verification-before-completion, code-review) must be used before acting, every session.
- Registered in `CLAUDE.md`: project is near-final — no unrequested changes, no scope creep, explicit approval required before executing any plan, push back on illogical/risky requests instead of agreeing by default.
- Registered in `CLAUDE.md`: work one requested change at a time; on approval, update PROGRESS/DECISIONS/MEMORY and leave a clean tree before starting the next item.

**Status:** guardrails in place, no design changes made yet.
**Next:** waiting on user to specify which section/page to adjust first.

## 2026-08-19 — Repo setup
- Cloned `empathoai/DermaM_V2` into this working directory.
- Ran `npm install` (230 packages).
- Created `.claude/launch.json` so the dev server (`npm run dev`, port 3000) can be previewed.
- Created `CLAUDE.md` (architecture/commands guide for Claude Code).
- Installed `graphify` (project-scoped, Claude platform) and built the initial knowledge graph: `graphify extract src --no-cluster --out .` then `graphify cluster-only . --no-label` → 169 nodes, 497 edges, 8 communities.
- Installed memory persistence files: `MEMORY.md`, `PROGRESS.md`, `DECISIONS.md` (this set).

**Status:** repo running locally, no design changes made yet.
