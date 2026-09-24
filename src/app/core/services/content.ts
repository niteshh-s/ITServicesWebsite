import { Service, signal } from '@angular/core';
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
  // TODO: confirm the trading name, then check trademark and domain availability.
  readonly companyName = signal('Trivance');
  readonly tagline = signal('Three senior specialists. No layers in between.');
  readonly defaultHeroImage = signal('/images/hero-home.jpg');

  readonly navLinks = signal<NavLink[]>([
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'How We Work', path: '/how-we-work' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]);

  readonly commitments = signal<Commitment[]>([
    { value: '24 yrs', label: 'Combined enterprise experience' },
    { value: '3', label: 'Senior specialists, no juniors' },
    { value: '1 day', label: 'Response to every enquiry' },
    { value: '100%', label: 'Code and IP ownership stays yours' },
  ]);

  readonly services = signal<ServiceItem[]>([
    {
      slug: 'software-development-services',
      title: 'Software Development Services',
      summary:
        'Custom applications, integrations and legacy modernisation, written by senior engineers.',
      tagline: 'Enterprise-grade custom software, built by the people you talk to',
      lead: 'Nitesh Kumar Singh',
      heroImage: '/images/hero-software-development.jpg',
      introHeading: 'Software built around how your business actually works',
      introBody: [
        'Off-the-shelf software forces you to change the way you work. Custom software does the opposite — it encodes the process that makes you competitive.',
        'We take on a small number of projects at a time so the engineer who scoped your work is the one who writes it. No account managers, no handover to a delivery team you have never met.',
      ],
      highlights: [
        'Senior engineers only',
        'Two-week delivery increments',
        'You own the code and the repository',
        'Fixed-price discovery before any build',
      ],
      sections: [
        {
          id: 'custom-applications',
          navLabel: 'Custom apps',
          eyebrow: 'Custom application development',
          heading: 'From discovery to production',
          body: [
            'We start with a short, fixed-price discovery to agree the problem, the success measures and the smallest release that proves value.',
            'From there we build in two-week increments, so you see working software rather than status reports.',
          ],
          capabilities: [
            {
              title: 'Discovery and solution design',
              description:
                'Process mapping, architecture options and a costed delivery plan you can take to your board.',
            },
            {
              title: 'Web applications and internal tools',
              description:
                'Line-of-business applications, customer portals and the internal tools that carry real operational load.',
            },
            {
              title: 'Incremental delivery',
              description:
                'Working software every sprint, demonstrated to you, with scope you can change between increments.',
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
        'Angular',
        'TypeScript',
        'Node.js',
        'SQL Server',
        'Azure',
        'Docker',
      ],
    },
    {
      slug: 'app-development-services',
      title: 'App Development Services',
      summary:
        'Business apps and workflow automation delivered on Microsoft Power Platform in weeks.',
      tagline: 'Business applications delivered in weeks, not quarters',
      lead: 'Rishabh Singh',
      heroImage: '/images/hero-app-development.jpg',
      introHeading: 'Low-code delivery, without the low-code mess',
      introBody: [
        'Low-code platforms let you replace spreadsheets and manual handoffs quickly. Used without discipline, they leave you with hundreds of unowned apps and no way to audit them.',
        'We deliver fast and set up the governance at the same time — environments, lifecycle management and data policies — so what we build stays supportable after we hand it over.',
      ],
      highlights: [
        'Working prototype in two to three weeks',
        'Built on licences you already own',
        'Governance and ALM from day one',
        'Handover and training included',
      ],
      sections: [
        {
          id: 'low-code',
          navLabel: 'Low-code',
          eyebrow: 'Low-code / no-code application development',
          heading: 'Our capabilities',
          body: [
            'We build business-critical applications on Microsoft Power Platform, bridging the gap between what the business needs and what IT can safely support.',
            'The aim is always the same: remove manual effort, make the process visible, and leave your team able to maintain it.',
          ],
          capabilities: [
            {
              title: 'Rapid MVP development',
              description:
                'Validate the idea with a working app in weeks, so you commit budget to something you have already used.',
            },
            {
              title: 'Workflow automation and business apps',
              description:
                'Automate approvals, handoffs and repetitive data entry with auditable, monitored flows.',
            },
            {
              title: 'Integration with enterprise systems',
              description:
                'Connect new apps to existing ERP, CRM and line-of-business data through supported connectors, not screen scraping.',
            },
          ],
        },
        {
          id: 'governance',
          navLabel: 'Governance',
          eyebrow: 'Platform governance',
          heading: 'Keep citizen development under control',
          body: [
            'The apps your teams build themselves are an asset until nobody knows who owns them, what data they touch or how to restore them.',
            'We put the guardrails in place so makers can move quickly inside boundaries that your IT and security teams have agreed.',
          ],
          capabilities: [
            {
              title: 'Environment and ALM strategy',
              description:
                'Separate development, test and production environments with managed solutions and repeatable deployments.',
            },
            {
              title: 'Data loss prevention policies',
              description:
                'Connector policies that stop business data leaking into unapproved services by accident.',
            },
            {
              title: 'Maker enablement',
              description:
                'Training, templates and standards so your internal makers build things your IT team is happy to support.',
            },
          ],
        },
        {
          id: 'replacement',
          navLabel: 'Replacement',
          eyebrow: 'Legacy app replacement',
          heading: 'Retire the spreadsheets',
          body: [
            'Most organisations run critical processes on a shared spreadsheet, an Access database or an ageing SharePoint site that one person understands.',
            'We map the process as it really runs, then replace it with something supported, permissioned and backed up.',
          ],
          capabilities: [
            {
              title: 'Spreadsheet and Access replacement',
              description:
                'Turn fragile shared files into a proper application with validation, history and role-based access.',
            },
            {
              title: 'SharePoint modernisation',
              description:
                'Move classic sites and workflows onto a current, supported platform without losing the data.',
            },
            {
              title: 'Process mapping',
              description:
                'Document how the work actually happens before automating it, so you do not encode the workaround.',
            },
          ],
        },
      ],
      technologies: [
        'Microsoft Power Platform',
        'Power Apps',
        'Power Automate',
        'Dataverse',
        'SharePoint',
        'Power BI',
        'Azure Logic Apps',
      ],
    },
    {
      slug: 'cybersecurity-services',
      title: 'Cybersecurity Services',
      summary:
        'Security assessments, identity hardening and compliance readiness for teams without a security team.',
      tagline: 'Practical security for organisations without a security team',
      lead: 'Riya Singh',
      heroImage: '/images/hero-cybersecurity.jpg',
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
    'A 24/7 manned service desk — we are three people, and we will not pretend otherwise',
    'Hardware procurement, cabling or on-site desktop support',
    'Body-shopping developers by the dozen',
    'Reselling licences we get a margin on',
  ]);

  readonly team = signal<TeamMember[]>([
    {
      name: 'Nitesh Kumar Singh',
      role: 'Software Engineering Lead',
      experience: '7 years',
      bio: 'Seven years building and maintaining enterprise applications in pro-code stacks, from greenfield products to systems that had been running for a decade before he touched them.',
      focus: ['Custom applications', 'API integration', 'Modernisation'],
    },
    {
      name: 'Rishabh Singh',
      role: 'Low-Code Practice Lead',
      experience: '7 years',
      bio: 'Seven years delivering enterprise low-code and no-code solutions, with a focus on making fast delivery survive contact with an IT governance review.',
      focus: ['Power Platform', 'Workflow automation', 'Platform governance'],
    },
    {
      name: 'Riya Singh',
      role: 'Security Lead',
      experience: '10+ years',
      bio: 'Over a decade in enterprise cybersecurity, covering assessment, identity and access, and taking organisations through compliance certification.',
      focus: ['Security assessment', 'Identity and access', 'Compliance'],
    },
  ]);

  readonly contact = signal<ContactDetails>({
    // TODO: replace all three with real details before launch.
    email: 'hello@trivance.example',
    phone: '+00 0000 000000',
    location: 'Remote-first',
    social: [{ label: 'LinkedIn', url: 'https://www.linkedin.com' }],
  });

  serviceBySlug(slug: string): ServiceItem | undefined {
    return this.services().find((service) => service.slug === slug);
  }
}
