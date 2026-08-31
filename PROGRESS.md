# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-31 — Task 23 (SEO-10) llms.txt legal links + FloatingWhatsApp hit-test fix (cont. 45, code)

- **What:** (1) `public/llms.txt` — new `## Legal` section (between `## About` and `## Important Disclaimers`) with 6 canonical URLs matching `sitemap.xml` `<loc>`: `/politica-de-privacidad`, `/terminos-de-uso`, `/treatment-disclaimer`, `/booking-cancellation-refund-policy`, `/accessibility`, `/legal`. No cookie-policy route exists — not invented; retired `/notice-of-privacy-practices` excluded. (2) `FloatingWhatsApp.module.css` — `.hidden` gained `visibility: hidden` + `visibility` added to `.container` transition.
- **Why:** (1) audit SEO-10, last actionable item of the cont. 21 queue. AI crawlers get the canonical policy paths instead of guessing / hitting the retired 301. (2) pre-existing bug (introduced `d357419`) blocking validation: `.hidden` only set `opacity:0` + container `pointer-events:none`, but child `<a>.floatButton` declares `pointer-events:auto` which overrides an ancestor's `none` — the invisible FAB kept capturing clicks over the footer, so tapping a legal link opened `wa.me`. `visibility:hidden` propagates to children (none set `visibility:visible`), removing them from hit-testing and tab order. Diagnosed with `superpowers:systematic-debugging` (`elementFromPoint` over the footer returned the WhatsApp `<span>`).
- **Verified:** browser `:3000` on `/booking-cancellation-refund-policy` — footer in view: `elementFromPoint` at FAB center now returns a `DIV` inside `<footer>`; hit-test on "Política de privacidad" returns that link. Mid-page: FAB `visible`, `opacity 1`, reachable — no regression. `llms.txt` served on `:3000`, 6 URLs == `sitemap.xml`; `/booking-cancellation-refund-policy` route resolves. `test:visual` full suite (shared-component CSS gate): **31 passed, 3 failed = all pre-existing/documented** (`faq-consistency` `/faciales/hidrofacial` ×2 — cont. 40; `visual` `Nosotros Page - Viewport` desktop-chrome — `about/hero.jpg` placeholder). No new diffs, no footer/landing/home regression. No baselines updated. Temp `:3003` server started + stopped by PID. `MEDICAL_COMPLIANCE`: no copy touched. SEO/GEO/AEO: (1) low-positive AEO (canonical legal paths for citation), nil SEO/GEO; (2) none — interaction/a11y.
- Commits `4abc39b` (llms.txt) · `86a5e02` (floating-whatsapp). **Task 23 closed — cont. 21 queue empty (Task 2 stays BLOCKED → Hostinger deploy).**

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
