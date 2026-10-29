# Eben Butts: portfolio

Live at **https://thisguyhere123.github.io/portfolio/**

Software engineer focused on AI and security. The site covers:
- a multi-agent LLM research pipeline hardened against prompt injection
- an SSRF-safe web-scraping service
- a hardened public-data website
- a few games

## Editing
- Content and styles: `src/page.html` (projects and contact links are arrays in its script).
- Screenshots: `src/img/`.
- Build: `node build.mjs` writes `index.html` and `img/` at the repo root, which GitHub Pages serves.

No framework and no dependencies: one HTML file plus images.
