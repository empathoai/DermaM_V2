# NEXT

**Session-resume state only.** Not a backlog — see `BACKLOG.md` for that, and read it only when
asked "revisemos qué falta". `DEPLOY.md` is the deploy procedure — this file just tracks where we
are in it.

## State

HEAD at `5dcb226` (GSC verify/sitemap + `page_id` redirect fix, V1.0.3), on top of `be37273` (docs
close for GA4 event cycle), `b78223b` (GA4 `contact_whatsapp` event, V1.0.2). Working tree clean
(pending: doc-fixup commit for the hash above).

## Next activity

**GSC done (2026-09-12).** Turned out a URL-prefix property `https://dermamskinhealth.com/` already
existed and was verified since 2026-08-28 — the new Domain-property TXT attempt was redundant and
deleted; `sitemap.xml` submitted (Success, 44 pages). TXT record removed from Hostinger DNS (SPF
confirmed intact).

**`.htaccess` fix, deployed (2026-09-12).** Added a `?page_id=` catch-all 301 (see `DECISIONS.md`
2026-09-12) — fixes silent duplicate-content on legacy WordPress query-string URLs. `package.json`
bumped `1.0.2` → `1.0.3`. User uploaded the single file directly via Hostinger File Manager (no
full rebuild needed — only `.htaccess` changed, no JS/CSS). Verified live:
`dermamskinhealth.com/?page_id=343` and `?page_id=257` both 301 to the bare homepage. **Footer
still shows V1.0.2** — the version bump only takes effect on the next full `npm run build` +
zip deploy, not from a lone-file upload.

## How to resume

No proactive next step — wait for the user. If they ask "qué sigue", the only open item is a full
Hostinger re-deploy (fresh `dist/`+zip) so the footer catches up to `V1.0.3`.

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `BACKLOG.md` = open
work outside this session · `DEPLOY.md` = the deploy procedure itself
