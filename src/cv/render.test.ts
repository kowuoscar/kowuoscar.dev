import { describe, expect, it } from 'vitest';
import { renderCv } from './render.ts';

describe('renderCv', () => {
  it.each(['en', 'fr'] as const)('renders the %s CV as a PDF of at most two pages', (locale) => {
    const cv = renderCv(locale);
    expect(cv.pdf.subarray(0, 5).toString()).toBe('%PDF-');
    expect(cv.pages).toBeGreaterThanOrEqual(1);
    expect(cv.pages).toBeLessThanOrEqual(2);
  });

  it.each(['en', 'fr'] as const)('sets the %s document metadata: title, author, language', (locale) => {
    const cv = renderCv(locale);
    expect(cv.title).toBe('Oscar Kowu — Infrastructure Software Engineer');
    expect(cv.authors).toEqual(['Oscar Kowu']);
    expect(cv.pdf.toString('latin1')).toMatch(new RegExp(`/Lang\\s*\\(${locale}\\)`));
  });
});
