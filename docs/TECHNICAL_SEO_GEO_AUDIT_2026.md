# Auditoría Técnica SEO / GEO / AEO 2026 — Derma.M

> **Fuente de verdad técnica.** Consolida 7 fuentes de research (2 deep-research reports, documentación primaria de Google, spec de `llmstxt.org`, scan de Cloudflare, 2 docs de agencia) + inspección directa del código y del deploy.
> **Este documento = análisis y best practices.** El backlog operativo (ítems accionables, un cambio por ciclo) vive en `docs/SEO_AUDIT_2026.md`.
> Ninguna recomendación se implementa sin `superpowers:brainstorming` + aprobación explícita del usuario, un ítem por vez (regla de `CLAUDE.md`).

Fecha de consolidación: **2026-08-26**
Dominio canónico: `https://dermamskinhealth.com` · Deploy en construcción: `https://derma-m-v2.vercel.app`

---

## 1. TL;DR — qué mueve la aguja y qué es humo

**No existe una "palanca de IA Search".** Search-crawling, training-crawling, user-fetch y operabilidad de agentes son pipelines distintos, con crawlers distintos. Esto lo confirman las 4 fuentes técnicas (los 2 deep-research + Google oficial + spec de llms.txt).

### Lo que sí tiene efecto comprobado (coincide en 3+ fuentes)

| Palanca | Confianza | Estado en el sitio |
|---|---|---|
| Ser **indexable + elegible para snippet** en Google Search (base literal de AI Overviews / AI Mode) | Alta — Google oficial | ⚠️ SPA client-side; shell pre-JS de 432 B sin contenido |
| **HTML semántico + contenido en texto** ("important content available in textual form" — Google) | Alta | ✅ contenido en texto una vez renderiza |
| **`structured data` que coincide con el texto visible** (Google) | Alta | ⚠️ `aggregateRating` sin reviews visibles (ver §5) |
| **Señales de autoridad y locales verificables** (médico, credenciales, ciudad, zona) | Alta — Google + RASTRO | ✅ parcial (bio de Nancy, NAP); falta `sameAs` real |
| **Contenido estructurado para extracción** (H2 = pregunta, FAQ, tablas, bloques 30–50 palabras) | Media — RASTRO + GEO KDD 2024 + Gemini report | ✅ landings; ⚠️ hubs/tratamientos más flojos |
| **Medición** (Search Console + Bing Webmaster Tools) | Alta — Google + Bing | ❌ no configurado |
| **`robots.txt` con directivas de bots IA** | Media (declarativo, no enforcement) | ❌ solo `User-agent: *` |

### Lo que es experimental o sin efecto probado — NO invertir ahora

`llms.txt` como señal de ranking (Google **lo ignora**; 97% de archivos reciben 0 requests — Gemini report) · Markdown content-negotiation (`Accept: text/markdown`) · Content Signals · DNS-AID · Web Bot Auth · WebMCP / MCP Server Card / Agent Skills index / ARD / Auth.md · pagos agénticos (x402/MPP/UCP/ACP) · "chunking" de páginas · schema especial para IA (Google: *"no special schema.org structured data you need to add"*).

---

## 2. Jerarquía de fuentes

| Tier | Fuente | Peso | Nota |
|---|---|---|---|
| **Primario** | Google Search Central — 5 páginas leídas 2026-08-26 (AI features `upd. 2025-12-10`, JS SEO basics, common crawlers `upd. 2026-07-14`, user-triggered fetchers `upd. 2026-08-19`, structured data intro) | Verdad técnica | Ver §8 A |
| **Primario** | `llmstxt.org` — spec v2, autor Jeremy Howard, `mod. 2026-08-10` | Verdad sobre `llms.txt` | Ver §8 B |
| **Deep research** | `ChatGPT-deep-research-report` (conservador, ponderado a fuentes primarias) | Fuerte si coincide con Google | Absorbido — raw eliminado |
| **Deep research** | `gemini — Web Discoverability and AI Search` (más agresivo, mezcla primario + blogs) | Fuerte si coincide con ChatGPT report | Absorbido — raw eliminado |
| **Herramienta** | `isitagentready.com` (Cloudflare) — scan del deploy Vercel 2026-08-26, 10:31 PM | Diagnóstico puntual | Ver §8 C |
| **Agencia** | `Estrategias SEO AEO GEO 2026` (síntesis con ancla académica: Aggarwal et al., "GEO", KDD 2024) | Solo framework de contenido; efectos no replicados de forma independiente | **Conservado** — `docs/research/`, dependencia de `SEO_AUDIT_2026.md` |
| **Agencia/blog** | `La auditoría de IA Search para clínicas` (Remárcate) — framework editorial **RASTRO** | Solo checklist editorial | Absorbido en §6 — raw eliminado |

