"use client";

import { Clock, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { FacebookIcon, WhatsAppIcon } from "@/components/shared/SocialIcons";

const items = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [SITE.address],
    href: undefined as string | undefined,
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: [SITE.phone],
    href: SITE.phoneHref,
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    lines: [SITE.whatsappDisplay],
    href: SITE.whatsapp,
    external: true,
  },
  {
    icon: FacebookIcon,
    title: "Facebook",
    lines: ["DrAyeshaZaffar"],
    href: SITE.facebook,
    external: true,
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: [SITE.hours, SITE.hoursNote],
  },
];

export default function ContactInfo() {
  return (
    <ScrollReveal>
      <ol className="space-y-4">
        {items.map((item) => (
          <li
            key={item.title}
            className="flex items-start gap-4 rounded-2xl border border-ink/5 bg-white p-5 transition hover:shadow-md"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
              <item.icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-ink">
                {item.title}
              </h3>
              {item.href ? (
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="mt-1 block text-sm leading-relaxed text-muted transition hover:text-primary"
                >
                  {item.lines[0]}
                </a>
              ) : (
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.lines[0]}
                  {"lines" in item && item.lines[1] && (
                    <>
                      <br />
                      {item.lines[1]}
                    </>
                  )}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-6 overflow-hidden rounded-2xl border border-ink/5 shadow-sm">
        <iframe
          src={SITE.mapEmbed}
          title="Hope IVF Clinic location — DHA Phase 6, Lahore"
          className="h-72 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </ScrollReveal>
  );
}