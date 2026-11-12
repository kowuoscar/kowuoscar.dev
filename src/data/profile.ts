// Validated copy — keep in sync with docs/content.md.
import type { Localized } from '../i18n/ui';

export const profile = {
  name: 'Oscar Kowu',
  initials: 'OK',
  role: 'Infrastructure Software Engineer',
  tagline: 'Go · Kubernetes Operators · Platform Engineering',
  stats: { en: '8+ years · 15+ teams served · CKA', fr: '8+ ans · 15+ équipes accompagnées · CKA' } satisfies Localized,
  location: { en: 'Nantes, France · Remote', fr: 'Nantes, France · Télétravail' } satisfies Localized,
  links: {
    github: 'https://github.com/kowuoscar',
    linkedin: 'https://www.linkedin.com/in/oscar-kowu/',
    email: 'hello@kowuoscar.dev',
    cka: 'https://www.credly.com/badges/5ee1348f-e352-4c8c-a81c-a6a36c2c60bc/public_url',
    source: 'https://github.com/kowuoscar/kowuoscar.dev',
  },
  /** Files expected in public/cv/. The button is disabled until the file exists. */
  cv: { en: '/cv/oscar-kowu-cv-en.pdf', fr: '/cv/oscar-kowu-cv-fr.pdf' } satisfies Localized,
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
  {
    label: { en: 'Platform & Kubernetes', fr: 'Plateforme & Kubernetes' },
    items: ['Kubernetes', 'Operators / controllers (Go)', 'Helm', 'Argo CD', 'Docker', 'GitHub Actions'],
  },
  { label: { en: 'Languages', fr: 'Langages' }, items: ['Go', 'Java (8–21)', 'C#', 'JavaScript'] },
  {
    label: { en: 'Backend & data', fr: 'Backend & données' },
    items: ['Spring Boot', '.NET', 'PostgreSQL', 'MySQL', 'Redis', 'Solace'],
  },
  { label: { en: 'Cloud & observability', fr: 'Cloud & observabilité' }, items: ['AWS', 'Grafana', 'Sentry'] },
  { label: { en: 'Certifications', fr: 'Certifications' }, items: ['CKA — Certified Kubernetes Administrator'] },
];

export interface Role {
  company: string;
  title: string;
  /** Short range for the home teaser, e.g. "2024–25". */
  years: string;
  period: Localized;
  location?: Localized;
  summary: Localized;
  highlights: Record<keyof Localized, string[]>;
}

export const experience: Role[] = [
  {
    company: 'Qlik',
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
        'Build Kubernetes controllers in Go for the continuous delivery platform that engineering teams deploy through.',
        'Improve the reliability, observability and clarity of the deployment pipeline.',
        'Support engineers on CI/CD issues.',
      ],
      fr: [
        'Je développe en Go des controllers Kubernetes pour la plateforme de déploiement continu utilisée par les équipes d’ingénierie.',
        'J’améliore la fiabilité, l’observabilité et la lisibilité du pipeline de déploiement.',
        'J’accompagne les ingénieurs sur leurs problèmes de CI/CD.',
      ],
    },
  },
  {
    company: 'Qlik',
    title: 'Senior Software Engineer',
    years: '2024–25',
    period: { en: 'Sep 2024 – Sep 2025', fr: 'sept. 2024 – sept. 2025' },
    summary: {
      en: 'Shared Java/.NET libraries used by 15+ teams',
      fr: 'Bibliothèques Java/.NET partagées par 15+ équipes',
    },
    highlights: {
      en: [
        'Evolved and maintained the shared Java and .NET libraries through which Qlik’s internal APIs are consumed, used by 15+ engineering teams.',
        'Turned recurring cross-team pain points into reusable modules (access control, caching, encryption).',
        'Defined the release cadence and onboarded teams onto the shared components.',
      ],
      fr: [
        'Évolution et maintenance des bibliothèques Java et .NET partagées par lesquelles passent les APIs internes de Qlik, utilisées par plus de 15 équipes.',
        'Transformation de problèmes récurrents entre équipes en modules réutilisables (contrôle d’accès, cache, chiffrement).',
        'Définition du rythme de release et accompagnement des équipes dans l’adoption des composants partagés.',
      ],
    },
  },
  {
    company: 'Sifflet',
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
        'Built the data integration engine: connecting to customer databases to extract schema catalogs, SQL query history for lineage, and system tables for usage analytics.',
        'Led integrations with third-party platforms (Snowflake, Databricks…) and cut response times through caching and query optimisation.',
        'Took part in cross-team code reviews and architecture design; ran technical interviews and onboarded new engineers.',
      ],
      fr: [
        'Conception du moteur d’intégration de données : connexion aux bases clientes pour extraire les catalogues de schémas, l’historique des requêtes SQL (lignage) et les tables système (analyse d’usage).',
        'Pilotage des intégrations avec des plateformes tierces (Snowflake, Databricks…) et réduction des temps de réponse grâce au cache et à l’optimisation des requêtes.',
        'Participation aux revues de code inter-équipes et aux choix d’architecture ; entretiens techniques et onboarding des nouveaux ingénieurs.',
      ],
    },
  },
  {
    company: 'Nickel',
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
        'Built backend APIs for internal tools, then moved to platform work: the tooling the rest of the team depended on.',
        'Increased unit and integration test coverage.',
        'Led a team of 3 engineers delivering the partner onboarding platform.',
        'Joined as Junior Software Engineer.',
      ],
      fr: [
        'Développement d’APIs backend pour les outils internes, puis passage au travail de plateforme : l’outillage dont dépendait le reste de l’équipe.',
        'Augmentation de la couverture des tests unitaires et d’intégration.',
        'Encadrement d’une équipe de 3 ingénieurs pour livrer la plateforme d’onboarding des partenaires.',
        'Arrivé en tant que Junior Software Engineer.',
      ],
    },
  },
];

export const education: { degree: Localized; school: string }[] = [
  { degree: { en: 'Master’s in Computer Engineering', fr: 'Master en ingénierie informatique' }, school: 'EPSI Lyon' },
  { degree: { en: 'Bachelor’s in Software Engineering', fr: 'Bachelor en génie logiciel' }, school: 'SUPDECO Dakar' },
];
