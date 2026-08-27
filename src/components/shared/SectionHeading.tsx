"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      className={`${isCenter ? "mx-auto text-center" : "text-left"} max-w-2xl ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && (
        <span
          className={`mb-3 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
            light
              ? "border-white/25 bg-white/10 text-white/90"
              : "border-secondary/30 bg-secondary/10 text-secondary-dark"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-balance font-display text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            light ? "text-white/80" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}