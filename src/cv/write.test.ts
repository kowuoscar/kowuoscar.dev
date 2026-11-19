import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { writeCvs } from './write.ts';
import { profile } from '../data/profile.ts';
import { locales } from '../i18n/ui.ts';

describe('writeCvs', () => {
  let dir: string;
  beforeEach(() => {
    dir = mkdtempSync(join(tmpdir(), 'cv-'));
  });
  afterEach(() => rmSync(dir, { recursive: true, force: true }));

  it('writes one PDF per locale at the path the site links to', () => {
    const written = writeCvs(dir);

    expect(written.map((w) => w.locale)).toEqual([...locales]);
    for (const { locale, file } of written) {
      expect(file).toBe(join(dir, profile.cv[locale]));
      expect(readFileSync(file).subarray(0, 5).toString()).toBe('%PDF-');
    }
  });
});
