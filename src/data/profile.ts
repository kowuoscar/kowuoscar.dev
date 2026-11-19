// Validated copy — keep in sync with docs/content.md.
import type { Localized } from '../i18n/ui';

export const profile = {
  name: 'Oscar Kowu',
  initials: 'OK',
  role: 'Infrastructure Software Engineer',
  tagline: 'Go · Kubernetes Operators · Platform Engineering',
  stats: { en: '8+ years · 15+ teams served · CKA', fr: '8+ ans · 15+ équipes accompagnées · CKA' } satisfies Localized,
  location: {
    en: 'Nantes, France · Remote · Relocate OK',
    fr: 'Nantes, France · Télétravail · Mobilité géographique possible',
  } satisfies Localized,
  links: {
    github: 'https://github.com/kowuoscar',
    linkedin: 'https://www.linkedin.com/in/oscar-kowu/',
    email: 'hello@kowuoscar.dev',
    website: 'https://kowuoscar.dev',
    cka: 'https://www.credly.com/badges/5ee1348f-e352-4c8c-a81c-a6a36c2c60bc/public_url',
    source: 'https://github.com/kowuoscar/kowuoscar.dev',
  },
  /** Files expected in public/cv/. The button is disabled until the file exists. */
  cv: { en: '/cv/oscar-kowu-cv-en.pdf', fr: '/cv/oscar-kowu-cv-fr.pdf' } satisfies Localized,
  /** Share images (og:image), generated into public/og/ by `pnpm build`. */
  og: { en: '/og/oscar-kowu-en.png', fr: '/og/oscar-kowu-fr.png' } satisfies Localized,
  bio: {
    en: "I started on the backend, writing APIs. Somewhere along the way, I became more curious about what happens after `git push` than before it. That's where I work now: Kubernetes, CI/CD and the systems in between, turning them into something engineers trust rather than fear, so they can ship quickly and sleep well.",
    fr: "J'ai commencé côté backend, à écrire des APIs. En chemin, ce qui se passe après le `git push` a fini par m'intéresser plus que ce qui se passe avant. C'est là que je travaille aujourd'hui : Kubernetes, la CI/CD et les systèmes entre les deux. J'en fais quelque chose auquel les ingénieurs font confiance plutôt que quelque chose qu'ils redoutent, pour qu'ils livrent vite et dorment tranquilles.",
  } satisfies Localized,
};

export interface SkillGroup {
  label: Localized;
  items: string[];
}

export const skills: SkillGroup[] = [
  { label: { en: 'Languages', fr: 'Langages' }, items: ['Go', 'Java (8–21)', 'C#', 'JavaScript'] },
  {
    label: { en: 'Platform & DevOps', fr: 'Plateforme & DevOps' },
    items: ['AWS', 'Docker', 'Kubernetes', 'Operators', 'Helm', 'Argo CD (GitOps)', 'GitHub Actions (CI/CD)'],
  },
  {
    label: { en: 'Backend', fr: 'Backend' },
    items: ['Spring Boot', 'REST APIs', 'microservices', 'event-driven messaging (Solace)', 'caching (Redis)'],
  },
  { label: { en: 'Data', fr: 'Données' }, items: ['PostgreSQL', 'MySQL'] },
  { label: { en: 'Observability', fr: 'Observabilité' }, items: ['Grafana', 'Sentry'] },
  { label: { en: 'Certifications', fr: 'Certifications' }, items: ['CKA — Certified Kubernetes Administrator'] },
];

export interface Role {
  company: string;
  /** What the company does, e.g. "Neobank". */
  companyDescription: Localized;
  title: string;
  /** Short range for the home teaser, e.g. "2024–25". */
  years: string;
  period: Localized;
  location?: Localized;
  summary: Localized;
  /** Ordered by impact: the site shows the first ones, the CV all of them. */
  highlights: Record<keyof Localized, string[]>;
  /** Tech stack, shown as coloured tags on the Experience page. */
  tags: string[];
}

