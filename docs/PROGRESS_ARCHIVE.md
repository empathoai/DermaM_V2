# PROGRESS — ARCHIVE

Entradas de `PROGRESS.md` de sesiones cerradas, movidas aquí 2026-08-28 para aligerar el arranque de sesión. Newest-first, mismo formato. Consultar solo si se necesita historia; el trabajo vivo está en `PROGRESS.md`.


## 2026-08-29 — Ítem #6: cuña postop demand-gen — 3 FAQ en `/tratamientos-postoperatorios` (9 → 12) + spec GBP/ads
- **Cambio:** append de 3 ítems a `postoperatorios.faq.items` (`src/data/landingPages.js`), posiciones 10–12; los 9 existentes intactos. `tests/faq-consistency.spec.js` count `/tratamientos-postoperatorios` 9 → 12. `FAQPage.mainEntity` auto-derivado.
- **Ítems (derivados de 2 transcripts de video de ads de la clínica, 2026-08-29):** "¿Son suficientes 6 u 8 sesiones de masajes postoperatorios?" (mito → no; etapas) · "¿Por qué conviene continuar el acompañamiento después de que baja la inflamación?" (el drop-off; fase de reparación) · "¿Debo hacer drenaje postoperatorio si mi cirujano no me lo indicó?" (demand-gen core → consultar en el control). Marco de **dos fases** (activa intensiva + mantenimiento espaciado); el ítem viejo de "10 a 15 sesiones" **no se tocó**.
- **Coherencia ads ↔ sitio:** mismo mensaje de los videos alimenta la FAQ on-site y la spec de posts de GBP + copy base de Facebook ads (entregable A, **especificado no ejecutado**, para sesión Track B con la dueña logueada en GBP).
- **Compliance:** "prevenir endurecimientos/fibrosis/adherencias" + deferimiento al cirujano (OK per DECISIONS 2026-08-28). Fuera del sitio: "seromas" como gancho, "no pongas tu inversión en riesgo" — quedan solo para paid social a criterio de la clínica.
- **Verificación:** `faq-consistency` 12/12 · `npm run test:visual` **34/34 sin diffs** · cross-check `MEDICAL_COMPLIANCE.md` OK.
- Spec: `docs/superpowers/specs/2026-08-29-postop-demand-gen-wedge-design.md`. Diferido a `NEXT.md`: pieza "por qué el postoperatorio importa" (sección/ruta nueva, ciclo propio, condicional a tracción).


## 2026-08-29 — Ítem #5b: 4 FAQ comparativas en `/prf-y-fibrina` (8 → 12)
- **Cambio:** append de 4 ítems a `prfYFibrina.faq.items` (`src/data/landingPages.js`), posiciones 9–12; los 8 existentes intactos. `tests/faq-consistency.spec.js` count `/prf-y-fibrina` 8 → 12. `FAQPage.mainEntity` auto-derivado. Commit `293f8d2`.
- **Ítems:** "¿El PRF es mejor que el PRP?" (posiciona el PRF como evolución por **mecanismo** — matriz de fibrina → liberación sostenida vs liberación inicial única; **sin claim de superioridad** en el body) · "¿El PRF ayuda con las marcas del post-acné?" (deriva de `problem.list`) · "¿Hay personas que no deberían hacerse PRF?" (contraindicaciones, deriva del ítem 8) · "¿En qué zonas del cuerpo puede aplicarse el PRF?" (rostro + contorno de ojos/boca, escote, manos, orejas, cuero cabelludo — lista confirmada por la dueña).
- **Alcance recortado:** ítem #5a de la spec (secciones comparativas vs PRP/fillers/PDGF + tabla) **descartado** tras review — la FAQ ya carga la intención comparativa y una tabla médica "X vs Y" abría un tipo de sección nuevo en `LandingPage` + baseline + exposición a claim de superioridad, sin justificarse en un sitio near-final. Sin PDGF (sin fuente vetada). Sin ángulo "West Palm Beach" en respuestas (sin fuente + roza claim de foto-daño + geo ya cubierto por schema/H1).
- **Verificación:** `faq-consistency` 12/12 · `npm run test:visual` **34/34 sin diffs** (snapshot de la landing = Viewport, no la FAQ — sin re-baseline) · cross-check `MEDICAL_COMPLIANCE.md` OK.
- Spec/plan: `docs/superpowers/{specs,plans}/2026-08-29-prf-landing-faq-comparative-cluster*`. Cierra el ciclo hijo #2 de la spec de estrategia PRF.


