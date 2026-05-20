"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { gsap, registerGsap, prefersReducedMotion } from "@/lib/animations/gsap";
import { site } from "@/data/site";
import { Link } from "@/i18n/navigation";
import { usePreloader } from "@/components/providers/PreloaderContext";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HeroVisualMobile } from "@/components/sections/HeroVisualMobile";

const MoonScene = dynamic(
  () =>
    import("@/components/three/MoonScene").then((mod) => mod.MoonScene),
  { ssr: false },
);

export function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale() as "de" | "en";
  const { ready } = usePreloader();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ready) return;

    registerGsap();
    const reduced = prefersReducedMotion();
    const section = sectionRef.current;
    const content = contentRef.current;

    if (reduced) {
      gsap.set([line1Ref.current, line2Ref.current, subRef.current, ctaRef.current], {
        opacity: 1,
        y: 0,
      });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });
      tl.from([line1Ref.current, line2Ref.current], {
        y: 100,
        opacity: 0,
        rotateX: 12,
        transformOrigin: "50% 100%",
        duration: 1.2,
        stagger: 0.18,
        ease: "power4.out",
      })
        .from(
          subRef.current,
          { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        )
        .from(
          ctaRef.current,
          { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4",
        );

      if (section && content) {
        gsap.to(content, {
          y: 120,
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [ready]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden hero-radial"
    >
      <div className="hero-vignette pointer-events-none absolute inset-0 z-[2]" aria-hidden />

      <div className="hidden md:block">
        <MoonScene />
      </div>

      <HeroVisualMobile />

      <Image
        src="/logo-mark.png"
        alt=""
        width={600}
        height={600}
        className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 opacity-[0.06] md:block md:right-10"
        aria-hidden
      />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-24 lg:px-8"
      >
        <div className="max-w-4xl" style={{ perspective: "1000px" }}>
          <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-wide sm:text-6xl md:text-7xl lg:text-8xl">
            <span ref={line1Ref} className="block overflow-hidden">
              {t("line1")}
            </span>
            <span ref={line2Ref} className="block overflow-hidden text-gradient">
              {t("line2")}
            </span>
          </h1>
          <p
            ref={subRef}
            className="mt-8 max-w-xl text-lg text-white/70 md:text-xl"
          >
            {site.tagline[locale]}
          </p>
          <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact">
              <MagneticButton variant="primary">{t("ctaPrimary")}</MagneticButton>
            </Link>
            <Link href="/portfolio">
              <MagneticButton variant="secondary">{t("ctaSecondary")}</MagneticButton>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted animate-float">
        <span>{t("scroll")}</span>
        <div className="h-10 w-px bg-gradient-to-b from-cyan to-transparent" />
      </div>
    </section>
  );
}
