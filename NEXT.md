# NEXT

**Session-resume state only.** Not a backlog — see `BACKLOG.md` for that, and read it only when
asked "revisemos qué falta". `DEPLOY.md` is the deploy procedure — this file just tracks where we
are in it.

## State

HEAD at `2b2d249` + this session's uncommitted work (route code-splitting + deploy automation,
V1.0.4), on top of `5dcb226` (GSC verify/sitemap + `page_id` redirect fix, V1.0.3). Working tree:
pending commit for `src/routes.jsx`, `src/App.jsx`, `src/components/shared/RouteLoader/`,
`package.json` (version + `deploy` script), `.gitignore`, `.env.deploy.example`, `scripts/deploy.sh`.

## Next activity

**Route code-splitting shipped, V1.0.4 live (2026-09-12).** Fixed a 67 mobile PageSpeed score
(807 KB single bundle) via `React.lazy()` per route + `Suspense`/`RouteLoader` — entry bundle now
262 KB. Full spec/plan at `docs/superpowers/specs/2026-09-12-route-code-splitting-design.md` /
`docs/superpowers/plans/2026-09-12-route-code-splitting.md`. `test:visual` 34/34, mobile 375px
clean, manual route sweep clean.

**Deploy automation live.** User enabled Hostinger SSH; `npm run deploy` (`scripts/deploy.sh`)
now builds + pushes `dist/` over SSH in ~30s — no more manual zip/File-Manager step. Used twice
this session already (once forgetting the version bump, then again with it) — both confirmed live.

**Not yet done:** PageSpeed re-check against the original 67 baseline (user hasn't re-run it since
the deploy) — technical fix is verified, but the actual score delta is still unconfirmed.

## How to resume

No proactive next step — wait for the user. If they want the PageSpeed number confirmed, re-run
the same Hostinger checker used for the 67 baseline against the now-live V1.0.4.

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `BACKLOG.md` = open
work outside this session · `DEPLOY.md` = the deploy procedure itself
