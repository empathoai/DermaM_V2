# Auditoría SEO / GEO / AEO 2026 — Derma.M

> **Fuente de verdad técnica (análisis + best practices): `docs/TECHNICAL_SEO_GEO_AUDIT_2026.md`** (forzado a git, consolida 7 fuentes de research + inspección del sitio, 2026-08-26).
> **Este archivo = backlog operativo**: ítems accionables, un cambio por ciclo, estados `Hecho`/`Pendiente`.
>
> Documento de seguimiento persistente. Se lee al inicio de cada sesión que toque SEO/schema/performance/contenido.
> **Regla de ejecución (de `CLAUDE.md`): cada ítem del backlog requiere aprobación explícita del usuario antes de implementarse — un ítem por ciclo, no en bloque.** Al aprobar un ítem, marcarlo `Hecho` acá y registrar el cambio en `PROGRESS.md`/`DECISIONS.md`/`MEMORY.md` según corresponda.

Fuentes usadas para esta auditoría:
- Wiki personal (`F:\OS-EmpathoAI-SecondBrain\wiki\...`): `geo-ai-search-optimization.md`, `brand-entity-seo.md`, `local-seo-google-maps-domination.md`, `65-seo-factors-audit-checklist.md`.
- Skill suite del proyecto (`.agents/skills/`): `seo-checklist-65`, `seo-audit`, `schema`, `ai-seo`, `seo-local`, `site-architecture`, `programmatic-seo`.
- Skills externas instaladas para esta auditoría (vía `npx skills`, aprobadas por el usuario): `bencium-aeo` (2.5K installs — AEO/content-for-AI-citation) y `keyword-research` de `kostja94/marketing-skills` (1.1K installs).
- Relevamiento directo del código actual (agente Explore, sesión 2026-08-20).

---

## 1. Resumen ejecutivo

### Ya está bien — no tocar
- NAP consistente (nombre/dirección/teléfono) en Footer, JSON-LD de Home y Contacto, y `llms.txt`.
- `public/llms.txt` presente y completo (formato llmstxt.org), con sección de disclaimers médicos para AI crawlers.
- `robots.txt` y `sitemap.xml` coherentes entre sí y con las rutas canónicas en español.
- JSON-LD presente en Home, Contacto, Nosotros, los 6 hubs, los 5 templates de tratamiento y `FAQAccordion`.
- Direcciones duplicadas (Miami) ya limpiadas en una sesión previa (ver `PROGRESS.md`).

### Qué falta — panorama en una frase
El sitio tiene la infraestructura básica de SEO/GEO bien encaminada (schema, llms.txt, NAP), pero tiene **bugs concretos de schema/canonical**, **cero contenido optimizado para citación por IA (AEO)** en las 3 landing pages destacadas, y **ninguna imagen en formato moderno** (afecta Core Web Vitals, que también pesa en GEO).

---

## 2. Backlog por bloque (checklist de 65 factores)

Cada ítem: `Severidad` · `Estado: Pendiente`. Actualizar el estado al aprobarse/implementarse.

### Bloque 8 — Schema & Datos Estructurados

