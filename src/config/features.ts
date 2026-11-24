/**
 * Feature switches for the public site.
 * Flip to `true` to re-enable; page code and content stay in the repo.
 */
export const features = {
  newsletter: false,
  contactForm: false,
  /** Careers index + job posts — off until hiring resumes. */
  careers: false,
} as const;
