"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CarArt from "./CarArt";
import { galleryItems } from "@/lib/site";

const filters = ["All", "Ceramic Coating", "Paint Correction", "Signature Detail", "Interior Restore"];

function matches(filter: string, service: string) {
  if (filter === "All") return true;
  return service.toLowerCase().includes(filter.toLowerCase().split(" ")[0]);
}

export default function GalleryGrid() {
  const [active, setActive] = useState("All");

  const items = useMemo(
    () => galleryItems.filter((g) => matches(active, g.service)),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
              active === f
                ? "border-crimson bg-crimson/15 text-white"
                : "border-white/12 text-silver-2 hover:border-white/30 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((g) => (
            <motion.figure
              layout
              key={g.title}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-carbon"
            >
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 opacity-70"
                  style={{
                    background: `radial-gradient(60% 80% at 50% 20%, ${g.accent}22, transparent 70%)`,
                  }}
                />
                <CarArt
                  paint={g.paint}
                  paint2={g.paint2}
                  accent={g.accent}
                  className="relative z-10 w-[88%] transition-transform duration-500 group-hover:scale-105"
                />
                {/* shine sweep */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </div>
              <figcaption className="flex items-center justify-between border-t border-white/8 px-5 py-4">
                <span className="text-sm font-bold text-bone">{g.title}</span>
                <span className="rounded-full bg-white/6 px-3 py-1 text-xs font-semibold text-crimson">
                  {g.service}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
