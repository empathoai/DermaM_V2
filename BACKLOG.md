# BACKLOG

Everything not actionable this session: blocked on someone else, conditional on an event, or
off-site work. **Not read at session start** — only consulted on request ("revisemos qué falta").

Before reporting any item to the user: run its **Check** if it has one. If the check shows the item
is already resolved, delete the item now (don't wait for a formal close) and say so.

## Blocked (waiting on user / client / third party)

- **Hostinger deploy.** Client authorized go-live 2026-09-11; Hostinger access confirmed by user
  2026-09-12. All other §6 handoff sub-items resolved/deprioritized same day (see below) — nothing
  left blocking except the user's explicit go-ahead. Do not touch Hostinger or protected files until
  the user says "let's do the Hostinger deploy" (not yet said as of 2026-09-12). Procedure: `DEPLOY.md`
  (Part 1 local sanity check, Part 2 protected-file work: `.htaccess` SPA catch-all + 301 for
  `/notice-of-privacy-practices`, `robots.txt` cleanup — **Check:** `grep -c "notice-of-privacy-practices" public/robots.txt` should drop from 7 to 0 once done — `sitemap`/`llms.txt` check, `INTAKE.md:56` fix), then GSC verify + submit sitemap.
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
- **`hcdn` strips `Cache-Control` entirely on cache `HIT` for `hero.mp4` — root-caused via
  `superpowers:systematic-debugging` 2026-09-12.** `pagespeed.web.dev`'s "Use efficient cache
  lifetimes" audit kept flagging `hero.mp4` at `cacheLifetimeMs: 0` (~3.2 MB) even ~2h post-deploy of
  the cache-control hardening (`6d6927c`), ruling out edge-propagation lag as the cause. Direct
  `fetch()` comparison confirmed the real mechanism: when `hcdn` serves the video from its own edge
  cache (`x-hcdn-cache-status: HIT`), the `Cache-Control` header is **absent from the response
  entirely** — it only appears when `hcdn` passes the request through to origin (`MISS`/`EXPIRED`).
  `hero.jpg` and the JS bundle do **not** show this — they keep `Cache-Control` on every response
  observed. A real user's repeat visit almost always lands on a CDN `HIT` (that's the CDN's job), so
  in practice browsers never see our cache header for this file — matching exactly what Lighthouse
  measures. This is `hcdn`'s internal handling of byte-range-heavy content (video), not an
  `.htaccess` config gap — **no origin-side fix exists**. Options if this needs to actually close:
  (1) ask Hostinger support whether `hcdn` has a config/tier that preserves headers on video HITs,
  (2) serve video from a different CDN/host (e.g. Cloudflare Stream, Bunny, or S3+CloudFront) instead
  of Hostinger's own, (3) accept it — the JS-discovery-order LCP fix (the thing that actually moved
  the needle earlier this project) already landed; this residual flag is cache-efficiency polish, not
  a user-facing regression. **Check:** re-run `npm run pagespeed mobile` — if `hero.mp4`'s
  `cacheLifetimeMs` in the `cache-insight` audit is ever > 0, `hcdn`'s behavior changed and this item
  can be deleted.

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
