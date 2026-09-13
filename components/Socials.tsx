import { site } from "@/lib/site";

const iconClass = "h-[18px] w-[18px]";

function Instagram() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.4.36 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.4.17-1 .36-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.5 0-4.75.07-.9.04-1.4.2-1.72.32-.43.17-.74.37-1.06.7-.32.31-.52.62-.7 1.05-.12.33-.28.82-.32 1.72C3.98 8.5 4 8.86 4 12s0 3.5.07 4.75c.04.9.2 1.4.32 1.72.17.43.37.74.7 1.06.31.32.62.52 1.05.7.33.12.82.28 1.72.32C8.5 20.02 8.86 20 12 20s3.5 0 4.75-.07c.9-.04 1.4-.2 1.72-.32.43-.17.74-.37 1.06-.7.32-.31.52-.62.7-1.05.12-.33.28-.82.32-1.72.07-1.25.07-1.6.07-4.75s0-3.5-.07-4.75c-.04-.9-.2-1.4-.32-1.72a2.8 2.8 0 0 0-.7-1.06 2.8 2.8 0 0 0-1.06-.7c-.33-.12-.82-.28-1.72-.32C15.5 4 15.14 4 12 4Zm0 3.06A4.94 4.94 0 1 1 12 16.94 4.94 4.94 0 0 1 12 7.06Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.14-.9a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
    </svg>
  );
}

function XMark() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
      <path d="M18.24 2.25h3.3l-7.2 8.23 8.48 11.27h-6.64l-5.2-6.8-5.95 6.8H1.72l7.7-8.8L1.26 2.25h6.8l4.7 6.22 5.48-6.22Zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64Z" />
    </svg>
  );
}

function YouTube() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
      <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 3.9 12 3.9 12 3.9s-7.5 0-9.4.5A3 3 0 0 0 .5 6.5C0 8.4 0 12 0 12s0 3.6.5 5.5a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.5.5-5.5s0-3.6-.5-5.5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  );
}

function TikTok() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.2v12.9a2.6 2.6 0 0 1-2.6 2.5 2.6 2.6 0 0 1 0-5.2c.27 0 .53.04.78.12v-3.3a5.86 5.86 0 0 0-.78-.05A5.9 5.9 0 1 0 15.63 16V9.5a7.5 7.5 0 0 0 4.37 1.4V7.7a4.28 4.28 0 0 1-3.4-1.88Z" />
    </svg>
  );
}

const items = [
  { href: site.socials.instagram, label: "Instagram", Icon: Instagram },
  { href: site.socials.x, label: "X", Icon: XMark },
  { href: site.socials.youtube, label: "YouTube", Icon: YouTube },
  { href: site.socials.tiktok, label: "TikTok", Icon: TikTok },
];

export default function Socials({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-silver-2 transition-all duration-300 hover:text-white hover:border-crimson/70 hover:bg-crimson/10 hover:-translate-y-1"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
