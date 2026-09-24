import { Service, signal } from '@angular/core';
import { BRAND } from '../brand';
import {
  Commitment,
  ContactDetails,
  EngagementModel,
  NavLink,
  ProcessStep,
  ServiceItem,
  TeamMember,
} from '../models/content.models';

/**
 * Single source of truth for all site copy.
 *
 * Every claim here must be something the team can substantiate. Prefer
 * commitments about how we work over statistics about a track record we do
 * not have yet.
 */
@Service()
export class Content {
  readonly companyName = signal(BRAND.name);
  readonly tagline = signal(BRAND.tagline);
  readonly defaultHeroImage = signal('images/hero-home.jpg');

  readonly navLinks = signal<NavLink[]>([
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'How We Work', path: '/how-we-work' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]);

  readonly commitments = signal<Commitment[]>([
    { value: '20+ yrs', label: 'Enterprise engineering experience' },
    { value: '0', label: 'Work handed to junior engineers' },
    { value: '1 day', label: 'Response to every enquiry' },
    { value: '100%', label: 'Code and IP ownership stays yours' },
  ]);

  readonly services = signal<ServiceItem[]>([
    {
      slug: 'software-development-services',
      title: 'Software Development Services',
      summary:
        'Web and mobile applications, integrations and low-code delivery, built by senior engineers.',
      tagline: 'Web, mobile and business applications, built to last',
      lead: 'Nitesh Kumar Singh & Rishabh Singh',
      heroImage: 'images/hero-software-development.jpg',
      introHeading: 'Software built around how your business actually works',
      introBody: [
        'Off-the-shelf software forces you to change the way you work. Custom software does the opposite — it encodes the process that makes you competitive.',
        'We cover the whole surface: websites and web platforms, Android and iOS apps, low-code business tools, and the integrations that connect them to the systems you already run.',
        'We take on a small number of projects at a time so the engineer who scoped your work is the one who writes it. No account managers, no handover to a delivery team you have never met.',
      ],
      highlights: [
        'Web and mobile under one team',
        'Two-week delivery increments',
        'You own the code and the repository',
        'Fixed-price discovery before any build',
      ],
      sections: [
        {
          id: 'web',
          navLabel: 'Web',
          eyebrow: 'Web application development',
          heading: 'Websites and platforms that carry real load',
          body: [
            'From a marketing site through to the customer portal your operations depend on, we build for the traffic and the change you expect two years from now.',
            'Every engagement starts with a short, fixed-price discovery and ships in two-week increments, so you see working software rather than status reports.',
          ],
          capabilities: [
            {
              title: 'Marketing sites and portals',
              description:
                'Fast, accessible, search-friendly sites with a content model your own team can edit without calling us.',
            },
            {
              title: 'Line-of-business applications',
              description:
                'Internal tools and customer portals with role-based access, audit trails and reporting built in.',
            },
            {
              title: 'Design systems',
              description:
                'A shared component library so every screen stays consistent as the product grows.',
            },
          ],
        },
        {
          id: 'mobile',
          navLabel: 'Mobile',
          eyebrow: 'Mobile app development',
          heading: 'Android and iOS, built for the long run',
          body: [
            'We build mobile apps that people keep on their phone — quick to open, usable on a bad connection, and consistent across devices.',
            'Whether that is one cross-platform codebase or fully native builds depends on your audience and budget, and we will tell you honestly which one you need.',
          ],
          capabilities: [
            {
              title: 'Native Android and iOS',
              description:
                'Platform-native apps that make full use of device hardware, notifications and background processing.',
            },
            {
              title: 'Cross-platform delivery',
              description:
                'A single codebase shipping to both stores with Flutter or React Native, reaching users sooner for less.',
            },
            {
              title: 'Release and lifecycle support',
              description:
                'Store submissions, phased rollouts, crash reporting and the ongoing updates the platforms require.',
            },
          ],
        },
        {
          id: 'low-code',
          navLabel: 'Low-code',
          eyebrow: 'Low-code and business apps',
          heading: 'Business applications in weeks, not quarters',
          body: [
            'Not every problem justifies a custom build. Where you already license Power Platform or OutSystems, we can deliver a working internal app far faster.',
            'We set up the governance at the same time — environments, lifecycle management and data policies — so what we build stays supportable after handover.',
          ],
          capabilities: [
            {
              title: 'Rapid MVP development',
              description:
                'Validate the idea with a working app in weeks, so you commit budget to something you have already used.',
            },
            {
              title: 'Workflow automation',
              description:
                'Replace approvals, handoffs and repeat data entry with auditable, monitored flows.',
            },
            {
              title: 'Platform governance',
              description:
                'Environment strategy, deployment pipelines and data loss prevention policies your IT team will sign off.',
            },
          ],
        },
        {
          id: 'integration',
          navLabel: 'Integration',
          eyebrow: 'API and systems integration',
          heading: 'Connect what you already run',
          body: [
            'Most of the value in an established business is unlocked by making existing systems talk to each other reliably.',
            'We design integration layers that are observable, resilient to failure and simple enough for your own team to extend later.',
          ],
          capabilities: [
            {
              title: 'API design and documentation',
              description:
                'Versioned, documented interfaces that your products and partners can integrate against cleanly.',
            },
            {
              title: 'ERP and CRM connectivity',
              description:
                'Integration into Dynamics, Salesforce and bespoke line-of-business systems without brittle point-to-point scripts.',
            },
            {
              title: 'Data migration',
              description:
                'Migrations with validation, reconciliation and a rehearsed rollback plan before anything goes live.',
            },
          ],
        },
        {
          id: 'modernization',
          navLabel: 'Modernization',
          eyebrow: 'Application modernization',
          heading: 'Bring legacy systems forward',
          body: [
            'Ageing applications rarely need replacing wholesale. More often they need to be made safe to change again.',
            'We refactor incrementally behind a test suite, so the system keeps running while it improves.',
          ],
          capabilities: [
            {
              title: 'Legacy re-engineering',
              description:
                'Untangle tightly coupled code into maintainable modules without a risky big-bang rewrite.',
            },
            {
              title: 'Cloud re-platforming',
              description:
                'Move workloads onto managed cloud services to cut running cost and remove single points of failure.',
            },
            {
              title: 'Automated test coverage',
              description:
                'Add the regression tests that let your team deploy without holding their breath.',
            },
          ],
        },
      ],
      technologies: [
        '.NET',
        'C#',
        'Java',
        'Angular',
        'React',
        'TypeScript',
        'Node.js',
        'Flutter',
        'SQL Server',
        'MongoDB',
        'Power Platform',
        'OutSystems',
        'Azure',
        'Docker',
      ],
    },
    {
      slug: 'ai-agent-services',
      title: 'AI Agent Services',
      summary:
        'Assistants and agents grounded in your own business data, with permissions and audit intact.',
      tagline: 'AI that answers from your data, not from the internet',
      lead: 'Nitesh Kumar Singh & Rishabh Singh',
      heroImage: 'images/hero-ai-agents.jpg',
      introHeading: 'AI agents grounded in your business data',
      introBody: [
        'A general-purpose chatbot cannot tell you what is in your contracts, your stock system or your internal policies. Useful answers come from connecting a model to your own systems — with your permissions and audit trail still intact.',
        'That connective work is where most AI projects quietly fail: retrieval, access control, integration and evaluation. It is ordinary engineering discipline applied to a new tool, and it is exactly what the three of us already do.',
      ],
      highlights: [
        'Answers cited back to the source document',
        'Respects the permissions you already have',
        'Runs inside your own tenant',
        'Evaluated before it reaches a customer',
      ],
      sections: [
        {
          id: 'assistants',
          navLabel: 'Assistants',
          eyebrow: 'Knowledge assistants and chatbots',
          heading: 'Answers from your own documents',
          body: [
            'Most organisations already hold the answer somewhere — in a policy document, a past quote, a ticket history or a database. The problem is finding it.',
            'We build assistants that retrieve from your own content and show their working, so staff can check the source rather than take the answer on trust.',
          ],
          capabilities: [
            {
              title: 'Retrieval-based answering',
              description:
                'Responses drawn from your documents and databases, with links back to the source so anyone can verify them.',
            },
            {
              title: 'Permission-aware retrieval',
              description:
                'The assistant only surfaces content the person asking is already entitled to see. No new data leaks through the chat box.',
            },
            {
              title: 'Internal and customer-facing',
              description:
                'Deployed into Teams or your intranet for staff, or onto your site for customers with tighter guardrails and escalation to a human.',
            },
          ],
        },
        {
          id: 'agents',
          navLabel: 'Agents',
          eyebrow: 'Task automation agents',
          heading: 'Agents that do the work, not just describe it',
          body: [
            'An assistant tells you what to do. An agent does it — reads the email, extracts the data, updates the system and tells you what changed.',
            'We keep a person in the loop wherever the outcome matters, so automation speeds up the process without removing accountability for it.',
          ],
          capabilities: [
            {
              title: 'Document and email processing',
              description:
                'Extract structured data from invoices, forms and shared inboxes, then write it into your system of record.',
            },
            {
              title: 'Multi-step workflows',
              description:
                'Agents that call your existing APIs to complete a process end to end, with approval steps where the cost of being wrong is high.',
            },
            {
              title: 'Human in the loop',
              description:
                'Explicit handoff points so a person reviews anything consequential before it is committed.',
            },
          ],
        },
        {
          id: 'grounding',
          navLabel: 'Grounding',
          eyebrow: 'Data preparation and evaluation',
          heading: 'The unglamorous part that decides whether it works',
          body: [
            'Model choice is rarely what separates a useful AI feature from a demo that embarrasses you. Data quality, retrieval design and honest testing are.',
            'We treat an AI feature like any other system: measurable, regression-tested, and improved on evidence rather than impressions.',
          ],
          capabilities: [
            {
              title: 'Data preparation and indexing',
              description:
                'Cleaning, chunking and indexing your content so retrieval returns the right passage instead of a vaguely related one.',
            },
            {
              title: 'Line-of-business integration',
              description:
                'Connecting agents to ERP, CRM and internal APIs through supported interfaces, not screen scraping.',
            },
            {
              title: 'Evaluation and regression testing',
              description:
                'A test set of real questions with expected answers, run on every change, so accuracy does not quietly drift.',
            },
          ],
        },
        {
          id: 'ai-governance',
          navLabel: 'Governance',
          eyebrow: 'AI governance and security',
          heading: 'Know what it can see and what it said',
          body: [
            'Before an AI system touches business data, someone has to be able to answer where that data goes, who can reach it and what the system told people.',
            'We design for those questions from the start, which is usually the difference between a pilot that gets approved and one that stalls in review.',
          ],
          capabilities: [
            {
              title: 'Data boundaries',
              description:
                'Deployed in your own tenant, with your content excluded from third-party model training.',
            },
            {
              title: 'Access control and audit',
              description:
                'Logging of prompts, retrieved sources and responses, so any answer can be reconstructed and reviewed later.',
            },
            {
              title: 'Policy and risk alignment',
              description:
                'Acceptable-use policy, data protection assessment support and alignment with emerging AI regulation.',
            },
          ],
        },
      ],
      technologies: [
        'Azure OpenAI',
        'Microsoft Copilot Studio',
        'Azure AI Search',
        'Semantic Kernel',
        'Power Platform',
        'Python',
        '.NET',
      ],
    },
    {
      slug: 'cybersecurity-services',
      title: 'Cybersecurity Services',
      summary:
        'Security assessments, identity hardening and compliance readiness for teams without a security team.',
      tagline: 'Practical security for organisations without a security team',
      lead: 'Riya Singh',
      heroImage: 'images/hero-cybersecurity.jpg',
      introHeading: 'Find the gaps before somebody else does',
      introBody: [
        'Most mid-sized organisations do not need a security operations centre. They need someone senior to look honestly at what they have, tell them what actually matters, and help fix it.',
        'Our assessments come back as a prioritised list in plain English, with the remediation steps included — not a 90-page PDF that gets filed and forgotten.',
      ],
      highlights: [
        'Over a decade of enterprise security experience',
        'Findings prioritised by real risk, not severity scores',
        'Remediation guidance, not just a report',
        'Free re-test of fixed findings',
      ],
      sections: [
        {
          id: 'assessment',
          navLabel: 'Assessment',
          eyebrow: 'Security assessment',
          heading: 'Know where you stand',
          body: [
            'A clear, evidence-based picture of your exposure, based on reviewing your actual configuration rather than a questionnaire.',
            'You get a ranked set of findings, the business risk behind each one, and what it takes to close it.',
          ],
          capabilities: [
            {
              title: 'Configuration and posture review',
              description:
                'Microsoft 365, Entra ID and endpoint configuration reviewed against recognised baselines.',
            },
            {
              title: 'Application security review',
              description:
                'Architecture and code review against OWASP guidance, including dependency and secrets scanning.',
            },
            {
              title: 'Cloud security assessment',
              description:
                'Network, identity and storage configuration reviewed across your Azure subscriptions.',
            },
          ],
        },
        {
          id: 'identity',
          navLabel: 'Identity',
          eyebrow: 'Identity and access',
          heading: 'Reduce the blast radius',
          body: [
            'Identity is where most incidents start and where most of the cheap wins are.',
            'We tighten who can access what, and make sure a single compromised account cannot reach everything.',
          ],
          capabilities: [
            {
              title: 'Conditional access design',
              description:
                'Risk-based access policies that tighten security without generating prompts your staff learn to click through.',
            },
            {
              title: 'Privileged access review',
              description:
                'Find and remove standing admin rights, and put approval behind the ones that must remain.',
            },
            {
              title: 'MFA and SSO rollout',
              description:
                'Phishing-resistant multi-factor authentication rolled out in a sequence your users will accept.',
            },
          ],
        },
        {
          id: 'compliance',
          navLabel: 'Compliance',
          eyebrow: 'Compliance readiness',
          heading: 'Pass the audit, keep the controls',
          body: [
            'Certification is usually driven by a customer or an insurer, on a deadline.',
            'We work out the shortest honest path to evidence, and build controls that keep working after the auditor leaves.',
          ],
          capabilities: [
            {
              title: 'ISO 27001 and SOC 2 gap analysis',
              description:
                'Map your current controls against the standard and get a prioritised remediation plan.',
            },
            {
              title: 'Policy and evidence packs',
              description:
                'Practical policies your team will actually follow, with the evidence trail auditors ask for.',
            },
            {
              title: 'Secure development practices',
              description:
                'Threat modelling, code review standards and pipeline scanning built into how your software is delivered.',
            },
          ],
        },
      ],
      technologies: [
        'Microsoft Defender',
        'Microsoft Entra ID',
        'Microsoft Purview',
        'Azure',
        'OWASP',
        'ISO 27001',
        'NIST CSF',
      ],
    },
  ]);

