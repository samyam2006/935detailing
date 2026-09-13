import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import BeforeAfter from "@/components/BeforeAfter";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the finishes 935 Detailing specializes in — ceramic coatings, paint correction and full details. See real before & after transformations on our social channels.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Finishes we specialize in"
        title={
          <>
            The <span className="text-crimson-metal">935</span> showcase
          </>
        }
        subtitle="A look at the finishes and services we deliver across cars, SUVs and trucks. For real before & after photos from recent details, follow along on our channels."
      />

      <section className="section bg-ink noise">
        <div className="container-x">
          <GalleryGrid />
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-ink-2 p-6 text-center sm:flex-row sm:text-left">
              <p className="text-sm text-silver-2">
                Every real detail is documented with before &amp; after photos —
                see the latest transformations on Instagram.
              </p>
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost shrink-0"
              >
                <Instagram size={16} />
                Follow @935detailing
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-ink-2">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <BeforeAfter />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Correction, uncovered"
              title="The transformation is in the details"
              subtitle="Drag the slider to see how multi-stage polishing removes years of swirls and haze to restore true depth and clarity to the paint."
            />
            <Reveal delay={0.2}>
              <Link href="/contact" className="btn btn-primary shine mt-8">
                Book a correction
                <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
