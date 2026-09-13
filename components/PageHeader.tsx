"use client";

import { motion } from "framer-motion";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  const ease = [0.22, 1, 0.36, 1] as const;
  return (
    <header className="relative overflow-hidden bg-ink noise pt-[calc(var(--nav-h)+3.5rem)] pb-16 sm:pb-20">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-crimson" />
      <div
        className="absolute -top-32 left-1/2 h-80 w-[46rem] max-w-[90vw] -translate-x-1/2 rounded-full blur-[110px]"
        style={{ background: "radial-gradient(ellipse, rgba(210,31,53,0.28), transparent 70%)" }}
      />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3"
        >
          <span className="accent-line" />
          <p className="eyebrow">{eyebrow}</p>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl text-bone"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-muted"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </header>
  );
}
