export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** A string available in every locale. */
export type Localized = Record<Locale, string>;

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.blog': 'Blog',
    'nav.projects': 'Projects',
    'nav.soon': 'soon',
    'lang.switch': 'Français',
    'lang.switchShort': 'FR',
    'theme.toggle': 'Toggle dark mode',
    'skip': 'Skip to content',
    'home.title': 'Oscar Kowu — Infrastructure Software Engineer',
    'home.description':
      'Infrastructure Software Engineer working on Go, Kubernetes operators and platform engineering. Backend engineer turned platform engineer.',
    'hero.cv': 'Download CV',
    'hero.cvSoon': 'CV coming soon',
    'hero.ckaVerify': 'Verify my CKA certification on Credly',
    'about.title': 'About',
    'skills.title': 'Skills',
    'experience.title': 'Experience',
    'experience.full': 'Full experience',
    'experience.pageTitle': 'Experience — Oscar Kowu',
    'experience.description':
      'Career of Oscar Kowu: from backend engineering in Java to platform engineering with Go and Kubernetes.',
    'experience.education': 'Education',
    'footer.built': 'Built with Astro · Deployed on Cloudflare',
    'footer.source': 'Source',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.experience': 'Parcours',
    'nav.blog': 'Blog',
    'nav.projects': 'Projets',
    'nav.soon': 'bientôt',
    'lang.switch': 'English',
    'lang.switchShort': 'EN',
    'theme.toggle': 'Basculer le mode sombre',
    'skip': 'Aller au contenu',
    'home.title': 'Oscar Kowu — Infrastructure Software Engineer',
    'home.description':
      'Infrastructure Software Engineer : Go, operators Kubernetes et platform engineering. Ingénieur backend passé côté plateforme.',
    'hero.cv': 'Télécharger le CV',
    'hero.cvSoon': 'CV bientôt disponible',
    'hero.ckaVerify': 'Vérifier ma certification CKA sur Credly',
    'about.title': 'À propos',
    'skills.title': 'Compétences',
    'experience.title': 'Parcours',
    'experience.full': 'Parcours complet',
    'experience.pageTitle': 'Parcours — Oscar Kowu',
    'experience.description':
      "Parcours d'Oscar Kowu : du développement backend en Java au platform engineering avec Go et Kubernetes.",
    'experience.education': 'Formation',
    'footer.built': 'Construit avec Astro · Déployé sur Cloudflare',
    'footer.source': 'Code source',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof (typeof ui)['en'];

export function t(locale: Locale, key: UiKey): string {
  return ui[locale][key];
}

/** Prefix a locale-agnostic path ("/experience") for the given locale. */
export function localizePath(locale: Locale, path: string): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  return locale === defaultLocale ? clean || '/' : `/${locale}${clean}`;
}

/** Strip the locale prefix from a pathname, giving the locale-agnostic path. */
export function unlocalizePath(pathname: string): string {
  const stripped = pathname.replace(/^\/fr(?=\/|$)/, '');
  return stripped.replace(/\/$/, '') || '/';
}
