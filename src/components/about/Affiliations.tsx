"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { AFFILIATIONS } from "@/lib/constants";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Affiliations() {
  const doubled = [...AFFILIATIONS, ...AFFILIATIONS];

  return (
    <section className="overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Awards & Affiliations"
          title="Backed by National & International Bodies"
          subtitle="Our practice proudly aligns with the institutions shaping reproductive medicine worldwide."
        />
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent"
        />
        <motion.div
          className="flex w-max items-center gap-4 pr-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-3 rounded-2xl border border-ink/5 bg-cream px-8 py-5"
            >
              <Award className="h-6 w-6 shrink-0 text-accent" />
              <span className="whitespace-nowrap font-display text-base font-semibold text-ink/80">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}