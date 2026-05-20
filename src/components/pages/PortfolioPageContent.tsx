"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { projects } from "@/data/projects";
import { getLocalized } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CinematicCard } from "@/components/ui/CinematicCard";
import { cn } from "@/lib/utils";

const filters = ["all", "web", "visuals", "branding"] as const;

export function PortfolioPageContent() {
  const t = useTranslations("portfolio");
  const locale = useLocale() as "de" | "en";
  const [active, setActive] = useState<(typeof filters)[number]>("all");

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.category.includes(active));
  }, [active]);

  const filterLabels = {
    all: t("filterAll"),
    web: t("filterWeb"),
    visuals: t("filterVisuals"),
    branding: t("filterBranding"),
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
      <SectionHeading subtitle={t("subtitle")} title={t("title")} />

      <div className="mb-12 flex flex-wrap gap-3" role="group" aria-label={t("title")}>
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={cn(
              "rounded-full border px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300",
              active === filter
                ? "border-cyan bg-cyan/10 text-cyan shadow-[0_0_20px_rgba(0,174,239,0.2)]"
                : "border-white/10 text-white/50 hover:border-white/30 hover:text-white",
            )}
          >
            {filterLabels[filter]}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="group relative transition-transform duration-500 active:scale-[0.98]"
          >
            <CinematicCard gradient={project.gradient} className="aspect-[16/10]">
              <div className="flex h-full flex-col justify-end p-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-widest text-cyan">
                  {project.client}
                </p>
                <h3 className="mt-2 font-display text-2xl uppercase">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  {getLocalized(project.description, locale)}
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-muted">
                  {t("comingSoon")}
                </p>
              </div>
            </CinematicCard>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-8 transition-opacity duration-500 group-hover:opacity-0">
              <h3 className="font-display text-xl uppercase text-white">
                {project.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
