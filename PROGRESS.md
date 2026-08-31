# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-31 — Testimonial card design unified sitewide (cont. 42, code)

- **What:** replicated the `AboutPage` testimonial card design onto the two other renderers. `Testimonials.jsx` + `.module.css` (Home) and shared `TestimonialsSection.jsx` + `.module.css` (hubs via `CategoryPage`, landings via `LandingPage`, both `variant="offWhite"`). New layout matches AboutPage exactly: quote-mark inline SVG top-left, left-aligned text, 48px left divider (`margin: 24px 0`), 5-star row **below** the divider, `cite` name. Removed: centered layout (`text-align/align-items: center`), the faint 130px Playfair `"` `::before` background glyph (+ its `.dark` override), `lucide-react` `Star` import (inline polygon SVG instead, like AboutPage). Added `.quoteIcon` / `.starsWrapper` / `.star` rules mirroring AboutPage; kept `.dark` variant overrides for `TestimonialsSection`.
- **Why:** user request — AboutPage card is the desired look; the other two were visually divergent (stars on top, centered, giant bg quote). Stars **retained on all renderers** per explicit user instruction (real Google reviews; no `aggregateRating` schema added). Off the queued Task 27 — user redirected mid-brainstorm; Task 27 part (a) AboutPage padding→`clamp()` still pending.
- **Verified:** browser `:3000` — Home + `/faciales` hub, desktop + 375px mobile: both now render identical to `/nosotros`. No console errors. `test:visual` full suite (shared component gate): **21 passed, 1 failed** = pre-existing `nosotros-viewport` desktop-chrome (`about/hero.jpg` placeholder, documented, unrelated — AboutPage untouched, snapshot is hero-viewport only). No snapshot frames a testimonials section → no baselines updated. No copy touched → `MEDICAL_COMPLIANCE` n/a.
- Commit `b121009`, pushed.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
