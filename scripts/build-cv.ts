// Generates public/cv/oscar-kowu-cv-{en,fr}.pdf from the site's profile data.
// Runs before `astro build` (see package.json "build"), and alone with `pnpm cv`.
// The PDFs are build outputs: gitignored, never committed.
import { relative } from 'node:path';
import { PUBLIC_DIR } from '../src/cv/available.ts';
import { writeCvs } from '../src/cv/write.ts';

for (const { locale, file, pages } of writeCvs(PUBLIC_DIR)) {
  console.log(`cv: ${relative(process.cwd(), file)} (${locale}, ${pages} page${pages === 1 ? '' : 's'})`);
}
