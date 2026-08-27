"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "@/components/shared/SectionHeading";

const AUTOPLAY_MS = 6000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((next: number, dir?: number) => {
    setDirection(dir ?? (next > index ? 1 : -1));
    setIndex(next);
  }, [index]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused]);

  const slide = TESTIMONIALS[index];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/10 to-cream py-20 lg:py-28">
      <motion.div
        aria-hidden
        className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
        animate={{ y: [0, -24, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Stories of Hope"
          subtitle="Real words from the families whose dreams we have helped come true."
        />

        <div
          className="relative mt-14 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.figure
              key={slide.id}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-secondary shadow-lg">
                <Quote className="h-6 w-6" />
              </span>
              <blockquote className="mt-6 text-balance font-display text-xl font-medium leading-relaxed text-ink md:text-2xl">
                &ldquo;{slide.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-semibold text-primary">{slide.couple}</div>
                <div className="mt-1 text-sm text-muted">
                  {slide.city} · Tried {slide.triedFor} · {slide.treatment}
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-2.5">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => goTo(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-gradient-to-r from-primary to-secondary"
                  : "w-2.5 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}