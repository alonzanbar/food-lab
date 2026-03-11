/**
 * Image URLs for the site. Uses Unsplash CDN.
 * Swap these for local images in public/images/ if needed.
 */
const UNSPLASH = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&fit=crop`;

export const images = {
  hero: UNSPLASH('1581091226825-a6a2a5aee158', 1200), // manufacturing/industrial
  solution: UNSPLASH('1556911220-bff31c812dba', 800), // food production
  about: UNSPLASH('1504328345606-18bbc8c9d7d1', 800), // factory/quality
  contact: UNSPLASH('1532187863486-abf9dbad1b69', 800), // lab
  ctaBackground: UNSPLASH('1581091226825-a6a2a5aee158', 1200), // factory (dark overlay)
} as const;