---

## 3. Hallazgos por nivel de consenso

### 3.1 Coincide en 3+ fuentes → accionable

1. **AI Overviews / AI Mode no tienen requisitos especiales.** Google textual: *"There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary."* Requisito: página **indexada y elegible para snippet**. (Google + ChatGPT report + Gemini report)
2. **SEO clásico sigue siendo la base.** Crawl/index/canonical/sitemap/HTML semántico/frescura. (las 4 fuentes técnicas)
3. **`Google-Extended` NO afecta Search ni ranking** — es un token de control para training de Gemini y grounding de Vertex AI. Bloquearlo es seguro para SEO. (Google common crawlers, textual)
4. **User-triggered fetchers ignoran `robots.txt`** (`Google-Agent`, `ChatGPT-User`, `Perplexity-User`, `Claude-User`). Solo se bloquean por WAF/red. (Google + ambos reports + scan Cloudflare)
5. **`sameAs` tiene respaldo primario:** *"Google can make general use of the `sameAs` property... may be used to enable future Search features."* Solo hacia perfiles externos verificables. (Google structured data intro)
6. **Search Console es la única medición de Google** — el tráfico de AI Overviews va dentro del Performance report (search type "Web"). No hay reporte de citación separado. Bing Webmaster Tools "AI Performance" (feb 2026) sí lo tiene: citas + grounding queries. (Google + Bing + ambos reports)
7. **`llms.txt` no es señal de ranking/visibilidad de search.** Google lo ignora explícitamente. Uso real: agentes de código e ingesta manual de contexto. Un sitio de negocio es un caso contemplado por la spec, pero sin efecto en search. (spec v2 + Google + ambos reports)

### 3.2 Una sola fuente o experimental → NO accionable ahora

- **"Cite Sources / Quotation Addition / Statistics Addition"** (+41% / +115% en sitios de baja autoridad): viene solo del doc `Estrategias SEO AEO GEO 2026`, anclado a Aggarwal et al. KDD 2024. **Ni ChatGPT report ni Gemini report ni Google lo corroboran.** Tratar como *hipótesis editorial*, no como palanca de ranking. Relevante para 8.13/8.15 pero como mejora de claridad y conversión.
- **DNS-AID, Web Bot Auth, Content Signals, WebMCP, MCP Server Card, Agent Skills index, ARD, Auth.md**: borradores IETF / origin trials / specs de Cloudflare. Ambos deep-research los clasifican `EXPERIMENTAL`. Irrelevantes para un med spa sin API.
- **Markdown content-negotiation**: capacidad real solo en edge Cloudflare/Vercel; sin lift de ranking/citación probado. No aplica a un SPA estático.
- **Pagos agénticos (x402/MPP/UCP/ACP)**: cero relevancia.

### 3.3 Contradicciones entre fuentes

| Tema | Conservador (ChatGPT report / Google) | Agresivo (Gemini report / agencia) | Resolución |
|---|---|---|---|
| `llms.txt` efecto en retrieval | `UNKNOWN` | "97% cero requests" (estudios de blog) | Coinciden en dirección (sobrevalorado); Google lo ignora para Search — hecho |
| Frescura → citación de IA | IndexNow solo garantiza recepción; causalidad no probada | "83% de citas vienen de contenido actualizado 10–12 meses" | Soporte tibio para 8.16; bajo esfuerzo, impacto no confirmado |
| SSR/client-render | Google renderiza JS; lo que importa es la indexación | "hasta 69% de bots IA no ejecutan JS" (promedio agregado) | Ver §5.1 / 8.11 — medir antes de decidir |
| Estructura → citación de IA | Correlación, no causalidad probada | RASTRO/GEO lo presentan como causal | Aplicar como mejora editorial/CRO, no como garantía |

