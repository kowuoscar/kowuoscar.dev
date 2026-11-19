import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { profile } from '../data/profile.ts';
import type { Locale } from '../i18n/ui.ts';
import { PUBLIC_DIR } from '../paths.ts';

/** Build-time check: links to the CV stay off until the PDF exists (`pnpm build` generates it first). */
export function isCvAvailable(locale: Locale): boolean {
  return existsSync(join(PUBLIC_DIR, profile.cv[locale]));
}
