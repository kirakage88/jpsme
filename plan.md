# JPSME-XUC Website — Implementation Plan

## Theme

"League of Legends: Arcane" inspired — minimalist + professional. Hextech energy (deep navy + gold/bronze) with clean, editorial layout.

- **Primary:** `#0B1B3D` (deep navy) — nav, buttons, headings
- **Secondary:** `#DBC480` (gold) — highlights, hover, borders
- **Accent:** `#B88B3C` (bronze) — CTAs, emphasis, puzzle wheel
- **Background:** `#F0F2F5` (light) / dark-mode variant: navy-based Arcane dark theme
- **Text:** `#D4A853` (gold text) / `#0B1B3D` (secondary text)
- **Fonts:** Changa One (headings), Basic (body) — Google Fonts

## Contact Info (final)

- Facebook: `https://www.facebook.com/jpsmexu`
- Instagram: `@jpsmexuc`
- Emails: `jpsmexuc@gmail.com`, `jpsme@xu.edu.ph`, `studentservices.jpsme@gmail.com` (helpdesk)
- QR code (`qr_code.jpg`) links to the site itself — no per-section deep-link routing needed

## Assumptions / Decisions (user-confirmed)

- Tangram puzzle/solution images: **user provides** real images → dropped at `src/assets/tangram/` as `puzzle-N.svg` / `solution-N.svg` (PNG ok)
- Upcoming Events section: **omitted for now** (revisit when real dates exist)
- Tangram Puzzle Wheel lives on its **own page** (`#/puzzles`) via `react-router-dom` HashRouter (GH Pages friendly); home sections scrolled via `#/?s=about` style deep links
- "What We Do" cards: blend `about.md` (Leadership, Exposure, Student Assistance) + prompt (Workshops, Outreach/Community)
- **Dark mode toggle: included** (Arcane-dark variant, persisted in localStorage)
- GitHub Pages deployment: **deferred** until site is built

## Phases

### Phase 0 — Foundation & Cleanup
- Strip Vite starter cruft from `App.jsx`, `App.css`, `index.css` (counter demo, React/Vite logos)
- `index.html`: real title/meta/favicon, load Changa One + Basic from Google Fonts
- Folder structure: `src/components/`, `src/data/`, `src/styles/`
- Design tokens as CSS variables for **both light and dark themes**
- Base reset, typography, page background, Arcane base atmosphere

### Phase 1 — Static Sections
1. **Navbar** — sticky, smooth-scroll anchors, theme toggle button
2. **Hero** — seal/hero image, "Mechanical Heart" tagline, scroll CTA
3. **About** — mission/vision, values, stat highlights (from `about.md`)
4. **What We Do** — 5–6 cards (blend — see decisions)
5. **Recent Events** — `src/assets/images/img (1..9).jpg` gallery + hand-rolled lightbox
6. **How to Join** — CTA, Facebook/Instagram/email links, QR code image
7. **Footer** — contact, socials, copyright
- ~~Upcoming Events~~ — omitted

### Phase 2 — Tangram Puzzle Wheel
- `src/data/puzzles.js` — 12 entries (id, name, puzzleImage, solutionImage)
- **Wheel** — spinning wheel with 12 slots, spin-to-select animation, click-to-select
- **PuzzleDisplay** — puzzle (left) | solution (right), fade-in reveal
- **Timer** — Start/Stop/Reset, MM:SS, reset on new puzzle
- Mobile-friendly touch interactions
- Placeholders at `src/assets/tangram/` (`puzzle-01..12.svg`, `solution-01..12.svg`); drop real images over these exact filenames to swap

### Phase 3 — Polish, Responsive & Dark Mode ✅ done
- Mobile-first responsive pass on every section
- Accessibility: skip link, lightbox focus trap + focus restore, wheel aria (busy/status announcements), timer announcements, sr-only util
- Dark-mode toggle fully wired + persisted (localStorage)
- Micro-interactions: entrance choreography, hover states, gears, scroll-progress hairline, smooth wheel spin (reduced-motion safe)

### Phase 4 — Deployment (GitHub Pages) ✅ done
- `homepage` = `https://kirakage88.github.io/jpsme/`, `base: '/jpsme/'` in `vite.config.js`
- `.github/workflows/deploy.yml` (build + deploy on push to main) + `npm run deploy` (gh-pages fallback)
- `public/.nojekyll`, relative favicon href
- README rewritten with setup, content update, and deploy instructions

## Commands

- `npm run dev` — dev server (HMR)
- `npm run build` — build to `dist/`
- `npm run lint` — ESLint
- No tests, no typecheck (plain JSX)