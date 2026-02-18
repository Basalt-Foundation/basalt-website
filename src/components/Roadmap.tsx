const phases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "complete" as const,
    items: [
      "Core node implementation (P2P, BasaltBFT, storage)",
      "BasaltVM with C# AOT and sandboxed execution",
      "Smart Contract SDK with Roslyn analyzers",
      "ZK compliance engine (SchemaRegistry, IssuerRegistry)",
      "Confidential transactions (Pedersen, Groth16, private channels)",
      "4-validator devnet in Docker, 1,737+ tests passing",
    ],
  },
  {
    phase: "Phase 2",
    title: "Testnet",
    status: "current" as const,
    items: [
      "Public testnet with 50+ community validators",
      "Contract SDK v1.0 (all BST-* standards)",
      "EVM bridge testnet (Ethereum Sepolia)",
      "Developer grants program",
      "First external security audit",
    ],
  },
  {
    phase: "Phase 3",
    title: "Mainnet Genesis",
    status: "upcoming" as const,
    items: [
      "Mainnet launch with 100 genesis validators",
      "BST Token Generation Event",
      "Full MiCA / GDPR / Travel Rule compliance",
      "EVM bridge mainnet (Ethereum, Polygon)",
      "Second security audit + bug bounty program",
    ],
  },
  {
    phase: "Phase 4",
    title: "Ecosystem",
    status: "upcoming" as const,
    items: [
      "Enterprise subnets (permissioned validator sets)",
      "ZK confidential transactions in production",
      "IBC protocol for Cosmos interoperability",
      "Enterprise ERP connectors (SAP, Salesforce)",
      "Full DAO governance transition",
    ],
  },
];

function StatusDot({ status }: { status: "complete" | "current" | "upcoming" }) {
  if (status === "complete") {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-400">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
    );
  }
  if (status === "current") {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4a6fa5]/20">
        <div className="h-3 w-3 animate-pulse rounded-full bg-[#6b9fd4]" />
      </div>
    );
  }
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
      <div className="h-2 w-2 rounded-full bg-gray-600" />
    </div>
  );
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Roadmap
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            From devnet to global infrastructure.
          </p>
        </div>

        <div className="space-y-0">
          {phases.map((phase, i) => (
            <div key={phase.phase} className="relative flex gap-6">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <StatusDot status={phase.status} />
                {i < phases.length - 1 && (
                  <div className="w-px flex-1 bg-white/5" />
                )}
              </div>

              {/* Content */}
              <div className="pb-12">
                <div className="mb-1 flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {phase.phase}
                  </span>
                  {phase.status === "complete" && (
                    <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-400">
                      Complete
                    </span>
                  )}
                  {phase.status === "current" && (
                    <span className="rounded-full bg-[#4a6fa5]/10 px-2 py-0.5 text-xs font-medium text-[#6b9fd4]">
                      In Progress
                    </span>
                  )}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {phase.title}
                </h3>
                <ul className="space-y-1.5">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
