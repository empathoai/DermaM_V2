# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — GSC verification + sitemap + `?page_id=` redirect fix

- GSC: discovered an already-verified URL-prefix property `https://dermamskinhealth.com/` (verified since 2026-08-28) made the new Domain-property TXT verification attempt redundant; deleted the unverified Domain property, kept the working one. Submitted `sitemap.xml`: status Success, 44 pages discovered.
- Cleaned up the now-orphaned `google-site-verification` TXT record from Hostinger DNS (confirmed SPF record untouched).
- Reviewed GSC "Page indexing" report (14 not-indexed pages, 3 reasons): confirmed the 404s and most "crawled — not indexed" URLs (`radiofrecuencia-3`, `/category/salud/`, `/portfolio-types/.../feed/`) are already covered by existing `.htaccess` 301s, just crawled before that file was deployed. Found a real gap: WordPress `?page_id=NNN` query strings (7+ of the 11) aren't matched by any path-based `RewriteRule` and were silently falling through to the SPA fallback (200 homepage under the old URL) instead of a clean 301 — see `DECISIONS.md` 2026-09-12.
- Fix: added a `RewriteCond %{QUERY_STRING} (^|&)page_id=` + `RewriteRule ^(.*)$ /? [R=301,L]` block to `public/.htaccess`, placed after the existing generic WordPress pattern rules.
- No `test:visual` run — `.htaccess` is server-side routing, outside the DoD gate (not CSS/component/layout). Not yet deployed to Hostinger — live site still runs the previous `.htaccess` until next deploy.
- Commit: `5dcb226`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
