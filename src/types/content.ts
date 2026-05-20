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

export type Testimonial = {
  id: string;
  quote: LocalizedText;
  name: string;
  role: LocalizedText;
};
