import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://935detailing.com"),
  title: {
    default: "935 Detailing — 100% Mobile Auto Detailing in the Antelope Valley",
    template: "%s · 935 Detailing",
  },
  description:
    "935 Detailing is a 100% mobile detailing company in Lancaster, CA serving the Antelope Valley. Detail packages, paint correction, ceramic coating and a maintenance club — we come to you.",
  keywords: [
    "mobile detailing Lancaster CA",
    "Antelope Valley car detailing",
    "Palmdale mobile detailing",
    "ceramic coating Lancaster",
    "paint correction Antelope Valley",
    "935 detailing",
  ],
  openGraph: {
    title: "935 Detailing — 100% Mobile Auto Detailing",
    description:
      "Mobile detailing built for the Antelope Valley. Your Car. Our Standard.",
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "935 Detailing — 100% Mobile Auto Detailing",
    description:
      "Mobile detailing built for the Antelope Valley. Your Car. Our Standard.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050506",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
