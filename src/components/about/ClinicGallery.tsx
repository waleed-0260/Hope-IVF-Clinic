"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { IMAGES, SITE } from "@/lib/constants";
import SectionHeading from "@/components/shared/SectionHeading";

const gallery = [
  {
    src: IMAGES.clinicInterior,
    alt: "Modern, bright reception area of Hope IVF Clinic",
    caption: "Reception & Lounge",
  },
  {
    src: IMAGES.laboratory,
    alt: "Advanced embryology laboratory equipment",
    caption: "Embryology Laboratory",
  },
  {
    src: IMAGES.clinicLounge,
    alt: "Comfortable consultation and waiting areas",
    caption: "Consultation Rooms",
  },
];

export default function ClinicGallery() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Clinic"
          title="A Space Designed Around You"
          subtitle="Finally, a fertility clinic that feels as good as it functions."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {gallery.map((item, i) => (
            <motion.figure
              key={item.caption}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={768}
                height={576}
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                  i === 1 ? "aspect-[4/5]" : "aspect-[4/3]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 font-display text-lg font-bold text-white">
                {item.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          className="mx-auto mt-12 flex max-w-3xl items-start gap-4 rounded-2xl border border-primary/10 bg-white p-6 shadow-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <MapPin className="mt-1 h-6 w-6 shrink-0 text-secondary-dark" />
          <p className="text-base leading-relaxed text-muted">
            You will find us at <strong className="text-ink">{SITE.address}</strong>.
            Our premium facility in DHA Phase 6 combines a modern, world-class
            laboratory with calm, private spaces — because fertility treatment
            deserves an environment that feels as comfortable as your own home.
          </p>
        </motion.div>
      </div>
    </section>
  );
}