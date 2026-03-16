import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import WhitepaperToc from "@/components/WhitepaperToc";

export const metadata: Metadata = {
  title: "Basalt — Technical Whitepaper",
  description:
    "A compliance-native Layer 1 blockchain on .NET 9 Native AOT. Zero-knowledge compliance, C# smart contracts, pipelined BFT consensus, and protocol-native DEX.",
  openGraph: {
    title: "Basalt — Technical Whitepaper",
    description:
      "A compliance-native Layer 1 blockchain on .NET 9 Native AOT.",
    type: "article",
  },
};

const tocSections = [
  { id: "abstract", label: "Abstract" },
  { id: "introduction", label: "1. Introduction" },
  { id: "architecture", label: "2. Architecture" },
  { id: "consensus", label: "3. Consensus" },
  { id: "cryptography", label: "4. Cryptography" },
  { id: "smart-contracts", label: "5. Smart Contracts" },
  { id: "token-standards", label: "6. Token Standards" },
  { id: "compliance", label: "7. Compliance" },
  { id: "policy-hooks", label: "8. Policy Hooks" },
  { id: "dex", label: "9. Caldera Fusion" },
  { id: "system-contracts", label: "10. System Contracts" },
  { id: "networking", label: "11. Networking" },
  { id: "storage", label: "12. Storage" },
  { id: "economics", label: "13. Economics" },
  { id: "testing", label: "14. Testing" },
  { id: "conclusion", label: "15. Conclusion" },
  { id: "references", label: "References" },
];

