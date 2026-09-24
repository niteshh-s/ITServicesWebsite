/**
 * Single source of truth for brand identity.
 *
 * Mirrored once in src/index.html, which cannot import from TypeScript. Social
 * crawlers read that static markup rather than the runtime-updated tags, so the
 * two must be kept in step.
 */
export const BRAND = {
  name: 'Trivance',
  /** Used for the contact address and canonical URLs. */
  domain: 'trivance.example',
  tagline: 'Software, AI and security engineering.',
} as const;
