# NEXT

**Session-resume state only.** Not a backlog — see `BACKLOG.md` for that, and read it only when
asked "revisemos qué falta". `DEPLOY.md` is the deploy procedure — this file just tracks where we
are in it.

## State

HEAD at `5dcb226` (GSC verify/sitemap + `page_id` redirect fix, V1.0.3), on top of `be37273` (docs
close for GA4 event cycle), `b78223b` (GA4 `contact_whatsapp` event, V1.0.2). Working tree clean
(pending: doc-fixup commit for this PROGRESS/NEXT update).

## Next activity

**Full redeploy done, V1.0.3 live (2026-09-12).** Ran `DEPLOY.md` Part 1 (clean build + 34/34
`test:visual`), built `dist/` zip, user uploaded it manually to Hostinger File Manager. Verified
live: footer `V1.0.3`, new bundle hash, `/`, `/contacto`, `/faciales/hidrofacial` clean (no console
errors, no 404s). Meta Pixel `PageView`/`Contact` also confirmed Active in Events Manager.

**Deploy automation — open question.** User asked about FTP/SSH automation for future deploys;
paused pending them checking hPanel → Avanzado → SSH Access. No credentials handled in chat —
whichever method, they go in a local gitignored `.env.deploy`, never pasted here.

## How to resume

No proactive next step — wait for the user. If they come back with SSH availability, set up a
`rsync`-over-SSH (or `lftp`-over-FTP if no SSH) deploy script per their answer.

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `BACKLOG.md` = open
work outside this session · `DEPLOY.md` = the deploy procedure itself
