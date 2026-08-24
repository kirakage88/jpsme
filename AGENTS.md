# AGENTS.md

## What this is

JPSME-XUC (Junior Philippine Society of Mechanical Engineers – Xavier University Chapter) org website. React 19 + Vite 8 SPA with plain CSS (no Tailwind, no UI libs).

## The site IS built (as of 2026-08)

Two pages via HashRouter (`react-router-dom`): home (`#/`) and the Tangram Puzzle Wheel (`#/puzzles`). Home sections: Hero, About, Activities, Gallery, Join (+ cog dividers). Tangram has 12 puzzles from `src/data/puzzles.js`, placeholders at `src/assets/tangram/puzzle-01..12.svg` and `solution-01..12.svg` (swap files with the same names to replace). Design language: blueprint plates, gears, runes, chamfered buttons, blueprint grid on About/Gallery/puzzles sections.

## Commands

- `npm install` — deps (lockfile exists, `npm ci` in CI)

- `npm run dev` — Vite dev server (HMR)
- `npm run build` — builds to `dist/` (gitignored)
- `npm run lint` — ESLint (flat config: react-hooks + react-refresh, ignores `dist`)
- `npm run deploy` — manual GH Pages deploy (gh-pages to `gh-pages` branch); CI workflow deploys on push to main
- No test framework, no typecheck (plain JSX, no TS)
- Toolchain is bleeding edge (React 19.2, Vite 8, ESLint 10): needs a recent Node; Node 22.14 works.

## Source-of-truth docs (repo root — read before building)

- `website_prompt.md` — full site spec (sections, Tangram wheel, QR deep links, GitHub Pages requirement)
- `design_brief_template.md` — filled design brief. Colors: primary `#0B1B3D`, secondary `#DBC480`, accent `#B88B3C`, bg `#F0F2F5`, text `#D4A853` (gold reserved for dark surfaces for AA). Fonts: Changa One (headings), Basic (body). Tone: minimalist + professional, "League of Legends: Arcane" themed.
- `about.md` — real org content: mission/vision, officer names and titles, achievements, emails, socials.

## Assets

- Event photos: `src/assets/images/img (1..9).jpg` — filenames contain **spaces and parentheses**; always quote paths in shell commands and imports.
- Other assets: `src/assets/hero.png`, `logo.png`, `seal.png`, `qr_code.jpg`.
- `public/` holds `favicon.svg` and `icons.svg` (SVG sprite, referenced as `<use href="/icons.svg#...">`).

## Git state gotchas

- Single commit ("Initial Commit"). Nearly all the real content — `about.md`, org assets, `.opencode/`, `package-lock.json`, `skills-lock.json` — is untracked but required. Don't assume a clean tree or delete untracked files.
- `dist/` is gitignored; don't commit builds.

## Design skills

- `.opencode/skills/` has pinned copies of `design-taste-frontend` and `frontend-design` skills (`skills-lock.json`). Load the relevant one for any UI/design work rather than inventing patterns.

## GitHub Pages & routing

- Deployed via GH Pages: `base: '/jpsme/'` in `vite.config.js`, `homepage` in `package.json`, `.github/workflows/deploy.yml` (push to main) + `npm run deploy` (gh-pages) as manual fallback.
- Routing uses `react-router-dom` **HashRouter**: home at `#/`, Tangram wheel at `#/puzzles`. Home section links use `/?s=<id>` deep links; `ScrollManager` in `src/App.jsx` scrolls to the section or top on route change.
- `public/.nojekyll` is required for GH Pages (committed).
- Favicon is referenced relatively (`./favicon.svg`) because of the subpath base.