---

## 4. Taxonomía de crawlers 2026 (para `robots.txt`, ítem 8.12)

| Proveedor | Training (opt-out) | Search / indexación | User-fetch (ignora robots.txt) |
|---|---|---|---|
| **OpenAI** | `GPTBot` | `OAI-SearchBot` — **permitir para salir en ChatGPT Search** | `ChatGPT-User` |
| **Anthropic** | `ClaudeBot` (soporta `Crawl-delay`) | `Claude-SearchBot` | `Claude-User`, `claude-code` |
| **Google** | `Google-Extended` (token, no crawler; **no afecta Search**) | `Googlebot` | `Google-Agent`, `Google-CloudVertexBot`, `Google-GeminiNotebook` |
| **Perplexity** | — (no entrena con crawl) | `PerplexityBot` | `Perplexity-User` |
| **Microsoft** | — | `Bingbot` (alimenta Copilot) | — |

**Decisión pendiente de política de training:** permitir search bots explícitamente es consenso; bloquear `GPTBot`/`ClaudeBot`/`Google-Extended` (opt-out de training) es una decisión de negocio, riesgo cero para SEO. Recomendación por defecto: **permitir todo** (un med spa quiere máxima visibilidad y no tiene IP sensible), salvo que el usuario prefiera opt-out de training.

---

## 5. Auditoría del sitio real (código + deploy)

### 5.1 Rendering — SPA client-side (ítem 8.11)

- `index.html` = **432 bytes**: `<title>` estático + `<div id="root">`. Sin meta description, sin OG, sin canonical, sin JSON-LD en el HTML pre-JS. Todo se inyecta con `react-helmet-async` después de ejecutar JS. Confirmado por el scan de Cloudflare (`content-length: 432` en `/`).
- **Google:** *"Googlebot queues all pages with a 200 status code for rendering, no matter whether JavaScript is present"* + *"Google can read JSON-LD when it is dynamically injected... by JavaScript"* → **para Googlebot el sitio es procesable**. Caveat de Google: *"not all bots can run JavaScript"* — pero Google no habla de OAI-SearchBot/PerplexityBot.
- **Veredicto (se mantiene el del `/llm-council` 2026-08-20):** especulativo sin datos. **Medir indexación real en Search Console antes de considerar SSR/prerender.** El "69% de bots sin JS" es un promedio de la web general, no evidencia de este dominio.
- Buenas prácticas de SPA de Google **ya cumplidas**: History API (React Router v7), `<a href>` reales, canonical fijo en HTML por página (post-fix 8.1), `meta robots index,follow`.

### 5.2 `robots.txt` (ítem 8.12)

- ✅ Válido, `Sitemap:` presente, `Disallow` correcto de variantes EN no canónicas y rutas WP legacy.
- ❌ Sin directivas por bot de IA. Scan de Cloudflare: *"Checked 15 AI bot user agents — none found, but wildcard rules apply."*
- ❌ Sin `Content-Signal` (esperado — spec experimental, no se recomienda).

### 5.3 `llms.txt` (revisado contra spec v2)

Estado: **bueno**, mejor que la mayoría. Cumple lo esencial:
- ✅ H1 con nombre del proyecto · ✅ blockquote de resumen · ✅ secciones H2 con listas `[nombre](url)` · ✅ sección de disclaimers médicos + "AI Usage Guidelines" (excelente para YMYL).
- ⚠️ Nits de formato v2 (no bloqueantes): 3 líneas de comentario `#` antes del H1 (la spec pide H1 primero, BOM opcional); sin `rel="alternate" type="text/markdown"` ni `rel="describedby"` (requeriría versiones `.md` de páginas — no aplica a este stack).
- **No accionable como prioridad** — `llms.txt` no afecta search. Solo revisar formato si se toca por otra razón. Archivo protegido: no modificar sin instrucción paso a paso.

### 5.4 `sitemap.xml`

- ✅ 298 líneas, todas las rutas canónicas, `changefreq` + `priority`.
- ❌ Sin `<lastmod>` en ninguna entrada (ítem 6.1 / relacionado con 8.16).

### 5.5 JSON-LD por tipo de página

