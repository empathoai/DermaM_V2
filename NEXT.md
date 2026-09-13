# NEXT

**Session-resume state only.** Not a backlog — see `BACKLOG.md` for that, and read it only when
asked "revisemos qué falta". `DEPLOY.md` is the deploy procedure — this file just tracks where we
are in it.

## State

HEAD at `3c2a101` (hero poster preload, V1.0.7), on top of `8f4877e` (Home eager import, V1.0.6),
`abf49bb` (FloatingWhatsApp fix), `0a9631d` (route code-splitting + deploy automation). Working
tree clean. **V1.0.7 is live and deployed** — matches HEAD.

## Next activity

**Route code-splitting saga (2026-09-12), three rounds:**
1. Split all 27 routes via `React.lazy()` to fix a 67 mobile PageSpeed score (807 KB bundle).
2. Regression #1: broke `FloatingWhatsApp`'s footer-hide logic — fixed with a `MutationObserver` fallback (`abf49bb`).
3. Re-checked PageSpeed: still 67. Root-caused via `superpowers:systematic-debugging`: lazy-loading **Home** created a waterfall (entry → Home chunk → HeroMedia chunk → hero.jpg/mp4) delaying LCP discovery as much as the original monolith. LLM-council-reviewed fix: revert Home to eager import, keep other 26 lazy (`8f4877e`, V1.0.6).
4. Real-world re-check after that deploy: **Desktop jumped 90-92, but Mobile stayed 67-68** (LCP still 5.8s). Second LLM-council review: confirm the actual LCP resource before adding preload hints. Used the browser's `PerformanceObserver` API directly against production — confirmed the measured LCP resource is `hero.jpg` (the video's poster), not `hero.mp4`. Added `<link rel="preload" as="image" href="/assets/images/home/hero.jpg" fetchpriority="high">` to `index.html` only, deliberately no video preload. `test:visual` 34/34, mobile 375px clean. **Deployed live (`3c2a101`, V1.0.7), confirmed footer `V1.0.7`.**

**Deploy automation live.** `npm run deploy` (`scripts/deploy.sh`) — used 5x this session, all
confirmed live.

**Not yet done:** user needs to re-run Hostinger's PageSpeed mobile check against the now-live
V1.0.7 to see if the preload actually moved the number. The council's Outsider raised a real
alternative hypothesis if it still doesn't move: the score swung 90↔68 between near-identical runs
earlier today, which could indicate lab-test variance (CPU throttling jitter, cold cache,
Hostinger shared-hosting TTFB) rather than a purely client-side JS problem — worth 3-5 repeat runs
before chasing another code change. See `Document request latency: 0` / `Avoid multiple page
redirects: 0`, unchanged across every variant tried so far.

## How to resume

No proactive next step — wait for the user to share the new mobile PageSpeed result. If preload
didn't move it and repeat runs rule out variance, next lever (per council) is hero.mp4 encoding/
file size on throttled mobile bandwidth, not more `<head>` tags.

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `BACKLOG.md` = open
work outside this session · `DEPLOY.md` = the deploy procedure itself
