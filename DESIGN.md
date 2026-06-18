---
name: "Derma.M Visual Design System"
version: "3.0.0"
description: "Authoritative design system for Derma.M. Defines the visual language, color surfaces, typography, layout rhythm, component rules, and page-level surface maps required to create a premium clinical aesthetic website. This system prioritizes editorial luxury, monochrome discipline, asymmetry, and medical clarity. No generic WordPress, med-spa, SaaS, or template patterns are allowed."
theme:
  mode: "editorial-monochrome"
  description: "Premium skin health system built on dark authority, warm clinical grays, asymmetrical layouts, and restrained clinical clarity."
---

# Derma.M — Visual Design System

Derma.M must feel like a custom premium skin health and aesthetics brand, not a WordPress med-spa template. The design language is editorial, monochrome, clinical, warm, architectural, and conversion-aware.

The site must communicate:
- premium care
- skin health expertise
- calm confidence
- natural beauty
- clinical restraint
- visual sophistication

The site must never feel:
- generic WordPress
- spa template
- SaaS landing page
- beauty salon flyer
- over-decorated luxury
- cold hospital website
- stock medical brochure

## 1. Core Visual Principle

The visual system is based on surface discipline.

Every section must use one of these surface roles:

1. Dark Authority
2. Clinical Canvas
3. Soft Grey Pause
4. Editorial Image Grid
5. Treatment Information Surface
6. Conversion Dark
7. Legal / Compliance Surface

Consistency comes from repeating surface behavior, not repeating layouts.

Do not design by randomly choosing background colors per section. Every section must have a surface role.

## 2. Color Tokens

### Primary Surfaces

Dark Authority  
`#141313`  
Use for hero, treatment category grids, method/process sections, premium service moments, final CTA, and footer. This surface creates authority, contrast, and premium tension.

Clinical Canvas  
`#F2F0F1`  
Use for trust bars, content sections, reviews, treatment information, category pages, FAQs, and calm explanatory sections. This is the main light surface. It replaces pure white.

Stone  
`#363633`  
Use for primary text on light surfaces, dark linework, section titles, icons, and strong UI structure.

Warm Light  
`#CCC9C1`  
Use for soft transitions, supporting backgrounds, low-intensity panels, microcopy on dark surfaces, and muted editorial details.

Soft Grey  
`#BBB8B5`  
Use for dividers, secondary text, icon strokes, subtle borders, inactive labels, and quiet visual rhythm.

Off White  
`#EFEFEB`  
Use only for contained surfaces: forms, embeds, FAQs, spec tables, review cards, and small modules. Never use pure white.

Dark Soft  
`#1A1919`  
Use for nested dark panels or dark cards inside Dark Authority sections.

### Borders

Border on Light  
`rgba(54, 54, 51, 0.18)`

Border on Light Strong  
`rgba(54, 54, 51, 0.32)`

Border on Dark  
`rgba(242, 240, 241, 0.18)`

Border on Dark Strong  
`rgba(242, 240, 241, 0.32)`

### Text Colors

Text on Light  
`#363633`

Text Secondary on Light  
`#4E4D4D`

Text Muted on Light  
`#666463`

Text on Dark  
`#F2F0F1`

Text Secondary on Dark  
`#CCC9C1`

Text Muted on Dark  
`#BBB8B5`

### Forbidden Colors

Do not use:
- pure white `#FFFFFF`
- mint green from the old site
- medical blue
- gold
- pink
- gradients
- neon
- saturated accent colors
- colorful CTA systems

If a color is not listed here, it is not allowed.

## 3. Typography

Use Poppins exclusively.

No Playfair.
No Lato.
No decorative serif.
No script font unless explicitly approved for a single accent word.

### Type Behavior

Display / Hero:
- Poppins
- uppercase or semi-uppercase
- tracking-wider
- font-weight 400–500
- line-height 0.95–1.05
- desktop size 64–88px
- mobile size 44–56px

Section Headings:
- Poppins
- uppercase or controlled sentence case
- tracking-wide or tracking-wider
- font-weight 400–500
- line-height 1.05–1.15
- desktop size 40–64px

