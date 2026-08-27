"use client";

import { ArrowRight, Award, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES, SITE } from "@/lib/constants";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <ScrollReveal>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-secondary/10"
            />
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src={IMAGES.doctorPortrait}
                alt="Dr. Ayesha Zaffar smiling warmly in her clinic"
                width={960}
                height={1100}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-3 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-right-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Award className="h-6 w-6" />
              </span>
              <div>
                <div className="font-display text-xl font-bold text-ink">
                  {SITE.socialProof.followers}
                </div>
                <div className="text-xs text-muted">
                  Facebook Community
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <span className="mb-4 inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-dark">
            About {SITE.doctor}
          </span>
          <h2 className="text-balance font-display text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-[2.75rem]">
            A Pioneer in Reproductive Medicine
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            {SITE.doctor} is one of Pakistan&apos;s leading fertility
            specialists with over two decades of experience helping families
            realize their dreams. Her compassionate, evidence-based approach
            has made Hope IVF the most followed fertility clinic in the
            country.
          </p>
          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-primary/10 bg-primary-50 p-5">
            <Quote className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <p className="text-sm italic leading-relaxed text-ink/80">
              &ldquo;Every family&apos;s journey is unique. My promise is
              simple: honest science, world-class care, and hope that never
              dims.&rdquo;
            </p>
          </div>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:scale-[1.03] hover:bg-primary"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}