## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project notes

- Read `docs/decisions.md` (settled choices) and `docs/content.md` (validated copy) before changing the site.
- Backlog lives in Linear: project **Portfolio** (P-PRD-2, team Kowu Labs). Tickets labelled `content` need input from Oscar and block the ticket that integrates it.
- Copy lives in `src/data/profile.ts` — keep it in sync with `docs/content.md`.
- Every page exists in EN (`src/pages/*`) and FR (`src/pages/fr/*`); both render a shared view from `src/views/`.
- The CV PDFs are generated, not hand-made: `pnpm build` first renders `src/cv/cv.typ` (Typst) from the profile data into `public/cv/` (gitignored), then runs `astro build`; `pnpm cv` does the CV step alone. Edit copy in `src/data/profile.ts`, layout in `cv.typ`. Tests: `pnpm test`.
- Never commit `*.docx` CV sources (they contain private contact details).