| # | Hallazgo | Archivo(s) | Severidad | Estado |
|---|---|---|---|---|
| 8.1 | `<link rel="canonical">` **duplicado** en la misma página (dos tags renderizados a la vez) | `src/pages/Contacto.jsx:79-80`; los 5 `src/pages/treatments/*/[treatment].jsx:61-62` | Crítica | Hecho (2026-08-20) |
| 8.2 | Dominio de fallback incorrecto: `siteUrl = ... \|\| 'https://dermam.com'` (debería ser `dermamskinhealth.com`) | los 5 `[treatment].jsx` (ej. `faciales/[treatment].jsx:53`) | Alta | Hecho (2026-08-20) — resuelto de facto al eliminar el canonical calculado en 8.1 |
| 8.3 | `VITE_SITE_URL` se usa condicionalmente en 7 páginas pero no está documentada en `.env.example` | Nosotros, BookingPolicy, PrivacyPolicy, TermsOfUse, Accessibility, NoticePrivacyPractices, TreatmentDisclaimer | Alta | Hecho (2026-08-20) — ver nota |
| 8.4 | Sin JSON-LD en las 3 landing pages destacadas — solo meta/OG | `src/pages/landings/LimpiezaFacial.jsx`, `PrfYFibrina.jsx`, `Postoperatorios.jsx` | Alta | Hecho (2026-08-20) |
| 8.5 | `ItemList.itemListElement` vacío en hub | `src/pages/hubs/IvTherapy.jsx:25-31` | Media | Hecho (2026-08-20) |
| 8.6 | `Service.url` construido desde `window?.location?.pathname` en render — frágil, no determinístico | 5 `[treatment].jsx:69` | Media | Hecho (2026-08-20) |
| 8.7 | Falta `geo` (coordenadas), `openingHoursSpecification`, `aggregateRating` en el JSON-LD principal | `Home.jsx`, `Contacto.jsx` | Media | Hecho (2026-08-20) — `geo`/`openingHoursSpecification` OK. **`aggregateRating` REABIERTO como 8.18** (ver abajo): 4.9/117 hardcodeado sin reviews visibles en la página = riesgo de política de Review snippets de Google. |
| 8.18 | **NUEVO (auditoría 2026-08-26):** `aggregateRating` `4.9`/`117` hardcodeado en JSON-LD sin que la página muestre esas reviews. Política de Google exige valoraciones genuinas y visibles en la misma página → riesgo de acción manual / pérdida de rich results del dominio + honestidad (`MEDICAL_COMPLIANCE.md`). | `Home.jsx`, `Contacto.jsx` | Alta | **Hecho (2026-08-27)** — `aggregateRating` eliminado de `organizationNode` (fuente única). Se reintroducirá respaldado por reseñas visibles en 8.20 (APIFY, post-sesión B). |
| 8.20 | **NUEVO (2026-08-27):** Reseñas reales on-page. Hoy no hay bloque de reseñas en Home ni Contacto (los 6 bloques de `TestimonialsSection` en `categoryPages.js` son solo hubs, sin schema `Review`, con 5 estrellas fijas hardcodeadas). Objetivo: pull de las reseñas reales de Google Maps vía **APIFY** (GMaps Reviews scraper) → componente `ReviewsSection` en Home + Contacto (autor/fecha/texto reales, "no random") → items `Review` + `aggregateRating` en schema respaldados por lo visible. **Depende de** la sesión B (GBP) para confirmar el corpus real de reseñas (si ≠ 117@4.9, se corrige a la realidad). No bloquea el deploy. | `Home.jsx`, `Contacto.jsx`, componente nuevo `ReviewsSection`, integración APIFY | Media | Pendiente — sub-proyecto propio, post-sesión B. Ver `docs/seo-setrategies/LOCAL-SEO-ANALYSIS-dermam-redesign.md` §5 + Top-10 #2. |
| 8.8 | `/legal` sin canonical, OG, twitter ni JSON-LD | `src/pages/LegalResources.jsx` | Media | Hecho (2026-08-20) — canonical/OG/twitter/robots agregados; JSON-LD no, fuera de alcance |
| 8.9 | Auditoría de desambiguación de naming (siglas/nombres técnicos) en páginas de tratamiento — sitio completo | Ver `docs/superpowers/specs/2026-08-27-item-8.9-plasma-rico-en-plaquetas-naming-design.md` | Media | Hecho (2026-08-27) — nombre público unificado a "Plasma Rico en Plaquetas y Fibrina" en 11 sitios (nav ×2, footer, FeaturedServices, categoryPages, CTA headline, breadcrumb schema, title/og/twitter, schema desc, 2 FAQ que nombran). Siglas solo en FAQ que explican PRP vs PRF. Slug `/prf-y-fibrina` sin cambio (ver `DECISIONS.md`). El resto de tratamientos ya usan nombres deletreados — no había otro caso de sigla como nombre. |
| 8.10 | Estrategia de posicionamiento PRP/PRF — categoría de mercado (Vampire Facial® sin licencia, diferenciación PRP+PRF, transparencia de precio) | Ver `docs/superpowers/specs/2026-08-27-item-8.9-plasma-rico-en-plaquetas-naming-design.md` | Hecho (2026-08-27) — sin código. Las FAQ ya diferencian PRP/PRF y explican el protocolo tópico con Dermapen (no inyección). El sitio no usa "Vampire Facial®" (marca registrada) — mantener así. Transparencia de precio = decisión de negocio/contenido del cliente, no ítem de código. |
| 8.11 (G1) | Sitio 100% client-side rendered (Vite SPA); JSON-LD se inyecta post-JS vía `react-helmet-async`. **Auditoría 2026-08-26:** confirmado que `index.html` = 432 B (shell vacío pre-JS) vía scan de Cloudflare. **PERO** Google oficial: renderiza JS (Chromium evergreen), todas las páginas 200 van a render queue, JSON-LD inyectado por JS es leído. El "69% sin JS" es promedio de la web general, no de este dominio. Veredicto del council intacto. | `package.json`, `vite.config.js`, todo el sitio | Crítica (no verificada) | **Bloqueado** — requiere Search Console (8.17) para medir indexación real antes de decidir si se ejecuta SSR/prerender |
| 8.12 (G2) | `robots.txt` solo tiene `User-agent: *` genérico — sin directivas específicas para bots de IA 2026. Taxonomía completa de tokens en `TECHNICAL_SEO_GEO_AUDIT_2026.md` §4. Recomendación por defecto: permitir todos los search bots explícitamente; opt-out de training (`GPTBot`/`ClaudeBot`/`Google-Extended`) = decisión de negocio, riesgo cero para SEO. | `public/robots.txt` | Alta | Pendiente — **PRIORIDAD 1. Confirmado ×4** (council + 2 deep-research + Google oficial + scan Cloudflare). Riesgo cero. |
| 8.13 (G3) | Táctica "Cite Sources / Statistics Addition" en copy médico. **Recalibrado 2026-08-26:** ni los 2 deep-research reports ni Google oficial corroboran los efectos (+41%/+115%) — vienen solo de `Estrategias SEO AEO GEO 2026` (ancla: Aggarwal et al. KDD 2024, no replicado). Re-enfocar como mejora de **claridad/conversión** vía RASTRO, no como palanca de ranking. | Copy médico en `src/data/*.js` | Media (baja de Alta) | Pendiente — post-8.17, multi-sesión, sign-off de `MEDICAL_COMPLIANCE.md` por página |
| 8.14 (G4) | `sameAs` en JSON-LD hacia perfiles externos verificados. **Auditoría 2026-08-26:** hoy `Home.jsx` tiene `sameAs: ["https://dermamskinhealth.com"]` = autorreferencia inútil. Falta apuntar a Google Business Profile / Instagram / Facebook / Yelp. **Respaldo primario:** Google structured data intro dice que hace uso de `sameAs`. **URLs recolectadas (2026-08-27, confirmadas):** Instagram `https://www.instagram.com/dermamskinhealth` · Facebook `https://www.facebook.com/DermaMskinhealth` · Yelp `https://www.yelp.com/biz/derma-m-west-palm-beach` (existe, "Unclaimed", NAP correcta) · LinkedIn Nancy `https://www.linkedin.com/in/nancy-nieto-581160144` (solo para `NancyNieto.jsx`). **Pendiente de decisión del usuario:** GBP (ver 8.19), y si se incluye `dermam.square.site` (booking, mezcla WPB/Miami — recomendación: no). **Encuadre revisado:** no es housekeeping — es el paso 1 de "establecer la entidad de marca" junto con el schema `Organization`/`LocalBusiness` (un `@id` canónico + `alternateName` + `logo` + `sameAs`), para desambiguar de Derma M Academy / Derma M Institute (ver 8.19). | `src/data/organizationSchema.js`, `NancyNieto.jsx` | Media | **Hecho (2026-08-27)** — `sameAs` = Instagram + Facebook + Yelp en `organizationNode`; LinkedIn de Nancy en `NancyNieto.jsx` `Person.sameAs`. Square: fuera (decisión). GBP con `// TODO(8.19)` — entra cuando se verifique la ficha. Validado en validator.schema.org (0 errores). |
| 8.15 (G5) | Estructura RASTRO / respuesta-directa. **Auditoría 2026-08-26:** fuerte en las 3 landings, floja en 6 hubs y 5 templates de tratamiento (sin overview de 50 palabras, sin señales locales, sin bloques de tensión de decisión). `BreadcrumbList` en templates entra acá. | `src/pages/treatments/*`, `src/pages/hubs/*` | Media | Pendiente — post-8.17. Mejora de conversión, no de ranking. |
| 8.16 (G6) | Sin fecha de "última actualización" visible. **Recalibrado:** soporte tibio (ChatGPT report marca frescura→citación como no probada). Combinar con `<lastmod>` en sitemap (ítem 6.1). | Sitio completo + `public/sitemap.xml` | Baja (baja de Media) | Pendiente — bajo esfuerzo, oportunista |
| 8.17 | **GA4 HECHO (2026-08-28):** property "Derma.M" `G-9272VHFT03` live en `index.html`. **Falta GSC** (verificación por Dominio, se hace recién con el sitio en Hostinger + DNS) y **Bing Webmaster Tools "AI Performance"** — única analítica de citación IA que existe. Sin GSC no se valida 8.11/8.13/8.15/8.16. | Fuera del repo (config externa) | Alta | GA4 hecho · GSC + Bing WT pendientes — **PRIORIDAD 4, desbloquea el resto. No toca código.** |
| 8.19 | **NUEVO (2026-08-27):** **Google Business Profile ausente / no verificado.** En búsqueda de marca ("derma.m", "Derma.M West Palm Beach") **no aparece knowledge panel ni ficha de map pack**. Síntoma de **entity ambiguity**: Google no reconoce "Derma.M" como negocio local distinto — el PAA devuelve "derma" genérico ("¿qué es el derma?", "la marca Derma", "la crema Derma") y la SERP mezcla 3 entidades: el med spa (`dermamskinhealth.com`), **Derma M Academy** (`dermamacademy.com`, marca hermana, tel `+1 561 817-3932`) y **Derma M Institute** (`dermaminstitute.com`, empresa ajena, productos skincare). Nombre inconsistente entre superficies (sitio "medical spa" vs Instagram "Derma M MedSpa"). NAP consistente en perfiles propios: `5707 S Dixie Hwy Unit D, West Palm Beach, FL 33405` · `(561) 253-5384` · `dermamskinhealth.com`. **Para un medical spa, el GBP es el activo #1 de SEO local — más impacto que 8.14.** | Fuera del repo (Google Business Profile) + insumo para 8.14 (`sameAs`) y schema `Organization`/`LocalBusiness` | Alta | Pendiente — **acción del usuario:** verificar en `google.com/business` si existe la ficha; si existe, pasar la URL de Google Maps (`google.com/maps/place/...`) para `sameAs`; si no existe, crearla/reclamarla. Bloquea parcialmente 8.14 (no se puede `sameAs` a una ficha inexistente). |

