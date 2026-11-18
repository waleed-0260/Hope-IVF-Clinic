import type { Metadata, Viewport } from "next";
import Navbar from "@/components/layout/Navbar";
import MobileNav from "@/components/layout/MobileNav";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { SITE } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hopeivfclinic.com"),
  title: {
    default: `${SITE.name} — Dr. Ayesha Zaffar`,
    template: `%s | ${SITE.name} — Dr. Ayesha Zaffar`,
  },
  description:
    "Pakistan's most trusted IVF clinic, led by Dr. Ayesha Zaffar. Where hope meets science — 15,000+ successful pregnancies and 96% recommendation rate.",
  keywords: [
    "IVF clinic Pakistan",
    "fertility clinic Lahore",
    "Dr. Ayesha Zaffar",
    "IVF treatment",
    "IUI",
    "ICSI",
    "reproductive medicine",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — Where Hope Meets Science`,
    description:
      "Pakistan's most trusted IVF clinic, led by Dr. Ayesha Zaffar. Book a confidential consultation today.",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Where Hope Meets Science`,
    description:
      "Pakistan's most trusted IVF clinic, led by Dr. Ayesha Zaffar.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D7377",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <MobileNav />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}