"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    question: "Why C# instead of Rust or Solidity?",
    answer:
      "C# gives access to 8 million .NET developers — the largest developer ecosystem not yet targeted by any blockchain. Native AOT compilation eliminates JIT overhead, producing deterministic binaries with performance comparable to Go or Rust. The Roslyn compiler platform enables source-generated dispatch (no reflection) and 12 static analyzers that catch contract bugs at compile time, not at runtime.",
  },
  {
    question: "How does zero-knowledge compliance work?",
    answer:
      "Users complete KYC once with an accredited provider and receive a verifiable credential stored in their wallet. For each transaction, their wallet generates a Groth16 ZK proof attesting to specific properties (\"I am not sanctioned\", \"I am over 18\") without revealing the underlying data. Validators verify the 128-byte proof in ~2ms and discard it — no personal data touches the ledger. If no ZK proof is attached, the compliance engine falls back to on-chain attestation checks.",
  },
  {
    question: "Is Basalt EVM compatible?",
    answer:
      "Basalt uses its own VM with C# contracts, not the EVM. However, addresses use Keccak-256 derivation (same as Ethereum), and the BridgeETH system contract enables bidirectional asset transfers between Basalt and Ethereum/Polygon via M-of-N Ed25519 multisig relayers. The BST token standards (BST-20, BST-721, etc.) mirror their ERC equivalents in functionality.",
  },
  {
    question: "What makes the DEX different from Uniswap?",
    answer:
      "Caldera Fusion is protocol-native (not a smart contract), so it has no reentrancy risk and settles atomically within the block. All swaps in a block are batched at a uniform clearing price, eliminating front-running and sandwich attacks by design. Users can submit EC-ElGamal encrypted intents that are only decrypted after ordering is committed, providing information-theoretic MEV protection that no contract-based DEX can achieve.",
  },
  {
    question: "How does finality work?",
    answer:
      "Basalt uses pipelined PBFT with 4 phases: Propose, Prepare, Pre-Commit, Commit. With up to 3 concurrent rounds and a 2-second block time, finality is achieved in ~4 seconds. Once a block is committed by 2f+1 validators, it is final — no reorgs, no probabilistic confirmation. Validators use BLS12-381 signature aggregation to keep block headers compact.",
  },
  {
    question: "What regulations does Basalt support?",
    answer:
      "The compliance layer is designed for MiCA (EU crypto regulation), GDPR (no PII on-chain), eIDAS 2.0 (digital identity), and Travel Rule (FATF R.16). Policy hooks enforce per-token rules like holding limits, lockup periods, jurisdiction whitelists, and sanctions. The Sovereign Trust Chain model maps real-world regulators (AMF, BaFin, FCA) onto on-chain trust tiers.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#111111] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Quick answers to the most common questions about Basalt.
            </p>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={i}>
                <div className="rounded-xl border border-white/5 bg-[#0a0a0a] transition-colors hover:border-white/10">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-medium text-white sm:text-base">
                      {faq.question}
                    </span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-200 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