### Nota — validación de research externo vía `/llm-council` (2026-08-20)

Se cruzó `docs/research/Estrategias SEO AEO GEO 2026.md` contra este audit y las skills ya corridas. 6 gaps identificados (G1-G6, arriba como 8.11-8.16) no estaban en el backlog. Se corrió `/llm-council` (5 advisors + peer review + chairman) sobre la pregunta "¿qué priorizar primero, y es G1 tan urgente como parece para un med spa local?".

**Veredicto del council (resumen):**
- Acuerdo unánime: G2 (8.12) es riesgo cero, ejecutar ya. El "69%" citado es un promedio agregado de la web general, no evidencia de este sitio — usarlo como diagnóstico fue el error de base del research aplicado sin verificar. G4 (8.14) es trivial e independiente del debate de G1.
- Clash principal: si G1 (8.11) es la prioridad crítica o una distracción especulativa (4 de 5 advisors + revisores coinciden en que es especulativo sin verificación; 1 advisor —Expansionist— lo defendió con una tesis de migración de mercado a 12-18 meses, marcada por los 5 revisores como el punto más débil del council).
- Recomendación: no rankear a ciegas — verificar primero con Search Console/GA4 si el tráfico es local/marca (G1 espera) o hay evidencia de bots de IA rebotando en páginas vacías (G1 sube de prioridad). **Confirmado con el usuario: no hay Search Console/GA4 configurado** → nace el ítem 8.17, que bloquea la verificación de G1 hasta que se configure.
- Sin ese dato, el único camino accionable ahora es 8.12 (G2, robots.txt) y 8.14 (G4, sameAs) — ambos de riesgo cero y consenso unánime, no dependen de resolver G1.

