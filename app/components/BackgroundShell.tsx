"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

type BackgroundShellProps = {
  children: React.ReactNode;
};

export default function BackgroundShell({ children }: BackgroundShellProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frame: number | null = null;

    const handleMove = (event: PointerEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = ((event.clientX / innerWidth) - 0.5) * 16;
      const y = ((event.clientY / innerHeight) - 0.5) * 12;

      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setTilt({ x, y }));
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div
      className="bg-shell"
      style={{
        "--tiltX": `${tilt.x}px`,
        "--tiltY": `${tilt.y}px`,
      } as CSSProperties}
    >
      <div className="bg-layer bg-base-layer" />
      <div className="bg-layer bg-nataraj-layer" />
      <div className="bg-layer bg-water-layer" />
      <div className="bg-layer bg-glow-layer" />
      <div className="bg-layer bg-vignette" />
      <div className="bg-layer bg-noise" />
      <div className="page-shell">
        {children}
      </div>
    </div>
  );
}
