// Shapes the site's profile data into what the Typst CV template (cv.typ) reads.
// No copy lives here: every string comes from src/data/profile.ts or src/i18n/ui.ts.
import { earlierExperience, education, experience, profile, skills } from '../data/profile.ts';
import { t, type Locale } from '../i18n/ui.ts';

export interface CvData {
  lang: Locale;
  name: string;
  role: string;
  tagline: string;
  location: string;
  contact: { email: string; website: string; linkedin: string; github: string; cka: string };
  experience: {
    company: string;
    /** Set on the first of consecutive roles at the same company only. */
    companyDescription?: string;
    title: string;
    period: string;
    location?: string;
    highlights: string[];
  }[];
  earlier: { company: string; title: string; period: string }[];
  skills: { label: string; items: string[] }[];
  education: { degree: string; school: string }[];
  labels: { experience: string; earlier: string; skills: string; education: string };
}

export function cvData(locale: Locale): CvData {
  return {
    lang: locale,
    name: profile.name,
    role: profile.role,
    tagline: profile.tagline,
    location: profile.location[locale],
    contact: {
      email: profile.links.email,
      website: new URL(profile.links.website).host,
      linkedin: profile.links.linkedin,
      github: profile.links.github,
      cka: profile.links.cka,
    },
    experience: experience.map((role, i) => ({
      company: role.company,
      ...(experience[i - 1]?.company !== role.company && { companyDescription: role.companyDescription[locale] }),
      title: role.title,
      period: role.period[locale],
      ...(role.location && { location: role.location[locale] }),
      highlights: role.highlights[locale],
    })),
    earlier: earlierExperience.map((role) => ({ company: role.company, title: role.title, period: role.period[locale] })),
    skills: skills.map((group) => ({ label: group.label[locale], items: group.items })),
    education: education.map((e) => ({ degree: e.degree[locale], school: e.school })),
    labels: {
      experience: t(locale, 'cv.experience'),
      earlier: t(locale, 'cv.earlier'),
      skills: t(locale, 'cv.skills'),
      education: t(locale, 'cv.education'),
    },
  };
}
