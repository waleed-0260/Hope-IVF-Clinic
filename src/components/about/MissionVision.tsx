"use client";

import { Eye, Target } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function MissionVision() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Purpose"
          title="Mission & Vision"
          subtitle="The principles that guide every decision we make."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <div className="group h-full rounded-2xl bg-gradient-to-br from-primary/40 via-primary/10 to-secondary/40 p-px transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-full rounded-[calc(var(--radius-2xl)-1px)] bg-cream p-8 lg:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/25">
                  <Target className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink">
                  Our Mission
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted lg:text-lg">
                  To provide accessible, world-class fertility care with
                  compassion and scientific excellence — so that no family in
                  Pakistan has to choose between quality and hope.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="group h-full rounded-2xl bg-gradient-to-br from-secondary/40 via-secondary/10 to-accent/40 p-px transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-full rounded-[calc(var(--radius-2xl)-1px)] bg-cream p-8 lg:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-white shadow-lg shadow-secondary/25">
                  <Eye className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink">
                  Our Vision
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted lg:text-lg">
                  To be South Asia&apos;s most trusted fertility center — giving
                  every couple who walks through our doors the chance to become
                  parents.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}