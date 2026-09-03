"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Module-scope flag: stays true for the lifetime of the loaded page.
// Set (after a short delay) once on a genuine first load, so a later
// client-side navigation (e.g. switching /es <-> /en) doesn't replay
// every reveal animation at once — it only shows content instantly.
let sessionWarmed = false;
if (typeof window !== "undefined") {
  setTimeout(() => {
    sessionWarmed = true;
  }, 1200);
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduceMotion = useReducedMotion();
  const [skipAnimation] = useState(() => sessionWarmed);

  return (
    <motion.div
      className={className}
      initial={reduceMotion || skipAnimation ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
