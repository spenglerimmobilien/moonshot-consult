import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markClassName?: string;
};

export function LogoMark({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M100 20 C55 20 25 55 25 100 C25 145 55 180 100 180 C145 180 175 145 175 100"
        stroke="#002B49"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <path
        d="M35 155 Q70 175 100 130 T145 75"
        stroke="#00AEEF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="145" cy="75" r="14" stroke="#00AEEF" strokeWidth="2" />
      <circle cx="145" cy="75" r="6" fill="#00AEEF" />
    </svg>
  );
}

export function LogoFull({ className, markClassName }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn("h-8 w-8 shrink-0 md:h-9 md:w-9", markClassName)} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-cyan md:text-sm">
          Moonshot
        </span>
        <span className="mt-0.5 font-display text-[9px] font-bold uppercase tracking-[0.28em] text-white/45 md:text-[10px]">
          Consult
        </span>
      </span>
    </span>
  );
}
