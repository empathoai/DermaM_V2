# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — Route-level code splitting (V1.0.4) + automated SSH deploy

- **Why:** Hostinger's own PageSpeed check scored `dermamskinhealth.com` mobile at 67 (LCP 5.8s, FCP 4.4s), caused by a single 807 KB JS bundle serving every route regardless of the page visited.
- Brainstormed + spec'd (`docs/superpowers/specs/2026-09-12-route-code-splitting-design.md`) + planned (`docs/superpowers/plans/2026-09-12-route-code-splitting.md`), executed inline per plan: `src/routes.jsx` converted to `React.lazy()` per route, new `RouteLoader` fallback component, `App.jsx` wraps `AppRoutes` in `Suspense`.
- Result: entry bundle 807 KB → 262 KB (84.7 KB gzip), dozens of per-route/per-component chunks now split by Vite automatically. `npm run test:visual` 34/34 passed (no regression), mobile 375px spot-check clean (no horizontal scroll), manual route sweep across hub/treatment/landing/legal pages clean.
- **Deploy automation set up:** user enabled Hostinger SSH access; generated an ed25519 keypair (`~/.ssh/dermam_hostinger_deploy`, private key local-only, public key added to Hostinger), wrote `scripts/deploy.sh` (`npm run deploy`) — builds + tars `dist/` + streams over SSH, remote `assets/` wiped first since Vite content-hashes filenames (old hashes would otherwise never get cleaned up). Config in `.env.deploy` (gitignored); `.env.deploy.example` committed as the template.
- `package.json` bumped `1.0.3` → `1.0.4`. **Deployed live 2026-09-12** via `npm run deploy` (first real use of the new automation) — verified: footer `V1.0.4`, split chunks loading individually in prod, console clean.
- **Regression found + fixed same day:** the `lazy()`/`Suspense` change above broke `FloatingWhatsApp`'s footer-hide logic — its effect queried `document.querySelector('footer')` once per route change, but with lazy-loaded pages the footer now mounts a tick later than before, so the query ran too early, found nothing, and never retried (FAB stayed visible over the footer forever). Root-caused via `superpowers:systematic-debugging` (A/B reproduction against the pre-lazy commit confirmed it). Fix: `FloatingWhatsApp.jsx` now falls back to a `MutationObserver` waiting for the footer to appear before attaching the `IntersectionObserver`. Verified: FAB correctly hides near footer on both initial load and client-side navigation; `test:visual` 34/34 still passing.
- **PageSpeed re-check showed no improvement (67→67) — second regression found + fixed:** lazy-loading Home created a network waterfall (entry → Home chunk → HeroMedia chunk → hero.jpg/mp4) that delayed LCP discovery as much as the original monolith. Ran an LLM-council review (5 advisors + peer review + chairman) before fixing — verdict: revert Home to eager import, keep other 26 routes lazy, but first confirm `HeroMedia.jsx` has no lazy import of its own (confirmed clean — the separate chunk was Rollup's automatic shared-chunk extraction, not a deliberate lazy-load). Applied the one-line revert in `routes.jsx`. Verified via `vite preview`: request order now `index.js` → `hero.jpg`/`hero.mp4` directly, no intermediate chunk. `test:visual` 34/34, mobile 375px clean.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
