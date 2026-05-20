import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    id: "web",
    title: {
      de: "Homepage-Erstellung",
      en: "Website Development",
    },
    description: {
      de: "Maßgeschneiderte Websites, die Ihre Marke perfekt repräsentieren und Besucher in Kunden verwandeln. Von der Konzeption bis zum Launch – alles aus einer Hand.",
      en: "Tailored websites that represent your brand perfectly and turn visitors into customers. From concept to launch — everything from a single source.",
    },
    icon: "globe",
  },
  {
    id: "visuals",
    title: {
      de: "Visual Design",
      en: "Visual Design",
    },
    description: {
      de: "Hochwertige Visuals, die Emotionen wecken und Ihre Botschaft unvergesslich machen. Illustrationen, Mockups und digitale Assets auf Premium-Niveau.",
      en: "High-end visuals that evoke emotion and make your message unforgettable. Illustrations, mockups, and digital assets at a premium level.",
    },
    icon: "palette",
  },
  {
    id: "branding",
    title: {
      de: "Brand Identity",
      en: "Brand Identity",
    },
    description: {
      de: "Ein kohärentes Markenbild, das Vertrauen schafft und Sie von der Konkurrenz abhebt. Logo, Farben, Typografie und Brand Guidelines.",
      en: "A cohesive brand identity that builds trust and sets you apart. Logo, colors, typography, and brand guidelines.",
    },
    icon: "sparkles",
  },
  {
    id: "strategy",
    title: {
      de: "Digital Strategy",
      en: "Digital Strategy",
    },
    description: {
      de: "Strategische Beratung für Ihren digitalen Auftritt – von der Zielgruppenanalyse bis zur Content-Strategie und Conversion-Optimierung.",
      en: "Strategic consulting for your digital presence — from audience analysis to content strategy and conversion optimization.",
    },
    icon: "compass",
  },
];