**Próximo paso sugerido para la siguiente sesión:** decidir si se configura Search Console/GA4 primero (desbloquea 8.11/8.13/8.15/8.16), o si se avanza directo con 8.12 (robots.txt) mientras tanto — ambos caminos son independientes y no requieren esperarse entre sí.

### Nota — consolidación de research (2026-08-26)

Se cruzaron 7 fuentes (2 deep-research reports, documentación primaria de Google Search Central, spec `llmstxt.org` v2, scan de `isitagentready.com` sobre el deploy Vercel, `Estrategias SEO AEO GEO 2026`, framework RASTRO de Remárcate) en **`docs/TECHNICAL_SEO_GEO_AUDIT_2026.md`** (nuevo, forzado a git, fuente de verdad técnica). Resultados aplicados a este backlog:
- **8.12 y 8.14** confirmados como prioridad (riesgo cero, consenso multi-fuente). Taxonomía de crawlers 2026 en el doc §4.
- **8.13 y 8.16** bajan de severidad — sin corroboración en fuentes primarias.
- **8.15** se mantiene como mejora editorial/conversión (framework RASTRO), no palanca de ranking.
- **8.17** ampliado: sumar Bing Webmaster Tools.
- **Nuevo 8.18**: `aggregateRating` 4.9/117 sin reviews visibles = riesgo de política de Google (reabre parte de 8.7).
- Todo lo "agéntico" (llms.txt como señal, MCP, DNS-AID, WebMCP, Content Signals, Markdown negotiation, pagos agénticos) = experimental o sin efecto probado → **no invertir ahora**.
- Raw eliminados tras consolidar: los 2 deep-research + notas primarias de Google + doc RASTRO. Conservado: `Estrategias SEO AEO GEO 2026` (dependencia de la sección 3).