export default function BasaltWhitepaper() {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            Basalt
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/whitepapers" className="text-sm text-gray-400 transition-colors hover:text-white">
              Whitepapers
            </Link>
            <Link href="/" className="text-sm text-gray-400 transition-colors hover:text-white">
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
            Basalt
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-gray-400">
            A Compliance-Native Layer 1 Blockchain on .NET 9 Native AOT
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Basalt Foundation</span>
            <span className="text-white/20">|</span>
            <span>December 2025</span>
          </div>
        </div>
      </header>

      {/* ── Content ── */}
      <div className="mx-auto flex max-w-6xl gap-12 px-6 py-16">
        <WhitepaperToc sections={tocSections} />

        <article className="wp min-w-0 max-w-3xl">
          {/* ── Abstract ── */}
          <section id="abstract" className="mb-20">
            <h2>Abstract</h2>
            <p>
              Basalt is a Layer 1 blockchain built on .NET 9 with Native AOT (Ahead-of-Time)
              compilation, designed to bridge the gap between regulatory compliance and
              decentralized infrastructure. Rather than treating compliance as an afterthought
              bolted onto an existing chain, Basalt embeds zero-knowledge compliance verification,
              policy enforcement hooks, and verifiable credential infrastructure directly into its
              protocol. Smart contracts are written in C# with compile-time safety guaranteed by
              Roslyn static analyzers, dispatched through source-generated AOT-safe code with zero
              runtime reflection. The result is a high-performance blockchain where compliance is
              cryptographically enforced without sacrificing user privacy or developer experience.
            </p>
          </section>

          {/* ── 1. Introduction ── */}
          <section id="introduction" className="mb-20">
            <h2>1. Introduction</h2>

            <h3>1.1 The Compliance Trilemma</h3>
            <p>
              Blockchain projects face a recurring tension between three desirable properties:
            </p>
            <p>
              <strong>Privacy:</strong> Users expect that their personal data (identity,
              transaction history, location) is not exposed on a public ledger.
            </p>
            <p>
              <strong>Compliance:</strong> Regulators require that participants in financial
              systems are identified, sanctioned entities are excluded, and transactions are
              auditable.
            </p>
            <p>
              <strong>Decentralization:</strong> The system should not depend on a single trusted
              party to enforce rules, as this creates censorship vectors and single points of
              failure.
            </p>
            <p>
              Existing blockchains sacrifice at least one of these properties. Public chains like
              Ethereum provide privacy through pseudonymity and decentralization through
              permissionless validation, but offer no compliance guarantees. Permissioned chains
              like Hyperledger provide compliance through access control, but sacrifice
              decentralization. Privacy chains like Zcash provide strong privacy, but make
              compliance effectively impossible.
            </p>

            <h3>1.2 Basalt&apos;s Approach</h3>
            <p>
              Basalt resolves this trilemma by separating the <em>proof</em> of compliance from
              the <em>data</em> required for compliance. Users complete KYC verification off-chain
              with accredited providers and receive verifiable credentials (BST-VC). From these
              credentials, users generate zero-knowledge proofs that attest to specific properties
              (&quot;I am over 18&quot;, &quot;I am not on a sanctions list&quot;, &quot;I am a
              resident of an EU country&quot;) without revealing the underlying data.
            </p>
            <p>
              Smart contracts verify these ZK proofs on-chain. The contract knows that the user
              satisfies a regulatory requirement without learning who the user is or where they
              live. The credential issuer knows the user&apos;s identity but cannot see their
              on-chain activity. No single party has the full picture, yet compliance is
              cryptographically guaranteed.
            </p>
          </section>

          {/* ── 2. Architecture ── */}
          <section id="architecture" className="mb-20">
            <h2>2. Architecture Overview</h2>

            <h3>2.1 Technology Stack</h3>
            <p>
              Basalt is built entirely on .NET 9 with Native AOT compilation, producing
              self-contained binaries with no JIT overhead and deterministic execution. The choice
              of .NET is deliberate: it provides a mature, type-safe language (C#) for smart
              contract development, a high-performance runtime, and compatibility with the game
              engine ecosystem (Unity, Godot) where blockchain adoption is accelerating.
            </p>

            <h3>2.2 Layer Summary</h3>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Components</th>
                    <th>Key Properties</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Cryptography</td><td>BLAKE3, Ed25519, BLS12-381, Keccak-256, Groth16</td><td>Hardware-accelerated, AOT-safe</td></tr>
                  <tr><td>Consensus</td><td>Pipelined PBFT, epoch-based rotation</td><td>2s blocks, 4s finality, BFT</td></tr>
                  <tr><td>Execution</td><td>ManagedContractRuntime, source-generated dispatch</td><td>AOT-safe, sandbox-isolated</td></tr>
                  <tr><td>Storage</td><td>RocksDB, Merkle Patricia Trie, Flat State DB</td><td>O(1) reads, Merkle proofs</td></tr>
                  <tr><td>Network</td><td>TCP transport, Episub gossip, Kademlia DHT</td><td>Two-tier dissemination</td></tr>
                  <tr><td>Compliance</td><td>ZkComplianceVerifier, IssuerRegistry, BST-VC</td><td>ZK proofs, verifiable credentials</td></tr>
                  <tr><td>Application</td><td>7 token standards, 8 system contracts, 4 policies</td><td>Full DeFi and identity stack</td></tr>
                </tbody>
              </table>
            </div>

            <h3>2.3 Key Parameters</h3>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Mainnet</th>
                    <th>Testnet</th>
                    <th>Devnet</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Block time</td><td>2s</td><td>2s</td><td>2s</td></tr>
                  <tr><td>Epoch length</td><td>1,000 blocks</td><td>500 blocks</td><td>100 blocks</td></tr>
                  <tr><td>Validator set size</td><td>64</td><td>32</td><td>4</td></tr>
                  <tr><td>Min validator stake</td><td>100,000 BSLT</td><td>100,000 BSLT</td><td>1,000 BSLT</td></tr>
                  <tr><td>Unbonding period</td><td colSpan={3}>907,200 blocks (~21 days)</td></tr>
                  <tr><td>Block gas limit</td><td colSpan={3}>100,000,000</td></tr>
                  <tr><td>Max block size</td><td colSpan={3}>2 MB</td></tr>
                  <tr><td>Max txs/block</td><td colSpan={3}>10,000</td></tr>
                  <tr><td>Token decimals</td><td colSpan={3}>18</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── 3. Consensus ── */}
          <section id="consensus" className="mb-20">
            <h2>3. Consensus</h2>

            <h3>3.1 Pipelined PBFT</h3>
            <p>
              Basalt uses a pipelined variant of Practical Byzantine Fault Tolerance (PBFT) that
              allows multiple consensus rounds to overlap, reducing effective finality latency. The
              protocol tolerates up to f = floor((n-1)/3) Byzantine faults for n validators.
            </p>
            <p><strong>Round phases:</strong></p>
            <ol>
              <li><strong>PROPOSE:</strong> The leader for the current view broadcasts a block proposal.</li>
              <li><strong>PREPARE:</strong> Validators verify the proposal and broadcast PREPARE votes.</li>
              <li><strong>PRE-COMMIT:</strong> Once 2f+1 PREPARE votes are collected, validators broadcast PRE-COMMIT votes.</li>
              <li><strong>COMMIT:</strong> Once 2f+1 PRE-COMMIT votes are collected, the block is finalized.</li>
            </ol>
            <p>
              With a 2-second block time and pipelined rounds (up to 3 concurrent), finality is
              achieved in approximately 4 seconds.
            </p>

            <h3>3.2 Leader Selection</h3>
            <p>
              Leaders are selected per-view using a stake-weighted hash function:{" "}
              <code>BLAKE3(view || validator_address)</code> weighted by each validator&apos;s
              staked BSLT. This ensures that validators with more stake are proportionally more
              likely to propose blocks, while maintaining unpredictability.
            </p>

            <h3>3.3 Epoch-Based Validator Set</h3>
            <p>
              The validator set is rebuilt every epoch (1,000 blocks on mainnet). At each epoch
              boundary, the top validators by stake are selected (up to 64, constrained by the
              consensus bitmap), sorted by address, and assigned sequential indices. The{" "}
              <code>EpochManager</code> triggers this transition, transferring identity metadata
              (peer IDs, public keys, BLS keys) from the previous set to the new one.
            </p>

            <h3>3.4 Slashing</h3>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Offense</th>
                    <th>Penalty</th>
                    <th>Detection</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Double-signing</td><td>100% of stake</td><td>Two proposals for the same view</td></tr>
                  <tr><td>Extended inactivity</td><td>5% of stake</td><td>Below 50% participation for one epoch</td></tr>
                  <tr><td>Invalid block proposal</td><td>1% of stake</td><td>Block fails validation</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Slashed stake is burned (removed from supply). A <code>_minNextView</code> mechanism
              prevents same-view re-proposals after view changes, eliminating false double-sign
              detection.
            </p>
          </section>

          {/* ── 4. Cryptography ── */}
          <section id="cryptography" className="mb-20">
            <h2>4. Cryptographic Primitives</h2>

            <h3>4.1 Hash Functions</h3>
            <p>
              <strong>BLAKE3</strong> is the primary hash function, used for block hashes,
              transaction hashes, Merkle tree nodes, and content addressing. BLAKE3 was chosen for
              its parallelism (exploits SIMD), its streaming interface, and its performance: 3-4x
              faster than SHA-256 on modern hardware.
            </p>
            <p>
              <strong>Keccak-256</strong> is used exclusively for address derivation (public key
              to 20-byte address), maintaining compatibility with Ethereum&apos;s addressing
              scheme. Basalt uses a custom software implementation due to macOS lacking
              hardware-accelerated SHA3 support.
            </p>

            <h3>4.2 Signatures</h3>
            <p>
              <strong>Ed25519</strong> (via libsodium/NSec) is the primary signature scheme for
              transaction signing. Key sizes: 32-byte private key, 32-byte public key, 64-byte
              signature.
            </p>
            <p>
              <strong>BLS12-381</strong> (via Nethermind.Crypto.Bls/blst) is used for consensus
              signatures, enabling signature aggregation. Multiple validator signatures can be
              combined into a single 96-byte aggregate signature, reducing block header size and
              verification cost. Key sizes: 32-byte private key, 48-byte public key (G1), 96-byte
              signature (G2).
            </p>

            <h3>4.3 Zero-Knowledge Proofs</h3>
            <p>
              <strong>Groth16</strong> proofs are used for compliance verification. A Groth16
              proof is 128 bytes (3 elliptic curve points) and verifies in constant time (~2ms),
              making it practical for on-chain verification. The <code>ZkComplianceVerifier</code>{" "}
              contract verifies proofs against verification keys registered per schema in the{" "}
              <code>SchemaRegistry</code>.
            </p>
          </section>

          {/* ── 5. Smart Contracts ── */}
          <section id="smart-contracts" className="mb-20">
            <h2>5. Smart Contract Platform</h2>

            <h3>5.1 C# Contracts with Source Generation</h3>
            <p>
              Smart contracts are written in C# and compiled with .NET 9 Native AOT. The key
              constraint: <strong>no runtime reflection is allowed</strong>. This rules out
              traditional serialization, dependency injection, and dynamic dispatch patterns.
            </p>
            <p>
              Basalt solves this with Roslyn source generators that emit dispatch tables at compile
              time. The <code>[BasaltContract]</code> attribute on a partial class triggers the
              generator to produce an <code>IDispatchable.Dispatch()</code> method that maps
              FNV-1a selector hashes to method calls, with parameter deserialization code generated
              inline.
            </p>
            <pre>
{`[BasaltContract]
public partial class MyToken : BST20
{
    public void CustomMethod(byte[] recipient, UInt256 amount)
    {
        // Business logic
    }
}
// Source generator emits Dispatch() with selector routing`}
            </pre>

            <h3>5.2 Contract Isolation</h3>
            <p>
              Contracts execute within a <code>ContractAssemblyContext</code> that allow-lists
              specific assemblies, preventing access to file I/O, networking, or other system
              resources. Each contract receives an <code>IStorageProvider</code> that mediates all
              state access.
            </p>

            <h3>5.3 Storage Primitives</h3>
            <p>Contracts access state through three typed primitives:</p>
            <ul>
              <li><strong>StorageValue&lt;T&gt;</strong> - Single value storage (balances, counters, flags)</li>
              <li><strong>StorageMap&lt;K,V&gt;</strong> - Key-value mapping (address to balance, token ID to owner)</li>
              <li><strong>StorageList&lt;T&gt;</strong> - Indexed list (ordered collections, queues)</li>
            </ul>
            <p>
              All values are serialized with a tag-length-value scheme. The <code>UInt256</code>{" "}
              type (tag <code>0x0A</code>, 32 bytes LE) supports 256-bit arithmetic for token
              amounts, matching Ethereum&apos;s uint256 precision.
            </p>

            <h3>5.4 Contract Manifest</h3>
            <p>
              Deployed contracts are stored at key <code>0xFF01</code> in the state database with
              the format: <code>[0xBA][0x5A][2B type ID BE][constructor args]</code>. The magic
              bytes <code>0xBA5A</code> identify SDK contracts; the type ID maps to the{" "}
              <code>ContractRegistry</code> which instantiates the correct type.
            </p>

            <h3>5.5 Roslyn Analyzers</h3>
            <p>
              The SDK includes 12 Roslyn static analyzers that catch common smart contract errors
              at compile time:
            </p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr><th>ID</th><th>Rule</th><th>Severity</th></tr>
                </thead>
                <tbody>
                  <tr><td>BST001-008</td><td>Core contract safety (reentrancy, overflow, access control)</td><td>Error/Warning</td></tr>
                  <tr><td>BST009</td><td>Static call writes state</td><td>Error</td></tr>
                  <tr><td>BST010</td><td>Policy check after state mutation</td><td>Warning</td></tr>
                  <tr><td>BST011</td><td>Missing admin guard on policy management</td><td>Warning</td></tr>
                  <tr><td>BST012</td><td>Token contract missing policy enforcement</td><td>Info</td></tr>
                </tbody>
              </table>
            </div>

            <h3>5.6 Gas Schedule</h3>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr><th>Operation</th><th>Gas Cost</th></tr>
                </thead>
                <tbody>
                  <tr><td>Transfer</td><td>21,000</td></tr>
                  <tr><td>Contract deploy</td><td>500,000</td></tr>
                  <tr><td>Contract call</td><td>50,000</td></tr>
                  <tr><td>DEX pool creation</td><td>100,000</td></tr>
                  <tr><td>DEX swap</td><td>80,000</td></tr>
                  <tr><td>DEX liquidity add/remove</td><td>80,000</td></tr>
                  <tr><td>DEX limit order</td><td>60,000</td></tr>
                  <tr><td>DEX encrypted intent</td><td>100,000</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              The fee model follows EIP-1559 with a dynamic base fee. The base fee adjusts by up
              to 12.5% per block based on gas utilization. Tips go to the block proposer; the base
              fee is burned, creating deflationary pressure proportional to network usage.
            </p>
          </section>

          {/* ── 6. Token Standards ── */}
          <section id="token-standards" className="mb-20">
            <h2>6. Token Standards</h2>
            <p>
              Basalt implements seven token standards, each as a source-generated AOT-safe C#
              class:
            </p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr><th>Standard</th><th>Model</th><th>Type ID</th><th>Equivalent</th></tr>
                </thead>
                <tbody>
                  <tr><td>BST-20</td><td>Fungible token</td><td>0x0001</td><td>ERC-20</td></tr>
                  <tr><td>BST-721</td><td>Non-fungible token</td><td>0x0002</td><td>ERC-721</td></tr>
                  <tr><td>BST-1155</td><td>Multi-token</td><td>0x0003</td><td>ERC-1155</td></tr>
                  <tr><td>BST-3525</td><td>Semi-fungible token</td><td>0x0005</td><td>ERC-3525</td></tr>
                  <tr><td>BST-4626</td><td>Tokenized vault</td><td>0x0006</td><td>ERC-4626</td></tr>
                  <tr><td>BST-VC</td><td>Verifiable credentials</td><td>0x0007</td><td>W3C VC + eIDAS 2.0</td></tr>
                  <tr><td>BST-DID</td><td>Decentralized identity</td><td>0x0004</td><td>W3C DID</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              All token amounts use <code>UInt256</code> (256-bit unsigned integer) for precision.
              IDs (token IDs, slot IDs) remain <code>ulong</code> for gas efficiency.
            </p>
            <p>
              BST-3525 is particularly notable for game and financial asset modeling: each token
              has a slot (category) and a value (amount), enabling semi-fungible behavior where
              tokens in the same slot are fungible with each other but distinct from tokens in
              different slots.
            </p>
          </section>

          {/* ── 7. Compliance ── */}
          <section id="compliance" className="mb-20">
            <h2>7. Compliance Layer</h2>

            <h3>7.1 Six-Layer Architecture</h3>
            <p>The compliance system operates in six layers:</p>
            <ol>
              <li><strong>SchemaRegistry (0x...1006):</strong> Defines credential schemas (field names, types, verification keys).</li>
              <li><strong>IssuerRegistry (0x...1007):</strong> Registers and governs credential issuers with trust tiers (0-3).</li>
              <li><strong>BSTVCRegistry (type 0x0007):</strong> Anchors credential hashes on-chain. Credentials are stored off-chain.</li>
              <li><strong>SparseMerkleTree:</strong> Provides efficient revocation checking via inclusion proofs.</li>
              <li><strong>ZkComplianceVerifier:</strong> Verifies Groth16 proofs against registered verification keys.</li>
              <li><strong>ComplianceEngine:</strong> Orchestrates the above layers with hybrid checks.</li>
            </ol>

            <h3>7.2 Credential Lifecycle</h3>
            <ol>
              <li>A user completes KYC with an accredited provider (Tier 2 issuer).</li>
              <li>The provider issues a BST-VC credential with claims (age, jurisdiction, sanctions status).</li>
              <li>The credential&apos;s BLAKE3 hash is anchored on-chain via BSTVCRegistry.</li>
              <li>The user generates Groth16 ZK proofs from the credential for specific predicates.</li>
              <li>Smart contracts verify the proofs on-chain without learning the underlying data.</li>
              <li>If the issuer revokes the credential, it appears in the issuer&apos;s Sparse Merkle Tree revocation set.</li>
            </ol>

            <h3>7.3 Nullifier Anti-Correlation</h3>
            <p>
              To prevent linking multiple ZK proofs to the same user, each proof includes a
              nullifier derived from the credential and a domain separator. The compliance engine
              tracks used nullifiers to prevent double-spending while ensuring that proofs
              generated for different purposes cannot be correlated back to the same credential
              holder.
            </p>
          </section>

          {/* ── 8. Policy Hooks ── */}
          <section id="policy-hooks" className="mb-20">
            <h2>8. Policy Hooks</h2>

            <h3>8.1 Architecture</h3>
            <p>
              Policy hooks provide a composable, per-token compliance enforcement mechanism. Token
              contracts delegate transfer authorization to external policy contracts via the{" "}
              <code>PolicyEnforcer</code>:
            </p>
            <pre>
{`Token.Transfer(from, to, amount)
  |
  v
PolicyEnforcer.EnforceTransfer(from, to, amount)
  |
  +-- Policy 1: HoldingLimitPolicy.CheckTransfer()  -> allow/deny
  +-- Policy 2: LockupPolicy.CheckTransfer()        -> allow/deny
  +-- Policy 3: JurisdictionPolicy.CheckTransfer()   -> allow/deny
  +-- Policy 4: SanctionsPolicy.CheckTransfer()      -> allow/deny
  |
  v
All pass -> transfer proceeds
Any deny -> transaction reverts`}
            </pre>

            <h3>8.2 Reference Policies</h3>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr><th>Policy</th><th>Type ID</th><th>Purpose</th></tr>
                </thead>
                <tbody>
                  <tr><td>HoldingLimitPolicy</td><td>0x0008</td><td>Enforces maximum token balance per address</td></tr>
                  <tr><td>LockupPolicy</td><td>0x0009</td><td>Blocks transfers during time-based lockup periods</td></tr>
                  <tr><td>JurisdictionPolicy</td><td>0x000A</td><td>Whitelist/blacklist by registered jurisdiction</td></tr>
                  <tr><td>SanctionsPolicy</td><td>0x000B</td><td>Blocks sanctioned addresses from sending or receiving</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Policies are additive: token admins can register up to 16 policies per token, and
              all must approve a transfer. Policies are deployed as independent contracts, enabling
              reuse across multiple tokens.
            </p>

            <h3>8.3 Static Call Protection</h3>
            <p>
              Policy checks are executed as static calls (read-only). If a policy contract
              attempts to modify state during a check, the transaction reverts with &quot;Static
              call: state modification not allowed&quot;. This prevents malicious policies from
              exploiting the enforcement callback to manipulate token state.
            </p>
          </section>

          {/* ── 9. DEX ── */}
          <section id="dex" className="mb-20">
            <h2>9. Caldera Fusion DEX</h2>
            <p>
              Basalt includes a protocol-native decentralized exchange (Caldera Fusion) that
              operates at the consensus layer rather than as a smart contract. This provides
              stronger guarantees against MEV (Miner Extractable Value) and front-running.
            </p>

            <h3>9.1 Batch Auction</h3>
            <p>
              Instead of processing swaps individually (which enables front-running), Caldera
              Fusion collects swap intents during a solver window (500ms) and executes them as a
              batch at a uniform clearing price. This eliminates the ordering advantage that MEV
              searchers exploit on other chains.
            </p>

            <h3>9.2 Encrypted Intents</h3>
            <p>
              Users can submit swap intents encrypted with a threshold key shared among validators
              via DKG (Distributed Key Generation). The intent is only decrypted after the
              ordering is committed, making front-running cryptographically impossible.
            </p>

            <h3>9.3 TWAP Oracle</h3>
            <p>
              Each pool maintains a Time-Weighted Average Price oracle over a configurable window
              (7,200 blocks / ~4 hours on mainnet). The oracle data is stored in block headers,
              providing manipulation-resistant price feeds for other contracts.
            </p>

            <h3>9.4 Concentrated Liquidity</h3>
            <p>
              Liquidity providers can concentrate their liquidity within specific price ranges
              (tick-based), improving capital efficiency. Positions are represented as NFT-like
              objects with mint/burn/collect-fees operations.
            </p>
          </section>

          {/* ── 10. System Contracts ── */}
          <section id="system-contracts" className="mb-20">
            <h2>10. System Contracts</h2>
            <p>Eight system contracts are deployed at genesis:</p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr><th>Address</th><th>Contract</th><th>Purpose</th></tr>
                </thead>
                <tbody>
                  <tr><td>0x...1001</td><td>WBSLT</td><td>Wrapped native token (ERC-20 interface for BSLT)</td></tr>
                  <tr><td>0x...1002</td><td>BasaltNameService</td><td>Domain name registration and resolution</td></tr>
                  <tr><td>0x...1003</td><td>Governance</td><td>Stake-weighted quadratic voting, delegation, timelock</td></tr>
                  <tr><td>0x...1004</td><td>Escrow</td><td>Time-locked escrow for P2P transactions</td></tr>
                  <tr><td>0x...1005</td><td>StakingPool</td><td>Delegated staking, reward distribution</td></tr>
                  <tr><td>0x...1006</td><td>SchemaRegistry</td><td>ZK credential schema and verification key registry</td></tr>
                  <tr><td>0x...1007</td><td>IssuerRegistry</td><td>Trust-tiered issuer registry with SMT revocation</td></tr>
                  <tr><td>0x...1008</td><td>BridgeETH</td><td>EVM bridge with M-of-N multisig relayer verification</td></tr>
                </tbody>
              </table>
            </div>

            <h3>10.1 Governance</h3>
            <p>
              The Governance contract implements stake-weighted quadratic voting: a
              validator&apos;s voting power is the square root of their stake plus delegated power,
              preventing plutocratic dominance. Proposals require a 1,000 BSLT threshold to
              create, have a 216,000-block (~5 days) voting period, and execute after a
              432,000-block (~10 days) timelock. Quorum is 4% of total staked supply. Delegation
              is single-hop only.
            </p>

            <h3>10.2 EVM Bridge</h3>
            <p>
              The BridgeETH contract enables asset transfers between Basalt and Ethereum. Users
              lock BSLT on Basalt and receive wrapped BSLT on Ethereum (and vice versa). Security
              is provided by M-of-N Ed25519 multisig verification from a relayer set. The bridge
              supports pause/unpause, deposit lifecycle tracking (pending &#8594; confirmed &#8594;
              finalized), and replay protection via withdrawal hash verification.
            </p>
          </section>

          {/* ── 11. Networking ── */}
          <section id="networking" className="mb-20">
            <h2>11. Networking</h2>

            <h3>11.1 Transport</h3>
            <p>
              Basalt uses TCP with length-prefixed framing (4-byte big-endian length header, max
              16 MB per message). The message codec format is:{" "}
              <code>[1B MessageType][32B SenderId][8B Timestamp][payload]</code>. Maximum 200 total
              connections, 3 per IP.
            </p>

            <h3>11.2 Episub Gossip</h3>
            <p>Message dissemination uses Episub, a two-tier gossip protocol:</p>
            <ul>
              <li>
                <strong>Eager tier</strong> (6 peers target): Full message push with &lt;200ms
                latency target. Used for time-critical messages (consensus votes, block proposals).
              </li>
              <li>
                <strong>Lazy tier</strong> (12 peers target): IHAVE/IWANT protocol with &lt;600ms
                latency target. Reduces bandwidth for large messages while maintaining
                availability.
              </li>
            </ul>
            <p>
              Peers are dynamically promoted and demoted between tiers based on observed latency. A
              seen-message cache (200,000 entries, 2-minute TTL) prevents duplicate processing.
            </p>

            <h3>11.3 Kademlia DHT</h3>
            <p>
              Peer discovery uses a Kademlia distributed hash table with 256 buckets, k=20 bucket
              size, and alpha=3 concurrent lookups. Eclipse attack mitigation limits peers to 2 per
              /24 subnet per bucket, with 4 outbound-protected slots.
            </p>
          </section>

          {/* ── 12. Storage ── */}
          <section id="storage" className="mb-20">
            <h2>12. Storage</h2>

            <h3>12.1 State Database</h3>
            <p>State is stored in a two-layer architecture:</p>
            <p>
              <strong>FlatStateDb</strong> (top layer): In-memory dictionary caches for O(1)
              account and storage lookups. Write-through: every write goes to both the cache and
              the underlying trie. Persisted to RocksDB&apos;s <code>state</code> column family on
              shutdown.
            </p>
            <p>
              <strong>TrieStateDb</strong> (bottom layer): Modified Merkle Patricia Trie providing
              cryptographic state roots for consensus verification. Trie nodes are stored in
              RocksDB&apos;s <code>trie_nodes</code> column family.
            </p>

            <h3>12.2 RocksDB Column Families</h3>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr><th>Column Family</th><th>Purpose</th><th>Optimization</th></tr>
                </thead>
                <tbody>
                  <tr><td>state</td><td>Account state and contract storage</td><td>Bloom filters for point lookups</td></tr>
                  <tr><td>blocks</td><td>Block headers and full blocks</td><td>Point lookup by hash</td></tr>
                  <tr><td>receipts</td><td>Transaction receipts</td><td>Point lookup by tx hash</td></tr>
                  <tr><td>metadata</td><td>System metadata</td><td>Few keys</td></tr>
                  <tr><td>trie_nodes</td><td>Merkle trie nodes</td><td>128 MB write buffer</td></tr>
                  <tr><td>block_index</td><td>Block indexing</td><td>Sequential scan optimized</td></tr>
                  <tr><td>staking</td><td>Validator stakes and unbonding</td><td>Persistence across restarts</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── 13. Economics ── */}
          <section id="economics" className="mb-20">
            <h2>13. Economic Model</h2>

            <h3>13.1 Native Token</h3>
            <p>
              BSLT is the native token with 18 decimal places. It is used for transaction fees,
              staking collateral, governance voting, and DEX liquidity.
            </p>

            <h3>13.2 EIP-1559 Fee Market</h3>
            <p>Basalt implements EIP-1559 dynamic base fee pricing:</p>
            <ul>
              <li>
                <strong>Base fee</strong> adjusts by up to 12.5% per block based on gas
                utilization relative to the target (50% of block gas limit).
              </li>
              <li>
                <strong>Tip</strong> (priority fee) goes to the block proposer as an incentive for
                inclusion.
              </li>
              <li>
                <strong>Base fee is burned</strong>, creating deflationary pressure proportional to
                network usage.
              </li>
            </ul>
            <p>
              Transactions specify <code>MaxFeePerGas</code> and{" "}
              <code>MaxPriorityFeePerGas</code>. The effective gas price is{" "}
              <code>min(MaxFeePerGas, BaseFee + MaxPriorityFeePerGas)</code>.
            </p>

            <h3>13.3 Staking Economics</h3>
            <p>
              Validators must stake a minimum of 100,000 BSLT (mainnet). Stake is subject to a
              907,200-block (~21 day) unbonding period. Delegation is supported via the StakingPool
              system contract, with rewards distributed proportionally to stake.
            </p>
          </section>

          {/* ── 14. Testing ── */}
          <section id="testing" className="mb-20">
            <h2>14. Test Coverage</h2>
            <p>
              The Basalt codebase is covered by 2,868 tests across 16 test projects with zero
              failures. Test coverage spans all layers: core primitives, consensus rounds, epoch
              transitions, staking, slashing, VM execution, transaction processing, contract
              dispatch, transport, gossip, DHT, all token standards, system contracts, policy
              hooks, analyzers, EVM bridge, Merkle proofs, multisig, and full node integration
              tests.
            </p>
          </section>

          {/* ── 15. Conclusion ── */}
          <section id="conclusion" className="mb-20">
            <h2>15. Conclusion</h2>
            <p>
              Basalt demonstrates that compliance and decentralization are not inherently opposed.
              By embedding zero-knowledge compliance verification at the protocol level, providing
              compile-time safety through Roslyn analyzers, and implementing composable policy
              hooks for per-token enforcement, Basalt creates an infrastructure where regulatory
              requirements are cryptographically enforced without centralized gatekeepers or
              privacy sacrifices.
            </p>
            <p>
              The .NET 9 Native AOT foundation provides performance characteristics competitive
              with chains built on lower-level languages, while offering developers the
              productivity, type safety, and tooling ecosystem of C#. The protocol-native DEX
              eliminates MEV through batch auctions and encrypted intents. The EVM bridge connects
              Basalt to existing DeFi liquidity.
            </p>
            <p>
              Basalt is not a general-purpose blockchain competing on raw throughput. It is a
              compliance-native blockchain designed for the specific class of applications where
              regulatory alignment is a requirement rather than an afterthought: tokenized
              securities, regulated DeFi, identity verification, and game economies subject to
              gambling regulation.
            </p>
          </section>

          {/* ── References ── */}
          <section id="references" className="mb-20">
            <h2>References</h2>
            <ol>
              <li>Yin, M. et al. (2019). HotStuff: BFT Consensus with Linearity and Responsiveness. PODC 2019. <a href="https://dl.acm.org/doi/epdf/10.1145/3293611.3331591" target="_blank" rel="noopener noreferrer">[PDF]</a></li>
              <li>O&apos;Connor, S. et al. (2023). BLAKE3: One Function, Fast Everywhere. <a href="https://github.com/BLAKE3-team/BLAKE3-specs/blob/master/blake3.pdf" target="_blank" rel="noopener noreferrer">[PDF]</a></li>
              <li>Groth, J. (2016). On the Size of Pairing-based Non-interactive Arguments. EUROCRYPT 2016. <a href="https://eprint.iacr.org/2016/260.pdf" target="_blank" rel="noopener noreferrer">[PDF]</a></li>
              <li>Buterin, V. et al. (2019). EIP-1559: Fee Market Change for ETH 1.0 Chain. <a href="https://eips.ethereum.org/EIPS/eip-1559" target="_blank" rel="noopener noreferrer">[Link]</a></li>
              <li>W3C. (2024). Verifiable Credentials Data Model v2.0. <a href="https://www.w3.org/TR/vc-data-model-2.0/" target="_blank" rel="noopener noreferrer">[Link]</a></li>
              <li>Regulation (EU) 2023/1114 - Markets in Crypto-Assets (MiCA). <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32023R1114" target="_blank" rel="noopener noreferrer">[PDF]</a></li>
              <li>Regulation (EU) 2024/1183 - European Digital Identity Framework (eIDAS 2.0). <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=OJ:L_202401183" target="_blank" rel="noopener noreferrer">[PDF]</a></li>
              <li>Adams, H. et al. (2021). Uniswap v3 Core. <a href="https://app.uniswap.org/whitepaper-v3.pdf" target="_blank" rel="noopener noreferrer">[PDF]</a></li>
            </ol>
          </section>
        </article>
      </div>

      <Footer />
    </>
  );
}
