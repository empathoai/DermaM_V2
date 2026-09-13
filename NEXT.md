# NEXT

**Session-resume state only.** Not a backlog — see `BACKLOG.md` for that, and read it only when
asked "revisemos qué falta". `DEPLOY.md` is the deploy procedure — this file just tracks where we
are in it.

## State

HEAD at `<pending>` (PageSpeed API tooling + CDN root-cause docs), on top of `d7388e1` (`.htaccess`
cache-control hardening, deployed + verified live). Working tree clean. **V1.0.7 is the live
deploy**, `.htaccess` cache-control changes are live on Hostinger.

## Next activity

**Cache-control cycle closed 2026-09-12.** `.htaccess` hardening deployed and verified live
(`hero.jpg`/`hero.mp4` correctly serve `max-age=31536000, immutable` on CDN passthrough). The
residual `pagespeed.web.dev` "efficient cache lifetimes" flag on `hero.mp4` (~3.2 MB) is root-caused
in `BACKLOG.md`/`DECISIONS.md`: Hostinger's `hcdn` CDN drops `Cache-Control` on video cache `HIT`s —
no `.htaccess` fix exists for this.

## How to resume

No proactive next step — wait for the user. If the residual cache-lifetime flag needs to actually
close, the next real levers (per `BACKLOG.md`) are: (1) a Hostinger support ticket asking about
`hcdn` header behavior on video, or (2) moving video delivery off Hostinger's CDN entirely. Otherwise
the remaining PageSpeed lever is overall payload reduction (`hero.mp4` encoding/size, 3.7 MB total).

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `BACKLOG.md` = open
work outside this session · `DEPLOY.md` = the deploy procedure itself
