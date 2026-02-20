"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

function AnimatedStat({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const { ref, visible } = useInView(0.3);
  const value = useCountUp(target, 1800, visible);
  const done = value === target;

  return (
    <div ref={ref} className="text-center">
      <div className={`text-3xl font-bold text-white sm:text-4xl transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${done ? "stat-done" : ""}`}>
        {visible ? (
          <>
            {target >= 1000 ? value.toLocaleString() : value}
            {suffix}
          </>
        ) : (
          <span className="invisible">0</span>
        )}
      </div>
      <div className={`mt-1 text-sm text-gray-500 transition-all duration-500 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}>
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  const { ref: liveRef, visible: liveVisible } = useInView(0.3);

  return (
    <section className="border-y border-white/5 bg-[#111111]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-5">
        <AnimatedStat target={2000} suffix="+" label="TPS" />
        <AnimatedStat target={4} suffix="s" label="Deterministic Finality" />
        <AnimatedStat target={2} suffix="s" label="Block Time" />
        <AnimatedStat target={2105} suffix="+" label="Tests Passing" />

        <div ref={liveRef} className="text-center">
          <a
            href="https://testnet.basalt.foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className={`text-3xl font-bold text-green-400 sm:text-4xl transition-all duration-500 ${liveVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Live
            </div>
            <div className={`mt-1 text-sm text-gray-500 transition-all duration-500 delay-200 group-hover:text-gray-300 ${liveVisible ? "opacity-100" : "opacity-0"}`}>
              Testnet &rarr;
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
