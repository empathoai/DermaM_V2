# NEXT

**This file = live state + queue + how to resume.** A closed cycle leaves no block here; its
summary goes to `PROGRESS.md`. Keep it under ~110 lines — old "CLOSED" blocks are sediment, prune them.

## State

Base commit = pending (cont. 65 — fixed one AI-tell word in depilación láser copy, XS). Working tree
to be committed + pushed this cycle. Dev server `:3000` = running (this chat started it cont. 65).

**Client authorized go-live (2026-09-11):** site is cleared to deploy. Client also asked to swap some
`/nosotros` team videos first — executing one per cycle. Done: Daniela Parra video (cont. 56), missing
posters fix (cont. 57), Miguel Ramos video (cont. 58), Melisa Ríos video (cont. 59). Waiting on the
user for the next team video to swap, or confirmation to move to the Hostinger deploy.

**Client change requests (2026-09-08) — prior batch, done:** founder spotlight (cont. 49), Nancy Nieto
bio (cont. 50), limpieza image swap (cont. 51), limpieza FAQ reword (cont. 52), Lipo 360 before/after
(cont. 53), founder identity unification (cont. 55).

**Client handoff sent 2026-08-31** (`docs/communication_dermam.md`) — awaiting client: approval of
the Vercel build + Hostinger hosting/Banahost domain-migration authorization + access list. No work
proceeds on deploy until they confirm.

**Reviews 8.20 — Part 1 shipped (cont. 47).** Still backlog: Part 2 (per-page topical curation of
the quotes, Option A/B — spec `docs/superpowers/specs/2026-08-29-reviews-alignment-8.20-rescope-design.md`)
and Part 3 (`aggregateRating` decision — needs clinic sign-off on unfiltered reviews). Stars kept on
all renderers (cont. 42). Memory `project_google_reviews_link`.

## Audit remediation (cont. 21) — CLOSED

27 tasks triaged from `auditorias-externas/resultados/{ui-ux,seo,copy}.md`; all closed (detail in
`docs/PROGRESS_ARCHIVE.md` + plan `docs/superpowers/plans/2026-08-30-remediacion-auditorias-externas.md`,
rationale in `DECISIONS.md` 2026-08-30/31). **Only open item: Task 2** — `.htaccess` SPA catch-all
before the 301s (SEO-01), **BLOCKED → Hostinger deploy**.

Declined by product (cont. 31, do not re-open): **Task 8 / UX-03** (treatment hero stays dark
full-bleed media) · **Task 17 / UX-06** (`MethodProcess` circular step markers kept). `DECISIONS.md` 2026-08-30.

**Legal-pages overhaul left two deploy-checklist items** (PROTECTED files, do at Hostinger deploy):
`.htaccess` 301 `/notice-of-privacy-practices` → `/politica-de-privacidad`; drop the 7×
`Disallow: /notice-of-privacy-practices` from `public/robots.txt`. Memory `project_legal_pages_state`.

