// Writes every locale's CV PDF under a public directory, at the URL path the site links to.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { profile } from '../data/profile.ts';
import { locales, type Locale } from '../i18n/ui.ts';
import { renderCv } from './render.ts';

export interface WrittenCv {
  locale: Locale;
  file: string;
  pages: number;
}

export function writeCvs(publicDir: string): WrittenCv[] {
  // Render every locale before writing any: a failure leaves the previous set untouched, never a mixed one.
  const rendered = locales.map((locale) => ({ locale, ...renderCv(locale) }));
  return rendered.map(({ locale, pdf, pages }) => {
    const file = join(publicDir, profile.cv[locale]);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, pdf);
    return { locale, file, pages };
  });
}
