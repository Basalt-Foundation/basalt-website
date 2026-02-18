const pillars = [
  {
    title: "SchemaRegistry",
    description:
      "Permissionless on-chain registry of credential schemas. Anyone can define what can be proved. Each schema stores its Groth16 verification key on-chain. SchemaId = BLAKE3(name).",
    badge: "System Contract",
  },
  {
    title: "IssuerRegistry",
    description:
      "Four trust tiers: self-attestation, regulated entity, accredited provider (with BST collateral), and sovereign/eIDAS. Fraudulent issuance triggers automatic slashing.",
    badge: "Collateral Staking",
  },
  {
    title: "Audit Trail",
    description:
      "Every compliance operation generates an immutable event: attestation issuance, revocation, transfer blocks with reason codes, policy changes. 10 event types, all regulatory-queryable.",
    badge: "Immutable Log",
  },
];

const codeSnippet = `// ZK compliance proof attached to transaction
var tx = new Transaction
{
    Type = TransactionType.Transfer,
    Sender = senderAddr,
    To = recipientAddr,
    Value = new UInt256(50_000),
    ComplianceProofs = new[]
    {
        new ComplianceProof
        {
            SchemaId = kycSchemaId,
            Proof = groth16ProofBytes,   // 192 bytes
            PublicInputs = publicInputs,
            Nullifier = nullifier,
        }
    },
};`;

function highlightCode(code: string): string {
  return code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/(\/\/[^\n]*)/g, '<span style="color:#6a9955">$1</span>')
    .replace(/\b(var|new|new\[\])\b/g, '<span style="color:#569cd6">$1</span>')
    .replace(/\b(Transaction|TransactionType|UInt256|ComplianceProof)\b/g, '<span style="color:#4ec9b0">$1</span>')
    .replace(/\b(Transfer|Type|Sender|To|Value|ComplianceProofs|SchemaId|Proof|PublicInputs|Nullifier)\b(?=\s*=)/g, '<span style="color:#9cdcfe">$1</span>')
    .replace(/\b(\d[\d_]*)\b/g, '<span style="color:#b5cea8">$1</span>');
}

export default function Compliance() {
  return (
    <section id="compliance" className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Zero-Knowledge Compliance
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Transactions carry ephemeral Groth16 ZK proofs. Validators verify
            compliance in constant time. Nothing is stored on-chain. If no proof
            is attached, the engine falls back to on-chain attestation checks.
          </p>
        </div>

        {/* Dual path explanation + code */}
        <div className="mb-16 grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">
              Dual-Path Verification
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-gray-400">
              <div className="rounded-lg border border-[#4a6fa5]/20 bg-[#4a6fa5]/5 p-4">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#6b9fd4]">
                  Path 1 &mdash; ZK Proofs (Default)
                </div>
                Users complete KYC once with any approved issuer. Their credential
                lives in their wallet. Each transaction generates a zero-knowledge
                proof: &ldquo;I hold a valid credential from a trusted issuer that
                satisfies this policy.&rdquo; Verified and discarded.
              </div>
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Path 2 &mdash; Attestations (Fallback)
                </div>
                For institutions that prefer public compliance status: 7-step
                pipeline checking KYC level, sanctions, geographic restrictions,
                holding limits, lock-up periods, and Travel Rule data.
              </div>
            </div>

            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold text-gray-300">
                Each ZK proof demonstrates:
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-[#6b9fd4]">&#10003;</span>
                  Sender holds a valid credential matching the required schema
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-[#6b9fd4]">&#10003;</span>
                  Credential issued by a sufficiently-trusted issuer (tier &ge; required)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-[#6b9fd4]">&#10003;</span>
                  Credential has not expired (checked against block timestamp)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-[#6b9fd4]">&#10003;</span>
                  Credential has not been revoked (Sparse Merkle Tree non-membership)
                </li>
              </ul>
            </div>
          </div>

          {/* Code snippet */}
          <div className="overflow-hidden rounded-xl border border-white/5 bg-[#111111]">
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-gray-500">
                ComplianceProof.cs
              </span>
            </div>
            <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed">
              <code
                className="text-gray-300"
                dangerouslySetInnerHTML={{ __html: highlightCode(codeSnippet) }}
              />
            </pre>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-white/5 bg-[#111111] p-6"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {pillar.title}
                </h3>
                <span className="rounded-full border border-[#4a6fa5]/30 bg-[#4a6fa5]/10 px-2.5 py-0.5 text-xs text-[#6b9fd4]">
                  {pillar.badge}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
