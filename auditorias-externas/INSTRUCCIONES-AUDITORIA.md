# External audit — Derma.M

Detailed instructions for an independent LLM performing a read-only audit of this
repository. The operator pastes `PROMPT.md`; you (the auditor) read this file and
follow it exactly.

---

## 1. GUARDRAILS — NON-NEGOTIABLE

1. This is a **READ-ONLY** audit. Do NOT modify, create, move, rename, or delete
   any file anywhere — with the single exception of your three output files under
   `auditorias-externas/resultados/`.
2. Do NOT run builds, dev servers, formatters, linters, codemods, package
   installs, git commands, or anything that writes to disk or mutates state.
   **Static inspection only.**
3. Do NOT produce or apply code patches / diffs. Findings are prose + `file:line`
   references only. You may describe a direction; never hand back edited code.
4. Do NOT open branches, commits, or pull requests.
5. If you are unsure whether an action writes state or touches anything outside
   `auditorias-externas/resultados/`, **do not do it**.
6. Deliver **exactly three** markdown files:
   `auditorias-externas/resultados/seo.md`, `.../ui-ux.md`, `.../copy.md`.
   Nothing else.

---

## 2. PROJECT CONTEXT

Derma.M is a marketing + booking website for a medical spa in West Palm Beach, FL.

- **Stack:** Vite + React 19 SPA, JavaScript JSX (no runtime TypeScript), React
  Router v7 (`src/routes.jsx`), `react-helmet-async` (`Helmet` per page), Tailwind
  v4 + co-located CSS Modules, `motion` v12, `lucide-react`.
- **Content is data-driven.** All display / clinical copy lives in `src/data/*.js`
  (`landingPages.js`, `treatmentPages.js`, `categoryPages.js`, `aboutPage.js`,
  `contactPage.js`, `legalPages.js`). Components never hardcode copy.
- **Page patterns:** hubs (`src/pages/hubs/*` via `templates/CategoryPage`),
  treatment detail (`src/pages/treatments/<category>/*` via `TreatmentDetailPage`),
  landings (`src/pages/landings/*` via `LandingPage`), legal/static
  (`src/pages/*.jsx`). Templates in `src/components/templates/` assemble
  `sections/` + `shared/`.
- **The site is NOT in production yet.** No live crawl / analytics data available.

**Source-of-truth docs** (under `docs/`, which is git-ignored — it may be absent if
the repo copy excluded ignored files; if a doc is absent, say so in your report and
proceed from code + `public/`):

- `DESIGN.md` — visual / UI / layout system and design tokens
- `docs/MEDICAL_COMPLIANCE.md` — banned words, mandatory disclaimer, Florida
  med-spa advertising rules
- `docs/TECHNICAL_SEO_GEO_AUDIT_2026.md`, `docs/SEO_AUDIT_2026.md` — prior internal
  SEO work (treat as context to reconcile against, not as ground truth)

**Protected files — audit only, never edit, and note if they look wrong:**
`public/.htaccess`, `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`.

---

## 3. HOW TO USE THE SKILLS

This repo ships skills under `.agents/skills/` and `.claude/skills/`. Each audit
below names the skills to invoke. **If your harness cannot load repo-local skills,
read each skill's `SKILL.md` at the path given and follow it as instructions**
(including any files it references in its own directory).

Skills are a method, not a checklist to paste — run them against the actual code
and report what they surface.

---

## 4. AUDIT 1 — UI / UX / ACCESSIBILITY  →  `resultados/ui-ux.md`

**Primary skill: `impeccable`** — `.agents/skills/impeccable/SKILL.md` (plus its
`agents/`, `reference/`, `scripts/` subdirectories).

- Prior critiques live in `.impeccable/critique/` — only **2 files**, both dated
  2026-06-25 (`FeaturedServices`, `hero`). **Everything else on the site has never
  been critiqued.** Run `impeccable` across every page template in
  `src/components/templates/`, the `sections/` and `shared/` components, and each
  distinct page type. `/contacto` (`src/pages/Contacto.jsx` +
  `Contacto.module.css`) was hand-written and never checked against `DESIGN.md` —
  give it particular attention.

Additionally assess:

- **Design-token adherence vs. `DESIGN.md`:** hard-coded values that bypass
  documented tokens (known offender: raw `24px` / `64px` gutters instead of
  `clamp(24px, 4vw, 64px)`), typography scale, color, radius, shadow, breakpoints.
- **Component consistency:** divergent implementations of the same visual pattern
  across templates / shared components.
- **Usability:** visual hierarchy, rhythm, alignment, density per page type; CTA
  prominence and consistency; interaction / motion (`motion` v12) purpose and
  restraint, `prefers-reduced-motion` handling.
