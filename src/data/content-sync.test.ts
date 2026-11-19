// AGENTS.md: "Copy lives in src/data/profile.ts — keep it in sync with docs/content.md."
// Scope: the experience highlights (site and CV), in both languages. Other copy (bio, skills,
// headers with periods and company descriptions…) is not checked here.
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { experience } from './profile.ts';
import { locales } from '../i18n/ui.ts';

const doc = readFileSync(new URL('../../docs/content.md', import.meta.url), 'utf8').replaceAll('\r\n', '\n');

/** The doc types plain characters, the site may use typographic ones (’, non-breaking spaces before : ; %). */
const normalize = (s: string) => s.replaceAll('’', "'").replace(/[\u00a0\u202f]/g, ' ');

/** Bullet lists of each role under "## Experience — detailed (<LANG>…", in document order. */
function documentedHighlights(lang: string): string[][] {
  const start = doc.indexOf(`## Experience — detailed (${lang.toUpperCase()}`);
  if (start < 0) throw new Error(`No detailed experience section for ${lang} in docs/content.md`);
  const next = doc.indexOf('\n## ', start + 1);
  const lines = doc.slice(start, next < 0 ? undefined : next).split('\n');

  const roles: string[][] = [];
  for (const line of lines) {
    if (line.startsWith('**')) roles.push([]);
    else if (line.startsWith('- ') && roles.length) roles.at(-1)!.push(normalize(line.slice(2)));
  }
  return roles.filter((bullets) => bullets.length > 0);
}

describe('docs/content.md and profile.ts', () => {
  it.each(locales)('list the same %s experience highlights, role by role', (locale) => {
    expect(documentedHighlights(locale)).toEqual(experience.map((role) => role.highlights[locale].map(normalize)));
  });

  it.each(locales)('marks the %s detailed experience as validated', (locale) => {
    const heading = doc.split('\n').find((l) => l.startsWith(`## Experience — detailed (${locale.toUpperCase()}`));
    expect(heading).toMatch(/\bvalidated\b/);
    expect(heading).not.toMatch(/draft|to validate/i);
  });
});
