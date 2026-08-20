# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Mandatory: project is near-final — protect it
This project is essentially finished. Treat every change as risk to something that already works, not as a blank canvas.
- Do not modify anything the user did not explicitly request. No "while I'm in here" cleanup, refactors, upgrades, or improvements beyond the stated scope.
- Every change requires explicit user request and explicit approval — including after brainstorming/planning via superpowers. A plan being written is not approval to execute it; wait for the user to say go.
- Do not agree by default. Do not tell the user what they want to hear. If a request is illogical, contradicts existing decisions in `DECISIONS.md`/`MEMORY.md`, risks breaking a working feature, medical-compliance copy, accessibility, or visual regressions, push back and say so plainly before doing it — do not proceed and hope it's fine.
- When in doubt about blast radius, stop and ask rather than guessing generously in the user's favor.

## Mandatory: superpowers skills
This project has the `superpowers` plugin enabled (`.claude/settings.json`, marketplace `github.com/obra/superpowers-marketplace`). Its process skills are **mandatory**, not optional — use them before acting, every session:
- New feature, UI/behavior change, or any creative/design work → `superpowers:brainstorming` first.
- Any bug, test failure, or unexpected behavior → `superpowers:systematic-debugging` before proposing a fix.
- Implementing a feature or bugfix → `superpowers:test-driven-development` before writing implementation code.
- A spec or multi-step task → `superpowers:writing-plans` before touching code, then `superpowers:executing-plans` to run it.
- Before claiming work is complete, fixed, or passing → `superpowers:verification-before-completion`.
- Finishing a review or a branch → `superpowers:requesting-code-review` / `superpowers:receiving-code-review` / `superpowers:finishing-a-development-branch` as applicable.
Full index: `superpowers:using-superpowers`. Do not skip these because a task "looks simple" — check for an applicable skill first, always.

## Mandatory: one change at a time, close it out fully
Work in single, isolated units — one requested change per cycle, not several in parallel. This is for token/context efficiency and to keep blast radius small on a near-finished project.
- Do not bundle unrelated changes into one pass, even if both were mentioned in the same message. Finish and close one before starting the next.
- A change is only "done" once the user has approved it. On approval:
  1. Update [PROGRESS.md](PROGRESS.md) with what changed (newest entry on top).
  2. Update [DECISIONS.md](DECISIONS.md) if the change involved a non-obvious choice or trade-off.
  3. Update [MEMORY.md](MEMORY.md) if it changes durable facts about the project (new constraint, new component, new convention).
  4. Leave the working tree in a clean, coherent state — no half-finished edits, no leftover debug code — so a brand-new session can pick up with zero extra context beyond these three files.
- Do not start the next requested item until the current one is registered per the steps above.

## Memory persistence
This repo tracks context across sessions in three files — read them at the start of a session and update them as you work:
- [MEMORY.md](MEMORY.md) — durable project context, constraints, and known do-nots.
- [PROGRESS.md](PROGRESS.md) — running log of work done, newest first.
- [DECISIONS.md](DECISIONS.md) — non-obvious decisions with rationale; append, don't rewrite.

## Project

Derma.M marketing/booking website, exported from Google AI Studio. Vite + React 19 SPA (JavaScript JSX, no TypeScript at runtime despite `typescript` being a devDependency).

## Commands

```bash
npm run dev            # vite dev server on port 3000, --host=0.0.0.0
npm run test:visual      # Playwright visual regression — start a server on localhost:3003 first
```

Other scripts (`install`, `build`, `preview`) are standard — see `package.json`. There is no unit test runner and no linter (`npm run lint` is a no-op echo).

Run a single Playwright spec/project:
```bash
npx playwright test tests/<file>.spec.js
npx playwright test --project=desktop-chrome
npx playwright test --project=mobile-safari
npx playwright test --update-snapshots   # refresh reference screenshots after an intentional visual change
```

## Architecture

### Core stack & restrictions
- Vite + React 19, routing via React Router v7 (`src/routes.jsx`)
- SEO via `react-helmet-async` (`HelmetProvider` at root, `Helmet` per page)
- Styling: Tailwind v4 + CSS Modules co-located per component
- Animation: `motion` v12 — import from `motion/react`, not `framer-motion`
- Icons: `lucide-react`
- Do **not** introduce Next.js, styled-components, Framer Motion, or any other CSS framework.

### Content is data-driven
All copy/text lives in `src/data/*.js` (`landingPages.js`, `treatmentPages.js`, `categoryPages.js`, `aboutPage.js`, `contactPage.js`, `legalPages.js`). Never hardcode display or clinical copy inside components — edit the data files instead.

