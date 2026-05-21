"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { LogoFull } from "@/components/ui/Logo";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeMenu]);

  const links = [
    { href: "/" as const, label: t("home") },
    { href: "/portfolio" as const, label: t("portfolio") },
    { href: "/contact" as const, label: t("contact") },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/5 bg-black/70 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="relative z-10 shrink-0" aria-label="Moonshot Consult">
          <LogoFull />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label={t("menuLabel")}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-widest transition-colors hover:text-cyan",
                pathname === link.href ? "text-cyan" : "text-white/70",
              )}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitch />
          <Link
            href="/contact"
            className="rounded-full bg-cyan px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black transition hover:bg-white"
          >
            {t("startProject")}
          </Link>
        </nav>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={t("menuLabel")}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              "h-0.5 w-6 bg-white transition",
              open && "translate-y-2 rotate-45",
            )}
          />
          <span className={cn("h-0.5 w-6 bg-white transition", open && "opacity-0")} />
          <span
            className={cn(
              "h-0.5 w-6 bg-white transition",
              open && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={cn(
          "fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition md:hidden",
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none",
        )}
      >
        <nav
          className="flex h-full flex-col items-center justify-center gap-8"
          aria-label={t("menuLabel")}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="font-display text-2xl uppercase tracking-widest text-white"
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitch />
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-4 rounded-full bg-cyan px-8 py-3 text-sm font-semibold uppercase tracking-wider text-black"
          >
            {t("startProject")}
          </Link>
        </nav>
      </div>
    </header>
  );
}

function LanguageSwitch() {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-widest">
      <Link
        href={pathname}
        locale="de"
        aria-current={locale === "de" ? "true" : undefined}
        className={cn(
          "transition hover:text-cyan",
          locale === "de" ? "text-cyan" : "text-white/50",
        )}
      >
        DE
      </Link>
      <span className="text-white/20">/</span>
      <Link
        href={pathname}
        locale="en"
        aria-current={locale === "en" ? "true" : undefined}
        className={cn(
          "transition hover:text-cyan",
          locale === "en" ? "text-cyan" : "text-white/50",
        )}
      >
        EN
      </Link>
    </div>
  );
}
