import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "droste-lederwaren",
    title: "DROSTE Lederwaren",
    client: "DROSTE Lederwaren · Gelsenkirchen-Buer",
    category: "web",
    tags: ["Web Design", "UI/UX", "Einzelhandel"],
    description: {
      de: "Premium-Fachgeschäft für Lederwaren seit 1936 — elegante Website mit persönlicher Beratung im Fokus.",
      en: "Premium leather goods store since 1936 — an elegant website with personal consultation at its core.",
    },
    url: "https://droste-lederwaren.vercel.app/",
    featured: true,
    gradient: "linear-gradient(135deg, #1a1008 0%, #3d2e22 45%, #c4a57444 100%)",
  },
  {
    id: "hexenhaeuschen",
    title: "Zum Hexenhäuschen",
    client: "Restaurant · Gelsenkirchen-Buer",
    category: "web",
    tags: ["Web Design", "Gastronomie", "UI/UX"],
    description: {
      de: "Restaurant-Website mit Speisekarte, Veranstaltungen und Online-Reservierung — gemütlich und einladend.",
      en: "Restaurant website with menu, events, and online reservations — warm and inviting.",
    },
    url: "https://hexenhaeuschen.vercel.app/",
    featured: true,
    gradient: "linear-gradient(135deg, #140a06 0%, #3d2018 50%, #d4845a44 100%)",
  },
  {
    id: "zahnarzt-dohle",
    title: "Zahnarztpraxis Dr. Dohle",
    client: "Praxis Dohle · Gelsenkirchen-Buer",
    category: "web",
    tags: ["Web Design", "Praxis", "Zweisprachig"],
    description: {
      de: "Moderne Zahnarztpraxis-Website mit Leistungsübersicht, Team und Terminvereinbarung — vertrauensvoll und klar.",
      en: "Modern dental practice website with services, team, and appointment booking — trustworthy and clear.",
    },
    url: "https://web-site-zahnarzt-dohle.vercel.app/de",
    featured: true,
    gradient: "linear-gradient(135deg, #0a1628 0%, #1e3a5f 55%, #7eb8da33 100%)",
  },
  {
    id: "md-bauelemente",
    title: "MD Bauelemente",
    client: "Fensterbauer · Haltern am See",
    category: "web",
    tags: ["Web Design", "Handwerk", "Konfigurator"],
    description: {
      de: "Digitale Fenster- und Türen-Website mit Kostenschätzung, Haustür-Konfigurator und Terminbuchung — einfach, zuverlässig, regional.",
      en: "Digital windows and doors website with cost estimation, front door configurator, and appointment booking — simple, reliable, and local.",
    },
    url: "https://www.md-bauelemente.de/",
    featured: true,
    gradient: "linear-gradient(135deg, #0c1410 0%, #1a3328 50%, #4a9e7844 100%)",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
