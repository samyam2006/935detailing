import Link from "next/link";
import { ArrowRight, Check, Crown } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import BeforeAfter from "@/components/BeforeAfter";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import {
  packages,
  process,
  stats,
  differentiators,
  membership,
  perks,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* STATS STRIP */}
      <section className="relative border-y border-white/10 bg-ink-2">
        <div className="container-x grid grid-cols-2 gap-y-8 py-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-3xl sm:text-4xl text-crimson-metal">
                {s.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-silver-2">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PACKAGES PREVIEW */}
      <section className="section bg-ink noise">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Detail packages"
              title={
                <>
                  Built around your{" "}
                  <span className="text-crimson-metal">standard</span>
                </>
              }
              subtitle="From keeping it clean between details to a full restoration — honest, upfront pricing for cars, SUVs and trucks."
            />
            <Reveal delay={0.2}>
              <Link href="/services" className="btn btn-ghost whitespace-nowrap">
                All services &amp; pricing
                <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-6 text-center text-sm text-steel">
              Final pricing depends on vehicle size and condition. Premium paint
              correction &amp; ceramic coating also available.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="section bg-ink-2">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Why 935"
            title="More than a mobile car wash"
            subtitle="Professional detailing without the dealership price — with the convenience, care and standards that set us apart."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl card-hairline p-7 transition-colors hover:border-crimson/30">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-crimson/12 text-crimson transition-colors group-hover:bg-crimson group-hover:text-white">
                    <Icon name={d.icon} size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-bone">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {d.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER SHOWCASE */}
      <section className="section bg-ink noise">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="The 935 difference"
              title={
                <>
                  See the correction. <br />
                  <span className="text-metal">Drag to reveal.</span>
                </>
              }
              subtitle="Swirls, oxidation and desert haze cut away to a deep, mirror-clear finish. Every detail is documented with before & after photos."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Professional-grade products & technique",
                "Correction matched to your paint's condition",
                "Finished with lasting protection",
              ].map((t, i) => (
                <Reveal key={t} delay={i * 0.08}>
                  <li className="flex items-center gap-3 text-silver">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-crimson/15 text-xs font-bold text-crimson">
                      {i + 1}
                    </span>
                    {t}
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.3}>
              <Link href="/gallery" className="btn btn-primary shine mt-9">
                Explore the gallery
                <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <BeforeAfter />
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section bg-ink-2">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="How it works"
            title="Four steps to a flawless finish"
            subtitle="A simple, mobile process that delivers the same show-quality result every time — right at your driveway."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => {
              return (
                <Reveal key={step.n} delay={i * 0.1}>
                  <div className="group relative h-full rounded-2xl card-hairline p-7 transition-colors hover:border-crimson/30">
                    <span className="font-display absolute right-5 top-4 text-5xl text-white/5 transition-colors group-hover:text-crimson/20">
                      {step.n}
                    </span>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-crimson/12 text-crimson">
                      <Icon name={step.icon} size={22} />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-bone">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP TEASER */}
      <section className="section bg-ink noise">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-crimson/30 bg-gradient-to-br from-crimson/15 via-ink-3 to-ink p-8 sm:p-12">
            <div className="absolute inset-0 bg-radial-crimson opacity-60" />
            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <span className="accent-line" />
                  <p className="eyebrow">Keep it clean</p>
                </div>
                <h2 className="font-display mt-4 text-3xl sm:text-4xl text-bone">
                  {membership.name}
                </h2>
                <p className="mt-4 max-w-md text-muted">
                  {membership.tagline} Recurring mobile maintenance that keeps
                  your vehicle looking freshly detailed — with priority
                  scheduling.
                </p>
                <div className="mt-6 flex flex-wrap items-end gap-6">
                  <div>
                    <p className="font-display text-4xl text-crimson-metal">
                      {membership.carPrice}
                      <span className="text-lg text-silver-2">
                        {membership.period}
                      </span>
                    </p>
                    <p className="text-xs uppercase tracking-widest text-steel">
                      Cars
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-4xl text-crimson-metal">
                      {membership.suvPrice}
                      <span className="text-lg text-silver-2">
                        {membership.period}
                      </span>
                    </p>
                    <p className="text-xs uppercase tracking-widest text-steel">
                      SUVs / Trucks
                    </p>
                  </div>
                </div>
                <Link href="/membership" className="btn btn-primary shine mt-8">
                  <Crown size={16} />
                  See membership
                </Link>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {membership.includes.map((m) => (
                  <li
                    key={m}
                    className="flex items-center gap-2.5 rounded-lg bg-white/5 px-3 py-2.5 text-sm text-silver"
                  >
                    <Check size={15} className="shrink-0 text-crimson" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="section bg-ink-2">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Customer perks"
            title="More reasons to keep coming back"
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

      {/* CTA BAND */}
      <section className="relative overflow-hidden bg-ink noise">
        <div className="absolute inset-0 bg-radial-crimson" />
        <div
          className="absolute -bottom-40 left-1/2 h-96 w-[52rem] max-w-[95vw] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ background: "radial-gradient(ellipse, rgba(210,31,53,0.3), transparent 70%)" }}
        />
        <div className="container-x relative py-24 text-center">
          <Reveal>
            <h2 className="font-display mx-auto max-w-3xl text-4xl sm:text-5xl text-bone">
              Ready for the{" "}
              <span className="text-crimson-metal">935 standard?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
              Book online in under a minute. We&apos;ll confirm your slot and
              bring the detail shop to your driveway.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-primary shine">
                Book Your Detail
                <ArrowRight size={17} />
              </Link>
              <Link href="/services" className="btn btn-ghost">
                Compare packages
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
