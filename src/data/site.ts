import type { LocalizedText } from "@/types/content";

export const site = {
  name: "Moonshot Consult",
  tagline: {
    de: "Digitale Auftritte, die Eindruck hinterlassen",
    en: "Digital presence that makes an impact",
  } satisfies LocalizedText,
  email: "hello@moonshot-consult.de",
  phone: "+49 30 1234 5678",
  location: {
    de: "Berlin, Deutschland",
    en: "Berlin, Germany",
  } satisfies LocalizedText,
  social: {
    instagram: "#",
    linkedin: "#",
    behance: "#",
  },
} as const;

export const processSteps = [
  {
    id: "discovery",
    title: { de: "Discovery", en: "Discovery" },
    description: {
      de: "Wir analysieren Ziele, Zielgruppe und Wettbewerb – die Basis für jeden Moonshot.",
      en: "We analyze goals, audience, and competition — the foundation for every moonshot.",
    },
  },
  {
    id: "design",
    title: { de: "Design", en: "Design" },
    description: {
      de: "Visuelle Konzepte und UI-Systeme, die Marke und Nutzererfahrung vereinen.",
      en: "Visual concepts and UI systems that unite brand and user experience.",
    },
  },
  {
    id: "build",
    title: { de: "Build", en: "Build" },
    description: {
      de: "Pixel-perfekte Umsetzung mit modernster Technologie und Liebe zum Detail.",
      en: "Pixel-perfect execution with cutting-edge technology and attention to detail.",
    },
  },
  {
    id: "launch",
    title: { de: "Launch", en: "Launch" },
    description: {
      de: "Go-live, Optimierung und Begleitung – damit Ihr Auftritt nachhaltig wirkt.",
      en: "Go-live, optimization, and support — so your presence delivers lasting impact.",
    },
  },
] as const;

export const marqueeItems = [
  "Web Design",
  "Visual Identity",
  "Digital Presence",
  "Brand Strategy",
  "UI/UX",
  "Homepage Development",
  "Creative Direction",
  "Motion Design",
] as const;
