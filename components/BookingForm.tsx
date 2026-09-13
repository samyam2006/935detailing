"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import { services } from "@/lib/site";

type State = "idle" | "loading" | "success" | "error";

const field =
  "w-full rounded-lg border border-white/12 bg-ink-2/80 px-4 py-3 text-sm text-bone placeholder:text-steel outline-none transition-colors focus:border-crimson/70 focus:ring-2 focus:ring-crimson/20";
const label = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-silver-2";

export default function BookingForm() {
  const [state, setState] = useState<State>("idle");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrors({});
    setMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        if (json.errors) setErrors(json.errors);
        setState("error");
        setMsg(json.error || "Please check the highlighted fields.");
        return;
      }

      setState("success");
      setMsg(json.message || "Thanks! We'll be in touch shortly.");
      form.reset();
    } catch {
      setState("error");
      setMsg("Something went wrong. Please try again or call us.");
    }
  }

  return (
    <div className="relative rounded-2xl card-hairline p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-crimson/15 text-crimson">
              <CheckCircle2 size={34} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-bone">Request received</h3>
            <p className="mt-2 max-w-sm text-sm text-muted">{msg}</p>
            <button
              onClick={() => setState("idle")}
              className="btn btn-ghost mt-6"
            >
              Send another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={onSubmit}
            noValidate
          >
            {/* honeypot */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
              aria-hidden="true"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="name">
                  Name *
                </label>
                <input id="name" name="name" className={field} placeholder="Your name" required />
                {errors.name && <FieldError text={errors.name} />}
              </div>
              <div>
                <label className={label} htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={field}
                  placeholder="you@email.com"
                  required
                />
                {errors.email && <FieldError text={errors.email} />}
              </div>
              <div>
                <label className={label} htmlFor="phone">
                  Phone
                </label>
                <input id="phone" name="phone" className={field} placeholder="(555) 000-0000" />
              </div>
              <div>
                <label className={label} htmlFor="vehicle">
                  Vehicle
                </label>
                <input
                  id="vehicle"
                  name="vehicle"
                  className={field}
                  placeholder="Year / Make / Model"
                />
              </div>
              <div>
                <label className={label} htmlFor="service">
                  Service
                </label>
                <select id="service" name="service" className={field} defaultValue="">
                  <option value="" disabled>
                    Choose a package
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title} — {s.price}
                    </option>
                  ))}
                </select>
                {errors.service && <FieldError text={errors.service} />}
              </div>
              <div>
                <label className={label} htmlFor="date">
                  Preferred date
                </label>
                <input id="date" name="date" type="date" className={field} />
              </div>
            </div>

            <div className="mt-5">
              <label className={label} htmlFor="message">
                Anything else?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={field}
                placeholder="Tell us about your car's condition or any specific concerns."
              />
            </div>

            {state === "error" && msg && (
              <div className="mt-4 flex items-center gap-2 rounded-lg border border-crimson/40 bg-crimson/10 px-4 py-3 text-sm text-crimson-bright">
                <AlertCircle size={16} />
                {msg}
              </div>
            )}

            <button
              type="submit"
              disabled={state === "loading"}
              className="btn btn-primary shine mt-6 w-full justify-center disabled:opacity-70"
            >
              {state === "loading" ? (
                <>
                  <Loader2 size={17} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Request my detail
                  <Send size={16} />
                </>
              )}
            </button>
            <p className="mt-3 text-center text-xs text-steel">
              No spam. We only use your info to confirm your booking.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function FieldError({ text }: { text: string }) {
  return <p className="mt-1.5 text-xs text-crimson-bright">{text}</p>;
}
