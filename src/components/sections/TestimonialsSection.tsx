"use client";

import { useLocale, useTranslations } from "next-intl";
import { testimonials } from "@/data/testimonials";
import { getLocalized } from "@/lib/utils";
import { useStaggerReveal } from "@/hooks/useScrollAnimation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const locale = useLocale() as "de" | "en";
  const gridRef = useStaggerReveal<HTMLDivElement>("[data-card]", {
    y: 60,
    stagger: 0.15,
    duration: 1,
  });

  return (
    <section className="relative bg-black px-6 py-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,174,239,0.04),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading subtitle={t("subtitle")} title={t("title")} align="center" />
        <div ref={gridRef} className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.id}
              data-card
              className={cn(
                "group rounded-2xl border border-white/5 bg-surface p-8",
                "transition-all duration-500 hover:-translate-y-2",
                "hover:border-cyan/30 hover:shadow-[0_20px_60px_rgba(0,174,239,0.12)]",
              )}
            >
              <p className="text-sm leading-relaxed text-white/70 transition-colors duration-300 group-hover:text-white/90">
                &ldquo;{getLocalized(item.quote, locale)}&rdquo;
              </p>
              <footer className="mt-6 border-t border-white/5 pt-6 transition-colors duration-300 group-hover:border-cyan/20">
                <p className="font-medium text-white">{item.name}</p>
                <p className="mt-1 text-xs text-muted group-hover:text-white/60">
                  {getLocalized(item.role, locale)}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
