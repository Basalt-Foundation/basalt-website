import Reveal from "@/components/Reveal";

const features = [
  {
    title: "Batch Auction",
    description:
      "Orders collected per block and matched at a uniform clearing price. Eliminates MEV and front-running by design — no one gets priority over anyone else.",
    badge: "MEV-Resistant",
  },
  {
    title: "TWAP Oracle",
    description:
      "Time-weighted average price computed over a 7,200-block window (~4 hours). On-chain price feeds for any listed pair, no external oracle dependency.",
    badge: "7,200 Blocks",
  },
  {
    title: "Concentrated Liquidity",
    description:
      "LPs provide liquidity within custom price ranges for higher capital efficiency. Tick-based position management with LP token transfers.",
    badge: "Capital Efficient",
  },
  {
    title: "Encrypted Intents",
    description:
      "Trade intents encrypted with DKG threshold cryptography. Solver network decrypts and matches after the batch window closes. No information leakage before execution.",
    badge: "Threshold Crypto",
  },
  {
    title: "Dynamic Fees",
    description:
      "Fee tiers adjust based on volatility and pool utilization. Solver rewards, governance-overridable parameters, and pool creation rate limits per block.",
    badge: "Adaptive",
  },
  {
    title: "BST-20 Integration",
    description:
      "Native integration with all BST token standards. Policy hooks enforced on every swap. LP positions are transferable BST-20 tokens.",
    badge: "Native Tokens",
  },
];

export default function Dex() {
  return (
    <section id="dex" className="relative overflow-hidden px-6 py-24">
      {/* Caldera warm glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[hsl(33,95%,50%)]/[0.04] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              <span className="bg-gradient-to-r from-[hsl(33,95%,55%)] via-[hsl(20,90%,45%)] to-[hsl(33,95%,50%)] bg-clip-text text-transparent">
                Caldera Fusion
              </span>{" "}
              <span className="text-white">DEX</span>
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-gray-400">
              Protocol-native decentralized exchange. Batch auction matching,
              encrypted intents, and concentrated liquidity — built into the chain,
              not bolted on.
            </p>
            <a
              href="https://caldera.basalt.foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[hsl(33,95%,50%)] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[hsl(28,90%,45%)] hover:shadow-lg hover:shadow-[hsl(33,95%,50%)]/25 hover:-translate-y-0.5"
            >
              Launch Caldera
              <span>&rarr;</span>
            </a>
          </div>
        </Reveal>

        <div className="stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Reveal key={feature.title}>
              <div className="card-glow group h-full rounded-xl border border-white/5 bg-[#111111] p-6 transition-colors hover:border-[hsl(33,95%,50%)]/20">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <span className="rounded-full border border-[hsl(33,95%,50%)]/30 bg-[hsl(33,50%,20%)]/40 px-2.5 py-0.5 text-xs text-[hsl(33,95%,55%)]">
                    {feature.badge}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
