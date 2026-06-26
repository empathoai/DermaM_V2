---
name: local-browser-validator
description: Automates browser validation and page screenshots using Chrome or Edge local installations when internal proxy/CDP connection issues occur.
---

# Local Browser Validator (Playwright)

## Purpose

Automates layout verification, above-the-fold calculations, and visual regression testing of the web application using **Playwright** (`@playwright/test`). This skill provides automated visual validation to ensure layout symmetry, dynamic margin correctness, and clinical copy alignment without human inspection overhead or false positives, bypassing any IDE-level CDP network socket bugs.

## Trigger

Activate this skill when:
- The standard `browser_subagent` fails to initialize browser contexts or times out opening localhost.
- You make changes to component layouts, vertical paddings, grids, or CSS classes, and need to ensure no layout regression occurred.
- You need to generate baseline visuals or compare changes pixel-by-pixel.

## Workflow

1. Ensure the local development server is running in a background task (e.g., `npm run dev` running on port 3001).
2. Run the visual regression suite to check for layout changes:

```bash
# Run visual regression tests
npm run test:visual
```

3. **Interpreting Results:**
   - **Pass:** The layout matches the baseline exactly. No shifts or regressions occurred.
   - **Fail (Visual Difference):** Playwright will save the difference image in `test-results/` (showing red highlights where pixels differ). Review the diff to identify layout issues.
   - **Fail (Missing Baselines):** If snapshots don't exist yet, Playwright will automatically write them as baseline images.

4. **Updating Baselines:**
   If you intentionally change the design (e.g., modifying spacing or hero heights) and the new layout is correct, update the baseline reference images:

```bash
# Update the visual snapshots baseline
npx playwright test --update-snapshots
```

## Configured Viewports

- **Desktop Chrome:** 1920x1080 viewport size.
- **Mobile Safari (iPhone 13):** 375x812 viewport size.

## File Locations

- **Test Suite:** `tests/visual.spec.js`
- **Config:** `playwright.config.js`
- **Reference Baselines:** `tests/visual.spec.js-snapshots/`
- **Visual Diff Reports:** `playwright-report/`
