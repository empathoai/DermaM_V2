# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — Fix: infinite request loop on `/corporales/maderoterapia-corporal` (`whatis.webp` 404 loop)

- Root cause: `treatmentPages.js:1432` builds `whatIs.image` for every treatment as `${folder}/whatis.jpg`, but the `maderoterapia-corporal` asset folder never had a `whatis.jpg/webp` (only `tratamiento-maderoterapia-corporal.*` and `cta.*`) — confirmed against the 3-asset convention (`hero`/`whatis`/`cta`) used by all other 24 treatments (checked `hidrofacial` as reference). The SPA fallback rule in both `vite.config.js` (dev) and `.htaccess:112-114` (prod) returns `index.html` with `200 OK` for any missing static asset instead of a real 404 — the `<picture>`/`<img>` can't decode that HTML as an image, and the decode failure retriggered in a loop (500+ near-simultaneous requests captured via the browser's network log).
- Fix: (1) added `whatis.jpg/webp` to that folder (copy of the existing hero image, following the site convention); (2) added a `dataset.fallbackStep` guard in the `onError` handler of [TreatmentDetailPage.jsx:151-168](src/components/templates/TreatmentDetailPage/TreatmentDetailPage.jsx:151) so any future missing-asset case caps at 2 fallback attempts (hero → global default) instead of looping indefinitely.
- Verified in the Browser pane (not the Playwright CLI, per user direction): fresh tab, desktop and mobile (375px) — single `200 OK` request, image renders in "EL PROTOCOLO", clean console, no loop. Full `test:visual` suite was not run (JS-only `onError` logic change, no CSS/class touched); flagged to the user, no objection.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
