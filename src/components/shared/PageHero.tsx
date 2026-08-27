"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  crumb: string;
};

export default function PageHero({
  eyebrow,
  heading,
  subtitle,
  image,
  imageAlt = "",
  crumb,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden pt-32 pb-16 sm:min-h-[46vh] sm:pb-20">
      {image ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary" />
      )}
      <div
        className={`absolute inset-0 ${
          image
            ? "bg-gradient-to-t from-ink/85 via-ink/45 to-ink/30"
            : "bg-ink/25"
        }`}
      />
      {image && (
        <motion.div
          aria-hidden
          className="absolute right-10 top-28 h-56 w-56 rounded-full bg-secondary/30 blur-3xl"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex items-center gap-1.5 text-xs font-medium text-white/70"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{crumb}</span>
          </nav>
          {eyebrow && (
            <span className="mb-3 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              {eyebrow}
            </span>
          )}
          <h1 className="text-balance font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {heading}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}