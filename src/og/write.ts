// Writes every locale's share image under a public directory, at the URL path the pages point to.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { profile } from '../data/profile.ts';
import { locales, type Locale } from '../i18n/ui.ts';
import { renderOg } from './render.ts';

export interface WrittenOg {
  locale: Locale;
  file: string;
}

export async function writeOgImages(publicDir: string): Promise<WrittenOg[]> {
  // Render every locale before writing any, as for the CVs: never a mixed set.
  const rendered = await Promise.all(locales.map(async (locale) => ({ locale, png: await renderOg(locale) })));
  return rendered.map(({ locale, png }) => {
    const file = join(publicDir, profile.og[locale]);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, png);
    return { locale, file };
  });
}
