# kowuoscar.dev — design decisions

Settled during the grilling session of 2026-11-11 → 2026-11-12.

## Purpose
- Personal portfolio. **v1 = online identity card** to share quickly with recruiters, managers and colleagues (no projects yet).
- Not job-hunting yet: lay solid foundations, evolve later (blog, projects).

## Content (v1)
> Final copy lives in [`content.md`](content.md).
- Pages: Home (identity card + 4-line experience teaser) · **Experience** (dedicated page, Accenture omitted) · Blog (soon) · Projects (soon).
- Hero adds a mono stats line `8+ years · 15+ teams served · CKA`; CKA sticker links to the Credly badge.
- Downloadable CV = reworked **web** version (no phone, hello@kowuoscar.dev, typos fixed, title aligned with LinkedIn, CKA added, Accenture kept as one line), EN + FR. Owner lays it out in Word and exports PDFs. The original `.docx` must never be committed (gitignored).
- Single home page = the identity card: name, title, photo, 2–3 sentence bio, grouped skills, links (LinkedIn, GitHub, email alias), CV download.
- Title: *Infrastructure Software Engineer · Go, Kubernetes Operators · Platform Engineering | CKA*.
- No contact section / no form — links are enough.
- Photo and region shown; email via a dedicated alias.
- Bio & skills: Claude drafts from LinkedIn summary, owner corrects.
- CV: one PDF per language (EN/FR), served per page language. Existing PDFs first; Typst-in-CI maybe later.
- Later: blog (tags, RSS, ToC), projects. Search and season palettes are later bonuses.

## i18n
- UI in EN (default, at `/`) and FR (under `/fr/`), visible switcher, **no** auto-redirect.
- Blog posts in English only; FR blog listing shows EN posts with an "EN" label.

## Visual direction
- Neobrutalist, inspired by astro-seasons (AGPL-3.0 — reference only, **no code copied**) and Brutal (MIT — snippets OK with attribution).
- Winning layout: **variant A "Sticker card"** — centred single column, hero (tilted photo + CKA sticker), About card, Skills card; offset shadows on cards and buttons only.
- Background: dotted pattern (from variant C) drifting diagonally bottom-left → top-right; disabled under `prefers-reduced-motion`.
- Colour duo: **1 · Lime / Violet** — accent `#C6F432`, accent2 `#8B5CF6` (dark: `#A78BFA`). Light bg `#F7F5EE`, dark bg `#141318`.
- Fonts: Space Grotesk (text/headings) + JetBrains Mono (labels, tags, details).
- Light/dark mode with remembered choice.
- Prototypes: `prototype/home-variants.prototype.html` (layout A/B/C) and `prototype/home-variant-a-colors.prototype.html` (colour duos). To archive on a throwaway branch, not main.

## Stack & infra
- Astro (latest, from an empty minimal template — not a theme fork), Tailwind CSS, pnpm.
- Public GitHub repo `kowuoscar.dev`.
- Hosting: Cloudflare Pages via its Git integration (build + preview per PR). No Terraform for now.
- GitHub Actions for CI only: `astro check`, build, lychee link check. Renovate/Dependabot for updates.
- Domain `kowuoscar.dev` (bought) served at apex; `www` redirects to apex via Cloudflare Redirect Rule.
- Analytics: Cloudflare Web Analytics (cookieless).
- `kowulabs.com` kept for separate labs/projects.
