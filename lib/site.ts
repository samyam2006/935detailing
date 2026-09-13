import type { IconName } from "@/components/Icon";

export const site = {
  name: "935 Detailing",
  shortName: "935",
  tagline: "Your Car. Our Standard.",
  city: "Lancaster, CA",
  area: "Antelope Valley",
  serviceAreas: ["Lancaster", "Palmdale", "Antelope Valley"],
  positioning: "Professional detailing without the dealership price.",
  phone: "(661) 485-0121",
  email: "935detailing@gmail.com",
  hours: "Mon–Sat · 8am – 6pm",
  socials: {
    instagram:
      "https://www.instagram.com/935detailing?stkn=dDVxZ2NxeGhyZHoz&utm_source=qr",
    x: "https://x.com/935detail?s=11",
    youtube: "https://youtube.com/@935detail?si=gYWJz-7YahUGjHg2",
    tiktok: "https://www.tiktok.com/@935detail?_r=1&_t=ZT-99Z88PlvlPy",
  },
};

/* ---------------- Main detail packages ---------------- */
export type Pkg = {
  slug: string;
  title: string;
  icon: IconName;
  blurb: string;
  from: string;
  carPrice: string;
  suvPrice: string;
  featured?: boolean;
  features: string[];
};

export const packages: Pkg[] = [
  {
    slug: "935-refresh",
    title: "935 Refresh",
    icon: "Wind",
    blurb: "Perfect for keeping your vehicle clean between deep details.",
    from: "$85",
    carPrice: "$85",
    suvPrice: "$105",
    features: [
      "Foam pre-wash & hand wash",
      "Wheels, tires & tire shine",
      "Exterior windows & door jambs",
      "Spray wax protection",
      "Full interior vacuum",
      "Dash, console & door panels wiped",
      "Cupholders & interior windows",
      "Light deodorizer",
    ],
  },
  {
    slug: "935-signature",
    title: "935 Signature",
    icon: "Sparkles",
    blurb: "Our most popular package — a true top-to-bottom detail.",
    from: "$150",
    carPrice: "$150",
    suvPrice: "$175",
    featured: true,
    features: [
      "Everything in 935 Refresh",
      "Deep interior vacuum & blowout",
      "Detailed cracks & crevices",
      "Steam cleaning of high-touch areas",
      "Floor mats deep cleaned",
      "Interior plastics cleaned & protected",
      "Leather / vinyl cleaned & conditioned",
      "Exterior decontamination",
      "Bug & road-film removal",
      "Premium spray sealant",
      "Tire & trim dressing",
    ],
  },
  {
    slug: "935-full-restore",
    title: "935 Full Restore",
    icon: "Crown",
    blurb: "For vehicles that need a serious transformation.",
    from: "$225",
    carPrice: "$225",
    suvPrice: "$275",
    features: [
      "Everything in 935 Signature",
      "Deep carpet cleaning",
      "Seat shampoo & extraction",
      "Heavy interior scrubbing",
      "Pet hair removal",
      "Odor treatment",
      "Iron / fallout decontamination",
      "Clay treatment",
      "Paint sealant",
      "Trim restoration",
      "Detailed door jambs",
      "Trunk / cargo deep clean",
    ],
  },
];

/* ---------------- Premium services ---------------- */
export type Premium = {
  slug: string;
  title: string;
  icon: IconName;
  price: string;
  blurb: string;
  features: string[];
  quoteOnly?: boolean;
};

export const premium: Premium[] = [
  {
    slug: "paint-enhancement",
    title: "Paint Enhancement",
    icon: "Sparkles",
    price: "from $250",
    blurb:
      "A one-step machine polish that removes light defects and restores deep gloss.",
    features: [
      "Paint decontamination",
      "Clay treatment",
      "Single-stage machine polish",
      "Light swirl reduction",
      "Gloss enhancement",
      "Paint sealant",
    ],
  },
  {
    slug: "paint-correction",
    title: "Paint Correction",
    icon: "Gem",
    price: "1-Step $450+ · 2-Step $650+",
    blurb:
      "Dramatically improve faded, swirled or scratched paint with multi-stage correction.",
    features: [
      "Paint depth assessment",
      "Compounding & polishing stages",
      "Swirl & scratch removal",
      "Oxidation & haze correction",
      "True clarity & gloss restoration",
      "Protective finishing layer",
    ],
  },
  {
    slug: "ceramic-coating",
    title: "Ceramic Coating",
    icon: "ShieldCheck",
    price: "from $500 · by quote",
    quoteOnly: true,
    blurb:
      "Long-term, hydrophobic protection with a mirror-deep finish. 1, 3 and 5-year options.",
    features: [
      "Multi-stage paint prep",
      "1, 3 or 5-year protection tiers",
      "Hydrophobic, self-cleaning layer",
      "UV & oxidation resistance",
      "Enhanced depth & gloss",
      "Custom quote & consultation",
    ],
  },
];

