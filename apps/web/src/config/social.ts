/**
 * Social links for footer and layout.
 * Render icons only when URL is set; do not hardcode links elsewhere.
 */
export const socialLinks = {
  github: "",
  linkedin: "https://linkedin.com/company/getnotify",
  twitter: "https://twitter.com/getnotify",
} as const;

export type SocialKey = keyof typeof socialLinks;