GA4 cookie-consent banner + US state-privacy-rights section: **closed as non-mandatory for this
business (client's call)** — not an EmpathoAI task. Handoff §8 + `DECISIONS.md` 2026-09-08. Only
revisit if the client asks or paid ads start reaching the EU/UK.

Protected files (`.htaccess` / `robots.txt` / `sitemap.xml` / `llms.txt`): each starts only on the user's explicit "go" for that file.

## Other pending (outside the cont. 21 queue)

**SlopMonster manual audit follow-up (cont. 64/65)** — 2 findings not yet scheduled, size given:
(S) `categoryPages.js` reuses the identical `testimonials` block across `dentalEstetico`/`ivTherapy`/
`capilar` hubs, incl. an off-topic acne-facial quote on IV Therapy/Capilar — ChatGPT-reviewed fix:
remove the block from those 3 hubs (don't reassign/invent), verify `CategoryPage.jsx` doesn't leave
a visual gap. (L) The 6 category hubs share a near-identical template (same 4 process steps, same
section counts, templated `approach` sentence) — the scaled-content pattern Google's spam policies
target; needs its own `brainstorming` → real per-category copy, no mechanical fix. User's call on
whether/when to schedule either.

**Founder identity consistency — mostly done (cont. 55).** Title unified to "FUNDADORA Y DIRECTORA
DE DERMA.M"; `shortBio` + Person-schema `description` aligned to the canonical blurb. Residual (minor,
not scheduled): `founderPrimer.credentialLine` on Home is a distinct title-case teaser ("…con licencia
del Estado de Florida.") — near-identical, align only if a consistency pass touches Home anyway. The
"Dermocosmiatría → Dermatocosmiatría" spelling question is moot (the card blurb dropped the Ecuador
line); it only survives now inside the bio page's own 3-country block, which already uses the client's
grafía.


**Square deep-linking — BLOCKED on the clinic.** Mapping in `docs/LINKEO-SQUARE-2026.md`. Missing:
clinic confirmation of 4 rows (PRF, marcación abdominal, corrientes rusas, depilación láser) + validate
hidrofacial. On unblock: `superpowers:brainstorming` → `src/data/squareServices.js` (slug→SERVICE_ID +
helper, fallback `/start`); centralize `bookingUrl` (copy-pasted in 8 places). Clinic-facing doc =
artifact `https://claude.ai/code/artifact/3f50986c-a2cf-4f0c-9738-d8fb8214ab46` (republish with `url=`).

**Missing media — `add-media` skill, 1 slot/cycle.** `about/hero.jpg` ON HOLD: placeholder
`contact/hero.jpg` (`aboutPage.js:11`), waiting on team photo → **known `test:visual` failure**
`nosotros-viewport` (desktop-chrome); if it drags: `npx playwright test -g "Nosotros Page - Viewport"
--update-snapshots`. Also verify `.jpg` posters for `mikaela-guajardo` / `elianne-trujillo` (Nancy 4/4 done).

**Reviews 8.20 — Part 1 done (cont. 47), Parts 2–3 in backlog.** Part 2: per-page topical curation
of the quotes (Option A minimal vs B tagged pool — decide on request). Part 3: `aggregateRating`
stays out until clinic sign-off on unfiltered reviews. Spec
`docs/superpowers/specs/2026-08-29-reviews-alignment-8.20-rescope-design.md`. Memory `project_google_reviews_link`.

## Close the project (NOT code, NOT this workflow)

**Full procedure = `DEPLOY.md`** (repo root). Part 1 = local full-site sanity check; Part 2 = the
protected-file work at deploy (`public/.htaccess` from `REDIRECT-MAP-VALIDATION-2026.md` §8 →
resolves Task 2 / SEO-01, `robots.txt` cleanup, `sitemap`/`llms.txt` check, `INTAKE.md:56` fix),
then GSC verify by Domain + submit sitemap. Blocked on the client handoff (see State).

## Conditional (wait for the condition to hold)

- "Why postoperative care matters" section — only if `/tratamientos-postoperatorios` gains traction (#6 spec).
- PRF §8.3 EN page (if EN ad traffic converts) · PRF §8.4 pillar "What is PRF" (if enriched landing ranks).
- Dental link in the footer — conditional on the dental regulatory hold (below).

## Blocked (waiting on user / third parties)

- **Hostinger deploy:** do not touch Hostinger or `.htaccess` until the user says "let's do the Hostinger deploy".
- **Dental on the site** (`/dental-estetico` hub + whitening + live dental cleaning): same regulatory risk that pulled it from the GBP. Decide whether the pages leave/reframe — separate cycle, user's call, do not touch without a request.
- **Yelp:** claimed by Nancy (owner); user hands her the optimized NAP + description.
- **C2:** quantitative datapoint half RESOLVED cont. 50 — client supplied "+4,000 procedimientos hasta 2026" in writing (now live on `/nosotros/nancy-nieto`). Still open: an authority link.
- Intake 6/7 + postop weak-point note: research context, see `docs/seo-setrategies/INTAKE.md`.
- **Square staff roster stale:** "Josey" still listed as bookable staff on Square services (confirmed
  2026-09-11 testing the Lipo 360 deep-link, `Corporal Abdomen,Cintura y Espalda`); user says she's no
  longer with the clinic. Not a site/code fix — lives in Square's own admin panel. User to email the
  clinic to remove her from staff on all services. No action here until that's done.
- **Square Appointments admin options to review (2026-09-11):** not code — Dashboard config the user
  wants to revisit later. (1) Per-service "Online Booking Visibility" toggle — can hide a service from
  the public booking site while keeping it for internal/staff scheduling:
  https://squareup.com/help/us/en/article/7243-customize-your-square-online-booking-site ·
  https://community.squareup.com/t5/Appointments-Bookings/Why-are-all-of-my-services-not-visible-to-customers-on-my/m-p/143313
  (2) Per-service price display type (Fixed / Starting at / Price Varies / Call Us / Blank) — lets a
  service keep its real internal price while showing "Call Us" instead of a number online:
  https://squareup.com/us/en/the-bottom-line/reaching-customers/introducing-more-ways-to-price-services-in-square-appointments ·
  https://squareup.com/help/us/en/article/6487-create-a-service-from-the-square-appointments-app
  (3) Booking timezone lock (Dashboard → Appointments → Online Booking → Settings → Calendar & Booking →
  "Lock booking timezone to business timezone") to skip the timezone-mismatch modal:
  https://squareup.com/help/us/en/article/5351-manage-your-square-appointments-account-settings

## Off-site backlog (no code cycle; separate sessions, user logged in)

GBP posts + base Facebook ads copy for postop (`docs/superpowers/specs/2026-08-29-postop-demand-gen-wedge-design.md` §"Specified, NOT executed") · Services 1–3 + GBP description (`COMPETENCIA-SERVICIOS-2026.md` §S1–S3) · PRF ads channels/angles/terms (`docs/superpowers/specs/2026-08-28-prf-content-strategy-design.md`).

## How to resume

`npm run dev` (`:3000`) → browser pane. Cycle: brainstorm → approval → **1 change** → verification
(MEDICAL_COMPLIANCE + WCAG AA + browser) → commit → doc ritual → push on confirmation. `test:visual`
**only** for CSS / shared component-template / layout / reused class (`CLAUDE.md` §DoD; Git Bash: prefix
`MSYS_NO_PATHCONV=1` with `-g /pattern`). Sizing ascending unless told: **XS** 1-place copy · **S** 1–3
files mechanical · **M** multi-file w/ judgement · **L** multi-phase · **XL** new feature. Session close
→ `close-cycle` skill.

## Resolved infra (do not redo)

graphify out of the workflow · engram off · GSC prefix unverified (`public/google2f0ede1a410e8a22.html`) · GA4 `G-9272VHFT03` in `index.html` · Apify token in `.env.local` at root (`APIFY_API_KEY`, format `KEY: valor`)

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `docs/seo-setrategies/INTAKE.md` = local-SEO project · `docs/seo-setrategies/COMPETENCIA-SERVICIOS-2026.md` = competition research + reviews
