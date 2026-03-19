import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import WhitepaperToc from "@/components/WhitepaperToc";

export const metadata: Metadata = {
  title: "Enterprise RWA Tokenization — Basalt",
  description:
    "MiCA-compliant real-world asset tokenization on Basalt. Validator-enforced compliance, zero-knowledge identity, structured token standards, and the Sovereign Trust Chain for regulated asset issuance.",
  openGraph: {
    title: "Enterprise RWA Tokenization — Basalt",
    description:
      "MiCA-compliant real-world asset tokenization on Basalt.",
    type: "article",
  },
};

export default function EnterpriseRwa() {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            Basalt
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/whitepapers"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Whitepapers
            </Link>
            <Link
              href="/"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Home
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header className="border-b border-white/5 px-6 pt-28 pb-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#4a6fa5]">
            Technical Whitepaper
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Basalt for Enterprise
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-gray-400">
            MiCA-Compliant Real-World Asset Tokenization
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Basalt Foundation</span>
            <span className="text-white/20">|</span>
            <span>March 2026</span>
          </div>
        </div>
      </header>

      {/* ── Content ── */}
      <div className="mx-auto flex max-w-6xl gap-12 px-6 py-16">
        <WhitepaperToc sections={[
          { id: "abstract", label: "Abstract" },
          { id: "mica-opportunity", label: "1. The MiCA Opportunity" },
          { id: "existing-blockchains", label: "2. Why Existing Chains Fall Short" },
          { id: "compliance-architecture", label: "3. Compliance Architecture" },
          { id: "sovereign-trust-chain", label: "4. Sovereign Trust Chain" },
          { id: "zk-compliance", label: "5. Zero-Knowledge Compliance" },
          { id: "transfer-policies", label: "6. Transfer Policy Hooks" },
          { id: "token-standards", label: "7. Token Standards" },
          { id: "rwa-implementations", label: "8. RWA Implementations" },
          { id: "stablecoin", label: "9. Stablecoin Compliance" },
          { id: "audit-reporting", label: "10. Audit & Reporting" },
          { id: "enterprise-integration", label: "11. Enterprise Integration" },
          { id: "cross-border", label: "12. Cross-Border Interop" },
          { id: "use-cases", label: "13. Use Cases" },
          { id: "roadmap", label: "14. Roadmap" },
          { id: "conclusion", label: "15. Conclusion" },
        ]} />

        <article className="wp min-w-0 max-w-3xl">
          {/* ── Abstract ── */}
          <section id="abstract" className="mb-20">
            <h2>Abstract</h2>
            <p>
              The Markets in Crypto-Assets Regulation (MiCA), effective across the European Union
              since December 2024, establishes the world&apos;s first comprehensive regulatory
              framework for crypto-assets. For enterprise tokenization &mdash; bonds, real estate,
              carbon credits, supply chain finance, commodities &mdash; MiCA creates both a legal
              foundation and a compliance burden. Issuers must publish white papers, prove reserves,
              enforce redemption rights, screen sanctions, respect geographic restrictions, report to
              regulators, and enforce the FATF Travel Rule &mdash; all while maintaining the
              operational efficiency that makes tokenization worthwhile.
            </p>
            <p>
              No existing blockchain provides these capabilities at the protocol level. Ethereum and
              its Layer 2s require each issuer to build compliance from scratch in Solidity.
              Hyperledger Fabric provides permissioned access control but no zero-knowledge privacy,
              no public settlement, and no interoperability with public DeFi. The result is that
              enterprise tokenization either ignores compliance (and faces regulatory action) or
              builds compliance as bespoke application code (expensive, fragile, non-composable).
            </p>
            <p>
              Basalt resolves this by embedding MiCA compliance into its protocol: validator-enforced
              transfer policies, zero-knowledge identity verification via Groth16 proofs, a Sovereign
              Trust Chain that maps real-world regulatory authorities onto on-chain trust hierarchies,
              and structured token standards (BST-3525, BST-4626) designed specifically for financial
              instruments. This paper presents the architecture, compliance mechanisms, and reference
              implementations for MiCA-compliant real-world asset tokenization on Basalt.
            </p>
          </section>

          {/* ── 1. The MiCA Opportunity and Challenge ── */}
          <section id="mica-opportunity" className="mb-20">
            <h2>1. The MiCA Opportunity and Challenge</h2>

            <h3>1.1 What MiCA Establishes</h3>
            <p>
              The Markets in Crypto-Assets Regulation (EU 2023/1114) creates a unified legal
              framework across all 27 EU member states for the issuance, offering, and trading of
              crypto-assets. For the first time, enterprises have legal certainty about what is
              required to tokenize and trade real-world assets on a blockchain within Europe.
            </p>
            <p>MiCA defines three categories of crypto-assets:</p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Definition</th>
                    <th>Key Requirements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Asset-Referenced Tokens (ARTs)</strong></td>
                    <td>Tokens maintaining stable value by referencing multiple assets, rights, or a combination</td>
                    <td>Reserve requirements, white paper, redemption rights, issuer authorization</td>
                  </tr>
                  <tr>
                    <td><strong>E-Money Tokens (EMTs)</strong></td>
                    <td>Tokens maintaining stable value by referencing a single fiat currency</td>
                    <td>E-money institution license, 1:1 reserve, interest prohibition, at-par redemption</td>
                  </tr>
                  <tr>
                    <td><strong>Other Crypto-Assets</strong></td>
                    <td>All crypto-assets that are not ARTs or EMTs</td>
                    <td>White paper, right of withdrawal, marketing restrictions</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Additionally, MiCA establishes requirements for Crypto-Asset Service Providers (CASPs):
              authorization and registration with a national competent authority, ongoing AML/KYC
              obligations, conflict of interest management, IT security, and complaint handling. A CASP
              authorized in one EU member state can operate across the entire EU via passporting.
            </p>

            <h3>1.2 The Tokenization Opportunity</h3>
            <p>
              MiCA&apos;s legal clarity unlocks markets that have been constrained by regulatory uncertainty:
            </p>
            <ul>
              <li>
                <strong>Fixed income:</strong> The EU bond market exceeds EUR 20 trillion. Tokenized
                bonds reduce issuance costs, enable fractional ownership, and automate coupon distribution.
              </li>
              <li>
                <strong>Real estate:</strong> European commercial real estate represents approximately
                EUR 10 trillion in assets. Fractional tokenization enables retail investor access to
                institutional-grade properties.
              </li>
              <li>
                <strong>Carbon credits:</strong> The EU Emissions Trading System (EU ETS) is the
                world&apos;s largest carbon market. Tokenized credits with verifiable retirement prevent
                double-counting.
              </li>
              <li>
                <strong>Supply chain finance:</strong> Invoice factoring, trade finance, and digital
                product passports (required by upcoming EU regulation for certain product categories).
              </li>
              <li>
                <strong>Commodities:</strong> Tokenized commodity certificates with oracle-verified
                prices and proof-of-reserve attestation.
              </li>
            </ul>

            <h3>1.3 The Compliance Burden</h3>
            <p>
              The same regulation that creates legal certainty also imposes significant compliance
              requirements. An enterprise tokenizing bonds on a blockchain must:
            </p>
            <ol>
              <li>Publish a compliant white paper and register it with the national competent authority.</li>
              <li>Implement KYC/AML verification meeting AMLD5 standards.</li>
              <li>Enforce sanctions screening against EU restrictive measures and OFAC lists.</li>
              <li>Respect geographic restrictions for cross-border offerings.</li>
              <li>Enforce holding limits that may trigger disclosure requirements.</li>
              <li>Implement the FATF Travel Rule for transfers above EUR 1,000.</li>
              <li>Provide redemption rights at par for e-money tokens.</li>
              <li>Maintain reserves verifiable by competent authorities.</li>
              <li>Produce regulatory reports on demand.</li>
              <li>Prevent market abuse &mdash; including front-running, insider trading, and manipulation.</li>
            </ol>
            <p>
              On existing blockchains, each of these requirements must be implemented as
              application-layer code. This code is expensive to build, expensive to audit, not
              composable across projects, and &mdash; critically &mdash; bypassable by anyone who
              interacts with the underlying smart contract directly.
            </p>
          </section>

          {/* ── 2. Why Existing Blockchains Fall Short ── */}
          <section id="existing-blockchains" className="mb-20">
            <h2>2. Why Existing Blockchains Fall Short</h2>

            <h3>2.1 Ethereum and EVM Chains</h3>
            <p>
              Ethereum provides a robust execution environment, but compliance is entirely the
              application developer&apos;s problem:
            </p>
            <p>
              <strong>No protocol-level compliance.</strong> Transfer restrictions exist only in smart
              contract code. A user who calls the contract&apos;s <code>transfer</code> function
              directly (bypassing the issuer&apos;s frontend) bypasses all compliance checks. The
              issuer has no guarantee that their compliance rules are universally enforced.
            </p>
            <p>
              <strong>No native identity.</strong> Ethereum has no identity layer. KYC attestations
              require third-party protocols that are not standardized, not interoperable, and not
              integrated with contract execution.
            </p>
            <p>
              <strong>No privacy for compliance data.</strong> On-chain KYC attestations expose
              compliance status publicly. Everyone can see that an address has passed KYC &mdash; and
              therefore infer that every other address has not.
            </p>
            <p>
              <strong>MEV exposure.</strong> Token trades on DEXs are subject to front-running and
              sandwich attacks. For regulated securities, market manipulation by validators and MEV
              searchers constitutes market abuse under MiCA Article 91.
            </p>

            <h3>2.2 Hyperledger Fabric</h3>
            <p>
              Hyperledger provides permissioned access control with known participant identities and
              channel-based data isolation. However, it offers no public settlement layer (assets
              cannot be traded on open markets), no zero-knowledge privacy (either you see the data
              or you don&apos;t), no interoperability with public DeFi, and limited performance under
              Byzantine faults.
            </p>
            <p>
              The fundamental problem: Hyperledger trades decentralization for compliance. Enterprises
              get compliance at the cost of needing every counterparty to join the same consortium.
              This defeats the liquidity and composability benefits that make tokenization worthwhile.
            </p>

            <h3>2.3 The Gap</h3>
            <p>The market needs a blockchain that provides:</p>
            <ul>
              <li>Protocol-level compliance that cannot be bypassed.</li>
              <li>Zero-knowledge privacy that preserves pseudonymity while proving regulatory status.</li>
              <li>Standard token models for financial instruments (not just fungible/non-fungible).</li>
              <li>Public settlement for liquidity, with private subnets for sensitive operations.</li>
              <li>MEV resistance for regulated trading.</li>
              <li>Integration with real-world regulatory structures.</li>
            </ul>
            <p>Basalt was built from the ground up to fill this gap.</p>
          </section>

          {/* ── 3. Basalt's MiCA Compliance Architecture ── */}
          <section id="compliance-architecture" className="mb-20">
            <h2>3. Basalt&apos;s MiCA Compliance Architecture</h2>

            <h3>3.1 The Six-Layer Compliance Stack</h3>
            <p>
              Basalt&apos;s compliance is not a single module &mdash; it is a layered architecture
              that spans from on-chain credential registries to validator-level transaction filtering:
            </p>
            <pre>
{`Layer 6: Audit Trail & Regulatory Reporting
         SOC2/ISO27001 exports, event logging
         ──────────────────────────────────────
Layer 5: ComplianceEngine
         Hybrid verification: ZK primary, attestation fallback
         8-step compliance pipeline
         ──────────────────────────────────────
Layer 4: Transfer Policy Hooks
         PolicyEnforcer + 4 reference policies
         Validator-enforced, per-token, composable
         ──────────────────────────────────────
Layer 3: ZkComplianceVerifier
         Groth16 proof verification, nullifier tracking
         Privacy-preserving credential attestation
         ──────────────────────────────────────
Layer 2: BSTVCRegistry + IssuerRegistry
         W3C Verifiable Credentials, Sovereign Trust Chain
         Tiered issuer accreditation
         ──────────────────────────────────────
Layer 1: SchemaRegistry
         Credential schemas, Groth16 verification keys
         Field definitions for compliance attributes`}
            </pre>
            <p>
              Each layer builds on the one below it, and all layers are protocol-native &mdash;
              implemented in the core node software, not as user-deployed smart contracts.
            </p>

            <h3>3.2 MiCA Requirements Mapping</h3>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>MiCA Requirement</th>
                    <th>Basalt Implementation</th>
                    <th>Enforcement Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>White paper publication</td>
                    <td>On-chain template via Governance contract</td>
                    <td>Contract</td>
                  </tr>
                  <tr>
                    <td>Issuer authorization</td>
                    <td>Sovereign Trust Chain (Tier 3 &rarr; Tier 2 vouching)</td>
                    <td>Protocol</td>
                  </tr>
                  <tr>
                    <td>KYC/AML verification</td>
                    <td>ZkComplianceVerifier + IssuerRegistry + BST-VC</td>
                    <td>Protocol</td>
                  </tr>
                  <tr>
                    <td>Sanctions screening</td>
                    <td>SanctionsPolicy (0x000B)</td>
                    <td>Validator</td>
                  </tr>
                  <tr>
                    <td>Geographic restrictions</td>
                    <td>JurisdictionPolicy (0x000A)</td>
                    <td>Validator</td>
                  </tr>
                  <tr>
                    <td>Holding limits / disclosure</td>
                    <td>HoldingLimitPolicy (0x0008)</td>
                    <td>Validator</td>
                  </tr>
                  <tr>
                    <td>Lockup / vesting periods</td>
                    <td>LockupPolicy (0x0009)</td>
                    <td>Validator</td>
                  </tr>
                  <tr>
                    <td>Travel Rule (FATF R.16)</td>
                    <td>ComplianceEngine step 7</td>
                    <td>Protocol</td>
                  </tr>
                  <tr>
                    <td>Reserve proof (stablecoins)</td>
                    <td>Oracle-fed collateral verification</td>
                    <td>Contract</td>
                  </tr>
                  <tr>
                    <td>Redemption at par (EMTs)</td>
                    <td>Automatic redemption contract with SLA</td>
                    <td>Contract</td>
                  </tr>
                  <tr>
                    <td>Interest prohibition (EMTs)</td>
                    <td>Configurable yield blocking</td>
                    <td>Contract</td>
                  </tr>
                  <tr>
                    <td>Market abuse prevention</td>
                    <td>Caldera Fusion batch auctions</td>
                    <td>Consensus</td>
                  </tr>
                  <tr>
                    <td>Regulatory reporting</td>
                    <td>Audit trail with SOC2/ISO27001 export</td>
                    <td>Protocol</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The critical distinction: seven of these thirteen requirements are enforced at the
              validator or protocol level. A non-compliant transaction is rejected before it enters a
              block. There is no bypass vector.
            </p>
          </section>

          {/* ── 4. The Sovereign Trust Chain ── */}
          <section id="sovereign-trust-chain" className="mb-20">
            <h2>4. The Sovereign Trust Chain</h2>

            <h3>4.1 The Bootstrapping Problem</h3>
            <p>
              How does a blockchain verify that an entity claiming to be a legitimate KYC provider is
              actually authorized to perform identity verification under MiCA?
            </p>
            <p>
              <strong>Permissionless registration</strong> (anyone can register, stake collateral,
              risk slashing) fails because the damage from fraudulent KYC credentials &mdash;
              sanctioned individuals gaining access to regulated financial services &mdash; can far
              exceed the economic penalty.
            </p>
            <p>
              <strong>Administrator-gated registration</strong> (a trusted party approves providers)
              introduces a single point of failure, a censorship vector, and a centralization risk.
            </p>

            <h3>4.2 EU Competent Authority Registries</h3>
            <p>
              Every EU member state maintains a public registry of authorized CASPs under MiCA:
            </p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Member State</th>
                    <th>Competent Authority</th>
                    <th>Registry</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>France</td><td>AMF</td><td>Registre PSAN</td></tr>
                  <tr><td>Germany</td><td>BaFin</td><td>Kryptowertetransferverordnung</td></tr>
                  <tr><td>Italy</td><td>Consob / OAM</td><td>Registro OAM</td></tr>
                  <tr><td>Spain</td><td>CNMV</td><td>Registro CASP</td></tr>
                  <tr><td>Netherlands</td><td>DNB / AFM</td><td>Crypto Registry</td></tr>
                  <tr><td>Luxembourg</td><td>CSSF</td><td>Registre CASP</td></tr>
                  <tr><td>Ireland</td><td>CBI</td><td>VASP Register</td></tr>
                  <tr><td>Austria</td><td>FMA</td><td>CASP Register</td></tr>
                  <tr><td>Belgium</td><td>FSMA</td><td>VASP Register</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              The information about who is authorized is publicly available. The challenge is{" "}
              <strong>bridging this off-chain regulatory reality into on-chain verifiable trust</strong>{" "}
              without reintroducing centralization.
            </p>

            <h3>4.3 The Four-Tier Trust Hierarchy</h3>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>Role</th>
                    <th>Onboarding</th>
                    <th>Collateral</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>3</td><td>Sovereign authority</td><td>Governance vote</td><td>None</td><td>AMF, BaFin, FCA</td></tr>
                  <tr><td>2</td><td>Accredited provider</td><td>Vouched by Tier 3 via BST-VC</td><td>Staked (50,000+ BSLT)</td><td>VerifyFrance SAS, IDnow GmbH</td></tr>
                  <tr><td>1</td><td>Community provider</td><td>Vouched by Tier 2</td><td>Low</td><td>Small KYC operator</td></tr>
                  <tr><td>0</td><td>Self-attestation</td><td>Permissionless</td><td>None</td><td>Individual user</td></tr>
                </tbody>
              </table>
            </div>

            <h3>4.4 Automated Accreditation Flow</h3>
            <p>
              Once a sovereign authority is onboarded (one governance vote), all subsequent provider
              accreditation is fully automated:
            </p>
            <pre>
{`Sovereign Authority (Tier 3, e.g., AMF)
  |
  | Issues BST-VC credential:
  |   schema: "urn:basalt:schema:regulatory-accreditation"
  |   claims: {
  |     registrationId: "P2024-0042",
  |     type: "PSAN",
  |     jurisdiction: 250,     // ISO 3166-1: France
  |     validUntil: 1798761600
  |   }
  |   signature: Ed25519
  |
  v
Accredited Provider (e.g., VerifyFrance SAS)
  |
  | Calls: IssuerRegistry.RegisterWithAccreditation(
  |   name, credentialHash, sponsorAddress
  | )
  |
  v
IssuerRegistry Smart Contract (automatic verification)
  |  1. Sponsor is Tier 3 and active
  |  2. Credential hash exists in BSTVCRegistry
  |  3. Credential is not revoked (Sparse Merkle Tree)
  |  4. Sponsor jurisdiction matches (MiCA passporting)
  |  5. Provider has staked minimum collateral
  |
  v
Auto-promotion to Tier 2 (zero administrative overhead)`}
            </pre>

            <h3>4.5 Revocation Cascade</h3>
            <p>
              When a regulatory authority revokes an entity&apos;s authorization, the Sovereign Trust
              Chain propagates revocation automatically:
            </p>
            <ol>
              <li>The sovereign authority revokes the accreditation credential in the BSTVCRegistry.</li>
              <li>The IssuerRegistry detects the revocation via Sparse Merkle Tree membership proof failure.</li>
              <li>The provider&apos;s Tier 2 status is downgraded.</li>
              <li>All credentials issued by the downgraded provider are flagged &mdash; ZK proofs referencing those credentials will fail verification.</li>
              <li>The cascade is immediate and requires no administrative action.</li>
            </ol>

            <h3>4.6 MiCA Passporting</h3>
            <p>
              Under MiCA, a CASP authorized in one EU member state can provide services across the
              entire EU. The Sovereign Trust Chain supports this directly: a provider vouched by the
              AMF (France) is recognized by smart contracts that accept credentials from any EU
              jurisdiction. Token issuers can layer jurisdiction-specific restrictions on top via
              JurisdictionPolicy.
            </p>
          </section>

          {/* ── 5. Zero-Knowledge Compliance ── */}
          <section id="zk-compliance" className="mb-20">
            <h2>5. Zero-Knowledge Compliance: Privacy Meets Regulation</h2>

            <h3>5.1 The Privacy-Compliance Paradox</h3>
            <p>
              MiCA requires identity verification. Blockchain users expect pseudonymity. These
              demands appear contradictory:
            </p>
            <p>
              <strong>Traditional approach (Ethereum):</strong> Publish KYC attestations on-chain.
              Everyone knows which addresses are KYC-verified, destroying pseudonymity and creating
              a correlation attack vector.
            </p>
            <p>
              <strong>Privacy-first approach (Zcash):</strong> Hide all transaction data. Compliance
              is impossible &mdash; regulators cannot verify that participants are identified.
            </p>

            <h3>5.2 Basalt&apos;s Resolution: ZK Compliance Proofs</h3>
            <p>
              Basalt separates the <em>proof</em> of compliance from the <em>data</em> required for
              compliance:
            </p>
            <ol>
              <li>A user completes KYC with a Tier 2 accredited provider (off-chain).</li>
              <li>The provider issues a BST-VC credential containing compliance attributes (KYC level, jurisdiction, sanctions-clear status, accredited investor status).</li>
              <li>The credential is anchored on-chain as a BLAKE3 hash &mdash; no personal data is stored on-chain.</li>
              <li>When the user needs to prove compliance, they generate a <strong>Groth16 zero-knowledge proof</strong> that attests to specific properties without revealing the credential itself.</li>
            </ol>

            <h3>5.3 What ZK Proofs Can Attest</h3>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Attestation</th>
                    <th>What It Proves</th>
                    <th>What It Reveals</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>KYC level</td>
                    <td>&ldquo;My KYC level is &ge; 2&rdquo;</td>
                    <td>Nothing about who performed the KYC or the user&apos;s identity</td>
                  </tr>
                  <tr>
                    <td>Jurisdiction</td>
                    <td>&ldquo;I reside in an EU member state&rdquo;</td>
                    <td>Nothing about which member state</td>
                  </tr>
                  <tr>
                    <td>Sanctions</td>
                    <td>&ldquo;I am not on the EU sanctions list&rdquo;</td>
                    <td>Nothing about the user&apos;s identity</td>
                  </tr>
                  <tr>
                    <td>Accredited investor</td>
                    <td>&ldquo;I hold an accredited investor credential&rdquo;</td>
                    <td>Nothing about net worth or income</td>
                  </tr>
                  <tr>
                    <td>Age</td>
                    <td>&ldquo;I am over 18&rdquo;</td>
                    <td>Nothing about actual age</td>
                  </tr>
                  <tr>
                    <td>Issuer tier</td>
                    <td>&ldquo;My credential was issued by a Tier 2+ provider&rdquo;</td>
                    <td>Nothing about which provider</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The proof is 192 bytes (three BLS12-381 curve points) regardless of the number of
              attestations. Verification is constant-time O(1) on-chain.
            </p>

            <h3>5.4 Nullifier Anti-Correlation</h3>
            <p>
              An observer should not be able to correlate multiple ZK proofs to the same user. Basalt
              addresses this through Feldman VSS-based nullifier tracking: each proof includes a
              nullifier derived from the user&apos;s credential and a domain separator. The nullifier
              is unique per proof context but unlinkable across contexts. A sliding window (256 blocks
              by default) prevents replay within a time period.
            </p>

            <h3>5.5 Dual-Path Compliance</h3>
            <p>
              Not all participants want or need ZK privacy. Basalt&apos;s ComplianceEngine supports
              both paths:
            </p>
            <p>
              <strong>ZK path (privacy-preserving):</strong> User submits a Groth16 proof. The
              contract verifies the proof without learning the user&apos;s identity. Preferred for
              public market participation.
            </p>
            <p>
              <strong>Attestation path (transparent):</strong> User provides an on-chain attestation
              from a registered issuer. The attestation is publicly visible. Preferred for
              institutional participants who want transparency for their counterparties and regulators.
            </p>
          </section>

          {/* ── 6. Transfer Policy Hooks ── */}
          <section id="transfer-policies" className="mb-20">
            <h2>6. Transfer Policy Hooks: Validator-Enforced Rules</h2>

            <h3>6.1 Architecture</h3>
            <p>
              Basalt&apos;s PolicyEnforcer system intercepts token transfers before state mutation.
              Token contracts delegate transfer authorization to a configurable chain of policy
              contracts:
            </p>
            <pre>
{`Token.Transfer(from, to, amount)
         |
         v
PolicyEnforcer.EnforceTransfer(token, from, to, amount)
         |
         +-- Policy 1: HoldingLimitPolicy
         +-- Policy 2: LockupPolicy
         +-- Policy 3: JurisdictionPolicy
         +-- Policy 4: SanctionsPolicy
         |
         v
    All pass -> transfer proceeds
    Any deny -> transaction reverted`}
            </pre>
            <p>
              Policies are evaluated in order. The first denial reverts the entire transaction. A
              maximum of 16 policies per token prevents DoS through excessive policy chains.
            </p>

            <h3>6.2 Reference Policies for MiCA Compliance</h3>
            <p>
              <strong>HoldingLimitPolicy (0x0008)</strong> &mdash; Enforces per-address balance caps.
              Under MiCA, significant holdings of asset-referenced tokens may trigger disclosure
              requirements. The policy enforces these thresholds automatically with default limits and
              per-address overrides for institutional investors, market makers, and the issuer&apos;s
              treasury.
            </p>
            <p>
              <strong>LockupPolicy (0x0009)</strong> &mdash; Enforces time-based transfer
              restrictions. MiCA-relevant applications include founder and team token vesting,
              regulatory hold periods on newly issued tokens, and lock-up for ICO participants during
              the cooling-off period.
            </p>
            <p>
              <strong>JurisdictionPolicy (0x000A)</strong> &mdash; Associates addresses with ISO
              3166-1 country codes and enforces whitelist/blacklist rules per token. An
              asset-referenced token can be restricted to EU member states only. A real estate token
              can be restricted to the jurisdiction of the property. Enforcement is at the validator
              level &mdash; there is no frontend to bypass.
            </p>
            <p>
              <strong>SanctionsPolicy (0x000B)</strong> &mdash; Maintains an on-chain list of
              sanctioned addresses and blocks all transfers involving them. Can reference external
              sanctions lists (EU restrictive measures, OFAC SDN). Enforcement is absolute.
            </p>

            <h3>6.3 Enforcement Depth</h3>
            <p>
              Policies are evaluated by validators during transaction validation, not by smart
              contract code during execution:
            </p>
            <ul>
              <li>A user who calls a contract function directly (bypassing the issuer&apos;s frontend) is still subject to all policies.</li>
              <li>A contract-to-contract transfer (e.g., a DEX settlement) is still subject to all policies.</li>
              <li>A bridged transfer (tokens arriving from the EVM bridge) is subject to all policies on the Basalt side.</li>
            </ul>
            <p>
              On Ethereum, compliance exists only where the application developer placed it. On
              Basalt, compliance exists everywhere, unconditionally.
            </p>
          </section>

          {/* ── 7. Token Standards for Financial Instruments ── */}
          <section id="token-standards" className="mb-20">
            <h2>7. Token Standards for Financial Instruments</h2>

            <h3>7.1 BST-3525: Semi-Fungible Structured Tokens</h3>
            <p>
              BST-3525 implements the <code>(tokenId, slot, value)</code> model that maps naturally
              to structured financial instruments:
            </p>
            <p>
              <strong>Tokenized bonds:</strong> <code>slot</code> = bond series (e.g., &ldquo;Series
              A Senior&rdquo;), <code>tokenId</code> = individual bond certificate,{" "}
              <code>value</code> = remaining principal. Value transfer within a slot enables
              secondary market trading of partial bond positions &mdash; an investor holding a 100,000
              EUR bond can sell 25,000 EUR of principal as a value transfer.
            </p>
            <p>
              <strong>Fractional real estate:</strong> <code>slot</code> = property identifier,{" "}
              <code>tokenId</code> = individual ownership share, <code>value</code> = ownership
              percentage (basis points). Rent distribution is proportional to value.
            </p>
            <p>
              <strong>Carbon credits:</strong> <code>slot</code> = vintage year and certification
              standard, <code>tokenId</code> = individual credit batch, <code>value</code> = tonnes
              of CO2 equivalent. Retirement (burn) is enforced at the token level.
            </p>

            <h3>7.2 BST-4626: Tokenized Vaults</h3>
            <p>
              BST-4626 implements a standardized vault interface for yield-bearing instruments:
              deposit underlying assets, receive vault shares, redeem shares for underlying plus
              accumulated yield. Harvest events track yield accrual on-chain.
            </p>
            <p>MiCA-relevant applications:</p>
            <ul>
              <li><strong>Staking pools:</strong> BST staking with transparent yield and automated distribution.</li>
              <li><strong>Yield funds:</strong> Tokenized investment funds with on-chain NAV calculation.</li>
              <li><strong>Reserve management:</strong> Stablecoin reserve vaults with proof-of-reserve attestation.</li>
            </ul>

            <h3>7.3 Compliance Inheritance</h3>
            <p>
              All Basalt token standards (BST-20, BST-721, BST-1155, BST-3525, BST-4626) inherit the
              PolicyEnforcer integration. A bond token (BST-3525) automatically carries all assigned
              compliance policies. A vault share (BST-4626) inherits the policies of the underlying
              asset. Compliance is a property of the token standard itself, not bolted onto individual
              contracts.
            </p>
          </section>

          {/* ── 8. RWA Reference Implementations ── */}
          <section id="rwa-implementations" className="mb-20">
            <h2>8. RWA Reference Implementations</h2>
            <p>
              Basalt provides production-ready smart contract specifications for common RWA patterns.
              Each integrates with the full compliance stack.
            </p>

            <h3>8.1 Tokenized Bonds</h3>
            <p>BST-3525-based bond tokenization with:</p>
            <ul>
              <li><strong>Coupon distribution:</strong> Automatic, periodic payments proportional to holding with on-chain audit trail.</li>
              <li><strong>Maturity and redemption:</strong> Automatic principal redemption at maturity, with funds held in Escrow until distribution.</li>
              <li><strong>Credit rating integration:</strong> Oracle-fed ratings stored on-chain via SchemaRegistry, with rating-based restrictions.</li>
              <li><strong>Callable bonds:</strong> Issuer can call bonds early via governance action.</li>
              <li><strong>Accredited investor gating:</strong> ZK proof of accredited investor status required for purchase.</li>
              <li><strong>Secondary market:</strong> Tradeable on Caldera Fusion with batch auction settlement &mdash; no front-running on bond trades.</li>
            </ul>

            <h3>8.2 Real Estate Fractionalization</h3>
            <p>BST-3525-based property fractionalization with:</p>
            <ul>
              <li><strong>Share management:</strong> Each property is a slot. Individual shares are tokenIds with value representing ownership percentage.</li>
              <li><strong>Rent distribution:</strong> Automatic, pro-rata distribution to all share holders.</li>
              <li><strong>Property appraisal:</strong> Oracle-fed appraisal updates stored on-chain for transparent valuation history.</li>
              <li><strong>KYC-gated transfers:</strong> Only KYC-verified addresses can hold property shares.</li>
              <li><strong>Jurisdiction restrictions:</strong> Property shares restricted to the jurisdiction of the property.</li>
            </ul>

            <h3>8.3 Carbon Credits</h3>
            <p>BST-3525-based carbon credit tokenization with:</p>
            <ul>
              <li><strong>Certification body verification:</strong> Credits minted only by Tier 2+ issuers in the IssuerRegistry.</li>
              <li><strong>Vintage and standard tracking:</strong> Slot encodes vintage year and certification standard.</li>
              <li><strong>Retirement as burn:</strong> Permanent, irreversible retirement prevents double-counting.</li>
              <li><strong>Offset marketplace:</strong> Caldera Fusion integration for transparent, MEV-resistant trading.</li>
            </ul>

            <h3>8.4 Invoice Factoring</h3>
            <p>BST-721-based invoice tokenization with:</p>
            <ul>
              <li><strong>Milestone-based escrow:</strong> Multi-phase state machine &mdash; invoice created, accepted, funded, paid, disputed, resolved.</li>
              <li><strong>Trade finance integration:</strong> IoT oracle integration for shipment tracking with immutable proof of delivery.</li>
              <li><strong>Cross-border compliance:</strong> FATF Travel Rule enforcement for invoice payments above threshold.</li>
            </ul>

            <h3>8.5 Commodity Tokens</h3>
            <p>BST-3525-based commodity certificate tokenization with:</p>
            <ul>
              <li><strong>Oracle-verified pricing:</strong> Chainlink/Pyth oracle feeds with circuit breaker for stale or manipulated data.</li>
              <li><strong>Physical delivery:</strong> Optional physical delivery mechanism via escrow.</li>
              <li><strong>Storage proof:</strong> Warehousing certificates as BST-VC credentials from certified storage providers.</li>
            </ul>

            <h3>8.6 Music Royalties</h3>
            <p>BST-3525-based royalty tokenization with:</p>
            <ul>
              <li><strong>Revenue stream fractionalization:</strong> Slot represents the music asset, value represents royalty share percentage.</li>
              <li><strong>Automatic distribution:</strong> Royalty payments distributed to token holders pro-rata.</li>
              <li><strong>Compliance gating:</strong> Jurisdiction restrictions respecting local securities laws.</li>
            </ul>
          </section>

          {/* ── 9. Stablecoin Compliance ── */}
          <section id="stablecoin" className="mb-20">
            <h2>9. Stablecoin Compliance: The USDB Model</h2>

            <h3>9.1 MiCA E-Money Token Requirements</h3>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Requirement</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Issuer authorization</td><td>Must be an authorized credit institution or e-money institution</td></tr>
                  <tr><td>1:1 reserve</td><td>Full backing in fiat currency deposits or high-quality liquid assets</td></tr>
                  <tr><td>Redemption at par</td><td>Holders must be able to redeem at face value at any time</td></tr>
                  <tr><td>Interest prohibition</td><td>E-money tokens must not bear interest</td></tr>
                  <tr><td>Segregated reserves</td><td>Reserves must be held in segregated accounts</td></tr>
                  <tr><td>Periodic audit</td><td>Independent audit of reserve adequacy</td></tr>
                </tbody>
              </table>
            </div>

            <h3>9.2 USDB: Reference Implementation</h3>
            <p>
              Basalt&apos;s stablecoin CDP (Collateralized Debt Position) contract implements MiCA EMT
              requirements natively:
            </p>
            <p>
              <strong>KYC-gated minting:</strong> Only users who can present a valid ZK compliance
              proof (proving KYC level &ge; 2 from a Tier 2+ issuer) can open CDPs and mint USDB.
            </p>
            <pre>
{`public ulong OpenCDP(Address collateralAsset, UInt256 collateralAmount)
{
    Require(!_shutdown.Get(), "SYSTEM_SHUTDOWN");
    RequireZkCompliance(Context.Sender);  // KYC required
    // ... CDP logic
}`}
            </pre>
            <p>
              <strong>Reserve proof:</strong> Oracle-fed collateral prices with circuit breakers. Total
              collateral value backing all USDB is queryable on-chain by any party, including regulators.
            </p>
            <p>
              <strong>Emergency shutdown:</strong> A governance-controlled mechanism that halts all
              USDB minting and enables proportional redemption for all holders &mdash; satisfying
              MiCA&apos;s orderly wind-down requirement.
            </p>
            <p>
              <strong>Interest prohibition:</strong> USDB transfers carry no yield by default. An
              optional Savings Rate module (USR) is available for non-EMT classified variants, but is
              opt-in and clearly separated.
            </p>
            <p>
              <strong>Debt ceilings:</strong> Per-collateral and global debt ceilings prevent
              overexposure &mdash; e.g., max 30% of USDB backed by a single collateral type.
            </p>
          </section>

          {/* ── 10. Regulatory Reporting and Audit Infrastructure ── */}
          <section id="audit-reporting" className="mb-20">
            <h2>10. Regulatory Reporting and Audit Infrastructure</h2>

            <h3>10.1 Compliance Event Types</h3>
            <p>
              Basalt&apos;s audit trail records every compliance-relevant event with timestamps, block
              numbers, and transaction hashes:
            </p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Event Type</th>
                    <th>Description</th>
                    <th>MiCA Relevance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>TransferApproved</code></td><td>A transfer passed all compliance checks</td><td>Transaction monitoring</td></tr>
                  <tr><td><code>TransferBlocked</code></td><td>A transfer was rejected by a policy</td><td>Sanctions/restriction enforcement proof</td></tr>
                  <tr><td><code>AttestationIssued</code></td><td>A KYC credential was issued</td><td>Identity verification record</td></tr>
                  <tr><td><code>AttestationRevoked</code></td><td>A KYC credential was revoked</td><td>Offboarding / suspicious activity</td></tr>
                  <tr><td><code>ProviderApproved</code></td><td>A KYC provider was accredited</td><td>CASP registration</td></tr>
                  <tr><td><code>ProviderRevoked</code></td><td>A provider&apos;s accreditation was revoked</td><td>CASP deregistration</td></tr>
                  <tr><td><code>PolicyChanged</code></td><td>A token&apos;s compliance policy was modified</td><td>Policy change audit</td></tr>
                  <tr><td><code>AddressBlocked</code></td><td>An address was sanctioned</td><td>Sanctions enforcement</td></tr>
                </tbody>
              </table>
            </div>

            <h3>10.2 Audit Trail and Export</h3>
            <p>
              The audit trail maintains a 100,000-event circular buffer per contract. For long-term
              retention, events can be exported to external storage systems in formats compatible with
              SOC2 Type II, ISO 27001, FATF Travel Rule, and national competent authority reporting
              templates.
            </p>

            <h3>10.3 Real-Time Regulatory Access</h3>
            <p>
              Regulators with read access via RPC Node Mode can query the audit trail in real-time:
              blocked transfers for a specific token, KYC credentials issued by a specific provider,
              policy change history. RPC Node Mode provides query-only access with no staking
              requirement, relaxed rate limits, and WebSocket subscriptions for real-time event
              streaming &mdash; ideal for regulatory monitoring infrastructure.
            </p>
          </section>

          {/* ── 11. Enterprise Integration Architecture ── */}
          <section id="enterprise-integration" className="mb-20">
            <h2>11. Enterprise Integration Architecture</h2>

            <h3>11.1 .NET Native Integration</h3>
            <p>
              Basalt is built on .NET 9 Native AOT. For enterprises with existing .NET infrastructure
              (ERPs, CRMs, internal services), integration is direct: NuGet packages, type-safe
              contract interfaces with IntelliSense, shared cryptographic libraries (Ed25519, BLAKE3,
              BLS12-381), gRPC + REST APIs, and familiar tooling (Visual Studio, Rider, .NET CLI).
            </p>

            <h3>11.2 Permissionable Subnets</h3>
            <p>
              Enterprises requiring higher throughput or data privacy can operate Basalt subnets:
            </p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Subnet Type</th>
                    <th>Validators</th>
                    <th>TPS</th>
                    <th>Finality</th>
                    <th>Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Public mainnet</td><td>100</td><td>~2,000</td><td>4s</td><td>Public token listing, secondary market</td></tr>
                  <tr><td>Enterprise subnet</td><td>21</td><td>~5,000</td><td>2s</td><td>Consortium settlement, institutional trading</td></tr>
                  <tr><td>Private subnet</td><td>7</td><td>~10,000</td><td>2s</td><td>Internal ledger, sensitive operations</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Subnets bridge to mainnet via BLAKE3 Merkle proof verification, enabling assets to flow
              between private and public environments while maintaining compliance policies on both
              sides.
            </p>

            <h3>11.3 Gas Economics for Enterprise</h3>
            <p>
              Basalt supports pre-purchased gas at fixed monthly rates for enterprise subnet
              operators: no gas price volatility, predictable operational costs, and the ability to
              abstract gas entirely from end users.
            </p>

            <h3>11.4 EVM Bridge</h3>
            <p>
              Basalt&apos;s EVM bridge enables bidirectional asset flow between Basalt and Ethereum
              via a lock/unlock pattern with BLAKE3 Merkle proof verification and M-of-N Ed25519
              multisig relayer. Assets arriving from Ethereum are subject to all Basalt compliance
              policies upon minting &mdash; enabling MiCA-compliant tokens on Basalt with liquidity
              access to Ethereum&apos;s DeFi ecosystem.
            </p>
          </section>

          {/* ── 12. Cross-Border Interoperability ── */}
          <section id="cross-border" className="mb-20">
            <h2>12. Cross-Border Interoperability</h2>

            <h3>12.1 MiCA Passporting via Sovereign Trust Chain</h3>
            <p>
              A CASP authorized by the AMF (France) is recognized on-chain across all EU member
              states. Token issuers can accept KYC credentials from any MiCA-authorized CASP,
              regardless of the issuing jurisdiction. The passporting relationship is encoded in the
              credential schema &mdash; the smart contract verifies that the issuer is accredited by{" "}
              <em>any</em> Tier 3 sovereign authority within the EU.
            </p>

            <h3>12.2 Non-EU Regulatory Integration</h3>
            <p>
              The Sovereign Trust Chain extends beyond the EU. Regulatory authorities from other
              jurisdictions can be onboarded via governance vote:
            </p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Jurisdiction</th>
                    <th>Authority</th>
                    <th>License Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>United Kingdom</td><td>FCA</td><td>MLR 2017 Registration</td></tr>
                  <tr><td>Switzerland</td><td>FINMA</td><td>SRO / IFDS</td></tr>
                  <tr><td>Singapore</td><td>MAS</td><td>PSOA License</td></tr>
                  <tr><td>UAE (Dubai)</td><td>VARA</td><td>VASP License</td></tr>
                  <tr><td>Hong Kong</td><td>SFC / HKMA</td><td>VATP License</td></tr>
                  <tr><td>Japan</td><td>JFSA</td><td>CAESP Registration</td></tr>
                  <tr><td>United States</td><td>FinCEN / State</td><td>MSB, MTSO</td></tr>
                </tbody>
              </table>
            </div>

            <h3>12.3 eIDAS 2.0 Alignment</h3>
            <p>
              Basalt&apos;s identity infrastructure aligns with the European Digital Identity
              Framework (eIDAS 2.0): Qualified Trust Service Providers (QTSPs) can register as Tier 2
              issuers, accreditation credentials conform to the QEAA format for legal recognition,
              and future integration with the EU Digital Identity Wallet (EUDI) is architecturally
              supported.
            </p>

            <h3>12.4 FATF Travel Rule</h3>
            <p>
              For cross-border transfers above the EUR 1,000 threshold, Basalt&apos;s ComplianceEngine
              enforces the FATF Travel Rule (Recommendation 16): originator and beneficiary
              information is attached as encrypted metadata (visible only to the sending CASP,
              receiving CASP, and regulators with decryption keys). Non-compliant transfers above the
              threshold are rejected by validators.
            </p>
          </section>

          {/* ── 13. Use Cases ── */}
          <section id="use-cases" className="mb-20">
            <h2>13. Use Cases</h2>

            <h3>13.1 EU Corporate Bond Issuance</h3>
            <p>
              A European investment bank issues tokenized corporate bonds on Basalt using BST-3525
              (slot per bond series, tokenId per certificate, value as remaining principal). KYC via
              ZK proofs enforces accredited investor verification. JurisdictionPolicy restricts to
              EU + UK + Switzerland. Automatic quarterly coupon distribution with on-chain audit trail.
              Secondary market trading via Caldera Fusion batch auctions. Issuer registered as Tier 2
              via BaFin accreditation.
            </p>

            <h3>13.2 Pan-European Real Estate Fund</h3>
            <p>
              A real estate fund tokenizes commercial properties across France, Germany, and the
              Netherlands using BST-3525 (each property is a slot). KYC required for all shareholders
              via passporting from any MiCA CASP. HoldingLimitPolicy caps individual ownership at 10%
              per property. Automatic monthly rent distribution. Enterprise subnet for privacy and
              throughput, bridged to mainnet for secondary market.
            </p>

            <h3>13.3 Carbon Credit Marketplace</h3>
            <p>
              A carbon credit exchange serves EU ETS participants using BST-3525 (slot per
              vintage/standard combination). Credits minted only by Tier 2+ certified bodies.
              Permanent retirement (burn) prevents double-counting. Caldera Fusion batch auctions
              provide transparent price discovery. Full provenance tracking from issuance to
              retirement, exportable for EU ETS reporting.
            </p>

            <h3>13.4 MiCA-Compliant Stablecoin</h3>
            <p>
              A European e-money institution issues a EUR-denominated stablecoin on Basalt using
              BST-20 with full PolicyEnforcer integration. 1:1 EUR backing with daily oracle
              attestation. ZK compliance proof required for minting. At-par redemption via Escrow.
              No yield on the base EMT token. FATF Travel Rule enforcement for transfers above
              EUR 1,000. White paper published on-chain via Governance contract.
            </p>

            <h3>13.5 Supply Chain Digital Product Passport</h3>
            <p>
              A manufacturer implements digital product passports (as required by upcoming EU
              regulation) using BST-721. Each supply chain step is recorded on-chain. IoT oracle
              integration for shipment tracking. Milestone-based escrow for trade finance. Each
              participant&apos;s identity verified via BST-VC from Tier 2 providers. Only BLAKE3
              hashes of personal data stored on-chain for GDPR compliance.
            </p>
          </section>

          {/* ── 14. Roadmap ── */}
          <section id="roadmap" className="mb-20">
            <h2>14. Roadmap</h2>

            <h3>Phase 1: Foundation (Complete)</h3>
            <ul>
              <li>Core compliance infrastructure: ComplianceEngine, PolicyEnforcer, 4 reference policies.</li>
              <li>ZK compliance: Groth16 verifier, ZkComplianceVerifier, nullifier tracking.</li>
              <li>Identity: SchemaRegistry, IssuerRegistry, BSTVCRegistry.</li>
              <li>Token standards: BST-20, BST-721, BST-1155, BST-3525, BST-4626.</li>
              <li>Caldera Fusion DEX with batch auctions and encrypted intents.</li>
              <li>EVM bridge with Merkle proof verification.</li>
            </ul>

            <h3>Phase 2: Sovereign Trust Chain (In Progress)</h3>
            <ul>
              <li>Governance-based onboarding of EU national competent authorities as Tier 3 issuers.</li>
              <li>Automated Tier 2 accreditation via BST-VC vouching.</li>
              <li>Revocation cascade via Sparse Merkle Tree.</li>
              <li>MiCA passporting support in credential verification.</li>
            </ul>

            <h3>Phase 3: RWA Contract Suite</h3>
            <ul>
              <li>Production-ready tokenized bond contract (BST-3525).</li>
              <li>Real estate fractionalization contract (BST-3525).</li>
              <li>Carbon credit marketplace with verifiable retirement.</li>
              <li>Invoice factoring with milestone-based escrow.</li>
              <li>Stablecoin CDP with MiCA EMT compliance.</li>
            </ul>

            <h3>Phase 4: Enterprise Tooling</h3>
            <ul>
              <li>NuGet SDK for enterprise .NET integration.</li>
              <li>Subnet deployment toolkit.</li>
              <li>Regulatory reporting dashboard (RPC Node with audit trail visualization).</li>
              <li>EVM bridge hardening (light-client verification).</li>
            </ul>

            <h3>Phase 5: eIDAS 2.0 Integration</h3>
            <ul>
              <li>QEAA-format credential support for QTSP onboarding.</li>
              <li>EUDI wallet compatibility.</li>
              <li>Cross-framework credential recognition (MiCA + eIDAS).</li>
              <li>National supervisory body onboarding (ANSSI, Bundesnetzagentur, AgID).</li>
            </ul>

            <h3>Phase 6: Global Regulatory Expansion</h3>
            <ul>
              <li>Non-EU sovereign authority onboarding (FCA, FINMA, MAS, VARA, SFC, JFSA, FinCEN).</li>
              <li>Multi-jurisdictional compliance profiles.</li>
              <li>Cross-chain compliance (Basalt compliance proofs verified on Ethereum via bridge).</li>
              <li>Regulatory sandbox integrations.</li>
            </ul>
          </section>

          {/* ── 15. Conclusion ── */}
          <section id="conclusion" className="mb-20">
            <h2>15. Conclusion</h2>
            <p>
              MiCA transforms the European crypto-asset landscape from regulatory ambiguity to legal
              certainty. For enterprises, this creates an unprecedented opportunity to tokenize
              real-world assets &mdash; bonds, real estate, carbon credits, commodities, invoices
              &mdash; within a clear legal framework. But legal certainty without technical capability
              is merely paperwork.
            </p>
            <p>
              Basalt provides the technical capability that MiCA demands. Compliance is not an
              afterthought or an application-layer concern &mdash; it is embedded in the protocol:
            </p>
            <ul>
              <li>
                <strong>Validator-enforced transfer policies</strong> ensure that compliance cannot be
                bypassed, regardless of how users interact with the chain.
              </li>
              <li>
                <strong>Zero-knowledge proofs</strong> resolve the privacy-compliance paradox: users
                prove regulatory status without revealing identity, satisfying both MiCA requirements
                and privacy expectations.
              </li>
              <li>
                <strong>The Sovereign Trust Chain</strong> bridges real-world regulatory structures
                onto the blockchain, enabling automated, decentralized accreditation of KYC providers
                rooted in actual EU competent authority registries.
              </li>
              <li>
                <strong>BST-3525 and BST-4626</strong> provide token models designed for financial
                instruments, not retrofitted from generic NFTs.
              </li>
              <li>
                <strong>Caldera Fusion batch auctions</strong> structurally eliminate MEV &mdash;
                addressing MiCA&apos;s market abuse prevention requirements at the consensus level.
              </li>
              <li>
                <strong>The audit trail</strong> produces regulatory reports on demand, in formats
                compatible with SOC2, ISO 27001, and national competent authority requirements.
              </li>
            </ul>
            <p>
              The result is an infrastructure where a European enterprise can tokenize assets, trade
              them on a public market, comply with MiCA across all 27 member states, and report to
              regulators &mdash; all on a single platform, in C#, with the same tools their
              engineering teams already use.
            </p>
            <p>MiCA sets the rules. Basalt provides the infrastructure to follow them.</p>
          </section>
        </article>
      </div>

      <Footer />
    </>
  );
}