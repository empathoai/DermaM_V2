# NEXT

**Session-resume state only.** Not a backlog — see `BACKLOG.md` for that, and read it only when
asked "revisemos qué falta". `DEPLOY.md` is the deploy procedure — this file just tracks where we
are in it.

## State

HEAD at `df8fdad` + 1 uncommitted docs cycle (this cycle: **site went live**. `dermamskinhealth.com`
deployed to Hostinger, DNS cut over from BanaHosting, SSL active, all DEPLOY.md Part 2 items
resolved — 1-5 and 7 done, 6 explicitly skipped). Not yet pushed.

## Next activity

**Deploy is complete.** `DEPLOY.md` has no more open items. Only loose end: **GSC domain
verification + `sitemap.xml` submission** — not urgent, do whenever convenient (guide the user
through search.google.com/search-console, Domain property, DNS TXT verification via Hostinger).

Open item (not a deploy blocker): `/corporales/maderoterapia-corporal` fires ~70 duplicate
`whatis.webp` requests (re-render loop) — flagged in PROGRESS.md 2026-09-12, not yet
investigated or fixed.

## How to resume

No proactive next step — wait for the user. If they ask "qué sigue", offer GSC setup or the
maderoterapia-corporal bug. No open external-audit findings remain (all 27 closed).

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `BACKLOG.md` = open
work outside this session · `DEPLOY.md` = the deploy procedure itself
