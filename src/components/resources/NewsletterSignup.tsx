"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import SectionHeading from "@/components/shared/SectionHeading";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return;
    setSubscribed(true);
  };

  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-24">
      <motion.div
        aria-hidden
        className="absolute -right-16 top-0 h-72 w-72 rounded-full bg-secondary/30 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <SectionHeading
          light
          eyebrow="Newsletter"
          title="Stay Informed"
          subtitle="Get fertility tips and clinic updates delivered to your inbox."
        />

        {!subscribed ? (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              aria-label="Email address"
              className="w-full flex-1 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm text-white placeholder:text-white/60 backdrop-blur transition focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-primary shadow-xl transition hover:scale-[1.03]"
            >
              Subscribe <Send className="h-4 w-4" />
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto mt-9 flex max-w-md items-center justify-center gap-3 rounded-full bg-white/15 px-6 py-4 text-white backdrop-blur"
          >
            <CheckCircle2 className="h-6 w-6 text-accent" />
            <p className="text-sm font-medium">
              You&apos;re subscribed! Welcome to the Hope IVF family.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}