# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — Install Meta Pixel site-wide (cont. 69, M)

- Installed the client's existing Meta Pixel (`3001886450080985`, previously only live on Square's booking page, 719 events/28d there) site-wide: base snippet in `index.html`, `PageView` on every SPA route change (new `MetaPixelPageView.jsx`, mirrors `ScrollToTop.jsx`), and a `Contact` event on all 7 WhatsApp CTAs (`FloatingWhatsApp`, `PageHero`, `TreatmentHero`, both `FinalCTA`s, `Navbar`, `Footer`).
- Found and fixed a real Privacy Policy contradiction: §7 claimed no tool was used for "remarketing" — false the moment the Pixel goes live. Rewrote §7 (ES+EN) to disclose the Pixel honestly and dropped a stale promise to build a consent mechanism "before activation" (superseded by the same non-mandatory reasoning as the 2026-09-08 GA4 cookie-consent decision). Bumped `lastUpdated` to 2026-09-12.
- Out of scope, by design: Conversions API, closing the loop with Square bookings (a separate `Square Payments Derma Paids` CAPI dataset exists in the client's BM, unconfigured — future project), cookie-consent banner, Click-to-WhatsApp native ads.
- Post-deploy user action still pending: add the production domain to the pixel's Traffic permissions allow list in Events Manager, verify with Meta Pixel Helper on production.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
