import type { Metadata } from "next";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BookingForm from "@/components/BookingForm";
import Reveal from "@/components/Reveal";
import Socials from "@/components/Socials";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book & Contact",
  description:
    "Book a mobile detail with 935 Detailing or get in touch. Serving Lancaster, Palmdale and the Antelope Valley.",
};

const details = [
  {
    icon: MapPin,
    label: "Service area",
    value: `${site.serviceAreas.join(" · ")} — we come to you`,
  },
  { icon: Clock, label: "Hours", value: site.hours },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/[^\d+]/g, "")}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book a detail"
        title={
          <>
            Let&apos;s get your car{" "}
            <span className="text-crimson-metal">gleaming</span>
          </>
        }
        subtitle="Fill out the form and we'll confirm your mobile appointment. Prefer to talk? Call or message us on any channel below."
      />

      <section className="section bg-ink noise">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* info column */}
          <div>
            <Reveal>
              <h2 className="font-display text-2xl text-bone">
                Get in touch
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Questions about a package or want a custom quote? We&apos;re quick
                to respond and always happy to talk cars.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {details.map((d, i) => {
                const Icon = d.icon;
                const inner = (
                  <div className="flex items-center gap-4 rounded-xl card-hairline p-4 transition-colors hover:border-crimson/30">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-crimson/12 text-crimson">
                      <Icon size={20} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-steel">
                        {d.label}
                      </span>
                      <span className="block text-sm font-semibold text-bone">
                        {d.value}
                      </span>
                    </span>
                  </div>
                );
                return (
                  <Reveal key={d.label} delay={i * 0.06}>
                    {d.href ? (
                      <a href={d.href} className="block">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-8">
                <p className="eyebrow mb-4">Follow the work</p>
                <Socials />
              </div>
            </Reveal>
          </div>

          {/* form column */}
          <Reveal delay={0.1}>
            <BookingForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
