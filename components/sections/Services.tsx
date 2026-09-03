import { getTranslations } from "next-intl/server";
import { ClipboardCheck, RadioTower, MapPinned } from "lucide-react";
import { ServicePanel } from "@/components/ui/ServicePanel";
import { Reveal } from "@/components/ui/Reveal";
import imgRecepciones from "@/public/imgs/04_dos_tecnicos_en_terreno.jpg";
import imgDensidad from "@/public/imgs/05_tecnico_junto_antena.jpg";
import imgAuditoria from "@/public/imgs/03_tecnico_inspeccionando_torre.jpg";

export async function Services() {
  const t = await getTranslations("services");

  const items = [
    {
      key: "recepciones",
      icon: ClipboardCheck,
      image: imgRecepciones,
      index: "01",
    },
    {
      key: "densidad",
      icon: RadioTower,
      image: imgDensidad,
      index: "02",
    },
    {
      key: "auditoria",
      icon: MapPinned,
      image: imgAuditoria,
      index: "03",
    },
  ] as const;

  return (
    <section id="servicios" className="bg-paper-0 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-lg">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
            {t("heading")}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
            {t("intro")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.key} className="h-full" delay={i * 0.1}>
              <ServicePanel
                icon={item.icon}
                image={item.image}
                index={item.index}
                title={t(`items.${item.key}.title`)}
                description={t(`items.${item.key}.description`)}
                metric={t(`items.${item.key}.metric`)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
