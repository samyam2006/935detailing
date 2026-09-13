"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";
import CarArt from "./CarArt";

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setTilt({ x: (e.clientX / w - 0.5) * 2, y: (e.clientY / h - 0.5) * 2 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink noise pt-[var(--nav-h)]"
    >
      {/* backdrop layers */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-crimson" />
      <div
        className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(210,31,53,0.35), transparent 70%)" }}
      />
      {/* rotating badge ring accent */}
      <div className="pointer-events-none absolute right-[-160px] top-1/2 hidden -translate-y-1/2 opacity-[0.12] lg:block">
        <div className="animate-spin-slow h-[620px] w-[620px] rounded-full border border-crimson/40" />
      </div>

      <div className="container-x relative z-10 grid items-center gap-10 py-16 lg:grid-cols-12">
        {/* text column */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-xs font-semibold text-silver"
          >
            <span className="flex items-center gap-1 text-crimson">
              <Star size={13} className="fill-crimson" />
              <Star size={13} className="fill-crimson" />
              <Star size={13} className="fill-crimson" />
              <Star size={13} className="fill-crimson" />
              <Star size={13} className="fill-crimson" />
            </span>
            Rated 5.0 by California drivers
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className="font-display mt-6 text-5xl sm:text-6xl lg:text-7xl"
          >
            <span className="text-bone">Your car,</span>
            <br />
            <span className="text-crimson-metal animate-sheen">
              flawlessly
            </span>{" "}
            <span className="text-metal">detailed.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
          >
            935 Detailing brings show-floor gloss, multi-year ceramic protection
            and obsessive attention to every panel — right to you across
            California.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link href="/contact" className="btn btn-primary shine">
              Book Your Detail
              <ArrowRight size={17} />
            </Link>
            <Link href="/services" className="btn btn-ghost">
              View Services & Pricing
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-silver-2"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={17} className="text-crimson" />
              Ceramic-certified
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={17} className="text-crimson" />
              Mobile & in-studio
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={17} className="text-crimson" />
              Satisfaction focused
            </span>
          </motion.div>
        </div>

        {/* car column */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            style={{
              transform: reduce
                ? undefined
                : `translate3d(${tilt.x * -14}px, ${tilt.y * -10}px, 0)`,
            }}
            className="relative"
          >
            <div
              className="absolute inset-x-6 bottom-2 h-24 rounded-[50%] blur-2xl"
              style={{ background: "radial-gradient(ellipse, rgba(210,31,53,0.4), transparent 70%)" }}
            />
            <div className="animate-float-slow">
              <CarArt
                paint="#0b0b0f"
                paint2="#33333c"
                accent="#ff2740"
                className="w-full drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ink" />
    </section>
  );
}