  readonly process = signal<ProcessStep[]>([
    {
      title: 'Intro call',
      duration: '30 minutes, free',
      description:
        'You tell us the problem. We tell you honestly whether we are the right people for it, and what it is likely to involve.',
    },
    {
      title: 'Discovery',
      duration: '1–2 weeks, fixed price',
      description:
        'We map the process, agree the success measures and produce a costed delivery plan. You own the output whether or not you continue with us.',
    },
    {
      title: 'Build',
      duration: 'Two-week increments',
      description:
        'Working software demonstrated at the end of every increment, with scope you can adjust between them.',
    },
    {
      title: 'Handover',
      duration: 'Before we invoice the final stage',
      description:
        'Source code, documentation, environments and a walkthrough for whoever will maintain it. No lock-in.',
    },
    {
      title: 'Support',
      duration: 'Optional, monthly',
      description:
        'A retainer for changes, monitoring and small enhancements if you would rather not carry it internally.',
    },
  ]);

  readonly engagementModels = signal<EngagementModel[]>([
    {
      name: 'Fixed-price discovery',
      bestFor: 'Getting a costed plan',
      description:
        'A short, scoped piece of work that ends with a delivery plan, estimate and architecture you can act on with or without us.',
    },
    {
      name: 'AI proof of concept',
      bestFor: 'Testing whether AI helps',
      description:
        'A time-boxed build against your real data, measured on real questions, so you find out whether it works before committing a budget to it.',
    },
    {
      name: 'Project delivery',
      bestFor: 'A defined outcome',
      description:
        'We deliver an agreed scope in two-week increments against a fixed budget envelope, with change handled between increments.',
    },
    {
      name: 'Monthly retainer',
      bestFor: 'Ongoing change',
      description:
        'A set number of days each month for enhancements, maintenance and advice, with unused capacity discussed rather than silently billed.',
    },
    {
      name: 'Security assessment',
      bestFor: 'A point-in-time answer',
      description:
        'A one-off review of your environment or application, delivered as a prioritised findings report with remediation guidance.',
    },
  ]);

