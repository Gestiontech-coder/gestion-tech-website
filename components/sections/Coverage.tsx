import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { MapPin, ShieldCheck, FileCheck2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import coverageImg from "@/public/imgs/02_camioneta_antena_lateral.jpg";

export async function Coverage() {
  const t = await getTranslations("coverage");

  const points = [
    { key: "point1", icon: MapPin },
    { key: "point2", icon: ShieldCheck },
    { key: "point3", icon: FileCheck2 },
  ] as const;

  return (
    <section id="cobertura" className="bg-paper-50 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              {t("heading")}
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-700">
              {t("body")}
            </p>

            <div className="relative mt-7 aspect-[4/3] w-full max-w-sm overflow-hidden">
              <Image
                src={coverageImg}
                alt={t("bannerAlt")}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 384px, 90vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 font-mono text-xs text-paper-0/90">
                {t("bannerCaption")}
              </span>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-1">
            {points.map(({ key, icon: Icon }, i) => (
              <Reveal key={key} delay={i * 0.08} y={12}>
                <div className="flex gap-4 border-t border-line pt-4">
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
                    strokeWidth={1.75}
                  />
                  <div>
                    <h3 className="font-medium text-ink-900">
                      {t(`${key}Title`)}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
                      {t(`${key}Body`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
