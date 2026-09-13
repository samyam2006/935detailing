import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import BeforeAfter from "@/components/BeforeAfter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A showcase of finishes from 935 Detailing — ceramic coatings, paint correction and full details across a range of vehicles.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title={
          <>
            The <span className="text-crimson-metal">935</span> showcase
          </>
        }
        subtitle="Every finish is styled to the vehicle and the goal. Browse a selection of the paint, protection and interior work we&apos;re proud of."
      />

      <section className="section bg-ink noise">
        <div className="container-x">
          <GalleryGrid />
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
