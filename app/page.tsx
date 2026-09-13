import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import BeforeAfter from "@/components/BeforeAfter";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { services, process, stats, testimonials } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* STATS STRIP */}
      <section className="relative border-y border-white/10 bg-ink-2">
        <div className="container-x grid grid-cols-2 gap-y-8 py-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-4xl sm:text-5xl text-crimson-metal">
                {s.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-silver-2">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section bg-ink noise">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  Detailing built around <span className="text-crimson-metal">obsession</span>
                </>
              }
              subtitle="From a quick refresh to multi-year ceramic armor, every package is designed to protect your investment and turn heads."
            />
            <Reveal delay={0.2}>
              <Link href="/services" className="btn btn-ghost whitespace-nowrap">
                All services
                <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER SHOWCASE */}
      <section className="section bg-ink-2">
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
              subtitle="Swirls, oxidation and haze cut away to a deep, mirror-clear finish. This is what real paint correction looks like — no filler, no shortcuts."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Multi-stage machine polishing",
                "Measured paint depth for safe correction",
                "Finished with lasting ceramic protection",
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
      <section className="section bg-ink noise">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Our process"
            title="Four steps to a flawless finish"
            subtitle="A repeatable, meticulous system that delivers the same show-quality result every single time."
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

      {/* TESTIMONIALS */}
      <section className="section bg-ink-2">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Reviews"
            title="Loved by drivers across California"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 2) * 0.1}>
                <figure className="h-full rounded-2xl card-hairline p-7">
                  <Quote size={28} className="text-crimson/60" />
                  <blockquote className="mt-4 text-base leading-relaxed text-silver">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-crimson to-crimson-deep text-sm font-bold text-white">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-bone">
                        {t.name}
                      </span>
                      <span className="block text-xs text-steel">{t.car}</span>
                    </span>
                  </figcaption>
                </figure>
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
              Ready to give your car the{" "}
              <span className="text-crimson-metal">935 treatment?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
              Book online in under a minute. We&apos;ll confirm your slot and
              bring the shine to you.
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
