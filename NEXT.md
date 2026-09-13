# NEXT

**Session-resume state only.** Not a backlog — see `BACKLOG.md` for that, and read it only when
asked "revisemos qué falta". `DEPLOY.md` is the deploy procedure — this file just tracks where we
are in it.

## State

HEAD at `350a4bb` (local Lighthouse tooling), on top of `3c2a101` (hero poster preload, V1.0.7),
`8f4877e` (Home eager import, V1.0.6), `abf49bb` (FloatingWhatsApp fix), `0a9631d` (route
code-splitting + deploy automation). Working tree clean. **V1.0.7 is live and deployed** (the
Lighthouse-tooling commit is dev-only, nothing to redeploy for it).

## Next activity

**Route code-splitting saga (2026-09-12), resolved across 4 rounds** — see `DECISIONS.md` for
full rationale of each: (1) split 27 routes via `React.lazy()` for a 67 mobile PageSpeed score,
(2) broke `FloatingWhatsApp`'s footer-hide, fixed, (3) Home itself needed to stay eager (LCP
waterfall), (4) added a `<link rel="preload">` for the hero poster after confirming via
`PerformanceObserver` that `hero.jpg` (not `hero.mp4`) is the real measured LCP resource.

**Verified against Google's own `pagespeed.web.dev` (not Hostinger's proxy, which gives different
numbers)** on the live V1.0.7: Mobile **69**, LCP **5.3s** (down from 5.8s), and — the real
confirmation the fix worked — **"LCP request discovery" no longer appears as a failing
diagnostic**. Remaining top issues are different in kind now: cache lifetimes (3.2 MB potential
savings) and overall payload size (3.7 MB) — a caching/asset-weight problem, not a JS-discovery
problem.

**Added local Lighthouse tooling:** `npm run lighthouse [mobile|desktop]` — builds + serves via
`vite preview` + runs a real audit, report to gitignored `lighthouse-reports/`. **Important:**
local numbers are NOT comparable to `pagespeed.web.dev` (54 locally vs. 69 on Google's tool, same
build — different CPU/network/TLS conditions). Use only for relative before/after checks on this
machine; `pagespeed.web.dev` stays the source of truth for the real number.

**Deploy automation live.** `npm run deploy` (`scripts/deploy.sh`) — used 5x this session, all
confirmed live.

## How to resume

No proactive next step — wait for the user. If mobile PageSpeed work continues, the next real
levers (per Google's own diagnostics) are: (1) cache-control headers for static assets in
`.htaccess` (biggest potential win, 3.2 MB), (2) reducing overall payload — likely `hero.mp4`
encoding/size — not more `<head>` tags or further JS-splitting changes.

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `BACKLOG.md` = open
work outside this session · `DEPLOY.md` = the deploy procedure itself
