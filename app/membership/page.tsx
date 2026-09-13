import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Crown, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { membership, perks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Maintenance Club",
  description:
    "Join the 935 Maintenance Club — recurring mobile car maintenance from $65/mo for cars and $80/mo for SUVs and trucks, with priority scheduling in the Antelope Valley.",
};

const tiers = [
  { label: "Cars", price: membership.carPrice },
  { label: "SUVs / Trucks", price: membership.suvPrice },
];

export default function MembershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="935 Maintenance Club"
        title={
          <>
            Keep it clean.{" "}
            <span className="text-crimson-metal">Effortlessly.</span>
          </>
        }
        subtitle={`${membership.tagline} Recurring, fully-mobile maintenance so your vehicle always looks freshly detailed — with priority scheduling.`}
      />

      {/* PRICING + INCLUDES */}
      <section className="section bg-ink noise">
        <div className="container-x grid items-start gap-10 lg:grid-cols-2">
          {/* pricing */}
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-crimson/30 bg-gradient-to-br from-crimson/15 via-ink-3 to-ink p-8 sm:p-10">
              <div className="absolute inset-0 bg-radial-crimson opacity-60" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-crimson px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  <Crown size={14} />
                  Membership
                </div>
                <h2 className="font-display mt-5 text-3xl text-bone">
                  {membership.name}
                </h2>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {tiers.map((t) => (
                    <div
                      key={t.label}
                      className="rounded-2xl border border-white/10 bg-ink/50 p-5 text-center"
                    >
                      <p className="font-display text-4xl text-crimson-metal">
                        {t.price}
                        <span className="text-base text-silver-2">
                          {membership.period}
                        </span>
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-widest text-steel">
                        {t.label}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="btn btn-primary shine mt-8 w-full justify-center"
                >
                  Join the Club
                  <ArrowRight size={16} />
                </Link>
                <p className="mt-4 flex items-start gap-2 text-xs text-silver-2">
                  <Sparkles size={14} className="mt-0.5 shrink-0 text-crimson" />
                  {membership.requirement}
                </p>
              </div>
            </div>
          </Reveal>

          {/* includes */}
          <div>
            <SectionHeading
              eyebrow="What's included"
              title="Every visit, every month"
              subtitle="A consistent maintenance detail that keeps your vehicle protected against desert dust, heat and grime between full details."
            />
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {membership.includes.map((m, i) => (
                <Reveal key={m} delay={(i % 2) * 0.06}>
                  <li className="flex items-center gap-3 rounded-xl card-hairline px-4 py-3 text-sm text-silver">
                    <Check size={16} className="shrink-0 text-crimson" />
                    {m}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section bg-ink-2">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="How membership works"
            title="Get it clean, then keep it clean"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Start with a full detail",
                text: "Book a 935 Signature or Full Restore so we can bring your vehicle up to the 935 standard.",
              },
              {
                n: "02",
                title: "Enroll in the Club",
                text: "Pick your plan — $65/mo for cars, $80/mo for SUVs and trucks — and lock in priority scheduling.",
              },
              {
                n: "03",
                title: "We keep it fresh",
                text: "Recurring mobile maintenance visits keep it looking freshly detailed all month long.",
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="relative h-full rounded-2xl card-hairline p-7">
                  <span className="font-display text-5xl text-crimson/25">
                    {s.n}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-bone">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="section bg-ink noise">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Member & customer perks"
            title="Rewards that add up"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 0.08}>
                <div className="group h-full rounded-2xl card-hairline p-6 text-center transition-colors hover:border-crimson/30">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-crimson/12 text-crimson transition-colors group-hover:bg-crimson group-hover:text-white">
                    <Icon name={p.icon} size={22} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-bone">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.text}
                  </p>
                </div>
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
            <h2 className="font-display mx-auto max-w-2xl text-3xl sm:text-4xl text-bone">
              Ready to never worry about a dirty car again?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/contact" className="btn btn-primary shine mt-8">
              Start your membership
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
