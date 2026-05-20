"use client";

import { PreloaderProvider } from "@/components/providers/PreloaderContext";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Preloader } from "@/components/layout/Preloader";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { FilmGrain } from "@/components/effects/FilmGrain";
import { CursorSpotlight } from "@/components/effects/CursorSpotlight";

export function LandingEffects({ children }: { children: React.ReactNode }) {
  return (
    <PreloaderProvider enabled>
      <SmoothScrollProvider enabled>
        <ScrollProgress />
        <FilmGrain />
        <CursorSpotlight />
        <Preloader />
        {children}
      </SmoothScrollProvider>
    </PreloaderProvider>
  );
}
