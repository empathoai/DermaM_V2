# NEXT

**Session-resume state only.** Not a backlog — see `BACKLOG.md` for that, and read it only when
asked "revisemos qué falta". `DEPLOY.md` is the deploy procedure — this file just tracks where we
are in it.

## State

HEAD at `ac20a28` (PageSpeed API tooling + CDN root-cause docs), on top of `d7388e1` (`.htaccess`
cache-control hardening, deployed + verified live). Working tree clean. **V1.0.7 is the live
deploy**, `.htaccess` cache-control changes are live on Hostinger.

## Next activity

**Cache-control cycle fully closed 2026-09-12 — fix confirmed working, no CDN limitation.**
`.htaccess` hardening deployed and verified: `hero.mp4` no longer appears in `pagespeed.web.dev`'s
cache-lifetime audit at all (mobile 69→70). An earlier same-day investigation wrongly concluded
Hostinger's CDN drops the header on video HITs — that was a browser-cache false positive, corrected
same session (see `DECISIONS.md`). Only remaining cache-lifetime flag is third-party Facebook Pixel
scripts (~125 KiB), not fixable from our side.

## How to resume

No proactive next step — wait for the user. If mobile PageSpeed work continues, the only lever left
per Google's diagnostics is overall payload reduction (`hero.mp4` encoding/size, ~3.7 MB total) —
cache-lifetime is no longer a factor for our own assets.

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `BACKLOG.md` = open
work outside this session · `DEPLOY.md` = the deploy procedure itself
