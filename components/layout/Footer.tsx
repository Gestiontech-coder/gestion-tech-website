import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";

export async function Footer() {
  const t = await getTranslations("footer");
  const tServices = await getTranslations("services.items");
  const tNav = await getTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-navy-950 text-paper-100">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <Reveal y={16}>
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image src="/mark.png" alt="Gestión Tech" width={28} height={18} />
              <span className="text-[15px] font-semibold text-paper-0">
                Gestión Tech
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper-100/70">
              {t("tagline")}
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-paper-100/50">
              {t("servicesHeading")}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-paper-100/80">
              <li>{tServices("recepciones.title")}</li>
              <li>{tServices("densidad.title")}</li>
              <li>{tServices("auditoria.title")}</li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-paper-100/50">
              {t("companyHeading")}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-paper-100/80">
              <li>
                <a href="#servicios" className="hover:text-paper-0">
                  {tNav("services")}
                </a>
              </li>
              <li>
                <a href="#cobertura" className="hover:text-paper-0">
                  {tNav("coverage")}
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-paper-0">
                  {tNav("contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line-dark pt-6 font-mono text-xs text-paper-100/50 sm:flex-row sm:items-center sm:justify-between">
          <span>Gestión Tech SpA &middot; {year}</span>
          <span>{t("rights")}</span>
        </div>
        </Reveal>
      </div>
    </footer>
  );
}
