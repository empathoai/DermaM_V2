# MEMORY.md

Living context file for this project. Read this before starting work; update it when you learn something durable (not covered by git history or code itself).

## What this project is
Derma.M — marketing/booking website for a clinic (facial, corporal, dental, láser, capilar, IV therapy treatments). Exported originally from Google AI Studio, now developed independently. Vite + React 19 SPA.

## Stack snapshot
- Vite + React 19, React Router v7, Tailwind v4, `motion` (not Framer Motion), `lucide-react`, `react-helmet-async`.
- Content lives in `src/data/*.js` — never hardcode copy in components.
- Full architecture detail lives in [CLAUDE.md](CLAUDE.md); don't duplicate it here.

## Tooling installed in this repo
- **graphify** — knowledge graph of the codebase at `graphify-out/` (169 nodes, 497 edges, 8 communities as of last build from commit `20508457`). Query it with `graphify query/path/explain` instead of grepping for architecture questions. Run `graphify update .` after code changes to keep it fresh.
- **Playwright** — visual regression suite (`npm run test:visual`), baseURL `http://localhost:3003` (arrancar un `vite --port=3003` a mano antes; no hay `webServer` en la config). `faq-consistency.spec.js` fija el conteo de FAQ por ruta — `/contacto` = **5** (2026-08-27). Convención para snapshots flaky por `<video>`/media no determinista: ocultar el elemento con `page.addStyleTag('… video,img{visibility:hidden}')`, no `mask` (tapa lo de encima) ni `maxDiffPixelRatio` (global) — ver [[decisions]] 2026-08-27.
- **superpowers** — process-skill plugin, scoped to this project via `.claude/settings.json` (`enabledPlugins` + `extraKnownMarketplaces`, source `github.com/obra/superpowers-marketplace`). Mandatory usage rules are in `CLAUDE.md`.
- **SEO/GEO/AEO/Local skill suite** — as of 2026-08-20, the 8-skill "canonical-suite" imported from `F:\OS-skillsLibrary\12-OS-Seo-skills\canonical-suite\` into `.claude/skills/` and `.agents/skills/` (identical copies in both, kept in sync manually): `ai-seo`, `seo-audit`, `seo-local`, `seo-checklist-65`, `schema`, `site-architecture`, `programmatic-seo`, `cro`. This replaced the earlier 11-skill "Palo Seco" suite wholesale (see [[decisions]] 2026-08-20) — old skill names (`seo`, `seo-content`, `seo-content-writer`, `keyword-fanout-map`, `onpage-optimizer`, `internal-link-architect`, `ai-visibility-checker`, `site-brief-builder`) no longer exist in this repo. Recommended workflow order + approval-gate rule documented in `CLAUDE.md` under "SEO/GEO/AEO/Local skill suite" (as of 2026-08-20 this is no longer a command table — each skill's own `description` is its pointer, see [[decisions]] 2026-08-20). Any output they produce (audits, copy drafts) still needs `superpowers:brainstorming` + explicit approval before being applied, per this project's near-final protection rules.
  - When editing any of these SKILL.md files, edit `.claude/skills/` and `.agents/skills/` in tandem — there's no symlink, they're plain duplicated copies.
  - Saneada 2026-08-20 (fine-grained, post-reset): fixed a dead link in `ai-seo/SKILL.md`, replaced a leftover `palo-seco-seo` User-Agent string in `seo-local/references/maps-free-apis.md`, and pruned "Related Skills"/"See also" references (in both SKILL.md files and references/*.md) down to only the 8 skills actually installed in this suite. No phantom scripts or hard DataForSEO blocking were found this time — the suite is clean.
- **Supplementary AEO/keyword skills** — added 2026-08-20 via `npx skills add` (installed only to `.agents/skills/`, symlinked into Claude Code, not part of the 8-skill canonical suite above): `bencium-aeo` (`bencium/bencium-marketplace@bencium-aeo`, 2.5K installs) and `keyword-research` (`kostja94/marketing-skills@keyword-research`, 1.1K installs). These fill a gap the wiki (`F:\OS-EmpathoAI-SecondBrain`) doesn't cover at tactical depth: `bencium-aeo` gives concrete AEO content mechanics (18-token extraction rule, 15-FAQ + FAQPage schema template, evidence panels, challenger-vs-established optimization strategy from a Princeton study); `keyword-research` gives an actual method for finding target queries (Google autocomplete alphabet method, PAA, intent modifiers) that neither the wiki nor `seo-checklist-65` provides. See [[decisions]] 2026-08-20 and `docs/SEO_AUDIT_2026.md` section 3 for the applied methodology.

## Project status
Near-final. Treat as a finished, working site — not a blank canvas. Every change requires explicit user request + explicit approval, one change at a time, no scope creep. Full rules in `CLAUDE.md` under "Mandatory: project is near-final — protect it" and "Mandatory: one change at a time, close it out fully".

## SEO / GEO / AEO — documentos
- **`docs/TECHNICAL_SEO_GEO_AUDIT_2026.md`** (forzado a git, creado 2026-08-26) = **fuente de verdad técnica**: consolida 7 fuentes de research (2 deep-research reports, doc primaria de Google Search Central, spec `llmstxt.org` v2, scan de Cloudflare `isitagentready.com`, `Estrategias SEO AEO GEO 2026`, framework RASTRO). Análisis + best practices + auditoría del sitio real.
- **`docs/SEO_AUDIT_2026.md`** (gitignored) = **backlog operativo**: ítems 8.x accionables, estados `Hecho`/`Pendiente`, un cambio por ciclo.
- Conclusión durable del cruce: **no hay palanca técnica de "AI Search"**. Lo que mueve la aguja = indexable + snippet-eligible en Google (base literal de AI Overviews), HTML semántico, structured data que coincide con texto visible, autoridad/señales locales verificables, medición (GSC + Bing WT). Todo lo "agéntico" (`llms.txt` como señal de ranking, MCP, WebMCP, DNS-AID, Content Signals, Markdown negotiation, pagos agénticos) = experimental o sin efecto probado — no invertir. Google **ignora `llms.txt`** para Search; `Google-Extended` **no afecta** ranking.
- Prioridad de ejecución: 8.12 (robots.txt directivas IA, riesgo cero) → 8.14 (`sameAs` real) → 8.18 (decidir `aggregateRating` 4.9/117 sin reviews visibles) → 8.17 (GSC + GA4 + Bing WT, desbloquea 8.11/8.13/8.15/8.16).
- **8.9/8.10 Hecho (2026-08-27):** el tratamiento se llama **"Plasma Rico en Plaquetas y Fibrina"** en todo lugar público (no "PRP y Fibrina"). Siglas PRP/PRF solo en las FAQ que explican la diferencia. URL sigue siendo `/prf-y-fibrina` (no se migró el slug — ver [[decisions]] 2026-08-27). No hay otro tratamiento con sigla como nombre.

## Founder bio page
`/nosotros/nancy-nieto` (2026-08-20, item 4.2) — dedicated E-E-A-T bio page for Nancy Nieto, template `src/components/templates/FounderBioPage/FounderBioPage.jsx`, data `founderBioPage` export in `src/data/aboutPage.js` (reuses `aboutPage.founderSpotlight`/`founderPhilosophy`/`quote`/`cta` by reference, doesn't duplicate copy). **No license numbers or credential IDs anywhere on this page or its JSON-LD** — explicit, standing instruction from Nancy (see [[decisions]] 2026-08-20). Cross-linked from `/nosotros`'s founder spotlight section.

## Team member cards (About page)
- Data: `src/data/aboutPage.js`, grouped by specialty (`teamGroups` array of `{ specialty, members[] }`). Rendered by `TeamBySpecialty` → `TeamMemberCard.jsx` → `MediaBlock.jsx`.
- All team vCards (`public/team/vcards/*.vcf`) intentionally share one clinic phone (`+15612535384`) — only `FN`/`TITLE` differ per person. This is the established pattern, not a bug (see [[decisions]] 2026-08-20).
- `MediaBlock.jsx` already renders a clean fallback block when `mediaSrc`/`src` is undefined or fails to load — safe to add a team member before their photo/video asset is ready (see [[decisions]] 2026-08-20). `member.status === 'comingSoon'` is a different, unrelated path (generic "nuevos especialistas" card) — don't use it for "real person, pending asset."

## Card `imagePosition` (encuadre de heros recortados a cuadrado)
- Mecanismo desde commit `ecbff32`: `TreatmentCard` → `MediaBlock` prop `imagePosition` → `style={{objectPosition}}` sobre el `<img>`. Default CSS `center center`.
- Fuente única: `imagePosition` en `categoryPages.js` `featuredTreatments`. Formato `'NN% center'`. Lo tienen 8 corporales + los 2 dentales (`74% center`).
- Desde 2026-08-27 fluye a **dos** contextos: hub (`CategoryPage`, ya funcionaba) **y** "Te puede interesar" (`RelatedTreatments` vía `getBaseTreatment` → `related` → `items.map`). Editar el valor en `categoryPages.js` afecta ambos. Faciales/capilar sin valor → `center`. Ver [[decisions]] 2026-08-27.

## BeforeAfterGrid — labels, override por tratamiento y video (2026-08-26 / 27)
- `BeforeAfterGrid.jsx` acepta props opcionales `beforeLabel` / `afterLabel` (default `'ANTES'` / `'DESPUÉS'`) y por item `beforeAlt` / `afterAlt` (fallback `'Before'` / `'After'`).
- **Video (2026-08-27):** si `item.before` / `item.after` termina en `.mp4`, el sub-render `SlotMedia` renderiza `<video autoPlay muted loop playsInline preload="metadata" poster={src→.jpg}>` en vez de `<Picture>`. Necesita un `.jpg` con el mismo basename al lado (poster). Primer uso: `prf-y-fibrina` (`plasma-rico-en-plaquetas-procedimiento.mp4`). El branch solo se activa con `.mp4` → resto de callers sin cambio.
- `LandingPage` **y** `TreatmentDetailPage` pasan `beforeLabel`/`afterLabel` al grid (LandingPage se agregó 2026-08-27).
- Las páginas de tratamiento (`TreatmentDetailPage`) leen `data.beforeAfter`. Si existe, usa sus `items` + labels + `disclaimer`; si no, arma la ruta `.../{slug}/before-after-1|2.jpg` como siempre.
- **Video para web:** transcodificar SIEMPRE a H.264 (`libx264 -crf 28 -an -pix_fmt yuv420p -movflags +faststart`, downscale al ancho del slot ×1.5), no dejar HEVC de teléfono. Ver [[decisions]] 2026-08-27. La skill `assets-optimizer` es la base pero le faltan `yuv420p`/`faststart`.
- Para dar nombres SEO + labels a un tratamiento: agregar `beforeAfter: { items:[{before,after,beforeAlt,afterAlt}], beforeLabel, afterLabel, disclaimer? }` en su `customDetails[slug]` (`src/data/treatmentPages.js`) — ya se cablea al objeto compilado con `beforeAfter: custom.beforeAfter || null`. Casos: `blanqueamiento-dental` (izq procedimiento / der secuencia, labels custom) y `limpieza-dental` (antes/después estándar, labels default).
- Bug abierto (backlog): `TreatmentDetailPage.jsx:59` `categoryFolder` no mapea `dentalEstetico → dental-estetico`, solo `laserYLuz`. Afecta a tratamientos dentales SIN override `beforeAfter`. Registrado en `docs/SEO_AUDIT_2026.md`.

## BeforeAfterCarousel — carrousel de resultados en landings (2026-08-27)
- Componente `src/components/shared/BeforeAfterCarousel/` (jsx + module.css propio). **Distinto de `BeforeAfterGrid`**; este NO se importó, sus valores de marco/chip/disclaimer están **copiados** (comentados "mirrored from BeforeAfterGrid"). Ver [[decisions]] 2026-08-27.
- `LandingPage.jsx`: si `beforeAfter.layout === 'carousel'` renderiza `<BeforeAfterCarousel>` en vez de `<BeforeAfterGrid>`. Ninguna otra landing lo usa hoy. `TreatmentDetailPage` NO tiene esta rama.
- Data en `landingPages.js`: `beforeAfter: { layout:'carousel', variant:'light', eyebrow, headline, items:[{src, alt, type}], disclaimer }`. `type` ∈ `'comparison'` (chips ANTES top-left + DESPUÉS top-right) | `'result'` (chip RESULTADO). 1 imagen por slide (las composites ya traen antes+después en el mismo archivo).
- Carrousel: CSS `scroll-snap` (sin librería), flechas circulares 44px (`ChevronLeft/Right` de `lucide-react`, `disabled` en extremos, sin loop), 8 dots `<button>` sincronizados con el scroll. `role="region"`/`aria-roledescription="carousel"`, `prefers-reduced-motion` → scroll sin animar. `viewport` `max-width:620px` centrado en desktop, `100%` + flechas sobre el marco en <768px.
- Primer uso: `/tratamientos-postoperatorios` → `postoperatorio-caso-1..7.jpg` + `postoperatorio-caso-resultado.jpg` (todas 1000×1250, 4:5) + `.webp` q78.
- Test: `Postoperatorios Landing - Resultados carrousel` en `tests/visual.spec.js` (baselines `postoperatorios-resultados-carrousel-*`).

## Known constraints / do-nots
- Don't introduce Next.js, styled-components, Framer Motion, or another CSS framework (per `AGENTS.md`).
- Don't modify `public/.htaccess`, `robots.txt`, `sitemap.xml`, `llms.txt` without explicit step-by-step instruction.
- Don't touch `~/.codex/config.toml` or any Codex-global config from this project — user keeps those separate ("no lo consideres en este proyecto").
- Don't make unrequested changes, refactors, or "while I'm in here" cleanup — user must approve each change explicitly, even after a superpowers plan is written.
- Don't bundle multiple changes into one working pass — one requested item at a time, registered (PROGRESS/DECISIONS/MEMORY) before starting the next.
- Any image rendered via `Picture.jsx` (incl. `BeforeAfterGrid`, `MediaBlock`, `FeaturedServices`) needs BOTH `<name>.jpg` and `<name>.webp` in the same folder, kept in sync. `Picture` always emits a `<source>.webp` which the browser prefers: a missing webp → black placeholder; a STALE webp → old image shown even after the jpg is replaced. Whenever a jpg is added or swapped, (re)generate its webp with `sharp` q78. See DECISIONS.md 2026-08-26.

## Open questions / things to verify later
- `docs/` (gitignored) has grown since the initial checkout: `LEGAL_VISUAL_AUDIT_2026.md`, `SEO_AUDIT_2026.md`, `MEDICAL_COMPLIANCE.md` (added 2026-08-20, see below). Most other topic docs referenced in `CLAUDE.md`'s task-routing list (SITE_ARCHITECTURE.md, SECURITY.md, etc.) still don't exist in this checkout — confirm before relying on them.
- The user has a separate, older local checkout of this project's `docs/` at `D:\Derma_Content\Website_DermaM_V2\derma.m\docs\` (different machine/drive than this repo's `F:\EmpathoAI-projects\DermaM_Website`) with ~114 files including per-treatment research (`docs/research/intelligence/*`, `docs/research/strategy/*`), a copy knowledge base, and several audit docs beyond what exists here. Check that path before assuming a missing `docs/` file needs to be created from scratch — it may already exist there as real research, not something to invent.

## Medical compliance rules (docs/MEDICAL_COMPLIANCE.md)
Added 2026-08-20 — copied verbatim (not authored by Claude) from the user's own research at `D:\Derma_Content\Website_DermaM_V2\derma.m\docs\MEDICAL_COMPLIANCE.md`. 8 site-wide copy-wording rules: no guaranteed-results language, a banned-words list (`"no side effects"`, `"painless"`, `"permanent"`, `"no downtime"`, `"guaranteed"`, `"FDA-approved"`, `"clinically proven"`), a mandatory pre-treatment CTA disclaimer line, always-visible footer disclaimer, real (non-stock) before/after images only, real (non-invented) testimonials only, no diagnosis/cure claims, health-first positioning.

Same day, a second section was added — "Florida Legal & Operational Rules (complementary reference)" — copied verbatim from `F:\OS-EmpathoAI-SecondBrain\wiki\operations\florida-healthcare-beauty-advertising-compliance.md`'s general (non-per-treatment) sections: physician delegation / medical director requirement, informed consent, 7-year record retention, Meta paid/organic ad rules, an FTC claims-evidence framework, and privacy rules (HIPAA/FIPA/Meta CAPI). The wiki file's *per-service table* was deliberately **not** copied — it only covers 3 of Derma.M's ~25 actual treatments (microneedling, laser hair removal, IPL), the rest of its rows are injectables (Botox/fillers/Kybella) Derma.M doesn't offer, confirmed against `public/sitemap.xml`.

Consult this file before writing or approving any treatment/medical copy — this is the canonical source now referenced by `CLAUDE.md`'s task-routing list, not scattered Footer/llms.txt/TreatmentDisclaimer.jsx knowledge. Gitignored (`docs/` is not versioned in this repo), so it must be re-verified present each session rather than assumed from git history.
- `AGENTS.md` is now just a pointer to `CLAUDE.md` (2026-08-20, see [[decisions]]) — it carries no rule content of its own anymore, don't treat it as a fallback doc.

---
See also: [PROGRESS.md](PROGRESS.md) for what's in flight, [DECISIONS.md](DECISIONS.md) for why things are the way they are.
