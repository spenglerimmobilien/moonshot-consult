"use client";

import { useLocale, useTranslations } from "next-intl";
import { projects } from "@/data/projects";
import { getLocalized } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CinematicCard } from "@/components/ui/CinematicCard";

export function PortfolioPageContent() {
  const t = useTranslations("portfolio");
  const locale = useLocale() as "de" | "en";

  return (
    <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
      <SectionHeading subtitle={t("subtitle")} title={t("title")} />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block transition-transform duration-500 active:scale-[0.98]"
            aria-label={`${project.title} – ${t("viewProject")}`}
          >
            <CinematicCard gradient={project.gradient} className="aspect-[4/5] md:aspect-[3/4]">
              <div className="flex h-full flex-col justify-end p-8">
                <p className="text-xs uppercase tracking-widest text-cyan transition-transform duration-500 group-hover:translate-x-1">
                  {project.client}
                </p>
                <h3 className="mt-2 font-display text-2xl uppercase transition-transform duration-500 group-hover:translate-x-2">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-white/60 transition-colors duration-300 group-hover:text-white/80">
                  {getLocalized(project.description, locale)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60 backdrop-blur-sm transition-colors duration-300 group-hover:border-cyan/30 group-hover:text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-xs uppercase tracking-widest text-cyan opacity-0 transition-all duration-500 group-hover:opacity-100">
                  {t("viewProject")} →
                </p>
              </div>
            </CinematicCard>
          </a>
        ))}
      </div>
    </div>
  );
}
