"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const parent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const child = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function TrustBar() {
  return (
    <section id="trust" className="scroll-mt-20 bg-primary text-white">
      <motion.div
        variants={parent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8"
      >
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            variants={child}
            className="text-center"
          >
            <div className="font-display text-4xl font-bold tracking-tight lg:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-white/80">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}