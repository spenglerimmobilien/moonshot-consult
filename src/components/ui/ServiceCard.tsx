"use client";

import { useRef } from "react";
import { prefersReducedMotion } from "@/lib/animations/gsap";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion() || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) scale(1.02)`;
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "";
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "service-card-glow group relative overflow-hidden rounded-2xl border border-white/5 bg-surface p-8",
        "transition-[border-color,box-shadow] duration-500",
        "hover:border-cyan/40 hover:shadow-[0_0_50px_rgba(0,174,239,0.15)]",
        "active:scale-[0.98]",
      )}
      style={{ transition: "transform 0.15s ease-out, border-color 0.5s, box-shadow 0.5s" }}
    >
      <div className="cinematic-shine pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-[1]">
        <div className="mb-6 inline-flex rounded-full border border-cyan/30 p-3 text-cyan transition duration-500 group-hover:glow-cyan group-hover:scale-110">
          {icon}
        </div>
        <h3 className="font-display text-xl uppercase tracking-wide transition-transform duration-500 group-hover:translate-x-1">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-white/80">
          {description}
        </p>
      </div>
    </article>
  );
}
