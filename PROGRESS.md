# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — Added `docs/PROJECT_RETROSPECTIVE.md` (reusable knowledge, not project state)

- Ran `/llm-council` on whether `TECHNICAL_SEO_GEO_AUDIT_2026.md` covers all validations a new site/redesign needs — verdict: it's correctly scoped to technical SEO, but off-page/authority and cross-doc references are missing project-wide, not just in that file.
- Distilled the council verdict + a full-project skill-usage grep (not just this session) into `docs/PROJECT_RETROSPECTIVE.md`: the 9-layer framework for any new site, the source-of-truth hierarchy for SEO/AEO/GEO claims, 2 method lessons from real incidents this project (cache-header false positive, vendor-AI corroboration ≠ evidence), and a tooling/skill reuse verdict. Meant to outlive this project — not read at session start, only when starting a new one.

## 2026-09-12 — PageSpeed API tooling; cache-lifetime flag investigated, false-positive corrected

- Added `npm run pagespeed [mobile|desktop] [url]` (`scripts/pagespeed.sh`) — calls Google's PageSpeed Insights v5 API directly against the live published site (not local, unlike `npm run lighthouse`), printing score/FCP/LCP/TBT/CLS plus the cache-lifetime audit's flagged items. Key goes in `.env.pagespeed` (gitignored, `.env.pagespeed.example` committed as template).
- **Investigated via `superpowers:systematic-debugging`, then self-corrected** why `pagespeed.web.dev` kept flagging `hero.mp4` at `cacheLifetimeMs: 0`: initial conclusion (Hostinger's `hcdn` CDN drops `Cache-Control` on video cache HITs) turned out to be a false positive — a repeated identical `x-hcdn-request-id` across "fresh" browser `fetch()` calls proved the browser was replaying its own stale cached response, not hitting the network. Escalated to Hostinger's support AI (which corroborated the false premise) before catching this. Forcing genuine network round-trips (`{cache: 'reload'}`, separate `curl`) showed the CDN preserves the header correctly. Re-ran `npm run pagespeed mobile`: `hero.mp4` no longer appears in the cache-lifetime audit at all — mobile score 69→70. Full correction + lesson in `DECISIONS.md`/`BACKLOG.md`. The original `.htaccess` fix (`6d6927c`) was correct; no further action needed on this item.

## 2026-09-12 — `.htaccess` cache-control hardening for static assets

- **Why:** `pagespeed.web.dev` flagged 3.2 MB of potential savings from missing/weak cache headers — the biggest remaining mobile lever per `NEXT.md`.
- `public/.htaccess` `mod_expires` block: added `video/mp4`, `video/webm`, `font/woff`, `font/woff2`, `font/ttf`, `image/x-icon` (previously uncached — `hero.mp4` had no cache header at all); bumped `text/css`/`application/javascript` from 1 month to 1 year (Vite content-hashes these filenames, so they're safe to cache long); added `text/javascript` alongside `application/javascript`.
- Added a `Cache-Control: public, max-age=31536000, immutable` header scoped to `/assets/` via `mod_setenvif` + `Header set ... env=`, since `<FilesMatch>` matches basenames only and can't filter by directory path.
- Config-only change (no runtime/render impact) — no `test:visual` run, per DoD gate; verification is the next live PageSpeed re-check post-deploy. Commit `6d6927c`.
- **Deployed (`npm run deploy`) and re-checked live 2026-09-12.** Live header checks confirm `hero.jpg`/`hero.mp4` now serve `Cache-Control: public, max-age=31536000, immutable`; `index-*.js` stays capped at 7 days by Hostinger's `hcdn` CDN layer regardless of origin headers (recorded in `BACKLOG.md`). `pagespeed.web.dev` mobile re-check: 69 (unchanged), cache-lifetime audit still flags `hero.mp4` at 0ms despite the correct live header — likely CDN edge-propagation lag at crawl time, not a real regression; needs a later re-check (also in `BACKLOG.md`).

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
