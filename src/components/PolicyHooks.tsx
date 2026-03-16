import React from "react";
import Reveal from "@/components/Reveal";

const policies = [
  {
    name: "HoldingLimitPolicy",
    typeId: "0x0008",
    description:
      "Caps the maximum token balance per address. Queries BalanceOf on-chain before every transfer. Configurable per-token limits set by the token admin.",
    color: "#3fb950",
  },
  {
    name: "LockupPolicy",
    typeId: "0x0009",
    description:
      "Time-based transfer restrictions. Tokens locked until a configurable block timestamp. Ideal for vesting schedules, cliff periods, and post-ICO lockups.",
    color: "#d29922",
  },
  {
    name: "JurisdictionPolicy",
    typeId: "0x000A",
    description:
      "Country-level allowlist or blocklist mode. Each address maps to a country code. Admins toggle between permissive (blocklist) and restrictive (allowlist) modes.",
    color: "#6b9fd4",
  },
  {
    name: "SanctionsPolicy",
    typeId: "0x000B",
    description:
      "Admin-managed sanctions list. Denies transfers if either sender or receiver is sanctioned. Immediate enforcement, no grace period.",
    color: "#f85149",
  },
];

const codeLines: { text: string; color?: string }[][] = [
  [{ text: "// Deploy policies and attach to any BST token", color: "#6a9955" }],
  [
    { text: "var", color: "#569cd6" },
    { text: " holdingLimit = Deploy(" },
    { text: "new", color: "#569cd6" },
    { text: " " },
    { text: "HoldingLimitPolicy", color: "#4ec9b0" },
    { text: "());" },
  ],
  [
    { text: "var", color: "#569cd6" },
    { text: " sanctions = Deploy(" },
    { text: "new", color: "#569cd6" },
    { text: " " },
    { text: "SanctionsPolicy", color: "#4ec9b0" },
    { text: "());" },
  ],
  [{ text: "" }],
  [{ text: "// Configure the holding limit", color: "#6a9955" }],
  [
    { text: "holdingLimit" },
    { text: ".SetLimit", color: "#dcdcaa" },
    { text: "(tokenAddr, " },
    { text: "1_000_000", color: "#b5cea8" },
    { text: ");" },
  ],
  [{ text: "" }],
  [{ text: "// Attach policies to the token — order matters", color: "#6a9955" }],
  [
    { text: "token" },
    { text: ".AddPolicy", color: "#dcdcaa" },
    { text: "(holdingLimit.Address);" },
  ],
  [
    { text: "token" },
    { text: ".AddPolicy", color: "#dcdcaa" },
    { text: "(sanctions.Address);" },
  ],
  [{ text: "" }],
  [{ text: "// Every Transfer/TransferFrom now enforces both policies", color: "#6a9955" }],
  [{ text: "// Zero policies = zero overhead (EnforceTransfer exits early)", color: "#6a9955" }],
];

function PolicyCode() {
  return (
    <>
      {codeLines.map((line, li) => (
        <React.Fragment key={li}>
          {line.map((token, ti) =>
            token.color ? (
              <span key={ti} style={{ color: token.color }}>{token.text}</span>
            ) : (
              <React.Fragment key={ti}>{token.text}</React.Fragment>
            )
          )}
          {"\n"}
        </React.Fragment>
      ))}
    </>
  );
}

export default function PolicyHooks() {
  return (
    <section id="policies" className="bg-[#111111] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Policy Hooks
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Pluggable transfer policies enforced at the protocol level. Attach
              compliance rules to any BST token — holding limits, lockups,
              jurisdiction, and sanctions. Zero overhead when no policies are set.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-16 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Policy cards */}
            <div className="stagger grid gap-4 sm:grid-cols-2">
              {policies.map((policy) => (
                <Reveal key={policy.name}>
                  <div className="card-glow h-full rounded-xl border border-white/5 bg-[#111111] p-5 transition-colors hover:border-[#4a6fa5]/20">
                    <div className="mb-2 flex items-center justify-between">
                      <span
                        className="text-sm font-bold"
                        style={{ color: policy.color }}
                      >
                        {policy.name}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-mono text-gray-500">
                        {policy.typeId}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-gray-500">
                      {policy.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Code snippet */}
            <div className="overflow-hidden rounded-xl border border-white/5 bg-[#111111] card-glow">
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-gray-500">
                  PolicySetup.cs
                </span>
              </div>
              <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed text-gray-300">
                <code>
                  <PolicyCode />
                </code>
              </pre>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
