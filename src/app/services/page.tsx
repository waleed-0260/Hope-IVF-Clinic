import type { Metadata } from "next";
import ServiceCard from "@/components/services/ServiceCard";
import TreatmentTimeline from "@/components/services/TreatmentTimeline";
import CTABanner from "@/components/shared/CTABanner";
import PageHero from "@/components/shared/PageHero";
import { IMAGES, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive fertility treatments at Hope IVF Clinic — IVF, ICSI, IUI, fertility workup, egg freezing, and recurrent miscarriage management.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Advanced Fertility Care"
        heading="Our Fertility Services"
        subtitle="Comprehensive, evidence-based treatments tailored to your unique journey."
        image={IMAGES.doctorConsult}
        imageAlt="A fertility specialist consulting warmly with a patient"
        crumb="Services"
      />

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <TreatmentTimeline />

      <CTABanner
        title="Not Sure Which Treatment Is Right for You?"
        subtitle="Book a consultation and let Dr. Ayesha Zaffar guide you with honesty and expertise."
        cta="Book a Consultation"
      />
    </>
  );
}