/* ---------------- Add-ons ---------------- */
export const addOns: { name: string; price: string }[] = [
  { name: "Carpet Extraction", price: "$40" },
  { name: "Seat Shampoo", price: "$50" },
  { name: "Pet Hair Removal", price: "$35+" },
  { name: "Heavy Pet Hair", price: "$75+" },
  { name: "Odor Treatment", price: "$30" },
  { name: "Headlight Restoration", price: "$75" },
  { name: "Engine Bay Detail", price: "$60" },
  { name: "Clay Bar Treatment", price: "$60" },
  { name: "Spray Wax Upgrade", price: "$25" },
  { name: "Trim Restoration", price: "$40" },
  { name: "Leather Conditioning", price: "$30" },
  { name: "Bug / Tar Removal", price: "$25" },
  { name: "Excessive Dirt Fee", price: "$25+" },
];

/* ---------------- What makes 935 different ---------------- */
export const differentiators: {
  icon: IconName;
  title: string;
  text: string;
}[] = [
  {
    icon: "Truck",
    title: "100% Mobile",
    text: "We bring the detail shop to you — home, work or driveway. No wasting your day sitting at a shop.",
  },
  {
    icon: "BadgeCheck",
    title: "Satisfaction Guarantee",
    text: "Not happy with the finished detail? Let us know within 24 hours and we'll make it right.",
  },
  {
    icon: "Camera",
    title: "Before & After Photos",
    text: "Every vehicle is documented start to finish — your own proof of the transformation.",
  },
  {
    icon: "SprayCan",
    title: "Premium Products Only",
    text: "Professional-grade products, proper techniques, no shortcuts. Ever.",
  },
  {
    icon: "Sun",
    title: "Built for the Desert",
    text: "Dust, heat, road grime, bugs, hard-water spots and UV — our details are made for Antelope Valley conditions.",
  },
];

/* ---------------- Maintenance membership ---------------- */
export const membership = {
  name: "935 Maintenance Club",
  carPrice: "$65",
  suvPrice: "$80",
  period: "/mo",
  tagline: "Get the car clean, then keep it clean.",
  requirement:
    "Requires an initial 935 Signature or Full Restore detail to enroll.",
  includes: [
    "Exterior hand wash",
    "Wheels & tires cleaned",
    "Tire dressing",
    "Interior vacuum",
    "Interior wipe-down",
    "Windows in & out",
    "Dash & console refresh",
    "Quick-protection layer",
    "Priority scheduling",
  ],
};

/* ---------------- Customer perks ---------------- */
export const perks: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "Users",
    title: "Referral Program",
    text: "Refer a friend and get $20 off your next detail — they get $10 off their first.",
  },
  {
    icon: "Cake",
    title: "Birthday Detail",
    text: "Enjoy $15 off any detail during your birthday month.",
  },
  {
    icon: "Repeat",
    title: "Loyalty Rewards",
    text: "Every 5th detail earns you $30 off or a free premium upgrade.",
  },
  {
    icon: "Calendar",
    title: "Priority Booking",
    text: "Maintenance members get first access to weekend and holiday slots.",
  },
];

/* ---------------- Brand-value stats ---------------- */
export const stats = [
  { value: "100%", label: "Mobile Service" },
  { value: "24-Hr", label: "Satisfaction Guarantee" },
  { value: "Before/After", label: "Photos Every Detail" },
  { value: "AV", label: "Antelope Valley Local" },
];

/* ---------------- Process ---------------- */
export type Step = {
  n: string;
  title: string;
  text: string;
  icon: IconName;
};

export const process: Step[] = [
  {
    n: "01",
    title: "Book Online",
    text: "Pick your package and a time. We come to your home, work or driveway anywhere in the Antelope Valley.",
    icon: "Calendar",
  },
  {
    n: "02",
    title: "We Come to You",
    text: "Fully mobile and self-contained. Foam bath, hand wash and decontamination strip away desert grime.",
    icon: "Truck",
  },
  {
    n: "03",
    title: "Detail & Protect",
    text: "Interior deep clean, correction and protection using professional-grade products — no shortcuts.",
    icon: "Wrench",
  },
  {
    n: "04",
    title: "Reveal & Photos",
    text: "A final inspection plus before & after photos handed to you — proof of the 935 standard.",
    icon: "Camera",
  },
];
