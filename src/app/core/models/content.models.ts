export interface NavLink {
  label: string;
  path: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  description: string;
  features: string[];
  technologies: string[];
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  image: string;
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
  image: string;
}

export interface ContactDetails {
  email: string;
  phone: string;
  address: string;
  social: { label: string; url: string }[];
}
