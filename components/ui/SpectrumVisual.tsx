"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

const BAR_HEIGHTS = [
  0.32, 0.48, 0.28, 0.62, 0.4, 0.55, 0.7, 0.45, 0.6, 0.35, 0.5, 0.66, 0.42,
  0.58, 0.55, 0.38, 0.64, 0.3, 0.46, 0.6, 0.36, 0.5,
];

const HIGHLIGHT_INDEX = 14;
const LIMIT_RATIO = 0.78;

const VIEW_W = 560;
const VIEW_H = 340;
const PLOT_TOP = 30;
const PLOT_BOTTOM = 268;
const PLOT_LEFT = 24;
const PLOT_RIGHT = 536;

export function SpectrumVisual() {
  const t = useTranslations("hero");
  const reduceMotion = useReducedMotion();

  const plotHeight = PLOT_BOTTOM - PLOT_TOP;
  const plotWidth = PLOT_RIGHT - PLOT_LEFT;
  const barCount = BAR_HEIGHTS.length;
  const gap = 6;
  const barWidth = (plotWidth - gap * (barCount - 1)) / barCount;
  const limitY = PLOT_TOP + plotHeight * (1 - LIMIT_RATIO);

  const highlightBarX =
    PLOT_LEFT + HIGHLIGHT_INDEX * (barWidth + gap) + barWidth / 2;
  const highlightBarTopY =
    PLOT_TOP + plotHeight * (1 - BAR_HEIGHTS[HIGHLIGHT_INDEX]);

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        role="img"
        aria-label={t("readoutLabel")}
        className="w-full"
      >
        <defs>
          <linearGradient id="barGradient" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#1a5fc7" />
            <stop offset="100%" stopColor="#63b3ff" />
          </linearGradient>
          <linearGradient id="barGradientHi" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#1f8dff" />
            <stop offset="100%" stopColor="#a9d6ff" />
          </linearGradient>
        </defs>

        {/* baseline grid */}
        {[0.25, 0.5, 0.75].map((r) => (
          <line
            key={r}
            x1={PLOT_LEFT}
            x2={PLOT_RIGHT}
            y1={PLOT_TOP + plotHeight * r}
            y2={PLOT_TOP + plotHeight * r}
            stroke="rgba(169,214,255,0.10)"
            strokeWidth={1}
          />
        ))}

        {/* limit line */}
        <line
          x1={PLOT_LEFT}
          x2={PLOT_RIGHT}
          y1={limitY}
          y2={limitY}
          stroke="#f2a93b"
          strokeWidth={1.5}
          strokeDasharray="5 5"
        />
        <text
          x={PLOT_RIGHT}
          y={limitY - 8}
          textAnchor="end"
          fontFamily="var(--font-mono)"
          fontSize={11}
          fill="#f2a93b"
        >
          {t("readoutLimit")}
        </text>

        {/* bars */}
        {BAR_HEIGHTS.map((h, i) => {
          const x = PLOT_LEFT + i * (barWidth + gap);
          const barH = plotHeight * h;
          const y = PLOT_TOP + plotHeight - barH;
          const isHi = i === HIGHLIGHT_INDEX;
          return (
            <motion.rect
              key={i}
              x={x}
              width={barWidth}
              rx={2}
              fill={isHi ? "url(#barGradientHi)" : "url(#barGradient)"}
              initial={reduceMotion ? undefined : { y: PLOT_TOP + plotHeight, height: 0 }}
              animate={{ y, height: barH }}
              transition={{
                duration: 0.6,
                delay: reduceMotion ? 0 : i * 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
              opacity={isHi ? 1 : 0.55}
            />
          );
        })}

        {/* highlight marker */}
        <motion.circle
          cx={highlightBarX}
          cy={highlightBarTopY}
          r={4}
          fill="#a9d6ff"
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 2.2,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      <div className="mt-2 flex items-center justify-between border-t border-line-dark pt-3 font-mono text-xs text-paper-100/70">
        <span>{t("readoutLabel")}</span>
        <span className="inline-flex items-center gap-1.5 text-good-500">
          <span className="h-1.5 w-1.5 rounded-full bg-good-500" />
          {t("readoutStatus")}
        </span>
      </div>
    </div>
  );
}
