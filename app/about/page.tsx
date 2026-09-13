import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, HeartHandshake, Sparkles, Timer } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CarArt from "@/components/CarArt";
import Socials from "@/components/Socials";
import { stats, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "935 Detailing is a California-based detailing studio obsessed with paint, protection and the finer details. Learn about our craft and values.",
};

const values = [
  {
    icon: Sparkles,
    title: "Show-quality standard",
    text: "We finish every car to the standard we'd want for a concours build — not a car wash checklist.",
  },
  {
    icon: HeartHandshake,
    title: "Treated like our own",
    text: "Your vehicle is handled with the same care we give our personal cars. No shortcuts, ever.",
  },
  {
    icon: Award,
    title: "Certified products",
    text: "We use professional, certified ceramic and PPF systems backed by real warranties.",
  },
  {
    icon: Timer,
    title: "On time, every time",
    text: "Clear communication, honest timelines and a booking process that respects your day.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title={
          <>
            Built on a love of{" "}
            <span className="text-crimson-metal">the details</span>
          </>
        }
        subtitle="935 Detailing started with a garage, a polisher and a refusal to accept 'good enough.' Today we bring that same obsession to drivers across California."
      />

      {/* STORY */}
      <section className="section bg-ink noise">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="A studio, not a car wash"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
              <Reveal>
                <p>
                  We&apos;re a California-based detailing studio specializing in
                  paint correction, ceramic coatings and paint protection film.
                  What sets us apart isn&apos;t just the products we use — it&apos;s
                  the patience and precision we bring to every panel.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Every project starts with a real conversation about your goals,
                  your vehicle and how you use it. From daily drivers to weekend
                  exotics, we tailor the approach so the results last and the
                  finish turns heads.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  Follow the work-in-progress and finished reveals across our
                  channels — we document the process because we&apos;re proud of
                  it.
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
              <div className="animate-float-slow relative">
                <CarArt
                  paint="#7c0f1c"
                  paint2="#d21f35"
                  accent="#ffffff"
                  className="w-full"
                />
              </div>
              <div className="relative mt-4 grid grid-cols-2 gap-4">
                {stats.slice(0, 2).map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-white/10 bg-ink/60 p-4 text-center"
                  >
                    <p className="font-display text-3xl text-crimson-metal">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-silver-2">
                      {s.label}
                    </p>
                  </div>
                ))}
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
              Let&apos;s make your car look its best
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Serving all of {site.location}. Book a detail and see the
              difference obsession makes.
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
