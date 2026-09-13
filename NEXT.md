# NEXT

**Session-resume state only.** Not a backlog — see `BACKLOG.md` for that, and read it only when
asked "revisemos qué falta". `DEPLOY.md` is the deploy procedure — this file just tracks where we
are in it.

## State

HEAD at `6d6927c` (`.htaccess` cache-control hardening), on top of `350a4bb` (local
Lighthouse tooling), `3c2a101` (hero poster preload, V1.0.7). Working tree clean. **V1.0.7 is
still the live deploy** — the `.htaccess` change is committed but not yet pushed to Hostinger.

## Next activity

**`.htaccess` cache-control hardening (2026-09-12), applied but not deployed.** Added
`video/mp4`/`video/webm`/font types/favicon to `mod_expires` (previously uncached — `hero.mp4` had
no cache header at all), bumped hashed JS/CSS from 1 month to 1 year, added a
`Cache-Control: immutable` header scoped to `/assets/` via `SetEnvIf` (see `DECISIONS.md` for why
`<FilesMatch>` doesn't work for path-based scoping). Targets the 3.2 MB "efficient cache policy"
flag from `pagespeed.web.dev`.

## How to resume

**Deploy this `.htaccess` change** (upload the updated file to Hostinger — it's not part of
`npm run deploy`'s `dist/` sync, `.htaccess` lives in `public/` and is copied into `dist/` by Vite,
so a normal `npm run deploy` run should carry it), then re-check `pagespeed.web.dev` mobile to
confirm the cache-lifetime flag clears. If it doesn't move enough, the remaining lever is reducing
overall payload — likely `hero.mp4` encoding/size.

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `BACKLOG.md` = open
work outside this session · `DEPLOY.md` = the deploy procedure itself
