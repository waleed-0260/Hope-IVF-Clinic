"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

const parent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const child = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function TestimonialGrid() {
  return (
    <motion.div
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="columns-1 gap-6 sm:columns-2 lg:columns-3"
    >
      {TESTIMONIALS.map((t, i) => (
        <motion.figure
          key={t.id}
          variants={child}
          className={`mb-6 break-inside-avoid rounded-2xl border border-ink/5 bg-white p-7 shadow-sm transition hover:shadow-lg ${
            i % 3 === 1 ? "sm:mt-6" : ""
          }`}
        >
          <Quote
            className={`h-7 w-7 ${
              i % 2 === 0 ? "text-secondary" : "text-primary"
            }`}
            aria-hidden
          />
          <blockquote className="mt-4 text-sm leading-relaxed text-ink/85 sm:text-base">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-5 border-t border-ink/5 pt-4">
            <div className="font-display text-base font-bold text-ink">
              {t.couple}
            </div>
            <div className="mt-1 text-xs text-muted">
              {t.city}
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                {t.treatment}
              </span>
              {t.triedFor && (
                <span className="rounded-full bg-secondary/10 px-3 py-1 text-secondary-dark">
                  Tried {t.triedFor}
                </span>
              )}
            </div>
          </figcaption>
        </motion.figure>
      ))}
    </motion.div>
  );
}