## 2026-08-28 — Ítem #5: estrategia de contenido PRF consolidada (doc interno, sin cambio on-site)
- **Cambio:** se escribió `docs/superpowers/specs/2026-08-28-prf-content-strategy-design.md` — consolida en una sola spec el research disperso (`COMPETENCIA-SERVICIOS-2026.md` §1a/§S1/§S5/§S7 + `INTAKE.md:188-190`, que decía textual "estrategia no resuelta"). **Cero cambios en `src/`, schema, archivos protegidos o baselines visuales.** `docs/` es gitignored → la spec vive en disco; solo se commitean PROGRESS/DECISIONS/NEXT.
- **Posición fijada:** (1) defender/ensanchar el término ES completo "Plasma Rico en Plaquetas y Fibrina (PRF)" (Derma.M ya #1 sin geo); (2) apropiarse del cluster informacional/comparativo ("qué es el PRF", "PRF vs PRP", "vs fillers", "vs PDGF", "duración") — 0 competencia local; (3) NO pelear `PRP facial`/`vampire facial`/`bioestimulación` (saturado); (4) PRPF nunca, PRP pelado nunca (mercado ortopédico).
- **Arquitectura de contenido:** enriquecer el landing existente (secciones comparativas + tabla) + expandir FAQ; **sin ruta nueva ahora**. Guía pilar y página EN quedan condicionales a que el landing enriquecido rankee / a que el tráfico EN de ads convierta.
- **Ads = capa especificada, no ejecutada:** Google Search (captura de intención) + Meta (demand-gen real, audiencias latinas South FL); ambos al mismo landing ES bilingüe. El doc define ángulos/audiencias/términos; el gasto y la operación de campañas son decisión del usuario, ningún ciclo hijo invoca el MCP de Meta Ads.
- Spec §8 lista los 4 ciclos hijo (cada uno brainstorm→aprobación→1 cambio). **Ítem #5 cerrado como estrategia registrada.** (Ciclo hijo #2 ejecutado 2026-08-29, ver `PROGRESS.md`.)


## 2026-08-28 — FAQ #4 (pág. 2/2): 4 ítems PAA en `/tratamientos-postoperatorios` — **ítem #4 cerrado**
- **Cambio:** append de 4 ítems a `postoperatorios.faq.items` (`src/data/landingPages.js`), posiciones 6–9; los 5 existentes intactos. `tests/faq-consistency.spec.js` count `/tratamientos-postoperatorios` 5 → 9. `FAQPage.mainEntity` auto-derivado. Commit `7d6126d`.
- **Ítems:** "¿Qué pasa si no me hago los masajes de drenaje…?" · "¿Cuánto tiempo dura el proceso…?" (timeline, distinto del ítem de nº de sesiones) · "¿Puedo hacerlo si me operé en otra clínica?" (conecta con la cuña demand-gen §S7) · "¿El drenaje ayuda a prevenir la fibrosis?". Fraseo confirmado con 2 web searches ES; respuestas derivadas de `problem`/`benefits`/`howItWorks`/`quickFacts` vetados.
- **Compliance (página más pesada):** "prevenir la fibrosis" permitido (el usuario lo confirmó; ya es título de beneficio); **prohibido "cura/trata/elimina/resuelve la fibrosis"**; sin claims de complicación médica (seroma/trombosis); deferimiento al cirujano en 6/8/9. Ver `DECISIONS.md`.
- **Verificación:** `faq-consistency` 12/12 · `npm run test:visual` **34/34 sin diffs** (snapshots de la landing = Viewport + carrusel, no la FAQ — sin re-baseline).
- Spec/plan: `docs/superpowers/{specs,plans}/2026-08-28-postoperatorios-faq-paa*`. **Cierra el ítem #4 de la cola completo** (PRF en #3, limpieza `b7a6452`, postop `7d6126d`).


## 2026-08-28 — FAQ #4 (pág. 1/2): 3 ítems PAA en `/limpieza-facial-profunda`
- **Cambio:** append de 3 ítems a `limpiezaFacial.faq.items` (`src/data/landingPages.js`), posiciones 7–9; los 6 existentes intactos. `tests/faq-consistency.spec.js` count `/limpieza-facial-profunda` 6 → 9. `FAQPage.mainEntity` auto-derivado del array (sin editar schema). Commit `b7a6452`.
- **Ítems:** "¿Para qué sirve una limpieza facial profunda?" · "¿Cuánto dura la sesión?" · "¿Cuál es la diferencia entre una limpieza facial básica y una limpieza facial profunda?". Fraseo confirmado con 2 web searches ES (PAA reales); respuestas derivadas verbatim-en-espíritu de `problem.body`/`benefits`/`quickFacts`/`howItWorks` ya vetados; cierre relacional (§S7: "te valoramos, te explicamos"). Sin claims nuevos, sin banned words, sin garantías, sin competidor nombrado.
- **Decisión de método:** `/llm-council` (2026-08-28) descartó el ciclo "4a" de captura vía Apify — los seeds EN del findings doc §189 + un pase manual ES de ~15 min son insumo suficiente (mismo patrón que el ciclo #3 PRF). Sin ítem de precio (el sitio no publica precios). Ver `DECISIONS.md`.
- **Verificación:** `faq-consistency` 12/12 · `npm run test:visual` **34/34 sin diffs** (el snapshot "Limpieza Facial Landing" es una sección, no la FAQ — sin re-baseline).
- Spec: `docs/superpowers/specs/2026-08-28-limpieza-facial-faq-paa-design.md` · Plan: `docs/superpowers/plans/2026-08-28-limpieza-facial-faq-paa.md`. Cierra la pág. 1 del ítem #4; falta `/tratamientos-postoperatorios`.

## 2026-08-28 — Track A #3: naming PRF canónico "(PRF)" + reescritura de la FAQ del PRF landing
- **Naming (delta sobre lo propagado el 2026-08-27):** se agrega el paréntesis "(PRF)" a la forma canónica en superficies de contenido/structured data — `PrfYFibrina.jsx` `<title>`/`og:title`/`twitter:title` ("Plasma Rico en Plaquetas y Fibrina (PRF) | Derma.M", ~48c), `Service` schema `name` + nuevo `alternateName: ["PRF", "Platelet-Rich Plasma & Fibrin (PRF)"]`, `BreadcrumbList` pos 3; `landingPages.js` `hero.title` (H1) → "…Y FIBRINA (PRF)"; `organizationSchema.js` `knowsAbout` "(PRP y PRF)" → "(PRF)"; `public/llms.txt:39` (protegido, línea aprobada) "PRP & Fibrin" → "Platelet-Rich Plasma & Fibrin (PRF)". Nav/footer/`FeaturedServices`/card de `categoryPages` quedan con el nombre ES completo **limpio** (sin paréntesis) — best practice: el paréntesis se gana su lugar en H1/title/schema, no en el chrome.
- **"PRPF":** verificado ausente de `src/` y `llms.txt` — nada que matar on-site. **"PRP" pelado:** se mantiene solo en las 2 FAQ que explican la diferencia PRP/PRF (prosa técnica legítima) y en el disclaimer legal.
- **FAQ del PRF landing reescrita** (pedido del usuario, mismo ciclo): 7 → 8 ítems. Voz de búsqueda (no voz de marca), respuesta directa en la 1ª frase, cada Q→A autocontenida. Fusionados los 2 ítems casi-duplicados de comparación; `#1` compuesto → dividido en "¿Qué es?" + "¿PRP vs PRF?". Nuevos ítems de intención alta (PAA findings doc §189): "¿El PRF es lo mismo que los rellenos (fillers)?", "¿Cuánto tardan en verse los resultados y cuánto duran?", "¿Qué efectos secundarios puede tener?" (consolida el ítem suelto de hematomas). 1ª mención del bloque con la forma canónica completa "Plasma Rico en Plaquetas y Fibrina (PRF)". Copy derivada de las respuestas vetadas existentes — sin claims nuevos, sin banned words, sin garantías, sin listar contraindicaciones específicas. `faq-consistency.spec.js` count `/prf-y-fibrina` 7 → 8.
- **Verificación:** `test:visual` + `faq-consistency` **34/34 sin diffs** (el snapshot de la landing es el `problemSection`, no el hero ni la FAQ). DOM: 6 superficies de naming con "(PRF)", `FAQPage.mainEntity` = 8, 8 preguntas nuevas renderizando. Screenshot hero: "(PRF)" cae en la 3ª línea del H1, sin romper layout. Commit `cb53307`.
- Spec: `docs/superpowers/specs/2026-08-28-prf-canonical-naming-design.md`. Cierra el ítem #3 de la cola; el #4 (FAQ desde PAA) queda hecho para el PRF landing, pendiente para limpieza + postop.
- **Follow-up `72851b3`:** ítem #3 de la FAQ ahora incluye el término genérico "PRP facial" (2 líneas, informativo, no marca — "Vampire Facial®" sigue vetado por decisión + legal). Sin ítem nuevo, count 8 sin cambios. `faq-consistency` 12/12.

## 2026-08-28 — Track A #2: sub-tag de hero `West Palm Beach, FL` con fuente única
- **Hallazgo:** la ciudad ya estaba dentro del `<h1>` (`PageHero.jsx:70-73`, `localTag` = `<span>` hijo). §S5.2 del findings doc quedó obsoleto. El trabajo real: consistencia NAP + fuente única.
- **Audit:** `"Medical Spa · West Palm Beach"` duplicado en ~10 call sites (literal en `LandingPage.jsx` + `TreatmentDetailPage.jsx` + `Hero.jsx` de Home; dato en `categoryPages.js` ×6 + `aboutPage.js`).
- **Cambio:** nuevo `src/data/siteMeta.js` → `HERO_LOCAL_TAG = 'Medical Spa · West Palm Beach, FL'`; ~10 call sites la importan. `FL` alinea hero ↔ `<title>` de Home ↔ GBP ↔ footer. Prosa/meta/schema (`addressLocality`, `areaServed`) intactos. `/nancy-nieto` sin sub-tag.
- **Verificación:** 6 superficies muestran el string nuevo; `grep` → solo `siteMeta.js`; `test:visual` 34/34 sin diffs (", FL" dentro de la tolerancia del 2%). Commit `4a4603e` (+ fix hash `f6fb98b`).
- Spec: `docs/superpowers/specs/2026-08-28-hero-localtag-city-state-consistency-design.md`.

## 2026-08-28 — Track A #1: "deep cleansing facial" como término target EN en `/limpieza-facial-profunda`
- **Fuente:** `docs/seo-setrategies/COMPETENCIA-SERVICIOS-2026.md` §S5.4 + Stage 3 (scrape Apify de webs de competencia). "deep cleansing facial" es término de búsqueda real y ningún competidor de WPB titula una página con el término verbatim → hueco competitivo.
- **3 capas, aditivo, footprint mínimo** (español-first, sin tocar copy español ni above-the-fold): `LimpiezaFacial.jsx` → `description`/`og`/`twitter` (×3) con el término al frente (135c) + `Service.alternateName: "Deep Cleansing Facial"`; `<title>` **intacto** (el paréntesis lo pasaba de ~60c → truncado en SERP). `landingPages.js` → 6º ítem de FAQ español (puente de equivalencia, sin comillas) → entra al `FAQPage` schema. `public/llms.txt` → línea 38 label `Deep Facial Cleansing` → `Deep Cleansing Facial`. `faq-consistency.spec.js` → count 5 → 6.
- **Verificación:** `test:visual` + `faq-consistency` 34/34 sin diffs; DOM (title sin cambios, 3 description alineadas, `alternateName` OK, `FAQPage.mainEntity` = 6); browser pane OK; compliance OK. Commit `91bed37` (+ fix hash docs `47cb3b5`).
- Spec: `docs/superpowers/specs/2026-08-28-deep-cleansing-facial-en-term-design.md`.

## 2026-08-28 — Arquitectura de contenido del founder · Ciclo 3: `/nosotros/nancy-nieto` standalone
- `founderBioPage` en `src/data/aboutPage.js` reescrito como objeto **standalone** — sin referencias a `aboutPage.*` (se saca el puente inline `founderPhilosophy` de la Task 2b). Secciones propias: `hero` / `historia` / `filosofia` / `dermamYAcademy` / `quote` (solo la larga) / `cta`. Copy verbatim del mensaje de la clínica del 2026-08-28.
- `FounderBioPage.jsx`: sección 2 pasa de "Founder Spotlight" a **Historia y formación** (mismo layout foto+texto, Clinical Canvas, `historia.*`, foto `/assets/images/home/founder.jpg`); sección 3 **Filosofía + cita larga** (`filosofia.*`, Dark Authority); nueva sección 4 **DERMA.M y DERMA.M Academy** (Off-White `#EFEFEB`, eyebrow + línea + `<h2>` + 2 párrafos, sin imagen); FinalCTA sin cambios.
- `FounderBioPage.module.css`: clases `.academy*` nuevas al mismo type-scale que `.philosophy*`; `.academySection` sumada al bump de padding en `min-width:1024px`. Sin restyle de clases existentes.
- `SectionHeader` acepta `titleId` → la Filosofía queda con `aria-labelledby`. Orden de headings limpio: 1×`<h1>` + `<h2>` por sección.
- `MEMORY.md` "Founder bio page": la línea "reuses `aboutPage.founderSpotlight`… by reference" ya no aplica — actualizada a "standalone object".
- `test:visual` 34/34 (incl. `nancy-nieto-viewport` — sin diff, el cambio de hero body queda dentro de tolerancia). Compliance OK: "tratamientos seguros, éticos y orientados a resultados reales" aparece 1× como visión fundacional de Nancy, sin números de licencia. Commit `45e7a5c`.
- **Cierra el plan founder-content-architecture** (Ciclos 1 + 2 + 2b + 3, todos pusheados).

## 2026-08-28 — Arquitectura de contenido del founder · Ciclo 2b: podar footprint de fundadora en `/nosotros`
- Review en vivo del Ciclo 2: seguía recargado y con **dos** bloques de fundadora (Spotlight + sección "enfoque" con su cita). Steer del usuario: `/nosotros` = **el equipo y cómo trabaja**; todo lo de Nancy-persona va a `/nancy-nieto`.
- **Founder Spotlight → mínima:** foto + `FUNDADORA Y DIRECTORA` + `NANCY NIETO` + línea de credenciales + **una** frase de origen ("DERMA.M nació de su visión de una estética responsable, cercana y guiada por la formación continua.") + `Conoce más sobre Nancy →`. Se quitan el párrafo de visión, la línea "Para Nancy…" y la mención de Academy (data + JSX).
- **Sección enfoque → banda corta:** eyebrow `CÓMO TRABAJAMOS`, heading `TRES PASOS EN CADA PLAN DE CUIDADO`, solo los 3 pilares (`BenefitColumns variant="dark"`). Se quitan `body`, `supportingText` y el `<blockquote>` de Nancy.
- `founderBioPage.founderPhilosophy` pasó a objeto inline (puente `ESCUCHAR ANTES DE RECOMENDAR` hasta que el Ciclo 3 reescriba el export). **Academy: sin mención en `/nosotros` en el interín** (decisión del usuario, opción 1) — aparece solo en `/nancy-nieto` en el Ciclo 3.
- `test:visual` 34/34 (solo baseline `nosotros-founder-with-link-mobile-safari` regenerado). Commit `ad2be76`.
- Orden final `/nosotros`: Hero → Founder Spotlight (mínima) → Cómo trabajamos (3 pasos) → Equipo → Testimonios → FinalCTA.

## 2026-08-28 — Arquitectura de contenido del founder · Ciclo 2: `/nosotros` reestructurado
- **Ciclo 2 re-scopeado** (tope de `/nosotros` = mezcla sin progresión): de "trim + sub-H1" a "reestructurar + reescribir".
- Fusión "Founder Philosophy" + "Approach" (la tríada se decía 3×) → una sección oscura. Eliminado el bloque de conversión anidado + la sección `DERMA.M Academy`. Hero `body` reescrito + `localTag: "Medical Spa · West Palm Beach"`. `aboutPage.js` −127/+34. Commits `5223f2d` + `c1cf90a`.

## 2026-08-28 — Arquitectura de contenido del founder · Ciclo 1: Home `FounderSection`
- Spec + plan en `docs/superpowers/{specs,plans}/2026-08-28-founder-content-architecture*` — reparto de "beats" de Nancy en 3 superficies (Home = primer, `/nosotros` = puente, `/nancy-nieto` = persona completa), funnel de profundidad progresiva. 3 ciclos.
- **Ciclo 1 (Home):** `FounderSection` de 3 párrafos hardcodeados → línea de credencial + 1 frase relacional + link de salida "Conoce a Nancy y al equipo →" a `/nosotros` (era dead-end en la 2ª sección). Copy movida a `src/data/aboutPage.js` (`founderPrimer`). Baseline `home-founder` (desktop+mobile) regenerado. Commits `fd39a56` + `c3421d5`.

## 2026-08-28 — Track B GBP: 12 servicios nuevos + categoría + descripción del profile
- **Relevamiento:** la sección Services del GBP NO estaba flaca — ~80 entradas en 5 categorías, cargadas por Nancy (varias fuera del sitio: Ultherapy, exosomas, PDRN/salmón). Track B se re-scopeó de "agregar 3" a **"cruzar sitio↔GBP y agregar solo los gaps reales, sin borrar ni renombrar nada de Nancy"**.
- **12 servicios nuevos** (cada uno con descripción ≤300c derivada del `whatIsBody`, compliance-check, todos pending review): Medical spa → IV therapy, Microneedling, Tratamiento capilar. Facial spa → Plasma frío facial, Carboxiterapia facial, Radiofrecuencia facial. Massage spa → Carboxiterapia corporal, Levantamiento de glúteos sin cirugía, Marcación abdominal no invasiva, HIFU corporal, Tratamiento de estrías y celulitis, Lipo 360 estético.
- **Categoría secundaria `Skin care clinic`** agregada (pending). Las 5 previas intactas.
- **Descripción del profile reemplazada** (pending). Verificada contra la guía de Google: ≤750c, sin URLs/tel/enlaces, sin promo/precios, +antigüedad ("desde 2021"), CTA suave sin nombrar canal, naming PRF canónico.

## 2026-08-28 — Validación del mapa de redirects viejo→nuevo contra el `.htaccess`
- **Inventario autoritativo del sitio viejo:** `wp-sitemap.xml` (58 URLs) + `site:` de Google (~32 indexadas) + `curl -L` con `<title>` real (el WP sirve 200 en páginas inexistentes → soft-404, no se valida por status). Todas las indexadas resuelven.
- **2 fallas en el `.htaccess` existente:** (1) el bloque de 301s legacy estaba **debajo** del fallback SPA `RewriteRule . /index.html [L]` → ningún 301 se ejecutaba; (2) 27 URLs vivas sin regla (23 páginas de tratamiento + 4 posts lorem ipsum).
- **Deliverable:** `docs/seo-setrategies/REDIRECT-MAP-VALIDATION-2026.md` — inventario, mapa old→new reconciliado (§5), 7 decisiones de mapeo (§7), y el `.htaccess` **completo listo para aplicar** (§8, reordenado + 27 reglas nuevas) + script `curl -I` de verificación post-deploy. `public/.htaccess` NO se tocó (protegido, se aplica el día del deploy).
- **Host confirmado:** Hostinger/Apache (no Vercel). `INTAKE.md:56` quedó stale → corregir en próximo pase de doc-hygiene. `DECISIONS.md` +1 entrada.

## 2026-08-28 — Research de competencia + servicios (Apify) + cross-análisis de reseñas · Track B parcial
- **Track B GBP (parcial, sesión con usuario logueado):** gap 1 website field `http://www.` → `https://dermamskinhealth.com/` guardado (pending). Gap 2 service area (estaba vacío) → `West Palm Beach` + `Palm Beach County` guardado (pending). Gap 3 profile strength: "Botox" se mantiene (decisión — el médico sí hace inyectables; corregido `MEDICAL_COMPLIANCE.md` L20 + `DECISIONS.md`).
- **Research Apify (~$5-6 one-off, 4 etapas):** 43 queries por-servicio → set de competidores fragmentado en 4 mercados (med spa / facial-spa studios / PRF-regen-med / postop-masajistas); 14 perfiles profundos + 14 sitios + capa AEO. Whitespace PRF confirmado (0 resultados en "que es prf/prpf", `PRPF` no lo parsea Google, DERMA.M ya #1 en "plasma rico en plaquetas y fibrina" sin geo). Doc: `docs/seo-setrategies/COMPETENCIA-SERVICIOS-2026.md`.
- **Deliverable:** 3 GBP Services Tier 1 redactados (limpieza facial, postop, PRF) + descripción de profile reescrita (744c) + naming PRF canónico ("Plasma Rico en Plaquetas y Fibrina (PRF)", matar PRPF) + framework de tiering ROI+cultural para el portafolio completo + gap de categoría `Skin care clinic`.
- **Cross-análisis 130 reseñas DERMA.M:** 4.9★/130 real (8.20). Tiering confirmado (faciales 22, postop/corporal 13+10, PRF solo 3). Hallazgo: diferenciador = **relacional** (trato/escuchan 41%, confianza 35%) > resultados (17%). Respuestas del dueño 85% (NO es gap). 2 negativas operativas (agenda + faja postop). Nancy nombrada en 15%.

## 2026-08-28 — A11y: `alt` del overview de los 6 hubs → Title Case
- `CategoryPage.jsx:61` `alt={overview.headline}` (MAYÚSCULAS crudas de `categoryPages.js`) → `alt={titleCase(overview.headline)}` + import de `src/utils/text`. Mismo helper que `TreatmentSEO`/`CategorySEO`. `<h2>` visible intacto (uppercase por CSS). Verif: alt Title Case en `/faciales` + `/iv-therapy`, console limpia, `playwright` 34/34 sin diffs.

## 2026-08-28 — Workflow lean: `NEXT.md` + reglas de arranque/cierre en `CLAUDE.md` (principios Musk + writing-for-agents)
- **Problema:** arranque de sesión ~40k tok en re-leer PROGRESS/DECISIONS/INTAKE enteros + CLAUDE.md/MEMORY.md ya inyectados; handover prompt duplicaba PROGRESS. Análisis con el algoritmo de 5 pasos de Musk (cuestionar requisito → borrar → simplificar → acelerar → automatizar) y la skill `writing-for-agents`.
- **Nuevo `NEXT.md` (raíz):** lista ordenada de próximos pasos + HEAD esperado + estado del árbol + bloqueos + infra resuelta. ~25 líneas. **Único read de planificación al arrancar.** Reemplaza el "handover prompt" como artefacto.
- **`CLAUDE.md`:** sección "Memory" reescrita (12→10 líneas, sin pasos duplicados): arranque = `NEXT.md` + top de `PROGRESS.md`, nada más; `DECISIONS.md` sale del read de arranque → grep-on-demand (archivo de *por qué*); no re-leer lo auto-inyectado. "One change per cycle": +paso "refrescar `NEXT.md`", +carve-out para cambios triviales (1 línea en PROGRESS, sin `DECISIONS.md`).
- **Auto-memoria:** `feedback_cierre_de_sesion_proactivo` — "handover prompt" → "refrescar `NEXT.md`" (+ índice `MEMORY.md`).
- **Parkeado (paso 5, automatizar):** script `session-start` (imprime NEXT + `git log -1` + `git status`), hook post-commit → entrada de PROGRESS. Split de `INTAKE.md` en STATE + Q&A: opcional, baja prioridad (está en `docs/` gitignored).
- Sin cambios de código de app. Combinado en el mismo commit que la doc-hygiene de `PROGRESS.md`/`PROGRESS_ARCHIVE.md`.

## 2026-08-28 — Revisión E: los 25 `heroDescription` reescritos beneficio-primero desde el `whatIsBody`
- **`heroDescription` ×25 rehechos** (commit `96c166d`, revisa `d247b54`). Problema del primer intento: las oraciones eran síntesis propia y metían datos no vetados (p. ej. "exfoliación" en hidrofacial, "microagujas **finas**"). El usuario lo marcó — más lógico derivarlas del `whatIsBody` (sección "EL PROTOCOLO"), ya redactado con el protocolo real de Derma.M y ya con compliance C1.
- **Método nuevo:** cada `heroDescription` = compresión de la 1ª/2ª oración del `whatIsBody` de esa página, **reordenada beneficio-primero** (CRO): cláusula de resultado → mecanismo comprimido → reaseguro ("sin cirugía", "pensado para pieles sensibles"). Los *caveats* honestos del `whatIsBody` ("sin eliminarlas por completo", "no recupera folículos", "no reemplaza tratamientos periodontales") quedan **fuera de la cabecera** (siguen en `whatIsBody`/FAQ). Cero hechos nuevos.
- **`whatIsBody` / `whatIsHeadline` / `problemContextBody` NO se tocaron** — solo el valor de `heroDescription`.
- Verificación: 25 presentes, sin palabras prohibidas, ninguna > 28 palabras; 2 heros revisados en browser. `npm run test:visual` → falló `hidrofacial-problem-mobile-safari` por shift vertical (el hero de hidrofacial quedó 1 línea más alto → la sección `problem` se desplaza; `problemContextBody` intacto, diff = translación pura). Regenerado ese único baseline; suite 22/22.
- Dev server `:3000` levantado.

## 2026-08-28 — Heros efectivos: sub-línea local en tratamientos+landings (A) · eyebrow de landings (B) · heroDescription ×25 (E)
- **A — sub-línea local en el `<h1>` de 25 tratamientos + 3 landings** (commit `6cc98e3`). `TreatmentHero.jsx` gana prop opcional `localTag` → `<span className={styles.localTag}>` dentro del `<h1>` (mismo patrón que `PageHero` en Fase 2). `.localTag` en `TreatmentHero.module.css` (`display:block`, `margin-top` 1/1.25rem, 15/16px, `letter-spacing:0.12em`, `weight:400`, `#CCC9C1`; uppercase heredado de `.title`). `TreatmentDetailPage.jsx` y `LandingPage.jsx` pasan el literal `"Medical Spa · West Palm Beach"`. Cierra la asimetría que quedó tras Fase 1/2: el patrón entidad+locale-en-el-heading ahora cubre **todo el sitio** (Home + 6 hubs + 25 tratamientos + 3 landings). Sin regen de baselines: los snapshots de landings capturan la sección `problem`, no el hero; `hidrofacial-whatis` es section-scoped.
- **B — eyebrow de las 3 landings** (commit `2a5d851`): `TRATAMIENTO DESTACADO` (relleno idéntico ×3) → categoría del hub padre verbatim: `limpiezaFacial` + `prfYFibrina` → `TRATAMIENTOS FACIALES`; `postoperatorios` → `TRATAMIENTOS CORPORALES`. Solo data en `landingPages.js`. Coincide con el eyebrow del hub → consistencia del sistema de heros + keyword de categoría (la que el `<h1>` = nombre del tratamiento no tiene). Se descartó términos descriptivos ("bioestimulación facial" = jerga/volumen ~0) y quitarlo (movería el layout de `PageHero`).
- **E — `heroDescription` en las 25 páginas de tratamiento** (commit `d247b54`): el sub-copy del hero pasó de fragmento telegráfico sin verbo (*"Remodelación de textura y poros."*) a una oración completa (~12–22 palabras). Campo **opt-in** `customDetails['<slug>'].heroDescription`; builder `heroDescription: custom.heroDescription || description`; `TreatmentDetailPage` pasa `description={heroDescription}` al hero. El `description` corto **se conserva** para `specs['Objetivo principal']` (celda de tabla), la interpolación de `whatIsBody` y las cards de "Te puede interesar". Las 25 oraciones revisadas contra `docs/MEDICAL_COMPLIANCE.md` (sin palabras prohibidas, sin promesa de resultado, sin diagnóstico/cura); `tratamiento-acne`/`manchas-cicatrices` chequeadas específicamente (mejora de aspecto, no cura). El `disclaimer` ("Requiere valoración previa…") ya se renderiza aparte en el hero → `heroDescription` no lo repite.
- **Verificación:** `document.querySelector('h1 span')` con el texto exacto en 3 tratamientos + 3 landings; 375/1280 sin overflow. `h1.nextElementSibling` = la nueva oración de `heroDescription` en 3 páginas variadas. Scan de las 25: sin palabras prohibidas, ninguna > 185 car. `git grep "TRATAMIENTO DESTACADO"` = 0. `npm run test:visual` 22/22 sin diffs en las 3 corridas (A, B, E). Console limpia.
- Spec/plan en `docs/superpowers/{specs,plans}/2026-08-28-heros-efectivos-A-B-E*` (gitignored).
- Dev server `:3000` queda levantado.

## 2026-08-28 — Hubs: `CollectionPage` + `BreadcrumbList` (componente `CategorySEO`)
- **Nuevo `src/components/shared/CategorySEO/CategorySEO.jsx`** (commit `65cf300`, espejo de `TreatmentSEO`): único owner del `<head>` de un hub. Emite title/desc/canonical/OG/Twitter/robots + `@graph` = `CollectionPage` (`@id #webpage`, `isPartOf → #website`, `about → #organization`) + `BreadcrumbList` (`@id #breadcrumb`, 2 niveles desde `data.breadcrumb`). El `ItemList` (dentro de `CollectionPage.mainEntity`, solo si hay ítems) se **deriva** de `data.featuredTreatments.treatments` (`t.to || t.link`, URL absoluta), `name` = `t.listName || minorWords(titleCase(t.title))`. `complementaryTreatments` se ignora (sus CTAs van a `/contacto`). Helper local `minorWords()` — baja "de/y/en/…" a minúscula cuando no son la 1ª palabra (respeta el nombre canónico "Plasma Rico en Plaquetas y Fibrina"; no toca el `titleCase` compartido).
- **Los 6 `src/pages/hubs/*.jsx`** pierden su `<Helmet>` inline duplicado (~40 líneas c/u) y su `import Helmet`; agregan `<CategorySEO data={categoryPages.<key>} />`. `Navbar`/`main`/`CategoryPage`/`Footer` intactos.
- **`src/data/categoryPages.js`**: `metaTitle` + `metaDescription` en los 6 hubs (verbatim de los `<Helmet>` actuales); `listName: 'IPL'` en la entrada IPL de `laserYLuz` (`titleCase('IPL')` daría `'Ipl'`). El campo `breadcrumb` (ya existía, `CategoryPage` lo destructuraba sin usar) ahora se consume.
- **Riesgos eliminados frente a Google:** (1) `ivTherapy` tenía 11 `ListItem` → todos a `/iv-therapy` (schema inválido) → ahora `CollectionPage` sin `ItemList`. (2) `ItemList` hand-maintained ×6 con drift → derivado de fuente única. Verificado: `corporales` hand-list estaba desactualizada (listaba "Maderoterapia Corporal", que es card `/contacto`, y omitía "Tratamientos Postoperatorios", card destacada nº1) → la derivada matchea la grilla visible.
- **`BreadcrumbList` nuevo en los 6 hubs** (antes ninguno lo tenía; tratamientos y landings sí vía `TreatmentSEO`).
- **Verificación:** DOM/JSON de los 6 hubs en browser pane — `ldCount === 1` (sin doble Helmet), `@graph` = `[CollectionPage, BreadcrumbList]`, `document.title`/canonical/`og:title` === valores actuales exactos, IV sin `ItemList`, faciales 14 ítems, láser incluye "IPL", breadcrumb correcto. `/capilar/tratamiento-capilar` resuelve (página real). `npm run test:visual` 22/22 sin diffs. Console solo con ruido de websocket HMR de vite, cero errores de app. (`titleCount === 2` es pre-existente: `index.html:6` trae un `<title>` estático + el de Helmet; el código viejo se comportaba igual.)
- **Impacto:** SEO (schema válido + breadcrumb en SERP + tipado `CollectionPage`), GEO/AEO (mapa máquina-legible correcto de cada categoría), mantenimiento (drift imposible). Higiene, no palanca de ranking. Cero cambio visible/UI.
- Spec/plan en `docs/superpowers/{specs,plans}/2026-08-28-hubs-collectionpage-breadcrumb*` (gitignored).
- Dev server `:3000` queda levantado.

---
## 2026-08-28 — #5 Fase 2: sub-línea local en el H1 de los 6 hubs + `<title>` de Home a "Medical Spa"
- **Sub-línea local en el `<h1>` de los 6 hubs** (commit `ed0e61b`). Prop opcional `localTag` en `PageHero.jsx` → `<span className={styles.localTag}>` dentro del `<h1 className={styles.title}>`, solo si viene. `.localTag` en `PageHero.module.css`: `display:block`, `margin-top:1rem` (1.25rem ≥1024px), `15px`/`16px`, `letter-spacing:0.12em`, `font-weight:400`, `color:#CCC9C1` (uppercase heredado de `.title`). `CategoryPage.jsx` pasa `localTag={hero.localTag}`. `categoryPages.js`: `localTag: 'Medical Spa · West Palm Beach'` (U+00B7) en el `hero` de faciales, corporales, laserYLuz, dentalEstetico, ivTherapy, capilar. Mismo texto/estilo que la sub-línea de Home (Fase 1). Los `<title>` de los hubs NO se tocaron.
- **`<title>` / `og:title` / `twitter:title` de Home** (commit `6e4ff4e`): `Derma.M — Tratamientos Estéticos en West Palm Beach, FL` → `Derma.M | Medical Spa en West Palm Beach, FL`. `description`/OG-description/canonical/JSON-LD sin tocar. Alinea el `<title>` con el término canónico "medical spa" (`index.html`, `llms.txt`, schema).
- **Verificación:** los 6 hubs a 375px y 1280px en el browser pane — sub-línea consistente, sin overflow, CTAs/body en su lugar, consola limpia. `/nosotros`, `/nosotros/nancy-nieto` y `/limpieza-facial-profunda` NO muestran la sub-línea (no pasan `localTag`) — confirmado por `get_page_text`. `document.title`/`og:title`/`twitter:title` de Home = string nuevo. `npm run test:visual` 22/22 sin diffs (hubs no snapshoteados; Home ya tenía baseline de Fase 1).
- Dev server `:3000` detenido al cierre.

## 2026-08-28 — #5 Fase 1: H1 con intención local en Home + quitar eyebrow del hero de Home
- **Sub-línea local en el `<h1>` del hero de Home** (`Hero.jsx`, commit `cb55140`). `<span>` block dentro del mismo `<h1>`, después de "Salud/profesional/para tu/piel": **`Medical Spa · West Palm Beach`** (separador U+00B7), `text-[15px] lg:text-[16px] tracking-[0.12em] font-normal text-[#CCC9C1]`, `uppercase` heredado del `<h1>`. El titular grande no se tocó. Da entidad correcta + locale dentro del heading (los `<title>` ya lo tenían, el `<h1>` no). Aprobado por el usuario en el gate (capturas 375/1280).
- **Quitado el eyebrow "Centro de estética, belleza y salud"** (rayita + `<p>`) del hero de Home (`Hero.jsx`, commit `a0679f5`). Motivo: en mobile partía en 2 líneas y sumaba ruido sobre el titular; SEO nulo (tagline genérico sin keyword/locale, y usaba un 3er encuadre de categoría distinto al canónico "medical spa"). El H1 pasa a liderar directo. **Solo Home** — los 6 hubs conservan su eyebrow porque ahí es la categoría ("TRATAMIENTOS FACIALES", etc.).
- **`home-hero-mobile-safari-win32.png` regenerado 2 veces** (una por cambio). En cada caso se verificó el `-diff.png`: solo la línea nueva / el desplazamiento vertical por el bloque removido, sin reflow lateral ni cambios de topbar/navbar/CTA. desktop-chrome quedó bajo tolerancia ambas veces. Verde ×2 tras cada regen.
- **Spec/plan** (en `docs/`, gitignored): `docs/superpowers/specs/2026-08-28-h1-intencion-local-home-hubs-design.md`, `docs/superpowers/plans/2026-08-28-h1-intencion-local-home-hubs.md`.
- **PENDIENTE — Fase 2 del plan** (ciclo propio, ya aprobado el enfoque): replicar la sub-línea a los 6 hubs vía prop opcional `localTag` en `PageHero` (+ `.localTag` en su module.css + `CategoryPage` pasa la prop + `categoryPages.js` `hero.localTag` ×6), y corregir `<title>`/`og:title`/`twitter:title` de `Home.jsx` → `Derma.M | Medical Spa en West Palm Beach, FL` (hoy dice "Tratamientos Estéticos").
- **graphify sacado de la cadena de ejecución** (commit `c752ec6`): borrado el bloque `hooks` de `.claude/settings.json` (forzaba `graphify query` antes de cada Read/Grep — round-trip sin valor) y la sección de reglas de `CLAUDE.md`. `graphify-out/` queda en disco; `/graphify` sigue como skill manual. Grep/Glob/Read directo de ahora en más. (El hook ya cargado muere al reiniciar `claude`.)
- **engram desactivado en este proyecto** (commit `8cb7c5f`): `.claude/settings.json` → `"engram@engram": false`. Correrlo junto con los 3 archivos era contabilidad doble. Los 3 archivos en git son la única memoria del proyecto de ahora en más. `CLAUDE.md` "Memory persistence" lo dice explícito. engram sigue activo a nivel global para otros proyectos.
- **`CLAUDE.md` auditado con la skill `writing-for-agents`** (commit `c333816`): 138→120 líneas. "Task routing" reescrito — se borraron 8 punteros a `docs/*.md` que no existen (`CANONICAL_FRONTEND_STANDARDS`, `SITE_ARCHITECTURE`, `PROJECT_CONTEXT`, `SEO_AND_SCHEMA`, `SECURITY`, `ASSETS_*`, `AGENT_SKILLS`, `AUDIT`) y ahora apunta a las rutas reales (`DESIGN.md`, `PRODUCT.md`, `docs/MEDICAL_COMPLIANCE.md`, `docs/TECHNICAL_SEO_GEO_AUDIT_2026.md`, `docs/SEO_AUDIT_2026.md`). Inventario de skills corregido (sacado `engram`, agregados `bencium-aeo`/`keyword-research`/`writing-for-agents`). Las 2 secciones de memoria fundidas en una. Negaciones → forma positiva. No-ops borrados. Architecture comprimida. Prefijo `## Mandatory:` fuera de los H2 (línea al tope: "Sections 1–4 are hard rules").
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

## 2026-08-27 — Cluster de schema `#organization` (sub-proyecto A del SEO local)
- Spec `docs/superpowers/specs/2026-08-27-organization-schema-entity-cluster-design.md`, plan `docs/superpowers/plans/2026-08-27-organization-schema-entity-cluster.md`. Origen: `docs/seo-setrategies/LOCAL-SEO-ANALYSIS-dermam-redesign.md` (score 48/100; este cluster cubre Top-10 #2,3,4,6,8,9).
- **Nuevo `src/data/organizationSchema.js`** — `export const organizationNode`, fuente única del nodo `HealthAndBeautyBusiness` (`@id …/#organization`). Lo importan `Home.jsx` (`@graph: [organizationNode, websiteNode]`) y `Contacto.jsx` (`@graph: [organizationNode, contactPageNode]`, con `ContactPage.mainEntity` → `{@id}`). `NancyNieto.jsx` `Person.worksFor` → `{@id}` + `Person.sameAs` = LinkedIn de Nancy.
- **Cambios en el nodo:** quitado `aggregateRating` 4.9/117 (sin reviews visibles = riesgo de acción manual; se reintroduce en 8.20 vía APIFY, post-sesión B) y `medicalSpecialty: "Dermatology"` (inválido en `HealthAndBeautyBusiness` + overclaim). `description` "clínica de medicina estética" → "medical spa". `sameAs` real (Instagram/Facebook/Yelp; GBP pendiente 8.19 con `// TODO`). Nuevos: `alternateName` (4, con "Med Spa"/"DermaM"), `knowsAbout` (37 — espejo 1:1 del sitio: 6 hubs + 25 tratamientos + 3 landings, español primero, **"Plasma rico en plaquetas y fibrina" en #4** por prioridad del usuario), `keywords`, `areaServed` (WPB + Palm Beach County), `hasMap` (Place ID `ChIJ85kuJaTX2IgRXPrdsU0jNRs`). `address`/`geo`/`openingHoursSpecification` **aplanados** en el nodo (se eliminó el `location` anidado que re-declaraba un 2º negocio).
- **Eliminadas 2 entidades-fantasma parciales:** `Contacto.jsx` ya no re-declara un `HealthAndBeautyBusiness` sin `@id`; `NancyNieto.jsx` tampoco.
- **NO tocado:** `@type` sigue `HealthAndBeautyBusiness` (no `MedicalBusiness` — ver DECISIONS). Landings + `TreatmentSEO.jsx` siguen referenciando `#organization` por `@id` inline (no migrados a `organizationNode` — candidato futuro). Task 4 del plan (embed del mapa de `/contacto` vía Place ID) **diferida** a pedido del usuario.
- **Verificado:** `npm run build` OK. DOM en `/`, `/contacto`, `/nosotros/nancy-nieto` — nodo único, `@id` correcto, sin `aggregateRating`/`medicalSpecialty`/"clínica", `knowsAbout` 37 con Plasma, `mainEntity`/`worksFor` por `@id`. `validator.schema.org` **0 errores, 0 advertencias**. `npm run test:visual` **34/34 sin diffs**. `grep` prohibidos = 0. 0 errores de consola.
- **Pendiente:** 8.19 (verificar/crear GBP — sesión B) → su URL de Maps entra en `sameAs`. 8.20 (reseñas reales on-page vía APIFY) → reintroduce `aggregateRating` + `Review`. Task 4 (embed del mapa). #5 H1 con intención local (Home + 6 hubs).

## 2026-08-27 — `WarningBox`: título por defecto en las 25 páginas de tratamiento
- Spec `docs/superpowers/specs/2026-08-27-warningbox-title-design.md`, plan `docs/superpowers/plans/2026-08-27-warningbox-title.md`.
- **`src/components/shared/WarningBox/WarningBox.jsx` (2 defaults de prop):** `title` `'CUÁNDO CONSULTAR ANTES'` → `'PRECAUCIONES Y CONTRAINDICACIONES'`; `eyebrow` `'PRECAUCIONES DE SEGURIDAD'` → `'ANTES DE RESERVAR'`.
- **Por qué el eyebrow también:** se renderiza pegado arriba del título; sin cambiarlo quedaba "PRECAUCIONES … PRECAUCIONES" en dos líneas contiguas. `'ANTES DE RESERVAR'` reancla al CTA de reserva.
- **Alcance:** único consumidor `TreatmentDetailPage.jsx:240` no pasa esas props → cambio en las 25 páginas de tratamiento (sección 9, `warningSection`). Ninguna landing usa `WarningBox`. Nada más tocado (ni `body`, ni `items`, ni CSS, ni datos).
- **Compliance:** "precauciones"/"contraindicaciones" no están en la lista de `MEDICAL_COMPLIANCE.md`; refuerza el tono health-first.
- **Verificado:** `grep` 0 de "CUÁNDO CONSULTAR ANTES" y "PRECAUCIONES DE SEGURIDAD" en `src/`. `test:visual` **34/34 sin diffs** (baseline previo 34/34; `warningSection` no está snapshoteada — el único snapshot de secciones, `hidrofacial-whatis.png`, captura `whatIsSection`). DOM en `/faciales/hidrofacial`, `/corporales/lipo-360`, `/laser-y-luz/depilacion-laser`: `<h2>` nuevo, eyebrow "ANTES DE RESERVAR", 0 overflow horizontal desktop (~1517px) + mobile (375px), 0 errores de consola. Screenshot mobile confirmó wrap limpio en 2 líneas sin repetición.
- **Backlog del proyecto C remanente:** C2 (dato + fuente de autoridad por tratamiento, sign-off de la clínica), revisión legal del HIPAA Notice.

## 2026-08-27 — Barrido de compliance en FAQ / problemContext / whoForList (treatmentPages)
- Plan `docs/superpowers/plans/2026-08-27-compliance-faq-sweep.md`, Task 2. Spec `docs/superpowers/specs/2026-08-27-compliance-faq-sweep-design.md`. Lectura completa de los 125 FAQ + `problemContext`/`whoForList`/`resultado`; lista consolidada aprobada por el usuario (19 seguros + 4 borderline, todos aprobados).
- **18 cambios en `src/data/treatmentPages.js`** (campos `faq`/`problemContextBody`/`whoForList`/`resultado`, `whatIsBody` NO tocado):
  - **"sin dolor" → sensación real sin absoluto:** `hidrofacial` ("extracción sin dolor" → "suave y muy tolerable"), `radiofrecuencia-facial` ("sin dolor ni quemaduras" → "sin ardor ni quemaduras"), `oxigenoterapia-facial` ("sin dolor" → "muy cómoda"), `dermabracion-facial` + `tratamiento-capilar` ("sin dolor ni sangrado" → "no produce sangrado"), `lipo-360` ("sin dolor ni tracción" → "confortable y suave, sin tracción").
  - **Negación de downtime → reincorporación:** `hifu-facial` whoForList + faq, `oxigenoterapia-facial` faq ("Ninguno." → "No requiere reposo."), `plasma-frio` faq ("Cero enrojecimiento prolongado… al instante" → "leve y breve… el mismo día"), `hifu-corporal` problemContext ("sin reposo posoperatorio" → "de forma no invasiva") + faq ("Cero tiempo de reposo… inmediatamente" → "No requiere reposo… el mismo día").
  - **"permanente/para siempre/definitiva" en preguntas de resultado:** `levantamiento-gluteos` ("¿…es permanente?" → "¿Cuánto duran los resultados…?"), `depilacion-laser` ("¿…definitiva para siempre?" → "¿…elimina el vello para siempre?" — pregunta-mito, respuesta lo corrige).
  - **Cifra de eficacia sin fuente:** `depilacion-laser` "reducción del 85% al 90%" → "No de forma total. Se logra una reducción notable y duradera…".
  - **Borderline aprobados:** `manchas-cicatrices` faq ("por completo?" → respuesta abre con "No por completo."), `depilacion-laser` faq question ("para eliminar el vello" → "para reducir el vello").
  - **Typo:** `tratamiento-acne.resultado` "imperfecciones **and** piel equilibrada" → "…y piel equilibrada".
- **MANTENIDOS (con motivo):** `manchas-cicatrices` problemContext "marcas permanentes" (describe la condición, no el resultado); `estrias-celulitis` faq "¿elimina las estrías blancas por completo?" (respuesta arranca con "No, … no desaparecen al 100%" — patrón AEO); `tratamiento-acne` faq "¿Elimina… cicatrices viejas?" (respuesta redirige honestamente).
- **Verificado:** `grep` 0 ocurrencias de las expresiones cambiadas. `test:visual` **22/22 sin diffs** (ningún campo tocado está snapshoteado; `problemSection`/`whoForSection` de hidrofacial no se modificaron). DOM: `/laser-y-luz/depilacion-laser` FAQPage 5 `mainEntity` con preguntas/respuesta nuevas; `/corporales/hifu-corporal` problemContext sin "sin reposo", FAQ actualizada. 0 errores de consola.
- **Task 3 (landings) — CERRADO:** de los 17 FAQ de las 3 landings, solo 2 con hallazgo (ambos borderline, aprobados):
  - `limpiezaFacial` faq: "¿…es dolorosa? / **No.** … evitando molestias innecesarias…" → "**Es un procedimiento muy cómodo.** … minimizando molestias…".
  - `postoperatorios` faq: "¿…debe ser doloroso? / No. … pautas de **suavidad absoluta** … sin causar dolor." → "No. … pautas de **máxima suavidad** … de forma **cómoda y tolerable**." (el "No." se conserva — desmiente el mito "debe ser doloroso"; se detectó y corrigió además el "sin causar dolor" del final, que el scan inicial no había listado).
  - **Verificado:** `grep` landings limpio; `test:visual` **22/22** (FAQ de landings bajo el fold, no snapshoteado); DOM `/limpieza-facial-profunda` FAQPage 5 `mainEntity` con respuesta nueva; 0 errores de consola.
- **BARRIDO DE COMPLIANCE CERRADO** (25 páginas de tratamiento + 3 landings). Campos `disclaimer` NO tocados (CTA obligatoria por `MEDICAL_COMPLIANCE.md`). Backlog remanente del proyecto C: **C2** (dato + fuente de autoridad por tratamiento, con sign-off de la clínica), `WarningBox` title, revisión legal del HIPAA Notice.

## 2026-08-27 — Auditoría "clínica"→"medical spa" en páginas legales/políticas
- A pedido del usuario: barrido de todas las páginas legales/policy por "clínica"/"consultorio"/"centro médico" en contexto de lugar.
- **Páginas publicadas limpias:** `PrivacyPolicy`, `TermsOfUse`, `Accessibility`, `BookingPolicy`, `LegalResources` — 0 referencias de contexto-lugar ("Clinical Disclosure" en LegalResources es adjetivo, correcto).
- **`NoticePrivacyPractices.jsx`** (borrador HIPAA, ya `Disallow` en `robots.txt` + sin link en footer + fuera de sitemap): L53 "tomadas en el consultorio… conservada por nuestro centro" → "…en el medical spa… por nuestras instalaciones". L107 "disponible físicamente en la clínica West Palm Beach" → "…en el medical spa de West Palm Beach".
- **NO tocado (a propósito):** los `attorneyCalloutText` de `NoticePrivacyPractices.jsx:166` y `TreatmentDisclaimer.jsx:180` — son notas dirigidas al abogado ("[REQUIERE REVISIÓN LEGAL]"), no voz del sitio; usan "consultorio" como concepto legal genérico. Y el testimonial `categoryPages.js:621`. El banner del propio borrador HIPAA dice esperar al asesor legal: swap de términos ahí no reduce el riesgo de fondo (si Derma.M no es "covered entity", la página no debería existir) — se hizo solo el cambio terminológico pedido, la revisión legal sigue pendiente.
- **Verificado:** `grep` 0 "clínica/consultorio/centro" de contexto-lugar en voz del sitio; `test:visual` 22/22.

## 2026-08-27 — Sub-proyecto C1 COMPLETO (25/25) — Tasks 4-6: láser + dental + capilar
- Plan Tasks 4-6. Reescritos `whatIsBody` + `whatIsHeadline` + `contentUpdated: '2026-08-27'` en: `depilacion-laser`, `ipl` (láser), `blanqueamiento-dental`, `limpieza-dental` (dental), `tratamiento-capilar` (capilar). Patrón C1.3 + señal local "medical spa" desde el arranque. Aprobado por el usuario.
- **Compliance en la reescritura:** `depilacion-laser` — el material viejo (FAQ + whatIsBody "eliminación progresiva del vello", FAQ "¿definitiva para siempre?") → reescrito a "reducción progresiva y duradera del vello", sin "para siempre"/"definitiva"/"permanente". `tratamiento-capilar` — límite honesto explícito: "no recupera folículos que ya han dejado de crecer". `blanqueamiento`/`limpieza` dental: enmarcado estético/higiénico, "no reemplaza los tratamientos periodontales".
- **C1 CERRADO:** las **25 páginas de tratamiento** (`slugsByCategory` en `treatmentPages.js`) tienen ahora: (a) `whatIsHeadline` declarativo `Nombre: qué es y…` (sin `¿?`), (b) `whatIsBody` en forma de respuesta directa GEO (1ª oración autónoma citable + beneficios en lenguaje atenuado + `Derma.M` + `medical spa` + `West Palm Beach` juntos + señal de valoración previa, cierre distinto por página), (c) `contentUpdated: '2026-08-27'` → nodo `MedicalWebPage` con `dateModified` en el `@graph` (Task 1). `grep`: `whatIsHeadline:` ×25, `contentUpdated:` ×26 (25 + builder), 0 `whatIsBody` originales, 0 palabras prohibidas en `whatIsBody`, 0 "clínica" de autodenominación.
- **Verificado:** `test:visual` **22/22** sin diffs (solo `hidrofacial` tiene `whatIsSection` snapshoteada; su baseline mobile se regeneró en Task 2). DOM en `/capilar/tratamiento-capilar`, `/dental-estetico/blanqueamiento-dental`, `/laser-y-luz/ipl`: H2 nuevo, 1ª oración autónoma, "medical spa" + "West Palm Beach" + "valoración" presentes, `@graph` con `MedicalWebPage` + `dateModified:'2026-08-27'`, sección antes/después de dental intacta. 0 errores de consola.
- **Sigue pendiente (fuera de C1):** **C2** — 1 dato cuantitativo + 1 enlace de autoridad por tratamiento, con sign-off de compliance de la clínica (ciclo propio, ~80% del esfuerzo de C). Backlog `WarningBox.jsx` ("CUÁNDO CONSULTAR ANTES" → "PRECAUCIONES Y CONTRAINDICACIONES", 25 páginas). Limpieza de compliance en campos `faq`/`problemContext`/`whoForList` (varias expresiones "sin dolor"/"sin tiempo de recuperación"/"para siempre" detectadas durante C1). HIPAA Notice `NoticePrivacyPractices.jsx:107` "clínica" (decisión del usuario).

## 2026-08-27 — Fix transversal: "clínica" → "medical spa" + estandarización de señal local
- **Contexto:** el usuario detectó que Derma.M es un **medical spa**, no una "clínica" (distinción regulatoria en Florida; `public/llms.txt` = "professional med spa", `index.html` `<title>` = "Medical Spa West Palm Beach"). Además pidió que la señal local del cuerpo diga "medical spa" pegado al brand para captar búsquedas "medspa wpb". Decisión de redacción: **no** convertir el nombre en "Derma.M MedSpa" (fragmentaría la entidad); marca = `Derma.M`, categoría = `medical spa` como descriptor. Grafía "medical spa" (2 palabras, como el `<title>`).
- **`src/data/treatmentPages.js`:** las 25 páginas de tratamiento ahora cierran el `whatIsBody` con `Derma.M` + `medical spa` + `West Palm Beach` juntos, en 3 formas rotadas para no sonar a plantilla: `En Derma.M, medical spa en West Palm Beach, …` (mayoría), `En nuestro medical spa de West Palm Beach, Derma.M, …`, `Derma.M es un medical spa en West Palm Beach; …`. (12 faciales/microneedling retocadas de "en Derma.M, en West Palm Beach"; 8 corporales; 4 ya venían del fix de "clínica".)
- **`src/data/landingPages.js:317`** (postoperatorios hero) y **`src/data/contactPage.js:22`** (FAQ "¿Atienden en español e inglés?"): "en nuestra clínica de West Palm Beach" / "en la clínica en West Palm Beach" → "medical spa".
- **`src/pages/NancyNieto.jsx`** (meta description + og + twitter, ×3): "la visión detrás de la clínica en West Palm Beach" → "…del medical spa en West Palm Beach".
- **NO tocado (a propósito):** `categoryPages.js:621` — es un **testimonial real** de una clienta que dice "la clínica excelente" (editarlo = falsificar reseña, viola `MEDICAL_COMPLIANCE.md`). `NoticePrivacyPractices.jsx:107` — dice "en la clínica West Palm Beach" dentro del **HIPAA Notice of Privacy Practices** (texto legal, no lo toco sin visto bueno legal). `aboutPage.js:167` "práctica clínica en ortodoncia" = uso correcto (experiencia profesional).
- **Verificado:** `test:visual` **22/22** sin diffs (ningún baseline cambió; el delta de texto en `hidrofacial-whatis` quedó bajo el 2% de tolerancia y el PNG regenerado salió byte-idéntico). `grep`: 0 "clínica"/"medical spa" de autodenominación pendientes salvo los 3 casos excluidos arriba.
- **Pendiente para el usuario:** decidir si el HIPAA Notice (`NoticePrivacyPractices.jsx:107`) también debe decir "medical spa".

## 2026-08-27 — Sub-proyecto C, Task 3: respuesta directa GEO — 8 corporales (+ fix "clínica"→"medical spa")
- Plan Task 3. Reescritos `whatIsBody` + `whatIsHeadline` + `contentUpdated: '2026-08-27'` en `customDetails` de: `lipo-360`, `levantamiento-gluteos`, `marcacion-abdominal`, `hifu-corporal`, `corrientes-rusas`, `estrias-celulitis`, `carboxiterapia-corporal`, `maderoterapia-corporal`. Mismo patrón C1.3. Aprobado por el usuario.
- **Compliance corregido en la reescritura:** `levantamiento-gluteos` viejo decía "**garantizando** una piel firme" (palabra prohibida); `marcacion-abdominal` viejo "**100% no invasiva**" → "no invasiva". Sin claims de pérdida de peso / reducción de cm.
- **FIX transversal — "clínica" → "medical spa":** el usuario detectó que el negocio es un **med spa**, no una "clínica" (distinción regulatoria en Florida; `public/llms.txt` = "professional med spa", `index.html` title = "Medical Spa"). Mi copy nueva había introducido "nuestra clínica de West Palm Beach" en 4 tratamientos → corregidos a **"En Derma.M, medical spa en West Palm Beach,"** (mantiene señal local + categoría para SEO, sin inventar un lockup de marca): `rejuvenecimiento-facial` + `plasma-frio` (venían del commit `b68dcfd` de Task 2), `hifu-corporal` + `carboxiterapia-corporal` (Task 3). `grep`: 0 "clínica" de autodenominación en `treatmentPages.js`.
- **Pendiente / fuera de C (mismo error, copy previo aprobado):** `landingPages.js:317` (postoperatorios hero) y `contactPage.js:22` (FAQ contacto) dicen "clínica" para el negocio → ciclo `fix(copy)` aparte (el de postoperatorios está snapshoteado). `categoryPages.js:621` dice "clínica" pero es un **testimonial real** → NO se toca. Además: evaluar estandarizar "medical spa en West Palm Beach" en las 11 faciales + microneedling (hoy dicen solo "en Derma.M, en West Palm Beach").
- **Verificado:** `test:visual` **22/22** sin diffs (corporales no está snapshoteado). DOM en `/corporales/lipo-360` + `/corporales/maderoterapia-corporal`: H2 nuevo, 1ª oración autónoma, "West Palm Beach" + "valoración" (69/65 palabras), `@graph` con `MedicalWebPage` + `dateModified:'2026-08-27'`. 0 errores de consola. `grep`: `whatIsHeadline:` ×20, `contentUpdated:` ×21, 0 `whatIsBody` viejos de corporales, 0 palabras prohibidas en `whatIsBody`.
- **Compliance preexistente detectado (otros campos, fuera de C1):** `hifu-corporal` `problemContextBody` "sin reposo posoperatorio" + FAQ "Cero tiempo de reposo" / "¿Cuántos centímetros se reducen?"; `levantamiento-gluteos` FAQ "¿…es permanente?". Anotado para ciclo de limpieza de FAQ/campos.

## 2026-08-27 — Sub-proyecto C, Task 2: respuesta directa GEO — 11 faciales
- Plan `docs/superpowers/plans/2026-08-27-sub-c-respuesta-directa-geo.md`, Task 2. Reescritos `whatIsBody` + agregados `whatIsHeadline` + `contentUpdated: '2026-08-27'` en `customDetails` de: `hidrofacial`, `hifu-facial`, `peel-coreano`, `radiofrecuencia-facial`, `oxigenoterapia-facial`, `rejuvenecimiento-facial`, `tratamiento-acne`, `manchas-cicatrices`, `dermabracion-facial`, `plasma-frio`, `carboxiterapia-facial`.
- Patrón C1.3: 1ª oración = definición autónoma citable (arranca con el nombre), resto 55–70 palabras con beneficios en lenguaje atenuado + West Palm Beach orgánico + señal de valoración previa, **cierre distinto por página**. H2 declarativo `Nombre: qué es y para qué sirve` (variantes: acné → `en qué consiste y para quién es`; manchas → `qué es y cómo funciona`). Aprobado por el usuario.
- **Corrección al spec/plan:** el spec asumía que "la sección 4 no está en ningún baseline". **Falso** — `tests/visual.spec.js:107` ("Hidrofacial Detail Page - Viewport") snapshotea `whatIsSection` de hidrofacial (`hidrofacial-whatis-{desktop-chrome,mobile-safari}.png`). El cambio de copy diffeó `hidrofacial-whatis-mobile-safari` en ~3% (>2% de `maxDiffPixelRatio`); desktop quedó bajo tolerancia. Verificado en el diff que es **solo texto** (H2 + párrafo, misma caja, sin cambio de layout) + el baseline mobile encima estaba viejo (topbar pre-`6a17f67`). Regenerado `hidrofacial-whatis-mobile-safari-win32.png` con `--update-snapshots`. **Solo hidrofacial** tiene test de secciones → tandas 3-6 no deberían generar diffs.
- **Verificado:** `test:visual` **22/22** (1 baseline regenerado). DOM en `/faciales/tratamiento-acne` + `/faciales/manchas-cicatrices`: H2 nuevo, 1ª oración autónoma, "West Palm Beach" + "valoración" en el párrafo (66/70 palabras), `@graph` con `MedicalWebPage` + `dateModified:'2026-08-27'`. 0 errores de consola. `grep`: `whatIsHeadline:` ×12, `contentUpdated:` ×13, 0 `whatIsBody` viejos de faciales, 0 palabras prohibidas en `whatIsBody`.
- **Compliance preexistente detectado (fuera de alcance C1 — otros campos):** `hifu-facial` `whoForList`/FAQ dicen "sin tiempo de recuperación" (prohibido); `tratamiento-acne` campo `resultado` typo "…imperfecciones **and** piel equilibrada"; varias FAQ con "sin dolor"/"sin sangrado". Anotado para ciclo de limpieza de FAQ/campos aparte.

## 2026-08-27 — Sub-proyecto C, Task 1: cableado `contentUpdated` + nodo `MedicalWebPage`
- Plan: `docs/superpowers/plans/2026-08-27-sub-c-respuesta-directa-geo.md` (6 tareas). Esta es la Task 1 (cableado de código, sin copy).
- **`TreatmentSEO.jsx`:** nodo `Service` gana `'@id': \`${url}#service\``. Nuevo bloque `if (data.contentUpdated) { graph['@graph'].push({ '@type':'MedicalWebPage', '@id': \`${url}#webpage\`, url, name: title, inLanguage:'es', isPartOf:{'@id':\`${SITE}/#website\`}, about:{'@id':\`${url}#service\`}, dateModified: data.contentUpdated }) }`. `#website` confirmado en `Home.jsx:97`.
- **`treatmentPages.js`:** builder → `contentUpdated: custom.contentUpdated || null` (junto a `metaTitle`/`metaDescription`). `customDetails.microneedling` retro-completado con `contentUpdated: '2026-08-27'`.
- **Verificado:** `test:visual` 22/22 sin diffs. DOM: microneedling `@graph` = `[Service(#service), BreadcrumbList, MedicalWebPage]` con `dateModified:'2026-08-27'`, `about→#service`, `isPartOf→#website`; `FAQPage` sigue en `<script>` aparte. hidrofacial (sin `contentUpdated`) = `[Service(#service), BreadcrumbList]`, sin `MedicalWebPage` — el condicional funciona. 0 errores de consola.
- **Pendiente:** Tasks 2-6 — reescritura GEO del `whatIsBody` + `whatIsHeadline` + `contentUpdated` por categoría (faciales 11 → corporales 8 → láser 2 → dental 2 → capilar 1).

## 2026-08-27 — Sub-proyecto C1: piloto de "respuesta directa" GEO (solo microneedling)
- Piloto de C1 (bloques de respuesta directa / GEO del sub-proyecto SEO A→B→C→D). **Sin spec formal** — brainstorming conversacional largo, aprobado. Alcance: **1 sola página** para medir impacto antes de escalar.
- **`src/data/treatmentPages.js` — `customDetails.microneedling`:** reescrito `whatIsBody` (sección 4 "EL PROTOCOLO" de `TreatmentDetailPage`) a forma de respuesta directa: 1ª oración = definición autónoma citable ("es un tratamiento estético facial que crea micro-canales… para estimular su renovación natural"), 2ª = beneficios en lenguaje compliant ("puede ayudar a mejorar la textura, la firmeza…"), 3ª = señal local + "valoración médica previa". ~55 palabras. + nuevo campo override `whatIsHeadline: 'Microneedling con Dermapen: qué es y para qué sirve'`.
- **`src/data/treatmentPages.js` builder (L1266):** `headline: custom.whatIsHeadline || \`TRATAMIENTO DE ${title}\`` — override opt-in. Las otras 23 páginas usan el fallback → **intactas**.
- **Decisión de copy:** H2 en forma **declarativa** (`Nombre: qué es y para qué sirve`), NO como pregunta con `¿?`. Los headers hermanos de la página ("CÓMO FUNCIONA…", "CUÁNDO CONSULTAR ANTES") son etiquetas de sección sin puntuación; un `¿?` rompía ese patrón. La forma declarativa mantiene el keyword al inicio y sigue siendo GEO-friendly.
- **Sin cambio de wireframe/UI.** Mismo `<section>`, mismo componente, misma posición. La sección crece en alto y ya. Verificado desktop 1532px + mobile 375px: sin overflow, sin romper layout.
- **Verificado:** `npm run test:visual` **22/22 sin diffs** (§4 de microneedling no está snapshoteada). 0 errores de consola. `<meta description>`/schema sin cambio (`TreatmentSEO` usa `data.description`, no `whatIsBody`).
- **Expectativa realista (dicha al usuario):** aporte **marginal**. SEO clásico casi no se mueve con esto (eso lo cubrió el sub-proyecto A + falta local SEO). El valor está en el frente GEO/AEO donde hoy no había ninguna superficie de respuesta directa, y solo se nota si se aplica a las 24 + con autoridad de dominio suficiente. Se hace por bajo costo/riesgo y porque compone.
- **Pendiente:** escalar el mismo patrón (reescritura GEO del `whatIsBody`) a los otros 23 tratamientos = **C1 completo**. Después: **C2** (1 dato cuantitativo + 1 enlace de autoridad por tratamiento, con sign-off de compliance — el 80% del esfuerzo de C) y `dateModified` en el schema `Service`.
- **Backlog nuevo:** `WarningBox.jsx:7` default `title = 'CUÁNDO CONSULTAR ANTES'` se renderiza en las 24 páginas de tratamiento; el usuario marcó "ANTES" como seco. Candidato a `PRECAUCIONES Y CONTRAINDICACIONES` o similar — su propio ciclo (24 páginas, sección posiblemente snapshoteada).

## 2026-08-27 — Sub-proyecto D: pulido (alt de cards + relatedLinks en 2 landings)
- Spec: `docs/superpowers/specs/2026-08-27-sub-d-pulido-design.md`. 2 ítems mecánicos. El 3º candidato (enlaces externos de autoridad) se movió a C — requiere curar fuentes por tratamiento + compliance.
- **D1 — `TreatmentCard.jsx`:** `alt={title}` → `alt={titleCase(title)}` (import de `src/utils/text.js`). `TreatmentCard` lo usan `CategoryPage` (grillas de hub) y `RelatedTreatments` ("Te puede interesar"). Antes `alt="HIDROFACIAL"` (duplicaba el `<h3>` en MAYÚSCULAS) → `"Hidrofacial"`. Verificado en `/faciales` y en el "Te puede interesar" de `/faciales/hidrofacial`: `"Limpieza Facial Profunda"`, `"Peel Coreano"`, `"Microneedling / Dermapen"`, etc. — Title Case, sin MAYÚSCULAS.
- **D2 — `landingPages.js`:** `relatedLinks` agregado a `prfYFibrina` y `limpiezaFacial` (mismo bloque que `postoperatorios`: `label: 'Explora también'`, links a `/faciales` y `/contacto`). `LandingPage` block 7b ya lo renderiza → cero cambio de template. Verificado: `/prf-y-fibrina` y `/limpieza-facial-profunda` ahora con `<a href="/faciales">` + `<a href="/contacto">` en `<main>` y bloque "EXPLORA TAMBIÉN" visible. Las 3 landings consistentes.
- **Verificado:** `npm run test:visual` **22/22 sin diffs**. Sin errores de consola.
- **Backlog nuevo detectado:** en las páginas de hub (`CategoryPage`, 6 páginas) la imagen propia del hub usa `alt={headline}` en MAYÚSCULAS (mismo anti-patrón que tenían landings/tratamientos). No es de `TreatmentCard` → fuera de D. Anotar para cuando se toquen los hubs.

## 2026-08-27 — Sub-proyecto B: tune de LCP (re-scopeado, sin impacto de UI)
- Spec: `docs/superpowers/specs/2026-08-27-lcp-tune-design.md`. **B se re-scopeó**: al verificar, el CLS por imágenes ya está cubierto en todo el sitio por CSS (`min-height:70vh` + media absoluta en heroes; `aspect-ratio:4/5` en B/A y `.problemImage`; `1/1` en `TreatmentCard`; `16/9` en `FeaturedServices`). CLS medido = 0. Agregar `width/height` masivamente no tenía impacto. B pasa a ser un tune de LCP verificable.
- **B1 — `HeroMedia.jsx`:** `fetchPriority="high"` + `width={1920} height={1080}` en el `<Picture>` de la rama imagen. Lo usan `PageHero` (landings) y `TreatmentHero` (tratamientos) → un cambio, las 2 superficies. `fetchPriority` (camelCase — con `fetchpriority` en minúscula React tira warning `Invalid DOM property`).
- **B2 — bajo el fold no `eager`:** `BeforeAfterGrid` (`SlotMedia`) → `loading="lazy"` (antes sin atributo = eager). `BeforeAfterCarousel` → `loading="lazy"` para todos los slides (antes el slide 0 era eager). La sección B/A está siempre muy por debajo del fold; nada ahí es LCP.
- **B3 — `width/height` solo en contenedores de ratio fijo conocido:** `BeforeAfterGrid` + `BeforeAfterCarousel` `1000×1250` (4:5, ratio real de todos los assets B/A); `LandingPage` problema `<Picture>` `800×1000` (4:5). Son pistas de ratio — el CSS ya controla el render. **Excluido `MediaBlock`** (ratios variables) y el hero (cubierto en B1).
- **Verificado:** `test:visual` **22/22 sin diffs** (guardrail de UI). DOM: hero con `fetchpriority="high"` + `1920×1080` + `eager` en landing y tratamiento; B/A con `loading="lazy"` + `1000×1250`; problema con `800×1000`. En la carga inicial de `/tratamientos-postoperatorios` las primeras imágenes son `hero/how-it-works/cta` — las B/A quedan diferidas (`baDeferred: true`). Sin warnings de `fetchpriority` tras usar camelCase. (Los `TreatmentSEO is not defined` en el buffer de consola son stale del estado intermedio roto del sub-proyecto A — las páginas renderizan completas y el visual test de Hidrofacial pasa.)

## 2026-08-27 — Sub-proyecto A: SEO head de páginas de tratamiento (24 páginas, 100% background)
- Spec: `docs/superpowers/specs/2026-08-27-treatment-seo-head-design.md`. Del audit `seo-checklist-65` (63/100). Descomposición: A (head/schema, hecho) → B (CLS width/height) → D (pulido alt + relatedLinks prf/limpieza + enlaces autoridad) → C (bloques de respuesta directa/GEO).
- **Nuevo `src/utils/text.js`:** `titleCase()` (movido desde `TreatmentDetailPage.jsx`, que ahora lo importa) + `clampWords(s, max)`.
- **Nuevo `src/components/shared/TreatmentSEO/TreatmentSEO.jsx`:** owner único del `<head>` de páginas de tratamiento. Props `data`, `categorySlug`, `slug`. Emite `<title>`, `description`, `canonical`, `robots`, OG/Twitter y `@graph` JSON-LD (`Service` + `BreadcrumbList`). NO emite `FAQPage` (lo sigue haciendo `FAQAccordion`).
- **Los 5 `[treatment].jsx`** (`faciales`, `corporales`, `laser`→`laser-y-luz`, `dental`→`dental-estetico`, `capilar`): el `<Helmet>` inline de la rama de éxito (con su `ld+json` de `Service` con address inline) reemplazado por `<TreatmentSEO … />`. La rama "Tratamiento no encontrado" intacta (`noindex, nofollow`).
- **`<title>`:** `PEEL COREANO | Derma.M` → `Peel Coreano en West Palm Beach | Derma.M` (Title Case + geo; si supera 60 char cae a `Nombre | Derma.M`). Verificado 41-48 char en las 5 categorías.
- **`<meta description>`:** de ~40 char (`treatmentData.description`, que sigue siendo el tagline visible) → compuesta: `` `${description} ${Nombre} en Derma.M, West Palm Beach. Requiere valoración profesional previa.` `` recortada a ≤155 en límite de palabra. Verificado 123-152 char.
- **Schema:** `Service` con `name` Title Case + `provider {@id: #organization}` + `areaServed` (City WPB) + `image` absoluta; **`BreadcrumbList` nuevo** (Inicio › Hub › Tratamiento, nombres de hub: "Tratamientos Faciales/Corporales/Láser y Luz", "Estética Dental", "Tratamientos Capilares"). Paridad con landings.
- **OG/Twitter:** antes **ausentes** en páginas de tratamiento; ahora completos (`og:image` = hero.jpg del tratamiento, absoluta).
- **Campos opcionales `metaTitle` / `metaDescription`** en entradas de `categoryPages.js` (cableados por `getBaseTreatment` + objeto compilado en `treatmentPages.js`). Sin llenar — el fallback cubre las 24; quedan para hand-tuning.
- **Verificado** en 5 rutas reales (1 por categoría) + ruta inexistente: title/desc/canonical/robots/OG/schema OK, `ldCount: 2` (TreatmentSEO + FAQAccordion), `BreadcrumbList` de 3 niveles, 404 sigue `noindex`. Página renderiza completa (12 secciones, sin error boundary). `npm run test:visual` **22/22 sin diffs**.

## 2026-08-27 — Limpieza de integridad de `TreatmentDetailPage` (25 páginas de tratamiento)
- Spec: `docs/superpowers/specs/2026-08-27-treatmentdetailpage-integrity-cleanup-design.md`. Brainstorming corrido, aprobado. 3 cambios, 3 archivos, 1 pasada.
- **1 — Sección antes/después opt-in:** `TreatmentDetailPage.jsx` — se quitó el fallback de convención (`beforeAfter?.items ?? [before-after-1/2.jpg]` → `?? []`) y la `<section>` va envuelta en `{beforeAfterItems.length > 0 && …}`. Variable `categoryFolder` eliminada (quedaba sin uso). Antes: **22 de 25** páginas mostraban 2 cajas negras + `alt="Before"/"After"` (inglés). Ahora la sección solo aparece con `customDetails.beforeAfter` real → hoy solo `blanqueamiento-dental`, `limpieza-dental`, `peel-coreano`. Reactivar cualquiera = 2 fotos `<slug>-antes/despues.jpg` + 5 líneas de `customDetails`.
- **2 — `protocol.jpg` sin referencia muerta:** `treatmentPages.js` builder — `protocolImage: \`${base}/protocol.jpg\`` → `custom.protocolImage || null`. El template ya hacía `url(${protocolImage || image}), url(${image})` → con null usa el hero, **visualmente idéntico** (ya caía a ese fallback). Mata 25 requests 404/carga. `custom.protocolImage` queda como override futuro.
- **3 — `alt` de hero y whatis:** `TreatmentHero.jsx` nueva prop `imageAlt` (`alt=""` → `alt={imageAlt || ''}`). `TreatmentDetailPage.jsx`: helper `titleCase()` (los `title` están en MAYÚSCULAS en `categoryPages.js`), fallbacks `heroAlt = \`${treatmentName} en Derma.M, West Palm Beach\`` y `whatIsAlt = \`Aplicación de ${treatmentName} en Derma.M\``; whatis `<Picture alt={title}>` → `alt={whatIsAlt}`. Campos opcionales `heroImageAlt` / `whatIsImageAlt` en `customDetails` (builder los cablea) para alt descriptivo por página a futuro. Antes: hero `alt=""`, whatis `alt="PEEL COREANO"`.
- **Verificado** en dev: hidrofacial/microneedling/hifu-facial/depilacion-laser → sin `section.beforeAfterSection` en el DOM; peel-coreano y limpieza-dental → sección presente con imágenes reales (natW 1000) y alt descriptivo intacto; **0 requests a `protocol.jpg`** en las 4+ páginas; `heroAlt`/`whatisAlt` en Title Case, sin vacío, sin MAYÚSCULAS (incl. `"Microneedling / Dermapen"`); sin errores de consola. `grep` post: `before-after-1.jpg` fuera de `TreatmentDetailPage.jsx`, `protocol.jpg` fuera de `treatmentPages.js`. `npm run test:visual` **22/22 verde, sin diffs**.
- **Backlog (no tocado):** rename de `hero.jpg`/`whatis.jpg`/`cta.jpg` en las ~25 carpetas + convención del builder (~150 archivos, ROI SEO débil); alt descriptivo por página vía los campos nuevos.

## 2026-08-27 — `/faciales/peel-coreano`: antes/después reales (cierra su parte de 7.3)
- **Contexto:** la sección "EVOLUCIÓN Y RESULTADOS ASISTIDOS" mostraba 2 cajas negras — `before-after-1/2.jpg` no existen para peel-coreano y `TreatmentDetailPage.jsx:63` los genera por convención igual. El usuario cargó 2 fotos reales (close-up 3/4 de rostro bajo luz LED azul, misma clienta: antes con enrojecimiento/textura/opacidad, después piel más uniforme y luminosa "glass skin").
- **Assets:** `peel-coreano-antes.jpg` / `peel-coreano-despues.jpg` (1000×1250, 4:5) + `.webp` q78 (54–56 KB) en `public/assets/images/treatments/faciales/peel-coreano/`. Nombre = convención del proyecto (`<slug>-antes/despues`, igual que `limpieza-dental`).
- **`treatmentPages.js`:** `customDetails['peel-coreano'].beforeAfter` con las 2 rutas + `beforeAlt`/`afterAlt` descriptivos en español. Sin `beforeLabel`/`afterLabel` → defaults `ANTES`/`DESPUÉS`. Mismo mecanismo de override que `limpieza-dental` (2026-08-26); cero cambio de template.
- **Verificado** en `/faciales/peel-coreano`: ambas sirviendo webp (`natW` 1000), `alt` descriptivo, labels `ANTES`/`DESPUÉS`, disclaimer visible, sin cajas negras, sin errores de consola. `npm run test:visual` **22/22 verde** (la sección no está snapshoteada).
- **NO tocado (sigue en backlog, del "mapa" de peel-coreano):** `hero.jpg`/`whatis.jpg`/`cta.jpg` con nombre genérico (decisión de convención pendiente, afecta ~30 páginas); `hero` con `alt=""` y `whatis` con `alt="PEEL COREANO"` (bug de `TreatmentDetailPage.jsx:139`, nivel template); `protocol.jpg` referenciado por `treatmentPages.js:1241` pero inexistente (cae a `hero.jpg`); las otras ~17 páginas de tratamiento con la sección B/A rota por convención.

## 2026-08-27 — Rename SEO de las 8 imágenes del carrousel de postoperatorios
- `postoperatorio-caso-1..7.{jpg,webp}` → `drenaje-linfatico-postoperatorio-antes-despues-1..7.{jpg,webp}`; `postoperatorio-caso-resultado.{jpg,webp}` → `resultado-postoperatorio-abdomen.{jpg,webp}`. `git mv` (16 archivos) + `src` actualizados en `landingPages.js` (`sed`).
- **Motivo:** los nombres originales (`-caso-N`) los propuse priorizando "secuencia prolija" sobre el estándar SEO de filename; "caso" es palabra vacía para Google Imágenes. Feedback del usuario: cada sugerencia debe ir bien a la primera, no generar retrabajo. Se corrigió ahora porque la página aún no está indexada con esos nombres → costo ~0. Ver `DECISIONS.md` / feedback en memoria.
- **Verificado:** las 8 slides sirven el `.webp` nuevo (`currentSrc`), 0 imágenes rotas, sin errores de consola, `test:visual` Postoperatorios 4/4 pixel-idéntico.

## 2026-08-27 — Endurecimiento SEO de las 3 landings (auditoría `/tratamientos-postoperatorios`)
- Spec: `docs/superpowers/specs/2026-08-27-landings-seo-hardening-design.md`. Brainstorming corrido, alcance + spec aprobados. 7 ítems (1–4 transversales a las 3 landings `prfYFibrina`/`limpiezaFacial`/`postoperatorios`; 5–7 solo postoperatorios).
- **1 — Dedupe `FAQPage`:** quitado el nodo `FAQPage` del `@graph` en `Postoperatorios.jsx`, `PrfYFibrina.jsx`, `LimpiezaFacial.jsx`. `FAQAccordion.jsx` queda como **única** fuente del `FAQPage` (ya lo emite en las 3 + `TreatmentDetailPage` + `Contacto`). Antes había 2 `FAQPage` idénticos por landing. Verificado: `faqCount === 1` en las 3.
- **2 — `BreadcrumbList` schema:** agregado al `@graph` de las 3 (Inicio › Hub › Tratamiento). Hubs: postoperatorios→`/corporales`, prf + limpieza→`/faciales` (URLs canónicas confirmadas). Sin breadcrumb visual.
- **3 — `alt` de hero + imagen de "problema":** `PageHero.jsx` nueva prop `imageAlt` → `alt={imageAlt || title}` (fallback = comportamiento previo; ningún otro caller la pasa). `LandingPage.jsx`: `imageAlt={hero.imageAlt}` al `PageHero` y `alt={problem.imageAlt || problem.headline}` en el `<Picture>` del bloque problema. `landingPages.js`: `hero.imageAlt` + `problem.imageAlt` en las 3, redactados **mirando cada archivo** (antes el alt era el H1/H2 en MAYÚSCULAS).
- **4 — `Service` schema enriquecido (3 landings):** `name` en Title Case literal (no `hero.title` en MAYÚSCULAS); `provider` ahora referencia `{"@id":"https://dermamskinhealth.com/#organization"}` (nodo canónico de `Home.jsx`) en vez de re-declarar address parcial; `+ areaServed: {City "West Palm Beach"}`; `+ image` (hero.jpg absoluto de cada landing).
- **5 — Enlaces internos (solo postoperatorios):** nuevo campo opcional `relatedLinks` en landing data + bloque `7b` en `LandingPage.jsx` (import `Link` de `react-router-dom`, `<section className={styles.relatedLinks}>`, solo renderiza si `relatedLinks.links` tiene items). Postoperatorios enlaza a `/corporales` y `/contacto`. CSS nuevo en `LandingPage.module.css` (label small-caps + links subrayados, `#F2F0F1`). Antes: `<main>` sin ningún link interno contextual.
- **6 — Señal local (solo postoperatorios):** `hero.body` cierra con "…en nuestra clínica de West Palm Beach". Verificado: "West Palm Beach" ahora en el texto visible de `<main>`.
- **7 — QA de los 8 `alt` del carrousel (postoperatorios):** reescritos los 8 mirando cada foto. Antes eran genéricos/repetitivos con supuestos ("masaje reductor", zonas inventadas). Ahora describen vista (lateral/posterior/frontal), zona real y el contraste antes/después visible; sin promesas (el disclaimer ya cubre variabilidad).
- **Verificado:** las 3 landings — `ldScriptCount:2` (script del `@graph` + el de `FAQAccordion`), `types:[Service,BreadcrumbList,FAQPage]`, `faqCount:1`, `Service` con `name` Title Case + `provider.@id` + `areaServed` + `image`, `BreadcrumbList` de 3 niveles con hubs correctos, `alt` de hero/problema descriptivo y sin caps. Postoperatorios: `<a href="/corporales">` + `<a href="/contacto">` en `<main>`, "West Palm Beach" en copy, bloque "EXPLORA TAMBIÉN" renderiza discreto entre carrousel y BrandDivider. Sin errores de consola. `npm run test:visual` **22/22 verde, sin diffs** (los cambios son `<head>`/alt/bloque fuera de región snapshoteada).
- **Backlog (no tocado):** breadcrumb visual en landings; auditoría schema/alt de hubs + `TreatmentDetailPage`; `og:image` dedicada 1200×630; aplicar `relatedLinks` a prf/limpieza.

## 2026-08-27 — `/tratamientos-postoperatorios` sección RESULTADOS → carrousel antes/después
- **Contexto:** la sección apuntaba a `before-after-1/2.jpg` inexistentes → 2 cajas negras vacías; el disclaimer *"cuando estén disponibles"* era un parche. El usuario aportó **8 imágenes** (7 composites antes+después en un solo archivo + 1 de resultado único), todas 1000×1250 (4:5). Spec: `docs/superpowers/specs/2026-08-27-postoperatorios-resultados-carrousel-design.md`. Brainstorming corrido, aprobado bloque por bloque.
- **Componente nuevo** `src/components/shared/BeforeAfterCarousel/` (jsx + module.css). Carrousel 1-imagen-por-vista, CSS scroll-snap (`x mandatory`), sin librerías. Flechas circulares 44px con `ChevronLeft/Right` de `lucide-react` (borde 1px, `disabled` en extremos, sin loop) — fuera del marco en desktop, sobrepuestas en las esquinas inferiores en mobile (<768px). 8 dots `<button>` sincronizados con el scroll vía listener + `requestAnimationFrame`. `role="region"` + `aria-roledescription="carousel"`, slides `role="group"`, flechas/dots con `aria-label`, `aria-current` en el dot activo. `prefers-reduced-motion` → scroll sin animar. Marco: **se copian** los valores de `BeforeAfterGrid.module.css` (chip `.imageLabel`/`.lightLabel`, `aspect-ratio:4/5`, `#1A1919`, sin redondeos, disclaimer) — NO se importa ese módulo. `viewport` con `max-width:620px` centrado en desktop (slide ~492×615); `max-width:100%` en mobile.
- **Etiquetas por slide:** `type:'comparison'` → chips `ANTES` (top-left) + `DESPUÉS` (top-right) a la misma altura; `type:'result'` → solo `RESULTADO`.
- **`LandingPage.jsx`:** rama nueva — si `beforeAfter.layout === 'carousel'` renderiza `<BeforeAfterCarousel>`, si no sigue con `<BeforeAfterGrid>` (props sin cambio). `BeforeAfterGrid` **no se tocó**. Ninguna otra landing usa `layout:'carousel'`.
- **`landingPages.js`:** `tratamientosPostoperatorios.beforeAfter` reescrito → `layout:'carousel'`, `variant:'light'`, 8 `items` `{src, alt, type}` con `alt` descriptivos en español sin promesas, disclaimer nuevo compliant (*"Fotografías de casos reales de pacientes de Derma.M. Cada proceso postoperatorio es individual: los resultados varían según el procedimiento previo realizado, las características de cada persona y el seguimiento de las indicaciones. Ningún contenido de este sitio garantiza resultados específicos."*).
- **Assets:** `postoperatorio-caso-1..7.jpg` + `postoperatorio-caso-resultado.jpg` (cargados por el usuario) + `.webp` q78 vía `sharp` (41–70 KB c/u), en `public/assets/images/landings/tratamientos-postoperatorios/`.
- **Tests:** nuevo `Postoperatorios Landing - Resultados carrousel` en `tests/visual.spec.js` → `postoperatorios-resultados-carrousel-{desktop-chrome,mobile-safari}-win32.png` (baselines nuevas con `--update-snapshots`). Suite completa **22/22 verde**, `postoperatorios-problem.png` sin cambio.
- **Verificado en dev:** 8 slides / 8 dots, `aspect-ratio 4/5`, webp sirviendo (200 real, no fallback SPA), flechas navegan + `disabled` en extremos, dots siguen el scroll, chips correctos por tipo, mobile 375px sin que el carrousel aporte overflow-x (el `_floatButton_` de WhatsApp ya generaba ~23px, preexistente), sin errores de consola.

## 2026-08-27 — Cierre de 2 tests en rojo preexistentes (fuera de 8.9/8.10)
- Spec: `docs/superpowers/specs/2026-08-27-contacto-faq-bilingue-y-hero-mask-design.md`. Brainstorming corrido, ambos aprobados.
- **Cambio 1 — FAQ bilingüe en `/contacto`:** 5º item en `contactFaq.items` (`src/data/contactPage.js`) → *"¿Atienden en español e inglés? / Sí. Nuestro equipo te atiende en español e inglés, tanto en la clínica en West Palm Beach como por WhatsApp y teléfono."* Alinea `faq-consistency.spec.js` (esperaba 5 desde `6a17f67`), suma nodo al `FAQPage` JSON-LD y fila al acordeón. Cero cambio de componente. SEO local/AEO para el mercado bilingüe de WPB, respuesta verificable, sin palabras prohibidas. Verificado en dev: 5 botones `aria-expanded`, 5 `mainEntity`, la nueva abre/cierra con su respuesta, sin errores de consola. `Contacto Page - Viewport` (visual) sin cambio (FAQ va bajo el fold).
- **Cambio 2 — hero visual test flaky:** `tests/visual.spec.js` (`Home Page - Hero Viewport`) → `addStyleTag` con `section:first-of-type video, section:first-of-type img { visibility:hidden !important }` antes del screenshot; baselines `home-hero-*` (desktop+mobile) regenerados. El fondo del hero es `<video>`, frame no determinista → fallaba ~50% de las corridas. Se descartó `mask` (el `<video>` cubre toda la sección → taparía H1 + CTAs) y `maxDiffPixelRatio` (global). `visibility:hidden` conserva layout: headline, CTAs, topbar, navbar, TrustBar y popup siguen comparándose. Ver [[decisions]] 2026-08-27. Verificado: 3 corridas seguidas verdes; suite completa **32/32**.
- **Nada de 8.9/8.10 se tocó.** El slug `/prf-y-fibrina` sigue igual.

## 2026-08-27 — `npm run test:visual` reconciliado (cierra el pendiente de 8.9/8.10)
- **Contexto:** los baselines de Playwright venían atrasados varios commits intencionales (8.9/8.10 naming + trabajo 8-27: BeforeAfterGrid labels en LandingPage, RelatedTreatments, y además un cambio de topbar de `6a17f67` que nunca se snapshoteó).
- **`--update-snapshots`** sobre `tests/visual.spec.js`. 9 PNG regenerados: `contacto-viewport-desktop`, `home-featured-services` (desktop+mobile), `home-hero-mobile-safari`, `hidrofacial-problem-mobile`, `limpieza-problem-mobile`, `postoperatorios-problem-mobile`, `prf-problem` (desktop+mobile). Todos los diffs verificados = reflow por texto más largo ("PLASMA RICO EN PLAQUETAS Y FIBRINA") + cambio de topbar de `6a17f67`. Ningún cambio de layout/estilo no intencional.
- **Re-run:** 19/20 verde. `Home Page - Hero Viewport` (mobile-safari) queda **flaky** — el diff es 100% sobre la foto del hero (ruido de decode WebKit), texto/chrome idénticos; no es regresión y no lo tocó nuestro trabajo.
- **Fuera de alcance, NO tocado (para backlog):** `tests/faq-consistency.spec.js` → `/contacto` espera 5 FAQ, `contactPage` tiene 4. Drift preexistente de `6a17f67`, sin relación con 8.9/8.10.

## 2026-08-27 — Backlog 8.9/8.10: nombre público unificado a "Plasma Rico en Plaquetas y Fibrina"
- **Contexto:** el tratamiento se llamaba "PRP y Fibrina" / "PRP Y FIBRINA" en 9 lugares de nombre público mientras el H1/body/schema ya decían "Plasma Rico en Plaquetas y Fibrina" → señal de entidad partida. "PRF" no tiene volumen de búsqueda. Spec: `docs/superpowers/specs/2026-08-27-item-8.9-plasma-rico-en-plaquetas-naming-design.md`. Brainstorming corrido, aprobado.
- **Cambios (todos texto):** `Navbar.jsx` ×2 (desktop + mobile), `Footer.jsx`, `FeaturedServices.jsx` (`<h3>` home), `categoryPages.js:55` (`title`), `landingPages.js:147` (CTA headline), `Faciales.jsx:33` (`name` en BreadcrumbList schema), `PrfYFibrina.jsx` (`<title>` + `og:title` + `twitter:title` → `Plasma Rico en Plaquetas y Fibrina | Derma.M`, se soltó "en West Palm Beach" del title para no pasar ~60 chars; + fallback de `description` en schema).
- **Extra sobre el spec (justificado):** también se cambiaron 2 preguntas de FAQ que **nombran** el tratamiento (`landingPages.js:116,120`), no que explican la diferencia. Las FAQ 136/137/141 que explican "PRP vs PRF" **se conservan con las siglas** — ahí son correctas.
- **8.10 cerrado sin código:** las FAQ ya diferencian PRP/PRF (protocolo tópico combinado con Dermapen, no inyección); el sitio no usa "Vampire Facial®" (marca registrada); transparencia de precio = decisión de negocio, no código.
- **No se tocó:** el slug `/prf-y-fibrina` (señal on-page débil; cambiarlo obliga a `sitemap.xml` + 301 en `.htaccess` protegidos + todos los `to=`).
- **Verificado:** `/prf-y-fibrina` title/og/twitter nuevos, H1 sin cambio, CTA headline OK; mega-menú desktop 1 línea; mobile 375px 1 línea sin overflow-x; `<h3>` home 2 líneas OK; footer link OK; schema de `/faciales` con nombre nuevo, sin el viejo; sin errores de consola. `grep "PRP y Fibrina"` en src → solo las 2 FAQ explicativas restantes (esperado).
- **Pendiente:** `npm run test:visual` — diffs esperados en home, `/prf-y-fibrina`, `/faciales`, navbar/footer.

## 2026-08-27 — prf-y-fibrina "RESULTADOS": video de procedimiento + imagen de resultado
- **Contexto:** no hay antes/después de PRF; el usuario aportó 1 imagen de resultado + 1 video 4:5 del procedimiento. Layout: izq = PROCEDIMIENTO (video), der = RESULTADO (imagen). Spec: `docs/superpowers/specs/2026-08-27-prf-y-fibrina-resultados-video-design.md`. Brainstorming corrido, enfoque aprobado.
- **`BeforeAfterGrid.jsx`:** refactor a sub-render `SlotMedia` con helper `isVideo(src)` (`.mp4`). Si el slot es video → `<video autoPlay muted loop playsInline preload="metadata" poster={src→.jpg} aria-label={alt}>`; si no → `<Picture>` como antes. `fallbackAlt="Before"/"After"` conserva el default previo para las landings/tratamientos sin `alt`. Cero props nuevas. El branch de video solo se activa con un src `.mp4` → sin impacto para el resto de callers (verificado en limpieza-facial-profunda, tratamientos-postoperatorios, blanqueamiento-dental).
- **`LandingPage.jsx`:** ahora pasa `beforeLabel`/`afterLabel` al `<BeforeAfterGrid>` (antes solo lo hacía `TreatmentDetailPage`).
- **`landingPages.js`:** `prfYFibrina.beforeAfter` → items con `.mp4` + `.jpg`, `beforeAlt`/`afterAlt` descriptivos (video: microneedling + plasma; imagen: piel luminosa post-sesión), labels `PROCEDIMIENTO`/`RESULTADO`, disclaimer corregido (sin "cuando estén disponibles").
- **Assets** en `public/assets/images/landings/prf-y-fibrina/` (nombres SEO base `plasma-rico-en-plaquetas`, no `prf-*`):
  - `plasma-rico-en-plaquetas-procedimiento.mp4` — el original era HEVC 15.8 MB 1080×1440. Transcodificado a **H.264 900×1200, 2.1 MB**, `-crf 28 -an -pix_fmt yuv420p -movflags +faststart` (base de la skill `assets-optimizer` + flags web-críticos). Original respaldado en scratchpad.
  - `plasma-rico-en-plaquetas-procedimiento.jpg` — poster (frame ~2s), 70 KB, 900×1200.
  - `plasma-rico-en-plaquetas-resultado.jpg` (110 KB) + `.webp` q78 (42 KB), 1000×1250.
- **Verificado:** `/prf-y-fibrina` — video reproduciéndose (loop/muted), labels correctos, imagen sirviendo webp, disclaimer nuevo, mp4 vía HTTP 206, sin errores de consola, sin 404 a `before-after-*`.
- **Backlog 7.2:** `prf-y-fibrina` ya tiene `alt` real. Queda solo `tratamientos-postoperatorios` (sin media).

## 2026-08-27 — `imagePosition` de las cards ahora también llega a "Te puede interesar"
- **Contexto:** las cards de la sección "Te puede interesar" (`RelatedTreatments`) usan el `hero.jpg` de cada tratamiento recortado a cuadrado. Los heros dentales tienen el sujeto en el ~55% derecho → recorte centrado mostraba pared vacía. Spec: `docs/superpowers/specs/2026-08-27-dental-card-imageposition-design.md`. Brainstorming corrido, enfoque A aprobado.
- **Descubrimiento:** las entradas dentales en `categoryPages.js` (líneas 853, 868) **ya tenían** `imagePosition: '74% center'` — el hub `/dental-estetico` ya lo aplicaba. Solo faltaba cablearlo a "Te puede interesar". El paso 1 del spec (agregar el valor) quedó anulado; se conserva `74% center` como fuente única.
- **`treatmentPages.js`:** `getBaseTreatment()` devuelve `imagePosition: found.imagePosition`; el mapeo de `related` lo incluye.
- **`RelatedTreatments.jsx`:** el `items.map` agrega `imagePosition: t.imagePosition`. `TreatmentGrid` ya hace `{...item}` → llega a `TreatmentCard` → `MediaBlock` → `object-position` inline.
- **Efecto colateral (esperado):** las cards de "Te puede interesar" de **corporales** ahora honran su `imagePosition` existente (72/70/82% según tratamiento), igual que el hub de corporales. Verificado: mejora de consistencia, sin recortes raros.
- **Verificado:** dental "Te puede interesar" + hub = `74% center`; corporales "Te puede interesar" honra sus valores; faciales sin `imagePosition` sigue `center` sin cambio; sin errores de consola. Fix previo de `columns={3}` intacto (3×426).

## 2026-08-27 — limpieza-dental: antes/después reales (layout estándar) + webp + alt
- **Imágenes:** usuario cargó `limpieza-dental-antes.jpg` / `limpieza-dental-despues.jpg` (1000×1250, 4:5, ~123–130 KB) en `public/assets/images/treatments/dental-estetico/limpieza-dental/`. Fotos intraorales reales del mismo caso: antes con sarro en la línea de las encías + leve inflamación gingival, después con dientes limpios/pulidos y encías más sanas.
- **WebP q78** generados: antes 54 KB, después 58 KB.
- **`treatmentPages.js`:** `customDetails['limpieza-dental'].beforeAfter` con las 2 rutas SEO + `beforeAlt`/`afterAlt` descriptivos en español. **Sin `beforeLabel`/`afterLabel`** → labels default `ANTES`/`DESPUÉS`. Usa el mismo mecanismo de override ya existente (cambio de 2026-08-26); cero cambio de componente/template.
- **Verificado** en `/dental-estetico/limpieza-dental`: ANTES = sarro, DESPUÉS = limpio, 1000×1250 sirviendo webp, `alt` descriptivo, labels `ANTES`/`DESPUÉS`, disclaimer visible, sin errores de consola. Regresión OK: `/dental-estetico/blanqueamiento-dental` mantiene `PROCEDIMIENTO`/`ANTES Y DESPUÉS` + related card 426×426.
- **Backlog 7.3** sigue abierto para los ~18 tratamientos restantes sin imágenes; `limpieza-dental` y `blanqueamiento-dental` ya no aplican.

## 2026-08-27 — alt descriptivo en el antes/después de limpieza-facial-profunda (cierra parte de 7.2)
- Agregado `beforeAlt` / `afterAlt` al `beforeAfter.items[0]` de `limpieza-facial-profunda` en `landingPages.js` ("Piel del rostro antes/después de una limpieza facial profunda en Derma.M, West Palm Beach"). El componente ya soportaba el campo (cambio dental 2026-08-26); cero cambio de componente/template.
- Verificado en `/limpieza-facial-profunda`: `alt` descriptivo en ambas imágenes, labels `ANTES`/`DESPUÉS` intactos, webp servido, sin errores de consola.
- Backlog 7.2 baja a "casi cerrado": faltan `prf-y-fibrina` y `tratamientos-postoperatorios` (sin imágenes reales — el `alt` va en el mismo edit cuando se agreguen).

## 2026-08-27 — Fix: cards de "Te puede interesar" ya no se estiran con <3 relacionados
- **Síntoma:** en `/dental-estetico/*` y `/laser-y-luz/*` la sección "Te puede interesar" mostraba 1 sola card estirada a todo el ancho con imagen cuadrada gigante (hasta 1315px).
- **Causa (preexistente, no de esta sesión):** `RelatedTreatments.jsx:26` pasaba `columns={items.length >= 3 ? 3 : items.length}`. `dentalEstetico` y `laserYLuz` tienen 2 tratamientos → lista de relacionados = 1 item → `columns={1}` → clase `cols1` que **no existe** en `TreatmentGrid.module.css` (solo `.cols2`/`.cols3`) → card sin `flex-basis` estirada. Bug desde `34bdffd` (jun 2026), expuesto al reducir tratamientos por categoría.
- **Fix:** `columns={3}` fijo en `RelatedTreatments.jsx`. Toda card usa `.cols3` (~426px, tamaño estándar); `justify-content: center` de `.grid` centra 1-2 cards.
- **Verificado:** `/laser-y-luz/depilacion-laser` y `/dental-estetico/blanqueamiento-dental` → 1 card 426×426 centrada. `/faciales/hidrofacial` (regresión) → 3×426px sin cambio. Sin errores de consola.
- **Nota:** cards quedan centradas; alinear a la izquierda sería ajuste en `.grid` de `TreatmentGrid.module.css` (afecta todas las grillas), no pedido.

## 2026-08-26 — blanqueamiento-dental: 2 slots del BeforeAfterGrid (procedimiento + antes/después) con labels custom
- **Contexto:** la clienta solo aportó 2 fotos para dental — una de la secuencia antes/después (tira de 3 paneles del mismo paciente, el usuario la reencuadró a 1000×1250) y otra del procedimiento en cabina. Decisión del usuario: slot izq = procedimiento, slot der = secuencia. Spec: `docs/superpowers/specs/2026-08-26-blanqueamiento-dental-before-after-slots-design.md`. Brainstorming corrido, enfoque A aprobado.
- **`BeforeAfterGrid.jsx`:** props nuevas `beforeLabel='ANTES'` / `afterLabel='DESPUÉS'` (retrocompatibles); `alt` pasa de `"Before"`/`"After"` fijo a `item.beforeAlt || 'Before'` / `item.afterAlt || 'After'`. Las landings no pasan nada nuevo → sin cambios (verificado en `/limpieza-facial-profunda`).
- **`TreatmentDetailPage.jsx`:** lee `data.beforeAfter`; si existe usa `items` + labels + `disclaimer`, sino mantiene la ruta generada `before-after-1/2.jpg` de siempre. Verificado en `/dental-estetico/limpieza-dental` (sin override): idéntico a antes.
- **`treatmentPages.js`:** `customDetails['blanqueamiento-dental'].beforeAfter` con las 2 rutas SEO (`blanqueamiento-dental-procedimiento.jpg` / `blanqueamiento-dental-antes-despues.jpg`), `beforeAlt`/`afterAlt` descriptivos, labels `PROCEDIMIENTO` / `ANTES Y DESPUÉS`. Wire en el objeto compilado: `beforeAfter: custom.beforeAfter || null`.
- **Imágenes:** 4 archivos (jpg 1000×1250 + webp q78: procedimiento 71 KB, antes-despues 50 KB) en `public/assets/images/treatments/dental-estetico/blanqueamiento-dental/`. Committeadas con el spec en `cc8f88c`.
- **Verificado** en dev server: `/dental-estetico/blanqueamiento-dental` — izq foto procedimiento + "PROCEDIMIENTO", der compuesto antes/después + "ANTES Y DESPUÉS", ambos sirviendo webp a 1000×1250, `alt` correctos, sin errores de consola. Regresión landing + tratamiento sin override OK.
- **Backlog nuevo** (`docs/SEO_AUDIT_2026.md`): (a) ocultar sección `BeforeAfterGrid` en tratamientos sin imágenes reales; (b) bug `categoryFolder` en `TreatmentDetailPage.jsx:59` (no mapea `dentalEstetico → dental-estetico`).
- **Pendiente:** `npm run test:visual --update-snapshots` para blanqueamiento-dental (y limpieza-facial-profunda, ya sabido).

## 2026-08-26 — Landing limpieza-facial-profunda: imágenes antes/después reales + disclaimer
- **Contexto:** el bloque `BeforeAfterGrid` de `/limpieza-facial-profunda` mostraba placeholders negros (nunca hubo imágenes antes/después en el proyecto). El usuario subió fotos reales y pidió cablearlas con nombres SEO-friendly.
- **Imágenes:** subidas por el usuario a `public/assets/images/landings/limpieza-facial-profunda/` como `limpieza-facial-profunda-antes.jpg` y `-despues.jpg` (1000×1250, 4:5, ~110 KB). Generé los `.webp` hermanos con `sharp` q78 (~44–46 KB) — necesario, no opcional: `Picture.jsx` siempre emite `<source type="image/webp">` y si el `<source>` da 404 el navegador NO cae al `<img>` jpg. Rutas actualizadas en `src/data/landingPages.js` (bloque `beforeAfter.items` de `limpieza-facial-profunda`).
  - **Gotcha resuelto en la misma sesión:** el usuario re-subió los jpg con otro encuadre (cara completa en vez del recorte inicial) *después* de que generé los webp; el sitio siguió mostrando el webp viejo recortado porque el navegador prefiere `<source>.webp` sobre `<img>.jpg`. Se regeneraron los webp desde los jpg finales. Ver DECISIONS.md 2026-08-26 (regla: reemplazar un jpg ⇒ regenerar su webp).
- **Disclaimer:** el texto tenía redacción de placeholder ("Las imágenes de resultados, cuando estén disponibles, serán ejemplos informativos…"). Reemplazado por `'Imágenes de referencia con fines informativos. Los resultados pueden variar según cada persona, tratamiento y condición individual.'` — se conserva la cláusula de variabilidad (obligatoria por compliance médico para mostrar antes/después). Solo esta landing; `prf-y-fibrina` (línea 86) y `tratamientos-postoperatorios` (línea 370) mantienen el texto viejo porque siguen sin imágenes reales.
- **Verificado** en el dev server: ambas imágenes cargan a 1000×1250 sirviendo WebP, sin errores de consola; disclaimer nuevo en pantalla.
- **Backlog nuevo registrado en `docs/SEO_AUDIT_2026.md` → Bloque 7 (Optimización de Imágenes):**
  - **7.1** — auditoría de nombres de archivo de imagen para SEO, página por página (todo `public/assets/images/**` cruzado con la página donde se usa; renombrar a slugs descriptivos ES + regenerar webp + actualizar rutas en `src/data/*.js`). Solo `limpieza-facial-profunda` hecho. Requiere su propio ciclo brainstorming → aprobación.
  - **7.2** — `alt` hardcodeado `"Before"`/`"After"` en `BeforeAfterGrid.jsx:22,37`; hacerlo configurable desde `beforeAfter.items` (afecta las 3 landings). Tarea aparte, toca el componente.

## 2026-08-26 — Consolidación de research SEO/GEO/AEO (7 fuentes) en un doc oficial; sin código
- **Contexto:** el usuario aportó research nuevo (2 deep-research reports en `docs/new research/`, la herramienta `isitagentready.com` de Cloudflare, el doc de agencia `La auditoría de IA Search para clínicas` con framework RASTRO) y pidió consolidar todo en un solo documento técnico, borrar lo redundante y dejar claro cuál es el oficial. `superpowers:brainstorming` corrido; alcance cerrado con el usuario: **auditoría técnica del "backend" del sitio, sin tocar UI/UX ni código**.
- **Investigación directa:** leí 5 páginas primarias de Google Search Central (AI features, JS SEO basics, common crawlers, user-triggered fetchers, structured data intro) y la spec `llmstxt.org` v2 vía browser. Corrí el scan de `isitagentready.com` sobre el deploy `derma-m-v2.vercel.app` (score 20/100 "Basic Web Presence" — esperable para un SPA de marketing).
- **Entregable:** nuevo **`docs/TECHNICAL_SEO_GEO_AUDIT_2026.md`** (forzado a git con `git add -f`, igual que `LEGAL_VISUAL_AUDIT_2026.md`). Fuente de verdad técnica: jerarquía de 7 fuentes, hallazgos por nivel de consenso, taxonomía de crawlers 2026, auditoría del sitio real (rendering, robots.txt, llms.txt, sitemap, JSON-LD por tipo de página, RASTRO, E-E-A-T), checklist de best practices con estado, backlog reconciliado y plan priorizado, apéndice con resumen de cada fuente.
- **Hallazgo nuevo (Alta):** `aggregateRating` `4.9`/`117` hardcodeado en el JSON-LD de `Home.jsx` y `Contacto.jsx` sin que la página muestre esas reviews → riesgo de política de Review snippets de Google + honestidad. Registrado como **ítem 8.18** en `SEO_AUDIT_2026.md` (reabre parte de 8.7). A decidir con el usuario: mostrar reviews reales de GBP o eliminar el schema.
- **Backlog reconciliado en `SEO_AUDIT_2026.md`:** 8.12 y 8.14 = prioridad (riesgo cero, confirmados ×4); 8.13 y 8.16 bajan de severidad (sin corroboración primaria); 8.15 se mantiene como mejora editorial; 8.17 ampliado con Bing Webmaster Tools; 8.11 sigue bloqueado por 8.17. Todo lo "agéntico" (MCP, DNS-AID, WebMCP, Content Signals, Markdown negotiation, `llms.txt` como señal) = experimental, no invertir.
- **Basura eliminada** (gitignoreada, permanente — todo leído y absorbido): `docs/new research/` completo (2 deep-research + notas primarias de Google) y `docs/research/La auditoría de IA Search para clínicas.md`. **Conservado:** `docs/research/Estrategias SEO AEO GEO 2026.md` (dependencia activa de la sección 3 de `SEO_AUDIT_2026.md`).
- **Próximo paso:** el usuario elige — arrancar 8.12 (`robots.txt`, riesgo cero) o 8.14 (`sameAs`, necesita URLs de GBP/redes) o decidir 8.18. Cada uno = su ciclo brainstorming → aprobación.

## 2026-08-20 — Research GEO/AEO 2026 cruzado contra el backlog; council sobre priorización; sesión cerrada sin código
- **Contexto:** continuación de la sesión de ítems 8.9/8.10 (naming PRP/PRF). El usuario pidió validar `docs/research/Estrategias SEO AEO GEO 2026.md` contra `docs/SEO_AUDIT_2026.md` y las skills ya corridas, antes de seguir con 8.9.
- **Hallazgo:** 6 gaps del research no estaban en el backlog — agregados como ítems **8.11-8.16** (G1-G6 del research): 8.11 SSR/client-rendering (Crítica, no verificada), 8.12 robots.txt sin directivas de bots de IA (Alta), 8.13 sin táctica "Cite Sources" en copy médico (Alta), 8.14 sin `sameAs` en JSON-LD (Media), 8.15 AEO solo en 3 landings no en resto del sitio (Media), 8.16 sin fecha de "última actualización" (Media).
- **Validación vía `/llm-council`:** 5 advisors + peer review + chairman sobre "qué priorizar, y es 8.11 (G1, SSR) tan urgente como parece para un med spa local". Veredicto: **consenso unánime en 8.12 y 8.14** (riesgo cero, ejecutar cuando se retome). **8.11 queda especulativo** — el "69% de bots sin JS" es un promedio agregado de la web general, no evidencia de este sitio; 4 de 5 advisors + los 5 revisores de peer-review lo marcaron como no verificado. Recomendación del council: verificar con Search Console/GA4 antes de decidir sobre 8.11.
- **Bloqueo confirmado con el usuario:** no hay Search Console ni GA4 configurado en el proyecto. Se agregó **ítem 8.17** (nuevo, no viene del research) como prerequisito de facto — sin esto no se puede validar 8.11, 8.13, 8.15, 8.16.
- **Sin cambios de código** — sesión cerrada por pedido del usuario ("dejar documentado para retomar más tarde"). Todo el detalle del veredicto del council queda en `docs/SEO_AUDIT_2026.md` bajo "Nota — validación de research externo vía `/llm-council`".
- **Para retomar:** decidir si se configura Search Console/GA4 primero, o si se avanza directo con 8.12 (robots.txt, riesgo cero, no depende de nada) mientras tanto. `superpowers:brainstorming` obligatorio antes de tocar código en cualquiera de los dos.

## 2026-08-20 — SEO backlog ítem 5.4 cerrado sin implementar (preconnect/preload/font-display)
- **Contexto:** se corrió un consejo de 5 advisors (Contrarian, First Principles, Expansionist, Outsider, Executor + revisión entre pares) sobre si mover la fuente Poppins de `@import` en `src/index.css` a `<link>` en `index.html`.
- **Hallazgo clave:** `&display=swap` ya está presente en el `@import` actual — el problema de "texto invisible" que este ítem busca resolver ya está resuelto. Lo único que quedaba era una ganancia de latencia de conexión sin medir, probablemente de milisegundos.
- **Decisión del usuario:** dejar como está por ahora, sin ningún cambio de código. Se revisará más adelante con métricas reales (Lighthouse/Core Web Vitals) en vez de suposición.
- **Sin cambios de código** — solo documentación: decisión agregada a `DECISIONS.md`, ítem 5.4 marcado `Cerrado (no se implementa por ahora)` en `docs/SEO_AUDIT_2026.md` (gitignoreado).

## 2026-08-20 — SEO backlog ítem 2.3 cerrado: no hace falta `hreflang`
- **Contexto:** 2.3 estaba "Pendiente (decisión)" desde la sesión de 8.7 — bloqueado hasta confirmar si existe un sitio en inglés real detrás de las rutas EN (`/privacy-policy`, `/terms-of-use`, `/tratamientos-disclaimer`).
- **Confirmado por el usuario:** no existe sitio en inglés. Esas rutas son solo alias de páginas legales, no una traducción completa del sitio.
- **Verificado en código:** las 3 rutas EN ya están en `Disallow` de `public/robots.txt` (comentario "Disallow duplicate language variants (non-canonical)") — nunca se indexan.
- **Conclusión:** no se implementa `hreflang`. Con esas rutas bloqueadas de indexación, agregar `hreflang` crearía referencias "dangling" sin ningún beneficio (riesgo real de error en Search Console).
- **Sin cambios de código** — solo documentación: decisión agregada a `DECISIONS.md`, ítem 2.3 marcado `Hecho (decisión: no aplica)` en `docs/SEO_AUDIT_2026.md` (gitignoreado).

## 2026-08-20 — Fix: hueco vacío bajo las imágenes en FeaturedServices (regresión de SEO 5.2)
- **Contexto:** el usuario reportó, mirando el sitio en el navegador, que las imágenes de la sección "Tratamientos destacados" (patrón Z de Home) no cubrían toda la mitad de su banda — quedaba un espacio vacío abajo, tipo "cuadrícula de ajedrez". Investigado con `superpowers:systematic-debugging` antes de proponer ningún fix.
- **Causa raíz:** la migración a `<Picture>` de la sesión SEO 5.2 (commit `ec00ab2`) envolvió el `<img>` en un `<picture>` sin ningún estilo. El CSS de `FeaturedServices.module.css` (`.mediaImage { height: 100% }` a partir de 1024px) esperaba que el `<img>` fuera el hijo directo del contenedor flex `.mediaCol` — al interponerse un `<picture>` sin altura definida, ese `height:100%` no podía resolverse (colapsa a `auto`), y el navegador caía a la relación de aspecto nativa de la imagen, dejando espacio vacío. Confirmado con medición real en el navegador (`mediaCol` 678.9px vs `img` 426.7px) antes de tocar código.
- **Fix (root cause, 1 línea):** en [Picture.jsx](src/components/shared/Picture/Picture.jsx), agregado `style={{ display: 'contents' }}` al `<picture>` — lo saca del árbol de cajas de layout, restaurando el comportamiento pre-migración en los 7 consumidores de `Picture`/`MediaBlock` del sitio.
- **Verificado en browser:** las 3 bandas de `FeaturedServices` ahora llenan exactamente el alto del contenedor (678.9/630.9/678.9px, sin gap); `/nosotros` sin regresión (680px antes y después, ya coincidía por casualidad de aspecto de la foto). Sin errores de consola.
- **`npm run test:visual`:** mejoró de 11 fallos/21 passed a **9 fallos/23 passed** — los 2 tests que empezaron a pasar (`Home Page - Founder & Featured Services`, `Postoperatorios Landing - Viewport` desktop) son exactamente los afectados por este bug; sus baselines eran de antes de la migración rota, así que el fix hizo que el render vuelva a coincidir con ellas. Los 9 fallos restantes siguen siendo los mismos preexistentes no relacionados (ya documentados en sesiones previas).

## 2026-08-20 — SEO backlog ítem 4.2: página de bio del fundador (E-E-A-T)
- **Contexto:** ítem de severidad Media, "sin página de autor/bio médica". Diseño y plan vía `superpowers:brainstorming`/`writing-plans` (spec `docs/superpowers/specs/2026-08-20-item-4.2-founder-bio-page-design.md`, plan `docs/superpowers/plans/2026-08-20-founder-bio-page.md`), ejecutado inline con `superpowers:executing-plans`, directo en `main` (decisión del usuario).
- **Alcance:** solo Nancy Nieto (fundadora/directora) — enfoque A de 3 evaluados. Bios de staff con licencia (Tony Díaz DO, Dr. Miguel Ramos) quedan fuera de alcance, posible ítem futuro.
- **Restricción explícita de Nancy:** no publicar números de licencia ni datos que faciliten su mal uso (patrón conocido en Florida de operadores no licenciados usando licencias ajenas). Solo texto cualitativo ya aprobado en `aboutPage.js` — ver `DECISIONS.md`.
- **Cambio 1 (datos):** nuevo export `founderBioPage` en [aboutPage.js](src/data/aboutPage.js) — reutiliza (no duplica) `founderSpotlight`/`founderPhilosophy`/`quote`/`cta` ya existentes, con `hero` propio.
- **Cambio 2 (template):** nuevo [FounderBioPage.jsx](src/components/templates/FounderBioPage/FounderBioPage.jsx) + `.module.css` — copia literal de 4 secciones ya existentes en `AboutPage.jsx` (Hero, Founder Spotlight, Philosophy+Quote, Final CTA), mismas clases/estilos/variantes `motion`, sin componentes inventados. Sin Academy/Team/Testimonials (confirmado con usuario).
- **Cambio 3 (ruta):** nueva página [NancyNieto.jsx](src/pages/NancyNieto.jsx) en `/nosotros/nancy-nieto`, registrada en [routes.jsx](src/routes.jsx). Helmet con meta/OG/Twitter tags + JSON-LD `@type: "Person"` (sin `hasCredential`, sin licencia) con `worksFor` apuntando a la entidad `HealthAndBeautyBusiness` ya usada en `/nosotros`.
- **Cambio 4 (cross-link):** en [AboutPage.jsx](src/components/templates/AboutPage/AboutPage.jsx), agregado link "Conoce más sobre Nancy →" bajo el founder spotlight de `/nosotros`, apuntando a la nueva página.
- **Verificado en browser:** `/nosotros/nancy-nieto` renderiza las 4 secciones sin errores de consola; JSON-LD parseado y válido; sin números de licencia en el texto renderizado. `/nosotros` muestra el nuevo link con `href="/nosotros/nancy-nieto"` correcto.
- **`npm run test:visual`:** 2 tests nuevos agregados (`Nancy Nieto Bio Page - Viewport`, `Nosotros Page - Founder Cross-link`) con baselines generadas, ambos pasan. Suite completa: 21 passed, 11 failed — los 11 fallos confirmados preexistentes (páginas Home/Contacto/PRP/Postoperatorios/Hidrofacial/FAQ, ninguna tocada por este cambio — ver `git diff HEAD~4 --stat` de la sesión).
- **Fuera de alcance:** ítem 5.3 (manualChunks/compresión de build), bios de staff médico adicional.

## 2026-08-20 — SEO backlog ítem 5.2: `.webp` para las 126 imágenes vía componente `Picture`
- **Contexto:** segundo ítem de Alta severidad del bloque de performance/imágenes, tras 5.1. Diseño y plan vía `superpowers:brainstorming`/`writing-plans` (spec `docs/superpowers/specs/2026-08-20-item-5.2-webp-avif-design.md`, plan `docs/superpowers/plans/2026-08-20-item-5.2-webp-avif.md`), ejecutado inline con `superpowers:executing-plans`, directo en `main` (decisión del usuario).
- **Cambio 1 (generación):** nuevo script [generate-webp.js](.agents/skills/assets-optimizer/scripts/generate-webp.js) (usa `sharp`, ya devDependency) — genera un `.webp` hermano (calidad 80) por cada `.jpg` en `public/assets/images`, sin borrar los `.jpg` originales. Corrido una vez: 126 `.webp` creados.
- **Cambio 2 (componente):** nuevo [Picture.jsx](src/components/shared/Picture/Picture.jsx) — envuelve `<picture><source type="image/webp">…<img src=".jpg"></picture>`, API pasthrough (mismos props que cualquier `<img>`), sin lógica de detección JS.
- **Cambio 3 (migración, 9 puntos):** reemplazado `<img>` por `<Picture>` en [MediaBlock.jsx](src/components/shared/MediaBlock/MediaBlock.jsx), [HeroMedia.jsx](src/components/utils/HeroMedia.jsx) (solo rama imagen, la rama `<video>` no se tocó), [TreatmentDetailPage.jsx](src/components/templates/TreatmentDetailPage/TreatmentDetailPage.jsx), [LandingPage.jsx](src/components/templates/LandingPage/LandingPage.jsx), [CategoryPage.jsx](src/components/templates/CategoryPage/CategoryPage.jsx), [FeaturedServices.jsx](src/components/sections/FeaturedServices/FeaturedServices.jsx) (3 imágenes), [BeforeAfterGrid.jsx](src/components/shared/BeforeAfterGrid/BeforeAfterGrid.jsx) (before + after). Mismos props hacia arriba, sin cambios de comportamiento (`onError`, `width`/`height`, `loading` preservados donde ya existían).
- **Verificado en browser** en múltiples rutas (`/`, `/faciales/hidrofacial`, `/limpieza-facial-profunda`, `/faciales`): cada `<img>` migrado ahora vive dentro de `<picture>` con `<source type="image/webp">` apuntando al `.webp` correcto, atributos originales (`width`/`height`/`loading`) preservados, sin errores de consola, sin cambio visual.
- **Barrido final:** `grep -rn "<img" src/ --include="*.jsx"` → único resultado es el `<img>` interno de `Picture.jsx` (esperado).
- **`npm run test:visual`:** 11 fallos, todos investigados y confirmados preexistentes/no relacionados — el pop-up de WhatsApp con timing variable (mismo hallazgo documentado en la sesión de 8.4) y snapshots de texto/listas desactualizados de sesiones previas (contenido, no imágenes). Ninguna imagen migrada muestra diff de píxeles real en las capturas — confirmado inspeccionando los diffs de `home-featured-services`, `hidrofacial-problem` y `prf-problem`. No se tocaron esos tests/snapshots — fuera de alcance.
- **Fuera de alcance (documentado en la spec):** `.avif`, integración al pipeline de `vite build` (ítem 5.3, todavía pendiente), `srcset` responsivo con múltiples tamaños.
- Marcado `Hecho` 5.2 en `docs/SEO_AUDIT_2026.md` (gitignoreado).

## 2026-08-20 — SEO backlog ítem 5.1 (parcial): `loading="lazy"`/`decoding="async"` en MediaBlock.jsx
- **Contexto:** primer ítem de Alta severidad del bloque de performance/imágenes. Diseño vía `superpowers:brainstorming` (spec `docs/superpowers/specs/2026-08-20-item-5.1-medblock-lazy-loading-design.md`).
- **Hallazgo previo a implementar:** el wrapper de `MediaBlock` ya reserva espacio (`width:100%`/`height:100%` + `aspectRatio` opcional inline), así que `width`/`height` explícitos en el `<img>` no aportan nada real (la CSS los sobreescribe). `srcset` requiere variantes de imagen (`.webp`/tamaños) que no existen todavía — eso es el ítem 5.2, pendiente. `Hero` (above-the-fold) no usa `MediaBlock` (confirmado por grep, usa background-image), así que no hay riesgo de retrasar el LCP.
- **Cambio:** en [MediaBlock.jsx](src/components/shared/MediaBlock/MediaBlock.jsx), agregados `loading="lazy"` y `decoding="async"` al `<img>`. Sin cambios de props ni CSS.
- Verificado en browser (`/faciales/hidrofacial`): el `<img class="_image_...">` (instancia de `MediaBlock`, distinguido de otros `<img>` de la página que no pasan por este componente) renderiza con `loading="lazy" decoding="async"`; sin errores de consola; sin cambio visual.
- Marcado `Hecho (parcial)` 5.1 en `docs/SEO_AUDIT_2026.md` — `width`/`height`/`srcset` reales quedan atados a resolver 5.2 primero.

## 2026-08-20 — SEO backlog ítem 8.7 (cierre): `geo`/`openingHoursSpecification` también en Contacto.jsx
- **Contexto:** al revisar qué seguía en el backlog, se detectó que `docs/SEO_AUDIT_2026.md` tenía 8.7 marcado "Parcial/Pendiente" pero el código ya tenía `geo` y `openingHoursSpecification` resueltos en `Home.jsx` (sesión previa, commit `ef0d6c1`) — el doc había quedado desactualizado. El hallazgo original de 8.7 apuntaba a **dos** archivos (`Home.jsx`, `Contacto.jsx`); `Contacto.jsx` nunca recibió esos campos.
- **Cambio:** en [Contacto.jsx](src/pages/Contacto.jsx), dentro de `mainEntity.location[0]`, agregados `telephone`, `url`, `geo` (mismas coordenadas del pin real de GBP: lat `26.6627718`/lng `-80.0558881`) y `openingHoursSpecification` (mismo horario que `Home.jsx`) — shape idéntico al de `Home.jsx:56-90`. Sin datos nuevos: se reutilizaron los ya confirmados por el usuario y en uso en `Home.jsx`.
- Verificado en browser (`http://localhost:3000/contacto`): `JSON.parse` → `mainEntity.location[0]` contiene `geo`/`openingHoursSpecification` con los valores correctos, sin errores de consola, sin cambio visual.
- Spec breve escrita en `docs/superpowers/specs/2026-08-20-item-8.7-contacto-geo-hours-design.md` (gitignoreado, no commiteado) vía `superpowers:brainstorming`.
- Marcado `Hecho` 8.7 en `docs/SEO_AUDIT_2026.md` (gitignoreado) — corrige el estado desactualizado.

## 2026-08-20 — SEO backlog ítem 8.4: JSON-LD `Service`+`FAQPage` en las 3 landing pages destacadas
- **Contexto:** plan `docs/superpowers/plans/2026-08-20-item-8.4-json-ld-landings.md`, ejecutado con `superpowers:executing-plans`. Cierra el último hallazgo Alta pendiente del Bloque 8.
- **Cambio 1 (contenido):** agregadas 2 FAQs nuevas de desambiguación PRP/PRF a `landingPages.prfYFibrina.faq.items` en [landingPages.js](src/data/landingPages.js) (de 5 a 7 preguntas) — se renderizan automáticamente en el accordion visible y en el JSON-LD.
- **Cambio 2 (JSON-LD):** agregado `<script type="application/ld+json">` con `@graph` de 2 nodos (`Service` + `FAQPage`) dentro del `<Helmet>` existente de [LimpiezaFacial.jsx](src/pages/landings/LimpiezaFacial.jsx), [PrfYFibrina.jsx](src/pages/landings/PrfYFibrina.jsx) y [Postoperatorios.jsx](src/pages/landings/Postoperatorios.jsx) — mismo shape de `Service` que los 5 `[treatment].jsx` (sin `sameAs`, sin campos de entidad extra). `PrfYFibrina.jsx` requiere `.replace(/\n/g, ' ')` en `hero.title` porque ese string tiene un `\n` literal.
- **Hallazgo evitado:** verificado (`grep -in "vampire"`) que la palabra "Vampire Facial" (marca registrada, sin licencia) no aparece en ningún string tocado.
- Verificado en browser: `JSON.parse` de cada script parsea sin errores; conteo de `mainEntity` correcto (5/7/5); sin cambio visual (edición solo en `<head>`); sin errores de consola.
- **Fix colateral necesario:** `tests/faq-consistency.spec.js` tenía hardcodeado `toHaveLength(5)` / `toHaveCount(5)` para todas las rutas de FAQ, incluida `/prf-y-fibrina` — actualizado a un mapa `{path, count}` por ruta para reflejar las 7 FAQs nuevas de esa landing.
- **Test:visual — hallazgo pre-existente, no tocado:** `npm run test:visual` mostró fallos en `/contacto` (FAQ consistency: solo 4 preguntas, no 5) y en varios snapshots de sección "problem"/hero en páginas no tocadas por este cambio (Home, Hidrofacial, Contacto, y las 3 landings en mobile-safari) — diffs de 6-10% en secciones que este cambio nunca toca (solo se editó `<head>`). Se investigó y se concluyó que son fallos preexistentes/flaky (timing de fuentes, no relacionados a JSON-LD ni al FAQ). No se tocaron esos snapshots ni el archivo `Contacto.jsx` — fuera de alcance de este ítem.
- Registrados ítems 8.9 (auditoría de desambiguación de naming en tratamientos) y 8.10 (estrategia de posicionamiento PRP/PRF — Vampire Facial® sin licencia) en `docs/SEO_AUDIT_2026.md` como Pendiente/Media, referenciando la spec de este plan.
- Marcado `Hecho` 8.4 en `docs/SEO_AUDIT_2026.md` (gitignoreado).

## 2026-08-20 — Horario real visible en la card de contacto (Contacto.jsx)
- **Contexto:** derivado de la sesión de 8.7 (JSON-LD geo/horario) — el usuario, al revisar la card visual de contacto, notó que el campo "Horario" mostraba el texto genérico "Atención dermoestética con cita previa" en vez del horario real ya usado en el JSON-LD.
- **Cambio:** en [Contacto.jsx:384](src/pages/Contacto.jsx:384), reemplazado ese texto por "Lun-Sáb 9:00 AM – 5:00 PM · Dom 9:00 AM – 1:00 PM" — mismos datos de horario ya confirmados por el usuario y usados en `openingHoursSpecification` de `Home.jsx`.
- Verificado en browser (`http://localhost:3000/contacto`): el texto aparece correctamente en la sección "SEDE PRINCIPAL".
- **Nota:** el dato sigue hardcodeado en el componente (no en `src/data/contactPage.js`), siguiendo el patrón preexistente de esa card (dirección/teléfono/email también hardcodeados ahí) — no se refactorizó, fuera de alcance del pedido.

## 2026-08-20 — SEO backlog ítem 8.7: `geo`/`openingHoursSpecification` en el JSON-LD principal
- **Contexto:** priorización decidida vía `/llm-council` entre 8.4, 8.7, 2.3 y la auditoría de redirects 301 — el consejo recomendó cerrar primero 8.7 por ser edición aditiva de datos ya empezados (`aggregateRating` agregado en sesión previa), sin tocar routing.
- **Verificaciones previas (gate del propio consejo, antes de escribir código):** primer intento con coordenadas del iframe de Google Maps embebido en `Contacto.jsx:446` (lat `26.6531589`, lng `-80.0543666` — apuntan a la dirección postal genérica); el usuario luego proveyó el link real del listado de Google Business Profile ("DERMA.M") con coordenadas del pin del negocio (lat `26.6627718`, lng `-80.0558881`), que reemplazaron a las del iframe por ser más precisas (pin real del negocio vs. geocodificación de dirección). Usuario confirmó explícitamente que el `aggregateRating` (4.9★/117 reviews) ya escrito está respaldado por reseñas reales verificables — no se tocó.
- **Cambio:** en [Home.jsx](src/pages/Home.jsx), dentro de `@graph[0].location[0]` (HealthAndBeautyBusiness → West Palm Beach), agregados `geo` (`GeoCoordinates`, lat `26.6627718`/lng `-80.0558881` del pin real de GBP) y `openingHoursSpecification` (Lun-Sáb 9:00-17:00, Dom 9:00-13:00, datos provistos por el usuario).
- Verificado en browser (`http://localhost:3000`): `JSON.parse` del script `application/ld+json` → `@graph[0].location[0]` contiene `geo` y `openingHoursSpecification` con los valores correctos, sin errores de consola, sin cambio visual (edición solo en `<head>`).
- Marcar `Hecho` 8.7 en `docs/SEO_AUDIT_2026.md` (gitignoreado) en la próxima edición de ese archivo.

## 2026-08-20 — SEO backlog ítem 8.8: metadatos completos en LegalResources.jsx — cierre del "Cubo 1"
- **Contexto:** cuarto y último ítem del "Cubo 1" (batch de 5 fixes mecánicos: 8.5, 8.6, 8.8, 2.1, 2.2 — todos cerrados con este). El `<Helmet>` de [LegalResources.jsx](src/pages/LegalResources.jsx) (ruta `/legal`, confirmada en `routes.jsx`) solo tenía `title` + `description`.
- **Cambio:** agregados `canonical`, `og:type/title/description/url/image`, `twitter:card/title/description/image`, `robots: index, follow` — mismo patrón que ya usan los demás hubs (`IvTherapy.jsx`, `Capilar.jsx`). Sin JSON-LD nuevo (fuera de alcance del hallazgo original).
- Verificado en browser: exactamente un `<link rel="canonical">` (`https://dermamskinhealth.com/legal`), `og:url` correcto, `robots` presente, sin errores de consola, sin cambio visual.
- Marcado `Hecho` 8.8 en `docs/SEO_AUDIT_2026.md` (gitignoreado). Los 5 ítems del Cubo 1 quedan cerrados.

## 2026-08-20 — SEO backlog ítem 8.6: `Service.url` determinístico en las 5 páginas de tratamiento
- **Contexto:** tercer ítem del "Cubo 1". Los 5 `[treatment].jsx` (faciales, laser, dental, corporales, capilar) construían `Service.url` del JSON-LD con `` `https://dermamskinhealth.com${window?.location?.pathname || ''}` `` en render — frágil/no determinístico. Cada archivo ya calculaba el mismo valor de forma determinística para su propio `<link rel="canonical">` a partir de `treatment` (`useParams()`) + prefijo de categoría.
- **Cambio:** reemplazado `window?.location?.pathname` por el mismo template literal que ya usa el canonical de cada archivo — `faciales/${treatment}`, `laser-y-luz/${treatment}`, `dental-estetico/${treatment}`, `corporales/${treatment}`, `capilar/${treatment}`.
- Verificado en browser en 2 categorías (`/faciales/hidrofacial`, `/dental-estetico/blanqueamiento-dental`): `Service.url` del JSON-LD coincide exactamente con `canonical`, sin errores de consola.
- Marcado `Hecho` 8.6 en `docs/SEO_AUDIT_2026.md` (gitignoreado).

## 2026-08-20 — SEO backlog ítem 8.5: poblado `itemListElement` en el JSON-LD de IvTherapy.jsx
- **Contexto:** segundo ítem del "Cubo 1". El `ItemList` de [IvTherapy.jsx](src/pages/hubs/IvTherapy.jsx) tenía `name`/`url`/`description` pero sin `itemListElement`.
- **Particularidad frente a los demás hubs:** los 11 protocolos de IV Therapy (`src/data/categoryPages.js` → `ivTherapy.services.treatments`) no tienen página propia por decisión de producto ya tomada (baja relevancia comercial individual en la zona) — todos sus CTA apuntan a `/contacto`, no a un slug de tratamiento. Confirmado con el usuario antes de implementar.
- **Cambio:** agregados 11 `ListItem` (`position` 1-11, `name` = cada protocolo en Title Case, `url` idéntica para los 11 = `https://dermamskinhealth.com/iv-therapy`, la del hub, ya que no existen URLs individuales).
- Verificado en browser: `itemListElement.length === 11` en el JSON-LD parseado, sin errores de consola, sin cambio visual (edición solo en `<head>`).
- **Nota abierta del usuario, no accionada en este ciclo:** puede haber oportunidad de mejorar las descripciones de estos protocolos — no se tocó, queda para un ciclo aparte si se decide perseguirlo.
- Marcado `Hecho` 8.5 en `docs/SEO_AUDIT_2026.md` (gitignoreado).

## 2026-08-20 — SEO backlog ítems 2.1/2.2: `html lang="es"` y reemplazo del título placeholder de AI Studio
- **Contexto:** primer ítem del "Cubo 1" (batch de 5 fixes mecánicos del backlog SEO), acordado tras `/llm-council`. Diseño y plan pasaron por `superpowers:brainstorming`/`writing-plans` (ver `docs/superpowers/specs/2026-08-20-cubo1-mechanical-seo-fixes-design.md` y `docs/superpowers/plans/2026-08-20-cubo1-mechanical-seo-fixes.md`, ambos gitignoreados).
- **Cambio:** en [index.html](index.html), `<html lang="en">` → `<html lang="es">` (el sitio es en español); `<title>My Google AI Studio App</title>` → `<title>Derma.M | Medical Spa West Palm Beach, Florida</title>` (placeholder de exportación de Google AI Studio, visible a crawlers/scrapers sin JS antes de que Helmet lo pise en runtime).
- Verificado: `document.documentElement.lang` → `"es"` en el navegador; `curl http://localhost:3000/` (HTML fuente, sin ejecutar JS) muestra `lang="es"` y el título correcto.
- Marcados `Hecho` 2.1 y 2.2 en `docs/SEO_AUDIT_2026.md` (gitignoreado).

## 2026-08-20 — SEO backlog ítem 8.7 (parcial): agregado aggregateRating al JSON-LD principal
- **Contexto:** tercera pregunta bloqueante de la sesión de `/llm-council`. Usuario confirmó el rating real de Google: 4.9 sobre 117 reseñas ("DERMA.M · 4.9 · 117 Google reviews · Medical spa in West Palm Beach, Florida").
- **Cambio:** agregado `"aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "117"}` al nodo `HealthAndBeautyBusiness` en [Home.jsx](src/pages/Home.jsx) (dentro del `@graph`) y en [Contacto.jsx](src/pages/Contacto.jsx) (dentro de `mainEntity`).
- Verificado en browser: JSON-LD parsea sin errores en ambas páginas, `aggregateRating` presente con los valores correctos.
- **Ítem marcado "Parcial", no "Hecho":** el hallazgo original de 8.7 también pedía `geo` (coordenadas) y `openingHoursSpecification` — no se pidieron esos datos en este ciclo, quedan pendientes para un próximo ciclo.
- **Nota para el futuro:** el usuario preguntó por automatizar este número vía la API de Google Business Profile — quedó identificado como un proyecto aparte (no para esta sesión), el valor queda hardcodeado por ahora.

## 2026-08-20 — docs/MEDICAL_COMPLIANCE.md: sumada sección complementaria de reglas legales de Florida (wiki)
- **Contexto:** tras cerrar el ítem 4.1 con el doc de copy compliance del usuario, el usuario señaló que la matriz de Florida del wiki externo (descartada antes por cobertura insuficiente por-tratamiento) podía servir igual como complemento — no reemplaza las 8 reglas de copy, agrega otro tipo de información (legal/operativa, no de redacción).
- **Cambio:** agregada una nueva sección "## Florida Legal & Operational Rules (complementary reference)" a `docs/MEDICAL_COMPLIANCE.md`, copiando textual (sin modificar) solo las subsecciones "Key Rules" y "Claims Framework" del wiki (`florida-healthcare-beauty-advertising-compliance.md`) — delegación médica, director médico requerido, consentimiento informado, retención de historias clínicas, reglas de Meta Ads (pagado/orgánico), framework de evidencia por tipo de claim, y privacidad (HIPAA/FIPA/Meta CAPI). **No** se copió la tabla de matriz por-servicio (sigue sin aplicar, solo 3 de ~25 tratamientos coinciden).
- `docs/` sigue gitignoreado — no se commitea el archivo, solo esta entrada de PROGRESS.md.

## 2026-08-20 — SEO backlog ítem 4.1: creado docs/MEDICAL_COMPLIANCE.md (copiado del research existente del usuario, no generado)
- **Contexto:** durante una sesión de `/llm-council` sobre cómo secuenciar el resto del backlog SEO, una de las 3 preguntas bloqueantes era si centralizar el compliance médico (ítem 4.1). El usuario aclaró que ya había hecho ese research él mismo por cada tratamiento y que debía estar en `docs/` — no estaba en este checkout (`F:\EmpathoAI-projects\DermaM_Website\docs`, gitignoreado), pero sí en un checkout más viejo del proyecto en otra unidad: `D:\Derma_Content\Website_DermaM_V2\derma.m\docs\MEDICAL_COMPLIANCE.md`.
- **Cambio:** copiado el archivo tal cual (sin modificar una palabra) a `docs/MEDICAL_COMPLIANCE.md` en este repo. Contiene 8 reglas de compliance de copy médico aplicables a todo el sitio (no por tratamiento): prohibición de garantías, lista de palabras baneadas, CTA obligatorio pre-tratamiento, disclaimer de footer siempre visible, solo fotos reales de antes/después, solo testimonios reales, prohibición de diagnosticar/curar, posicionamiento health-first.
- **Nota importante:** también se encontró en el wiki externo (`F:\OS-EmpathoAI-SecondBrain`) una matriz de compliance de Florida por tratamiento (`florida-healthcare-beauty-advertising-compliance.md`), pero solo cubre 3 de los ~25 tratamientos reales del sitio (el resto de sus filas son Botox/fillers que Derma.M no ofrece) — **no se usó** para este documento, se descartó por cobertura insuficiente. El doc que se copió es el correcto y completo.
- **Pendiente, fuera de alcance de este cambio:** no se hizo una pasada de verificación del copy actual del sitio (Footer, `TreatmentDisclaimer.jsx`, `llms.txt`, `src/data/treatmentPages.js`) contra estas 8 reglas — eso queda como un ítem separado a futuro, no incluido acá.
- Marcado `Hecho` el ítem 4.1 en `docs/SEO_AUDIT_2026.md`. `docs/` sigue gitignoreado — el archivo no se commitea, solo esta entrada de PROGRESS.md deja constancia versionada.

## 2026-08-20 — SEO backlog ítems 8.2/8.3: canonical faltante en Nosotros.jsx, resto de páginas legales OK
- **Contexto:** siguiendo el backlog de `docs/SEO_AUDIT_2026.md` tras cerrar 8.1. Al revisar el ítem 8.3 ("`VITE_SITE_URL` usada condicionalmente en 7 páginas, sin documentar en `.env.example`") se confirmó que la variable no está seteada en ningún lugar del repo (`.env.example`, `vite.config.js`, ni config de deploy) — solo se lee en 7 componentes de página.
- **Hallazgo:** de las 7 páginas, 6 (TermsOfUse, PrivacyPolicy, BookingPolicy, Accessibility, NoticePrivacyPractices, TreatmentDisclaimer) ya tenían fallback correcto a `https://dermamskinhealth.com` y siempre renderizaban su canonical — sin bug real. Solo `Nosotros.jsx` tenía `siteUrl = ... || ''` (fallback a string vacío) — si `VITE_SITE_URL` no está seteada en el build de producción, esa página sale sin `<link rel="canonical">`.
- **Cambio:** [Nosotros.jsx](src/pages/Nosotros.jsx) — reemplazado el canonical condicional/calculado por uno fijo (`https://dermamskinhealth.com/nosotros`), mismo patrón que Contacto/tratamientos del ítem 8.1.
- Verificado en browser: `/nosotros` renderiza un único canonical correcto, sin errores de consola.
- Marcados `Hecho` 8.2 y 8.3 en `docs/SEO_AUDIT_2026.md` (8.2 quedó resuelto de facto al cerrar 8.1; ver nota en ese doc).

## 2026-08-20 — Nota: auditoría de redirecciones 301 queda para el final, antes de publicar
- Usuario preguntó si el remapeo de URLs del sitio anterior (redirecciones 301) está contemplado. Confirmado: `public/.htaccess` (protegido) ya tiene un bloque completo de redirects WordPress→sitio nuevo (páginas core, 3 landings, hubs Faciales/Corporales, patrones genéricos de WP). No hay redirects para Láser y Luz, Dental Estético, Capilar ni IV Therapy — confirmado por el usuario que es porque esas secciones no existían en el sitio anterior, no un olvido.
- **Acción diferida a propósito:** re-auditar el `.htaccess` contra el sitemap/lista real de URLs del sitio anterior como último paso antes de publicar el rediseño (no ahora, no es parte del ciclo actual de ítems del backlog SEO). Detalle completo en `docs/SEO_AUDIT_2026.md` sección 5 (gitignoreado, no versionado).
- No se modificó `.htaccess` ni ningún otro archivo de código en este intercambio.

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

## 2026-08-20 — Sitio consolidado a una sola sede (West Palm Beach)
- Una segunda ubicación que nunca llegó a abrir se retiró de todo el sitio: schema/JSON-LD (`Home.jsx`, `Contacto.jsx`, las 5 páginas de tratamiento), meta tags (title/description/OG/Twitter en Home, Contacto, Nosotros, 6 hubs, 3 landings), UI visible (`Navbar.jsx`, `FinalCTA.jsx`, sección de sedes de `Contacto.jsx` → una sola tarjeta centrada), datos (`contactPage.js`, `legalPages.js`) y archivos públicos (`llms.txt`, `public/team/vcards/*.vcf`). Verificación: grep en `src/` y `public/` = 0. `src/routes.jsx`, `sitemap.xml`, `robots.txt` sin cambios.
- Auditoría UX post-cambio (`ux-heuristics`): la sección "Nuestra sede" de `Contacto.jsx` quedó redundante con la columna del formulario (misma dirección + mapa + CTAs) → eliminada; FAQ pasa a ser la sección "4.". Pendiente aparte: el popup flotante de WhatsApp tapa contenido al scrollear en mobile (severidad 3, no implementado).

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
