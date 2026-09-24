import { Service, signal } from '@angular/core';
import {
  CaseStudy,
  ContactDetails,
  NavLink,
  ServiceItem,
  Stat,
  TeamMember,
  Testimonial,
} from '../models/content.models';

/**
 * Single source of truth for all site copy. Swap these arrays for the real
 * content (or a CMS/JSON fetch) without touching the components.
 */
@Service()
export class Content {
  readonly companyName = signal('Northwind IT');
  readonly tagline = signal('Engineering the systems behind ambitious businesses');
  readonly defaultHeroImage = signal('/images/pexels-bibekghosh-14553704.jpg');

  readonly navLinks = signal<NavLink[]>([
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]);

  readonly stats = signal<Stat[]>([
    { label: 'Applications delivered', value: '250+' },
    { label: 'Enterprise clients', value: '40+' },
    { label: 'Average platform uptime', value: '99.9%' },
    { label: 'Years of engineering', value: '12' },
  ]);

  readonly services = signal<ServiceItem[]>([
    {
      slug: 'app-development-services',
      title: 'App Development Services',
      summary:
        'Low-code, mobile, web and modernised enterprise applications built for agility and scale.',
      tagline: 'Reimagining application development for agility and scale',
      introHeading: 'Building scalable, intelligent apps for tomorrow',
      introBody: [
        'In a digital-first market, applications are the lifeline of a modern business. We help organisations innovate faster and smarter through a comprehensive suite of app development services.',
        'Whether you are modernising legacy systems, building intuitive mobile experiences, or accelerating delivery with low-code platforms, we help you ship applications that are resilient, scalable and ready for the future.',
      ],
      highlights: [
        'Discovery-led delivery',
        'Cloud-native by default',
        'Secure engineering practices',
        'Measurable business outcomes',
      ],
      sections: [
        {
          id: 'low-code',
          navLabel: 'Low-code',
          eyebrow: 'Low-code / no-code application development',
          heading: 'Our capabilities',
          body: [
            'We help organisations build business-critical applications faster using industry-leading platforms such as Microsoft Power Platform, OutSystems and Mendix.',
            'Our low-code expertise bridges the gap between business and IT — empowering citizen developers, streamlining workflows and shortening development cycles.',
          ],
          capabilities: [
            {
              title: 'Rapid MVP development',
              description:
                'Quickly validate ideas and prototypes to shorten the path from concept to production.',
            },
            {
              title: 'Workflow automation and business apps',
              description:
                'Automate repetitive tasks and build scalable internal apps that boost operational efficiency.',
            },
            {
              title: 'Integration with enterprise systems',
              description:
                'Seamlessly connect new apps with existing ERP, CRM and legacy systems for a unified digital ecosystem.',
            },
          ],
        },
        {
          id: 'modernization',
          navLabel: 'Modernization',
          eyebrow: 'Application modernization and migration',
          heading: 'Modernize to meet the standards',
          body: [
            'We help enterprises transform outdated applications into scalable, cloud-ready and high-performance solutions.',
            'Our approach focuses on breaking down monolithic systems, re-engineering legacy code and enabling modern architectures that support continuous innovation.',
          ],
          capabilities: [
            {
              title: 'Monolith to microservices',
              description:
                'Decompose tightly coupled systems into independently deployable services with clear domain boundaries.',
            },
            {
              title: 'Legacy code re-engineering',
              description:
                'Refactor ageing codebases into maintainable, well-tested modules without disrupting the business.',
            },
            {
              title: 'Cloud re-platforming',
              description:
                'Move workloads onto containerised, managed cloud services to cut cost and improve resilience.',
            },
            {
              title: 'Data and database migration',
              description:
                'Migrate data safely with validation, rollback plans and zero-surprise cutovers.',
            },
          ],
        },
        {
          id: 'mobile',
          navLabel: 'Mobile',
          eyebrow: 'Mobile application development',
          heading: 'Experiences built for every screen',
          body: [
            'We design and build mobile products that people actually use — fast, accessible and consistent across devices.',
            'From a single cross-platform codebase to fully native builds, we choose the approach that fits your audience, budget and roadmap.',
          ],
          capabilities: [
            {
              title: 'Native iOS and Android',
              description:
                'Platform-native applications that take full advantage of device capabilities and performance.',
            },
            {
              title: 'Cross-platform delivery',
              description:
                'One codebase across iOS and Android using Flutter or React Native to reach market sooner.',
            },
            {
              title: 'Progressive web apps',
              description:
                'Installable, offline-capable web experiences that avoid app store friction entirely.',
            },
            {
              title: 'Release and lifecycle support',
              description:
                'Store submissions, phased rollouts, crash analytics and ongoing feature iterations.',
            },
          ],
        },
        {
          id: 'enterprise-web',
          navLabel: 'Enterprise web',
          eyebrow: 'Enterprise web applications',
          heading: 'Portals and platforms that scale',
          body: [
            'We build the customer portals, partner platforms and internal tools that carry real operational load.',
            'Every build is designed around clear architecture, accessibility standards and an automated delivery pipeline.',
          ],
          capabilities: [
            {
              title: 'Customer and partner portals',
              description:
                'Secure self-service experiences with role-based access and single sign-on.',
            },
            {
              title: 'API-first architecture',
              description:
                'Well-documented, versioned APIs that let your products and partners integrate cleanly.',
            },
            {
              title: 'Design systems',
              description:
                'A shared component library that keeps every screen consistent as your product grows.',
            },
          ],
        },
      ],
      technologies: [
        'Angular',
        'React',
        '.NET',
        'Node.js',
        'Flutter',
        'Power Platform',
        'OutSystems',
        'Azure',
      ],
    },
    {
      slug: 'software-development-services',
      title: 'Software Development Services',
      summary:
        'Product engineering, integration, quality engineering and DevOps for custom software.',
      tagline: 'Custom software engineering, from discovery to production',
      introHeading: 'Software built around how your business actually works',
      introBody: [
        'Off-the-shelf software forces you to change the way you work. Custom software does the opposite — it encodes the processes that make you competitive.',
        'Our product-minded engineering teams work end to end: shaping the problem, designing the architecture, shipping in short increments and supporting what we build.',
      ],
      highlights: [
        'Dedicated cross-functional teams',
        'Two-week delivery increments',
        'Automated testing from day one',
        'Full source and IP ownership',
      ],
      sections: [
        {
          id: 'product-engineering',
          navLabel: 'Product engineering',
          eyebrow: 'Custom product engineering',
          heading: 'From discovery to launch',
          body: [
            'We start with a structured discovery to agree the problem, success measures and the smallest release that proves value.',
            'From there a dedicated squad designs, builds and releases in short increments, so you see working software rather than status reports.',
          ],
          capabilities: [
            {
              title: 'Discovery and solution design',
              description:
                'Workshops, process mapping and architecture options with a costed delivery roadmap.',
            },
            {
              title: 'UX and interface design',
              description:
                'Research-backed journeys, prototypes and accessible interfaces validated with real users.',
            },
            {
              title: 'Incremental delivery',
              description:
                'Working software every sprint, with demos, measurable goals and no hidden progress.',
            },
          ],
        },
        {
          id: 'integration',
          navLabel: 'Integration',
          eyebrow: 'API and systems integration',
          heading: 'Connect what you already run',
          body: [
            'Most value is unlocked by making existing systems talk to each other reliably.',
            'We design integration layers that are observable, resilient to failure and simple enough for your own team to extend.',
          ],
          capabilities: [
            {
              title: 'API design and governance',
              description:
                'REST and GraphQL interfaces with versioning, documentation and rate limiting built in.',
            },
            {
              title: 'Event-driven integration',
              description:
                'Message queues and event streams that decouple systems and absorb spikes in load.',
            },
            {
              title: 'ERP and CRM connectivity',
              description:
                'Proven connectors into SAP, Dynamics, Salesforce and bespoke line-of-business systems.',
            },
          ],
        },
        {
          id: 'quality',
          navLabel: 'Quality',
          eyebrow: 'Quality engineering',
          heading: 'Confidence in every release',
          body: [
            'Quality is designed in, not inspected at the end. Tests are written alongside the feature and run on every commit.',
            'That gives you a release pipeline you can trust, and the freedom to ship small changes often.',
          ],
          capabilities: [
            {
              title: 'Test automation',
              description:
                'Unit, integration and end-to-end suites wired into continuous integration.',
            },
            {
              title: 'Performance engineering',
              description:
                'Load modelling and profiling so the system holds up on your busiest day, not your average one.',
            },
            {
              title: 'Secure development',
              description:
                'Threat modelling, dependency scanning and code review aligned to OWASP guidance.',
            },
          ],
        },
        {
          id: 'devops',
          navLabel: 'DevOps',
          eyebrow: 'DevOps and continuous delivery',
          heading: 'Ship safely, repeatedly',
          body: [
            'We automate the path from commit to production so releases stop being an event.',
            'Infrastructure is described as code, environments are reproducible and every deployment is observable and reversible.',
          ],
          capabilities: [
            {
              title: 'CI/CD pipelines',
              description:
                'Automated build, test and deploy with approvals and one-click rollback.',
            },
            {
              title: 'Infrastructure as code',
              description:
                'Terraform and Bicep definitions that make environments reproducible and auditable.',
            },
            {
              title: 'Observability',
              description:
                'Structured logging, tracing and alerting so issues surface before your users report them.',
            },
          ],
        },
      ],
      technologies: [
        '.NET',
        'Node.js',
        'TypeScript',
        'Python',
        'PostgreSQL',
        'Docker',
        'Kubernetes',
        'Terraform',
      ],
    },
    {
      slug: 'cloud-services',
      title: 'Cloud Services',
      summary: 'Assess, migrate and run resilient, cost-efficient cloud platforms.',
      tagline: 'Cloud foundations that scale with demand, not with cost',
      introHeading: 'A cloud platform your teams can build on',
      introBody: [
        'We plan and execute cloud migrations, build secure landing zones and keep workloads fast, compliant and cost efficient.',
        'The result is a platform your engineers can self-serve against, with guardrails that keep finance and security comfortable.',
      ],
      highlights: [
        'Landing zone blueprints',
        'Zero-downtime migrations',
        'FinOps cost control',
        'Multi-region resilience',
      ],
      sections: [
        {
          id: 'migration',
          navLabel: 'Migration',
          eyebrow: 'Cloud migration',
          heading: 'Move without the drama',
          body: [
            'We assess your estate, group workloads by migration pattern and sequence the move around business risk.',
          ],
          capabilities: [
            {
              title: 'Readiness assessment',
              description:
                'Application inventory, dependency mapping and a costed target architecture.',
            },
            {
              title: 'Migration execution',
              description:
                'Rehost, re-platform or refactor, with rehearsed cutovers and rollback plans.',
            },
            {
              title: 'Landing zone setup',
              description:
                'Networking, identity, policy and logging foundations built as code from day one.',
            },
          ],
        },
        {
          id: 'operations',
          navLabel: 'Operations',
          eyebrow: 'Cloud operations',
          heading: 'Run it well, every day',
          body: [
            'Once you are live, the work shifts to reliability and cost. We handle both with automation rather than headcount.',
          ],
          capabilities: [
            {
              title: 'Cost optimisation',
              description:
                'Right-sizing, commitment planning and tagging discipline that makes spend explainable.',
            },
            {
              title: 'Resilience engineering',
              description:
                'Backup, failover and recovery testing against agreed RTO and RPO targets.',
            },
            {
              title: 'Platform automation',
              description:
                'Self-service pipelines that let product teams deploy without raising tickets.',
            },
          ],
        },
      ],
      technologies: ['Azure', 'AWS', 'Terraform', 'Kubernetes', 'Bicep', 'GitHub Actions'],
    },
    {
      slug: 'managed-services',
      title: 'Managed IT Services',
      summary: '24/7 monitoring, service desk and proactive maintenance for your estate.',
      tagline: 'Always-on support for the systems your people depend on',
      introHeading: 'A support team that prevents tickets, not just closes them',
      introBody: [
        'We look after your endpoints, networks and servers so your people stay productive and your internal team can focus on change instead of firefighting.',
        'Clear SLAs, transparent reporting and a named team that learns your environment properly.',
      ],
      highlights: [
        '24/7 monitoring',
        'Named engineers',
        'Transparent SLAs',
        'Monthly service reviews',
      ],
      sections: [
        {
          id: 'service-desk',
          navLabel: 'Service desk',
          eyebrow: 'Managed service desk',
          heading: 'Support your people will actually use',
          body: [
            'Tiered support with real humans, sensible escalation and a knowledge base that grows with every ticket.',
          ],
          capabilities: [
            {
              title: 'Tiered support',
              description: 'L1 to L3 coverage with escalation paths agreed up front.',
            },
            {
              title: 'Endpoint management',
              description: 'Provisioning, patching and compliance across Windows, macOS and mobile.',
            },
            {
              title: 'Vendor coordination',
              description: 'We chase your third-party suppliers so your team does not have to.',
            },
          ],
        },
        {
          id: 'monitoring',
          navLabel: 'Monitoring',
          eyebrow: 'Proactive monitoring',
          heading: 'Catch it before users do',
          body: [
            'Continuous monitoring across infrastructure and applications, with alerting tuned to reduce noise rather than generate it.',
          ],
          capabilities: [
            {
              title: 'Infrastructure monitoring',
              description: 'Capacity, availability and performance tracked against clear baselines.',
            },
            {
              title: 'Patch management',
              description: 'Scheduled, tested patching with change windows that suit your business.',
            },
            {
              title: 'Reporting and reviews',
              description: 'Monthly service reports and a roadmap of improvements, not just metrics.',
            },
          ],
        },
      ],
      technologies: ['Microsoft 365', 'Intune', 'ServiceNow', 'Datto', 'Defender'],
    },
    {
      slug: 'cybersecurity-services',
      title: 'Cybersecurity Services',
      summary: 'Assess risk, harden your environment and respond when it matters.',
      tagline: 'Security that fits the way your business operates',
      introHeading: 'Protect data, users and systems end to end',
      introBody: [
        'We assess your risk posture, close the gaps that matter most and build controls your people can live with.',
        'When something does happen, you have a tested response plan and a team that has run it before.',
      ],
      highlights: [
        'Zero-trust identity',
        'Continuous assessment',
        'Tested incident response',
        'Compliance readiness',
      ],
      sections: [
        {
          id: 'assessment',
          navLabel: 'Assessment',
          eyebrow: 'Security assessment',
          heading: 'Know where you stand',
          body: [
            'A clear, prioritised picture of your exposure — based on testing, not a questionnaire.',
          ],
          capabilities: [
            {
              title: 'Penetration testing',
              description: 'External, internal and application testing with actionable findings.',
            },
            {
              title: 'Posture review',
              description: 'Configuration and identity review against CIS and Microsoft baselines.',
            },
            {
              title: 'Compliance readiness',
              description: 'Gap analysis and evidence packs for ISO 27001, SOC 2 and GDPR.',
            },
          ],
        },
        {
          id: 'defence',
          navLabel: 'Defence',
          eyebrow: 'Defence and response',
          heading: 'Reduce the blast radius',
          body: [
            'Layered controls, least-privilege access and a response plan that has actually been rehearsed.',
          ],
          capabilities: [
            {
              title: 'Zero-trust identity',
              description: 'Conditional access, MFA and privileged access management.',
            },
            {
              title: 'Threat detection',
              description: 'Managed detection with tuned alerting and 24/7 escalation.',
            },
            {
              title: 'Incident response',
              description: 'Containment, forensics and recovery with post-incident reviews.',
            },
          ],
        },
      ],
      technologies: ['Microsoft Defender', 'Sentinel', 'Okta', 'CrowdStrike', 'ISO 27001'],
    },
    {
      slug: 'data-analytics',
      title: 'Data & Analytics',
      summary: 'Modern data platforms, pipelines and dashboards you can trust.',
      tagline: 'One version of the truth, available to every team',
      introHeading: 'Turn scattered data into decisions',
      introBody: [
        'We build the platforms and pipelines that bring your data together, then make it usable through dashboards people actually open.',
        'Governed, documented and tested — so the numbers hold up when someone asks how they were produced.',
      ],
      highlights: ['Governed data models', 'Automated pipelines', 'Self-service BI', 'Data quality testing'],
      sections: [
        {
          id: 'platform',
          navLabel: 'Platform',
          eyebrow: 'Data platform',
          heading: 'Foundations that hold up',
          body: [
            'A warehouse or lakehouse designed around your reporting needs, not around a vendor demo.',
          ],
          capabilities: [
            {
              title: 'Warehouse and lakehouse design',
              description: 'Dimensional models and storage layers sized for your actual workload.',
            },
            {
              title: 'ELT pipelines',
              description: 'Reliable ingestion and transformation with tests and lineage built in.',
            },
            {
              title: 'Governance',
              description: 'Cataloguing, access control and documentation that stays current.',
            },
          ],
        },
        {
          id: 'insight',
          navLabel: 'Insight',
          eyebrow: 'Analytics and insight',
          heading: 'Answers, not just reports',
          body: [
            'Dashboards designed around decisions, plus predictive models where they genuinely add value.',
          ],
          capabilities: [
            {
              title: 'BI dashboards',
              description: 'Role-based views that answer the questions each team actually asks.',
            },
            {
              title: 'Predictive analytics',
              description: 'Forecasting and anomaly detection wired into day-to-day operations.',
            },
            {
              title: 'Enablement',
              description: 'Training and documentation so your team can extend the platform.',
            },
          ],
        },
      ],
      technologies: ['Snowflake', 'Databricks', 'dbt', 'Power BI', 'Python', 'Azure Data Factory'],
    },
    {
      slug: 'it-consulting',
      title: 'IT Consulting',
      summary: 'Strategy, architecture review and fractional CTO support.',
      tagline: 'Independent advice on where to invest next',
      introHeading: 'Technology decisions you can defend',
      introBody: [
        'We give independent advice on architecture, sourcing and budget so your technology investments pay off.',
        'No reseller margins and no vendor agenda — just a clear recommendation with the trade-offs written down.',
      ],
      highlights: ['Vendor independent', 'Costed roadmaps', 'Board-ready reporting', 'Hands-on architects'],
      sections: [
        {
          id: 'strategy',
          navLabel: 'Strategy',
          eyebrow: 'Technology strategy',
          heading: 'A roadmap with real numbers',
          body: [
            'We translate business goals into a sequenced technology plan with costs, dependencies and risks made explicit.',
          ],
          capabilities: [
            {
              title: 'Technology roadmaps',
              description: 'Prioritised initiatives mapped against budget cycles and capacity.',
            },
            {
              title: 'Architecture review',
              description: 'Independent assessment of your current design and its scaling limits.',
            },
            {
              title: 'Vendor selection',
              description: 'Structured evaluation and negotiation support for major purchases.',
            },
          ],
        },
        {
          id: 'leadership',
          navLabel: 'Leadership',
          eyebrow: 'Fractional leadership',
          heading: 'Senior cover when you need it',
          body: [
            'Experienced CTO and architect cover for organisations that need the seniority without the permanent headcount.',
          ],
          capabilities: [
            {
              title: 'Fractional CTO',
              description: 'Hands-on technical leadership for a few days a month.',
            },
            {
              title: 'Team and process design',
              description: 'Structuring delivery teams, ways of working and hiring plans.',
            },
            {
              title: 'Due diligence',
              description: 'Technical assessment for investment, acquisition or major partnerships.',
            },
          ],
        },
      ],
      technologies: ['TOGAF', 'ITIL', 'Agile', 'FinOps', 'Well-Architected'],
    },
  ]);

