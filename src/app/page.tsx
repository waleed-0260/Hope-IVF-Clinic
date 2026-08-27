import type { Metadata } from "next";
import AboutPreview from "@/components/home/AboutPreview";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import Testimonials from "@/components/home/Testimonials";
import TrustBar from "@/components/home/TrustBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Pakistan's most trusted IVF clinic — Where Hope Meets Science. Led by Dr. Ayesha Zaffar with 15,000+ successful pregnancies.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}