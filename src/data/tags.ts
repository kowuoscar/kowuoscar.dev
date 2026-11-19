// Tech-stack tags on the Experience page. Colours come from a palette kept apart from the site's
// Lime/Violet duo (tokens --tag-0 … --tag-7 in global.css).
export const TAG_COLORS = 8;

/**
 * Gives each tag one colour for the whole page, never repeating a colour inside a group
 * (a group = one role's tags). Greedy graph colouring: tags that share any group are neighbours;
 * in first-appearance order, each tag takes the least-used colour none of its neighbours has.
 * Deterministic, no randomness.
 */
export function tagColors(groups: string[][]): Map<string, number> {
  const neighbours = new Map<string, Set<string>>();
  for (const group of groups) {
    for (const tag of group) {
      const n = neighbours.get(tag) ?? new Set<string>();
      group.forEach((other) => other !== tag && n.add(other));
      neighbours.set(tag, n);
    }
  }

  const colors = new Map<string, number>();
  const uses = Array<number>(TAG_COLORS).fill(0);
  for (const tag of neighbours.keys()) {
    const taken = new Set([...neighbours.get(tag)!].map((n) => colors.get(n)));
    const free = uses
      .map((count, color) => ({ count, color }))
      .filter(({ color }) => !taken.has(color))
      .sort((a, b) => a.count - b.count || a.color - b.color)[0];
    if (!free) throw new Error(`No free tag colour for "${tag}": too many neighbouring tags`);
    colors.set(tag, free.color);
    uses[free.color]!++;
  }
  return colors;
}
