export type ProjectLink = {
  label: string;
  url: string;
  kind: "live" | "source" | "other";
};
export type tag = "JavaScript" | "React" | "Web App" | "Automotive" | "IndexedDB" | "API Integration" | "PWA" | "E-Learning" | "Search Functionality" | "Food" | "E-commerce" | "Design" | "Industrial" | "Supabase" | "NextJs" | "Cryptography";

export type category = "Automotive" | "Concept" | "Web App" | "Tools" | "Small Business" | "E-commerce" | "Learning" | "Client Work";

export type Project = {
  /** Stable URL slug — used for #/projects/<slug> routes. */
  slug: string;
  title: string;
  /** Cover image shown on tiles and as first gallery image. */
  cover: string;
  /**
   * Extra screenshots for the project page gallery viewer.
   * Drop new images in /public/page-previews/<slug>/ and list them here.
   */
  gallery: string[];
  /** One-liner used on tiles and meta descriptions. */
  summary: string;
  /** Full description paragraphs for the project page. */
  description: string[];
  /** Broad groupings shown as chips and used for filtering. */
  categories: category[];
  /** Specific tech/feature tags — drive the "similar projects" match. */
  tags: tag[];
  links: ProjectLink[];
  featured?: boolean;
};


export type Service = {
  name: string;
  icon: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};
