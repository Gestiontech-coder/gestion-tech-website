"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const VIDEOS = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
  "/videos/video4.mp4",
] as const;

// Single radial mask fades every edge to transparent, so the video
// blends into the section background instead of sitting in a hard box.
const EDGE_FADE_MASK =
  "radial-gradient(ellipse 70% 70% at center, black 50%, transparent 100%)";

export function VideoSequence() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  function handleEnded() {
    setIndex((i) => (i + 1) % VIDEOS.length);
  }

  return (
    <div className="relative aspect-video w-full">
      <AnimatePresence mode="wait">
        <motion.video
          key={VIDEOS[index]}
          src={VIDEOS[index]}
          autoPlay
          muted
          playsInline
          onEnded={handleEnded}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            WebkitMaskImage: EDGE_FADE_MASK,
            maskImage: EDGE_FADE_MASK,
          }}
        />
      </AnimatePresence>
    </div>
  );
}
