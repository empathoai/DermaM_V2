# Project Retrospective — reusable knowledge for the next site

> **Not project state.** This is distilled, durable knowledge meant to outlive DERMA.M — read it
> when starting a NEW site/audit/redesign, not when resuming work here. Project state lives in
> `NEXT.md`/`PROGRESS.md`/`DECISIONS.md`/`BACKLOG.md` as always.
> Written 2026-09-12, from an `/llm-council` run + a full-project skill-usage grep.

---

## 1. The layer framework — any new site, audit, or redesign

A single "SEO checklist" doc conflates categories that decay at different rates and need
different owners. Split by layer; give each its own doc; cross-reference, don't merge:

1. **Foundational/architecture** — stack choice (SSR/CSR/SSG, decided by indexation need, not
   preference), URL structure, content hierarchy (hub/spoke, pillar/cluster).
2. **Technical/crawlability** — robots.txt, sitemap, canonical, rendering (what a crawler sees
   with/without JS — decide at build time, don't patch later), Core Web Vitals (lab **and**
   field, not a single PageSpeed run).
3. **Structured data/on-page** — schema.org per page type, meta/OG, semantic heading hierarchy,
   real text content.
4. **Authority/off-page** — backlinks, citations (NAP for local business), third-party profiles
   (GBP, industry directories). **The layer every technical audit skips** because it isn't code —
   and the one that often outweighs everything else in a competitive local market.
5. **Content/search intent** — keyword-to-intent mapping, direct-answer structure (what
   "GEO/AEO" mostly means in practice: writing so an answer can be extracted).
6. **Regulatory/vertical** — the "can't say/claim this" list for the specific industry (health,
   finance, legal, gambling, alcohol). Defined **before** writing copy, not audited after.
   Accessibility (WCAG) belongs here too — increasingly a legal requirement, not a nicety.
7. **Measurement/verification** — analytics + Search Console/Bing WT from day 1. Explicit step:
   **does what shipped match what was audited?** Most real SEO bugs live in that gap, not in
   the design.
8. **Competitive** — benchmark 2-3 real competitors before building. Cheapest way to find what's
   table-stakes vs. differentiator, and what to skip building from scratch.
9. **Process governance** — one doc per layer above (not one doc for all of them), analysis
   separated from actionable backlog, and a record of what was rejected and why (stops
   re-litigating the same idea every cycle).

Three questions any new project should answer on day one — most refinement is downstream of these:
**can a crawler see the content? does authority exist outside the site backing what it claims?
is there a regulatory constraint on what can be said?**

## 2. Source-of-truth hierarchy for SEO/AEO/GEO decisions

Ranked by weight — use this to decide whether a claim is actionable or just noise:

1. **Primary, official docs** of the platform in question — Google Search Central, Bing
   Webmaster docs, web.dev/Chrome DevRel for CWV, schema.org + Google's structured-data docs,
   W3C WCAG, each AI provider's own crawler documentation (OpenAI/Anthropic/Perplexity/Google),
   the platform's own ranking-mechanics docs (GBP Help, a directory's "how our ranking works").
2. **Deep-research reports that corroborate a primary source** — real weight only when 2+
   independent sources converge on the same direction.
3. **Agency frameworks / academic papers anchored to a single study** (e.g. GEO/KDD-style
   citation-lift claims) — treat as **editorial hypothesis**, not ranking fact, unless a primary
   source independently confirms it. Apply as a content-quality improvement, never as a
   guaranteed ranking lever.
4. **Blogs, "best practices 2026" listicles, vendor support AI chat** — not a source of truth.
   A vendor's own support AI will corroborate a premise it's fed rather than independently verify
   it (see §3, lesson 2) — useful for "what options exist in this panel," useless for diagnosing
   real system behavior.

**Rule of thumb:** 3+ primary/independent sources agreeing = accionable lever. One source, or a
framework anchored to a single study = hypothesis, apply as UX/clarity polish only.

## 3. Method lessons (from real incidents this project, not theory)

1. **A false positive survives review unless you force a fresh network round-trip.** A cache-
   header investigation this project ran concluded (wrongly) that a CDN was stripping headers —
   traced hours later to the browser tab replaying its own stale cached response (proof: an
   identical trace/request-id across "fresh" fetches). Fix: when re-verifying any header/cache
   behavior from a browser, force a genuine round-trip (`{cache:'reload'}`, a cache-busting query
   param, or a separate `curl`) and check the response's own trace-id for repetition before
   concluding anything about server behavior.
2. **A vendor support AI corroborating your hypothesis is not independent evidence.** It reasons
   from the same description you feed it. Don't escalate to a human ticket on that corroboration
   alone — re-verify the underlying observation first.
3. **`systematic-debugging`'s Phase 1 (reproduce with fresh evidence before proposing a fix) is
   what catches both of the above.** It's the single highest-value process skill this project
   used, applied more than once to a real production bug, not just today.

## 4. Tooling/skill reuse verdict (grepped from this project's full history, not one session)

Frequency across the whole project (`DECISIONS.md` + archives): `add-media` 15×,
`superpowers:brainstorming` 12×, `seo-local` 11×, `superpowers:systematic-debugging` 9×,
`seo-checklist-65` 9×, `seo-audit` 9×, `assets-optimizer` 8×, `ai-seo` 6×, `schema` 5×,
`writing-for-agents`/`superpowers:executing-plans` 4× each, `site-architecture`/
`programmatic-seo`/`cro` 4× each, `impeccable`/`close-cycle`/`bencium-aeo` 3× each,
`superpowers:writing-plans`/`keyword-research`/`find-skills` 2× each, `graphify`/
`geo-aeo-playbook` 1× each.

**Reuse directly, next project of similar shape (marketing/booking site, heavy on images, local
SEO):**
- `add-media` + `assets-optimizer` — proven pair, solves image naming/format/dimensions once.
- `superpowers:brainstorming` before any copy/design change; `systematic-debugging` before any
  fix; `writing-plans`/`executing-plans` for multi-step work.
- `seo-checklist-65` → `seo-audit`+`schema` → `ai-seo` → `seo-local` — the declared sequence
  actually got executed at real volume, not just written down.
- `close-cycle` + `writing-for-agents` — session/doc infrastructure, cheap and load-bearing even
  at low invocation count.

**Reuse with a critical eye:**
- `impeccable` (3×) — only worth installing if the project has significant visual/brand work.
- `ai-seo` and `bencium-aeo` overlap conceptually with `seo-checklist-65`/`seo-audit` — check
  before installing both; one may subsume the other.

**Don't install by default:**
- `graphify` — 1 mention in the entire project history, never actually invoked. Dead weight
  installed "just in case."
- `geo-aeo-playbook` — 1 use, redundant with `ai-seo`/`bencium-aeo` already covering that ground.

## 5. When to reach for `/llm-council` vs. `systematic-debugging`

- **`systematic-debugging`**: a technical claim needs verifying, a bug needs a root cause, a fix
  is being proposed. Cheap, fast, single-threaded.
- **`/llm-council`**: a structural/architectural judgment call with genuine uncertainty and no
  single right answer — "is this document's scope correct," "which of these approaches." Costs
  5 parallel agents + 5 reviews + synthesis; reserve for decisions expensive to get wrong, not
  routine technical questions.
