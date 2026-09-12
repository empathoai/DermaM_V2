# NEXT

**Session-resume state only.** Not a backlog — see `BACKLOG.md` for that, and read it only when
asked "revisemos qué falta". `DEPLOY.md` is the deploy procedure — this file just tracks where we
are in it.

## State

HEAD at `6aa5659` (version bump to 1.0.5), on top of `abf49bb` (FloatingWhatsApp footer-hide fix),
`0a9631d` (route code-splitting + deploy automation). Working tree clean. **V1.0.5 is live and
deployed** — matches HEAD.

## Next activity

**Route code-splitting shipped (2026-09-12).** Fixed a 67 mobile PageSpeed score (807 KB single
bundle) via `React.lazy()` per route + `Suspense`/`RouteLoader` — entry bundle now 262 KB.
`test:visual` 34/34, mobile 375px clean, manual route sweep clean.

**Deploy automation live.** `npm run deploy` (`scripts/deploy.sh`) builds + pushes `dist/` over SSH
in ~30s — no more manual zip/File-Manager step. Used 3x this session, all confirmed live.

**Regression found + fixed + deployed same day (2026-09-12):** the lazy-loading change broke
`FloatingWhatsApp`'s footer-hide logic (FAB stayed visible over the footer — user reported with a
screenshot). Root-caused via `superpowers:systematic-debugging` (A/B reproduction against the
pre-splitting commit), fixed with a `MutationObserver` fallback. Verified live on
`dermamskinhealth.com`: FAB correctly gets the `hidden` class on scroll-to-footer, `V1.0.5` in
footer.

**Not yet done:** PageSpeed re-check against the original 67 baseline (technical fix verified,
actual score delta still unconfirmed).

## How to resume

No proactive next step — wait for the user. If they want the PageSpeed number confirmed, re-run
the same Hostinger checker used for the 67 baseline against the now-live V1.0.5.

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `BACKLOG.md` = open
work outside this session · `DEPLOY.md` = the deploy procedure itself
