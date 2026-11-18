"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WHY_CHOOSE_US } from "@/lib/constants";
import SectionHeading from "@/components/shared/SectionHeading";

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Care That Feels Like Family"
          subtitle="Three reasons thousands of couples trust their journey to Hope IVF."
        />

        <div className="mt-16 space-y-20 lg:space-y-28">
          {WHY_CHOOSE_US.map((reason, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <div
                key={reason.title}
                className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <motion.div
                  className={`relative ${imageLeft ? "" : "lg:order-2"}`}
                  initial={{ opacity: 0, x: imageLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    aria-hidden
                    className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-secondary/10"
                  />
                  <div className="overflow-hidden rounded-[2rem] shadow-xl">
                    <Image
                      src={reason.image}
                      alt={reason.alt}
                      width={1024}
                      height={768}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className={imageLeft ? "" : "lg:order-1"}
                  initial={{ opacity: 0, x: imageLeft ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-display text-5xl font-bold text-primary/15 lg:text-6xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-balance font-display text-2xl font-bold text-ink lg:text-3xl">
                    {reason.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted lg:text-lg">
                    {reason.body}
                  </p>
                  <div
                    aria-hidden
                    className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary"
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}