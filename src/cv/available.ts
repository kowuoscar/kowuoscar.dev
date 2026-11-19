import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { profile } from '../data/profile.ts';
import type { Locale } from '../i18n/ui.ts';

/**
 * Build-time check: links to the CV stay off until `pnpm cv` has generated the PDF into public/cv/.
 * Resolved from the project root: import.meta.url points into the bundled output at build time.
 */
export function isCvAvailable(locale: Locale): boolean {
  return existsSync(join(process.cwd(), 'public', profile.cv[locale]));
}
