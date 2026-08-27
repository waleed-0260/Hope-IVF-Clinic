import { HeartPulse, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/constants";
import { FacebookIcon, WhatsAppIcon } from "@/components/shared/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
                <HeartPulse className="h-6 w-6" />
              </span>
              <span className="font-display text-xl font-bold text-white">
                Hope IVF
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {SITE.tagline}. Pakistan&apos;s most trusted fertility clinic,
              led by {SITE.doctor}.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-primary"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-whatsapp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer quick links">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-secondary-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href="/services"
                    className="transition hover:text-secondary-light"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary-light" />
                <span className="text-white/70">{SITE.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-secondary-light" />
                <a href={SITE.phoneHref} className="transition hover:text-secondary-light">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-secondary-light" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition hover:text-secondary-light"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="text-white/70">
                <span className="block text-white/90">{SITE.hours}</span>
                {SITE.hoursNote}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {SITE.name} — {SITE.doctor}. All rights reserved.
          </p>
          <p>
            Designed by <span className="text-secondary-light">Spearing Systems</span>
          </p>
        </div>
      </div>
    </footer>
  );
}