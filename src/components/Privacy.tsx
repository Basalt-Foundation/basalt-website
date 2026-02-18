const features = [
  {
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Confidential Transfers",
    description:
      "Pedersen commitments on BLS12-381 G1 hide transaction amounts while proving balance validity. Groth16 range proofs prevent wraparound in 192-byte proofs, verified on-chain in ~5ms.",
    specs: "C = v*G + r*H | 192-byte proofs | ~5ms verification",
  },
  {
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "Private Channels",
    description:
      "Bilateral off-chain communication channels with X25519 ECDH key exchange, HKDF-SHA256 key derivation, and AES-256-GCM authenticated encryption. Ed25519 signed messages with monotonic nonce construction.",
    specs: "X25519 + AES-256-GCM | Ed25519 signed | Deterministic channel IDs",
  },
  {
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Selective Disclosure",
    description:
      "Viewing keys allow auditors to decrypt specific transaction amounts via ephemeral X25519 ECDH without on-chain visibility. Disclosure proofs reveal Pedersen commitment openings to authorized parties only.",
    specs: "Ephemeral keys | Forward-secure | Revocable",
  },
  {
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Credential Revocation",
    description:
      "Sparse Merkle Tree (depth 256, BLAKE3 hashing) with compact lazy storage. ZK proofs include non-membership verification — proving a credential has NOT been revoked without revealing which one.",
    specs: "SMT depth 256 | Membership + non-membership proofs | BLAKE3",
  },
];

export default function Privacy() {
  return (
    <section id="privacy" className="border-t border-white/5 bg-[#111111] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Privacy by Design
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Four composable privacy mechanisms. Use one, combine them, or opt
            out entirely. No PII ever touches the ledger.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-white/5 bg-[#0a0a0a] p-6 transition-colors hover:border-[#4a6fa5]/20"
            >
              <div className="mb-4 text-[#6b9fd4]">{feature.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-400">
                {feature.description}
              </p>
              <div className="rounded-md bg-white/[0.03] px-3 py-1.5 text-xs font-mono text-gray-500">
                {feature.specs}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
