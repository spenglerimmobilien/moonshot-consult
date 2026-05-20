"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { prefersReducedMotion } from "@/lib/animations/gsap";

const VISITED_KEY = "moonshot-visited";

type PreloaderContextValue = {
  ready: boolean;
  skipped: boolean;
  complete: () => void;
};

const PreloaderContext = createContext<PreloaderContextValue>({
  ready: true,
  skipped: true,
  complete: () => {},
});

function getInitialState(enabled: boolean) {
  if (!enabled) return { ready: true, skipped: true };
  if (typeof window === "undefined") return { ready: false, skipped: false };
  const shouldSkip =
    sessionStorage.getItem(VISITED_KEY) !== null || prefersReducedMotion();
  return { ready: shouldSkip, skipped: shouldSkip };
}

export function PreloaderProvider({
  children,
  enabled,
}: {
  children: React.ReactNode;
  enabled: boolean;
}) {
  const [state, setState] = useState(() => getInitialState(enabled));

  const complete = useCallback(() => {
    sessionStorage.setItem(VISITED_KEY, "1");
    setState({ ready: true, skipped: true });
  }, []);

  const value = useMemo(
    () => ({ ready: state.ready, skipped: state.skipped, complete }),
    [state.ready, state.skipped, complete],
  );

  return (
    <PreloaderContext.Provider value={value}>
      {children}
    </PreloaderContext.Provider>
  );
}

export function usePreloader() {
  return useContext(PreloaderContext);
}
