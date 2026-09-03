"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const activeLocale = useLocale();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex items-center rounded-full border p-0.5 font-mono text-xs tracking-wide",
        dark ? "border-line-dark" : "border-line",
      )}
    >
      {routing.locales.map((locale) => (
        <Link
          key={locale}
          href={pathname}
          locale={locale}
          scroll={false}
          aria-current={locale === activeLocale}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors",
            locale === activeLocale
              ? dark
                ? "bg-signal-400 text-navy-950"
                : "bg-navy-950 text-paper-0"
              : dark
                ? "text-paper-100/70 hover:text-paper-0"
                : "text-ink-500 hover:text-ink-900",
          )}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
