# NEXT

**Session-resume state only.** Not a backlog — see `BACKLOG.md` for that, and read it only when
asked "revisemos qué falta". `DEPLOY.md` is the deploy procedure — this file just tracks where we
are in it.

## State

HEAD at `42de864` + 1 uncommitted docs cycle (this cycle: added `DEPLOY.md` Part 2 item 7 —
create `info@dermamskinhealth.com` mailbox for contact-info consistency). Not yet pushed.

## Next activity

User said "vamos paso a paso" on the Hostinger deploy — working through `DEPLOY.md` Part 2
items in order. Item 7 (mailbox creation) just added; items 1-4 (`.htaccess`, `robots.txt`,
sitemap/llms.txt check, INTAKE.md fix) and items 5-6 (post-deploy `curl -I` + `public_html`
backup) still pending, each needs its own explicit "go" per file per DEPLOY.md's protected-file
rule.

## How to resume

Continue Part 2 item-by-item with the user, one explicit approval per protected file. No open
external-audit findings remain (all 27 closed).

## Context by area — grep, not full-read

`PROGRESS.md` = cycle log · `DECISIONS.md` = the why (grep, never full) · `BACKLOG.md` = open
work outside this session · `DEPLOY.md` = the deploy procedure itself
