import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Explore 935 Detailing packages — express shine, signature details, ceramic coatings, paint correction, interior restoration and paint protection film.",
};

const faqs = [
  {
    q: "Do you come to me or do I drop off?",
    a: "Both. We offer mobile detailing across California for most services, plus an in-studio bay for coatings and correction that need a controlled, dust-free environment.",
  },
  {
    q: "How long does a ceramic coating last?",
    a: "Our nano-ceramic coatings are rated up to 5 years with proper maintenance. We'll walk you through simple aftercare to keep it performing.",
  },
  {
    q: "Can you remove scratches and swirls?",
    a: "In most cases, yes. Paint correction levels the clear coat to remove swirls, light scratches and oxidation. Deep scratches through the clear may only be reduced.",
  },
  {
    q: "What payment methods do you accept?",
    a: "All major cards, Apple Pay, and cash. A deposit secures ceramic and PPF bookings.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services & Pricing"
        title={
          <>
            Packages for every{" "}
            <span className="text-crimson-metal">finish</span>
          </>
        }
        subtitle="Transparent pricing, no upsell games. Pick a package or ask us to build a custom program for your vehicle."
      />

      <section className="section bg-ink noise">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-8 text-center text-sm text-steel">
              Every price is a starting point — final quotes depend on vehicle
              size and condition. Fleet & dealer rates available.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="section bg-ink-2">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Enhance any package"
            title="Popular add-ons"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Pet hair removal", "$40+"],
              ["Engine bay detail", "$60"],
              ["Headlight restoration", "$80"],
              ["Ozone odor treatment", "$75"],
              ["Wheel-off deep clean", "$120"],
              ["Glass ceramic coating", "$90"],
            ].map(([name, price], i) => (
              <Reveal key={name} delay={(i % 3) * 0.08}>
                <div className="flex items-center justify-between rounded-xl card-hairline px-5 py-4 transition-colors hover:border-crimson/30">
                  <span className="text-sm font-medium text-silver">{name}</span>
                  <span className="font-display text-lg text-metal">{price}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-ink noise">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Questions"
            title="Good to know"
            subtitle="Everything you need before you book. Still curious? Reach out — we love talking cars."
          />
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06}>
                <details className="group rounded-xl card-hairline p-5 transition-colors open:border-crimson/30">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-bone">
                    <span className="flex items-center gap-3">
                      <HelpCircle size={18} className="shrink-0 text-crimson" />
                      {f.q}
                    </span>
                    <span className="text-crimson transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 pl-8 text-sm leading-relaxed text-muted">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink-2">
        <div className="absolute inset-0 bg-radial-crimson" />
        <div className="container-x relative py-20 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl text-bone">
              Not sure which package fits?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Tell us about your car and we&apos;ll recommend the right program.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/contact" className="btn btn-primary shine mt-8">
              Get a free recommendation
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