export const experience: Role[] = [
  {
    company: 'Qlik',
    companyDescription: { en: 'Data analytics and integration platform', fr: 'Plateforme d’analytique et d’intégration de données' },
    title: 'DevOps Engineer',
    years: '2025 —',
    period: { en: 'Sep 2025 – present', fr: 'sept. 2025 – aujourd’hui' },
    location: { en: 'Remote (Nantes)', fr: 'Télétravail (Nantes)' },
    summary: {
      en: 'Kubernetes controllers in Go for the CD platform',
      fr: 'Controllers Kubernetes en Go pour la plateforme de CD',
    },
    highlights: {
      en: [
        'Shipping the company’s new CI/CD platform: building the Kubernetes controllers in Go that engineering teams deploy through.',
        'Improving the reliability, observability and clarity of the deployment pipeline.',
        'Providing support on CI/CD issues.',
      ],
      fr: [
        'Livraison de la nouvelle plateforme CI/CD de l’entreprise : développement en Go des controllers Kubernetes par lesquels les équipes d’ingénierie déploient.',
        'Amélioration de la fiabilité, de l’observabilité et de la lisibilité du pipeline de déploiement.',
        'Support aux équipes sur les problèmes de CI/CD.',
      ],
    },
    tags: ['Go', 'Kubernetes', 'Operators', 'Argo CD', 'Helm', 'GitHub Actions'],
  },
  {
    company: 'Qlik',
    companyDescription: { en: 'Data analytics and integration platform', fr: 'Plateforme d’analytique et d’intégration de données' },
    title: 'Senior Software Engineer',
    years: '2024–25',
    period: { en: 'Sep 2024 – Sep 2025', fr: 'sept. 2024 – sept. 2025' },
    summary: {
      en: 'Shared Java/.NET libraries used by 15+ teams',
      fr: 'Bibliothèques Java/.NET partagées par 15+ équipes',
    },
    highlights: {
      en: [
        'Designed and shipped 5 shared backend modules (access control, encryption, caching, messaging, HTTP client) adopted by 15 engineering teams, replacing duplicated per-team implementations.',
        'Identified recurring pain points across teams and turned them into reusable platform components.',
        'Defined the release cadence for shared components, enabling smooth adoption with minimal disruption for consuming teams.',
        'Onboarded the first teams hands-on, then wrote the adoption guide that let the remaining teams self-onboard.',
      ],
      fr: [
        'Conception et livraison de 5 modules backend partagés (contrôle d’accès, chiffrement, cache, messaging, client HTTP), adoptés par 15 équipes et remplaçant des implémentations dupliquées dans chaque équipe.',
        'Identification des problèmes récurrents entre équipes et transformation en composants de plateforme réutilisables.',
        'Définition du rythme de release des composants partagés, pour une adoption fluide et sans perturbation pour les équipes consommatrices.',
        'Accompagnement direct des premières équipes, puis rédaction du guide d’adoption qui a permis aux suivantes de s’intégrer en autonomie.',
      ],
    },
    tags: ['Java', '.NET', 'Spring Boot', 'Redis', 'Solace'],
  },
  {
    company: 'Sifflet',
    companyDescription: { en: 'Data observability platform', fr: 'Plateforme d’observabilité des données' },
    title: 'Senior Software Engineer',
    years: '2021–24',
    period: { en: 'Dec 2021 – Jul 2024', fr: 'déc. 2021 – juil. 2024' },
    location: { en: 'Remote (Paris)', fr: 'Télétravail (Paris)' },
    summary: {
      en: 'Data integration engine (Snowflake, Databricks…)',
      fr: 'Moteur d’intégration de données (Snowflake, Databricks…)',
    },
    highlights: {
      en: [
        'Led development of 10+ connectors to third-party data platforms (Snowflake, Databricks, BigQuery, Redshift, dbt, Airflow, Looker, PostgreSQL, MySQL).',
        'Cut the time to deliver a new connector from up to 2 weeks to 5 days at most.',
        'Designed and built scalable REST APIs; improved integration response times through caching and query optimization.',
        'Contributed to architecture design and cross-team code reviews.',
        'Conducted 10+ technical interviews and onboarded 3 new engineers.',
      ],
      fr: [
        'Pilotage du développement de plus de 10 connecteurs vers des plateformes de données tierces (Snowflake, Databricks, BigQuery, Redshift, dbt, Airflow, Looker, PostgreSQL, MySQL).',
        'Réduction du délai de livraison d’un nouveau connecteur de 2 semaines à 5 jours maximum.',
        'Conception et développement d’APIs REST scalables ; réduction des temps de réponse des intégrations grâce au cache et à l’optimisation des requêtes.',
        'Participation aux choix d’architecture et aux revues de code inter-équipes.',
        'Plus de 10 entretiens techniques menés et onboarding de 3 nouveaux ingénieurs.',
      ],
    },
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Snowflake', 'Databricks', 'BigQuery'],
  },
  {
    company: 'Nickel',
    companyDescription: { en: 'Neobank', fr: 'Néobanque' },
    title: 'Software Engineer',
    years: '2019–21',
    period: { en: 'Mar 2019 – Dec 2021', fr: 'mars 2019 – déc. 2021' },
    location: { en: 'Nantes', fr: 'Nantes' },
    summary: {
      en: 'Internal APIs → platform tooling; led a team of 3',
      fr: 'APIs internes → outillage plateforme ; équipe de 3',
    },
    highlights: {
      en: [
        'Built and maintained internal APIs supporting business and engineering teams.',
        'Led a team of 3 engineers delivering the partner onboarding platform; onboarded 2 new engineers.',
        'Raised unit and integration test coverage from 75% to 90%.',
      ],
      fr: [
        'Développement et maintenance d’APIs internes au service des équipes métier et techniques.',
        'Encadrement d’une équipe de 3 ingénieurs pour livrer la plateforme d’onboarding des partenaires ; onboarding de 2 nouveaux ingénieurs.',
        'Couverture des tests unitaires et d’intégration portée de 75 % à 90 %.',
      ],
    },
    tags: ['Java', 'Spring Boot', 'PostgreSQL'],
  },
];

/** CV-only roles, one line each. The site omits them (docs/decisions.md). */
export const earlierExperience: { company: string; title: string; period: Localized }[] = [
  {
    company: 'Accenture',
    title: 'Entry-Level Software Engineer',
    period: { en: 'Mar 2018 – Feb 2019', fr: 'mars 2018 – févr. 2019' },
  },
];

export const education: { degree: Localized; school: string }[] = [
  { degree: { en: 'Master’s in Computer Engineering', fr: 'Master en ingénierie informatique' }, school: 'EPSI Lyon' },
  { degree: { en: 'Bachelor’s in Software Engineering', fr: 'Bachelor en génie logiciel' }, school: 'SUPDECO Dakar' },
];
