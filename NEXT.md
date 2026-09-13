# NEXT

**Session-resume state only.** Not a backlog — see `BACKLOG.md` for that, and read it only when
asked "revisemos qué falta". `DEPLOY.md` is the deploy procedure — this file just tracks where we
are in it.

## State

HEAD at `0ab1459` (HSTS header added to `.htaccess`), on top of `8d26c5a` (project retrospective
doc). Working tree clean. `.htaccess` HSTS change deployed via direct `scp` (not a full rebuild)
and verified live on Hostinger.

## Next activity

**Session closed 2026-09-13 — nothing in-repo pending.** HSTS header cycle fully resolved: added,
committed, pushed, deployed, verified live via `curl` (`strict-transport-security` now present).
Came from a GEO/AEO audit that flagged 2 other items not yet actioned — see below.

**User is now waiting on an external, non-code item:** Square deep-linking (see `BACKLOG.md`
"Blocked" — clinic needs to confirm 4 service-ID rows + validate hidrofacial). No repo work is
blocked on this; it only unblocks the Square-mapping cycle whenever the user has the confirmation.

## How to resume

No proactive next step — wait for the user. If they come back with the Square confirmation,
that's the next cycle (`superpowers:brainstorming` → `src/data/squareServices.js`, see `BACKLOG.md`
for the full scope). Otherwise: general PageSpeed cache-lifetime is resolved; only remaining lever
is overall payload reduction (`hero.mp4` encoding/size) if that's ever revisited.

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `BACKLOG.md` = open
work outside this session · `DEPLOY.md` = the deploy procedure itself
