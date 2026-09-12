# NEXT

**Session-resume state only.** Not a backlog — see `BACKLOG.md` for that, and read it only when
asked "revisemos qué falta". `DEPLOY.md` is the deploy procedure — this file just tracks where we
are in it.

## State

HEAD at `f2b3e31` + 1 uncommitted docs cycle (this cycle: Part 1 full-site sanity check done on
a clean build; verified DEPLOY.md Part 2 items 1-4 were already applied in a prior session —
marked ✅ in DEPLOY.md, no protected files touched). Not yet pushed.

## Next activity

`DEPLOY.md` Part 2 items 1-4 and 7 are done. Only **items 5-6 remain**: post-deploy `curl -I`
verification + `public_html` backup — only executable once the user actually uploads to
Hostinger (dev server + prod domain not live yet). User is currently in Hostinger hPanel setting
up the site under a temporary domain before pointing GoDaddy DNS at it.

Open item (not a deploy blocker): `/corporales/maderoterapia-corporal` fires ~70 duplicate
`whatis.webp` requests (re-render loop) — flagged in PROGRESS.md 2026-09-12, not yet
investigated or fixed.

## How to resume

Continue with the user's Hostinger upload (File Manager → `public_html`, contents of `dist/` +
`public/` protected files). Once live, execute DEPLOY.md Part 2 items 5-6. No open
external-audit findings remain (all 27 closed).

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `BACKLOG.md` = open
work outside this session · `DEPLOY.md` = the deploy procedure itself
