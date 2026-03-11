/**
 * Image URLs for the site. Uses Unsplash CDN.
 * Swap these for local images in public/images/ if needed.
 */
const UNSPLASH = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&fit=crop`;

export const images = {
  // Food factory / industrial
  hero: UNSPLASH('1581091226825-a6a2a5aee158', 1200), // manufacturing/industrial
  solution: UNSPLASH('1556911220-bff31c812dba', 800), // food production
  about: UNSPLASH('1504328345606-18bbc8c9d7d1', 800), // factory/quality
  contact: UNSPLASH('1532187863486-abf9dbad1b69', 800), // lab
  ctaBackground: UNSPLASH('1581091226825-a6a2a5aee158', 1200), // factory (dark overlay)
  factory1: UNSPLASH('1651525670114-2b8117390b28', 800), // group in factory
  factory2: UNSPLASH('1551884170-09fb70a3a2ed', 800), // workers in coats/masks
  factory3: UNSPLASH('1556216555-becc1cbd8b23', 800), // quality check at table
  // Dashboard / analytics screens
  dashboard: UNSPLASH('1771923082503-0a3381c46cef', 800), // laptop dark dashboard
  dashboard2: UNSPLASH('1551288049-b94da944d30e', 800), // analytics charts
  // Forms / tablet / checklist
  form: UNSPLASH('1556744034-9f8434e86c9', 600), // tablet/device screen
  form2: UNSPLASH('1586287013813-27c347e35492', 600), // workspace/tablet
} as const;
