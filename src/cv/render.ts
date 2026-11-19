// Compiles cv.typ into a PDF for one locale, feeding it the profile data through `sys.inputs`.
import { readFileSync } from 'node:fs';
import { NodeCompiler } from '@myriaddreamin/typst-ts-node-compiler';
import { cvData } from './data.ts';
import type { Locale } from '../i18n/ui.ts';

const template = readFileSync(new URL('./cv.typ', import.meta.url), 'utf8');
// Fonts: only the ones embedded in the compiler, so local and CI renders are identical.
// One compiler for every render: data changes per call through `inputs`.
const compiler = NodeCompiler.create();

export interface RenderedCv {
  pdf: Buffer;
  pages: number;
  title: string | null;
  authors: string[] | null;
}

export function renderCv(locale: Locale): RenderedCv {
  const compiled = compiler.compile({ mainFileContent: template, inputs: { data: JSON.stringify(cvData(locale)) } });
  const doc = compiled.result;
  if (!doc) {
    const diagnostics = compiled.takeError()?.shortDiagnostics ?? [];
    throw new Error(`cv.typ failed to compile (${locale}): ${JSON.stringify(diagnostics, null, 2)}`);
  }
  if (doc.numOfPages < 1) throw new Error(`cv.typ rendered an empty document (${locale})`);
  return { pdf: compiler.pdf(doc), pages: doc.numOfPages, title: doc.title, authors: doc.authors };
}
