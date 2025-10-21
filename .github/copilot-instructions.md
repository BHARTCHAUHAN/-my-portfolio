# Portfolio Project - AI Coding Agent Instructions

## Project Overview
A single-page React portfolio website for a Data Analyst, featuring n8n-inspired and Canva-style design patterns. Built with Create React App (v5.0.1), React 19.2, and Bootstrap 5.3.2.

## Architecture & Structure

### Single-Page Application Pattern
- **No React Router navigation**: Despite `react-router-dom` being installed, this is a pure single-page app using anchor links (`#home`, `#about`, etc.)
- **Main entry point**: `src/pages/Home.jsx` imports and renders all page components as sections
- **Navigation**: `src/components/Header.jsx` uses hash-based navigation with scroll-spy active state tracking

### Component Organization
```
src/
├── App.js              # Root component with AOS initialization
├── components/         # Reusable components (Header, Footer, Hero, etc.)
├── pages/             # Section components treated as "pages" (About, Skills, Projects, Contact)
└── data/              # JSON data files (projects.json)
```

## Key Patterns & Conventions

### Styling Conventions
1. **Dual Design Systems**: CSS classes use two prefixes
   - `*-canva-*` for Canva-inspired sections (Hero, Projects, Contact, Experience)
   - `*-n8n-*` for n8n-inspired sections (Skills, Footer, legacy About/ProjectCard)
   - Example: `.hero-canva`, `.skills-n8n-header`, `.footer-n8n`

2. **CSS Organization**: All styles in single `src/port.css` file (~5500 lines)
   - Gradient backgrounds: `linear-gradient(135deg, #0f0f1c 0%, #1a1625 50%, #0f0f1c 100%)`
   - Purple accent color: `#a78bfa` (light purple) for highlights
   - Dark theme base: `#0f0f1c` background

### Animation Pattern (AOS)
**Initialized in App.js** with these settings:
```javascript
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});
```

**Consistent animation attributes** across all components:
- `data-aos="fade-up"` for main elements
- `data-aos="fade-right"` / `data-aos="fade-left"` for split content
- `data-aos-delay="{100 + index * 100}"` for staggered animations (increments of 80-120ms)
- Delays calculated as strings: `data-aos-delay={String(100 + index * 100)}`

### External Integrations
1. **Formspree Contact Form**: `src/pages/Contact.jsx`
   - Endpoint: `https://formspree.io/f/xrbagaja`
   - Client-side validation before submission
   - Success/error state management

2. **External Icons**: Boxicons CDN loaded in `public/index.html`
   - Usage: `<i className="bx bx-icon-name"></i>`
   - Common icons: `bxl-github`, `bxl-linkedin`, `bx-envelope`, `bxs-data`

## Data Management

### Projects Data (`src/data/projects.json`)
Each project object requires:
```json
{
  "id": 1,
  "number": "01",
  "title": "PROJECT TITLE",
  "description": "Detailed description...",
  "tools": ["Tool1", "Tool2"],
  "analysis": ["Method1", "Method2"],
  "links": {
    "fullDeck": "URL",
    "colab": "URL",
    "tableau": "URL"
  },
  "stack": ["Python", "SQL"]
}
```

**Important**: The `links` object keys map to display labels in `Projects.jsx`:
- `fullDeck` → "Full Deck"
- `tableau` → "Tableau Dashboard"
- `colab` → "Google Collab"
- `lookerCohort` → "Google Looker (Cohort Dashboard)"

## Development Workflow

### Standard Commands
```bash
npm start    # Dev server on localhost:3000
npm test     # Jest test runner (interactive watch mode)
npm run build # Production build to /build folder
```

### Testing Setup
- Testing Library: `@testing-library/react` v16.3.0 with React 19.2 compatibility
- DOM assertions: `@testing-library/jest-dom` v6.9.1
- User interactions: `@testing-library/user-event` v13.5.0

## Critical Details

### Scroll-Spy Navigation
`Header.jsx` tracks active section via scroll position:
- Checks if section's `getBoundingClientRect().top <= 100` and `bottom >= 100`
- Updates active class dynamically
- Header changes appearance on scroll (adds `.scrolled` class at 50px)

### Component Duplication
**Note**: There are duplicate components in the codebase:
- `src/components/About.jsx` (unused)
- `src/pages/About.jsx` (active, used in Home.jsx)

Always edit files in `src/pages/` when modifying section content.

### Resume Download
- Resume file: `public/Bhart_Chauhan_Data_Analyst_Resume.pdf`
- Download button in Header: `<a href="Bhart_Chauhan_Data_Analyst_Resume.pdf" download>`
- Relies on file being in `/public` folder (served at root in production)

## SEO & Meta Tags
`public/index.html` includes comprehensive meta tags:
- Open Graph for Facebook sharing
- Twitter Card metadata
- Keywords: "Data Analyst, Python, SQL, Power BI, Excel, Data Visualization"
- Custom domain: bhartchauhan.me (deployed on Vercel)

## When Making Changes

1. **Styling**: All CSS goes in `src/port.css` - follow existing `-canva-*` or `-n8n-*` naming
2. **Animations**: Always use AOS attributes; maintain staggered delay pattern for lists
3. **New Sections**: Add to `src/pages/Home.jsx` with unique `id` matching Header nav links
4. **Icons**: Use Boxicons; verify icon name at boxicons.com before adding
5. **Projects**: Update `src/data/projects.json` - ensure `links` keys match rendering logic in `Projects.jsx`
