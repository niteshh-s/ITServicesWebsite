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
  /** Hero strapline shown under the page title. */
  tagline: string;
  /** Name of the team member who leads this practice. */
  lead: string;
  introHeading: string;
  introBody: string[];
  highlights: string[];
  sections: ServiceSection[];
  technologies: string[];
  /** Falls back to Content.defaultHeroImage when omitted. */
  heroImage?: string;
}

export interface ProcessStep {
  title: string;
  duration: string;
  description: string;
}

export interface EngagementModel {
  name: string;
  bestFor: string;
  description: string;
}

/** A promise about how we work, used instead of unverifiable track-record stats. */
export interface Commitment {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  bio: string;
  focus: string[];
}

export interface ContactDetails {
  email: string;
  phone: string;
  location: string;
  social: { label: string; url: string }[];
}
