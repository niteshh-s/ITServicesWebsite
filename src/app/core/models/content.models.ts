export interface NavLink {
  label: string;
  path: string;
}

/** A numbered capability tile inside a service section. */
export interface Capability {
  title: string;
  description: string;
}

/** One anchored block on a service detail page. */
export interface ServiceSection {
  id: string;
  navLabel: string;
  eyebrow: string;
  heading: string;
  body: string[];
  capabilities: Capability[];
}

export interface ServiceItem {
  slug: string;
  title: string;
  /** Short line used on cards and listings. */
  summary: string;
  /** Hero strapline, e.g. "Reimagining application development for agility and scale". */
  tagline: string;
  introHeading: string;
  introBody: string[];
  highlights: string[];
  sections: ServiceSection[];
  technologies: string[];
  /** Falls back to Content.defaultHeroImage when omitted. */
  heroImage?: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  results: { label: string; value: string }[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface ContactDetails {
  email: string;
  phone: string;
  address: string;
  social: { label: string; url: string }[];
}
