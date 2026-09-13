"use client";

import { useId } from "react";

type CarArtProps = {
  paint?: string;
  paint2?: string;
  accent?: string;
  className?: string;
  glossy?: boolean;
};

/**
 * Hand-built side-profile sports-coupe silhouette used across the site
 * in place of stock photography. Colors are fully configurable so the
 * same art doubles as hero centerpiece and gallery showcase.
 */
export default function CarArt({
  paint = "#111116",
  paint2 = "#2b2b33",
  accent = "#d21f35",
  className,
  glossy = true,
}: CarArtProps) {
  const uid = useId().replace(/[:]/g, "");
  const body = `body-${uid}`;
  const glass = `glass-${uid}`;
  const rim = `rim-${uid}`;
  const under = `under-${uid}`;
  const gloss = `gloss-${uid}`;

  return (
    <svg
      viewBox="0 0 820 360"
      className={className}
      role="img"
      aria-label="Detailed sports car"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={body} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={paint2} />
          <stop offset="42%" stopColor={paint} />
          <stop offset="100%" stopColor={paint} stopOpacity="0.82" />
        </linearGradient>
        <linearGradient id={glass} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cfe6ff" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#3a4a63" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#0c1018" />
        </linearGradient>
        <radialGradient id={rim} cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#eef1f4" />
          <stop offset="55%" stopColor="#9aa0a6" />
          <stop offset="100%" stopColor="#3a3d42" />
        </radialGradient>
        <radialGradient id={under} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={gloss} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fff" stopOpacity="0" />
          <stop offset="45%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="55%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ground reflection / shadow */}
      <ellipse cx="410" cy="322" rx="360" ry="30" fill={`url(#${under})`} />

      {/* wheel arch shadows */}
      <circle cx="222" cy="262" r="72" fill="#000" opacity="0.35" />
      <circle cx="612" cy="262" r="72" fill="#000" opacity="0.35" />

      {/* body */}
      <path
        d="M 60 250
           C 52 222 66 202 120 197
           C 178 191 222 189 268 187
           C 305 185 326 156 374 140
           C 434 120 520 119 590 142
           C 640 159 678 184 730 198
           C 758 205 766 224 752 246
           L 742 252
           C 700 244 690 244 682 250
           C 672 258 660 262 612 262
           C 566 262 556 256 548 250
           C 540 244 520 244 300 244
           C 292 250 282 262 222 262
           C 176 262 164 256 156 250
           C 130 240 96 242 72 252
           Z"
        fill={`url(#${body})`}
        stroke="rgba(255,255,255,0.10)"
        strokeWidth="1.5"
      />

      {/* accent lower splitter */}
      <path
        d="M 96 250 C 130 258 160 258 178 254 L 660 254 C 690 258 720 254 742 250"
        fill="none"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* glass house */}
      <path
        d="M 328 178 C 344 156 372 144 402 138 C 470 124 540 126 588 146
           C 566 156 540 164 470 164 C 410 164 372 168 344 180 Z"
        fill={`url(#${glass})`}
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1.5"
      />
      {/* pillar */}
      <path
        d="M 452 132 L 456 164 L 470 164 L 466 130 Z"
        fill={paint}
        opacity="0.85"
      />

      {/* headlight */}
      <path
        d="M 70 214 C 92 210 112 210 128 214 L 126 226 C 108 222 90 222 72 226 Z"
        fill={accent}
        opacity="0.95"
      />
      <path
        d="M 70 214 C 92 210 112 210 128 214 L 126 226 C 108 222 90 222 72 226 Z"
        fill="#fff"
        opacity="0.25"
      />
      {/* taillight */}
      <rect x="742" y="212" width="18" height="10" rx="3" fill={accent} />

      {/* door line + handle */}
      <path
        d="M 300 200 C 360 196 470 196 560 204"
        fill="none"
        stroke="rgba(0,0,0,0.28)"
        strokeWidth="2"
      />
      <rect x="392" y="196" width="34" height="6" rx="3" fill="rgba(255,255,255,0.22)" />

      {/* gloss reflection sweep */}
      {glossy && (
        <path
          d="M 150 205 C 260 190 520 188 700 210 L 700 220 C 520 200 260 202 150 216 Z"
          fill={`url(#${gloss})`}
          opacity="0.7"
        />
      )}

      {/* WHEELS */}
      {[222, 612].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="262" r="58" fill="#0a0a0b" />
          <circle
            cx={cx}
            cy="262"
            r="58"
            fill="none"
            stroke="#1c1c20"
            strokeWidth="6"
          />
          <circle cx={cx} cy="262" r="34" fill={`url(#${rim})`} />
          {/* spokes */}
          {Array.from({ length: 5 }).map((_, i) => {
            const a = (i * 72 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={cx}
                y1={262}
                x2={cx + Math.cos(a) * 32}
                y2={262 + Math.sin(a) * 32}
                stroke="#2b2d30"
                strokeWidth="6"
                strokeLinecap="round"
              />
            );
          })}
          <circle cx={cx} cy="262" r="9" fill="#c9ced3" />
          <circle cx={cx} cy="262" r="9" fill="none" stroke={accent} strokeWidth="2" />
        </g>
      ))}
    </svg>
  );
}
