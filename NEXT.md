# NEXT

**This file = live state + queue + how to resume.** A closed cycle leaves no block here; its
summary goes to `PROGRESS.md`. Keep it under ~110 lines — old "CLOSED" blocks are sediment, prune them.

## State

Base commit = `098874e` (Task 15 done, cont. 38). Clean tree, **pushed**.
Dev server `:3000` = running (cont. 38, started this session).

## Active queue — audit remediation (cont. 21)

27 tasks triaged from `auditorias-externas/resultados/{ui-ux,seo,copy}.md`. **Per-task detail**
(files, approach, verification, SEO/GEO/AEO impact, gate): `docs/superpowers/plans/2026-08-30-remediacion-auditorias-externas.md`.

Done: Tasks 1, 3–7, 9 (cont. 24–30); Tasks 11, 18, 10, 12, 13, 20, 21, 14, 15 (cont. 32–38) —
detail in `docs/PROGRESS_ARCHIVE.md`. Task 15 (cont. 38): legal-doc address register → respectful
`tú` (`DECISIONS.md` 2026-08-31; memory `project_legal_docs_tu_register`). Each remaining task:
`superpowers:brainstorming` → user approval → 1 change → verification → ritual.

Declined by product (cont. 31, do not re-open): **Task 8 / UX-03** (treatment hero stays dark full-bleed
media) · **Task 17 / UX-06** (`MethodProcess` circular step markers kept). See `DECISIONS.md` 2026-08-30.

**Next: LEGAL-PAGES OVERHAUL** (cont. 38, user scope-expansion off Task 15 — chose "todo junto"
despite high compliance-copy blast radius). `superpowers:brainstorming` → spec → plan → go. Scope, 6:
  1. **med-spa ≠ clínica** — swap institutional-self nouns (`clínica`/`consultorio`/`centro dermatológico`;
     `TreatmentDisclaimer.jsx` ×6, `legalPages.js` ×2, others ×1). KEEP legally-required "professional
     medical evaluation/supervision" refs (FL med spa runs under medical direction). Align `siteMeta.js`
     + `DECISIONS.md` 2026-08-30.
  2. **dead contact form** — `Contacto.jsx` has NO `<form>` (WhatsApp/tel/Square/map). Rewrite (not delete)
     stale copy for the real flow: `legalPages.js` `contactConsentCopy` + "completas/Enviar un formulario"
     / "formularios públicos" (Privacy §Intro/§data-collected, Terms §no-relationship). "No envíes info
     sensible" still applies to WhatsApp — reword for channel.
  3. **tech accuracy** — reconcile with real functionality: no form; GA4 `G-9272VHFT03`; "chat en línea"
     in `TreatmentDisclaimer.jsx` emergency §; Privacy analytics clause. Verify treatment mentions vs
     `treatmentPages.js` published set.
  4. **company-data congruence** — NAP audit (`5707 S Dixie Hwy UNIT D, West Palm Beach, FL 33405` ·
     `+1 561 253 5384` · `info@dermamskinhealth.com` · `dermamskinhealth.com`) across every legal page +
     Footer + `Contacto.jsx` + `siteMeta.js`. One canonical source.
  5. **niche best-practices** — confirm FL med-spa legal set complete; assess SMS/telemarketing consent,
     ADA, minors clause. `MEDICAL_COMPLIANCE.md` + `seo-local` skill.
  6. **hide legal-review callouts** — remove visible `[REVISIÓN LEGAL REQUERIDA]` on the 3 pages
     (`attorneyReviewRequired` + `attorneyCalloutText` on `LegalPageLayout`); leave internal code comment
     "legal review still pending — callout hidden per user 2026-08-31". Not a claim counsel reviewed.

Remaining PROTECTED item: Task 23 (`llms.txt` legal links, XS).

Order after the overhaul: **16 → 19 → 22** · then `23 → 24 → 26 → 27 → 25`.