  readonly caseStudies = signal<CaseStudy[]>([
    {
      slug: 'retail-cloud-migration',
      client: 'Harbour Retail Group',
      industry: 'Retail',
      title: 'Migrating 30 stores to a unified cloud platform',
      summary:
        'Replaced ageing on-premise servers with a cloud-first platform, cutting infrastructure spend and outages.',
      results: [
        { label: 'Infrastructure cost', value: '-38%' },
        { label: 'Deployment time', value: '-65%' },
        { label: 'Uptime', value: '99.98%' },
      ],
    },
    {
      slug: 'healthcare-security-uplift',
      client: 'Meridian Health',
      industry: 'Healthcare',
      title: 'Zero-trust rollout across a 1,200 person clinic network',
      summary:
        'Delivered identity-first security controls and achieved compliance sign-off ahead of schedule.',
      results: [
        { label: 'Phishing incidents', value: '-82%' },
        { label: 'Critical audit findings', value: '0' },
        { label: 'Rollout duration', value: '9 weeks' },
      ],
    },
    {
      slug: 'logistics-data-platform',
      client: 'Volta Logistics',
      industry: 'Logistics',
      title: 'A real-time data platform for fleet operations',
      summary:
        'Consolidated eight data sources into one warehouse with live dashboards for dispatch teams.',
      results: [
        { label: 'Reporting lag', value: 'Real time' },
        { label: 'Manual effort', value: '-120 hrs/mo' },
        { label: 'On-time delivery', value: '+14%' },
      ],
    },
  ]);

