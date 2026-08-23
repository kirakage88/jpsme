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
- No React Router — single-page scroll with nav anchors (QR code is a plain link to the site)
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
- `src/data/puzzles.json` — 6–10 entries (id, name, puzzleImage, solutionImage)
- **Wheel** — spinning wheel, slots, spin-to-select animation, click-to-reveal
- **PuzzleDisplay** — puzzle (left) | solution (right), fade-in reveal
- **Timer** — Start/Stop, MM:SS, reset
- Mobile-friendly touch interactions
- Wire data to user-provided images at `src/assets/tangram/`; neutral placeholder until files arrive

### Phase 3 — Polish, Responsive & Dark Mode
- Mobile-first responsive pass on every section
- Accessibility: semantic HTML, ARIA labels, keyboard nav (lightbox + wheel), focus styles
- Dark-mode toggle fully wired + persisted (localStorage)
- Micro-interactions: scroll-reveal, hover states, smooth wheel spin

### Phase 4 — Deployment (deferred; do when requested)
- `homepage` in `package.json`, `base: '/<repo>/'` in `vite.config.js`
- `.github/workflows/deploy.yml` (build + deploy on push to main) and/or `gh-pages` + `npm run deploy`
- Update `README.md` with setup + deploy instructions

## Commands

- `npm run dev` — dev server (HMR)
- `npm run build` — build to `dist/`
- `npm run lint` — ESLint
- No tests, no typecheck (plain JSX)