# kowuoscar.dev — validated copy

Source of truth for site copy (and the reworked web CV). `src/data/content-sync.test.ts` checks that the experience highlights below match `src/data/profile.ts`.

## Identity
- Name: **Oscar KOWU** (displayed "Oscar Kowu" unless decided otherwise)
- Title: **Infrastructure Software Engineer**
- Tagline: Go · Kubernetes Operators · Platform Engineering
- Stats line: `8+ years · 15+ teams served · CKA`
- Location: Nantes, France · Remote · Relocate OK (FR: Télétravail · Mobilité géographique possible)
- Links: Website https://kowuoscar.dev (shown on the CV) · GitHub https://github.com/kowuoscar · LinkedIn https://www.linkedin.com/in/oscar-kowu/ · Email hello@kowuoscar.dev
- CKA (Credly, verified 2026-11-19): https://www.credly.com/badges/5ee1348f-e352-4c8c-a81c-a6a36c2c60bc/public_url

## Bio (V2)
**EN** — I started on the backend, writing APIs. Somewhere along the way, I became more curious about what happens after `git push` than before it. That's where I work now: Kubernetes, CI/CD and the systems in between, turning them into something engineers trust rather than fear, so they can ship quickly and sleep well.

**FR** — J'ai commencé côté backend, à écrire des APIs. En chemin, ce qui se passe après le `git push` a fini par m'intéresser plus que ce qui se passe avant. C'est là que je travaille aujourd'hui : Kubernetes, la CI/CD et les systèmes entre les deux. J'en fais quelque chose auquel les ingénieurs font confiance plutôt que quelque chose qu'ils redoutent, pour qu'ils livrent vite et dorment tranquilles.

## Skills
| Group (EN / FR) | Items |
|---|---|
| Languages / Langages | Go, Java (8–21), C#, JavaScript |
| Platform & DevOps / Plateforme & DevOps | AWS, Docker, Kubernetes, Operators, Helm, Argo CD (GitOps), GitHub Actions (CI/CD) |
| Backend / Backend | Spring Boot, REST APIs, microservices, event-driven messaging (Solace), caching (Redis) |
| Data / Données | PostgreSQL, MySQL |
| Observability / Observabilité | Grafana, Sentry |
| Certifications | CKA — Certified Kubernetes Administrator |

## Home: experience teaser (4 lines + "Full experience →")
- 2025 — DevOps Engineer · Qlik — Kubernetes controllers in Go for the CD platform
- 2024–25 — Senior Software Engineer · Qlik — Shared Java/.NET libraries used by 15+ teams
- 2021–24 — Senior Software Engineer · Sifflet — Data integration engine (Snowflake, Databricks…)
- 2019–21 — Software Engineer · Nickel — Internal APIs → platform tooling; led a team of 3

## Experience — detailed (EN, validated)
Full detail, shown on the CV. Highlights are ordered by impact: the site's Experience page shows the first 2 of each role plus tech-stack tags.

Tags — Qlik DevOps: Go, Kubernetes, Operators, Argo CD, Helm, GitHub Actions · Qlik Senior: Java, .NET, Spring Boot, Redis, Solace · Sifflet: Java, Spring Boot, PostgreSQL, Snowflake, Databricks, BigQuery · Nickel: Java, Spring Boot, PostgreSQL (first draft).

**Qlik** (Data analytics and integration platform) **— DevOps Engineer** · Sep 2025 – present · Remote (Nantes)
- Shipping the company's new CI/CD platform: building the Kubernetes controllers in Go that engineering teams deploy through.
- Improving the reliability, observability and clarity of the deployment pipeline.
- Providing support on CI/CD issues.

**Qlik — Senior Software Engineer** · Sep 2024 – Sep 2025
- Designed and shipped 5 shared backend modules (access control, encryption, caching, messaging, HTTP client) adopted by 15 engineering teams, replacing duplicated per-team implementations.
- Identified recurring pain points across teams and turned them into reusable platform components.
- Defined the release cadence for shared components, enabling smooth adoption with minimal disruption for consuming teams.
- Onboarded the first teams hands-on, then wrote the adoption guide that let the remaining teams self-onboard.