Body:
- Poppins
- text-sm or 15–16px
- font-weight 300–400
- line-height 1.6–1.8
- never dense
- max width 520–680px depending on section

Labels / Eyebrows:
- Poppins
- text-xs
- uppercase
- tracking-widest
- font-weight 500
- line-height 1.4

CTA:
- Poppins
- uppercase
- tracking-wider
- font-weight 500–600
- 12–14px

### Typography Rules

Headlines must feel editorial, not corporate.

Do not use tight negative tracking in display text. Derma.M uses expanded tracking for premium restraint.

Do not over-bold headings. Large scale and spacing should create impact, not heavy font weight.

Body copy must be short, calm, and readable.

Medical disclaimers must remain visible at 12–13px minimum.

## 4. Layout System

### Global Layout Rules

- No 50/50 flat sections.
- No repeated symmetrical blocks.
- No generic three-card rows unless the wireframe explicitly requires a 3-column structure.
- If a section uses columns, one column must have stronger visual mass.
- Images must crop with intention.
- Text must use negative space, not boxed layouts.
- Every page must alternate density: cinematic → structured → editorial → clinical → conversion.
- No section should feel isolated from the previous one.

### Section Widths

Max content width:
`1440px`

Page gutter:
`clamp(24px, 4vw, 64px)`

Major vertical section padding:
Desktop: `96px–140px`
Mobile: `64px–88px`

Grid gap:
Default: `24px`
Image grid: `4px`

### Geometry

Global border radius:
`0px`

Buttons:
`0px`

Cards:
`0px`

Inputs:
`0px`

Media:
`0px`

Accordions:
`0px`

### Shadows

No shadows.

Use:
- scale
- contrast
- image mass
- borders
- negative space
- typographic hierarchy

Do not use:
- card shadows
- soft elevation
- glow
- glassmorphism
- floating SaaS panels

## 5. Photography Direction

Photography is not decoration. It carries the premium perception.

### Hero Photography

Hero imagery must be:
- human
- close-cropped
- skin-focused
- editorial
- warm
- desaturated
- calm
- intimate
- premium

Allowed subjects:
- face
- neck
- skin texture
- hands in treatment context
- calm profile portrait
- body detail
- clinic interior with tactile materials

Avoid:
- product jars as hero subject
- stock doctor smiling at camera
- generic spa candles
- bright white treatment rooms
- exaggerated before/after imagery
- invasive medical imagery
- colorful wellness photography

### Image Treatment

Images should use:
- warm gray grading
- soft contrast
- natural shadows
- asymmetrical crop
- partial off-frame placement
- full-bleed sections where appropriate

Images should not use:
- overexposed white backgrounds
- colorful filters
- excessive blur
- generic stock compositions

## 6. Component Rules

### Navbar

Home navbar:
- Dark Authority background
- integrated with hero
- logo left
- nav centered
- CTA right
- no dark/light mismatch
- no heavy dropdown shadow

Internal page navbar:
- Clinical Canvas background
- dark text
- dark CTA
- sticky
- active states subtle

Landing page navbar:
- simplified
- logo left
- CTA right
- optional WhatsApp
- no full navigation

Navbar CTA:
- rectangular
- 0px radius
- uppercase
- tracking-wider

### Buttons

Primary on Light:
- background `#141313`
- text `#F2F0F1`
- border `#141313`

Primary on Dark:
- background `#F2F0F1`
- text `#141313`
- border `#F2F0F1`

Secondary on Light:
- transparent
- text `#363633`
- border `rgba(54,54,51,0.32)`

Secondary on Dark:
- transparent
- text `#F2F0F1`
- border `rgba(242,240,241,0.32)`

No rounded buttons.
No shadows.
No icon-heavy buttons.

### Cards

Cards are not generic.

Each card must belong to one of these types:
- Featured Treatment Card
- Category Image Card
- Benefit Card
- Review Card
- Specification Block
- Warning Box
- Related Treatment Card

Do not reuse the same card styling everywhere.

