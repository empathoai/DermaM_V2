# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — Feature: GA4 `contact_whatsapp` event alongside Meta Pixel (V1.0.2)

- User asked how WhatsApp clicks were tracked; found Meta Pixel `Contact` fired on all 8 WhatsApp CTAs but GA4 had no equivalent event. Added `src/utils/ga4.js` (`trackGA4Contact`) and `src/utils/whatsappTracking.js` (`trackWhatsAppClick`, combines Meta + GA4); all 8 CTAs now call the combined function instead of `trackMetaContact` directly.
- Verified live in the Browser pane: click fires `dataLayer` push `["event","contact_whatsapp",{"method":"whatsapp"}]`. Full `test:visual`: 17/17 passed, no re-baseline needed (JS-only change).
- Also clarified in this cycle (no code): Meta CAPI "Connection pending" for pixel `3001886450080985` is inert and not a deploy blocker — enabling it needs a backend/serverless piece this static site doesn't have.
- `package.json` bumped `1.0.1` → `1.0.2`.
- Commit: `b78223b`.
- **Deployed to Hostinger 2026-09-12** (this + the DERMA.M casing + maderoterapia fixes): `DEPLOY.md` Part 1 fully green on the prod build (34/34 `test:visual`), zip built with Python `zipfile` (forward-slash paths), uploaded/extracted to `public_html`. Verified live on `dermamskinhealth.com`: title, `V1.0.2` footer, clean redirects, GA4 `contact_whatsapp` firing.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
