# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — Sharing-metadata sweep: apple-touch-icon, theme-color, og:site_name (cont. 76, code)

- Follow-up to the favicon/OG-image fixes — audited other "invisible until shared/installed" details: `apple-touch-icon`, `theme-color`, `og:site_name`, `twitter:site`, web app manifest.
- Generated `public/assets/images/global/apple-touch-icon.png` (180×180 PNG, rasterized via `sharp` from `logo_dermam_nav.svg`, `#141313` brand-dark background) and linked it plus `<meta name="theme-color" content="#141313">` in `index.html`.
- Added `<meta property="og:site_name" content="Derma.M" />` to all 13 files carrying an `og:url` tag (8 top-level pages, 3 landing pages, `CategorySEO.jsx`, `TreatmentSEO.jsx`).
- Skipped `twitter:site` — no active X/Twitter account (checked `organizationSchema.js` `sameAs`, only Instagram/TikTok/Facebook/Yelp/Maps listed). Skipped a web app manifest — out of scope for a non-PWA marketing site, would only matter alongside a full "Add to Home Screen" treatment.
- `logo_dermam_nav.svg` shows as modified in this cycle's diff — the user replaced that source file directly (mtime confirms, not an agent edit) right before asking to use it as the icon source.
- Verified: `apple-touch-icon.png` serves 200 OK on the dev server. `test:visual` not gated — meta/head-only change, no visible layout/CSS.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
