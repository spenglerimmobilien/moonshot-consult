"use client";

import { cn } from "@/lib/utils";

type CinematicCardProps = {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
};

export function CinematicCard({
  children,
  className,
  gradient,
}: CinematicCardProps) {
  return (
    <div
      className={cn(
        "cinematic-card group relative overflow-hidden rounded-2xl border border-white/5",
        className,
      )}
      style={gradient ? { background: gradient } : undefined}
    >
      <div className="cinematic-shine pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
      <div className="relative z-[1] transition-transform duration-700 group-hover:scale-[1.03]">
        {children}
      </div>
    </div>
  );
}