| # | Finding | Size | Flag |
|---|---|---|---|
| 2 | `.htaccess`: SPA catch-all before the 301s (SEO-01) | S | **BLOCKED → Hostinger deploy** |
| 16 | Primary-CTA vocabulary is scattered (CPY-04) | M | |
| 19 | `Contacto`: gradients/blur/zombie CSS + button token (UX-08) | M | absorbs old `/contacto` follow-ups |
| 22 | PRF vs faciales/capilar keyword cannibalization (SEO-08) | M | reconcile with the closed PRF spec |
| 23 | llms.txt has no links to legal policies (SEO-10) | XS | PROTECTED |
| 24 | "marcas permanentes" → "persistentes" (CPY-05) | XS | |
| 25 | Inconsistent ES title capitalization/style (CPY-07) | L | |
| 26 | Footer disclaimer 11px → 12px (UX-11) | XS | |
| 27 | `AboutPage`: fixed padding → `clamp()` + star glyphs (UX-12) | S | |

Protected files (`.htaccess` / `robots.txt` / `sitemap.xml` / `llms.txt`): each starts only on the user's explicit "go" for that file.

## Other pending (outside the cont. 21 queue)

**Square deep-linking — BLOCKED on the clinic.** Mapping in `docs/LINKEO-SQUARE-2026.md`. Missing:
clinic confirmation of 4 rows (PRF, marcación abdominal, corrientes rusas, depilación láser) + validate
hidrofacial. On unblock: `superpowers:brainstorming` → `src/data/squareServices.js` (slug→SERVICE_ID +
helper, fallback `/start`); centralize `bookingUrl` (copy-pasted in 8 places). Clinic-facing doc =
artifact `https://claude.ai/code/artifact/3f50986c-a2cf-4f0c-9738-d8fb8214ab46` (republish with `url=`).

**Missing media — `add-media` skill, 1 slot/cycle.** `about/hero.jpg` ON HOLD: placeholder
`contact/hero.jpg` (`aboutPage.js:11`), waiting on team photo → **known `test:visual` failure**
`nosotros-viewport` (desktop-chrome); if it drags: `npx playwright test -g "Nosotros Page - Viewport"
--update-snapshots`. Also verify `.jpg` posters for `mikaela-guajardo` / `elianne-trujillo` (Nancy 4/4 done).

**Reviews 8.20 — IN BACKLOG** (user, 2026-08-29), spec `docs/superpowers/specs/2026-08-29-reviews-alignment-8.20-rescope-design.md`.
On request: curation Option A vs B, confirm "no `aggregateRating`".

## Close the project (NOT code, NOT this workflow)

1. **Deploy to Hostinger/Apache** (real prod; Vercel = client demo): replace `public/.htaccess` with the
   block from `docs/seo-setrategies/REDIRECT-MAP-VALIDATION-2026.md` §8 (resolves Task 2 / SEO-01), verify
   with its `curl -I` script, check `/nosotros/nancy-nieto` still in `sitemap.xml`/`robots.txt`/`llms.txt`,
   fix `docs/seo-setrategies/INTAKE.md:56` ("Vercel" → Hostinger/Apache).
2. **Verify GSC** by Domain on Hostinger + DNS.

## Conditional (wait for the condition to hold)

- "Why postoperative care matters" section — only if `/tratamientos-postoperatorios` gains traction (#6 spec).
- PRF §8.3 EN page (if EN ad traffic converts) · PRF §8.4 pillar "What is PRF" (if enriched landing ranks).
- Dental link in the footer — conditional on the dental regulatory hold (below).

## Blocked (waiting on user / third parties)

- **Hostinger deploy:** do not touch Hostinger or `.htaccess` until the user says "let's do the Hostinger deploy".
- **Dental on the site** (`/dental-estetico` hub + whitening + live dental cleaning): same regulatory risk that pulled it from the GBP. Decide whether the pages leave/reframe — separate cycle, user's call, do not touch without a request.
- **Yelp:** claimed by Nancy (owner); user hands her the optimized NAP + description.
- **C2:** clinic compliance sign-off for a quantitative datapoint + an authority link.
- Intake 6/7 + postop weak-point note: research context, see `docs/seo-setrategies/INTAKE.md`.

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
