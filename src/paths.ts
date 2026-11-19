import { join } from 'node:path';

/**
 * The site's public/ directory, where the build-time generators (CV, share images) write and
 * the availability checks look. Resolved from the project root (pnpm scripts and astro build run
 * there): import.meta.url would point into the bundled output at build time.
 */
export const PUBLIC_DIR = join(process.cwd(), 'public');
