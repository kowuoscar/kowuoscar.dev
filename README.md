# kowuoscar.dev

Personal site of Oscar Kowu — Infrastructure Software Engineer (Go, Kubernetes operators, platform engineering).

Built with [Astro](https://astro.build) and Tailwind CSS, deployed on Cloudflare Pages.

## Develop

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm check    # type-check .astro / .ts files
pnpm build    # static output in dist/
```

## Layout

| Path | What |
|---|---|
| `src/data/profile.ts` | All profile copy (bio, skills, experience), EN + FR |
| `src/i18n/ui.ts` | UI strings and locale path helpers (EN at `/`, FR under `/fr/`) |
| `src/views/` | Page bodies, shared by both locales |
| `src/pages/` | Thin routes: `index`, `experience`, and their `fr/` twins |
| `src/styles/global.css` | Colour tokens (Lime / Violet), neobrutalist primitives, animated dots |
| `public/cv/` | Drop `oscar-kowu-cv-en.pdf` / `oscar-kowu-cv-fr.pdf` here to enable the CV button |
| `docs/` | Design decisions and validated copy |

## Deploy

Cloudflare Pages Git integration: build command `pnpm build`, output directory `dist`.
Every push to `main` deploys production; every PR gets a preview URL. GitHub Actions only runs checks.
