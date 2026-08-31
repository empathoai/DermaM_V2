# NEXT

**This file = live state + queue + how to resume.** A closed cycle leaves no block here; its
summary goes to `PROGRESS.md`. Keep it under ~110 lines — old "CLOSED" blocks are sediment, prune them.

## State

Base commit = `92d93b6` (Task 10 done, cont. 34). Clean tree, **pushed** (`origin/main` @ `92d93b6`).
Dev server `:3000` = running. Stop on session close.

## Active queue — audit remediation (cont. 21)

27 tasks triaged from `auditorias-externas/resultados/{ui-ux,seo,copy}.md`. **Per-task detail**
(files, approach, verification, SEO/GEO/AEO impact, gate): `docs/superpowers/plans/2026-08-30-remediacion-auditorias-externas.md`.

Done: Tasks 1, 3, 4, 5, 6, 7, 9 (cont. 24–30). Each remaining task: `superpowers:brainstorming` → user approval → 1 change → verification → ritual.

Declined by product (cont. 31, do not re-open): **Task 8 / UX-03** (treatment hero stays dark full-bleed
media — `DESIGN.md` §7 knowingly diverges) · **Task 17 / UX-06** (`MethodProcess` circular step markers
kept — `DESIGN.md` §4/§11 now record the exception). See `DECISIONS.md` 2026-08-30.

Done: Task 11 (cont. 32) — `LegalPageLayout.jsx` "Sección N" `<h3>` → `<p>` (UX-05 / WCAG 1.3.1).
Done: Task 18 (cont. 33) — `LegalResources.jsx:78` `bg-white` → `bg-[#EFEFEB]` (UX-07).
Done: Task 10 (cont. 34) — `TreatmentDisclaimer.jsx` §8: added EN mirror `<p>` after each ES
paragraph of the 911 emergency-exclusion clause (CPY-06). ES untouched. No `test:visual`.

**Next: Task 12** — `robots.txt` has no directives for AI crawlers (SEO-06). S. **PROTECTED file** —
starts only on your explicit "go" on `robots.txt`. Also needs a policy call first (`superpowers:brainstorming`):
allow AI *training* (`GPTBot`, `ClaudeBot`, `Google-Extended`) or only AI *search* (`OAI-SearchBot`,
`Claude-SearchBot`, `PerplexityBot`)? If you'd rather skip protected files for now, next unblocked = Task 20.

Order: **12 → 13 → 20 → 21 → 14 → 15 → 16 → 19 → 22** · then `23 → 24 → 26 → 27 → 25`.

| # | Finding | Size | Flag |
|---|---|---|---|
| 2 | `.htaccess`: SPA catch-all before the 301s (SEO-01) | S | **BLOCKED → Hostinger deploy** |
| 12 | robots.txt has no directives for AI crawlers (SEO-06) | S | PROTECTED |
| 13 | sitemap.xml has no `<lastmod>` (SEO-09) | S | PROTECTED |
| 14 | Consolidate treatment JSON-LD into one `@graph` (SEO-07) | M | |
| 15 | `tú`/`usted` inconsistent across legal documents (CPY-03) | M | |
| 16 | Primary-CTA vocabulary is scattered (CPY-04) | M | |
| 19 | `Contacto`: gradients/blur/zombie CSS + button token (UX-08) | M | absorbs old `/contacto` follow-ups |
| 20 | Square bullets vs `<ListSparkle />` in FeaturedServices (UX-09) | S | |
| 21 | Missing "skip to content" link (UX-10) | S | |
| 22 | PRF vs faciales/capilar keyword cannibalization (SEO-08) | M | reconcile with the closed PRF spec |
| 23 | llms.txt has no links to legal policies (SEO-10) | XS | PROTECTED |
| 24 | "marcas permanentes" → "persistentes" (CPY-05) | XS | |
| 25 | Inconsistent ES title capitalization/style (CPY-07) | L | |
| 26 | Footer disclaimer 11px → 12px (UX-11) | XS | |
| 27 | `AboutPage`: fixed padding → `clamp()` + star glyphs (UX-12) | S | |

Protected files (`.htaccess` / `robots.txt` / `sitemap.xml` / `llms.txt`): each starts only on the user's explicit "go" for that file.

## Other pending (outside the cont. 21 queue)

**Square deep-linking — BLOCKED on the clinic.** Mapping closed in `docs/LINKEO-SQUARE-2026.md`.
Missing: clinic confirmation of 4 rows (PRF, marcación abdominal, corrientes rusas, depilación láser)
+ validate hidrofacial. On unblock: `superpowers:brainstorming` → `src/data/squareServices.js`
(slug→SERVICE_ID + helper, fallback `/start`); also centralize `bookingUrl` (today copy-pasted in
8 places: Navbar, Hero, PageHero, TreatmentHero, FinalCTA×2, LandingPage, Contacto). Clinic-facing
doc = artifact `https://claude.ai/code/artifact/3f50986c-a2cf-4f0c-9738-d8fb8214ab46` (republish with `url=`).

