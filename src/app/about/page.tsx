import type { Metadata } from "next";
import Affiliations from "@/components/about/Affiliations";
import ClinicGallery from "@/components/about/ClinicGallery";
import DoctorProfile from "@/components/about/DoctorProfile";
import MissionVision from "@/components/about/MissionVision";
import PageHero from "@/components/shared/PageHero";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Dr. Ayesha Zaffar — Pakistan's leading reproductive medicine specialist — and discover our mission, vision, and world-class clinic in DHA Phase 6, Lahore.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Since 2001"
        heading="About Hope IVF Clinic"
        subtitle="A pioneer in reproductive medicine, a family that never gives up on you."
        image={IMAGES.clinicInterior}
        imageAlt="The modern, welcoming interior of Hope IVF Clinic"
        crumb="About"
      />
      <DoctorProfile />
      <MissionVision />
      <ClinicGallery />
      <Affiliations />
    </>
  );
}