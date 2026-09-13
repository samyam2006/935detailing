import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Truck, SprayCan, BadgeCheck, Sun } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Socials from "@/components/Socials";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "935 Detailing is a 100% mobile detailing company built for the Antelope Valley. Professional-grade products, proper techniques, and a 100% satisfaction guarantee.",
};

const values = [
  {
    icon: Truck,
    title: "100% Mobile",
    text: "We bring the detail shop to your driveway — convenience that feels premium, not rushed.",
  },
  {
    icon: SprayCan,
    title: "Premium Products",
    text: "Professional-grade products and proper techniques. No shortcuts, on every vehicle.",
  },
  {
    icon: BadgeCheck,
    title: "Satisfaction Guarantee",
    text: "Not happy? Tell us within 24 hours and we'll make it right. Your standard is the standard.",
  },
  {
    icon: Sun,
    title: "Built for the Desert",
    text: "Details engineered for Antelope Valley heat, dust, hard water and UV.",
  },
];

const promises = [
  "Professional-grade products",
  "Attention to every detail",
  "Convenient mobile service",
  "Honest, upfront pricing",
  "Before & after photos",
  "Customer-first service",
  "100% satisfaction guarantee",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title={
          <>
            Mobile. Premium.{" "}
            <span className="text-crimson-metal">935.</span>
          </>
        }
        subtitle="A 100% mobile detailing company built for the Antelope Valley — focused on one thing: making your vehicle look its absolute best."
      />

      {/* STORY */}
      <section className="section bg-ink noise">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="We bring the shop to you"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
              <Reveal>
                <p>
                  935 Detailing is a fully mobile detailing service based in{" "}
                  {site.city}, serving Lancaster, Palmdale and the greater
                  Antelope Valley. Home, work or driveway — you don&apos;t have
                  to waste your day sitting at a shop.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  From everyday maintenance to full vehicle restorations, we
                  treat every car to the same standard: professional-grade
                  products, proper techniques and obsessive attention to detail.
                  It&apos;s professional detailing — without the dealership
                  price.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  We document every job with before &amp; after photos, and back
                  our work with a 100% satisfaction guarantee. Follow the
                  transformations across our channels.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.3}>
              <Socials className="mt-8" />
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-carbon p-8">
              <div className="absolute inset-0 bg-radial-crimson opacity-70" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="accent-line" />
                  <p className="eyebrow">The 935 promise</p>
                </div>
                <p className="font-display mt-4 text-3xl text-bone">
                  Every vehicle,{" "}
                  <span className="text-crimson-metal">the same standard.</span>
                </p>
                <ul className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {promises.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2.5 rounded-lg bg-ink/50 px-3 py-2.5 text-sm text-silver"
                    >
                      <Check size={15} className="shrink-0 text-crimson" />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.28em] text-crimson">
                  Mobile · Premium · 935
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="section bg-ink-2">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="What we stand for"
            title="The standards behind every detail"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="group h-full rounded-2xl card-hairline p-7 transition-colors hover:border-crimson/30">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-crimson/12 text-crimson transition-colors group-hover:bg-crimson group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-bone">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {v.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink noise">
        <div className="absolute inset-0 bg-radial-crimson" />
        <div className="container-x relative py-20 text-center">
          <Reveal>
            <h2 className="font-display mx-auto max-w-2xl text-3xl sm:text-4xl text-bone">
              Built for Lancaster. Made for the desert.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Serving {site.serviceAreas.join(", ")}. Book a detail and see the
              935 standard for yourself.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/contact" className="btn btn-primary shine mt-8">
              Book Your Detail
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
