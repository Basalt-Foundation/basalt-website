import Link from "next/link";
import Reveal from "@/components/Reveal";

const papers = [
  {
    slug: "basalt",
    title: "Basalt",
    subtitle: "A Compliance-Native Layer 1 Blockchain on .NET 9 Native AOT",
    date: "December 2025",
    tags: ["Core", "Consensus", "ZK Compliance", "Smart Contracts"],
    caldera: false,
    description:
      "The flagship technical whitepaper covering the full architecture: pipelined BFT consensus, C# smart contracts with AOT-safe dispatch, six-layer zero-knowledge compliance, EIP-1559 fee market, and protocol-native DEX.",
  },
  {
    slug: "caldera-fusion",
    title: "Caldera Fusion",
    subtitle: "A Protocol-Native DEX with Batch Auctions and Encrypted Intents",
    date: "January 2026",
    tags: ["DEX", "MEV Protection", "Batch Auctions", "Cryptography"],
    caldera: true,
    description:
      "Protocol-native decentralized exchange with batch auctions, EC-ElGamal encrypted intents, concentrated liquidity, and a competitive solver network for structural MEV elimination.",
  },
  {
    slug: "sovereign-trust-chain",
    title: "Sovereign Trust Chain",
    subtitle: "Decentralized Regulatory Accreditation for Identity Services",
    date: "March 2026",
    tags: ["Compliance", "Identity", "Governance"],
    caldera: false,
    description:
      "A hierarchical trust model mapping real-world regulators (AMF, BaFin, FCA) onto on-chain trust tiers. Sovereign authorities vouch for accredited KYC providers via BST-VC verifiable credentials.",
  },
];

export default function Research() {
  return (
    <section id="research" className="bg-[#111111] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Research
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Technical whitepapers detailing the architecture, compliance
              infrastructure, and design rationale behind Basalt.
            </p>
          </div>
        </Reveal>

        <div className="stagger grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {papers.map((paper) => (
            <Reveal key={paper.slug}>
              <Link
                href={`/whitepapers/${paper.slug}`}
                className={`card-glow group flex h-full flex-col rounded-2xl border border-white/5 bg-[#0a0a0a] p-8 transition-all ${
                  paper.caldera
                    ? "caldera-hover"
                    : "hover:border-[#4a6fa5]/30"
                }`}
              >
                <div className="mb-4 flex min-h-12 flex-wrap content-start items-start gap-2">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-1 text-xl font-bold text-white transition-colors">
                  <span
                    className={
                      paper.caldera
                        ? "caldera-title"
                        : "group-hover:text-[#6b9fd4]"
                    }
                  >
                    {paper.title}
                  </span>
                  <span className="ml-2 inline-block text-gray-500 transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </h3>
                <p
                  className="mb-4 text-sm"
                  style={{
                    color: paper.caldera
                      ? "hsl(33,95%,55%)"
                      : "#6b9fd4",
                  }}
                >
                  {paper.subtitle}
                </p>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400">
                  {paper.description}
                </p>

                <p className="text-xs text-gray-500">
                  Basalt Foundation &middot; {paper.date}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 text-center">
            <Link
              href="/whitepapers"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              View all whitepapers
              <span>&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
