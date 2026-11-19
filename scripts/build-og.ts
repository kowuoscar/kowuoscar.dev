// Generates public/og/oscar-kowu-{en,fr}.png, the share images (og:image), from the site's profile data.
// Runs before `astro build` (see package.json "build"), and alone with `pnpm og`.
// The PNGs are build outputs: gitignored, never committed.
import { relative } from 'node:path';
import { PUBLIC_DIR } from '../src/cv/available.ts';
import { writeOgImages } from '../src/og/write.ts';

for (const { locale, file } of await writeOgImages(PUBLIC_DIR)) {
  console.log(`og: ${relative(process.cwd(), file)} (${locale})`);
}
