# NEXT

**Session-resume state only.** Not a backlog — see `BACKLOG.md` for that, and read it only when
asked "revisemos qué falta". `DEPLOY.md` is the deploy procedure — this file just tracks where we
are in it.

## State

HEAD at `8f4877e` (Home reverted to eager import, V1.0.6), on top of `6aa5659`/`abf49bb`
(FloatingWhatsApp fix)/`0a9631d` (route code-splitting + deploy automation). Working tree clean.
**V1.0.6 is live and deployed** — matches HEAD.

## Next activity

**Route code-splitting saga, resolved (2026-09-12):**
1. Split all 27 routes via `React.lazy()` to fix a 67 mobile PageSpeed score (807 KB bundle).
2. Regression #1: broke `FloatingWhatsApp`'s footer-hide logic — fixed with a `MutationObserver` fallback (`abf49bb`).
3. Re-checked PageSpeed: still 67 (unchanged). Root-caused via `superpowers:systematic-debugging`: lazy-loading **Home** itself created a waterfall (entry → Home chunk → HeroMedia chunk → hero.jpg/mp4) that delayed LCP discovery as much as the original monolith.
4. Ran an LLM-council review (5 advisors + peer review + chairman) before fixing — verdict: revert Home to eager import (it's the one route PageSpeed measures, and its hero is the LCP element), keep the other 26 lazy. Confirmed `HeroMedia.jsx` has no lazy import of its own first (it doesn't).
5. Applied the revert (`8f4877e`, V1.0.6). Verified via `vite preview`: hero.jpg/mp4 now downloads directly alongside the entry bundle, no intermediate chunk. `test:visual` 34/34, mobile 375px clean. **Deployed live, confirmed footer `V1.0.6`.**

**Deploy automation live.** `npm run deploy` (`scripts/deploy.sh`) — used 4x this session, all
confirmed live.

**Not yet done:** user needs to re-run Hostinger's PageSpeed checker against the now-live V1.0.6 to
confirm the actual score moved (the waterfall fix is verified at the network level, but the
composite PageSpeed number itself hasn't been re-checked since this last deploy).

## How to resume

No proactive next step — wait for the user to share the new PageSpeed result. If it's still stuck
at 67, the council's Outsider/Contrarian flagged a real alternative hypothesis worth investigating
next: a server/hosting-level bottleneck (Hostinger shared-hosting TTFB, cache headers, redirects)
rather than anything client-side JS — see `Document request latency: 0` and `Avoid multiple page
redirects: 0` in the diagnostics, unchanged across every variant tried so far.

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `BACKLOG.md` = open
work outside this session · `DEPLOY.md` = the deploy procedure itself
