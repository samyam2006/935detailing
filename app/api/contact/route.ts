import { NextResponse } from "next/server";
import { packages, premium } from "@/lib/site";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  vehicle?: string;
  service?: string;
  date?: string;
  message?: string;
  company?: string; // honeypot
};

const validSlugs = new Set([
  ...packages.map((s) => s.slug),
  ...premium.map((s) => s.slug),
  "maintenance-club",
  "not-sure",
]);

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

// Simple in-memory rate limiter (per warm instance).
const hits = new Map<string, { count: number; ts: number }>();
const WINDOW = 60_000;
const LIMIT = 5;

function limited(ip: string) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.ts > WINDOW) {
    hits.set(ip, { count: 1, ts: now });
    return false;
  }
  rec.count += 1;
  return rec.count > LIMIT;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (limited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  // Honeypot: bots fill hidden field.
  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ ok: true, id: "ignored" });
  }

  const errors: Record<string, string> = {};
  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const service = (body.service || "").trim();
  const message = (body.message || "").trim();

  if (name.length < 2) errors.name = "Please enter your name.";
  if (!isEmail(email)) errors.email = "Please enter a valid email.";
  if (service && !validSlugs.has(service))
    errors.service = "Please choose a valid service.";
  if (message.length > 2000) errors.message = "Message is too long.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const booking = {
    id: `bk_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`,
    receivedAt: new Date().toISOString(),
    name,
    email,
    phone: (body.phone || "").trim(),
    vehicle: (body.vehicle || "").trim(),
    service: service || "unspecified",
    date: (body.date || "").trim(),
    message,
    ip,
  };

  // In production, wire this to email/CRM/DB. For now we log the lead so it's
  // captured in server output and return a confirmation id.
  console.log("[935-detailing] New booking request:", booking);

  return NextResponse.json({
    ok: true,
    id: booking.id,
    message:
      "Thanks! Your request is in — we'll confirm your detail shortly.",
  });
}
