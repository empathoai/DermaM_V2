# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — Feature: footer build version indicator (`V1.0.0`)

- Spec (`docs/superpowers/specs/2026-09-12-footer-build-version-design.md`) and plan (`docs/superpowers/plans/2026-09-12-footer-build-version.md`) went through brainstorming/writing-plans before implementation, per user request to be able to visually confirm a Hostinger deploy matches a specific version of the site.
- First implementation used a build-time git short hash + build date (`vite.config.js` `define`), rendered in the footer bottom bar. User rejected the look after seeing it live ("no es un SaaS") and asked for a plain `V1.x.x` semver instead.
- Pivoted: `package.json` `version` bumped `0.0.0` → `1.0.0` (first real production release, tracks the live Hostinger deploy). `vite.config.js` reads it at build time and exposes `__APP_VERSION__` via Vite's `define`; `Footer.jsx` renders `V{__APP_VERSION__}` as a 4th item in the existing bottom bar, same text style as the copyright line.
- Verified in dev (`__APP_VERSION__` matches `package.json`) and against a real `npm run build` + `vite preview` build, desktop + mobile (375px) — clean, no layout shift. Full `test:visual` suite run twice (once per implementation attempt): 22/22 passed both times, no footer content in any snapshot baseline so no re-baseline needed.
- **This number does not bump itself** — it must be bumped by hand in `package.json` at the close of any cycle with a user-visible or otherwise significant change. See `MEMORY.md`.
- Commits: `bb9495f` (superseded git-hash approach), `653930b` (final semver version).

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
