"use client";

import { useTranslations } from "next-intl";
import { LogoFull } from "@/components/ui/Logo";
import { Link } from "@/i18n/navigation";
import { site } from "@/data/site";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="border-t border-white/5 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-8">
        <div className="space-y-4 md:col-span-2">
          <LogoFull className="opacity-90" markClassName="h-7 w-7" />
          <p className="max-w-sm text-sm text-muted">{t("tagline")}</p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-cyan">
            {t("navigation")}
          </p>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/" className="transition hover:text-cyan">
                {nav("home")}
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="transition hover:text-cyan">
                {nav("portfolio")}
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="transition hover:text-cyan">
                {nav("pricing")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-cyan">
                {nav("contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-cyan">
            {t("legal")}
          </p>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/imprint" className="transition hover:text-cyan">
                {t("imprint")}
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="transition hover:text-cyan">
                {t("privacy")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. {t("rights")}
          </p>
          <div className="flex gap-6">
            <a
              href={site.social.instagram}
              className="transition hover:text-cyan"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href={site.social.linkedin}
              className="transition hover:text-cyan"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={site.social.behance}
              className="transition hover:text-cyan"
              rel="noopener noreferrer"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
