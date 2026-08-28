---
name: geo-aeo-playbook
description: "Use when optimizing websites, landing pages, or technical documentation for AI search engines (ChatGPT Search, Perplexity, Claude, Gemini, Google AI Overviews), structuring content for AI citations using empirical GEO tactics (Cite Sources, Statistics Addition, Direct Answer 50-word blocks), configuring AI crawler access (robots.txt, llms.txt, Cloudflare AI rules), implementing deep schema markup (JSON-LD), or establishing entity authority in B2B SaaS, eCommerce, and Healthcare/Med Spas."
---

# GEO & AEO 2026: Generative Engine Optimization Playbook

## Overview

**Traditional SEO gets you ranked in blue links. GEO & AEO get you cited and recommended as the authoritative entity in AI-generated answers.**

AI engines (ChatGPT Search, Perplexity, Claude, Gemini, Google AI Overviews) utilize **Multi-Phase Retrieval (BM25 + Semantic Embeddings) + Reciprocal Rank Fusion (RRF)** to extract factual nuggets and synthesize answers. This playbook provides the 6 empirically validated tactics (backed by Princeton / Aggarwal et al. GEO research) and vertical blueprints to dominate AI search surfaces.

---

## When to Use

### Trigger Conditions
- Optimizing an existing website or article to win citations in ChatGPT, Perplexity, Claude, and Google AI Overviews.
- Designing landing pages or documentation for high-trust niches (Healthcare, Med Spas, B2B SaaS, eCommerce).
- Configuring site infrastructure for AI crawlers (`robots.txt`, `llms.txt`, HTTP content negotiation, Cloudflare AI rules).
- Implementing deep structured data (`JSON-LD` with `MedicalBusiness`, `Organization`, `Service`, `Product`, and `sameAs` entity links).
- Converting unstructured marketing copy into AI-citable factual nuggets.

### When NOT to Use
- Traditional technical crawling fixes unrelated to AI (e.g. basic XML sitemaps, 301 redirects) $\rightarrow$ Use `seo-audit`.
- Local map pack optimization without generative search scope $\rightarrow$ Use `seo-local`.
- Pure programmatic page generation templates at scale $\rightarrow$ Use `programmatic-seo`.

---

## Quick Reference: The 6 Empirical GEO Tactics & Lift Matrix

Based on empirical studies (Princeton GEO Study, Aggarwal et al. 2023, xSeek, OptimizeGEO):

| Tactic | Focus | Citation Lift % | Key Action |
| :--- | :--- | :--- | :--- |
| **1. Cite Sources & Quotations** | Credibility & Grounding | **+30% to +40%** | Add explicit peer-reviewed citations, blockquotes from recognized experts, and domain attribution. |
| **2. Statistics Addition** | Quantitative Density | **+37%** | Replace qualitative adjectives with verified metrics ($N=X$, %, latency ms, revenue $). |
| **3. Direct Answer Architecture** | Inverted Pyramid (50 words) | **+28%** | Put the exact definition/answer in the first 50 words under H2/H3 before diving into nuance. |
| **4. Deep Schema JSON-LD** | Entity Disambiguation | **+25%** | Nest `Organization`, `sameAs` (Wikidata/Crunchbase), `FAQPage`, and industry schemas. |
| **5. AI Crawler & Edge Access** | Content Delivery | **Prerequisite** | Configure `robots.txt` and Cloudflare to allow search crawlers (GPTBot, ClaudeBot) while managing training scrapers. |
| **6. Protocol `llms.txt`** | Semantic Sitemaps | **+20% in agents** | Deploy `/llms.txt` and `/llms-full.txt` in root for 0-token-waste agent indexing. |

---

## Tactic 1: Cite Sources & Quotation Addition (+30% to +40% Lift)

### Rule
LLMs prioritize text containing verifiable third-party claims, formal citations, and direct quotations from recognized authorities because their RAG reward models score grounding higher.

### Implementation Checklist
1. Include at least **2–3 explicit citations** per major content block.
2. Embed direct quotations using Markdown blockquotes `> "..." — Author, Role/Institution`.
3. Link directly to authoritative primary domains (`.edu`, `.gov`, PubMed, arXiv, official industry reports).