Featured Treatment Cards:
- treatment name
- outcome
- 3 benefits
- CTA
- disclaimer
- 1px border
- optional image
- no shadow
- no radius

Category Image Cards:
- full-bleed image
- dark overlay
- text floating over image
- entire card clickable
- 4px grid gap
- no inner white box

Benefit Cards:
- text-led
- low visual weight
- 1px border
- no image unless specifically required

Review Cards:
- restrained
- readable
- no heavy star graphics
- no colorful review widgets

Warning Boxes:
- calm clinical tone
- Warm Light or Off White surface
- strong border
- no red unless legally required

FAQ:
- line-item accordion
- no boxed card stack
- visible focus states

Footer:
- Dark Authority preferred
- legal disclaimer always visible
- never collapsed

## 7. Page Surface Maps

### Home Template

Purpose:
Sell the brand, atmosphere, and trust.

Surface sequence:

1. Header / Navbar  
Dark Authority  
Dark integrated navbar.

2. Hero  
Dark Authority  
Cinematic editorial hero with dominant human skin-focused image.

3. Trust Bar  
Clinical Canvas  
4-column trust strip with hairline separators.

4. Featured Services  
Clinical Canvas with Off White / Dark Soft accents  
3 featured treatment cards with editorial asymmetry.

5. Treatment Categories  
Dark Authority  
3x2 full-bleed image grid with overlays.

6. Clinical Positioning + Why Choose Us  
Clinical Canvas  
Editorial text block + 3 differentiator cards.

7. Method / How It Works  
Dark Authority  
Horizontal numbered process.

8. Google Reviews  
Clinical Canvas  
Quiet review cards.

9. About Founder / Human Trust  
Off White or Clinical Canvas  
Editorial split with dominant image.

10. Final CTA  
Dark Authority  
Cinematic conversion block.

11. Footer  
Dark Authority  
Multi-column legal closure.

### Landing Template

Purpose:
Convert one treatment.

Surface sequence:

1. Simplified Header  
Dark Authority

2. Treatment Hero  
Dark Authority  
Treatment-specific media, two CTAs, visible disclaimer.

3. Social Proof Bar  
Clinical Canvas

4. Problem / Diagnosis  
Clinical Canvas  
Editorial copy block.

5. Benefits  
Dark Authority  
3 benefits with bordered structure.

6. How It Works  
Clinical Canvas  
Numbered mechanism + dominant visual.

7. Treatment Details  
Off White  
Spec grid.

8. Before & After  
Dark Authority  
Image evidence with disclaimers.

9. Process  
Clinical Canvas  
Numbered visit flow.

10. Testimonials  
Clinical Canvas

11. FAQ  
Off White

12. Final CTA  
Dark Authority

13. Footer  
Dark Authority

### Category Template

Purpose:
Organize treatments without feeling like a service list.

Surface sequence:

1. Header  
Clinical Canvas

2. Breadcrumb  
Clinical Canvas

3. Category Hero  
Clinical Canvas

4. Trust / Safety Bar  
Warm Light

5. Category Overview  
Clinical Canvas

6. Featured Treatments Grid  
Dark Authority for Tier 1, Clinical Canvas for Tier 2

7. Who This Category Is For  
Off White

8. Category Benefits  
Clinical Canvas

9. Method / Category Approach  
Dark Authority

10. Process / Visit  
Clinical Canvas

11. Testimonials  
Off White

12. Category CTA  
Dark Authority

13. Footer  
Dark Authority

### Treatment Detail Template

Purpose:
Explain treatment with depth and clinical clarity.

Surface sequence:

1. Header  
Clinical Canvas

2. Breadcrumb  
Clinical Canvas

3. Treatment Hero  
Clinical Canvas  
Light editorial hero, no background image.

4. Trust / Safety Bar  
Warm Light

5. What The Treatment Is  
Clinical Canvas

6. Problem / Condition Context  
Dark Authority

7. Main Benefits  
Clinical Canvas

8. How The Treatment Works  
Off White

9. Who This Treatment Is For  
Clinical Canvas

10. When It Is Not Recommended  
Warm Light

