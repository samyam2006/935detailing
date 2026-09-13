"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/membership", label: "Membership" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
      style={{ height: "var(--nav-h)" }}
    >
      <div
        className={`h-full transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-ink/80 border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="container-x h-full flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative px-4 py-2 text-sm font-semibold text-silver transition-colors hover:text-white"
                >
                  <span className={active ? "text-white" : ""}>{l.label}</span>
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-crimson"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn btn-primary shine">
              <Phone size={16} />
              Book Now
            </Link>
          </div>

          <button
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/12 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-3 mt-2 rounded-2xl glass overflow-hidden"
          >
            <div className="flex flex-col p-3">
              {links.map((l) => {
                const active =
                  l.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                      active
                        ? "bg-crimson/15 text-white"
                        : "text-silver hover:bg-white/5"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="btn btn-primary justify-center mt-2"
              >
                <Phone size={16} />
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
