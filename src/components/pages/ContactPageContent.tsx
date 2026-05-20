"use client";

import { FormEvent, useId, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { site } from "@/data/site";
import { getLocalized } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

type FormState = {
  name: string;
  email: string;
  message: string;
  budget: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export function ContactPageContent() {
  const t = useTranslations("contact");
  const locale = useLocale() as "de" | "en";
  const nameId = useId();
  const emailId = useId();
  const budgetId = useId();
  const messageId = useId();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    budget: "5to15k",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = t("form.errors.name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = t("form.errors.email");
    }
    if (!form.message.trim()) next.message = t("form.errors.message");
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBudget: ${form.budget}\n\n${form.message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
      <SectionHeading subtitle={t("subtitle")} title={t("title")} />

      <div className="grid gap-16 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <Field
            id={nameId}
            label={t("form.name")}
            error={errors.name}
            value={form.name}
            onChange={(v) => setForm((f) => ({ ...f, name: v }))}
          />
          <Field
            id={emailId}
            label={t("form.email")}
            type="email"
            error={errors.email}
            value={form.email}
            onChange={(v) => setForm((f) => ({ ...f, email: v }))}
          />
          <div>
            <label
              htmlFor={budgetId}
              className="mb-2 block text-xs uppercase tracking-widest text-muted"
            >
              {t("form.budget")}
            </label>
            <select
              id={budgetId}
              value={form.budget}
              onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
              className="w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-white outline-none focus:border-cyan"
            >
              <option value="under5k">{t("form.budgetOptions.under5k")}</option>
              <option value="5to15k">{t("form.budgetOptions.5to15k")}</option>
              <option value="15to50k">{t("form.budgetOptions.15to50k")}</option>
              <option value="over50k">{t("form.budgetOptions.over50k")}</option>
            </select>
          </div>
          <div>
            <label
              htmlFor={messageId}
              className="mb-2 block text-xs uppercase tracking-widest text-muted"
            >
              {t("form.message")}
            </label>
            <textarea
              id={messageId}
              rows={5}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? `${messageId}-error` : undefined}
              className="w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-white outline-none focus:border-cyan"
            />
            {errors.message && (
              <p id={`${messageId}-error`} className="mt-2 text-sm text-red-400" role="alert">
                {errors.message}
              </p>
            )}
          </div>
          <MagneticButton type="submit" variant="primary">
            {t("form.submit")}
          </MagneticButton>
          {submitted && (
            <p className="text-sm text-cyan" role="status">
              {t("form.success")}
            </p>
          )}
        </form>

        <div className="space-y-8 rounded-2xl border border-white/5 bg-surface p-8">
          <h3 className="font-display text-xl uppercase tracking-wide">
            {t("info.title")}
          </h3>
          <InfoRow label={t("info.email")} value={site.email} href={`mailto:${site.email}`} />
          <InfoRow label={t("info.phone")} value={site.phone} href={`tel:${site.phone.replace(/\s/g, "")}`} />
          <InfoRow
            label={t("info.location")}
            value={getLocalized(site.location, locale)}
          />
        </div>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs uppercase tracking-widest text-muted">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-white outline-none focus:border-cyan"
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function InfoRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-muted">{label}</p>
      {href ? (
        <a href={href} className="mt-1 block text-lg text-white transition hover:text-cyan">
          {value}
        </a>
      ) : (
        <p className="mt-1 text-lg text-white">{value}</p>
      )}
    </div>
  );
}
