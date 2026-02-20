"use client";

import { useInView } from "@/hooks/useInView";

export default function Hero() {
  const { ref, visible } = useInView(0.1);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-breathe absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#4a6fa5]/15 blur-[120px]" />
        <div className="bg-breathe-alt absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-[#6b9fd4]/10 blur-[100px]" />
      </div>

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <div
          className={`mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-400 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          .NET 9 Native AOT &middot; ZK Compliance &middot;{" "}
          <span className="text-green-400">Testnet Live</span>
        </div>

        <h1
          className={`mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Compliance Without{" "}
          <span className="gradient-animate bg-gradient-to-r from-[#4a6fa5] via-[#8fbde6] to-[#4a6fa5] bg-clip-text text-transparent">
            Surveillance
          </span>
        </h1>

        <p
          className={`mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          A Layer 1 blockchain with native zero-knowledge compliance, confidential
          transactions, and C# smart contracts. Deterministic finality in 4 seconds.
          Built on .NET 9 with Native AOT.
        </p>

        <div
          className={`flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="https://basalt-foundation.github.io/basalt-docs/"
            className="rounded-lg bg-[#4a6fa5] px-8 py-3 text-base font-medium text-white transition-all hover:bg-[#5a82be] hover:shadow-lg hover:shadow-[#4a6fa5]/25 hover:-translate-y-0.5"
          >
            Get Started
          </a>
          <a
            href="https://testnet.basalt.foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-green-500/30 bg-green-500/10 px-8 py-3 text-base font-medium text-green-400 transition-all hover:bg-green-500/20 hover:-translate-y-0.5"
          >
            Explore Testnet
          </a>
          <a
            href="https://github.com/basalt-foundation/basalt"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 bg-white/5 px-8 py-3 text-base font-medium text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
