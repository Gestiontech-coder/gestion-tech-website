import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ScrollTopLink } from "@/components/ui/ScrollTopLink";
import { LanguageSwitcher } from "./LanguageSwitcher";

export async function Header() {
  const t = await getTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-line-dark bg-navy-950/95 backdrop-blur supports-[backdrop-filter]:bg-navy-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <ScrollTopLink className="flex items-center gap-2.5">
          <Image
            src="/mark.png"
            alt="Gestión-Tech.cl"
            width={30}
            height={19}
            priority
          />
          <span className="text-[15px] font-semibold tracking-tight text-paper-0">
            Gestión-Tech.cl
          </span>
        </ScrollTopLink>

        <nav className="hidden items-center gap-7 font-mono text-[13px] text-paper-100/80 md:flex">
          <a href="#servicios" className="transition-colors hover:text-paper-0">
            {t("services")}
          </a>
          <a href="#cobertura" className="transition-colors hover:text-paper-0">
            {t("coverage")}
          </a>
          <a href="#contacto" className="transition-colors hover:text-paper-0">
            {t("contact")}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher dark />
          </div>
          <a
            href="#contacto"
            className="rounded-full bg-signal-400 px-4 py-2 text-[13px] font-medium text-navy-950 transition-colors hover:bg-signal-300"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
