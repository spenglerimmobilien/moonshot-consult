"use client";

import { useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/animations/gsap";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
};

function canUseMagnetic() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: fine)").matches && !prefersReducedMotion()
  );
}

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  type = "button",
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    if (!canUseMagnetic()) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * 0.25, y: y * 0.25, duration: 0.4, ease: "power2.out" });
  };

  const handleLeave = () => {
    if (!canUseMagnetic()) return;
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
  };

  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium transition-colors active:scale-95",
    variant === "primary"
      ? "bg-cyan text-black hover:bg-white hover:shadow-[0_0_30px_rgba(0,174,239,0.35)]"
      : "border border-white/20 bg-transparent text-white hover:border-cyan hover:text-cyan",
    className,
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </button>
  );
}
