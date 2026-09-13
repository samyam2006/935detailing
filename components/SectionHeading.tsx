import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
            <span className="accent-line" />
            <p className="eyebrow">{eyebrow}</p>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl text-bone">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
