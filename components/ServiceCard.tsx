"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import type { Pkg } from "@/lib/site";
import Icon from "./Icon";

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: Pkg;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className={`group relative flex h-full flex-col rounded-2xl p-7 transition-colors duration-300 ${
        service.featured
          ? "bg-gradient-to-b from-crimson/15 to-ink-3 border border-crimson/40"
          : "card-hairline hover:border-crimson/30"
      }`}
    >
      {service.featured && (
        <span className="absolute -top-3 right-6 rounded-full bg-crimson px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white shadow-glow">
          Most Popular
        </span>
      )}

      <div className="flex items-start justify-between gap-4">
        <div
          className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
            service.featured ? "bg-crimson text-white" : "bg-white/6 text-crimson"
          }`}
        >
          <Icon name={service.icon} size={22} />
        </div>
        <div className="text-right">
          <p className="text-[0.65rem] uppercase tracking-widest text-steel">
            Starting at
          </p>
          <p className="font-display text-3xl text-crimson-metal leading-none">
            {service.from}
          </p>
        </div>
      </div>

      <h3 className="mt-6 text-xl font-bold text-bone">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{service.blurb}</p>

      <div className="mt-4 flex gap-2 text-xs">
        <span className="rounded-md bg-white/5 px-2.5 py-1 font-semibold text-silver">
          Cars {service.carPrice}
        </span>
        <span className="rounded-md bg-white/5 px-2.5 py-1 font-semibold text-silver">
          SUV / Truck {service.suvPrice}
        </span>
      </div>

      <ul className="mt-6 space-y-2.5">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-silver-2">
            <Check size={16} className="mt-0.5 shrink-0 text-crimson" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <Link
          href="/contact"
          className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
            service.featured ? "text-white" : "text-crimson hover:text-crimson-bright"
          }`}
        >
          Book this package
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </motion.article>
  );
}
