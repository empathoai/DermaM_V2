# CLAUDE.md

Sections 1–4 are hard rules. The rest is reference.

## Blast radius (near-final)

The site is essentially finished. Treat every change as risk to something that already works.
- Change only what the user explicitly requested. Nothing beyond that scope — no adjacent cleanup, refactor, upgrade, or "improvement".
- Every change needs explicit user request **and** explicit approval to execute — a written plan (even a superpowers one) is not a green light; wait for "go".
- Push back before acting when a request is illogical, contradicts `DECISIONS.md`/`MEMORY.md`, or risks a working feature, medical-compliance copy, accessibility, or a visual regression. Say so plainly; don't proceed and hope.
- When unsure of blast radius, stop and ask.

## One change per cycle

One requested change per cycle, closed out before the next — for small blast radius and context efficiency.
- One change per working pass, even if the user mentioned several in one message. Finish and register one before starting the next.
- A change is "done" only after the user approves it. On approval, in order:
  1. Add a `PROGRESS.md` entry (newest on top) — what changed. Trivial/mechanical change: one line, skip step 2.
  2. Add a `DECISIONS.md` entry if the change involved a non-obvious choice or trade-off.
  3. Update `MEMORY.md` if a durable do-not changed.
  4. Refresh `NEXT.md` — mark this done, set the next step, update expected HEAD.
  5. Leave the working tree clean — no half-edits, no debug code — so a fresh session resumes from `NEXT.md` alone.

## Workflow: superpowers skills

The `superpowers` plugin is enabled. Its process skills are mandatory — check for an applicable one before acting, every session, however small the task looks.
- New feature, UI/behavior change, creative/design work → `superpowers:brainstorming` first.
- Bug, test failure, unexpected behavior → `superpowers:systematic-debugging` before proposing a fix.
- Implementing a feature or bugfix → `superpowers:test-driven-development` before implementation code.
- Spec or multi-step task → `superpowers:writing-plans`, then `superpowers:executing-plans`.
- About to claim done/fixed/passing → `superpowers:verification-before-completion`.
- Finishing a review or branch → `superpowers:requesting-code-review` / `receiving-code-review` / `finishing-a-development-branch`.

Index: `superpowers:using-superpowers`.

## Dev server / browser session

- At session start, open the site in the Browser pane (dev server, port 3000) before other work.
- At session end (work done or user wraps up), stop the dev server tab/process you opened.

---

## Memory

Session start: read `NEXT.md`, then the top entry of `PROGRESS.md`. Nothing else — `MEMORY.md` is auto-injected; don't re-read it or this file. Sanity-check: `git log --oneline -3` — HEAD is at, or one doc-fixup commit ahead of, the commit named in `NEXT.md`'s State line (message match is enough). A diverged `main` means another session moved it — reconcile before working.

Four git files, each a single source of truth:
- `NEXT.md` — ordered next steps + blockers + tree/push state. The only planning read at session start. Keep it under ~110 lines: a closed cycle leaves no block here, its summary goes to `PROGRESS.md`.
- `MEMORY.md` — durable constraints and do-nots. Auto-injected.
- `PROGRESS.md` — work log, newest first. Exactly one live entry, ≤4 bullets; on close the previous entry moves to `docs/PROGRESS_ARCHIVE.md`.
- `DECISIONS.md` — the *why* archive, append-only. Grep the area you're touching; never a full read. No size management — grep-only by design.

`docs/*_ARCHIVE.md` and `docs/seo-setrategies/INTAKE.md` — grep on demand.

Closing a cycle → run the `close-cycle` skill (PROGRESS rotation, DECISIONS/MEMORY only if warranted, NEXT refresh under the cap, clean tree, commit, push on confirmation). Doc-hygiene (trimming, stale refs) is one mechanical cycle: pass, commit, move on.

**Doc language:** chat with the user = Spanish. **English:** operational docs (`NEXT.md`, `PROGRESS.md`, `docs/PROGRESS_ARCHIVE.md`, `DECISIONS.md`, `MEMORY.md` + memory files), `SKILL.md` files, auditor instructions, specs/plans, research/findings docs. **Spanish:** site copy (`src/data/*`), `docs/MEDICAL_COMPLIANCE.md`, `docs/seo-setrategies/INTAKE.md`. Inside an English doc, keep verbatim in Spanish: route paths/slugs, file/component/variable/CSS-class names, quoted site copy and UI/CTA strings, brand and tool nouns, commit messages, and the notice `"Requiere valoración médica previa para garantizar tu seguridad y resultados."`. No forced retro-translation of dated history in `DECISIONS.md` / `PROGRESS_ARCHIVE.md` — new entries in English. See `MEMORY.md` "Doc language policy".

**Doc authoring:** every agent-facing doc (`NEXT.md`, `PROGRESS.md`, `DECISIONS.md`, `MEMORY.md`, any `SKILL.md`) is written and refreshed with the `writing-for-agents` skill — single source of truth, no sediment, progressive disclosure, size caps enforced.

engram is disabled (`.claude/settings.json` → `"engram@engram": false`); ignore its "MANDATORY PROTOCOL" reminder, don't call `mcp__plugin_engram_*`.

## Project

