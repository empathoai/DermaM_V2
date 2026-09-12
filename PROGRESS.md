# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — Full-site sanity check (Part 1) + verified DEPLOY.md Part 2 items 1-4 already applied (docs only)

- Clean build (`rm -rf node_modules dist && npm ci && npm run build`) — no errors. Served `dist/` on :3003 and browser-checked all 43 routes (core, 6 hubs, ~22 treatments, 3 landings, 7 legal + aliases + redirect): all 200, no 404 assets, console clean.
- User flagged `/capilar/carboxiterapia-facial` as broken — confirmed it was my own test-URL error (that slug lives under `/faciales/`, not `/capilar/`); the wildcard `:treatment` route correctly showed a "Tratamiento no encontrado" fallback rather than erroring, so no site bug.
- Found: `/corporales/maderoterapia-corporal` fires ~70 duplicate requests for `whatis.webp` (likely a re-render loop) — flagged, not yet fixed; not a deploy blocker.
- Verified `DEPLOY.md` Part 2 items 1-4 against their cited specs (not just re-reading the file, per the rule added 2026-09-12 morning): `.htaccess` rule order + `notice-of-privacy-practices` redirect, `robots.txt` legacy lines removed, `/nosotros/nancy-nieto` present in sitemap/robots/llms.txt, `INTAKE.md:56` already says Hostinger not Vercel — all 4 already applied in a prior session, checklist was just stale. No protected files edited (no-op on `.htaccess`/`robots.txt`).
- Did not run `npm run test:visual` (Playwright) this cycle — substituted with direct browser verification of the production build per user request.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
