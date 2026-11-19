import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { profile } from '../data/profile.ts';
import type { Locale } from '../i18n/ui.ts';

/**
 * The site's public/ directory, shared by the CV generator and the availability check.
 * Resolved from the project root (pnpm scripts and astro build run there): import.meta.url
 * would point into the bundled output at build time.
 */
export const PUBLIC_DIR = join(process.cwd(), 'public');

/** Build-time check: links to the CV stay off until the PDF exists (`pnpm build` generates it first). */
export function isCvAvailable(locale: Locale): boolean {
  return existsSync(join(PUBLIC_DIR, profile.cv[locale]));
}