### Route/page structure
`src/routes.jsx` wires everything together. Pages compose into a few patterns:
- **Hub pages** (`src/pages/hubs/*`) — category landing pages (Faciales, Corporales, LaserYLuz, DentalEstetico, IvTherapy, Capilar), driven by `src/components/templates/CategoryPage`.
- **Treatment detail pages** (`src/pages/treatments/<category>/[treatment].jsx`) — dynamic per-category templates driven by `src/components/templates/TreatmentDetailPage`, data keyed from `treatmentPages.js`.
- **Standalone landing pages** (`src/pages/landings/*`) — one-off campaign pages via `src/components/templates/LandingPage`.
- **Legal/static pages** (`src/pages/*.jsx` at top level) — Privacy, Terms, Accessibility, Booking Policy, etc. Each route is registered twice in some cases (Spanish + English path aliases).

### Component layers
- `src/components/sections/*` — page-level sections (Hero, FeaturedServices, Testimonials, TrustBar, MethodProcess, FounderSection, ClinicalPositioning, TreatmentCategories, FinalCTA).
- `src/components/shared/*` — reusable building blocks used across templates (TreatmentCard, TreatmentGrid, TeamMemberCard, FAQAccordion, ProcessTimeline, SpecsGrid, WarningBox, BeforeAfterGrid, etc.).
- `src/components/layout/*` — Navbar, Footer.
- `src/components/templates/*` — the four page templates listed above that assemble sections/shared components per page type.

### Protected files
Do not modify `public/.htaccess`, `public/robots.txt`, `public/sitemap.xml`, or `public/llms.txt` unless explicitly instructed step-by-step.

### Task routing (docs to read before working in an area)
This repo uses topic-specific docs as sources of truth — read the relevant one before making changes:
- Visual/UI/layout work → `DESIGN.md` (Autonomous Design Protocol)
- Frontend implementation standards → `docs/CANONICAL_FRONTEND_STANDARDS.md`
- Routing/navigation/page structure → `docs/SITE_ARCHITECTURE.md`
- Content, copy, brand positioning → `docs/PROJECT_CONTEXT.md` and `docs/MEDICAL_COMPLIANCE.md`
- SEO/metadata/schema → `docs/SEO_AND_SCHEMA.md`
- Forms, env vars, security headers, integrations → `docs/SECURITY.md`
- Images/media/assets → `docs/ASSETS_AND_MEDIA.md` and `docs/ASSETS_STRUCTURE.md`
- Agent skill execution/audits → `docs/AGENT_SKILLS.md`
- Site audits, visual validation, accessibility → `docs/AUDIT.md`

(Some of these paths may not exist yet in this checkout — `docs/` currently only has `LEGAL_VISUAL_AUDIT_2026.md`; treat `DESIGN.md` and `PRODUCT.md` at the repo root as authoritative when a `docs/` file is missing. `AGENTS.md` just points back to this file.)

### Definition of done for visual/structural changes
1. Run `npm run test:visual` and confirm no unintended diffs against Playwright reference snapshots.
2. Cross-check any copy changes against `docs/MEDICAL_COMPLIANCE.md` — no banned guarantees or medical diagnoses.
3. Verify WCAG 2.1 AA: color contrast, focus styles, ARIA labels, keyboard navigation order.

### Project-local agent skills
`.agents/skills/` contains project-specific skills usable from this repo: `interaction-design`, `impeccable` (design critique — see prior critiques in `.impeccable/critique/`), `local-browser-validator`, `assets-optimizer`, `magicpath`, `create-skill`, `engram`, plus the SEO/GEO/AEO suite documented below.

## SEO/GEO/AEO/Local skill suite

`.agents/skills/` and `.claude/skills/` (identical copies, kept in sync manually) carry the canonical 8-skill suite: `ai-seo`, `seo-audit`, `seo-local`, `seo-checklist-65`, `schema`, `site-architecture`, `programmatic-seo`, `cro`. Each skill's own `description` is its pointer — no need to restate command→purpose here.

Recommended diagnostic flow: `seo-checklist-65` (baseline scorecard) → `seo-audit` + `schema` (technical/structured data) → `ai-seo` (GEO/AEO, `llms.txt`) → `seo-local` (if the business has a physical or service-area location).

Like any change on this project, treat SEO skill output as a draft — run it through `superpowers:brainstorming` and get explicit approval before applying anything.

### Gemini integration
`@google/genai` is a dependency and `.env.example` references `GEMINI_API_KEY`, but no current feature requires it to run the site locally.

### Dev server note
`vite.config.js` disables HMR/file-watching when `DISABLE_HMR=true` (set by the AI Studio environment) to avoid flicker during agent edits — don't remove this branch.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