### Bloque 2 — On-Page Técnico

| # | Hallazgo | Archivo | Severidad | Estado |
|---|---|---|---|---|
| 2.1 | `<html lang="en">` en un sitio en español | `index.html` | Alta | Hecho (2026-08-20) |
| 2.2 | Título placeholder sin reemplazar (`My Google AI Studio App`) — lo ven crawlers/scrapers que no ejecutan JS antes de que Helmet lo pise | `index.html` | Alta | Hecho (2026-08-20) |
| 2.3 | Sin `hreflang` pese a pares de rutas ES/EN (privacidad, términos, disclaimer) | Ver `DECISIONS.md` 2026-08-20 | Media | Hecho (decisión: no aplica — no existe sitio EN real, rutas EN ya en `Disallow`) |

### Bloque 5 — Core Web Vitals / Performance

| # | Hallazgo | Archivo | Severidad | Estado |
|---|---|---|---|---|
| 5.1 | `MediaBlock.jsx` (usado por `TreatmentCard` y templates) sin `loading="lazy"`, `width`/`height` ni `srcset` | `src/components/shared/MediaBlock/MediaBlock.jsx` | Alta | Hecho (parcial: `loading`/`decoding` agregados; `width`/`height`/`srcset` dependen de 5.2) |
| 5.2 | Cero imágenes `.webp`/`.avif` en `public/assets` (126 `.jpg`) | `public/assets/**` | Alta | Hecho (`.webp` vía componente `Picture`; `.avif` fuera de alcance) |
| 5.3 | `vite.config.js` sin `manualChunks` ni plugin de compresión/optimización de imágenes | `vite.config.js` | Media | Pendiente |
| 5.4 | Sin `preconnect`/`preload`, sin `font-display` | Ver `DECISIONS.md` 2026-08-20 | Media | Cerrado (no se implementa por ahora — ver decisión; a revisar según métricas reales) |

### Bloque 6 — Indexabilidad

| # | Hallazgo | Severidad | Estado |
|---|---|---|---|
| 6.1 | Sitemap sin `lastmod` en ninguna entrada (solo `changefreq`/`priority`) | Baja | Pendiente |