| Página | Schema | Estado |
|---|---|---|
| `Home.jsx` | `@graph`: `HealthAndBeautyBusiness` (+ `@id`, `location`, `geo`, `openingHoursSpecification`, `aggregateRating`) + `WebSite` | ✅ completo · ⚠️ `sameAs: ["https://dermamskinhealth.com"]` = **autorreferencia inútil** · ⚠️ `aggregateRating` 4.9/117 (ver §5.6) |
| `Contacto.jsx` | `HealthAndBeautyBusiness` + `aggregateRating` 4.9/117 | mismo problema de rating |
| `Nosotros.jsx` | `HealthAndBeautyBusiness` | ✅ |
| `/nosotros/nancy-nieto` | `Person` con `worksFor` → entidad org (sin licencia, por pedido de Nancy) | ✅ |
| 6 hubs | `ItemList` / `CollectionPage` | ✅ (8.5 corrigió `IvTherapy` vacío) |
| 5 templates de tratamiento | `Service` con `provider` → `HealthAndBeautyBusiness` + `PostalAddress` | ✅ base · ❌ sin `BreadcrumbList`, sin `MedicalWebPage`, sin `mainEntityOfPage` |
| 3 landings | `FAQPage` + Product/Service (post-fix 8.4) | ✅ |
| `FAQAccordion` | emite `FAQPage` con `mainEntity`/`Question`/`acceptedAnswer` cuando se usa | ✅ |

### 5.6 ⚠️ HALLAZGO NUEVO — `aggregateRating` sin reviews visibles (Severidad: Alta)

`Home.jsx:51-55` y `Contacto.jsx:98-101` declaran `aggregateRating` con `ratingValue: "4.9"` / `reviewCount: "117"` hardcodeado (agregado en la sesión de 8.7).

**Riesgo:** la política de Review snippets de Google exige que las valoraciones provengan de reviews **genuinas y visibles en la misma página**. Home y Contacto **no muestran 117 reviews** (hay ~3 testimonios cualitativos por página de categoría, sin conteo ni rating agregado visible). Esto expone a:
- Acción manual / pérdida de todos los rich results del dominio.
- Cuestión de honestidad/compliance (`MEDICAL_COMPLIANCE.md`) si el 4.9/117 no es un dato real y verificable.

**A verificar con el usuario:**
1. ¿El 4.9/117 corresponde a reviews reales de Google Business Profile? ¿Fecha del dato?
2. Si **sí** → mostrarlas/enlazarlas en la página (widget de reviews o enlace a GBP) y mantener el schema.
3. Si **no / no verificable** → **eliminar `aggregateRating`** de ambos archivos.

Este hallazgo reabre parcialmente el ítem 8.7 (que lo dio por `Hecho`).

### 5.7 Meta / OG / canonical

- ✅ `Home.jsx` y templates: `description`, `canonical` fijo, `og:type/title/description/url/image/locale`, `twitter:*`.
- ✅ `<html lang="es">` (post-fix 2.1), `<title>` real en `index.html` (post-fix 2.2).
- ✅ `og:locale` `es_US` correcto.

### 5.8 Estructura semántica / RASTRO (ítems 8.13 / 8.15)

Contra el framework **RASTRO** (Respuesta directa / Autoridad / Señales locales / Tensión de decisión / Ruta de conversión / Orden semántico):

| Elemento | Landings | Hubs | Templates de tratamiento |
|---|---|---|---|
| R — Respuesta directa (overview 50 palabras bajo H1) | ⚠️ parcial | ❌ | ❌ |
| A — Autoridad verificable en la página | ⚠️ | ⚠️ | ⚠️ (genérico) |
| S — Señales locales (tratamiento + ciudad + zona) | ⚠️ | ❌ | ❌ |
| T — Tensión de decisión (precio/dolor/tiempo/recuperación/alternativas) | ⚠️ | ❌ | ⚠️ |
| R — Ruta de conversión (valoración, no "contáctanos") | ✅ | ✅ | ✅ |
| O — Orden semántico (H2 = pregunta, FAQ, tablas, bloques cortos) | ✅ | ⚠️ | ⚠️ |

**Restricción crítica:** cualquier cambio de copy médico (candidatura, factores de precio, riesgos) requiere sign-off por página contra `docs/MEDICAL_COMPLIANCE.md` — no es edición editorial libre.

