import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { writeOgImages } from './write.ts';
import { profile } from '../data/profile.ts';
import { locales } from '../i18n/ui.ts';

describe('writeOgImages', () => {
  let dir: string;
  beforeEach(() => {
    dir = mkdtempSync(join(tmpdir(), 'og-'));
  });
  afterEach(() => rmSync(dir, { recursive: true, force: true }));

  it('writes one PNG per locale at the path the pages point to', async () => {
    const written = await writeOgImages(dir);

    expect(written.map((w) => w.locale)).toEqual([...locales]);
    for (const { locale, file } of written) {
      expect(file).toBe(join(dir, profile.og[locale]));
      expect(readFileSync(file).subarray(1, 4).toString()).toBe('PNG');
    }
  });
});
