"use client";

import { useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { gsap, registerGsap, prefersReducedMotion } from "@/lib/animations/gsap";
import { processSteps } from "@/data/site";
import { getLocalized } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  const t = useTranslations("process");
  const locale = useLocale() as "de" | "en";
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(line, {
        scaleY: 0,
        transformOrigin: "top",
        scrollTrigger: {
          trigger: section,
          start: "top 55%",
          end: "bottom 35%",
          scrub: 1,
        },
      });

      section.querySelectorAll("[data-step]").forEach((step, i) => {
        gsap.from(step, {
          x: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.05,
        });

        gsap.to(step.querySelector("[data-badge]"), {
          boxShadow: "0 0 24px rgba(0,174,239,0.5)",
          borderColor: "rgba(0,174,239,0.8)",
          scrollTrigger: {
            trigger: step,
            start: "top 65%",
            end: "top 35%",
            scrub: 1,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-black px-6 py-32 lg:px-8">
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,43,73,0.4),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading subtitle={t("subtitle")} title={t("title")} />

        <div className="relative grid gap-12 md:grid-cols-[1px_1fr] md:gap-16">
          <div
            ref={lineRef}
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan via-cyan/40 to-transparent shadow-[0_0_12px_rgba(0,174,239,0.5)] md:block"
          />
          <div className="space-y-16 md:col-start-2">
            {processSteps.map((step, index) => (
              <article
                key={step.id}
                data-step
                className="group relative pl-12 transition-colors duration-500 md:pl-0"
              >
                <span
                  data-badge
                  className={cn(
                    "absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full",
                    "border border-cyan/40 bg-black text-xs text-cyan transition-all duration-500 md:-left-16",
                    "group-hover:scale-110 group-hover:text-white",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl uppercase tracking-wide transition-colors duration-300 group-hover:text-cyan">
                  {getLocalized(step.title, locale)}
                </h3>
                <p className="mt-3 max-w-xl text-white/60 transition-colors duration-300 group-hover:text-white/80">
                  {getLocalized(step.description, locale)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
