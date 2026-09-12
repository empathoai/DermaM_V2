# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — Full Hostinger redeploy (V1.0.3) + Meta Pixel event verification

- Meta Pixel (`3001886450080985`) verified live via Meta Events Manager: `PageView` (1.2K events) and `Contact` (4 events) both status Active, confirming the WhatsApp CTA tracking from the earlier GA4/Meta cycle works end-to-end in production.
- Ran full `DEPLOY.md` Part 1: clean `npm ci` + `npm run build` (no errors), `playwright test` both projects — **34/34 passed** (better than the documented 33/1 baseline; the `about/hero.jpg` placeholder diff appears resolved).
- Built `dist/` zip, handed to user for manual upload via Hostinger File Manager (no SSH/FTP automation set up yet — user checking hPanel for SSH availability as a follow-up).
- **Deployed 2026-09-12** — user uploaded and extracted the zip over `public_html`. Verified live: footer now `V1.0.3`, new bundle hash (`index-BRgh3Aur.js`) loaded, `/`, `/contacto`, `/faciales/hidrofacial` all render clean (console clear, no 404s), SPA routing intact on deep routes.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
