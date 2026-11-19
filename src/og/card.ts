// The share image's layout (og:image), as the element tree satori lays out: a still of the hero,
// in the site's Lime/Violet look. Copy comes from src/data/profile.ts — edit it there.
import { profile } from '../data/profile.ts';
import type { Locale } from '../i18n/ui.ts';
import { OG_SIZE } from './size.ts';

/** Satori's element shape: what JSX would produce, written by hand to keep the build JSX-free. */
export interface OgNode {
  type: string;
  props: { style?: Record<string, string | number>; children?: OgNode | string | (OgNode | string)[]; [attr: string]: unknown };
}

// Light-theme tokens of src/styles/global.css.
const BG = '#F7F5EE';
const INK = '#121212';
const CARD = '#FFFFFF';
const MUTED = '#555555';
const LIME = '#C6F432';
const VIOLET = '#8B5CF6';

const INSET = 44;
const SHADOW = 14;

/** Font family names: render.ts registers the files under these same names. */
export const SANS = 'Space Grotesk';
export const MONO = 'JetBrains Mono';

const el = (type: string, style: OgNode['props']['style'], children?: OgNode['props']['children']): OgNode => ({
  type,
  props: { style, children },
});
const div = (style: OgNode['props']['style'], children?: OgNode['props']['children']) =>
  el('div', { display: 'flex', ...style }, children);

/** The tick of the site's "CKA ✓" sticker, drawn: the fonts' latin subset has no ✓ glyph. */
const tick = (size: number): OgNode => ({
  type: 'svg',
  props: {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    children: {
      type: 'path',
      props: { d: 'M4 12.5l5 5L20 6.5', fill: 'none', stroke: INK, 'stroke-width': 3.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' },
    },
  },
});

const photo = div(
  {
    position: 'relative',
    width: 230,
    height: 230,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VIOLET,
    border: `6px solid ${INK}`,
    boxShadow: `10px 10px 0 ${INK}`,
    transform: 'rotate(-3deg)',
    color: CARD,
    fontFamily: SANS,
    fontWeight: 700,
    fontSize: 100,
  },
  [
    profile.initials,
    div(
      {
        position: 'absolute',
        right: -36,
        bottom: -26,
        alignItems: 'center',
        gap: 6,
        padding: '8px 18px',
        borderRadius: 999,
        backgroundColor: LIME,
        border: `5px solid ${INK}`,
        transform: 'rotate(8deg)',
        color: INK,
        fontFamily: MONO,
        fontWeight: 700,
        fontSize: 26,
      },
      ['CKA', tick(24)],
    ),
  ],
);

const mutedMono = (text: string, style: OgNode['props']['style']) =>
  div({ fontFamily: MONO, color: MUTED, whiteSpace: 'nowrap', ...style }, text);

const host = new URL(profile.links.website).host;

/** og:image:alt — what the image shows, from the same copy, so it can't drift from it. */
export function ogAlt(locale: Locale): string {
  return `${profile.name}, ${profile.role}. ${profile.tagline}. ${profile.stats[locale]}. ${host}`;
}

export function ogCard(locale: Locale): OgNode {
  return div(
    {
      width: OG_SIZE.width,
      height: OG_SIZE.height,
      position: 'relative',
      backgroundColor: BG,
    },
    div(
      {
        // Explicit box, border-box: satori sizes content-box by default, so padding and border would overflow.
        boxSizing: 'border-box',
        position: 'absolute',
        left: INSET,
        top: INSET,
        width: OG_SIZE.width - 2 * INSET - SHADOW,
        height: OG_SIZE.height - 2 * INSET - SHADOW,
        alignItems: 'center',
        gap: 60,
        padding: '0 48px 0 64px',
        backgroundColor: CARD,
        border: `6px solid ${INK}`,
        boxShadow: `${SHADOW}px ${SHADOW}px 0 ${INK}`,
        color: INK,
      },
      [
        photo,
        div({ flexDirection: 'column', flexGrow: 1 }, [
          div({ fontFamily: SANS, fontWeight: 700, fontSize: 88, lineHeight: 1, letterSpacing: -3 }, profile.name),
          div({ marginTop: 16, fontFamily: SANS, fontWeight: 700, fontSize: 36 }, profile.role),
          // No location line: at thumbnail size it wraps and blurs (the pages carry it).
          mutedMono(profile.tagline, { marginTop: 14, fontSize: 23 }),
          mutedMono(profile.stats[locale], { marginTop: 8, fontSize: 23 }),
          div(
            {
              marginTop: 36,
              alignSelf: 'flex-start',
              padding: '10px 20px',
              backgroundColor: LIME,
              border: `5px solid ${INK}`,
              boxShadow: `6px 6px 0 ${INK}`,
              fontFamily: MONO,
              fontWeight: 700,
              fontSize: 28,
            },
            host,
          ),
        ]),
      ],
    ),
  );
}
