import { describe, expect, it } from 'vitest';
import { TAG_COLORS, tagColors } from './tags.ts';
import { experience } from './profile.ts';

describe('tagColors', () => {
  const groups = experience.map((r) => r.tags);
  const colors = tagColors(groups);

  it('colours every tag with an index into the palette', () => {
    for (const tag of groups.flat()) {
      const i = colors.get(tag);
      expect(Number.isInteger(i)).toBe(true);
      expect(i).toBeGreaterThanOrEqual(0);
      expect(i).toBeLessThan(TAG_COLORS);
    }
  });

  it('never repeats a colour inside one role', () => {
    for (const tags of groups) {
      expect(new Set(tags.map((t) => colors.get(t))).size).toBe(tags.length);
    }
  });

  it('is deterministic: same input, same colours', () => {
    expect(tagColors(groups)).toEqual(colors);
  });

  it('keeps distinct colours within a group even when tags are shared across groups', () => {
    const c = tagColors([
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      ['A', 'I', 'J'],
      ['B', 'I', 'K'],
    ]);
    for (const g of [['A', 'I', 'J'], ['B', 'I', 'K']]) {
      expect(new Set(g.map((t) => c.get(t))).size).toBe(3);
    }
  });
});
