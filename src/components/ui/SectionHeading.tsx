"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap, prefersReducedMotion } from "@/lib/animations/gsap";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  subtitle: string;
  title: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  subtitle,
  title,
  className,
  align = "left",
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    const line = lineRef.current;
    const heading = titleRef.current;
    if (!el || !line || !heading) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(line, {
        scaleX: 0,
        transformOrigin: align === "center" ? "center" : "left",
        duration: 0.8,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(heading, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [align]);

  return (
    <div
      ref={ref}
      className={cn(
        "mb-12 space-y-4",
        align === "center" && "text-center",
        className,
      )}
    >
      <p className="tracking-consult text-xs uppercase text-cyan">{subtitle}</p>
      <span
        ref={lineRef}
        className={cn(
          "block h-px w-16 bg-gradient-to-r from-cyan to-transparent",
          align === "center" && "mx-auto",
        )}
        aria-hidden
      />
      <h2
        ref={titleRef}
        className="font-display text-4xl font-bold uppercase tracking-wide md:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
    </div>
  );
}
