# NEXT

**Session-resume state only.** Not a backlog — see `BACKLOG.md` for that, and read it only when
asked "revisemos qué falta". `DEPLOY.md` is the deploy procedure — this file just tracks where we
are in it.

## State

HEAD at `<pending>` (this cycle: added missing `<link rel="icon">` in `index.html` — favicon file
existed on disk but was never referenced). Not yet pushed — awaiting push confirmation.

## Next activity

`DEPLOY.md` Part 2 items 5-6 remain: post-deploy `curl -I` verification + `public_html` backup —
only executable once the user actually uploads to Hostinger, not from this session.

Auditorías externas: only CPY-07 (title-case inconsistency across `categoryPages.js`/
`treatmentPages.js`, talla L) stays open — deferred to the pre-deploy external re-audit
(`auditorias-externas/PROMPT.md`) per explicit user request, not to be picked up ad hoc.

## How to resume

Nothing to execute proactively — waiting for the user's explicit deploy go-ahead ("hagamos el
deploy") to touch items 5-6, or a request to run the external re-audit, or a new task.

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `BACKLOG.md` = open
work outside this session · `DEPLOY.md` = the deploy procedure itself
