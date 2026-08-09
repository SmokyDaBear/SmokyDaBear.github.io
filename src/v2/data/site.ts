import type { ProcessStep, Service } from "../types";

export const siteName = "Verdant Webworks";
export const tagline = "Fresh, lively, and growth-oriented web solutions";
export const contactEmail = "verdantwebworks@gmail.com";
export const githubUrl = "https://github.com/SmokyDaBear";
export const linkedInUrl = "https://www.linkedin.com/in/jes-green/";
export const formspreeId = "mblqpgql";

/** icon values map to entries in lib/icons.tsx (serviceIcons). */
export const services: Service[] = [
  {
    name: "Web Development",
    icon: "code",
    description:
      "Modern, responsive websites and web apps — from landing pages to full product builds.",
  },
  {
    name: "E-commerce",
    icon: "cart",
    description:
      "Storefronts with product catalogs, specials, and content the owner can manage.",
  },
  {
    name: "API Integration",
    icon: "plug",
    description:
      "Third-party or custom APIs wired in cleanly — data sync, search, and automation.",
  },
  {
    name: "Redesign & Styling",
    icon: "palette",
    description:
      "Outdated site? I modernize the design, navigation, and UX without losing what works.",
  },
  {
    name: "SEO & Performance",
    icon: "gauge",
    description:
      "Structure, speed, and search visibility baked in — so customers actually find you.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    description:
      "We talk goals, audience, and scope — I learn your business before touching code.",
  },
  {
    title: "Design",
    description:
      "Layout and visual direction take shape, reviewed with you before the build.",
  },
  {
    title: "Build",
    description:
      "Clean, responsive implementation with progress you can click on along the way.",
  },
  {
    title: "Launch & Grow",
    description:
      "Deployment, SEO checks, and ongoing support as your site earns its keep.",
  },
];

export const skills: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "SQL",
  "Git",
  "GitHub",
  "Responsive Design",
  "UI/UX Principles",
  "SEO Best Practices",
];

/** Tech logos rendered in the marquee strip (public/code-icons). */
export const techLogos: { name: string; src: string }[] = [
  { name: "React", src: "/code-icons/react.svg" },
  { name: "JavaScript", src: "/code-icons/square-js.svg" },
  { name: "HTML5", src: "/code-icons/html5.svg" },
  { name: "CSS3", src: "/code-icons/css3-alt.svg" },
  { name: "Node.js", src: "/code-icons/node-js.svg" },
  { name: "Git", src: "/code-icons/square-git.svg" },
  { name: "GitHub", src: "/code-icons/square-github.svg" },
  { name: "Markdown", src: "/code-icons/markdown.svg" },
  { name: "Docker", src: "/code-icons/docker.svg" },
  { name: "Linux", src: "/code-icons/linux.svg" },
  { name: "Java", src: "/code-icons/java.svg" },
  { name: "WordPress", src: "/code-icons/wordpress.svg" },
];
