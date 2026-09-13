"use client";

import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import CarArt from "./CarArt";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const wrap = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = wrap.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, p)));
  }, []);

  return (
    <div
      ref={wrap}
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl border border-white/10 bg-ink-2"
      onMouseMove={(e) => dragging.current && setFromClientX(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => setFromClientX(e.touches[0].clientX)}
    >
      {/* AFTER (glossy) — full */}
      <div className="absolute inset-0 flex items-center justify-center bg-carbon">
        <div className="absolute inset-0 bg-radial-crimson opacity-70" />
        <CarArt
          paint="#0b0b0f"
          paint2="#3a3a44"
          accent="#ff2740"
          glossy
          className="relative w-[86%]"
        />
        <span className="absolute bottom-4 right-4 rounded-full bg-crimson px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          After
        </span>
      </div>

      {/* BEFORE (dull) — clipped */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-ink-3"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(40,40,46,0.6), rgba(10,10,12,0.9))",
          }}
        />
        <CarArt
          paint="#26262b"
          paint2="#3a3a40"
          accent="#5a5a60"
          glossy={false}
          className="relative w-[86%] opacity-90 grayscale"
        />
        <span className="absolute bottom-4 left-4 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-silver">
          Before
        </span>
      </div>

      {/* handle */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white/80"
        style={{ left: `${pos}%` }}
      >
        <button
          aria-label="Drag to compare"
          onMouseDown={() => (dragging.current = true)}
          onTouchStart={() => (dragging.current = true)}
          className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-ink shadow-glow"
        >
          <MoveHorizontal size={20} />
        </button>
      </div>
    </div>
  );
}
