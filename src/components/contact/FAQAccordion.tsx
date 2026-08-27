"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { useStore } from "@/store/useStore";

export default function FAQAccordion() {
  const activeFaqIndex = useStore((s) => s.activeFaqIndex);
  const toggleFaq = useStore((s) => s.toggleFaq);

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {FAQS.map((faq, i) => {
        const open = activeFaqIndex === i;
        return (
          <motion.div
            key={faq.question}
            className={`overflow-hidden rounded-2xl border transition ${
              open
                ? "border-primary/25 bg-white shadow-lg"
                : "border-ink/5 bg-white hover:border-primary/15"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
          >
            <button
              onClick={() => toggleFaq(i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span
                className={`text-base font-semibold ${
                  open ? "text-primary" : "text-ink"
                }`}
              >
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                  open ? "bg-primary text-white" : "bg-ink/5 text-ink"
                }`}
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}

      <div className="flex items-center gap-3 rounded-2xl border border-secondary/20 bg-secondary/10 px-6 py-5">
        <MessageCircleQuestion className="h-6 w-6 shrink-0 text-secondary-dark" />
        <p className="text-sm text-ink/80">
          Have a different question?{" "}
          <a
            href="https://wa.me/923005884112"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-secondary-dark underline-offset-2 hover:underline"
          >
            Message us on WhatsApp
          </a>{" "}
          — we reply quickly.
        </p>
      </div>
    </div>
  );
}