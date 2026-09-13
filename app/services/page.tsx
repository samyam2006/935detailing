import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { packages, premium, addOns } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "935 Detailing packages and pricing — 935 Refresh, Signature and Full Restore, plus paint enhancement, paint correction, ceramic coating and add-ons. 100% mobile in the Antelope Valley.",
};

const faqs = [
  {
    q: "Are you really 100% mobile?",
    a: "Yes. We bring the detail shop to you — home, work or driveway anywhere in Lancaster, Palmdale and the Antelope Valley. We'll confirm any water or power access needs when you book.",
  },
  {
    q: "How is final pricing decided?",
    a: "Every package lists a starting price for cars and for SUVs/trucks. Final pricing depends on your vehicle's size and condition — heavily soiled vehicles may need add-ons, which we'll always confirm before we start.",
  },
  {
    q: "How long does ceramic coating last?",
    a: "We offer 1, 3 and 5-year protection tiers. Because coating prep and pricing vary by vehicle, ceramic coating is quote and appointment only — reach out and we'll build the right package.",
  },
  {
    q: "Can you remove scratches and swirls?",
    a: "In most cases, yes. Our paint enhancement and multi-stage paint correction level the clear coat to remove swirls, light scratches and oxidation. Deep scratches through the clear may only be reduced.",
  },
  {
    q: "What's your satisfaction guarantee?",
    a: "If you're not satisfied with the finished detail, let us know within 24 hours and we'll make it right. Simple as that.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services & Pricing"
        title={
          <>
            Honest pricing, every{" "}
            <span className="text-crimson-metal">detail</span>
          </>
        }
        subtitle="No upsell games. Pick a package for your car, SUV or truck — or add premium paint care. Fully mobile across the Antelope Valley."
      />

      {/* MAIN PACKAGES */}
      <section className="section bg-ink noise">
        <div className="container-x">
          <SectionHeading
            eyebrow="Main packages"
            title="Choose your clean"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 text-center text-sm text-steel">
              Final pricing depends on vehicle size and condition. Fleet rates
              available on request.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PREMIUM SERVICES */}
      <section className="section bg-ink-2">
        <div className="container-x">
          <SectionHeading
            eyebrow="Premium services"
            title={
              <>
                Serious <span className="text-crimson-metal">paint care</span>
              </>
            }
            subtitle="Where 935 goes beyond a clean car — correction and protection that transform your paint."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {premium.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <article className="flex h-full flex-col rounded-2xl card-hairline p-7 transition-colors hover:border-crimson/30">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/6 text-crimson">
                    <Icon name={p.icon} size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-bone">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.blurb}
                  </p>
                  <p className="mt-4 font-display text-lg text-metal">
                    {p.price}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-silver-2"
                      >
                        <Check size={16} className="mt-0.5 shrink-0 text-crimson" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-7">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-crimson transition-colors hover:text-crimson-bright"
                    >
                      {p.quoteOnly ? "Request a quote" : "Book this service"}
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="section bg-ink noise">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Enhance any package"
            title="Add-ons"
            subtitle="Mix and match with any detail. Prices start low and scale with condition."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
            {addOns.map((a, i) => (
              <Reveal key={a.name} delay={(i % 2) * 0.05}>
                <div className="flex items-center justify-between rounded-xl card-hairline px-5 py-4 transition-colors hover:border-crimson/30">
                  <span className="text-sm font-medium text-silver">
                    {a.name}
                  </span>
                  <span className="font-display text-lg text-metal">
                    {a.price}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-steel">
              Prices are &ldquo;starting at&rdquo; — heavy soiling, pet hair or
              condition can change the labor required. We&apos;ll always confirm
              before we begin.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-ink-2">
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
      <section className="relative overflow-hidden bg-ink noise">
        <div className="absolute inset-0 bg-radial-crimson" />
        <div className="container-x relative py-20 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl text-bone">
              Not sure which package fits?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Tell us about your vehicle and we&apos;ll recommend the right
              detail.
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
