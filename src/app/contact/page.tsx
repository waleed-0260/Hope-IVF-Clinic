import type { Metadata } from "next";
import AppointmentForm from "@/components/contact/AppointmentForm";
import ContactInfo from "@/components/contact/ContactInfo";
import FAQAccordion from "@/components/contact/FAQAccordion";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Contact & Appointment",
  description:
    "Book a confidential consultation with Dr. Ayesha Zaffar at Hope IVF Clinic in DHA Phase 6, Lahore. Call (068) 5884112 or use our easy online appointment form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="We're Here for You"
        heading="Get in Touch"
        subtitle="Take the first step toward your dream of parenthood."
        crumb="Contact"
      />

      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <SectionHeading
              align="left"
              title="Contact Information"
              subtitle="Reach us any way you like — we respond quickly and confidentially."
            />
            <div className="mt-8">
              <ContactInfo />
            </div>
          </div>

          <div>
            <SectionHeading
              align="left"
              title="Book Your Appointment"
              subtitle="Fill in the details below and our care team will call you to confirm."
            />
            <div className="mt-8">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Honest answers to the questions we hear most often."
          />
          <div className="mt-12">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </>
  );
}