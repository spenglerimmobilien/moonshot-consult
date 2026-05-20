"use client";

import { useTranslations } from "next-intl";

export function SkipLink() {
  const t = useTranslations("a11y");

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-cyan focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-black"
    >
      {t("skipToContent")}
    </a>
  );
}
