"use client";

import { useLocale, useTranslations } from "next-intl";
import { legalNotice, privacyPolicy } from "@/data/legal";
import { getLocalized } from "@/lib/utils";

type LegalPageContentProps = {
  type: "imprint" | "privacy";
};

export function LegalPageContent({ type }: LegalPageContentProps) {
  const t = useTranslations("legal");
  const locale = useLocale() as "de" | "en";
  const content = type === "imprint" ? legalNotice : privacyPolicy;

  return (
    <div className="mx-auto max-w-3xl px-6 py-32 lg:px-8">
      <p className="mb-4 text-xs uppercase tracking-widest text-cyan">
        {t("placeholderNotice")}
      </p>
      <h1 className="font-display text-4xl font-bold uppercase tracking-wide md:text-5xl">
        {getLocalized(content.title, locale)}
      </h1>
      <p className="mt-4 text-sm text-muted">
        {getLocalized(content.disclaimer, locale)}
      </p>

      <div className="mt-12 space-y-10">
        {content.sections.map((section) => (
          <section key={getLocalized(section.heading, locale)}>
            <h2 className="text-lg font-semibold text-white">
              {getLocalized(section.heading, locale)}
            </h2>
            <div className="mt-3 whitespace-pre-line text-sm leading-relaxed text-white/65">
              {getLocalized(section.content, locale)}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
