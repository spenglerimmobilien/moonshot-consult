import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "nexus-finance",
    title: "Nexus Finance",
    client: "Nexus Capital GmbH",
    category: "web",
    tags: ["Web Design", "Fintech", "UI/UX"],
    description: {
      de: "Premium-Fintech-Plattform mit klarer Informationsarchitektur und vertrauenswürdigem Design.",
      en: "Premium fintech platform with clear information architecture and trustworthy design.",
    },
    url: "#",
    featured: true,
    gradient: "linear-gradient(135deg, #002B49 0%, #001a2e 50%, #00AEEF33 100%)",
  },
  {
    id: "aurora-wellness",
    title: "Aurora Wellness",
    client: "Aurora Health Studio",
    category: "web-visuals",
    tags: ["Branding", "Web Design", "Visual Identity"],
    description: {
      de: "Ganzheitliche Marken- und Web-Erfahrung für ein modernes Wellness-Studio.",
      en: "Holistic brand and web experience for a modern wellness studio.",
    },
    url: "#",
    featured: true,
    gradient: "linear-gradient(135deg, #0a1628 0%, #002B49 40%, #00AEEF44 100%)",
  },
  {
    id: "stellar-tech",
    title: "Stellar Tech",
    client: "Stellar Systems AG",
    category: "web",
    tags: ["SaaS", "Web App", "Digital Strategy"],
    description: {
      de: "Skalierbare SaaS-Website mit fokussierter Conversion-Story und Product-Led-Growth.",
      en: "Scalable SaaS website with focused conversion story and product-led growth.",
    },
    url: "#",
    featured: true,
    gradient: "linear-gradient(135deg, #000814 0%, #002B49 60%, #00AEEF22 100%)",
  },
  {
    id: "lumen-architecture",
    title: "Lumen Architecture",
    client: "Lumen Architekten",
    category: "visuals",
    tags: ["Visual Identity", "Photography", "Print"],
    description: {
      de: "Visuelle Identität und Bildsprache für eine führende Architekturkanzlei.",
      en: "Visual identity and imagery for a leading architecture firm.",
    },
    url: "#",
    featured: true,
    gradient: "linear-gradient(135deg, #001525 0%, #003d66 50%, #00AEEF33 100%)",
  },
  {
    id: "pulse-events",
    title: "Pulse Events",
    client: "Pulse Live GmbH",
    category: "web-branding",
    tags: ["Event", "Web Design", "Social Media"],
    description: {
      de: "Energiegeladene Event-Marke mit dynamischer Website und Social-Assets.",
      en: "Energetic event brand with dynamic website and social assets.",
    },
    url: "#",
    featured: false,
    gradient: "linear-gradient(135deg, #0d1b2a 0%, #002B49 45%, #00AEEF55 100%)",
  },
  {
    id: "vertex-legal",
    title: "Vertex Legal",
    client: "Vertex Partners",
    category: "web",
    tags: ["Corporate", "Web Design", "SEO"],
    description: {
      de: "Seriöser Corporate-Auftritt für eine international tätige Kanzlei.",
      en: "Authoritative corporate presence for an internationally active law firm.",
    },
    url: "#",
    featured: false,
    gradient: "linear-gradient(135deg, #000000 0%, #002B49 70%, #00AEEF22 100%)",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectsByCategory(category: string) {
  if (category === "all") return projects;
  return projects.filter((p) => p.category.includes(category));
}
