# NEXT

**Session-resume state only.** Not a backlog — see `BACKLOG.md` for that, and read it only when
asked "revisemos qué falta". `DEPLOY.md` is the deploy procedure — this file just tracks where we
are in it.

## State

HEAD will be at this cycle's doc-fixup commit, on top of `653930b` (footer version indicator,
V1.0.0) and `de8c84d` (maderoterapia-corporal request-loop fix). Working tree clean, not yet
pushed.

## Next activity

**Both changes are done and verified locally; production (Hostinger) has NOT been re-deployed
yet** — it's still running the build from before this session (site-live cycle only). User needs
to: `npm run build`, zip `dist/` (Python zipfile, not PowerShell `Compress-Archive` — see
`DECISIONS.md` 2026-09-12 site-live entry), upload to Hostinger `public_html`. After that deploy,
confirm the footer shows `V1.0.0` on the live site as the verification signal this whole feature
was built for.

Also still open, not urgent: **GSC domain verification + `sitemap.xml` submission**.

## How to resume

No proactive next step — wait for the user. If they ask "qué sigue", offer the Hostinger
re-deploy (a fresh `dist/`+zip is needed, the one from earlier in this session is stale — it
predates the footer version feature) or GSC setup.

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `BACKLOG.md` = open
work outside this session · `DEPLOY.md` = the deploy procedure itself
