import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import CarArt from "@/components/CarArt";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-ink noise pt-[var(--nav-h)]">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-crimson" />
      <div className="container-x relative text-center">
        <p className="font-display text-[7rem] leading-none text-crimson-metal sm:text-[10rem]">
          404
        </p>
        <div className="mx-auto -mt-6 max-w-md">
          <CarArt paint="#0b0b0f" paint2="#33333c" accent="#ff2740" className="w-full opacity-90" />
        </div>
        <h1 className="font-display mt-4 text-2xl text-bone sm:text-3xl">
          This road doesn&apos;t lead anywhere
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted">
          The page you&apos;re after may have moved. Let&apos;s get you back on
          track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-primary shine">
            <Home size={16} />
            Back home
          </Link>
          <Link href="/services" className="btn btn-ghost">
            <ArrowLeft size={16} />
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
