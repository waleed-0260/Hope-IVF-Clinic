"use client";

import { motion } from "framer-motion";
import { ArrowRight, Dna, HeartPulse, Microscope, ShieldCheck, Snowflake, TestTube2 } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ivf: Dna,
  icsi: Microscope,
  iui: HeartPulse,
  "fertility-workup": ShieldCheck,
  "egg-freezing": Snowflake,
  "recurrent-miscarriage": TestTube2,
};

export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = iconMap[service.slug] ?? Dna;

  return (
    <motion.article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/5 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 transition duration-300 group-hover:opacity-100"
      />
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition duration-300 group-hover:from-primary group-hover:to-secondary group-hover:text-white">
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="mt-6 font-display text-xl font-bold text-ink lg:text-2xl">
        {service.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted lg:text-base">
        {service.description}
      </p>
      <Link
        href="/contact"
        className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-primary transition group-hover:gap-2.5 group-hover:bg-primary group-hover:text-white"
      >
        Enquire Now <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.article>
  );
}