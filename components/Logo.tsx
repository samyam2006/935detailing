import Link from "next/link";

export default function Logo({
  size = "md",
  href = "/",
}: {
  size?: "sm" | "md" | "lg";
  href?: string | null;
}) {
  const scale =
    size === "lg" ? "text-4xl" : size === "sm" ? "text-xl" : "text-2xl";
  const sub =
    size === "lg" ? "text-[0.7rem]" : size === "sm" ? "text-[0.42rem]" : "text-[0.5rem]";

  const inner = (
    <span className="inline-flex flex-col leading-none select-none">
      <span className={`font-display ${scale} tracking-tight`}>
        <span className="text-metal">9</span>
        <span className="text-crimson-metal">35</span>
      </span>
      <span
        className={`${sub} font-bold uppercase tracking-[0.42em] text-silver-2 -mt-0.5 pl-[2px]`}
      >
        Detailing
      </span>
    </span>
  );

  if (href === null) return inner;
  return (
    <Link href={href} aria-label="935 Detailing home" className="group">
      {inner}
    </Link>
  );
}
