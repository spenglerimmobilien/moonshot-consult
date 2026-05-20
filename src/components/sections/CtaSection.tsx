"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap, registerGsap, prefersReducedMotion } from "@/lib/animations/gsap";
import { Link } from "@/i18n/navigation";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function CtaSection() {
  const t = useTranslations("cta");
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(content.children, {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-6 py-32 lg:px-8"
    >
      <div className="cta-glow pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,174,239,0.15),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,174,239,0.03),transparent)]" />

      <div ref={contentRef} className="relative mx-auto max-w-4xl text-center">
        <p className="tracking-consult text-xs uppercase text-cyan">{t("label")}</p>
        <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-wide md:text-6xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/65">
          {t("subtitle")}
        </p>
        <div className="mt-10">
          <Link href="/contact">
            <MagneticButton variant="primary">{t("button")}</MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
