# NEXT

**Session-resume state only.** Not a backlog — see `BACKLOG.md` for that, and read it only when
asked "revisemos qué falta". `DEPLOY.md` is the deploy procedure — this file just tracks where we
are in it.

## State

HEAD at `a504cda` (organization node `@id`-reference refactor), on top of `d854875`
(build script wiring), `fcfdde3` (`inject-schema.js`), `2142475`/`0ab1459` (HSTS cycle). Working
tree clean. Full `npm run build` + `scripts/deploy.sh` deploy done; verified live via `curl`
(`HealthAndBeautyBusiness` schema + real `og:image` in raw HTML) and in-browser (`/`, `/contacto`,
`/nosotros` — no console errors, no duplicate entity in final DOM).

## Next activity

**Session closed 2026-09-13 — nothing in-repo pending.** All 3 GEO/AEO audit findings resolved and
verified live: HSTS header, static Organization/WebSite JSON-LD, default OG in raw HTML. Per-page
schema/OG (the other 27 routes) stays deferred — needs SSG/prerendering, its own brainstorm, see
`BACKLOG.md` "GEO/AEO audit" section.

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
