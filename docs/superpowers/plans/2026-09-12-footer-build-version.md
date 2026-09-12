# Footer Build Version Indicator Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show a discreet `build <git-short-hash> · <date>` line in the site footer, computed at
build time, so a live deploy can be visually matched against a specific commit.

**Architecture:** `vite.config.js` computes the git short hash (via `child_process.execSync`,
falling back to `"dev"` if git is unavailable) and an ISO build timestamp inside its
`defineConfig(() => {...})` callback, and exposes both as compile-time global string constants via
Vite's `define` option. `Footer.jsx` reads those two globals directly (no import — they're
build-time-inlined literals, same mechanism as `import.meta.env.*`) and renders one line in its
existing bottom bar.

**Tech Stack:** Vite 6 `define` config option, Node's built-in `child_process.execSync` — no new
dependencies.

## Global Constraints

- No new npm dependencies (project stack is frozen per `CLAUDE.md` — Vite + React 19 + React
  Router v7 + `react-helmet-async` + Tailwind v4 + CSS Modules + `motion` + `lucide-react` only).
- No linter exists (`npm run lint` is a no-op) and no TypeScript at runtime — no type-declaration
  file is needed for the new globals.
- Footer bottom-bar line must reuse the existing text style exactly: `text-xs ... text-[#BBB8B5]
  font-light` (no new color, no new font size, no icon, no link).
- Date format: `toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })`,
  lowercased — matches the site's Spanish-first copy convention.
- `Footer.jsx` is a shared layout component rendered on every page → the `CLAUDE.md` visual-DoD
  gate applies: `test:visual` must run and any diff must be reviewed before this is done.
- Spec: `docs/superpowers/specs/2026-09-12-footer-build-version-design.md`.

---

### Task 1: Expose build hash + date as Vite globals

**Files:**
- Modify: `vite.config.js` (full current content below, for exact before/after context)

Current content:
```js
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
```

**Interfaces:**
- Produces: two compile-time global string constants available anywhere in client code without
  import: `__BUILD_HASH__` (7-char git short hash, or the literal string `"dev"` if git isn't
  available) and `__BUILD_DATE__` (an ISO-8601 datetime string, e.g.
  `"2026-09-12T19:08:00.000Z"`).

- [ ] **Step 1: Edit `vite.config.js`**

Replace the full file content with:

```js
import { execSync } from 'child_process';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

function getBuildHash() {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim();
  } catch {
    return 'dev';
  }
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    define: {
      __BUILD_HASH__: JSON.stringify(getBuildHash()),
      __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
```

