# SuriUI — Engineering Case Study

Static site documenting the design, architecture, and development process
of [@suribef/suri-ui](https://www.npmjs.com/package/@suribef/suri-ui),
a React component library built from scratch.

Built with [Astro](https://astro.build) + MDX. Deployed to GitHub Pages.

**Live site:** https://suribef.github.io/suri-ui

## Stack

- Astro 7 (static output)
- React 19 (component demos via `client:load`)
- `@suribef/suri-ui` — the library itself, used live in the demos
- CSS custom properties (no Tailwind, no CSS-in-JS)

## Local dev

```bash
npm install
npm run dev        
Deploy
npm run deploy     # build + push dist/ to gh-pages branch
Requires the gh-pages remote branch to exist and GitHub Pages
configured to serve from it.

Structure
src/
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # One file per page section
│   └── ui/           # LiveDemo.tsx — React island with SuriUI components
├── styles/           # tokens.css + global.css
└── pages/
    └── index.astro   # Single page