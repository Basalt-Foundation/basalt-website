import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Whitepapers — Basalt",
  description:
    "Technical whitepapers from the Basalt Foundation covering compliance, identity, gaming, and blockchain infrastructure.",
};

const calderaAccent = { hover: "hsl(33,95%,50%)", text: "hsl(33,95%,55%)" };
const basaltAccent = { hover: "#4a6fa5", text: "#6b9fd4" };

const papers = [
  {
    slug: "basalt",
    title: "Basalt",
    subtitle:
      "A Compliance-Native Layer 1 Blockchain on .NET 9 Native AOT",
    date: "December 2025",
    status: "published" as const,
    tags: ["Core", "Consensus", "ZK Compliance", "Smart Contracts"],
    accent: basaltAccent,
    abstract:
      "The flagship technical whitepaper covering Basalt's full architecture: pipelined BFT consensus with 4-second finality, C# smart contracts with AOT-safe source-generated dispatch, six-layer zero-knowledge compliance, EIP-1559 fee market, protocol-native DEX with batch auctions and encrypted intents, and 7 token standards across 8 genesis system contracts.",
  },
  {
    slug: "caldera-fusion",
    title: "Caldera Fusion",
    subtitle:
      "A Protocol-Native DEX with Batch Auctions and Encrypted Intents",
    date: "January 2026",
    status: "published" as const,
    tags: ["DEX", "MEV Protection", "Batch Auctions", "Cryptography"],
    accent: calderaAccent,
    abstract:
      "A protocol-native decentralized exchange embedded in Basalt's execution layer. Combines constant-product AMM, limit order book, concentrated liquidity, and EC-ElGamal encrypted intents with consensus-level batch auctions for structural MEV elimination. Competitive solver network optimizes settlements for maximum user surplus.",
  },
  {
    slug: "sovereign-trust-chain",
    title: "Sovereign Trust Chain",
    subtitle:
      "Decentralized Regulatory Accreditation for Blockchain Identity Services",
    date: "March 2026",
    status: "published" as const,
    tags: ["Compliance", "Identity", "Governance"],
    accent: basaltAccent,
    abstract:
      "A hierarchical trust model that replaces centralized administrator-gated identity provider registration with a decentralized accreditation mechanism rooted in real-world regulatory authorities (AMF, BaFin, FCA, FINMA, MAS). Sovereign authorities are onboarded through on-chain governance votes and vouch for accredited providers via BST-VC verifiable credentials.",
  },
  {
    slug: "enterprise-rwa",
    title: "Basalt for Enterprise",
    subtitle:
      "MiCA-Compliant Real-World Asset Tokenization",
    date: "March 2026",
    status: "published" as const,
    tags: ["MiCA", "RWA", "Compliance", "BST-3525"],
    accent: basaltAccent,
    abstract:
      "MiCA compliance embedded at the protocol level: validator-enforced transfer policies, zero-knowledge identity verification via Groth16 proofs, a Sovereign Trust Chain mapping EU competent authorities onto on-chain trust hierarchies, and structured token standards (BST-3525, BST-4626) for bonds, real estate, carbon credits, and stablecoins.",
  },
  {
    slug: "gaming",
    title: "Basalt for Gaming",
    subtitle:
      "A Native Infrastructure for Regulated, Fair, and Verifiable Game Economies",
    date: "March 2026",
    status: "coming-soon" as const,
    tags: ["Gaming", "BST-3525", "MEV Protection"],
    accent: basaltAccent,
    abstract:
      "Protocol-level primitives for game economies: validator-enforced compliance with gambling and age-gating regulations, MEV-resistant trading through batch auctions, zero-knowledge proofs for hidden-information game mechanics, and structured semi-fungible tokens that model game items naturally.",
  },
];

export default function Whitepapers() {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white"
          >
            Basalt
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            &larr; Back to Home
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header className="border-b border-white/5 px-6 pt-28 pb-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#4a6fa5]">
            Basalt Foundation
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Whitepapers
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
            Technical research on compliance infrastructure, decentralized
            identity, game economies, and blockchain architecture.
          </p>
        </div>
      </header>

      {/* ── Papers ── */}
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-8">
          {papers.map((paper) => {
            const isPublished = paper.status === "published";

            const isCaldera = paper.slug === "caldera-fusion";

            const card = (
              <div
                className={`group rounded-2xl border bg-[#111111] p-8 transition-all ${
                  isPublished
                    ? `border-white/5 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer ${
                        isCaldera
                          ? "caldera-hover"
                          : "hover:border-[#4a6fa5]/30 hover:shadow-[#4a6fa5]/5"
                      }`
                    : "border-white/5 opacity-60"
                }`}
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-0.5 text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="ml-auto flex items-center gap-1.5 text-xs">
                    {isPublished ? (
                      <>
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
                        <span className="text-green-400">Published</span>
                      </>
                    ) : (
                      <>
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
                        <span className="text-amber-400">Coming Soon</span>
                      </>
                    )}
                  </span>
                </div>

                <h2 className="mb-2 text-2xl font-bold text-white transition-colors">
                  <span className={isCaldera ? "caldera-title" : "group-hover:text-[#6b9fd4]"}>
                    {paper.title}
                  </span>
                  {isPublished && (
                    <span className="ml-2 inline-block text-gray-500 transition-transform group-hover:translate-x-1">
                      &rarr;
                    </span>
                  )}
                </h2>
                <p
                  className="mb-4 text-sm"
                  style={{ color: paper.accent.text }}
                >
                  {paper.subtitle}
                </p>

                <p className="mb-6 leading-relaxed text-gray-400">
                  {paper.abstract}
                </p>

                <p className="text-sm text-gray-500">
                  Basalt Foundation &middot; {paper.date}
                </p>
              </div>
            );

            return isPublished ? (
              <Link
                key={paper.slug}
                href={`/whitepapers/${paper.slug}`}
                className="block"
              >
                {card}
              </Link>
            ) : (
              <div key={paper.slug}>{card}</div>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}
