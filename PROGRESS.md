# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — Fix OG image dimensions (1200×630 primary + 200×200 fallback) (cont. 75, code)

- `og-default.jpg` (1920×1080, 16:9) didn't match the universal OG standard (1200×630, 1.91:1) — social crawlers (Facebook, WhatsApp, iMessage, LinkedIn, Slack, Discord) would crop it on share. User supplied two correctly-sized source images.
- Generated `og-default-1200x630.webp` (37.8KB) and `og-default-200x200.webp` (5.7KB) via `sharp` for future in-page `<picture>` use; kept `.jpg` as the format used in all `og:image`/`twitter:image` meta tags (crawler compatibility — see `DECISIONS.md` 2026-09-12).
- Repointed `og:image`/`twitter:image` in all 8 pages with their own Helmet block (`Home`, `Contacto`, `NancyNieto`, `Nosotros`, `LegalResources`, `PrivacyPolicy`, `TermsOfUse`, `BookingPolicy`) plus `CategorySEO.jsx`, `TreatmentSEO.jsx` (fallback path only — `data.image` still takes priority), and `organizationSchema.js` (`image` field) to `og-default-1200x630.jpg`, added `og:image:width`/`og:image:height`, and added `og-default-200x200.jpg` as a secondary `og:image` fallback per OG spec (multiple `og:image` tags allowed, first is primary).
- Left `HeroMedia.jsx` and `TreatmentDetailPage.jsx` untouched — they use `og-default.jpg` (1920×1080) as a full-bleed hero-image error fallback, a different purpose from the social-share meta tags.
- Verified: new image files serve 200 OK at correct byte sizes on the dev server; source edits confirmed by direct read. `test:visual` not gated — meta-tag-only change, no visible layout/CSS.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
