// Generates public/cv/oscar-kowu-cv-{en,fr}.pdf from the site's profile data.
// Run with `pnpm cv`. The PDFs are build outputs: gitignored, never committed.
import { mkdirSync, writeFileSync } from 'node:fs';
import { profile } from '../src/data/profile.ts';
import { locales } from '../src/i18n/ui.ts';
import { renderCv } from '../src/cv/render.ts';

const publicDir = new URL('../public', import.meta.url);

for (const locale of locales) {
  const out = new URL(`../public${profile.cv[locale]}`, import.meta.url);
  mkdirSync(new URL('.', out), { recursive: true });
  const { pdf, pages } = renderCv(locale);
  writeFileSync(out, pdf);
  console.log(`cv: ${out.pathname.replace(publicDir.pathname, 'public')} (${locale}, ${pages} page${pages > 1 ? 's' : ''})`);
}