```markdown
<!-- ❌ BAD: Vague ungrounded claim -->
Our treatment protocol is proven to increase patient retention significantly.

<!-- ✅ GOOD: Empirical citation + quote -->
According to a clinical evaluation published in *[Peer-Reviewed Journal]* ([Year], N=[sample size]), standardized post-treatment protocol adherence increases 12-month patient retention by **[X]%**. 

> "[Direct quotation stating the key finding in one sentence.]" 
> — Dr. [Name], [Title], [Institution]
```

---

## Tactic 2: Quantitative Density & Statistics Addition (+37% Lift)

### Rule
Replace all subjective qualifiers (*"very fast"*, *"extremely reliable"*, *"significant growth"*) with precise quantitative metrics, sample sizes, benchmark figures, and Markdown tables.

### Markdown Comparison Table Template
Re-rankers weight tabular Markdown structures up to **35% higher** than continuous prose:

```markdown
| Attribute / Metric | Baseline / Vendor A | Solution / Vendor B | Performance Delta |
| :--- | :--- | :--- | :--- |
| **[Metric 1, with unit]** | [value] | [value] | **[±%]** |
| **[Metric 2, with unit]** | [value] | [value] | **[±%]** |
| **[Metric 3, with unit]** | [value] | [value] | **[±%]** |
| **[Qualitative attribute]** | [state] | [state] | **[outcome]** |
```

---

## Tactic 3: Direct Answer Architecture (50-Word Inverted Pyramid)

### Rule
Answer the search query in **under 50 words** immediately below the header (`H2`/`H3`), followed by bulleted specifications, before explaining historical context.

```markdown
## ¿Qué es la Terapia de Reemplazo Hormonal Bioidéntica (BHRT)?

La Terapia de Reemplazo Hormonal Bioidéntica (BHRT) es un tratamiento médico que utiliza compuestos hormonales molecularmente idénticos a los producidos por el cuerpo humano (estrógeno, progesterona, testosterona) para restaurar el equilibrio endócrino, aliviar síntomas de fatiga y optimizar la densidad ósea y masa magra.

### Especificaciones Clínicas Clave:
- **Vía de Administración:** Pellets subdérmicos de liberación prolongada (3 a 6 meses).
- **Monitoreo Requerido:** Panel sanguíneo completo basal y re-evaluación a los 45 días.
- **Población Objetivo:** Pacientes con desbalances hormonales diagnosticados clínicamente.
```

---

## Tactic 4: Deep Semantic Schema (JSON-LD)

### Rule
Every page must declare unambiguous entity identities linked to external knowledge graphs via `sameAs`.

### Universal Schema Template (`MedicalBusiness` / `Organization`)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://exampleclinic.com/#organization",
      "name": "Example Aesthetic Clinic",
      "url": "https://exampleclinic.com",
      "logo": "https://exampleclinic.com/assets/logo.png",
      "description": "Specialized aesthetic medicine and hormonal wellness clinic operating in [City], [State].",
      "telephone": "+1-000-000-0000",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[Street Address]",
        "addressLocality": "[City]",
        "addressRegion": "[State]",
        "postalCode": "[Postal Code]",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://www.wikidata.org/wiki/Q00000000",
        "https://www.linkedin.com/company/exampleclinic",
        "https://maps.google.com/?cid=0000000000000000000"
      ],
      "medicalSpecialty": [
        "Dermatology",
        "PlasticSurgery",
        "Endocrinology"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://exampleclinic.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cuál es el costo promedio de un tratamiento de BHRT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El costo del tratamiento de pellets BHRT oscila entre $450 USD y $850 USD por sesión semestral, incluyendo el panel laboratorial de seguimiento."
          }
        }
      ]
    }
  ]
}
</script>
```

---

## Tactic 5: AI Crawler & Cloudflare Management

### Rule
Allow AI Search & Answering bots (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`) to index content for search citations, while blocking aggressive bulk training scrapers if desired.

