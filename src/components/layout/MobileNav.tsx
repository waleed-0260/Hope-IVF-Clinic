"use client";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { HeartPulse, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { useStore } from "@/store/useStore";

export default function MobileNav() {
  const mobileNavOpen = useStore((s) => s.mobileNavOpen);
  const toggleNav = useStore((s) => s.toggleNav);
  const closeNav = useStore((s) => s.closeNav);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  return (
    <AnimatePresence>
      {mobileNavOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeNav}
            aria-hidden
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-[82%] max-w-sm flex-col overflow-y-auto bg-cream shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-ink/5 px-6 py-5">
              <Link
                href="/"
                onClick={closeNav}
                className="flex items-center gap-2"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
                  <HeartPulse className="h-5 w-5" />
                </span>
                <span className="font-display text-lg font-bold text-ink">
                  Hope IVF
                </span>
              </Link>
              <button
                onClick={toggleNav}
                aria-label="Close menu"
                className="rounded-full p-2 text-ink transition hover:bg-ink/5 focus-visible:outline-2"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
              {NAV_LINKS.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeNav}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium transition ${
                        active
                          ? "bg-primary text-white"
                          : "text-ink hover:bg-ink/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="border-t border-ink/5 px-6 py-6">
              <Link
                href="/contact"
                onClick={closeNav}
                className="block rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-center text-base font-semibold text-white shadow-lg"
              >
                Book Appointment
              </Link>
              <p className="mt-4 text-center text-sm text-muted">
                {SITE.phone}
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}