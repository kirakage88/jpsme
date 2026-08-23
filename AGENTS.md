# AGENTS.md

## What this is

JPSME-XUC (Junior Philippine Society of Mechanical Engineers – Xavier University Chapter) org website. React 19 + Vite 8 SPA with plain CSS (no Tailwind, no UI libs).

**The site is NOT built yet.** `src/App.jsx` is still the untouched Vite starter template (counter demo, React/Vite logos). The full spec lives in `website_prompt.md` in the repo root — read it before implementing. Unless explicitly asked, don't preserve starter cruft; the site is meant to replace it.

## Commands

- `npm run dev` — Vite dev server (HMR)
- `npm run build` — builds to `dist/` (gitignored)
- `npm run lint` — ESLint (flat config: react-hooks + react-refresh, ignores `dist`)
- No test framework, no typecheck (plain JSX, no TS)
- Toolchain is bleeding edge (React 19.2, Vite 8, ESLint 10): needs a recent Node; Node 22.14 works.

## Source-of-truth docs (repo root — read before building)

- `website_prompt.md` — full site spec: 8 sections, Tangram Puzzle Wheel mini-app (6–10 puzzles, timer, spin-to-select), QR code deep links per section, GitHub Pages deployment requirement.
- `design_brief_template.md` — filled design brief. Use these exactly: primary `#0B1B3D`, secondary `#DBC480`, accent `#B88B3C`, background `#F0F2F5`, text `#D4A853`. Fonts: Changa One (headings), Basic (body). Tone: minimalist + professional, "League of Legends: Arcane" themed.
- `about.md` — real org content: mission/vision, officer names and titles (Executive Board + committee heads), achievements, emails (`jpsmexuc@gmail.com`, `studentservices.jpsme@gmail.com`), socials (`@jpsmexuc`, `jpsmexu`). Placeholder text is not needed for these sections.

## Assets

- Event photos: `src/assets/images/img (1..9).jpg` — filenames contain **spaces and parentheses**; always quote paths in shell commands and imports.
- Other assets: `src/assets/hero.png`, `logo.png`, `seal.png`, `qr_code.jpg`.
- `public/` holds `favicon.svg` and `icons.svg` (SVG sprite, referenced as `<use href="/icons.svg#...">`).

## Git state gotchas

- Single commit ("Initial Commit"). Nearly all the real content — `about.md`, org assets, `.opencode/`, `package-lock.json`, `skills-lock.json` — is untracked but required. Don't assume a clean tree or delete untracked files.
- `dist/` is gitignored; don't commit builds.

## Design skills

- `.opencode/skills/` has pinned copies of `design-taste-frontend` and `frontend-design` skills (`skills-lock.json`). Load the relevant one for any UI/design work rather than inventing patterns.

## GitHub Pages

- Spec requires GitHub Pages deployment (`npm run deploy`, `homepage` in package.json, `.github/workflows/`). None of this exists yet; set it up when deployment is requested.