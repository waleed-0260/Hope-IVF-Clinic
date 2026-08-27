"use client";

import { motion } from "framer-motion";
import { ChevronDown, HeartHandshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES, SITE } from "@/lib/constants";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src={IMAGES.hero}
        alt="A couple holding hands, surrounded by warm golden light"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ink/80 via-ink/60 to-secondary/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />

      <motion.div
        aria-hidden
        className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-primary/40 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-secondary/40 blur-3xl"
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur"
          >
            <HeartHandshake className="h-4 w-4 text-secondary-light" />
            {SITE.socialProof.followers} families trust our care
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-7xl"
          >
            Where <span className="text-secondary-light">Hope</span>{" "}
            Meets <span className="text-accent">Science</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            Pakistan&apos;s most trusted IVF clinic — led by {SITE.doctor}{" "}
            with {SITE.socialProof.followers} of families who believe in our
            care.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-primary/30 transition hover:scale-[1.03]"
            >
              Book a Consultation
            </Link>
            <Link
              href="/success-stories"
              className="inline-flex items-center rounded-full border-2 border-white/40 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-white hover:bg-white/10"
            >
              Our Success Stories
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#trust"
        aria-label="Scroll down to learn more"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.a>
    </section>
  );
}