  /** Being explicit about scope is more useful to a buyer than pretending to cover everything. */
  readonly exclusions = signal<string[]>([
    'A 24/7 manned service desk',
    'Hardware procurement, cabling or on-site desktop support',
    'Body-shopping developers by the dozen',
    'Reselling licences we get a margin on',
    'Selling you an AI project when a simple automation would do the job better',
  ]);

  readonly team = signal<TeamMember[]>([
    {
      name: 'Nitesh Kumar Singh',
      role: 'Software Engineering Lead',
      experience: '7 years',
      bio: 'Seven years building and maintaining enterprise applications in pro-code stacks, from greenfield products to systems that had been running for a decade before he touched them.',
      focus: ['Custom applications', 'API integration', 'AI integration', 'Modernisation'],
    },
    {
      name: 'Rishabh Singh',
      role: 'Low-Code Practice Lead',
      experience: '7 years',
      bio: 'Seven years delivering enterprise low-code and no-code solutions, with a focus on making fast delivery survive contact with an IT governance review.',
      focus: ['Power Platform', 'Workflow automation', 'AI agents', 'Platform governance'],
    },
    {
      name: 'Riya Singh',
      role: 'Security Lead',
      experience: '10+ years',
      bio: 'Over a decade in enterprise cybersecurity, covering assessment, identity and access, and taking organisations through compliance certification.',
      focus: ['Security assessment', 'Identity and access', 'AI governance', 'Compliance'],
    },
    {
      name: 'Prafful Chauhan',
      role: 'Finance & Domain Specialist',
      experience: '5+ years',
      bio: 'Served as a Specialist Officer at State Bank of India for over five years, with a postgraduate degree in Banking and Finance and an NISM certification. Brings first-hand banking operations and regulatory context to engagements in financial services.',
      focus: [
        'Banking operations',
        'Financial services domain',
        'Regulatory context',
        'Commercial structuring',
      ],
    },
  ]);

  readonly contact = signal<ContactDetails>({
    // TODO: replace the phone number and location with real details before launch.
    email: `hello@${BRAND.domain}`,
    phone: '+00 0000 000000',
    location: 'Remote-first',
    social: [{ label: 'LinkedIn', url: 'https://www.linkedin.com' }],
  });

  serviceBySlug(slug: string): ServiceItem | undefined {
    return this.services().find((service) => service.slug === slug);
  }
}
