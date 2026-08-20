# Graph Report - .  (2026-08-19)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 169 nodes · 497 edges · 8 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `20508457`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]

## God Nodes (most connected - your core abstractions)
1. `Footer()` - 25 edges
2. `Navbar()` - 25 edges
3. `useMotionSystem()` - 21 edges
4. `SectionHeader()` - 13 edges
5. `LegalPageLayout()` - 8 edges
6. `categoryPages` - 8 edges
7. `renderLegalSections()` - 7 edges
8. `CategoryPage()` - 7 edges
9. `MediaBlock()` - 6 edges
10. `TreatmentDetailPage()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `FinalCTA()` --calls--> `useMotionSystem()`  [INFERRED]
  src/components/sections/FinalCTA/FinalCTA.jsx → src/components/utils/motion.js
- `BookingPolicy()` --calls--> `renderLegalSections()`  [EXTRACTED]
  src/pages/BookingPolicy.jsx → src/components/layout/LegalContent.jsx
- `PrivacyPolicy()` --calls--> `renderLegalSections()`  [EXTRACTED]
  src/pages/PrivacyPolicy.jsx → src/components/layout/LegalContent.jsx
- `TermsOfUse()` --calls--> `renderLegalSections()`  [EXTRACTED]
  src/pages/TermsOfUse.jsx → src/components/layout/LegalContent.jsx
- `ClinicalPositioning()` --calls--> `useMotionSystem()`  [EXTRACTED]
  src/components/sections/ClinicalPositioning/ClinicalPositioning.jsx → src/components/utils/motion.js

## Import Cycles
- None detected.

## Communities (8 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.12
Nodes (18): BeforeAfterGrid(), BenefitColumns(), BrandDivider(), Breadcrumb(), FAQAccordion(), ListSparkle(), MediaBlock(), ProcessTimeline() (+10 more)

### Community 1 - "Community 1"
Cohesion: 0.10
Nodes (25): CapilarTreatmentPage(), CorporalesTreatmentPage(), bookingPolicyData, legalUiCopy, privacyContact, privacyPolicyData, termsOfUseData, DentalTreatmentPage() (+17 more)

### Community 2 - "Community 2"
Cohesion: 0.15
Nodes (17): AboutPage(), ClinicalPositioning(), aboutPage, FeaturedServices(), FounderSection(), MethodProcess(), PageHero(), Home() (+9 more)

### Community 3 - "Community 3"
Cohesion: 0.23
Nodes (12): CategoryPage(), categoryPages, categoryLabels, customDetails, getBaseTreatment(), getTreatmentAssetFolder(), treatmentPages, Footer() (+4 more)

### Community 4 - "Community 4"
Cohesion: 0.25
Nodes (6): contactFaq, contactConsentCopy, Hero(), ContactoPage(), TreatmentHero(), HeroMedia()

### Community 5 - "Community 5"
Cohesion: 0.36
Nodes (5): landingPages, LandingPage(), LimpiezaFacialPage(), PostoperatoriosPage(), PrfYFibrinaPage()

### Community 6 - "Community 6"
Cohesion: 0.36
Nodes (4): FloatingWhatsApp(), App(), AppRoutes(), ScrollToTop()

## Knowledge Gaps
- **7 isolated node(s):** `defaultIcons`, `staticSectionReveal`, `staticCardStaggerContainer`, `staticCardReveal`, `privacyContact` (+2 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Footer()` connect `Community 3` to `Community 1`, `Community 2`, `Community 4`, `Community 5`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Why does `Navbar()` connect `Community 3` to `Community 1`, `Community 2`, `Community 4`, `Community 5`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **What connects `defaultIcons`, `staticSectionReveal`, `staticCardStaggerContainer` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.11794871794871795 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.10241820768136557 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.14838709677419354 - nodes in this community are weakly interconnected._