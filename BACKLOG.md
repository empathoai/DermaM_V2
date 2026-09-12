# BACKLOG

Everything not actionable this session: blocked on someone else, conditional on an event, or
off-site work. **Not read at session start** — only consulted on request ("revisemos qué falta").

Before reporting any item to the user: run its **Check** if it has one. If the check shows the item
is already resolved, delete the item now (don't wait for a formal close) and say so.

## Blocked (waiting on user / client / third party)

- **Hostinger deploy.** Client authorized go-live 2026-09-11; handoff sent 2026-08-31
  (`docs/communication_dermam.md`) — awaiting client approval of the Vercel build + Hostinger
  hosting/Banahost domain-migration authorization + access list. Do not touch Hostinger or protected
  files until the user says "let's do the Hostinger deploy". Procedure: `DEPLOY.md` (Part 1 local
  sanity check, Part 2 protected-file work: `.htaccess` SPA catch-all + 301 for
  `/notice-of-privacy-practices`, `robots.txt` cleanup — **Check:** `grep -c "notice-of-privacy-practices" public/robots.txt` should drop from 7 to 0 once done — `sitemap`/`llms.txt` check, `INTAKE.md:56` fix), then GSC verify + submit sitemap.
- **Reviews 8.20 Part 3** — `aggregateRating` schema. Needs clinic sign-off on showing unfiltered
  reviews (some negative). Memory: `project_google_reviews_link`.
- **Square deep-linking.** Mapping in `docs/LINKEO-SQUARE-2026.md`. Missing: clinic confirmation of 4
  rows (PRF, marcación abdominal, corrientes rusas, depilación láser) + validate hidrofacial. Clinic
  doc: artifact `https://claude.ai/code/artifact/3f50986c-a2cf-4f0c-9738-d8fb8214ab46`. On unblock:
  `superpowers:brainstorming` → `src/data/squareServices.js` (slug→SERVICE_ID + helper, fallback
  `/start`); centralize `bookingUrl` (copy-pasted in 8 places).
- **Dental on the site** (`/dental-estetico` hub + whitening + live dental cleaning) — same regulatory
  risk that pulled it from the GBP. Decide whether the pages leave/reframe — separate cycle, user's
  call, do not touch without an explicit request.
- **Yelp** — claimed by Nancy (owner); user hands her the optimized NAP + description.
- **C2 authority link** — quantitative datapoint half-resolved cont. 50 (client supplied
  "+4,000 procedimientos hasta 2026", live on `/nosotros/nancy-nieto`). Still open: an authority link.
- **Square staff roster stale** — "Josey" still listed as bookable staff on Square services (confirmed
  2026-09-11). Not a site/code fix — lives in Square's admin panel. User to email the clinic. No action
  here until done.
- **Square Appointments admin config** (not code, user's own Dashboard, revisit later): (1) per-service
  "Online Booking Visibility" toggle; (2) per-service price display type (Fixed/Starting at/Price
  Varies/Call Us/Blank); (3) booking timezone lock (Settings → Calendar & Booking). Links in
  `docs/PROGRESS_ARCHIVE.md` 2026-09-11 if needed.

## Conditional (act only if the condition holds)

- "Why postoperative care matters" section — only if `/tratamientos-postoperatorios` gains traction
  (spec #6).
- PRF §8.3 EN page — only if EN ad traffic converts. PRF §8.4 pillar "What is PRF" — only if the
  enriched landing ranks.
- Dental footer link — conditional on the dental regulatory hold above being resolved.
- Founder identity residual (low priority) — `founderPrimer.credentialLine` on Home
  (`src/data/aboutPage.js:176`) is a distinct title-case teaser, near-identical to the canonical title
  but not unified. **Check:** still present as of 2026-09-12. Align only if a consistency pass touches
  Home anyway — not worth its own cycle.

## Off-site (no code cycle; separate sessions, user logged into the platform)

- GBP posts + base Facebook ads copy for postop
  (`docs/superpowers/specs/2026-08-29-postop-demand-gen-wedge-design.md` §"Specified, NOT executed").
- Services 1–3 + GBP description (`docs/seo-setrategies/COMPETENCIA-SERVICIOS-2026.md` §S1–S3).
- PRF ads channels/angles/terms
  (`docs/superpowers/specs/2026-08-28-prf-content-strategy-design.md`).

## Resolved infra (do not redo)

graphify out of the workflow · engram off · GSC prefix unverified
(`public/google2f0ede1a410e8a22.html`) · GA4 `G-9272VHFT03` in `index.html` · Apify token in
`.env.local` at root (`APIFY_API_KEY`, format `KEY: valor`)

## Declined by product (do not re-open without a new request)

- Task 8/UX-03 — treatment hero stays dark full-bleed media.
- Task 17/UX-06 — `MethodProcess` circular step markers kept.
- GA4 cookie-consent banner + US state-privacy-rights section — closed as non-mandatory
  (`DECISIONS.md` 2026-09-08/2026-09-12).

Rationale for all three: `DECISIONS.md` (grep the date/task).