### Bloque 7 — Optimización de Imágenes

| # | Hallazgo | Archivo | Severidad | Estado |
|---|---|---|---|---|
| 7.1 | **Auditoría de nombres de archivo de imagen para SEO, página por página.** Muchos assets usan nombres genéricos/estructurales (`hero.jpg`, `cta.jpg`, `card.jpg`, `before-after-1.jpg`, etc.) que no aportan contexto de keyword a Google Images. Hace falta una pasada completa por `public/assets/images/**` cruzando cada imagen con la página/tratamiento donde se usa, y renombrar a slugs descriptivos en español con guiones (patrón ya aplicado en `limpieza-facial-profunda-antes/despues.jpg`, 2026-08-26). Cada renombre implica actualizar la ruta en el `src/data/*.js` correspondiente + regenerar el `.webp` hermano (ver `DECISIONS.md` 2026-08-26). Impacto real: bajo-medio (mueve la aguja en búsqueda de imágenes, poco en web). | `public/assets/images/**`, `src/data/*.js` | Baja-Media | Pendiente — parcial: solo `limpieza-facial-profunda` hecho. Requiere su propio ciclo brainstorming → aprobación. |
| 7.2 | `alt` hardcodeado como `"Before"` / `"After"` (inglés, genérico) en `BeforeAfterGrid.jsx`. **2026-08-27:** el componente acepta `item.beforeAlt`/`item.afterAlt`; con `alt` descriptivo en español ya están `blanqueamiento-dental` y `limpieza-facial-profunda`. Falta `tratamientos-postoperatorios` (sin media todavía). `prf-y-fibrina` hecho 2026-08-27 (video + imagen). | `src/data/landingPages.js` | Baja | Casi cerrado — solo falta el dato en las 2 landings sin imágenes. |
| 7.3 | **Ocultar la sección `BeforeAfterGrid` en páginas de tratamiento sin imágenes reales.** Hoy `limpieza-dental` y ~18 tratamientos más renderizan 2 cajas negras (`onError` → `display:none` → contenedor `#1A1919`). Cambio chico en `TreatmentDetailPage.jsx`: no renderizar la sección si no hay imágenes que carguen. | `src/components/templates/TreatmentDetailPage/TreatmentDetailPage.jsx` | Media | **Hecho** — `TreatmentDetailPage.jsx:259` `{beforeAfterItems.length > 0 && (…)}`, la sección solo renderiza con items reales. |
| 7.4 | Bug: `TreatmentDetailPage.jsx:59` `categoryFolder = category === 'laserYLuz' ? 'laser-y-luz' : category` — no mapea `dentalEstetico → dental-estetico` (el breadcrumb de `:48` y `getTreatmentAssetFolder()` en `treatmentPages.js` sí lo hacen). Genera rutas `.../dentalEstetico/.../before-after-1.jpg` inexistentes para tratamientos dentales sin override `beforeAfter`. Sin efecto visible hoy (no hay imágenes), pero rompe el día que se agreguen por convención. `blanqueamiento-dental` lo saltea vía override. | `src/components/templates/TreatmentDetailPage/TreatmentDetailPage.jsx` | Baja | **Resuelto** — `TreatmentDetailPage.jsx:59` ya mapea `dentalEstetico → dental-estetico` en el `to` del breadcrumb; el `categoryFolder` descrito ya no existe. Además 7.3 evita el render sin imágenes. |

### Bloque 4 — E-E-A-T

| # | Hallazgo | Severidad | Estado |
|---|---|---|---|
| 4.1 | No existía `docs/MEDICAL_COMPLIANCE.md` pese a estar referenciado en `CLAUDE.md`. Usuario confirmó (2026-08-20) que ya existía como research propio en `D:\Derma_Content\Website_DermaM_V2\derma.m\docs\MEDICAL_COMPLIANCE.md` — copiado tal cual a este repo, sin modificar contenido. Sigue sin haber una pasada que verifique el copy actual del sitio (Footer, `TreatmentDisclaimer.jsx`, `llms.txt`, `treatmentPages.js`) contra estas 8 reglas — eso queda como trabajo aparte, no incluido en este ítem. | Media | Hecho (2026-08-20) — doc centralizado; verificación de copy existente pendiente como ítem separado |
| 4.2 | Sin página de autor/bio con credenciales médicas explícitas más allá del nombre en meta description de Nosotros | Media | Hecho (2026-08-20) — `/nosotros/nancy-nieto`, solo Nancy Nieto (fundadora), sin datos de licencia por pedido explícito de Nancy; ver `docs/superpowers/specs/2026-08-20-item-4.2-founder-bio-page-design.md` |

