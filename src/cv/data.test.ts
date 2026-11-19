import { describe, expect, it } from 'vitest';
import { cvData } from './data.ts';
import { education, experience, profile, skills } from '../data/profile.ts';

describe('cvData', () => {
  it('uses the site identity and the LinkedIn-aligned title', () => {
    const cv = cvData('en');
    expect(cv.name).toBe(profile.name);
    expect(cv.role).toBe('Infrastructure Software Engineer');
    expect(cv.tagline).toBe(profile.tagline);
    expect(cv.location).toBe(profile.location.en);
  });

  it('lists only public contact points: the email alias and links, never a phone', () => {
    const cv = cvData('en');
    expect(cv.contact.email).toBe('hello@kowuoscar.dev');
    expect(cv.contact.website).toBe('kowuoscar.dev');
    expect(cv.contact.linkedin).toBe(profile.links.linkedin);
    expect(cv.contact.github).toBe(profile.links.github);
    expect(JSON.stringify(cv)).not.toMatch(/\+?\d[\d .-]{8,}\d/);
  });

  it('includes the CKA certification', () => {
    const certs = cvData('en').skills.find((g) => g.label === 'Certifications');
    expect(certs?.items).toContain('CKA — Certified Kubernetes Administrator');
  });

  it('takes every role and its highlights from the site data, in order', () => {
    const cv = cvData('fr');
    expect(cv.experience).toHaveLength(experience.length);
    cv.experience.forEach((role, i) => {
      expect(role.company).toBe(experience[i]!.company);
      expect(role.title).toBe(experience[i]!.title);
      expect(role.period).toBe(experience[i]!.period.fr);
      expect(role.highlights).toEqual(experience[i]!.highlights.fr);
    });
  });

  it('keeps Accenture as a single CV-only line, absent from the site experience', () => {
    const cv = cvData('en');
    expect(cv.earlier).toEqual([
      { company: 'Accenture', title: 'Entry-Level Software Engineer', period: 'Mar 2018 – Feb 2019' },
    ]);
    expect(experience.map((r) => r.company)).not.toContain('Accenture');
  });

  it('localises the bio, skills, education and section labels', () => {
    const en = cvData('en');
    const fr = cvData('fr');
    expect(fr.summary).toBe(profile.bio.fr);
    expect(fr.skills.map((g) => g.label)).toEqual(skills.map((g) => g.label.fr));
    expect(fr.education).toEqual(education.map((e) => ({ degree: e.degree.fr, school: e.school })));
    expect(en.labels.experience).not.toBe(fr.labels.experience);
    expect(fr.labels).toMatchObject({ skills: 'Compétences', education: 'Formation' });
  });
});
