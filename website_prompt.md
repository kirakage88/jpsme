# JPSME-XUC Organization Tour Website Prompt

**Project:** Build a React-based website for JPSME-XUC (Junior Philippine Society of Mechanical Engineers - Xavier University Chapter) that serves as both a permanent org website AND an interactive tour experience.

**Timeline:** Few hours to completion  
**Tech Stack:** React (18+) + React Router, GitHub Pages deployment  
**Audience:** 50-200 visitors (org members + prospective members)  
**Duration:** Permanent website (not event-limited)

---

## 📋 Site Structure & Content Sections

The website should be a **single-page scrollable experience** with the following sections:

### 1. Hero Section
- Large, eye-catching banner with ACES logo
- Tagline/mission statement (brief, 1-2 lines)
- Scroll-down call-to-action or navigation hint
- Background: photo or solid color gradient (per design brief)

### 2. About ACES
- 2-3 paragraph description of what ACES is and does
- Key values or mission (3-4 bullet points)
- Quick stat/highlight (e.g., "200+ members," "Est. XXXX")

### 3. What We Do / Key Activities
- 4-6 cards or icons showing main activities (e.g., "Mentorship," "Workshops," "Community," "Outreach")
- Each with short description (1-2 sentences)

### 4. Recent Events / Photo Gallery
- Grid of 8-12 photos from past events/meetings
- Lightbox or modal view on click
- Placeholder images acceptable if real photos unavailable

### 5. Upcoming Events / News
- 2-3 upcoming events or announcements
- Date, time, brief description
- Can be hardcoded or fetched from a JSON file (agent's choice)

### 6. The Tangram Puzzle Wheel (★ Interactive Feature ★)
*See detailed specification below*

### 7. How to Join
- Call-to-action section with prominent button
- Brief eligibility or welcome text
- Links to: Discord, Instagram, email contact, interest form signup (Google Form or similar)

### 8. Footer
- Contact info (email, phone if applicable)
- Social media links (icons)
- Copyright / brief org info

---

## 🎡 Tangram Puzzle Wheel (Interactive Mini-App)

**Purpose:** Central interactive feature for the tour experience.

### Functional Requirements:

**Wheel Component:**
- Visual spinning wheel with 6-10 puzzle slots
- Each slot contains a tangram puzzle
- Clicking a slot reveals the puzzle details below (or modal)

**Puzzle Display:**
- **Left side:** Show the tangram puzzle image (black and white shapes)
- **Right side:** Show the solution image (same tangram solved/completed)
- **Timer:** Stopwatch starting at 0:00, user clicks "start" to begin, "stop" to end
- Display format: MM:SS

**Puzzle Data Structure:**
```
[
  {
    id: 1,
    name: "Puzzle 1",
    puzzleImage: "url or path to puzzle image",
    solutionImage: "url or path to solution image"
  },
  ...
]
```
- 6-10 puzzles minimum (agent can use placeholder images initially)

**UX Flow:**
1. User lands on tangram section / clicks into it
2. Spins wheel or selects a puzzle
3. Puzzle and solution display side-by-side
4. Timer starts when user clicks "Start Solving"
5. User attempts to solve (on paper, mentally, etc.)
6. Clicks "Stop" to record time
7. Can attempt another puzzle or reset wheel

**Styling:**
- Responsive (mobile & desktop friendly)
- Animations: smooth wheel spin, fade-in/fade-out puzzle reveal
- Colors from design brief

---

## 🔗 QR Code Integration

**Implementation:**
- QR codes can be placed at physical tour stops
- Each QR code links to a specific section of the site (e.g., `/puzzles`, `/join`, `/events`)
- OR QR codes can link to individual puzzle challenges
- Site should handle deep links / hash routing for these

**Deployment:**
- URLs must work when site is live on GitHub Pages
- Format: `yoursitename.github.io/#/section` or `/section`

---

## 🎨 Design & Styling

**Design Brief:** The user will provide a separate design brief document with:
- Brand colors (primary, secondary, accents)
- Typography (heading font, body font)
- Logo and any additional assets
- Visual tone/vibe description

**Requirements:**
- Use the provided design brief colors and fonts
- Responsive design (mobile-first, works on all screen sizes)
- Accessibility: semantic HTML, ARIA labels where needed
- Smooth scrolling between sections
- Polished, professional appearance

**Optional Enhancements:**
- Dark mode toggle (if design brief indicates)
- Animations / micro-interactions
- Scroll-based parallax or reveal effects

---

## 🚀 Technical Requirements

**Framework & Setup:**
- React 18+ (functional components, hooks)
- React Router v6 (if multi-page routing needed)
- Plain CSS, Tailwind CSS, or styled-components (agent's preference, mention in code)
- No external UI libraries unless necessary (keep it lightweight)

**Deployment:**
- Must be deployable to GitHub Pages
- Include `.github/workflows/deploy.yml` (or setup instructions) for automatic deployment
- Ensure `homepage` is set in `package.json` correctly

**File Structure (suggested):**
```
src/
├── components/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Events.jsx
│   ├── TangramWheel.jsx
│   ├── JoinSection.jsx
│   └── Footer.jsx
├── data/
│   └── puzzles.json (tangram puzzle data)
├── styles/
│   └── styles.css (or use CSS-in-JS)
├── App.jsx
└── index.js
```

**Performance:**
- Optimize images (compress before adding to repo)
- Lazy load images if needed
- Keep bundle size reasonable for fast load times

---

## 📦 Deliverables

1. **Fully functional React app** with all sections above
2. **Tangram Wheel mini-app** fully interactive and styled
3. **GitHub Pages ready** — deployable with `npm run deploy` or similar
4. **README.md** with:
   - Setup instructions
   - How to run locally
   - How to update content (events, photos, puzzles)
   - Deployment instructions
5. **Responsive design** tested on mobile & desktop
6. **Clean, commented code** for future maintenance

---

## 📝 Content Placeholders

If real content is unavailable, use:
- **Placeholder text:** Lorem ipsum or org-relevant dummy text
- **Images:** Free stock photos (e.g., Unsplash, Pexels)
- **Tangram puzzles:** Generic tangram images (can be replaced later)
- **Events:** Dummy event data with realistic formatting

---

## 🎯 Nice-to-Haves (Optional)

- Analytics integration (Google Analytics)
- Form backend for interest signups
- Event countdown timer
- Member testimonials section
- Photo carousel/slider
- Contact form with email notification

---

## ⚠️ Important Notes

- **Design Brief:** Kira will provide a filled design brief with brand colors, fonts, logo, and vibe. Use this as the source of truth for all styling.
- **Puzzles Data:** Agent should set up a simple `puzzles.json` file so puzzles can be easily updated without code changes.
- **Scalability:** Keep code modular so new sections or features can be added later.
- **Mobile First:** Ensure every interaction works on touch/mobile screens (especially the tangram wheel).

---

## 📧 Questions for Agent (if needed)

- Should puzzles be shuffled randomly on each visit?
- Should timer results be stored/tracked (localStorage)?
- Do you want a leaderboard of best times?
- Should the site have a "solo mode" vs "group tour mode"?

---

**Ready to build? Attach the filled design brief and any existing assets, then start!**
