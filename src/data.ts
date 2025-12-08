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
import type { project, TFaq, Tservice } from "./types";

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

export const services: Tservice[] = [
  {
    name: "Web Development",
    icon: webDev,
    description:
      "Building responsive and dynamic websites using modern technologies.",
    descriptionLong:
      "I specialize in creating websites that are not only visually appealing but also optimized for performance and search engines. Whether you need a simple landing page or a complex web application, I can deliver a solution tailored to your needs.",
  },
  {
    name: "SEO Optimization",
    icon: seo,
    description:
      "Improving website visibility on search engines through optimization techniques.",
    descriptionLong:
      "I implement SEO best practices to enhance your website's visibility on search engines. This includes keyword research, on-page optimization, and improving site structure to help drive organic traffic and improve your search rankings.",
  },
  {
    name: "Responsive Design",
    icon: responsive,
    description:
      "Designing websites that look great on all devices, from desktops to mobile phones.",
    descriptionLong:
      "I ensure that your website is fully responsive, providing an optimal viewing experience across a wide range of devices. This includes flexible layouts, images, and CSS media queries to adapt the design to different screen sizes.",
  },
  {
    name: "API Integration",
    icon: api,
    description:
      "Seamlessly integrate third-party APIs, or custom services fitting your needs.",
    descriptionLong:
      "I can assist with integrating third-party APIs to enhance your website's functionality or create custom APIs tailored to your specific needs. Whether it's syncing data between platforms or implementing secure authentication, I provide solutions that improve user experience and streamline operations.",
  },
  {
    name: "Website Redesign/Styling",
    icon: uiUx,
    descriptionLong:
      "If your current website feels outdated or doesn't reflect your brand effectively, I can help revamp its design. My redesign services focus on modern aesthetics, improved navigation, and enhanced user experience to ensure your website stands out and effectively communicates your brand message.",
    description:
      "Updating and enhancing existing websites UI/UX to improve visual appeal and user experience.",
  },
];

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

export const faqs: TFaq[] = [
  {
    question: "What services do you offer?",
    answer:
      "I offer a range of web development services including website design, development, SEO optimization, and ongoing maintenance. I specialize in creating responsive and user-friendly websites tailored to your business needs.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline for building a website varies depending on the complexity and scope of the project. A simple website can take a few weeks, while more complex projects may take several months. I work closely with clients to establish realistic timelines based on their specific requirements.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "My pricing is project-based and depends on the specific services required. I provide detailed quotes after discussing your project needs and goals. I strive to offer competitive rates while ensuring high-quality work.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, I offer ongoing support and maintenance packages to ensure your website remains up-to-date, secure, and functioning optimally. This includes regular updates, backups, and troubleshooting as needed.",
  },
  {
    question: "How can I get started with my project?",
    answer:
      "To get started, simply reach out to me through the contact form on my website. We can discuss your project ideas, goals, and requirements, and I'll provide you with a customized proposal to move forward.",
  },
];
