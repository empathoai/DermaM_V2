# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — Route-level code splitting (V1.0.4) + automated SSH deploy

- **Why:** Hostinger's own PageSpeed check scored `dermamskinhealth.com` mobile at 67 (LCP 5.8s, FCP 4.4s), caused by a single 807 KB JS bundle serving every route regardless of the page visited.
- Brainstormed + spec'd (`docs/superpowers/specs/2026-09-12-route-code-splitting-design.md`) + planned (`docs/superpowers/plans/2026-09-12-route-code-splitting.md`), executed inline per plan: `src/routes.jsx` converted to `React.lazy()` per route, new `RouteLoader` fallback component, `App.jsx` wraps `AppRoutes` in `Suspense`.
- Result: entry bundle 807 KB → 262 KB (84.7 KB gzip), dozens of per-route/per-component chunks now split by Vite automatically. `npm run test:visual` 34/34 passed (no regression), mobile 375px spot-check clean (no horizontal scroll), manual route sweep across hub/treatment/landing/legal pages clean.
- **Deploy automation set up:** user enabled Hostinger SSH access; generated an ed25519 keypair (`~/.ssh/dermam_hostinger_deploy`, private key local-only, public key added to Hostinger), wrote `scripts/deploy.sh` (`npm run deploy`) — builds + tars `dist/` + streams over SSH, remote `assets/` wiped first since Vite content-hashes filenames (old hashes would otherwise never get cleaned up). Config in `.env.deploy` (gitignored); `.env.deploy.example` committed as the template.
- `package.json` bumped `1.0.3` → `1.0.4`. **Deployed live 2026-09-12** via `npm run deploy` (first real use of the new automation) — verified: footer `V1.0.4`, split chunks loading individually in prod, console clean.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