Note: the mangled `â` character in the existing comment is a pre-existing encoding artifact in the
file — preserve it as-is (out of scope for this change, don't fix unrelated things).

- [ ] **Step 2: Verify the dev server starts and the constant resolves**

Run: `npm run dev` (or if a dev server is already running on port 3000, skip starting a new one)

In the Browser pane, open `http://localhost:3000` and run in the JS console (via
`javascript_tool`):

```js
[__BUILD_HASH__, __BUILD_DATE__]
```

Expected: an array of two strings — the first a 7-character hex string matching the output of
`git rev-parse --short HEAD` run in the terminal, the second a valid ISO datetime string. If the
first value is `"dev"` instead, something is wrong with git availability in this environment —
stop and investigate before continuing (don't proceed to Task 2 with a broken hash).

- [ ] **Step 3: Commit**

```bash
git add vite.config.js
git commit -m "feat(build): expose git commit hash and build date as Vite globals"
```

---

### Task 2: Render the build line in the footer

**Files:**
- Modify: `src/components/layout/Footer/Footer.jsx:117-134` (the "Bottom Bar" block)

**Interfaces:**
- Consumes: `__BUILD_HASH__`, `__BUILD_DATE__` (global string constants from Task 1, no import
  needed).

- [ ] **Step 1: Edit the bottom bar in `Footer.jsx`**

The current bottom bar (lines 117-134) is:

```jsx
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#F2F0F1]/10 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 text-xs tracking-wider text-[#BBB8B5] font-light">
          <p className="order-1">&copy; {new Date().getFullYear()} Derma.M. Todos los derechos reservados.</p>
          
          <div className="order-2 lg:text-center text-[#BBB8B5]/85">
            Created by: <a href="https://empathoai.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F2F0F1] underline underline-offset-4 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2F0F1]">EmpathoAI</a>
          </div>
          
          <div className="order-3 flex flex-wrap items-center gap-3">
            <Link to="/politica-de-privacidad" className="hover:text-[#F2F0F1] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2F0F1]">Política de privacidad</Link>
            <span className="text-[#F2F0F1]/20">|</span>
            <Link to="/terminos-de-uso" className="hover:text-[#F2F0F1] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2F0F1]">Términos de uso</Link>
            <span className="text-[#F2F0F1]/20">|</span>
            <Link to="/accessibility" className="hover:text-[#F2F0F1] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2F0F1]">Accesibilidad</Link>
            <span className="text-[#F2F0F1]/20">|</span>
            <Link to="/legal" className="hover:text-[#F2F0F1] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2F0F1]">Recursos legales</Link>
          </div>
        </div>
```

Replace it with (adds a 4th `order-4` item after the existing three, same wrapping flex row):

```jsx
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#F2F0F1]/10 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 text-xs tracking-wider text-[#BBB8B5] font-light">
          <p className="order-1">&copy; {new Date().getFullYear()} Derma.M. Todos los derechos reservados.</p>
          
          <div className="order-2 lg:text-center text-[#BBB8B5]/85">
            Created by: <a href="https://empathoai.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F2F0F1] underline underline-offset-4 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2F0F1]">EmpathoAI</a>
          </div>
          
          <div className="order-3 flex flex-wrap items-center gap-3">
            <Link to="/politica-de-privacidad" className="hover:text-[#F2F0F1] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2F0F1]">Política de privacidad</Link>
            <span className="text-[#F2F0F1]/20">|</span>
            <Link to="/terminos-de-uso" className="hover:text-[#F2F0F1] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2F0F1]">Términos de uso</Link>
            <span className="text-[#F2F0F1]/20">|</span>
            <Link to="/accessibility" className="hover:text-[#F2F0F1] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2F0F1]">Accesibilidad</Link>
            <span className="text-[#F2F0F1]/20">|</span>
            <Link to="/legal" className="hover:text-[#F2F0F1] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2F0F1]">Recursos legales</Link>
          </div>

          <p className="order-4 text-[#BBB8B5]/60">
            build {__BUILD_HASH__} · {new Date(__BUILD_DATE__).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }).toLowerCase()}
          </p>
        </div>
```

- [ ] **Step 2: Visual check in the Browser pane — desktop**

With the dev server running (from Task 1 Step 2), reload `http://localhost:3000`, scroll to the
footer, and take a screenshot. Expected: a 4th small line reading `build <hash> · <day> <mon>
<year>` (e.g. `build de8c84d · 12 sep 2026`) appears in the bottom bar, same size/color/weight as
the copyright line, no layout shift or overflow.

- [ ] **Step 3: Visual check in the Browser pane — mobile (375px)**

Use `resize_window` with `preset: "mobile"` on the same tab, scroll to the footer, screenshot.
Expected: the bottom bar still stacks correctly (`flex-col` on mobile) and the new line reads
cleanly on its own row, not clipped or overlapping. Reset the viewport to `"desktop"` afterward.

- [ ] **Step 4: Run the visual regression suite (CLAUDE.md DoD gate)**

`Footer.jsx` is shared across every page, so this is required, not optional.

Run: `npm run build`, then serve `dist/` on port 3003 (`npx vite preview --port 3003`), then:

```bash
npx playwright test tests/visual.spec.js --project=desktop-chrome --project=mobile-safari
```

Expected: any diff will show the footer's bottom bar with the new line. Inspect each
`*-diff.png` for footer-touching snapshots — confirm the ONLY change is the added build-info line
(no unrelated shift in the other three bottom-bar items). If that's the case, regenerate baselines:

```bash
npx playwright test tests/visual.spec.js --project=desktop-chrome --project=mobile-safari --update-snapshots
```

If any diff shows unexpected changes beyond the new line, stop and investigate before continuing.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/Footer/Footer.jsx
# include updated snapshot files only if Step 4 required --update-snapshots
git add tests/*-snapshots/ 2>/dev/null
git commit -m "feat(footer): show build hash and date for deploy verification"
```

---

## Post-implementation (not a task — reminder for the closing cycle)

Per `CLAUDE.md`'s one-change-per-cycle workflow, once both tasks are done and approved: update
`PROGRESS.md` (new top entry), add a `DECISIONS.md` entry (the git-hash-vs-semver choice is
non-obvious and worth recording), and refresh `NEXT.md`, then commit and push per the
`close-cycle` skill. Not part of this implementation plan's tasks — handled at cycle close.