  readonly testimonials = signal<Testimonial[]>([
    {
      quote:
        'They became an extension of our team within weeks and have been steady, pragmatic partners ever since.',
      author: 'Priya Nair',
      role: 'CIO',
      company: 'Harbour Retail Group',
    },
    {
      quote:
        'The security uplift was delivered on time and, more importantly, our staff actually adopted it.',
      author: 'Daniel Okafor',
      role: 'Head of IT',
      company: 'Meridian Health',
    },
    {
      quote:
        'We finally have one version of the truth for our operational data. It changed how we run the business.',
      author: 'Sofia Lindqvist',
      role: 'COO',
      company: 'Volta Logistics',
    },
  ]);

  readonly team = signal<TeamMember[]>([
    { name: 'Alex Moreau', role: 'Managing Director' },
    { name: 'Rhea Kapoor', role: 'Head of Engineering' },
    { name: 'Tom Becker', role: 'Security Lead' },
    { name: 'Lina Costa', role: 'Client Services' },
  ]);

  readonly contact = signal<ContactDetails>({
    email: 'hello@northwind-it.example',
    phone: '+1 (555) 014-2200',
    address: '120 Riverside Avenue, Suite 400, Portland, OR',
    social: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com' },
      { label: 'GitHub', url: 'https://github.com' },
      { label: 'X', url: 'https://x.com' },
    ],
  });

  serviceBySlug(slug: string): ServiceItem | undefined {
    return this.services().find((service) => service.slug === slug);
  }

  caseStudyBySlug(slug: string): CaseStudy | undefined {
    return this.caseStudies().find((study) => study.slug === slug);
  }
}
