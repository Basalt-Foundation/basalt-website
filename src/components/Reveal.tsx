"use client";

import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left";
}

export default function Reveal({ children, className = "", direction = "up" }: RevealProps) {
  const { ref, visible } = useInView(0.1);
  const base = direction === "left" ? "reveal-left" : "reveal";

  return (
    <div ref={ref} className={`${base} ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
