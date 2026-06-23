"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Direzione di entrata */
  from?: "up" | "down" | "left" | "right" | "none";
  /** Ritardo in secondi */
  delay?: number;
  /** Durata in secondi */
  duration?: number;
  as?: "div" | "section" | "li" | "span";
};

const offset = 48;

/** Rivela il contenuto con una transizione morbida quando entra nel viewport. */
export default function Reveal({
  children,
  className,
  from = "up",
  delay = 0,
  duration = 0.8,
  as = "div",
}: RevealProps) {
  const hidden = {
    up: { opacity: 0, y: offset },
    down: { opacity: 0, y: -offset },
    left: { opacity: 0, x: offset },
    right: { opacity: 0, x: -offset },
    none: { opacity: 0 },
  }[from];

  const variants: Variants = {
    hidden,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </MotionTag>
  );
}
