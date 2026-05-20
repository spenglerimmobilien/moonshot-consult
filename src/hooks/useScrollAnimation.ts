"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap, prefersReducedMotion } from "@/lib/animations/gsap";

type RevealOptions = {
  y?: number;
  delay?: number;
  duration?: number;
  stagger?: number;
  start?: string;
};

export function useReveal<T extends HTMLElement>(
  options: RevealOptions = {},
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y: options.y ?? 48,
        duration: options.duration ?? 1,
        delay: options.delay ?? 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: options.start ?? "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [options.y, options.delay, options.duration, options.start]);

  return ref;
}

export function useStaggerReveal<T extends HTMLElement>(
  selector: string,
  options: RevealOptions = {},
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll(selector);
    if (!items.length) return;

    if (prefersReducedMotion()) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(items, {
        opacity: 0,
        y: options.y ?? 40,
        duration: options.duration ?? 0.8,
        stagger: options.stagger ?? 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: options.start ?? "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [selector, options.y, options.duration, options.stagger, options.start]);

  return ref;
}
