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
  readonly tagline = signal('Technology partners for ambitious teams');

  readonly navLinks = signal<NavLink[]>([
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]);

  readonly stats = signal<Stat[]>([
    { label: 'Projects delivered', value: '250+' },
    { label: 'Enterprise clients', value: '40+' },
    { label: 'Avg. uptime', value: '99.9%' },
    { label: 'Years in business', value: '12' },
  ]);

  readonly services = signal<ServiceItem[]>([
    {
      slug: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      summary: 'Design, migrate and run resilient cloud platforms.',
      icon: 'cloud',
      description:
        'We plan and execute cloud migrations, build landing zones and keep your workloads fast, secure and cost efficient.',
      features: [
        'Cloud readiness assessment',
        'Migration and modernisation',
        'Infrastructure as code',
        'Cost optimisation',
      ],
      technologies: ['Azure', 'AWS', 'Terraform', 'Kubernetes'],
    },
    {
      slug: 'managed-it',
      title: 'Managed IT Services',
      summary: '24/7 monitoring, helpdesk and proactive maintenance.',
      icon: 'support',
      description:
        'A dedicated team that keeps your endpoints, networks and servers healthy so your people can stay productive.',
      features: [
        '24/7 monitoring and alerting',
        'Tiered service desk',
        'Patch and asset management',
        'Vendor coordination',
      ],
      technologies: ['Microsoft 365', 'Intune', 'Datto', 'ServiceNow'],
    },
    {
      slug: 'cybersecurity',
      title: 'Cybersecurity',
      summary: 'Protect data, users and systems end to end.',
      icon: 'shield',
      description:
        'Assess your risk posture, harden your environment and respond quickly when something does go wrong.',
      features: [
        'Security audits and pen testing',
        'Zero-trust identity',
        'Incident response',
        'Compliance readiness',
      ],
      technologies: ['Defender', 'Okta', 'CrowdStrike', 'ISO 27001'],
    },
    {
      slug: 'software-development',
      title: 'Software Development',
      summary: 'Custom web, mobile and integration engineering.',
      icon: 'code',
      description:
        'Product-minded engineers who ship maintainable software, from discovery through to launch and beyond.',
      features: [
        'Web and mobile applications',
        'API and systems integration',
        'Legacy modernisation',
        'QA and automation',
      ],
      technologies: ['Angular', '.NET', 'Node.js', 'PostgreSQL'],
    },
    {
      slug: 'data-analytics',
      title: 'Data & Analytics',
      summary: 'Turn scattered data into decisions you can trust.',
      icon: 'chart',
      description:
        'Modern data platforms, pipelines and dashboards that give every team a shared view of the numbers.',
      features: [
        'Data warehouse design',
        'ETL/ELT pipelines',
        'BI dashboards',
        'Predictive analytics',
      ],
      technologies: ['Snowflake', 'Power BI', 'dbt', 'Python'],
    },
    {
      slug: 'it-consulting',
      title: 'IT Consulting',
      summary: 'Strategy, roadmaps and fractional CTO support.',
      icon: 'compass',
      description:
        'Independent advice on architecture, sourcing and budgets so your technology investments pay off.',
      features: [
        'Technology roadmaps',
        'Architecture review',
        'Vendor selection',
        'Digital transformation',
      ],
      technologies: ['TOGAF', 'ITIL', 'Agile', 'FinOps'],
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
      image: 'images/case-study-placeholder.svg',
      results: [
        { label: 'Infra cost', value: '-38%' },
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
      image: 'images/case-study-placeholder.svg',
      results: [
        { label: 'Phishing incidents', value: '-82%' },
        { label: 'Audit findings', value: '0 critical' },
        { label: 'Rollout', value: '9 weeks' },
      ],
    },
    {
      slug: 'logistics-data-platform',
      client: 'Volta Logistics',
      industry: 'Logistics',
      title: 'A real-time data platform for fleet operations',
      summary:
        'Consolidated eight data sources into one warehouse with live dashboards for dispatch teams.',
      image: 'images/case-study-placeholder.svg',
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
    { name: 'Alex Moreau', role: 'Managing Director', image: 'images/avatar.svg' },
    { name: 'Rhea Kapoor', role: 'Head of Engineering', image: 'images/avatar.svg' },
    { name: 'Tom Becker', role: 'Security Lead', image: 'images/avatar.svg' },
    { name: 'Lina Costa', role: 'Client Services', image: 'images/avatar.svg' },
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
