"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { VideoSequence } from "@/components/ui/VideoSequence";

export function Hero() {
  const t = useTranslations("hero");
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    initial: reduceMotion ? undefined : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-navy-950 text-paper-0">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(169,214,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(169,214,255,0.6) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="max-w-xl">
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.55 }}
            className="text-[2.1rem] font-semibold leading-[1.15] tracking-tight sm:text-[2.6rem]"
          >
            {t("headline")}
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-5 max-w-md text-[16px] leading-relaxed text-paper-100/75"
          >
            {t("subhead")}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-signal-400 px-5 py-3 text-sm font-medium text-navy-950 transition-colors hover:bg-signal-300"
            >
              {t("ctaPrimary")}
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-full border border-line-dark px-5 py-3 text-sm font-medium text-paper-0 transition-colors hover:border-paper-100/40"
            >
              {t("ctaSecondary")}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <VideoSequence />
        </motion.div>
      </div>
    </section>
  );
}