### 5.9 E-E-A-T / local

- ✅ Bio de fundadora (`/nosotros/nancy-nieto`) — sin licencia por pedido explícito de Nancy.
- ✅ NAP consistente (Footer, JSON-LD Home/Contacto, `llms.txt`).
- ❌ Sin `sameAs` real hacia Google Business Profile / Instagram / Facebook / Yelp.
- ❌ Google Business Profile no auditado (fuera del repo — requiere sesión `seo-local`).
- ⚠️ Testimonios existen pero no están conectados a tratamientos específicos vía schema `Review`.

### 5.10 Headers HTTP (deploy Vercel)

- ❌ Sin `Link:` response headers (RFC 8288) — el scan lo marca. Bajo impacto; opcional.
- Resto de headers no auditado en detalle (fuera de alcance de esta pasada).

---

## 6. Checklist de best practices — estado

Leyenda: ✅ cumple · ⚠️ parcial / con reservas · ❌ falta · ➖ no aplica

### Indexabilidad y rendering
- ✅ `robots.txt` válido con `Sitemap:`
- ✅ `sitemap.xml` con todas las rutas canónicas
- ⚠️ `<lastmod>` en sitemap — falta (6.1)
- ✅ Canonical fijo por página (no calculado en render)
- ✅ `<html lang>`, `<title>`, meta description, OG, Twitter
- ⚠️ SPA client-side — procesable por Googlebot; medir antes de SSR (8.11)
- ➖ Prerender / SSG — no decidido; depende de datos de Search Console

### Structured data
- ✅ JSON-LD en todos los tipos de página
- ✅ `HealthAndBeautyBusiness` con `geo` + `openingHoursSpecification`
- ⚠️ `aggregateRating` sin reviews visibles — **verificar/quitar** (5.6)
- ❌ `sameAs` real hacia perfiles externos (8.14)
- ❌ `BreadcrumbList` en templates de tratamiento
- ➖ Schema especial para IA — Google confirma que NO hace falta

### Bots de IA
- ❌ Directivas por bot en `robots.txt` (8.12)
- ➖ Content Signals / Web Bot Auth / DNS-AID — experimental, no recomendado
- ✅ `llms.txt` presente y bien formado (bonus, no afecta search)

### Contenido / AEO
- ✅ Contenido en texto (no dependiente de imágenes)
- ✅ `FAQPage` schema vía `FAQAccordion` y en las 3 landings
- ⚠️ Estructura RASTRO fuerte en landings, floja en hubs/templates (8.13/8.15)
- ❌ Fecha de "última actualización" visible (8.16)
- ⚠️ "Cite sources / stats" — hipótesis editorial, no prioridad

### E-E-A-T / local
- ✅ Bio de fundadora con credenciales cualitativas
- ✅ NAP consistente
- ❌ `sameAs` / Google Business Profile audit (sesión `seo-local`)
- ⚠️ Testimonios sin `Review` schema conectado a tratamientos

### Medición
- ❌ Google Search Console (8.17)
- ❌ GA4 (8.17)
- ❌ Bing Webmaster Tools "AI Performance" (nuevo — agregar a 8.17)

### Performance (afecta elegibilidad y CWV)
- ✅ `.webp` vía componente `Picture` (5.2)
- ✅ `loading="lazy"` / `decoding="async"` en `MediaBlock` (5.1)
- ⚠️ `manualChunks` / compresión de build (5.3)
- ➖ `preconnect`/`preload`/`font-display` — cerrado, revisar con métricas reales (5.4)

---

## 7. Backlog reconciliado (8.11–8.17) + plan priorizado

