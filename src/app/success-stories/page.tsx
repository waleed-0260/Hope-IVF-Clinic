import type { Metadata } from "next";
import TestimonialGrid from "@/components/success-stories/TestimonialGrid";
import VideoTestimonials from "@/components/success-stories/VideoTestimonials";
import TrustBar from "@/components/home/TrustBar";
import CTABanner from "@/components/shared/CTABanner";
import PageHero from "@/components/shared/PageHero";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real families, real journeys, real joy. Read the stories of couples across Pakistan who found hope and parenthood at Hope IVF.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Stories of Hope"
        heading="Stories of Hope"
        subtitle="Real families, real journeys, real joy."
        image={IMAGES.familyJoy}
        imageAlt="A joyful family holding their newborn baby"
        crumb="Success Stories"
      />
      <TrustBar />

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TestimonialGrid />
        </div>
      </section>

      <VideoTestimonials />

      <CTABanner
        title="Your Story Could Be Next"
        subtitle="Book your first consultation today, and let us write the next chapter of hope together."
        cta="Start Your Journey"
      />
    </>
  );
}