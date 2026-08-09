import type { Project } from "../types";

/**
 * Project catalog for the portfolio.
 *
 * Gallery images: add extra page screenshots under
 * /public/page-previews/<slug>/ and append their paths to `gallery`.
 * The cover is always shown first in the gallery viewer.
 */
export const projects: Project[] = [
  {
    slug: "how-high",
    title: "How High",
    cover: "/page-previews/how-high.jpg",
    gallery: [
      "/gallery/how-high-1.webp",
      "/gallery/how-high-2.webp",
      "/gallery/how-high-3.webp",
    ],
    summary:
      "A full dispensary storefront with live product listings, weekly specials, and customer contact.",
    description: [
      "How High is a production site built for a working dispensary. It presents the full product catalog with categories, pricing, and availability, alongside rotating weekly specials that the shop can update without touching code.",
      "The site is built on Next.js with Supabase powering the product data layer, giving the owners a fast storefront with a simple way to manage inventory. The design leans into bold typography and high-contrast product cards so the catalog stays scannable on any device.",
      "Beyond the catalog, the site carries the shop's story with an about page and a contact form wired for customer questions — everything a local storefront needs to be found and trusted online.",
    ],
    categories: ["Client Work", "E-commerce"],
    tags: ["NextJs", "Supabase", "E-commerce", "Design"],
    links: [
      {
        label: "Visit live site",
        url: "https://howhighmmj.com/",
        kind: "live",
      },
    ],
    featured: true,
  },
  {
    slug: "apex-auto",
    title: "Apex Automotive",
    cover: "/page-previews/apex-auto.jpg",
    gallery: [
      "/gallery/apex-1.webp",
      "/gallery/apex-2.webp",
      "/gallery/apex-3.webp",
      "/gallery/apex-4.webp",
      "/gallery/apex-5.webp",
    ],
    summary:
      "A concept site for automotive service centers, with online appointment scheduling and a dedicated contact page.",
    description: [
      "Apex Automotive is a concept site designed to showcase the potential for a landing page for automotive service centers. Built with a sleek design, featuring modern UI elements and intuitive navigation. The online appointment scheduling system allows customers to book services effortlessly, and in production would integrate with the shop's calendar and notification system to streamline appointments, and prevent overbooking and scheduling conflicts.",
    ],
    categories: ["Automotive", "Concept"],
    tags: ["JavaScript", "React", "Web App", "Automotive"],
    links: [
      {
        label: "Visit live site",
        url: "https://apex-automotive-nine.vercel.app/",
        kind: "live",
      },
      {
        label: "View source",
        url: "https://github.com/SmokyDaBear/apex-automotive",
        kind: "source",
      },
    ],
    featured: true,
  },
  {
    slug: "quote-calculator",
    title: "Quote Calculator",
    cover: "/page-previews/quote-calculator.jpg",
    gallery: [],
    summary:
      "An offline-capable PWA that decodes VINs, checks recalls, and builds vehicle maintenance quotes.",
    description: [
      "Quote Calculator is a progressive web app built for the service counter. It integrates with the NHTSA API to decode VINs and surface open recalls, then lets users save vehicles and generate maintenance quotes from stored data.",
      "Everything persists locally in IndexedDB, so the app keeps working with no connection — saved vehicles, quote history, and pricing data are all available offline and sync back up seamlessly when the network returns.",
      "This project draws directly on my automotive background: it is shaped around how service writers actually work, cutting quote turnaround from a paper-and-phone process to a few taps.",
    ],
    categories: ["Web App", "Tools"],
    tags: ["JavaScript", "IndexedDB", "API Integration", "PWA", "Automotive"],
    links: [
      {
        label: "Visit live site",
        url: "https://smokydabear.github.io/quote-calculator/",
        kind: "live",
      },
    ],
    featured: true,
  },
  {
    slug: "notes-app",
    title: "Code Wiki",
    cover: "/page-previews/notes-app.jpg",
    gallery: [],
    summary:
      "A markdown-powered knowledge base for programming notes with full-text search and deep links.",
    description: [
      "Code Wiki is a personal knowledge base that renders a library of markdown notes on programming topics into a browsable, searchable wiki. Notes are organized into sections, and every note and section is deep-linkable so a specific answer can be shared with a single URL.",
      "The app is built in React with a lightweight markdown pipeline and a search function that scans across every note, making it fast to pull up syntax, patterns, or setup steps mid-task.",
      "It doubles as my own study system — writing the notes cements the learning, and the app keeps them a keystroke away.",
    ],
    categories: ["Web App", "Learning"],
    tags: ["React", "E-Learning", "Search Functionality"],
    links: [
      {
        label: "Visit live site",
        url: "https://smokydabear.github.io/code-wiki-app/?note=home.md&section=home",
        kind: "live",
      },
      {
        label: "View source",
        url: "https://github.com/SmokyDaBear/code-wiki-app",
        kind: "source",
      },
    ],
  },
  {
    slug: "remmys-bakery",
    title: "Remmy's Bakery",
    cover: "/page-previews/remmys-bakery.jpg",
    gallery: [
      "/gallery/bakery-1.webp",
      "/gallery/bakery-2.webp",
      "/gallery/bakery-3.webp",
    ],
    summary:
      "A warm, appetizing storefront site for a neighborhood bakery with menu and ordering flow.",
    description: [
      "Remmy's Bakery is a small-business storefront designed to make you hungry. The layout puts photography first, with a menu of baked goods presented in rich, tactile cards and a clear path from browsing to ordering.",
      "The design goal was warmth: soft colors, generous spacing, and type that feels handmade rather than corporate — matching the feel of a neighborhood bakery while staying fast and responsive on phones, where most customers browse.",
    ],
    categories: ["Small Business", "E-commerce"],
    tags: ["Food", "E-commerce", "Design"],
    links: [
      {
        label: "Visit live site",
        url: "https://smokydabear.github.io/remmys-bakery-site",
        kind: "live",
      },
      {
        label: "View source",
        url: "https://github.com/SmokyDaBear/remmys-bakery-site",
        kind: "source",
      },
    ],
  },
  {
    slug: "cocktails",
    title: "Cocktails as a Service",
    cover: "/page-previews/cocktails.jpg",
    gallery: [],
    summary:
      "Search a live cocktail database by name or ingredient and get full recipes instantly.",
    description: [
      "Cocktails as a Service is a recipe finder built on a public cocktail API. Type a drink name or an ingredient you have on hand, and it returns matching recipes with ingredients, measures, and preparation steps.",
      "The project focuses on clean API consumption and responsive search UX — debounced queries, graceful empty states, and result cards that surface the essentials without a click.",
    ],
    categories: ["Tools"],
    tags: ["JavaScript", "API Integration", "Search Functionality"],
    links: [
      {
        label: "Visit live site",
        url: "https://smokydabear.github.io/cocktails-as-a-service/",
        kind: "live",
      },
      {
        label: "View source",
        url: "https://github.com/SmokyDaBear/cocktails-as-a-service",
        kind: "source",
      },
    ],
  },
  {
    slug: "green-lyon-automotive",
    title: "Green Lyon Automotive",
    cover: "/page-previews/auto-site.jpg",
    gallery: [],
    summary:
      "An automotive repair shop site with services, trust signals, and a clear booking path.",
    description: [
      "Green Lyon Automotive is a site for an independent repair shop, structured around what shop customers actually need: what the shop fixes, why they can be trusted, and how to book.",
      "The design uses an industrial palette and bold section breaks to feel at home in the trade, while service listings and calls to action stay prominent on every screen size.",
      "My years in auto repair and service writing informed the content structure — the page answers the questions customers ask at the counter before they have to call.",
    ],
    categories: ["Automotive", "Concept"],
    tags: ["Automotive"],
    links: [
      {
        label: "Visit live site",
        url: "https://smokydabear.github.io/auto-site/",
        kind: "live",
      },
      {
        label: "View source",
        url: "https://github.com/SmokyDaBear/auto-site",
        kind: "source",
      },
    ],
  },
  {
    slug: "folio",
    title: "folio.",
    cover: "/page-previews/folio.jpg",
    gallery: [],
    summary:
      "A previous portfolio build with theme switching, project search, and modal-driven browsing.",
    description: [
      "folio. is a much earlier iteration of my portfolio, built in vanilla JavaScript as an exercise in doing rich UI without a framework: theme switching, live project search, and modal-based project details, all hand-rolled.",
      "It remains a good snapshot of fundamentals — DOM state management, event delegation, and CSS architecture — and a fun before/after against the site you're reading now.",
    ],
    categories: ["Concept"],
    tags: ["JavaScript", "Search Functionality"],
    links: [
      {
        label: "Visit live site",
        url: "https://smokydabear.github.io/folio-project/",
        kind: "live",
      },
      {
        label: "View source",
        url: "https://github.com/SmokyDaBear/folio-project",
        kind: "source",
      },
    ],
  },
  {
    slug: "message-encrypter",
    title: "Message Encryption Site",
    cover: "/page-previews/encrypter.jpg",
    gallery: [],
    summary:
      "Encode and decode messages with rail fence and Caesar ciphers in an interactive playground.",
    description: [
      "A small cryptography playground that encrypts and decrypts messages using classic techniques — the rail fence transposition cipher and the Caesar shift cipher — with the results updating as you type.",
      "The project was an exercise in algorithm implementation and input handling: mapping text through cipher transforms in both directions while keeping the interface simple enough to play with.",
    ],
    categories: ["Tools", "Concept"],
    tags: ["JavaScript", "Cryptography"],
    links: [
      {
        label: "Visit live site",
        url: "https://smokydabear.github.io/message-encryption-site/",
        kind: "live",
      },
      {
        label: "View source",
        url: "https://github.com/SmokyDaBear/message-encryption-site",
        kind: "source",
      },
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate Listings",
    cover: "/page-previews/real-estate.jpg",
    gallery: [
      "/gallery/real-estate-1.webp",
      "/gallery/real-estate-2.webp",
      "/gallery/real-estate-3.webp",
      "/gallery/real-estate-4.webp",
    ],
    summary:
      "A property listings concept with browsable homes, agent profiles, and lead capture.",
    description: [
      "A real estate concept site presenting property listings in a clean, filterable grid with photography-forward cards — price, beds, and location visible at a glance.",
      "The layout was designed to scale from a handful of featured homes to a full catalog, with agent sections and lead capture forms rounding out a realistic agency site structure.",
    ],
    categories: ["Concept", "Small Business"],
    tags: ["Search Functionality", "Design", "React"],
    links: [
      {
        label: "Visit live site",
        url: "https://smokydabear.github.io/real-estate/",
        kind: "live",
      },
      {
        label: "View source",
        url: "https://github.com/SmokyDaBear/real-estate",
        kind: "source",
      },
    ],
  },
  {
    slug: "front-saas",
    title: "Front",
    cover: "/page-previews/saas.jpg",
    gallery: ["/gallery/front-1.webp"],
    summary:
      "A polished SaaS landing page concept with pricing tiers, feature grids, and conversion-focused layout.",
    description: [
      "Front is a software-as-a-service landing page concept covering the full marketing-page anatomy: hero with value proposition, feature grid, social proof, pricing tiers, and footer conversion points.",
      "The build focused on modern CSS — responsive grid layouts, consistent spacing rhythm, and component patterns that could lift straight into a real product site. This was one of my first projects built on my learning journey.",
    ],
    categories: ["Concept"],
    tags: ["Design"],
    links: [
      {
        label: "Visit live site",
        url: "https://smokydabear.github.io/css-final-project-saas-solved/",
        kind: "live",
      },
      {
        label: "View source",
        url: "https://github.com/SmokyDaBear/css-final-project-saas-solved",
        kind: "source",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function featuredProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function allCategories(): string[] {
  return [...new Set(projects.flatMap((p) => p.categories))];
}

/** Rank other projects by shared tags (categories break ties). */
export function similarProjects(project: Project, count = 3): Project[] {
  return projects
    .filter((p) => p.slug !== project.slug)
    .map((p) => ({
      project: p,
      score:
        p.tags.filter((t) => project.tags.includes(t)).length * 2 +
        p.categories.filter((c) => project.categories.includes(c)).length,
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((entry) => entry.project);
}
