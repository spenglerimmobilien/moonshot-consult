"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { pricingFaqs, pricingFeatures, pricingTiers } from "@/data/pricing";
import { processSteps } from "@/data/site";
import { Link } from "@/i18n/navigation";
import { getLocalized } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import type { PricingFeatureAvailability, PricingTierId } from "@/types/content";

function AvailabilityIcon({
  value,
  labels,
}: {
  value: PricingFeatureAvailability;
  labels: { yes: string; partial: string; no: string };
}) {
  if (value === "yes") {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan/15 text-cyan" aria-label={labels.yes}>
        ✓
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-white/60" aria-label={labels.partial}>
        ~
      </span>
    );
  }
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center text-white/20" aria-label={labels.no}>
      —
    </span>
  );
}

export function PricingPageContent() {
  const t = useTranslations("pricing");
  const locale = useLocale() as "de" | "en";
  const [openFaq, setOpenFaq] = useState<string | null>(pricingFaqs[0]?.id ?? null);

  const availabilityLabels = {
    yes: t("matrix.included"),
    partial: t("matrix.partial"),
    no: t("matrix.notIncluded"),
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
      <SectionHeading subtitle={t("subtitle")} title={t("title")} />

      <p className="-mt-8 mb-16 max-w-2xl text-muted">{t("intro")}</p>

      {/* Tier cards */}
      <div className="grid gap-8 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <article
            key={tier.id}
            className={cn(
              "relative flex flex-col rounded-2xl border bg-surface p-8 transition-colors duration-300",
              tier.recommended
                ? "border-cyan/40 shadow-[0_0_40px_rgba(0,174,239,0.12)]"
                : "border-white/5 hover:border-white/10",
            )}
          >
            {tier.recommended && (
              <span className="absolute -top-3 left-8 rounded-full bg-cyan px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-black">
                {t("recommended")}
              </span>
            )}
            <h3 className="font-display text-2xl uppercase tracking-wide">
              {getLocalized(tier.title, locale)}
            </h3>
            <p className="mt-3 text-sm text-muted">
              {getLocalized(tier.description, locale)}
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {tier.highlights.map((highlight) => (
                <li key={highlight.de} className="flex gap-3 text-sm text-white/80">
                  <span className="mt-0.5 shrink-0 text-cyan">✓</span>
                  {getLocalized(highlight, locale)}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={cn(
                "mt-8 block rounded-full border px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider transition",
                tier.recommended
                  ? "border-cyan bg-cyan text-black hover:bg-white"
                  : "border-white/10 text-white/80 hover:border-cyan/40 hover:text-cyan",
              )}
            >
              {t("requestQuote")}
            </Link>
          </article>
        ))}
      </div>

      {/* Feature matrix */}
      <section className="mt-24" aria-labelledby="pricing-matrix-heading">
        <h2
          id="pricing-matrix-heading"
          className="font-display text-2xl uppercase tracking-wide md:text-3xl"
        >
          {t("matrix.title")}
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">{t("matrix.subtitle")}</p>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-white/5">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th scope="col" className="px-6 py-4 text-xs uppercase tracking-widest text-muted">
                  {t("matrix.feature")}
                </th>
                {pricingTiers.map((tier) => (
                  <th
                    key={tier.id}
                    scope="col"
                    className="px-4 py-4 text-center text-xs uppercase tracking-widest text-white/70"
                  >
                    {getLocalized(tier.title, locale)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricingFeatures.map((feature, index) => (
                <tr
                  key={feature.id}
                  className={cn(
                    "border-b border-white/5",
                    index % 2 === 0 ? "bg-transparent" : "bg-white/[0.01]",
                  )}
                >
                  <td className="px-6 py-4 text-white/80">
                    {getLocalized(feature.label, locale)}
                  </td>
                  {pricingTiers.map((tier) => (
                    <td key={tier.id} className="px-4 py-4 text-center">
                      <AvailabilityIcon
                        value={feature.availability[tier.id as PricingTierId]}
                        labels={availabilityLabels}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted">
          ✓ {t("matrix.included")} · ~ {t("matrix.partial")} · — {t("matrix.notIncluded")}
        </p>
      </section>

      {/* Process teaser */}
      <section className="mt-24" aria-labelledby="pricing-process-heading">
        <h2
          id="pricing-process-heading"
          className="font-display text-2xl uppercase tracking-wide md:text-3xl"
        >
          {t("process.title")}
        </h2>
        <p className="mt-3 text-sm text-muted">{t("process.subtitle")}</p>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li
              key={step.id}
              className="rounded-2xl border border-white/5 bg-surface p-6"
            >
              <span className="font-display text-3xl text-cyan/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg uppercase tracking-wide">
                {getLocalized(step.title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {getLocalized(step.description, locale)}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="mt-24" aria-labelledby="pricing-faq-heading">
        <h2
          id="pricing-faq-heading"
          className="font-display text-2xl uppercase tracking-wide md:text-3xl"
        >
          {t("faq.title")}
        </h2>
        <div className="mt-10 divide-y divide-white/5 rounded-2xl border border-white/5">
          {pricingFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div key={faq.id}>
                <button
                  type="button"
                  id={`faq-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:text-cyan"
                >
                  <span className="font-medium text-white/90">
                    {getLocalized(faq.question, locale)}
                  </span>
                  <span className="shrink-0 text-cyan">{isOpen ? "−" : "+"}</span>
                </button>
                <div
                  id={`faq-panel-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-${faq.id}`}
                  hidden={!isOpen}
                  className={cn("px-6 pb-5 text-sm text-muted", !isOpen && "hidden")}
                >
                  {getLocalized(faq.answer, locale)}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 rounded-2xl border border-cyan/20 bg-[radial-gradient(ellipse_at_center,rgba(0,174,239,0.08),transparent_70%)] px-8 py-16 text-center">
        <p className="text-xs uppercase tracking-widest text-cyan">{t("cta.label")}</p>
        <h2 className="mt-4 font-display text-3xl uppercase tracking-wide md:text-4xl">
          {t("cta.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">{t("cta.subtitle")}</p>
        <div className="mt-8">
          <Link href="/contact">
            <MagneticButton>{t("cta.button")}</MagneticButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
