import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://935detailing.com"),
  title: {
    default: "935 Detailing — Precision Auto Detailing in California",
    template: "%s · 935 Detailing",
  },
  description:
    "935 Detailing delivers show-quality car detailing, ceramic coatings, paint correction and paint protection film across California. Book a detail today.",
  keywords: [
    "car detailing California",
    "ceramic coating",
    "paint correction",
    "paint protection film",
    "auto detailing",
    "935 detailing",
  ],
  openGraph: {
    title: "935 Detailing — Precision Auto Detailing",
    description:
      "Show-quality detailing, ceramic coatings and paint protection across California.",
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "935 Detailing — Precision Auto Detailing",
    description:
      "Show-quality detailing, ceramic coatings and paint protection across California.",
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