| Ítem | Estado tras esta auditoría | Prioridad |
|---|---|---|
| **8.12** robots.txt directivas IA | **Confirmado ×4** (council + 2 reports + Google + scan). Riesgo cero. Taxonomía lista en §4. | **1 — hacer ya** |
| **8.14** `sameAs` en JSON-LD | **Confirmado** (Google textual). Hoy es autorreferencia inútil → apuntar a GBP/redes reales. Riesgo cero. | **2 — hacer ya** |
| **5.6** `aggregateRating` sin reviews visibles | **NUEVO — Alta.** Riesgo de acción manual + compliance. Verificar con usuario → mostrar reviews o quitar schema. | **3 — decidir ya** |
| **8.17** GSC + GA4 (+ Bing WT) | **GA4 hecho (2026-08-28, `G-9272VHFT03`).** Falta GSC (verificación por Dominio, recién con el sitio en Hostinger + DNS) y Bing WT. Sin GSC no se validan 8.11/8.13/8.15/8.16. Config externa, no toca código. | **4 — desbloquea el resto** |
| **8.11** SSR / client-render | **Sigue especulativo.** Evidencia nueva (shell 432 B) pero sin datos de indexación. Veredicto del council intacto: medir en GSC primero. | Bloqueado por 8.17 |
| **8.13** "Cite sources" en copy médico | **Baja de peso** — sin corroboración en fuentes primarias. Re-enfocar como mejora de claridad/conversión + RASTRO, con sign-off de compliance por página. | Post-8.17, multi-sesión |
| **8.15** RASTRO/densidad en hubs y templates | **Sube ligeramente** (RASTRO lo respalda como editorial). Mejora de conversión, no palanca de ranking. `BreadcrumbList` en templates entra acá. | Post-8.17 |
| **8.16** Fecha "última actualización" | **Soporte tibio.** Bajo esfuerzo. Combinar con `<lastmod>` en sitemap (6.1). | Bajo, oportunista |
| **8.9 / 8.10** naming PRP/PRF | Sin cambios — ver `SEO_AUDIT_2026.md`. | Media |

### Orden recomendado de ejecución (cada uno = su ciclo brainstorming → aprobación)

1. **8.12** — `robots.txt` con directivas de bots IA 2026 (§4). Riesgo cero.
2. **8.14** — `sameAs` real en `Home.jsx` / `Contacto.jsx` / `NancyNieto.jsx`. Riesgo cero. *Requiere que el usuario dé las URLs verificadas (GBP, Instagram, Facebook).*
3. **5.6** — decisión sobre `aggregateRating`: verificar 4.9/117 o eliminarlo.
4. **8.17** — configurar Search Console + GA4 + Bing Webmaster Tools (fuera del repo).
5. *(esperar ~2–4 semanas de datos)* → revisar 8.11 con evidencia real.
6. **8.15 / 8.13 / 8.16** — mejoras de estructura y contenido, una por una, con compliance.

**Fuera del ciclo normal:** auditoría de redirects 301 en `.htaccess` (último paso antes de publicar — ver `SEO_AUDIT_2026.md` §5).

---

## 8. Apéndice — resumen de fuentes (rastro de citas)

### A. Google Search Central (primario, leído 2026-08-26)

- **AI features** (`upd. 2025-12-10`): sin requisitos especiales para AIO/AI Mode; requisito = indexada + snippet-eligible; query fan-out; *"you don't need to create... AI text files, or markup"*; sin schema especial; tráfico de AIO va en el Performance report de Search Console (search type "Web"); control = `robots.txt` para Googlebot + `nosnippet`/`data-nosnippet`/`max-snippet`/`noindex`.
- **JavaScript SEO basics**: Google renderiza JS (Chromium evergreen); todas las páginas 200 van a render queue; *"server-side or pre-rendering is still a great idea because... not all bots can run JavaScript"*; History API, no fragments; JSON-LD inyectado por JS es leído.
- **Common crawlers** (`upd. 2026-07-14`): common crawlers *"always obey robots.txt"*; `Google-Extended` = token de control (training Gemini + grounding Vertex), *"does not impact a site's inclusion in Google Search nor is it used as a ranking signal"*; `Google-CloudVertexBot`, `GoogleOther`, `Google-InspectionTool` no afectan Search.
- **User-triggered fetchers** (`upd. 2026-08-19`): *"generally ignore robots.txt rules"*; `Google-Agent` (navega y ejecuta acciones), experimentando con Web Bot Auth (`agent.bot.goog`); `Google-GeminiNotebook` (ex `Google-NotebookLM`, soportado hasta ago 2026).
- **Structured data intro**: JSON-LD recomendado; *"Google can make general use of the `sameAs` property... may be used to enable future Search features"*; *"don't add structured data about information that is not visible to the user"*; datos de rich results deben coincidir con texto visible.

### B. `llmstxt.org` v2 (primario, `mod. 2026-08-10`)

