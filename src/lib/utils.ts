import type { Locale } from "@/i18n/routing";
import type { LocalizedText } from "@/types/content";

export function getLocalized<T extends LocalizedText>(
  text: T,
  locale: Locale,
): string {
  return text[locale];
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