**Sifflet** (Data observability platform) **— Senior Software Engineer** · Dec 2021 – Jul 2024 · Remote (Paris)
- Led development of 10+ connectors to third-party data platforms (Snowflake, Databricks, BigQuery, Redshift, dbt, Airflow, Looker, PostgreSQL, MySQL).
- Cut the time to deliver a new connector from up to 2 weeks to 5 days at most.
- Designed and built scalable REST APIs; improved integration response times through caching and query optimization.
- Contributed to architecture design and cross-team code reviews.
- Conducted 10+ technical interviews and onboarded 3 new engineers.

**Nickel** (Neobank) **— Software Engineer** · Mar 2019 – Dec 2021 · Nantes
- Built and maintained internal APIs supporting business and engineering teams.
- Led a team of 3 engineers delivering the partner onboarding platform; onboarded 2 new engineers.
- Raised unit and integration test coverage from 75% to 90%.

**Education** — Master's in Computer Engineering, EPSI Lyon · Bachelor's in Software Engineering, SUPDECO Dakar

**Accenture — Entry-Level Software Engineer** · Mar 2018 – Feb 2019 (FR: mars 2018 – févr. 2019): omitted on the site, kept as a single line on the CV (`earlierExperience` in `src/data/profile.ts`).

## Experience — detailed (FR, validated 2026-11-19)
**Qlik** (Plateforme d'analytique et d'intégration de données) **— DevOps Engineer** · sept. 2025 – aujourd'hui · Télétravail (Nantes)
- Livraison de la nouvelle plateforme CI/CD de l'entreprise : développement en Go des controllers Kubernetes par lesquels les équipes d'ingénierie déploient.
- Amélioration de la fiabilité, de l'observabilité et de la lisibilité du pipeline de déploiement.
- Support aux équipes sur les problèmes de CI/CD.

**Qlik — Senior Software Engineer** · sept. 2024 – sept. 2025
- Conception et livraison de 5 modules backend partagés (contrôle d'accès, chiffrement, cache, messaging, client HTTP), adoptés par 15 équipes et remplaçant des implémentations dupliquées dans chaque équipe.
- Identification des problèmes récurrents entre équipes et transformation en composants de plateforme réutilisables.
- Définition du rythme de release des composants partagés, pour une adoption fluide et sans perturbation pour les équipes consommatrices.
- Accompagnement direct des premières équipes, puis rédaction du guide d'adoption qui a permis aux suivantes de s'intégrer en autonomie.

**Sifflet** (Plateforme d'observabilité des données) **— Senior Software Engineer** · déc. 2021 – juil. 2024 · Télétravail (Paris)
- Pilotage du développement de plus de 10 connecteurs vers des plateformes de données tierces (Snowflake, Databricks, BigQuery, Redshift, dbt, Airflow, Looker, PostgreSQL, MySQL).
- Réduction du délai de livraison d'un nouveau connecteur de 2 semaines à 5 jours maximum.
- Conception et développement d'APIs REST scalables ; réduction des temps de réponse des intégrations grâce au cache et à l'optimisation des requêtes.
- Participation aux choix d'architecture et aux revues de code inter-équipes.
- Plus de 10 entretiens techniques menés et onboarding de 3 nouveaux ingénieurs.

**Nickel** (Néobanque) **— Software Engineer** · mars 2019 – déc. 2021 · Nantes
- Développement et maintenance d'APIs internes au service des équipes métier et techniques.
- Encadrement d'une équipe de 3 ingénieurs pour livrer la plateforme d'onboarding des partenaires ; onboarding de 2 nouveaux ingénieurs.
- Couverture des tests unitaires et d'intégration portée de 75 % à 90 %.

**Formation** — Master en ingénierie informatique, EPSI Lyon · Bachelor en génie logiciel, SUPDECO Dakar
