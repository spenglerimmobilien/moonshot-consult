"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { gsap, registerGsap, prefersReducedMotion } from "@/lib/animations/gsap";
import { featuredProjects } from "@/data/projects";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CinematicCard } from "@/components/ui/CinematicCard";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  viewLabel,
}: {
  project: (typeof featuredProjects)[number];
  viewLabel: string;
}) {
  return (
    <article className="group relative w-[85vw] shrink-0 snap-center md:w-[60vw] lg:w-[45vw]">
      <CinematicCard gradient={project.gradient} className="aspect-[16/10]">
        <div className="flex h-full flex-col justify-end p-8 md:p-10">
          <p className="text-xs uppercase tracking-widest text-cyan transition-transform duration-500 group-hover:translate-x-1">
            {project.client}
          </p>
          <h3 className="mt-2 font-display text-3xl uppercase transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
            {project.title}
          </h3>
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
          <p className="mt-6 text-xs uppercase tracking-widest text-cyan opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {viewLabel} →
          </p>
        </div>
      </CinematicCard>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        title={viewLabel}
        className="absolute inset-0 rounded-2xl"
        aria-label={`${project.title} – ${viewLabel}`}
      />
    </article>
  );
}

export function WorkSection() {
  const t = useTranslations("work");
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    registerGsap();
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    if (prefersReducedMotion()) return;

    const getScrollAmount = () => track.scrollWidth - window.innerWidth + 80;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-surface py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(0,174,239,0.06),transparent_50%)]" />

      <div className="relative mx-auto mb-12 max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading subtitle={t("subtitle")} title={t("title")} className="mb-0" />
          <Link
            href="/portfolio"
            className="group text-sm uppercase tracking-widest text-cyan transition hover:text-white"
          >
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              {t("viewAll")} →
            </span>
          </Link>
        </div>
        <p className="mt-4 text-xs uppercase tracking-widest text-muted md:hidden">
          {t("swipe")} →
        </p>
      </div>

      <div
        ref={trackRef}
        className={cn(
          "relative flex gap-8 px-6 lg:px-8",
          !isDesktop && "snap-x snap-mandatory overflow-x-auto pb-4",
        )}
      >
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} viewLabel={t("viewProject")} />
        ))}
      </div>
    </section>
  );
}
