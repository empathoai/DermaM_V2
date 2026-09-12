# NEXT

**Session-resume state only.** Not a backlog — see `BACKLOG.md` for that, and read it only when
asked "revisemos qué falta". `DEPLOY.md` is the deploy procedure — this file just tracks where we
are in it.

## State

HEAD at `be37273` (docs close for GA4 event cycle), on top of `b78223b` (GA4 `contact_whatsapp`
event, V1.0.2), `1ddc9d7` (DERMA.M casing normalization, V1.0.1), and `653930b` (footer version
indicator). Working tree clean.

## Next activity

**Deployed to Hostinger and verified live (2026-09-12).** `dermam-dist-v1.0.2.zip` built from a
clean `npm run build` (Part 1 of `DEPLOY.md` fully green: 34/34 `test:visual` on the prod build,
all routes 200, redirects clean), uploaded to `public_html`, extracted. Confirmed on
`dermamskinhealth.com`: `<title>` = `DERMA.M`, footer = `V1.0.2`, console clean, all 3 redirect
types single-hop 301, GA4 `contact_whatsapp` event fires on a real WhatsApp click (dataLayer
confirmed).

No proactive next step — wait for the user. Still open, not urgent: **GSC domain verification +
sitemap.xml submission**.

Also still open, not urgent: **GSC domain verification + `sitemap.xml` submission**.

## How to resume

No proactive next step — wait for the user. If they ask "qué sigue", offer the Hostinger
re-deploy (a fresh `dist/`+zip is needed, the one from earlier in this session is stale — it
predates the footer version feature) or GSC setup.

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `BACKLOG.md` = open
work outside this session · `DEPLOY.md` = the deploy procedure itself
