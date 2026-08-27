"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Clapperboard, Play, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { IMAGES } from "@/lib/constants";
import SectionHeading from "@/components/shared/SectionHeading";

const videos = [
  {
    src: IMAGES.motherBaby,
    alt: "A mother cradling her newborn baby",
    caption: "Ayesha & Omar — Our IVF Twins",
  },
  {
    src: IMAGES.newborn,
    alt: "A newborn baby being gently held",
    caption: "Sana & Ahmed — Our First IUI Success",
  },
  {
    src: IMAGES.babyFeet,
    alt: "Tiny baby feet resting in a parent's hands",
    caption: "Fatima & Bilal — After 4 Years",
  },
];

export default function VideoTestimonials() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Video Testimonials"
          title="Watch Their Stories"
          subtitle="See the joy on the faces of families just like yours."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {videos.map((video, i) => (
            <motion.button
              key={video.src}
              onClick={() => setOpen(true)}
              className="group relative overflow-hidden rounded-2xl text-left shadow-lg"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              aria-label={`Play video: ${video.caption}`}
            >
              <Image
                src={video.src}
                alt={video.alt}
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-xl transition group-hover:scale-110 group-hover:bg-white">
                <Play className="h-7 w-7 translate-x-0.5 fill-primary" />
              </span>
              <span className="absolute inset-x-0 bottom-0 p-5 font-display text-base font-bold text-white">
                {video.caption}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Video placeholder"
          >
            <motion.div
              className="relative w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-2xl"
              initial={{ scale: 0.92, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 16 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-5 top-5 rounded-full bg-ink/5 p-2 text-ink transition hover:bg-ink/10"
              >
                <X className="h-5 w-5" />
              </button>
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clapperboard className="h-8 w-8" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                Video Coming Soon
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted">
                We&apos;re preparing real stories from our wonderful families.
                Check back soon — or book a consultation to hear them yourself.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}