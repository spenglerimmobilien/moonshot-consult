"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap, prefersReducedMotion } from "@/lib/animations/gsap";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const bar = barRef.current;
    if (!bar || prefersReducedMotion()) {
      if (bar) gsap.set(bar, { scaleX: 1 });
      return;
    }

    gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });

    const tween = gsap.to(bar, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px bg-white/5"
      aria-hidden
    >
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-cyan/40 via-cyan to-cyan/40 shadow-[0_0_16px_rgba(0,174,239,0.9)]"
      />
    </div>
  );
}