### Bloque 3 — Enlazado interno (sin hallazgos críticos)
Sin evidencia de páginas huérfanas o 404 internos en el relevamiento — no se hizo crawl real. Confirmar corriendo la skill `seo-audit` con crawl antes de cerrar este bloque.

### Bloque 9 — Off-page (fuera de alcance del repo)
No auditable desde el código — requiere sesión de research externo (backlinks, menciones de marca sin enlace) con `seo-audit`/`ai-seo`.

---

## 3. Estrategia AEO/keyword para las 3 landing pages destacadas

Landing pages: `/limpieza-facial-profunda`, `/prf-y-fibrina`, `/tratamientos-postoperatorios` (`src/data/landingPages.js`, keys `limpiezaFacial`, `prfYFibrina`, `postoperatorios`).

Esta sección usa las dos skills instaladas (`bencium-aeo` + `keyword-research`), no una metodología inventada — la propuesta original del asistente quedó descartada al confirmarse que existían skills externas mejores.

### 3.1 Método de keyword research (skill `keyword-research`)

Por cada landing page, seguir este orden:

1. **Seed desde el copy real** (no inventar): extraer el "problema/eyebrow/headline" ya escrito en `landingPages.js` como seed keyword. Ej. PRF y Fibrina → seed: "bioestimulación facial", "PRF facial", "plasma rico en plaquetas".
2. **Google Autocomplete — método alfabeto**: `[seed] + espacio + cada letra a-z` para long-tail real (solo aparecen sugerencias con tráfico real). Ej. `PRF facial a`, `PRF facial b`... registrar solo lo relevante.
3. **Variantes de posición**: prefijo (`mejor PRF facial`), sufijo (alfabeto), medio (`cómo funciona el PRF facial en`).
4. **Modificadores de intención** (clasificar cada keyword encontrada):

   | Intención | Modificadores | Ejemplo aplicado |
   |---|---|---|
   | Informacional | qué es, cómo, por qué, guía | "qué es el PRF facial" |
   | Comercial | mejor, comparar, vs, reseña | "PRF vs microneedling" |
   | Transaccional | precio, comprar, barato | "precio PRF facial West Palm Beach" |
   | Local | + ciudad/zona | "PRF facial West Palm Beach" |

5. **People Also Ask / preguntas reales**: las preguntas ya existentes en `landingPages.js[key].faq.items` son un punto de partida — cruzarlas con PAA real de Google para completar el set de 15 preguntas que pide `bencium-aeo` (ver 3.2).
6. **Screening**: descartar keywords sin relación real con el tratamiento; priorizar comercial/transaccional/local antes que informacional puro (conversión > tráfico de vanidad).
7. **Nota de validación**: sin acceso a Ahrefs/Search Console conectado en esta sesión — las keywords quedan como **hipótesis a validar con volumen real** antes de comprometer presupuesto de contenido.

### 3.2 Aplicación AEO (skill `bencium-aeo`) — qué generar por landing page

Para cada una de las 3 landings, el entregable de contenido (a ejecutar en sesión aparte, uno por uno):