Propuesta, no estándar IETF/W3C. Uso: **inferencia** (agente asistiendo a un usuario), no training, no ranking. *"used most heavily for software documentation."* Casos válidos: *"a business outlining its structure and policies."* Coexiste con robots.txt/sitemap. OpenAI/Anthropic/Gemini publican uno **para sus propias dev docs**. Chrome Lighthouse audita si existe (no es Google Search). Formato: H1 (única sección obligatoria) → blockquote → secciones sin heading → listas H2 `[nombre](url): notas`.

### C. Scan `isitagentready.com` (Cloudflare) — deploy Vercel, 2026-08-26 22:31

**Score 20/100 — "Level 1: Basic Web Presence"** (esperable y correcto para un SPA de marketing estático).

| Categoría | Score | Detalle |
|---|---|---|
| Discoverability | 50 (2/4) | ✅ robots.txt · ✅ sitemap.xml · ❌ Link headers (RFC 8288) · ❌ DNS-AID |
| Content | 0 (0/1) | ❌ Markdown negotiation (requiere edge; sin efecto probado) |
| Bot Access Control | 50 (1/2) | ✅ robots.txt parseable · ❌ Web Bot Auth · ❌ Content Signals |
| API/Auth/MCP/Skills | 0 (0/8) | ❌ todo — irrelevante (sitio sin API) |
| Commerce | no evaluado | sin e-commerce |

- Homepage `/` → `content-length: 432` (shell SPA vacío) — evidencia para §5.1 / 8.11.
- robots.txt: *"Checked 15 AI bot user agents — none found, but wildcard rules apply"* — evidencia para 8.12.
- El resto de rojos = capa "web agéntica" experimental (agenda de Cloudflare). No cambia el backlog.

### D. Deep-research reports (absorbidos, raw eliminados 2026-08-26)

- **ChatGPT report:** ponderado a fuentes primarias. Tesis central: no hay una capa única de "AI SEO"; `llms.txt` retrieval/citation = `UNKNOWN`; WebMCP `EXPERIMENTAL`; medición fragmentada por capa; `CRAWLER ≠ RETRIEVAL ≠ MENTION ≠ CITATION ≠ REFERRAL ≠ CONVERSION`.
- **Gemini report:** más agresivo. Aporta: MCP 2026-07-28 stateless; Cloudflare bloqueará bots training/agente por defecto en páginas con ads (2026-09-15) — no aplica; empírico `llms.txt` "97% cero requests"; NSA advierte riesgo de seguridad en MCP.
- Coinciden entre sí y con Google en todo lo listado en §3.1.

### E. `Estrategias SEO AEO GEO 2026` (conservado en `docs/research/`)

Síntesis de agencia anclada a Aggarwal et al. "GEO: Generative Engine Optimization" (KDD 2024). Tácticas: Cite Sources (+41%, +115% baja autoridad), Statistics Addition (+31–37%), Direct-Answer Lead (44.2% de citas del primer 30% del doc), listas estructuradas (+30–40%). **Efectos no replicados de forma independiente** — usar como framework editorial, no como garantía de ranking. Dependencia activa de `SEO_AUDIT_2026.md` (ítems 8.13/8.15/8.16, §3).

### F. Framework RASTRO (de `La auditoría de IA Search para clínicas`, Remárcate — absorbido)

Respuesta directa · Autoridad verificable · Señales locales · Tensión de decisión · Ruta de conversión · Orden semántico. Bloques de 50–120 palabras por idea, H2 = pregunta, FAQs específicas, tablas. Sin tecnología experimental. Alineado con Google ("people-first content", "textual form"). Recomienda Search Console. Aplicado en §5.8 y §6.

---

## 9. Mantenimiento de este documento

- Actualizar cuando: cambie documentación primaria de un proveedor, se configure medición (8.17), o se cierre un ítem del backlog.
- El backlog operativo y los estados `Hecho`/`Pendiente` viven en `docs/SEO_AUDIT_2026.md`. Este documento es el "por qué"; ese es el "qué falta".
- Ambos archivos están en `docs/` (gitignoreado); este se fuerza a git (`git add -f`) por ser fuente de verdad, igual que `LEGAL_VISUAL_AUDIT_2026.md`.
