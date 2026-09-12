# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — Add Home rating badge (cont. 70, M)

- Added a static "4.9 ★ en Google" trust badge to the Home hero (`RatingBadge` shared component), linking out to the real Google Business Profile review panel — pure CRO, no schema attached.
- Corrected course mid-design: originally planned to also re-declare `aggregateRating` in `#organization` schema, but confirmed against Google's own guideline that self-served `LocalBusiness`/`Organization` ratings are categorically ineligible for the star rich snippet — dropped that part entirely (`DECISIONS.md` 2026-09-12). Also considered and declined a third-party widget (Elfsight/Trustindex/SociableKit) for the same reason plus added script/account dependency.
- Curated testimonials (cont. 65) untouched, as scoped. `test:visual`: 34 passed, 0 failed (Home Hero + Founder/Featured-Services mobile baselines updated for the badge).

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
