import Reveal from "@/components/Reveal";

const standards = [
  {
    name: "BST-20",
    label: "Fungible Token",
    equiv: "ERC-20",
    description:
      "Full allowance mechanics, Mint/Burn, UInt256 amounts. Pluggable policy hooks enforce holding limits, lockups, jurisdiction, and sanctions at the transfer level.",
    color: "#3fb950",
  },
  {
    name: "BST-721",
    label: "Non-Fungible Token",
    equiv: "ERC-721",
    description:
      "Auto-incrementing token IDs, per-token approval, metadata URI storage. NFT-aware policy hooks for transfer restrictions.",
    color: "#6b9fd4",
  },
  {
    name: "BST-1155",
    label: "Multi-Token",
    equiv: "ERC-1155",
    description:
      "Both fungible and non-fungible tokens in a single contract. Batch transfers, operator approvals, policy enforcement on every item.",
    color: "#d29922",
  },
  {
    name: "BST-3525",
    label: "Semi-Fungible Token",
    equiv: "ERC-3525",
    description:
      "Slot-based semi-fungible tokens for financial instruments. Value transfers between token IDs, slot-level policy hooks, and metadata per slot.",
    color: "#58a6ff",
  },
  {
    name: "BST-4626",
    label: "Tokenized Vault",
    equiv: "ERC-4626",
    description:
      "Yield-bearing vault standard. Deposit/withdraw/redeem with share accounting. Inherits BST-20 policy hooks on share transfers.",
    color: "#3fb950",
  },
  {
    name: "BST-VC",
    label: "Verifiable Credentials",
    equiv: "W3C VC + eIDAS 2.0",
    description:
      "On-chain W3C Verifiable Credentials with eIDAS 2.0 compliance. Issue, verify, suspend, and revoke credentials. DID-anchored subjects.",
    color: "#a371f7",
  },
  {
    name: "BST-DID",
    label: "Decentralized Identity",
    equiv: "W3C DID",
    description:
      "On-chain DID registry with did:basalt: format. Verifiable credential attestations, controller transfer, deactivation.",
    color: "#a371f7",
  },
  {
    name: "SchemaRegistry",
    label: "ZK Credential Schemas",
    equiv: "Novel",
    description:
      "Permissionless credential schema registration. On-chain Groth16 verification keys. SchemaId derived from BLAKE3(name).",
    color: "#f85149",
  },
  {
    name: "IssuerRegistry",
    label: "Credential Issuers",
    equiv: "Novel",
    description:
      "4 trust tiers with collateral staking. Slashing for fraud. Sparse Merkle Tree revocation roots published on-chain.",
    color: "#f85149",
  },
];

export default function TokenStandards() {
  return (
    <section id="standards" className="border-t border-white/5 bg-[#111111] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Token Standards
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Shipped with reference implementations and pluggable policy hooks.
              Enforce holding limits, lockups, jurisdiction, and sanctions at the
              protocol level.
            </p>
          </div>
        </Reveal>

        <div className="stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((std) => (
            <Reveal key={std.name}>
            <div
              className="card-glow group h-full rounded-xl border border-white/5 bg-[#0a0a0a] p-5 transition-colors hover:border-[#4a6fa5]/20"
            >
              <div className="mb-3 flex items-center justify-between">
                <span
                  className="text-lg font-bold"
                  style={{ color: std.color }}
                >
                  {std.name}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    std.equiv === "Novel"
                      ? "border border-[#f85149]/30 bg-[#f85149]/10 text-[#f85149]"
                      : "border border-white/10 bg-white/5 text-gray-400"
                  }`}
                >
                  {std.equiv}
                </span>
              </div>
              <div className="mb-2 text-sm font-medium text-gray-300">
                {std.label}
              </div>
              <p className="text-sm leading-relaxed text-gray-500">
                {std.description}
              </p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