- **Responsive / mobile-first:** layout integrity at mobile, tablet, desktop.
- **Accessibility (WCAG 2.1 AA):** color contrast, visible focus styles, keyboard
  order and traps, ARIA correctness (`aria-labelledby` targets that actually
  resolve), semantic landmarks, image alt text, form field labeling.

Out of scope: copy quality (separate audit), and brand/aesthetic redesign
proposals — assess against the **existing** system, don't invent a new one.

---

## 5. AUDIT 2 — SEO / GEO / AEO / LOCAL  →  `resultados/seo.md`

**Skills, in this order** (repo convention; paths under `.claude/skills/` and/or
`.agents/skills/`):

`seo-checklist-65` → `seo-audit` + `schema` → `ai-seo` → `geo-aeo-playbook` →
`bencium-aeo` → `seo-local`.

Also invoke `keyword-research` and `site-architecture` if the flow above calls for
them.

**Form your own findings first**, then — only if `docs/` is present — read the
prior internal audits and add an agreements / disagreements section.

**Technical checklist (cover explicitly):**

- Heading hierarchy per page type (single H1, logical nesting).
- `<Helmet>` meta per page type: title / description length and uniqueness, Open
  Graph, canonical correctness. Check hubs, treatment detail, landings,
  legal/static, home, about, contact.
- JSON-LD structured data: validity and completeness per template
  (`LocalBusiness` / `MedicalBusiness`, `FAQPage`, `BreadcrumbList`, `Person`,
  `Service` / `MedicalProcedure`, `AggregateRating` presence or deliberate
  absence). Flag invalid, duplicated, or contradictory schema.
- `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt`, `public/.htaccess`
  — route coverage, stale entries, missing routes (orphan pages), redirect logic.
  Audit only; these are protected.
- On-page: keyword-targeting coherence (title / H1 / URL alignment), internal
  linking, orphan or near-orphan pages, weak hubs, anchor-text quality.
- Keyword cannibalization — especially the PRF landing vs. related treatment pages.
- Over-optimization / keyword stuffing / unnatural anchor density.
- Thin or duplicated content across the data files.
- **GEO / AEO:** direct-answer blocks, FAQ coverage and schema, definitional
  clarity, entity / authorship signals, `llms.txt` quality and sync with the live
  route set.
- **Local:** NAP (name / address / phone) consistency across every occurrence in
  `src/` and in schema; `LocalBusiness` completeness (geo, hours, areaServed,
  sameAs); West Palm Beach relevance signals in copy and metadata.

Out of scope: off-site work (Google Business Profile, citations, backlinks, review
platforms); anything requiring production deployment or live crawl data;
performance / Core Web Vitals beyond what static review reveals.

---

## 6. AUDIT 3 — COPY  →  `resultados/copy.md`

No dedicated skill required. If a writing or critique skill helps, use it. Read all
copy in `src/data/*.js`.

- **Medical / legal compliance** — cross-check hard against
  `docs/MEDICAL_COMPLIANCE.md`: banned words, mandatory disclaimer presence and
  placement, Florida med-spa advertising rules, unsubstantiated claims, guarantee
  language, before/after framing.
- **Brand positioning** — Derma.M's differentiator is **relational** ("they listen
  / personal attention / criterio"), NOT lowest price or fastest results. Does the
  copy lead with that? Where does it drift into generic med-spa language?
- **Voice & tone consistency** across pages and page types.
- **Spanish-language quality** — grammar, register (tú vs. usted), terminology
  consistency, heading capitalization.
- **CTA consistency** — wording, verb choice, casing across the whole site.
- **Redundancy / contradiction** — near-identical passages across pages;
  statements that conflict between pages.
- **Clarity** — unexplained jargon, vague benefit statements, buried leads.

Flag problems + direction only. Do NOT rewrite copy — the owner writes the fix.

Out of scope: layout / visual issues (separate audit); SEO keyword placement
(separate audit), except where stuffing hurts readability.

---

## 7. OUTPUT FORMAT (each of the three files)

1. **Executive summary** — 5–10 bullets, the highest-impact findings.
2. **Findings** — each with:
   - `Severity`: Critical / High / Medium / Low
   - `Location`: `file:line` or route
   - `What`: the defect
   - `Why it matters`
   - `Suggested direction`: conceptual — **no code**
3. **Blind spots / could not assess** — what you couldn't evaluate and why.
4. **Agreements & disagreements with internal docs** — only if `docs/` was present.

---

## 8. CONSTRAINT ON RECOMMENDATIONS

The site is essentially finished and things work. Any recommendation that would
risk regressing a working feature, breaking accessibility, or weakening
medical-compliance copy must be flagged as such explicitly, with the tension named.
