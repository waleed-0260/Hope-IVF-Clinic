"use client";

import { motion } from "framer-motion";
import { ArrowRight, Dna, Microscope, Sparkles } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/shared/SectionHeading";

const iconMap: Record<string, typeof Dna> = {
  ivf: Dna,
  iui: Sparkles,
  icsi: Microscope,
};

const parent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const child = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ServicesPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Fertility Solutions"
          subtitle="Advanced, personalized treatments designed around your unique journey — from first workup to final transfer."
        />

        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {SERVICES.slice(0, 3).map((service) => {
            const Icon = iconMap[service.slug] ?? Dna;
            return (
              <motion.article
                key={service.slug}
                variants={child}
                className="group relative overflow-hidden rounded-2xl border border-ink/5 bg-cream p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 transition group-hover:opacity-100"
                />
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition group-hover:from-primary group-hover:to-secondary group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.short}
                </p>
                <Link
                  href="/services"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}