import type {
  PricingFaq,
  PricingFeature,
  PricingTier,
} from "@/types/content";

export const pricingTiers: PricingTier[] = [
  {
    id: "essentials",
    title: {
      de: "Essentials",
      en: "Essentials",
    },
    description: {
      de: "Kompakte Business-Website für einen professionellen ersten Eindruck — klar strukturiert und mobil optimiert.",
      en: "A compact business website for a professional first impression — clearly structured and mobile-optimized.",
    },
    highlights: [
      {
        de: "5–8 Seiten inkl. Kontakt & Rechtliches",
        en: "5–8 pages incl. contact & legal",
      },
      {
        de: "Responsive Design & moderne UI",
        en: "Responsive design & modern UI",
      },
      {
        de: "Launch-Begleitung & Deployment",
        en: "Launch support & deployment",
      },
    ],
  },
  {
    id: "business",
    title: {
      de: "Business",
      en: "Business",
    },
    description: {
      de: "Erweiterter Auftritt für Unternehmen mit höheren Ansprüchen — Mehrsprachigkeit, Integrationen und SEO inklusive.",
      en: "An expanded presence for businesses with higher expectations — multilingual setup, integrations, and SEO included.",
    },
    highlights: [
      {
        de: "Zweisprachig (DE/EN) & SEO-Grundlagen",
        en: "Bilingual (DE/EN) & SEO fundamentals",
      },
      {
        de: "Integrationen (Reservierung, Konfigurator u. a.)",
        en: "Integrations (booking, configurator, etc.)",
      },
      {
        de: "Content-Beratung & erweiterte Sections",
        en: "Content consulting & extended sections",
      },
    ],
    recommended: true,
  },
  {
    id: "custom",
    title: {
      de: "Custom Moonshot",
      en: "Custom Moonshot",
    },
    description: {
      de: "Individuelle Lösung von der Strategie bis zur Umsetzung — für Marken, die mehr als eine Standard-Website brauchen.",
      en: "A bespoke solution from strategy to execution — for brands that need more than a standard website.",
    },
    highlights: [
      {
        de: "Strategie, Branding & individuelle Features",
        en: "Strategy, branding & custom features",
      },
      {
        de: "Komplexe Workflows & Sonderentwicklung",
        en: "Complex workflows & custom development",
      },
      {
        de: "Langfristige Betreuung auf Wunsch",
        en: "Long-term support on request",
      },
    ],
  },
];

export const pricingFeatures: PricingFeature[] = [
  {
    id: "design",
    label: { de: "UI/UX Design", en: "UI/UX design" },
    availability: { essentials: "yes", business: "yes", custom: "yes" },
  },
  {
    id: "development",
    label: { de: "Entwicklung & Responsive", en: "Development & responsive" },
    availability: { essentials: "yes", business: "yes", custom: "yes" },
  },
  {
    id: "pages",
    label: { de: "Kernseiten (Start, Leistungen, Kontakt …)", en: "Core pages (home, services, contact …)" },
    availability: { essentials: "yes", business: "yes", custom: "yes" },
  },
  {
    id: "legal",
    label: { de: "Impressum & Datenschutz", en: "Imprint & privacy" },
    availability: { essentials: "yes", business: "yes", custom: "yes" },
  },
  {
    id: "seo",
    label: { de: "SEO-Grundlagen", en: "SEO fundamentals" },
    availability: { essentials: "partial", business: "yes", custom: "yes" },
  },
  {
    id: "i18n",
    label: { de: "Mehrsprachigkeit (DE/EN)", en: "Multilingual (DE/EN)" },
    availability: { essentials: "no", business: "yes", custom: "yes" },
  },
  {
    id: "integrations",
    label: { de: "Externe Integrationen", en: "Third-party integrations" },
    availability: { essentials: "no", business: "yes", custom: "yes" },
  },
  {
    id: "content",
    label: { de: "Content-Beratung", en: "Content consulting" },
    availability: { essentials: "no", business: "partial", custom: "yes" },
  },
  {
    id: "branding",
    label: { de: "Brand Identity & Visual System", en: "Brand identity & visual system" },
    availability: { essentials: "no", business: "no", custom: "yes" },
  },
  {
    id: "custom-features",
    label: { de: "Individuelle Features & Workflows", en: "Custom features & workflows" },
    availability: { essentials: "no", business: "partial", custom: "yes" },
  },
  {
    id: "launch",
    label: { de: "Launch & Deployment", en: "Launch & deployment" },
    availability: { essentials: "yes", business: "yes", custom: "yes" },
  },
  {
    id: "support",
    label: { de: "Laufende Betreuung", en: "Ongoing support" },
    availability: { essentials: "no", business: "partial", custom: "yes" },
  },
];

