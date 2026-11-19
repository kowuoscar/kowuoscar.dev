import { describe, expect, it } from 'vitest';
import { ogCard, type OgNode } from './card.ts';
import { profile } from '../data/profile.ts';

/** Every string the card draws, in document order. */
function texts(node: OgNode | string): string[] {
  if (typeof node === 'string') return [node];
  const { children } = node.props;
  if (children === undefined) return [];
  return (Array.isArray(children) ? children : [children]).flatMap(texts);
}

describe('ogCard', () => {
  it.each(['en', 'fr'] as const)('shows who I am and where to find me (%s)', (locale) => {
    const drawn = texts(ogCard(locale));
    expect(drawn).toEqual(
      expect.arrayContaining([
        profile.name,
        profile.role,
        profile.tagline,
        profile.stats[locale],
        new URL(profile.links.website).host,
      ]),
    );
  });

  it('localises the copy: the FR card does not carry the EN stats', () => {
    expect(texts(ogCard('fr'))).not.toContain(profile.stats.en);
  });
});