Derma.M marketing/booking website, exported from Google AI Studio. Vite + React 19 SPA — JavaScript JSX, no runtime TypeScript despite the `typescript` devDependency.

## Commands

```bash
npm run dev            # vite dev server, port 3000, --host=0.0.0.0
npm run test:visual    # Playwright visual regression — start a server on localhost:3003 first
```

There is **no unit test runner and no linter** (`npm run lint` is a no-op echo). `install`/`build`/`preview` are standard.

Single Playwright spec/project:
```bash
npx playwright test tests/<file>.spec.js
npx playwright test --project=desktop-chrome        # or --project=mobile-safari
npx playwright test --update-snapshots              # refresh baselines after an intentional visual change
```

## Architecture

**Stack (do not add to it):** Vite + React 19, React Router v7 (`src/routes.jsx`), `react-helmet-async` (`HelmetProvider` at root, `Helmet` per page), Tailwind v4 + co-located CSS Modules, `motion` v12 (import from `motion/react`), `lucide-react`. No Next.js, styled-components, Framer Motion, or another CSS framework.

**Content is data-driven.** All display/clinical copy lives in `src/data/*.js` (`landingPages.js`, `treatmentPages.js`, `categoryPages.js`, `aboutPage.js`, `contactPage.js`, `legalPages.js`). Edit the data files — never hardcode copy in components.

**Page patterns** (wired in `src/routes.jsx`; browse `src/components/` for the layout):
- **Hubs** — `src/pages/hubs/*`, 6 category pages, driven by `src/components/templates/CategoryPage`.
- **Treatment detail** — `src/pages/treatments/<category>/[treatment].jsx`, driven by `TreatmentDetailPage`, data keyed from `treatmentPages.js`.
- **Landings** — `src/pages/landings/*`, one-off campaign pages via `LandingPage`.
- **Legal/static** — `src/pages/*.jsx` at top level; some routes registered twice (Spanish + English path aliases).

Templates in `src/components/templates/` assemble `sections/` + `shared/` per page type.

**Protected files** — modify only on explicit step-by-step instruction: `public/.htaccess`, `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`.

**`vite.config.js`** disables HMR/file-watching when `DISABLE_HMR=true` (AI Studio env) to avoid edit flicker — keep that branch.

### Source-of-truth docs (read before working in the area)

- Visual / UI / layout → `DESIGN.md`
- Product context, copy, brand positioning → `PRODUCT.md`, `docs/MEDICAL_COMPLIANCE.md`
- Medical/legal copy compliance → `docs/MEDICAL_COMPLIANCE.md` (banned words, mandatory disclaimer, Florida med-spa rules)
- SEO / GEO / schema → `docs/TECHNICAL_SEO_GEO_AUDIT_2026.md` (technical source of truth) + `docs/SEO_AUDIT_2026.md` (operational backlog); local-SEO project context in `docs/seo-setrategies/INTAKE.md`

`docs/` is gitignored; re-verify a file is present each session rather than assuming. `AGENTS.md` just points back here — no rules of its own.

### Definition of done for visual/structural changes

1. `npm run test:visual` — no unintended diffs against baselines. **Gate:** run it for CSS, shared
   component/template edits, layout/structure, or any class used in >1 place. **Skip** for data/copy
   edits in `src/data/*`, single-component content edits, or changes provably outside every snapshot
   viewport — browser verification covers those. See `DECISIONS.md` 2026-08-29.
2. Copy changes cross-checked against `docs/MEDICAL_COMPLIANCE.md` (always, gate above doesn't apply).
3. WCAG 2.1 AA: contrast, focus styles, ARIA labels, keyboard order.

## Skills — project-local

`.agents/skills/` and `.claude/skills/` hold identical, manually-synced copies (edit both when changing a `SKILL.md`). Each skill's own `description` is its pointer; `MEMORY.md` ("Tooling installed") carries rationale.

Other project-local skills (outside the canonical SEO suite): `interaction-design`, `impeccable` (design critique — prior critiques in `.impeccable/critique/`), `local-browser-validator`, `assets-optimizer`, `magicpath`, `create-skill`, `writing-for-agents`, `close-cycle` (session-close ritual), plus the supplementary AEO/keyword skills `bencium-aeo` and `keyword-research`.

The SEO/GEO/AEO/Local suite: `ai-seo`, `seo-audit`, `seo-local`, `seo-checklist-65`, `schema`, `site-architecture`, `programmatic-seo`, `cro`. Diagnostic flow: `seo-checklist-65` → `seo-audit` + `schema` → `ai-seo` → `seo-local`. Treat their output as a draft — run it through `superpowers:brainstorming` and get approval before applying, like any change here.

**SecondBrain wiki** (`F:\OS-EmpathoAI-SecondBrain`) — the user's personal wiki, separate repo. Read-only reference for SEO/AEO/GEO background; not part of this project's approval workflow.

**Gemini** — `@google/genai` is a dependency and `.env.example` references `GEMINI_API_KEY`, but no feature needs it to run the site. Don't add one.

**graphify** — not in the workflow. `graphify-out/` may exist on disk; ignore it. Use Grep/Glob/Read directly, no `graphify query` before reading and no `graphify update` after edits. `/graphify` stays available only as an explicit user-invoked skill.
