"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap, registerGsap, prefersReducedMotion } from "@/lib/animations/gsap";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PhilosophySection() {
  const t = useTranslations("philosophy");
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const section = sectionRef.current;
    const visual = visualRef.current;
    const text = textRef.current;
    const path = pathRef.current;
    const stats = statsRef.current;
    if (!section || !visual || !text) return;

    if (prefersReducedMotion()) return;

    const length = path?.getTotalLength() ?? 0;
    if (path) {
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    }

    const ctx = gsap.context(() => {
      gsap.to(visual, {
        y: -80,
        rotate: 3,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      gsap.to(text, {
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      if (path) {
        gsap.to(path, {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            end: "top 25%",
            scrub: 1,
          },
        });
      }
      if (stats) {
        gsap.from(stats.children, {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stats,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-surface px-6 py-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(0,174,239,0.05),transparent_50%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div ref={textRef}>
          <SectionHeading subtitle={t("subtitle")} title={t("title")} />
          <p className="max-w-lg text-lg leading-relaxed text-white/65">
            {t("body")}
          </p>
          <div ref={statsRef} className="mt-12 grid grid-cols-3 gap-6">
            <div className="group">
              <p className="font-display text-3xl text-cyan transition-transform duration-500 group-hover:scale-110">
                {t("stat1Value")}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted">
                {t("stat1Label")}
              </p>
            </div>
            <div className="group">
              <p className="font-display text-3xl text-cyan transition-transform duration-500 group-hover:scale-110">
                {t("stat2Value")}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted">
                {t("stat2Label")}
              </p>
            </div>
            <div className="group">
              <p className="font-display text-3xl text-cyan transition-transform duration-500 group-hover:scale-110">
                {t("stat3Value")}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted">
                {t("stat3Label")}
              </p>
            </div>
          </div>
        </div>

        <div ref={visualRef} className="relative aspect-square max-w-lg justify-self-center">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,#002B49_0%,transparent_70%)]" />
          <div className="absolute inset-8 rounded-full border border-cyan/20 animate-pulse-ring shadow-[0_0_40px_rgba(0,174,239,0.1)]" />
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 h-full w-full"
            fill="none"
            aria-hidden
          >
            <path
              ref={pathRef}
              d="M35 155 Q70 175 100 130 T145 75"
              stroke="#00AEEF"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.7"
            />
            <circle cx="145" cy="75" r="8" fill="#00AEEF" opacity="0.9" />
          </svg>
          <div
            className="absolute inset-16 rounded-3xl transition-transform duration-700 hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, #002B49 0%, #000814 50%, rgba(0,174,239,0.2) 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-24 w-24 rounded-full bg-cyan/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
