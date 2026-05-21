export type LocalizedText = {
  de: string;
  en: string;
};

export type ProjectCategory =
  | "web"
  | "visuals"
  | "branding"
  | "web-visuals"
  | "web-branding";

export type Project = {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  tags: string[];
  description: LocalizedText;
  url: string;
  featured: boolean;
  gradient: string;
  image?: string;
};

export type Service = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  icon: "globe" | "palette" | "sparkles" | "compass";
};

export type PricingTierId = "essentials" | "business" | "custom";

export type PricingTier = {
  id: PricingTierId;
  title: LocalizedText;
  description: LocalizedText;
  highlights: LocalizedText[];
  recommended?: boolean;
};

export type PricingFeatureAvailability = "yes" | "no" | "partial";

export type PricingFeature = {
  id: string;
  label: LocalizedText;
  availability: Record<PricingTierId, PricingFeatureAvailability>;
};

export type PricingFaq = {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
};