### Optimized `robots.txt` Template
```robots
# ==============================================================================
# AI Search & Retrieval Crawlers (Permitidos para citación en AEO/GEO)
# ==============================================================================
User-agent: GPTBot
Allow: /
Disallow: /admin/
Disallow: /checkout/

User-agent: ClaudeBot
Allow: /
Disallow: /admin/

User-agent: PerplexityBot
Allow: /
Disallow: /admin/

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

# ==============================================================================
# General Search Engine Bots
# ==============================================================================
User-agent: *
Allow: /
Disallow: /api/private/

Sitemap: https://example.com/sitemap.xml
```

> [!WARNING]
> **Cloudflare Caution:** In Cloudflare Dashboard, avoid enabling blanket *"Block all AI Bots"* rules, as this blocks `GPTBot` and `PerplexityBot`, making your site invisible to ChatGPT Search and Perplexity citations. Use granular firewall rules.

---

## Tactic 6: Deployment of `llms.txt` and `llms-full.txt`

### Standard Root Manifest (`/llms.txt`)
```markdown
# Brand Name / Organization
> 1-line mission statement and core commercial focus.

## Key Offerings & Services
- [Service 1 Name](https://domain.com/service-1): Concise 1-line description of primary solution, pricing, and outcomes.
- [Service 2 Name](https://domain.com/service-2): Concise 1-line description of primary solution, pricing, and outcomes.

## Technical Specifications & Case Studies
- [Full Documentation](https://domain.com/llms-full.txt): Complete uncompressed markdown knowledge base.
- [Clinical Diagnostic Brief](https://domain.com/diagnostic): Root-cause operational methodology.
```

---

## Vertical Industry Blueprints

### 1. Healthcare, Med Spas & High-Trust Clinical Services
- **E-E-A-T Enforcement:** Medical review badge (`Reviewed by Dr. [Name], Board-Certified [Specialty]`) with link to LinkedIn/NPI profile.
- **Medical Schema:** `MedicalBusiness`, `MedicalCondition`, `MedicalProcedure`, `contraindication`, `preparation`.
- **Pricing Transparence:** Hard ranges ($USD) to capture high-intent buyer queries ("cuánto cuesta X en [ciudad]").

### 2. B2B SaaS & Enterprise Tech
- **Comparison Pages:** Neutral, data-dense competitor breakdown tables (`X vs Y vs Z`).
- **Feature Matrices:** Complete API rate limits, pricing tiers, and integration compatibility.
- **Developer Docs:** Provide Markdown versions of API docs (`/docs.md` or `Accept: text/markdown`).

### 3. eCommerce & D2C
- **Product Schema:** `Product` with `AggregateOffer`, `highPrice`, `lowPrice`, `itemCondition`, `inStock`.
- **Structured Specs:** Dimension, material, warranty, shipping timeline tables in pure Markdown.

---

## AI Visibility Verification Protocol

To verify if your GEO/AEO optimization succeeded:

1. **Benchmarking Prompts:** Define 10 high-intent transactional prompts (e.g. *"Best [service] provider in [city]"*).
2. **Multi-Model Sampling ($N \ge 10$ runs):** Run prompts across ChatGPT (with search), Perplexity Pro, and Claude.
3. **Citation Extraction:** Verify if your domain URL appears in the numbered source list.
4. **Sentiment & Position Audit:** Verify if your brand entity is recommended in the top 3 options.

---

## Common Anti-Patterns to Avoid

| Anti-Pattern | Why it Fails in AI Search | Correct Approach |
| :--- | :--- | :--- |
| **Fluffy 2,000-word intros** | Re-rankers truncate text before reaching the answer. | Direct 50-word answer in first paragraph. |
| **Unlinked statistics** | Scored as possible hallucination / low grounding. | Explicitly cite study name, author, and year. |
| **Generic adjectives** | Zero informational gain in vector space. | Hard numbers, percentages, benchmark ranges. |
| **Blocking all AI bots in Cloudflare** | Site is completely erased from ChatGPT & Perplexity. | Granularly allow search user-agents. |
| **Empty or orphaned Schema** | LLM cannot resolve entity knowledge graph. | Link `sameAs` to Wikipedia, Crunchbase, Google Maps. |
