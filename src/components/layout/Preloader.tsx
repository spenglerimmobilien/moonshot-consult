"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/animations/gsap";
import { usePreloader } from "@/components/providers/PreloaderContext";

export function Preloader() {
  const { skipped, complete } = usePreloader();
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (skipped) return;

    registerGsap();
    const overlay = overlayRef.current;
    const path = pathRef.current;
    const ring = ringRef.current;
    if (!overlay) return;

    const length = path?.getTotalLength() ?? 0;
    if (path) {
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    }

    const tl = gsap.timeline({
      onComplete: complete,
    });

    if (path) {
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: "power2.inOut",
      });
    }

    if (ring) {
      tl.fromTo(
        ring,
        { scale: 0.8, opacity: 0.4, transformOrigin: "50% 50%" },
        { scale: 1.15, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3",
      );
    }

    tl.to(overlay, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      delay: 0.15,
    });

    return () => {
      tl.kill();
    };
  }, [skipped, complete]);

  if (skipped) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        className="h-32 w-32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 20 C55 20 25 55 25 100 C25 145 55 180 100 180 C145 180 175 145 175 100"
          stroke="#002B49"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          ref={pathRef}
          d="M35 155 Q70 175 100 130 T145 75"
          stroke="#00AEEF"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle
          ref={ringRef}
          cx="145"
          cy="75"
          r="14"
          stroke="#00AEEF"
          strokeWidth="2"
        />
        <circle cx="145" cy="75" r="6" fill="#00AEEF" />
      </svg>
    </div>
  );
}