11. Treatment Specs  
Clinical Canvas

12. Before & After  
Dark Authority

13. Related Treatments  
Clinical Canvas

14. FAQ  
Off White

15. Final CTA  
Dark Authority

16. Footer  
Dark Authority

### About Template

Purpose:
Humanize the brand and build trust.

Surface sequence:

1. Header  
Clinical Canvas

2. About Hero  
Clinical Canvas

3. Founder Story  
Off White

4. Philosophy / Approach  
Dark Authority

5. Clinical Trust / Credentials  
Clinical Canvas

6. Team  
Off White

7. Location / Facilities  
Clinical Canvas

8. Testimonials  
Warm Light

9. Final CTA  
Dark Authority

10. Footer  
Dark Authority

### Contact Template

Purpose:
Drive booking clearly.

Surface sequence:

1. Header  
Clinical Canvas

2. Contact Hero  
Clinical Canvas

3. Square Booking Embed  
Off White

4. Direct Contact / WhatsApp  
Dark Authority

5. Location / Map  
Clinical Canvas

6. Hours  
Warm Light

7. FAQ  
Off White

8. Final CTA  
Dark Authority

9. Footer  
Dark Authority

## 8. Home Visual Rules

The Home is the visual benchmark for the whole site.

The Home must not look like:
- a service directory
- a WordPress homepage
- a spa brochure
- a SaaS page with medical content

The Home must look like:
- an editorial skin health brand
- a premium clinical aesthetic site
- a custom-built luxury wellness website
- a controlled monochrome system

### Home Hero Rules

The hero must:
- use Dark Authority
- include human editorial skin-focused imagery
- avoid product jars as primary subject
- avoid flat 50/50 split
- place text in negative space
- keep CTA visible
- maintain strong contrast
- create a memorable first impression

The hero image must:
- occupy 42%–60% of the hero visual field
- appear dominant, not decorative
- crop asymmetrically
- guide the eye toward the headline
- not disappear into the dark background

### Home Trust Bar Rules

The trust bar must:
- transition from dark to light
- use Clinical Canvas
- include 4 items
- use hairline dividers
- avoid generic badge styling
- feel like an editorial strip

### Home Treatment Category Rules

The treatment category grid must:
- use Dark Authority
- use full-bleed imagery
- use dark overlays
- use 4px gaps
- avoid white cards
- avoid icon cards
- feel like visual navigation

## 9. Accessibility

All text must meet WCAG AA.

Minimum body text:
`16px`

Minimum disclaimer text:
`12px`

Focus states:
- visible
- 2px minimum
- high contrast

Forms:
- visible labels
- no placeholder-only labels

Motion:
- respect prefers-reduced-motion
- do not animate layout properties
- use subtle opacity/transform only

Medical disclaimers:
- visible
- readable
- never hidden behind hover, accordion, or collapsed UI

## 10. Anti-Patterns

Never create:
- pure white page backgrounds
- rounded cards
- soft shadows
- WordPress-style service grids
- equal 50/50 hero
- product jar hero image
- blue medical styling
- mint green accents
- generic spa icon rows
- repeated card sections
- excessive text blocks
- over-dark pages with no rhythm
- random beige sections
- decorative script typography
- testimonial widgets that look third-party
- hidden disclaimers
- CTA banners that look promotional
- stock doctor smiling at camera
- gradients or glows
- glassmorphism

## 11. Builder Instructions

1. Use this DESIGN.md as the visual source of truth.
2. Use wireframes only for section order and required content.
3. Do not interpret wireframes as layout style.
4. Use the surface map before selecting any background.
5. Use the component role before styling any card.
6. Preserve medical disclaimer rules.
7. Preserve 0px radius globally.
8. Use borders instead of shadows.
9. Keep pages monochrome and warm gray.
10. Use imagery to create premium perception.
11. Do not add visual ideas not defined here.
12. If a design starts looking like WordPress, reduce cards and increase editorial image mass.
13. If a design feels empty, increase image dominance before adding decoration.
14. If a design feels generic, adjust composition before changing colors.
15. The Home defines the visual standard for every other template.