export const pricingFaqs: PricingFaq[] = [
  {
    id: "no-fixed-prices",
    question: {
      de: "Warum gibt es keine Festpreise auf der Website?",
      en: "Why are there no fixed prices on the website?",
    },
    answer: {
      de: "Jedes Projekt ist anders — Umfang, Inhalte und Integrationen variieren. Deshalb erstellen wir nach einem kurzen Briefing ein individuelles Angebot, das zu Ihren Zielen passt.",
      en: "Every project is different — scope, content, and integrations vary. That's why we create a tailored proposal after a short briefing that fits your goals.",
    },
  },
  {
    id: "how-quote",
    question: {
      de: "Wie läuft ein Angebot ab?",
      en: "How does the quoting process work?",
    },
    answer: {
      de: "Sie beschreiben Ihr Projekt über das Kontaktformular — inklusive Budget-Rahmen. Wir melden uns werktags, klären offene Fragen und senden Ihnen ein transparentes Angebot.",
      en: "You describe your project via the contact form — including your budget range. We'll get back to you on business days, clarify open questions, and send a transparent proposal.",
    },
  },
  {
    id: "cost-range",
    question: {
      de: "Was kostet eine Website ungefähr?",
      en: "What does a website roughly cost?",
    },
    answer: {
      de: "Als Orientierung: Kompakte Business-Websites beginnen im unteren vierstelligen Bereich, erweiterte Projekte liegen höher. Im Gespräch und über das Budget-Feld im Formular finden wir schnell heraus, welches Paket passt.",
      en: "As a guide: compact business websites start in the lower four-digit range, expanded projects are higher. In conversation and via the budget field in the form, we quickly find out which package fits.",
    },
  },
  {
    id: "which-package",
    question: {
      de: "Welches Paket ist das Richtige für mich?",
      en: "Which package is right for me?",
    },
    answer: {
      de: "Essentials eignet sich für einen klaren Online-Auftritt mit Kernseiten. Business ist ideal, wenn Mehrsprachigkeit, SEO oder Integrationen wichtig sind. Custom Moonshot für alles Darüber hinaus.",
      en: "Essentials suits a clear online presence with core pages. Business is ideal when multilingual setup, SEO, or integrations matter. Custom Moonshot for everything beyond that.",
    },
  },
  {
    id: "timeline",
    question: {
      de: "Wie lange dauert die Umsetzung?",
      en: "How long does implementation take?",
    },
    answer: {
      de: "Je nach Umfang und Feedback-Zyklen rechnen wir mit wenigen Wochen bis mehreren Monaten. Den realistischen Zeitplan besprechen wir transparent im Angebot.",
      en: "Depending on scope and feedback cycles, we estimate from a few weeks to several months. We discuss a realistic timeline transparently in the proposal.",
    },
  },
  {
    id: "hosting",
    question: {
      de: "Sind Hosting und Wartung enthalten?",
      en: "Are hosting and maintenance included?",
    },
    answer: {
      de: "Deployment und Launch-Support sind in allen Paketen enthalten. Hosting-Empfehlung und optionale Wartungspakete besprechen wir individuell — abhängig von Ihren Anforderungen.",
      en: "Deployment and launch support are included in all packages. Hosting recommendations and optional maintenance packages are discussed individually — depending on your requirements.",
    },
  },
];
