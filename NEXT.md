# NEXT

**Session-resume state only.** Not a backlog — see `BACKLOG.md` for that, and read it only when
asked "revisemos qué falta". `DEPLOY.md` is the deploy procedure — this file just tracks where we
are in it.

## State

Uncommitted: 4 fixes from this session's `DEPLOY.md` Part 1 pass (`CLAUDE.md`, `Navbar.jsx`,
`categoryPages.js`, `PROGRESS.md`/archive). Not yet committed/pushed — pending user confirmation.
Once committed, base commit moves past `1cf5f16`. Hostinger access confirmed by user; deploy is
unblocked pending only the user's explicit "hagamos el deploy".

## Next activity

`DEPLOY.md` Part 1 (full-site local sanity check, all 10 steps) is **done** — passed, live
in-browser, no blocking failures. 4 minor findings fixed in this same cycle (see `PROGRESS.md` top
entry). Commit + push these fixes on user confirmation, then Part 1 is fully closed.

After that: Part 2 (protected files: `.htaccess`, `robots.txt`, etc.) stays untouched until the
user says the literal words "hagamos el deploy" / "let's do the Hostinger deploy".

## How to resume

Confirm commit+push of the pending fixes with the user. If already done, next step is waiting for
the user's explicit deploy go-ahead — nothing to execute proactively until then.

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `BACKLOG.md` = open
work outside this session · `DEPLOY.md` = the deploy procedure itself
