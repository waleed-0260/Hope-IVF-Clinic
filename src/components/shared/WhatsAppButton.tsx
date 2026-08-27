"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/shared/SocialIcons";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-black/25 md:h-16 md:w-16"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full bg-whatsapp"
        animate={{ scale: [1, 1.35], opacity: [0.5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
      />
      <WhatsAppIcon className="relative h-7 w-7 md:h-8 md:w-8" />
    </motion.a>
  );
}