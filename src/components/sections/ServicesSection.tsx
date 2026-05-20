"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { gsap, registerGsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animations/gsap";
import { services } from "@/data/services";
import { getLocalized } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";

const icons = {
  globe: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
    </svg>
  ),
  palette: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3c-5 0-9 3.5-9 8 0 3 2 5 5 5h1.5a2.5 2.5 0 0 0 0-5H12c2 0 3-1 3-3 0-2.5-2-5-3-5z" />
      <circle cx="8" cy="10" r="1" fill="currentColor" />
      <circle cx="11" cy="7" r="1" fill="currentColor" />
    </svg>
  ),
  sparkles: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5L10 14l4.5-4.5L14 10l.5-.5z" fill="currentColor" />
    </svg>
  ),
};

export function ServicesSection() {
  const t = useTranslations("services");
  const locale = useLocale() as "de" | "en";
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
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
    const cards = cardsRef.current;
    if (!section || !cards) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=120%",
        pin: true,
        scrub: 0.5,
      });

      gsap.from(cards.children, {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <section ref={sectionRef} className="relative bg-black px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading subtitle={t("subtitle")} title={t("title")} />
        <div ref={cardsRef} className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={icons[service.icon]}
              title={getLocalized(service.title, locale)}
              description={getLocalized(service.description, locale)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
