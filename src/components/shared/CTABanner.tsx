"use client";

import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";

type CTABannerProps = {
  title?: string;
  subtitle?: string;
  cta?: string;
  href?: string;
};

export default function CTABanner({
  title = "Your Journey to Parenthood Starts Here",
  subtitle = "Book a confidential consultation with Dr. Ayesha Zaffar today.",
  cta = "Book Appointment",
  href = "/contact",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary" />
      <motion.div
        aria-hidden
        className="absolute -left-16 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        animate={{ y: [0, -24, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-secondary/40 blur-3xl"
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        aria-hidden
        className="absolute left-1/4 top-1/2 h-40 w-40 rounded-full bg-accent/20 blur-2xl"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <ScrollReveal>
          <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur">
            <HeartHandshake className="h-8 w-8" />
          </span>
          <h2 className="text-balance font-display text-3xl font-bold leading-tight text-white md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            {subtitle}
          </p>
          <Link
            href={href}
            className="mt-9 inline-flex items-center rounded-full bg-white px-9 py-4 text-sm font-bold text-primary shadow-xl transition hover:scale-[1.04]"
          >
            {cta}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}