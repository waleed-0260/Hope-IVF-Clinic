"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ClipboardList,
  FileText,
  FlaskConical,
  HeartPulse,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { TREATMENT_STEPS } from "@/lib/constants";
import SectionHeading from "@/components/shared/SectionHeading";

const icons = [
  Stethoscope,
  ClipboardList,
  FileText,
  Activity,
  FlaskConical,
  Sparkles,
  HeartPulse,
];

const parent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const child = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function TreatmentTimeline() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Treatment Process"
          title="Your IVF Journey, Step by Step"
          subtitle="A clear, calming roadmap of what to expect — from your first consultation to your pregnancy test."
        />

        <div className="mt-16">
          {/* Desktop horizontal timeline */}
          <div className="relative hidden lg:block">
            <motion.div
              aria-hidden
              className="absolute left-[7%] right-[7%] top-7 h-0.5 bg-gradient-to-r from-primary/30 via-secondary/40 to-accent/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
            <motion.ol
              variants={parent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-7 gap-4"
            >
              {TREATMENT_STEPS.map((step, i) => {
                const Icon = icons[i];
                return (
                  <motion.li
                    key={step.step}
                    variants={child}
                    className="flex flex-col items-center text-center"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-cream shadow-md ring-1 ring-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </span>
                    <span className="mt-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-secondary-dark">
                      Step {step.step}
                    </span>
                    <h3 className="mt-1 font-display text-base font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </motion.li>
                );
              })}
            </motion.ol>
          </div>

          {/* Mobile vertical timeline */}
          <div className="relative lg:hidden">
            <motion.div
              aria-hidden
              className="absolute bottom-4 left-7 top-4 w-0.5 bg-gradient-to-b from-primary/30 via-secondary/40 to-accent/30"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />
            <motion.ol
              variants={parent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-8"
            >
              {TREATMENT_STEPS.map((step, i) => {
                const Icon = icons[i];
                return (
                  <motion.li
                    key={step.step}
                    variants={child}
                    className="relative flex items-start gap-5 pl-2"
                  >
                    <span className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-white bg-cream shadow-md ring-1 ring-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </span>
                    <div className="pt-2">
                      <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-secondary-dark">
                        Step {step.step}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-bold text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ol>
          </div>
        </div>
      </div>
    </section>
  );
}