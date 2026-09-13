import type { IconName } from "@/components/Icon";

export const site = {
  name: "935 Detailing",
  shortName: "935",
  tagline: "Precision Auto Detailing",
  location: "California",
  phone: "(000) 935-0000",
  email: "book@935detailing.com",
  hours: "Mon–Sat · 8am – 6pm",
  socials: {
    instagram:
      "https://www.instagram.com/935detailing?stkn=dDVxZ2NxeGhyZHoz&utm_source=qr",
    x: "https://x.com/935detail?s=11",
    youtube: "https://youtube.com/@935detail?si=gYWJz-7YahUGjHg2",
    tiktok: "https://www.tiktok.com/@935detail?_r=1&_t=ZT-99Z88PlvlPy",
  },
};

export type Service = {
  slug: string;
  title: string;
  icon: IconName;
  blurb: string;
  price: string;
  duration: string;
  features: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "express-shine",
    title: "Express Shine",
    icon: "Wind",
    blurb:
      "A fast, thorough refresh that brings back the gloss between deep details.",
    price: "$89",
    duration: "1–2 hrs",
    features: [
      "Foam bath & hand wash",
      "Wheel & tire cleaning",
      "Streak-free glass",
      "Spray sealant shine",
      "Interior vacuum & wipe-down",
    ],
  },
  {
    slug: "signature-detail",
    title: "Signature Detail",
    icon: "Sparkles",
    blurb:
      "Our most-booked package — a head-to-toe interior and exterior transformation.",
    price: "$249",
    duration: "4–5 hrs",
    featured: true,
    features: [
      "Everything in Express Shine",
      "Clay-bar decontamination",
      "Machine-applied paint sealant",
      "Full interior deep clean & steam",
      "Leather condition & UV protect",
      "Engine bay dressing",
    ],
  },
  {
    slug: "ceramic-coating",
    title: "Ceramic Coating",
    icon: "ShieldCheck",
    blurb:
      "Multi-year nano-ceramic protection with a mirror-deep, hydrophobic finish.",
    price: "from $799",
    duration: "1–2 days",
    features: [
      "Multi-stage paint correction",
      "9H ceramic coating",
      "Hydrophobic self-cleaning layer",
      "Up to 5-year protection",
      "Glass & wheel coating add-ons",
    ],
  },
  {
    slug: "paint-correction",
    title: "Paint Correction",
    icon: "Gem",
    blurb:
      "Swirls, scratches and oxidation cut and polished away to true clarity.",
    price: "from $399",
    duration: "1 day",
    features: [
      "Paint depth reading",
      "Compound & polish stages",
      "Swirl & scratch removal",
      "Gloss & clarity restoration",
      "Finishing protective layer",
    ],
  },
  {
    slug: "interior-restore",
    title: "Interior Restore",
    icon: "Droplets",
    blurb:
      "Deep extraction, steam and conditioning for a factory-fresh cabin.",
    price: "$189",
    duration: "3–4 hrs",
    features: [
      "Shampoo & hot-water extraction",
      "Steam sanitation",
      "Leather & vinyl conditioning",
      "Odor elimination",
      "Trim & vent detailing",
    ],
  },
  {
    slug: "paint-protection-film",
    title: "Paint Protection Film",
    icon: "ShieldCheck",
    blurb:
      "Self-healing PPF armor against rock chips, road rash and daily wear.",
    price: "custom quote",
    duration: "2–3 days",
    features: [
      "Precision computer-cut film",
      "Self-healing top coat",
      "Full-front or full-body",
      "Gloss or matte finish",
      "10-year warranty",
    ],
  },
];

export type Step = {
  n: string;
  title: string;
  text: string;
  icon: IconName;
};

export const process: Step[] = [
  {
    n: "01",
    title: "Book & Consult",
    text: "Tell us your vehicle and goals. We recommend the right package and lock a time that works for you.",
    icon: "Car",
  },
  {
    n: "02",
    title: "Prep & Decontaminate",
    text: "Foam bath, hand wash and clay decontamination strip away everything bonded to the paint.",
    icon: "Droplets",
  },
  {
    n: "03",
    title: "Correct & Protect",
    text: "Machine polishing removes defects, then coatings lock in a deep, protected gloss.",
    icon: "Wrench",
  },
  {
    n: "04",
    title: "Reveal & Protect",
    text: "A final inspection under detail lighting before we hand back a car that looks reborn.",
    icon: "Sun",
  },
];

export const stats = [
  { value: "1,200+", label: "Vehicles Detailed" },
  { value: "5.0", label: "Average Rating" },
  { value: "9H", label: "Ceramic Hardness" },
  { value: "100%", label: "Satisfaction Focus" },
];

export type Testimonial = {
  name: string;
  car: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Marcus T.",
    car: "Porsche 911",
    quote:
      "The ceramic coating is unreal — water sheets right off and the depth of the black paint looks wet. Best detail I've had in California, hands down.",
  },
  {
    name: "Priya S.",
    car: "Tesla Model 3",
    quote:
      "They treated my car like it was a show piece. Interior looks and smells brand new. Booking was easy and they were right on time.",
  },
  {
    name: "Diego R.",
    car: "Chevy Silverado",
    quote:
      "Paint correction took years off my truck. The swirls are completely gone. Genuinely impressed by the attention to detail.",
  },
  {
    name: "Hannah L.",
    car: "BMW M4",
    quote:
      "Professional from the first message to the final reveal. The gloss is next level and the PPF gives me total peace of mind.",
  },
];

export const galleryItems: {
  title: string;
  service: string;
  body: "coupe" | "suv" | "sedan";
  paint: string;
  paint2: string;
  accent: string;
}[] = [
  {
    title: "Midnight Coupe",
    service: "Ceramic Coating",
    body: "coupe",
    paint: "#0a0a0c",
    paint2: "#26262c",
    accent: "#d21f35",
  },
  {
    title: "Crimson GT",
    service: "Paint Correction",
    body: "coupe",
    paint: "#7c0f1c",
    paint2: "#d21f35",
    accent: "#ffffff",
  },
  {
    title: "Silver Executive",
    service: "Signature Detail",
    body: "sedan",
    paint: "#8b9096",
    paint2: "#dfe3e6",
    accent: "#d21f35",
  },
  {
    title: "Graphite SUV",
    service: "PPF + Coating",
    body: "suv",
    paint: "#1a1c22",
    paint2: "#3a3d47",
    accent: "#d21f35",
  },
  {
    title: "Pearl Daily",
    service: "Interior Restore",
    body: "sedan",
    paint: "#e9ebee",
    paint2: "#c3c8cd",
    accent: "#d21f35",
  },
  {
    title: "Blackout Track",
    service: "Full Correction",
    body: "coupe",
    paint: "#0c0c10",
    paint2: "#1c1c22",
    accent: "#ff2740",
  },
];
