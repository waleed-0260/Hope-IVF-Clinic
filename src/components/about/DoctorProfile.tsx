"use client";

import { GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES, SITE } from "@/lib/constants";
import { FacebookIcon } from "@/components/shared/SocialIcons";
import ScrollReveal from "@/components/shared/ScrollReveal";

const credentials = [
  "MBBS — King Edward Medical University",
  "FCPS — Gynecology & Obstetrics",
  "Fellowship in Reproductive Medicine & IVF",
];

export default function DoctorProfile() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
        <ScrollReveal className="lg:col-span-2">
          <div className="relative lg:sticky lg:top-28">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-secondary/10"
            />
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src={IMAGES.doctorPortrait}
                alt="Portrait of Dr. Ayesha Zaffar"
                width={720}
                height={900}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">
              <div className="font-display text-lg font-bold text-ink">
                {SITE.doctor}
              </div>
              <div className="text-sm text-muted">
                {SITE.title}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="lg:col-span-3">
          <span className="mb-4 inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-dark">
            {SITE.tagline}
          </span>
          <h2 className="text-balance font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
            {SITE.doctor}
          </h2>
          <p className="mt-2 text-lg font-medium text-primary">
            {SITE.title}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <GraduationCap className="h-5 w-5 text-accent" />
            {credentials.map((credential) => (
              <span
                key={credential}
                className="rounded-full border border-ink/10 bg-white px-4 py-1.5 text-sm font-medium text-ink"
              >
                {credential}
              </span>
            ))}
          </div>

          <div className="mt-7 space-y-5 text-base leading-relaxed text-muted lg:text-lg">
            <p>
              {SITE.doctor} is a pioneer in Pakistan&apos;s fertility space and
              one of the country&apos;s most trusted reproductive medicine
              specialists. With over two decades of clinical experience, she
              has helped bring more than 15,000 babies into the world — and
              touched the lives of hundreds of thousands more through her
              tireless advocacy and education.
            </p>
            <p>
              Her philosophy is rooted in what she calls &ldquo;honest
              science&rdquo;: transparent success data, the most advanced
              laboratory techniques, and treatment plans that respect each
              couple&apos;s medical reality and emotional journey. She believes
              the best care combines the precision of an embryologist with the
              warmth of a friend.
            </p>
            <p>
              As the face of the largest IVF community in Pakistan — with over{" "}
              {SITE.socialProof.followers} followers — Dr. Zaffar has made
              fertility knowledge accessible to countless families, dispelling
              myths and replacing fear with hope.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:scale-[1.03]"
            >
              Book a Consultation
            </Link>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink/10 px-6 py-3 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary"
            >
              <FacebookIcon className="h-4 w-4" /> Follow on Facebook
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}