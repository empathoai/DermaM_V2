# BACKLOG

Everything not actionable this session: blocked on someone else, conditional on an event, or
off-site work. **Not read at session start** — only consulted on request ("revisemos qué falta").

Before reporting any item to the user: run its **Check** if it has one. If the check shows the item
is already resolved, delete the item now (don't wait for a formal close) and say so.

## Blocked (waiting on user / client / third party)

- **Square deep-linking.** Deferred to post-deploy by user (2026-09-12) — does not block Hostinger.
  Mapping in `docs/LINKEO-SQUARE-2026.md`. Missing: clinic confirmation of 4 rows (PRF, marcación
  abdominal, corrientes rusas, depilación láser) + validate hidrofacial. Clinic doc: artifact
  `https://claude.ai/code/artifact/3f50986c-a2cf-4f0c-9738-d8fb8214ab46`. On unblock:
  `superpowers:brainstorming` → `src/data/squareServices.js` (slug→SERVICE_ID + helper, fallback
  `/start`); centralize `bookingUrl` (copy-pasted in 8 places).
- **Square staff roster stale** — "Josey" still listed as bookable staff on Square services (confirmed
  2026-09-11). Not a site/code fix — lives in Square's admin panel. User to email the clinic. No action
  here until done.
- **Square Appointments admin config** (not code, user's own Dashboard, revisit later): (1) per-service
  "Online Booking Visibility" toggle; (2) per-service price display type (Fixed/Starting at/Price
  Varies/Call Us/Blank); (3) booking timezone lock (Settings → Calendar & Booking). Links in
  `docs/PROGRESS_ARCHIVE.md` 2026-09-11 if needed.

## Infra constraints (not actionable in this repo)

- **Hostinger's `hcdn` CDN edge layer overrides `.htaccess` Cache-Control for JS.** Confirmed
  2026-09-12 post-deploy of the cache-control hardening commit (`6d6927c`): images/video under
  `/assets/` correctly serve our `Cache-Control: public, max-age=31536000, immutable` (verified via
  `fetch` headers on live `hero.jpg`/`hero.mp4`), but `index-*.js` serves `max-age=604800` (7 days)
  regardless of the 1-year rule set in `.htaccess` — response headers show `server: hcdn`,
  `x-hcdn-cache-status: HIT`, `platform: hostinger`, meaning Hostinger's own CDN normalizes JS cache
  lifetime at its edge, ignoring origin headers for that content type. No `.htaccess` change can fix
  this — it would require a Hostinger panel/CDN-tier setting (if one exists) or moving JS off Hostinger's
  CDN. **Check:** re-run the `fetch` header check above on the live `index-*.js` chunk — if
  `cache-control` ever shows `max-age=31536000`, this is resolved (Hostinger changed edge behavior or
  plan tier) and this item can be deleted.
- ~~`hcdn` strips `Cache-Control` on `hero.mp4` HITs~~ — **RESOLVED, was a false positive.** The
  2026-09-12 investigation above concluded (wrongly) that Hostinger's CDN drops `Cache-Control` on
  video cache hits. Root cause of *that* conclusion, found later the same day: the browser tab's own
  HTTP cache was replaying one stale cached response (identical `x-hcdn-request-id` across 5+
  `fetch()` calls, proving no real network request occurred) from a window very shortly post-deploy
  before the header had fully propagated. Forcing genuine network requests (`fetch(url, {cache:
  'reload'})`, and separately `curl` from a different network) showed the CDN **does** preserve
  `Cache-Control` on real `HIT`s — confirmed 6+ times. `npm run pagespeed mobile` re-run same day:
  `hero.mp4` no longer appears in the cache-lifetime audit at all (only third-party Facebook Pixel
  scripts remain, ~125 KiB, out of our control); mobile score 69→70. No Hostinger ticket needed — the
  original `.htaccess` fix (commit `6d6927c`) was correct all along.
  **Lesson:** when re-testing a cache-header fix in a browser tab, always force a genuine network
  round-trip (`{cache: 'reload'}`, a cache-busting query param, or a fresh `curl`/incognito context)
  and check the response's cache/request-id header for repetition before concluding the *server's*
  behavior — a repeated identical trace ID across calls means the browser answered from its own
  cache, not the network.

## GEO/AEO audit (2026-09-13) — not actionable this session, needs a design decision

- **JSON-LD schema (`MedicalBusiness`) and OG meta are client-side only.** All `<script
  type="application/ld+json">` and `<meta property="og:*">` tags are injected via
  `react-helmet-async` (`<Helmet>`) in React components — confirmed `index.html` has none of
  this in the static HTML. A crawler that doesn't execute JS (or times out first) never sees the
  schema, and `og:image` previews (WhatsApp, etc.) may not resolve. HSTS item (above,
  resolved same session) was a separate, simpler audit finding — this one needs an architecture
  decision (prerendering/SSG for the `<head>`, or moving global schema/OG into static
  `index.html`) since the stack is Vite SPA with no SSR (`CLAUDE.md` "Stack: do not add to it").
  Route through `superpowers:brainstorming` before touching anything — this is not a one-line fix.

## Conditional (act only if the condition holds)

- "Why postoperative care matters" section — only if `/tratamientos-postoperatorios` gains traction
  (spec #6).
- PRF §8.4 pillar "What is PRF" — only if the enriched landing ranks.

## Off-site (no code cycle; separate sessions, user logged into the platform)

- GBP posts + base Facebook ads copy for postop
  (`docs/superpowers/specs/2026-08-29-postop-demand-gen-wedge-design.md` §"Specified, NOT executed").
- Services 1–3 + GBP description (`docs/seo-setrategies/COMPETENCIA-SERVICIOS-2026.md` §S1–S3).
- PRF ads channels/angles/terms
  (`docs/superpowers/specs/2026-08-28-prf-content-strategy-design.md`).

## Resolved infra (do not redo)

graphify out of the workflow · engram off · GSC verified (`https://dermamskinhealth.com/`
URL-prefix property, verified since 2026-08-28; sitemap.xml submitted 2026-09-12, 44 pages) ·
GA4 `G-9272VHFT03` in `index.html` · Apify token in `.env.local` at root (`APIFY_API_KEY`, format
`KEY: valor`)

## Declined by product (do not re-open without a new request)

- Task 8/UX-03 — treatment hero stays dark full-bleed media.
- Task 17/UX-06 — `MethodProcess` circular step markers kept.
- GA4 cookie-consent banner + US state-privacy-rights section — closed as non-mandatory
  (`DECISIONS.md` 2026-09-08/2026-09-12).
- Dental estético footer link — declined, no core-conversion impact (`DECISIONS.md` 2026-09-12).
- Founder identity residual (`founderPrimer.credentialLine` on Home) — declined, no core-conversion
  impact (`DECISIONS.md` 2026-09-12).
- PRF §8.3 EN page — not tracked as pending; ask explicitly if/when it becomes relevant
  (`DECISIONS.md` 2026-09-12).
- **Dental on the site** (`/dental-estetico` hub + whitening + live dental cleaning) — user decided
  2026-09-12: pages stay as-is, no removal or reframe. Does not block Hostinger deploy.
- **Yelp** — user call 2026-09-12: no impact, not tracked as blocking. Whenever it happens: hand
  Nancy (owner) the optimized NAP + description.
- **C2 authority link** — quantitative datapoint half-resolved cont. 50 (client supplied
  "+4,000 procedimientos hasta 2026", live on `/nosotros/nancy-nieto`) stays as unsourced prose; no
  verifiable reference document available as of 2026-09-12. Not tracked as blocking.

Rationale: `DECISIONS.md` (grep the date/task).
