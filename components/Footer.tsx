import Link from "next/link";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
import Logo from "./Logo";
import Socials from "./Socials";
import { site, packages } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-2 noise overflow-hidden">
      <div className="absolute inset-0 bg-radial-crimson opacity-60" />
      <div className="container-x relative py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo size="lg" href={null} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              100% mobile auto detailing based in {site.city}. Professional-grade
              results brought right to your driveway.
            </p>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.28em] text-crimson">
              Mobile · Premium · 935
            </p>
            <Socials className="mt-6" />
          </div>

          <div>
            <h4 className="eyebrow mb-5">Packages</h4>
            <ul className="space-y-3 text-sm">
              {packages.map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/services"
                    className="text-silver-2 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/membership"
                  className="text-silver-2 transition-colors hover:text-white"
                >
                  Maintenance Club
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/membership", label: "Maintenance Club" },
                { href: "/gallery", label: "Gallery" },
                { href: "/services", label: "Pricing" },
                { href: "/contact", label: "Book a Detail" },
              ].map((l, i) => (
                <li key={i}>
                  <Link
                    href={l.href}
                    className="text-silver-2 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Get in touch</h4>
            <ul className="space-y-4 text-sm text-silver-2">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-crimson" />
                <span>{site.serviceAreas.join(" · ")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-crimson" />
                <span>{site.hours}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-crimson" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-crimson" />
                <a
                  href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                  className="hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-steel">
            Built for Lancaster. Made for the desert.
          </p>
        </div>
      </div>
    </footer>
  );
}
