import { useTranslations } from "next-intl";

export function MarqueeSection() {
  const t = useTranslations("marquee");
  const items = t.raw("items") as string[];
  const row = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-white/5 bg-surface py-6" aria-label={t("label")}>
      <div className="relative flex flex-col gap-4">
        <div className="marquee-track flex shrink-0 gap-12 whitespace-nowrap">
          {row.map((item, i) => (
            <span
              key={`a-${item}-${i}`}
              className="font-display text-sm uppercase tracking-[0.3em] text-white/40 md:text-base"
            >
              {item}
              <span className="mx-6 text-cyan">·</span>
            </span>
          ))}
        </div>
        <div className="marquee-track-reverse flex shrink-0 gap-12 whitespace-nowrap opacity-40">
          {row.map((item, i) => (
            <span
              key={`b-${item}-${i}`}
              className="font-display text-sm uppercase tracking-[0.3em] text-white/30 md:text-base"
            >
              {item}
              <span className="mx-6 text-cyan/60">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
