"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Truck, Camera, MapPin } from "lucide-react";

export default function Hero() {
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink noise pt-[var(--nav-h)]">
      {/* backdrop layers */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-crimson" />
      <div
        className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(210,31,53,0.30), transparent 70%)" }}
      />
      {/* faint concentric brand rings, centered behind content */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07]">
        <div className="animate-spin-slow h-[680px] w-[680px] rounded-full border border-crimson/40" />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]">
        <div className="h-[460px] w-[460px] rounded-full border border-white/40" />
      </div>

      <div className="container-x relative z-10 flex flex-col items-center py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-xs font-semibold text-silver"
        >
          <MapPin size={13} className="text-crimson" />
          Lancaster, CA · Antelope Valley · 100% Mobile
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease }}
          className="font-display mt-7 text-5xl sm:text-7xl lg:text-8xl"
        >
          <span className="text-bone">Your car.</span>
          <br />
          <span className="text-metal">Our </span>
          <span className="text-crimson-metal animate-sheen">standard.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
        >
          100% mobile detailing built for the Antelope Valley. From everyday
          maintenance to full restorations, we bring the detail shop right to
          your driveway — professional-grade, convenient, detail-obsessed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/contact" className="btn btn-primary shine">
            Book Your Detail
            <ArrowRight size={17} />
          </Link>
          <Link href="/services" className="btn btn-ghost">
            View Services &amp; Pricing
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-silver-2"
        >
          <span className="inline-flex items-center gap-2">
            <Truck size={17} className="text-crimson" />
            100% Mobile
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck size={17} className="text-crimson" />
            24-Hr Satisfaction Guarantee
          </span>
          <span className="inline-flex items-center gap-2">
            <Camera size={17} className="text-crimson" />
            Before &amp; After Photos
          </span>
        </motion.div>
      </div>

      {/* bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ink" />
    </section>
  );
}