**Missing media — `add-media` skill, 1 slot per cycle.**
- `about/hero.jpg` (`/nosotros` hero) ON HOLD: points to `contact/hero.jpg` (placeholder, `aboutPage.js:11`), waiting on the user's team photo. **Known `test:visual` failure** `nosotros-viewport` (desktop-chrome) until it lands; if it drags: `npx playwright test -g "Nosotros Page - Viewport" --update-snapshots`.
- Verify `.jpg` posters for `mikaela-guajardo` / `elianne-trujillo`. Nancy image map: COMPLETE (4/4).

**Reviews 8.20 — IN BACKLOG** (user, 2026-08-29). `docs/superpowers/specs/2026-08-29-reviews-alignment-8.20-rescope-design.md`.
Not executed without a request. On resume: curation Option A vs B, confirm "no `aggregateRating`".

## Close the project (NOT code, NOT this workflow)

1. **Deploy to Hostinger/Apache** (real prod; Vercel = client demo). When doing it: replace `public/.htaccess`
   with the block from `docs/seo-setrategies/REDIRECT-MAP-VALIDATION-2026.md` §8 (this also resolves
   Task 2 / SEO-01), verify with its `curl -I` script — check `/nosotros/nancy-nieto` is still in
   `sitemap.xml`/`robots.txt`/`llms.txt` (Task 3 / SEO-02 done cont. 25), fix `docs/seo-setrategies/INTAKE.md:56` ("Vercel" → Hostinger/Apache).
2. **Verify GSC** by Domain on Hostinger + DNS.

## Conditional (wait for the condition to hold)

- "Why postoperative care matters" section (new in `LandingPage` or a route) — only if `/tratamientos-postoperatorios` gains traction. Material vetted in the #6 spec.
- PRF §8.3 EN page — only if EN ad traffic converts.
- PRF §8.4 pillar guide "What is PRF" — only if the enriched landing ranks for the cluster.
- Dental link in the footer — conditional on the dental regulatory hold (below).

## Blocked (waiting on user / third parties)

- **Hostinger deploy:** do not touch Hostinger or `.htaccess` until the user says "let's do the Hostinger deploy".
- **Dental on the site** (`/dental-estetico` hub + whitening + live dental cleaning): same regulatory risk that pulled it from the GBP. Decide whether the pages leave/reframe — separate cycle, user's call, do not touch without a request.
- **Yelp:** claimed by Nancy (owner); the user hands her the optimized NAP + description.
- **C2:** clinic compliance sign-off for a quantitative datapoint + an authority link.
- Intake topics 6/7: review-acquisition velocity; GMBspy on secondary competitors (Élévatione / Beverly Hills / Pure Skin).
- Clinic note: postop has a documented weak point (help with the faja + eye protection under LED light) — from the 2 negative reviews.

## Off-site backlog (no code cycle; separate sessions, user logged in)

GBP posts + base Facebook ads copy for postop (`docs/superpowers/specs/2026-08-29-postop-demand-gen-wedge-design.md` §"Specified, NOT executed") · Services 1–3 + GBP description (`COMPETENCIA-SERVICIOS-2026.md` §S1–S3) · PRF ads channels/angles/terms (`docs/superpowers/specs/2026-08-28-prf-content-strategy-design.md`).

## How to resume

1. `npm run dev` (`:3000`) → open in the browser pane. Full commands in `CLAUDE.md` §Commands.
2. Each cycle: brainstorm → approval → **1 change** → verification → commit → doc ritual → push on confirmation.
   Verification: cross-check `docs/MEDICAL_COMPLIANCE.md` (copy) + WCAG AA + browser `:3000`.
   `test:visual` **only** if the change touches CSS / a shared component-template / layout / a reused class
   (`CLAUDE.md` §DoD). Git Bash gotcha: prefix `MSYS_NO_PATHCONV=1` when using `-g /pattern`.
3. t-shirt sizing (ascending order unless told otherwise): **XS** copy in 1 place · **S** 1–3 files mechanical · **M** multi-file w/ judgement · **L** multi-phase · **XL** new feature.
4. Closing the session → `close-cycle` skill.

## Resolved infra (do not redo)

graphify out of the workflow · engram off · GSC prefix unverified (`public/google2f0ede1a410e8a22.html`) · GA4 `G-9272VHFT03` in `index.html` · Apify token in `.env.local` at root (`APIFY_API_KEY`, format `KEY: valor`)

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `docs/seo-setrategies/INTAKE.md` = local-SEO project · `docs/seo-setrategies/COMPETENCIA-SERVICIOS-2026.md` = competition research + reviews
