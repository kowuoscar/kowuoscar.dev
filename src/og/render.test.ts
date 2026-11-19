import { describe, expect, it } from 'vitest';
import { OG_SIZE, renderOg } from './render.ts';

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

describe('renderOg', () => {
  it.each(['en', 'fr'] as const)('renders the %s share image as a 1200×630 PNG', async (locale) => {
    const png = await renderOg(locale);
    expect(png.subarray(0, 8)).toEqual(PNG_SIGNATURE);
    // IHDR: width and height, big-endian, right after the chunk header.
    expect({ width: png.readUInt32BE(16), height: png.readUInt32BE(20) }).toEqual(OG_SIZE);
    expect(OG_SIZE).toEqual({ width: 1200, height: 630 });
  });
});
