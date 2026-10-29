# Portfolio

Personal portfolio website (started 2026-10-29) that Eben links from their resume. One page listing every project.
Completely separate from the projects it describes: never modify them from here, only read them for facts.

## Files
- `src/page.html`: the page (content only: title, style, markup, script; no doctype/html/head/body).
  Projects and contact links are the `PROJECTS` and `CONTACT` arrays in its script. Empty contact links are hidden.
- `node build.mjs` wraps it into `site/index.html` (a full document). Deploy the `site/` folder to any static host.
- `src/img/*.webp`: 960×600 project screenshots (Playwright captures, cropped with Pillow; pixel art kept unscaled).
- Private preview on claude.ai: https://claude.ai/artifact/HE8QAa5ZsbiYsVsToWEWh3. To republish, copy `src/page.html`
  and `src/img/` into a scratchpad folder and publish from there with that `url`, `root` and the `img/*` files.

## Design basis (researched 2026-10-29)
Modelled on the most-cited hired-developer portfolio pattern (sticky left intro + nav, scrolling right column) and
hiring-manager checklists: role, stack and availability above the fold; projects in the first two sections; each
project shows a screenshot, problem / what I built / result, one real number, stack, and live/code links; email in
the intro and footer; fast (no framework); works on phones.

## Rules
- Every claim and number on a project must come from that project's own files (README, docs, code); no padding.
- Not public yet: deploying it or adding contact details (email, LinkedIn) needs Eben's go-ahead.

## Projects described (read-only sources)
- Who Owns Your Hospital?: `C:\Users\Eben\PE Hospital Map` (live at whoownsyourhospital.site)
- Scrape Anything: `C:\Users\Eben\web-scraper`
- Market Research Swarm: `C:\Users\Eben\projects\market-swarm`
- Clown Show: `C:\Users\Eben\projects\clown-office`
- Ghost//Grid: `C:\Users\Eben\2D autoclicker`
- Gnome Builders: `C:\Users\Eben\My project`
- Western Friendslop: `C:\Users\Eben\Western Friendslop`

## Environment
Windows 10, PowerShell 5.1. Git at `C:\Program Files\Git\cmd`. Node is installed.
