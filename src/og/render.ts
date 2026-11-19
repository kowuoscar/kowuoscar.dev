// Renders the share image (og:image) for one locale: card.ts → SVG (satori) → PNG (resvg).
// PNG because LinkedIn and most link previews don't take SVG.
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { Resvg } from '@resvg/resvg-js';
import satori, { type SatoriOptions } from 'satori';
import { MONO, ogCard, SANS } from './card.ts';
import { OG_SIZE } from './size.ts';
import type { Locale } from '../i18n/ui.ts';

// The site's own typefaces, as static WOFF: satori doesn't read the variable WOFF2 the site ships.
const require = createRequire(import.meta.url);
const font = (pkg: string, file: string) => readFileSync(require.resolve(`${pkg}/files/${file}`));
const fonts: SatoriOptions['fonts'] = [
  { name: SANS, weight: 700, style: 'normal', data: font('@fontsource/space-grotesk', 'space-grotesk-latin-700-normal.woff') },
  { name: MONO, weight: 400, style: 'normal', data: font('@fontsource/jetbrains-mono', 'jetbrains-mono-latin-400-normal.woff') },
  { name: MONO, weight: 700, style: 'normal', data: font('@fontsource/jetbrains-mono', 'jetbrains-mono-latin-700-normal.woff') },
];

export async function renderOg(locale: Locale): Promise<Buffer> {
  // satori types its input as a React node; the hand-written tree has the same shape.
  const svg = await satori(ogCard(locale) as Parameters<typeof satori>[0], { ...OG_SIZE, fonts });
  return new Resvg(svg, { fitTo: { mode: 'width', value: OG_SIZE.width } }).render().asPng();
}