- **Product overview de 50 palabras** bajo el H1: qué es, alcance, por qué importa, fecha de "última actualización".
- **15 FAQs con schema `FAQPage`**: preguntas de 7-12 palabras en lenguaje natural (cruzadas con PAA real), respuestas de 30-50 palabras (punto óptimo de extracción para IA) — hoy `PrfYFibrina` ya tiene FAQs escritas pero **sin schema JSON-LD** (ver ítem 8.4); son la base a expandir a 15 y envolver en schema.
- **Regla de las 18 tokens**: cada claim clave debe ser una oración autocontenida de ~15-20 palabras, citable sin contexto adicional. Ej. actual (`benefits.list[0].body`): *"Acompaña la apariencia de firmeza y calidad visible de la piel."* — ya cumple el patrón; replicar en el resto.
- **Evidence panels**: cada claim de resultado (ej. "bioestimulación progresiva") necesita método, fuente, fecha de dato, límites — hoy el `beforeAfter.disclaimer` cubre parte de esto pero sin estructura de "evidence panel" completa.
- **Nivel de agresividad**: Derma.M es un "Challenger" (sitio no dominante en su categoría) → aplicar optimización agresiva (5-7 puntos de extracción por página) según el hallazgo del estudio de Princeton citado por la skill, no el enfoque ligero de sitios ya establecidos.
- **Freshness**: añadir fecha de "última actualización" visible en cada landing — el 95% de las citas de IA provienen de contenido actualizado en los últimos 10 meses.

### 3.3 Qué se agrega al backlog (Bloque 8, ya listado como 8.4)
La implementación de JSON-LD `FAQPage` + Product schema en las 3 landings queda como el ítem 8.4 del backlog de arriba — esta sección 3 es la metodología para decidir *qué keywords/preguntas* van dentro de ese schema, no un ítem nuevo separado.

---

### Nota sobre 8.2/8.3 (cerrados 2026-08-20)
Al re-auditar el patrón `VITE_SITE_URL` en las 7 páginas legales/estáticas listadas en 8.3, se encontró que 6 de ellas (TermsOfUse, PrivacyPolicy, BookingPolicy, Accessibility, NoticePrivacyPractices, TreatmentDisclaimer) ya tenían un fallback correcto a `https://dermamskinhealth.com` y siempre renderizaban el canonical — no había bug ahí. Solo `Nosotros.jsx` tenía el patrón roto real: fallback a `''` (string vacío) → si `VITE_SITE_URL` no está seteada en el build, el canonical no se renderiza en absoluto. Se corrigió `Nosotros.jsx` con un `<link rel="canonical">` fijo, mismo patrón que Contacto/tratamientos (ítem 8.1). El hallazgo original de 8.2 (dominio de fallback incorrecto en los 5 `[treatment].jsx`) quedó resuelto como efecto colateral de eliminar el canonical calculado en 8.1.

## 5. Pendiente para el final (antes de publicar) — auditoría de redirecciones 301

`public/.htaccess` (archivo protegido) ya tiene un bloque de redirects 301 mapeando URLs del sitio WordPress anterior a las rutas nuevas: páginas core, las 3 landing pages, hubs Faciales y Corporales, y patrones genéricos de WP (`/portfolio-item/*`, `/category/*`, `/tag/*`, `/author/*`, `/page/N`, `/wp-admin`, `/wp-login.php`).

**No hay redirects para Láser y Luz, Dental Estético, Capilar ni IV Therapy** — confirmado con el usuario (2026-08-20) que es porque esas secciones no existían en el sitio anterior, no es un olvido.

**Acción pendiente, a ejecutar como último paso antes de publicar el sitio rediseñado:** re-auditar contra el sitemap/lista real de URLs del sitio anterior (a obtener del usuario o de Search Console/crawl del sitio viejo si sigue online) para confirmar que el `.htaccess` cubre el 100% de las URLs indexadas históricamente, no solo lo ya mapeado. No tocar `.htaccess` hasta esa sesión final — es un archivo protegido y este ítem está fuera del ciclo normal de "un ítem del backlog a la vez".

## 4. Próximos pasos (protocolo entre sesiones)

1. El usuario elige **un ítem** del backlog (sección 2) o **una landing page** para aplicar la metodología AEO (sección 3).
2. `superpowers:brainstorming` si es cambio de contenido/diseño → aprobación explícita → implementación.
3. Al terminar: actualizar `Estado` de ese ítem acá mismo (`Hecho`/`Descartado`), y registrar en `PROGRESS.md` + `DECISIONS.md` si hubo un trade-off no obvio.
4. No se pasa al siguiente ítem hasta cerrar el actual (regla de "un cambio a la vez" de `CLAUDE.md`).
