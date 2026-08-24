# JPSME-XUC Website

Official website of the Junior Philippine Society of Mechanical Engineers, Xavier University Chapter (JPSME-XUC).

Piltover/hextech-inspired (Arcane) single-page site: navy and gold, brass-and-navy engineering details, gears, blueprint marks. Built with React 19 + Vite 8, plain CSS, no UI libraries.

## Pages

- Home (`#/`) - hero, about, activities, gallery, join
- Tangram Puzzle Wheel (`#/puzzles`) - 12 puzzles, spin-to-select wheel, solve timer

## Commands

```bash
npm install       # install dependencies
npm run dev       # dev server with HMR
npm run build     # production build to dist/
npm run lint      # ESLint (flat config)
npm run preview   # preview the production build
npm run deploy    # build + push dist/ to gh-pages branch (manual deploy)
```

Requires a recent Node (22.x works). No tests, no typecheck (plain JSX).

## Updating content

- **Event photos**: replace files in `src/assets/images/` (`img (1).jpg` through `img (9).jpg`). Names contain spaces and parentheses; quote paths in shell commands.
- **Tangram puzzles**: drop real images over the placeholders in `src/assets/tangram/` (`puzzle-01.svg` ... `solution-12.svg`). Same filenames, no code changes needed. Puzzle metadata lives in `src/data/puzzles.js`.
- **Org info (officers, achievements, contact)**: edit the constants at the top of `src/components/About.jsx`, `Join.jsx`, and `Footer.jsx`. Source content is in `about.md` and `design_brief_template.md` at the repo root.
- **Design**: colors and fonts are CSS variables in `src/styles/tokens.css` (light + dark themes).

## Deployment (GitHub Pages)

Live at `https://kirakage88.github.io/jpsme/`.

Two options:

1. **Automatic (recommended)**: push to `main`. `.github/workflows/deploy.yml` builds and deploys via GitHub Pages Actions. Enable Pages at repo Settings > Pages with source "GitHub Actions" once.
2. **Manual**: `npm run deploy` (uses `gh-pages`, pushes `dist/` to the `gh-pages` branch).

`vite.config.js` sets `base: '/jpsme/'` to match the repo subpath. Routing is hash-based (`#/puzzles`), so no server rewrite rules are needed.

## Structure

```
src/
├── components/       # Navbar, Hero, About, Activities, Gallery, Join, Footer, Tangram, decorative Gear/Rune/CogDivider
├── pages/            # HomePage, PuzzlesPage
├── data/             # puzzles.js (12 tangram entries)
├── styles/           # tokens.css (design tokens), global.css (base + utilities)
└── assets/           # images/, tangram/, seal.png, logo.png, hero.png, qr_code.jpg
```