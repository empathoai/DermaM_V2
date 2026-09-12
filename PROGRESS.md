# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — LIVE: dermamskinhealth.com deployed to Hostinger, DNS cut over, SSL active

- **The site is live in production.** Uploaded `dist/` (zipped) to Hostinger `public_html` via File Manager; first zip attempt (PowerShell `Compress-Archive`) wrote backslash-separated paths that broke extraction on the Linux server (files landed as literal filenames like `assets\images\...` instead of nested folders) — rebuilt with Python's `zipfile` module (forward-slash paths) and re-extracted clean.
- Moved DNS from BanaHosting (old WordPress host) to Hostinger by changing nameservers at the registrar (GoDaddy) to `atlas.dns-parking.com` / `hyperion.dns-parking.com`. Propagation was fast (~minutes, confirmed via `nslookup`). SSL cert ("Lifetime SSL") took ~1 hour to finish installing after DNS resolved — polled every 15 min via scheduled wakeups until `https://dermamskinhealth.com` loaded clean.
- Ran DEPLOY.md Part 2 item 5 (post-deploy verification) against the live domain: all 12 legacy-WordPress `301` redirects are single-hop to their final URL, `www`→non-www and `http`→`https` both correct, `/` and `/contacto` load 200 with clean console, GA4 (`G-9272VHFT03`) confirmed firing via `gtag`.
- Item 6 (backup of previous `public_html`) skipped — manual backups are locked behind a Hostinger plan upgrade; automated weekly backup is active (next run 2026-09-18), plus local `dist/` + git history as rollback source.
- Created `info@dermamskinhealth.com` mailbox in hPanel (item 7, contact-info consistency — no contact form exists on site).
- Left Hostinger's CDN, WebP/image auto-optimization, and TLS-1.3-only toggle at their recommended defaults (CDN auto-enabled and active; did not enable TLS-1.3-only, to avoid excluding older-device visitors).
- GSC domain verification + sitemap submission still open, not part of this checklist — do whenever convenient.

## 2026-09-12 — Full-site sanity check (Part 1) + verified DEPLOY.md Part 2 items 1-4 already applied (docs only)

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
