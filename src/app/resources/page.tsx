import type { Metadata } from "next";
import ArticleCard from "@/components/resources/ArticleCard";
import NewsletterSignup from "@/components/resources/NewsletterSignup";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { ARTICLES, IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Expert fertility knowledge to guide your journey — from understanding IVF basics to nutrition, PCOS, and emotional wellness.",
};

export default function ResourcesPage() {
  const [featured, ...rest] = ARTICLES;

  return (
    <>
      <PageHero
        eyebrow="Learning Center"
        heading="Fertility Resources & Education"
        subtitle="Expert knowledge to guide your journey."
        image={IMAGES.coupleSunset}
        imageAlt="A couple walking hand in hand at sunset"
        crumb="Resources"
      />

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Featured"
            title="Featured Article"
          />
          <div className="mt-8">
            <ArticleCard article={featured} large />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Library"
            title="More Articles & Guides"
            subtitle="Browse our growing library of honest, expert fertility knowledge."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <ArticleCard key={article.slug} article={article} index={i} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}