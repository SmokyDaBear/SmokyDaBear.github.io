import api from "./assets/icons/api-icon.svg";
import uiUx from "./assets/icons/ui-ux.svg";
import responsive from "./assets/icons/responsive.svg";
import webDev from "./assets/icons/laptop-icon.svg";
import seo from "./assets/icons/structure.svg";

import saas from "/page-previews/saas.jpg";
import autoSite from "/page-previews/auto-site.jpg";
import cocktails from "/page-previews/cocktails.jpg";
import encrypter from "/page-previews/encrypter.jpg";
import folio from "/page-previews/folio.jpg";
import notesApp from "/page-previews/notes-app.jpg";
import bakery from "/page-previews/remmys-bakery.jpg";
import realEstate from "/page-previews/real-estate.jpg";

export const SitePreviews = {
  saas,
  autoSite,
  cocktails,
  encrypter,
  folio,
  notesApp,
  bakery,
  realEstate,
};

export interface Tservice {
  name: string;
  icon: string;
  description: string;
}

export const services: Tservice[] = [
  {
    name: "Web Development",
    icon: webDev,
    description:
      "Building responsive and dynamic websites using modern technologies.",
  },
  {
    name: "UI/UX Design",
    icon: uiUx,
    description:
      "Creating user-friendly interfaces with a focus on user experience.",
  },
  {
    name: "SEO Optimization",
    icon: seo,
    description:
      "Improving website visibility on search engines through optimization techniques.",
  },
  {
    name: "Responsive Design",
    icon: responsive,
    description:
      "Designing websites that look great on all devices, from desktops to mobile phones.",
  },
  {
    name: "API Integration",
    icon: api,
    description:
      "Seamlessly integrating third-party APIs to enhance website functionality, or create custom APIs tailored to your needs.",
  },
];

export type project = {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
  sourceUrl: string;
  pageUrl: string;
  featured?: boolean;
};

export const projects: project[] = [
  {
    id: 5,
    image: SitePreviews.notesApp,
    title: "Notes App",
    description:
      "Contains notes on programming and more, with search functions",
    tags: ["E-Learning", "Markdown", "React"],
    pageUrl:
      "https://smokydabear.github.io/code-wiki-app/?note=home.md&section=home",
    sourceUrl: "https://github.com/SmokyDaBear/code-wiki-app",
    featured: true,
  },
  {
    id: 6,
    title: "Remmy's Bakery",
    description: "Bakery Site",
    tags: ["Food", "E-commerce"],
    sourceUrl: "https://github.com/SmokyDaBear/remmys-bakery-site",
    pageUrl: "https://smokydabear.github.io/remmys-bakery-site",
    image: SitePreviews.bakery,
    featured: true,
  },

  {
    id: 1,
    image: SitePreviews.cocktails,
    title: "Cocktails as a Service",
    description: "Find cocktail recipes by name or ingredient",
    tags: ["JavaScript", "API", "Search Functionality"],
    sourceUrl: "https://github.com/SmokyDaBear/cocktails-as-a-service",
    pageUrl: "https://smokydabear.github.io/cocktails-as-a-service/",
  },
  {
    id: 2,
    image: SitePreviews.autoSite,
    title: "Green Lyon Automotive",
    description: "Automotive repair shop site",
    tags: ["Industrial", "Design", "Automotive"],
    pageUrl: "https://smokydabear.github.io/auto-site/",
    sourceUrl: "https://github.com/SmokyDaBear/auto-site",
    featured: true,
  },
  {
    id: 3,
    image: SitePreviews.folio,
    title: "folio.",
    description: "Portfolio Website",
    tags: ["JavaScript", "Themes", "Search Functionality", "Modals"],
    sourceUrl: "https://github.com/SmokyDaBear/folio-project",
    pageUrl: "https://smokydabear.github.io/folio-project/",
  },
  {
    id: 4,
    image: SitePreviews.encrypter,
    title: "Message Encryption Site",
    description:
      "Encrypts messages using railfence cipher and rot13 techniques",
    tags: ["JavaScript", "Cryptography"],
    sourceUrl: "https://github.com/SmokyDaBear/message-encryption-site",
    pageUrl: "https://smokydabear.github.io/message-encryption-site/",
  },

  {
    id: 7,
    title: "Real Estate",
    description: "Real Estate Listing Site",
    tags: ["Real Estate", "Listings", "Mockup"],
    sourceUrl: "https://github.com/SmokyDaBear/real-estate",
    pageUrl: "https://smokydabear.github.io/real-estate/",
    image: SitePreviews.realEstate,
  },
  {
    id: 0,
    image: SitePreviews.saas,
    title: "Front",
    description: "Software as a service mockup site",
    tags: ["Saas", "Mockup"],
    sourceUrl: "https://github.com/SmokyDaBear/css-final-project-saas-solved",
    pageUrl: "https://smokydabear.github.io/css-final-project-saas-solved/",
  },
];
