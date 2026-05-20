"use client";

export function HeroVisualMobile() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden md:hidden">
      <svg
        viewBox="0 0 200 200"
        className="hero-mobile-svg -mr-16 h-[70vw] max-h-80 w-[70vw] opacity-40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M100 20 C55 20 25 55 25 100 C25 145 55 180 100 180 C145 180 175 145 175 100"
          stroke="#002B49"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          className="hero-mobile-trajectory"
          d="M35 155 Q70 175 100 130 T145 75"
          stroke="#00AEEF"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle
          className="hero-mobile-ring animate-pulse-ring"
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
