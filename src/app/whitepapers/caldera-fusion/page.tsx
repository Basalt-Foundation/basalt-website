import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import WhitepaperToc from "@/components/WhitepaperToc";

export const metadata: Metadata = {
  title: "Caldera Fusion — Technical Whitepaper",
  description:
    "A protocol-native DEX with batch auctions, encrypted intents, concentrated liquidity, and competitive solver network for MEV elimination.",
  openGraph: {
    title: "Caldera Fusion — Technical Whitepaper",
    description:
      "A protocol-native DEX with batch auctions and encrypted intents for MEV elimination.",
    type: "article",
  },
};

const tocSections = [
  { id: "abstract", label: "Abstract" },
  { id: "introduction", label: "1. Introduction" },
  { id: "architecture", label: "2. Architecture" },
  { id: "amm", label: "3. Constant-Product AMM" },
  { id: "batch-auction", label: "4. Batch Auction" },
  { id: "order-book", label: "5. Order Book" },
  { id: "concentrated-liquidity", label: "6. Concentrated Liquidity" },
  { id: "encrypted-intents", label: "7. Encrypted Intents" },
  { id: "solver-network", label: "8. Solver Network" },
  { id: "dynamic-fees", label: "9. Dynamic Fees" },
  { id: "twap-oracle", label: "10. TWAP Oracle" },
  { id: "lp-token", label: "11. LP Token Standard" },
  { id: "governance", label: "12. Governance" },
  { id: "security", label: "13. Security Analysis" },
  { id: "gas-schedule", label: "14. Gas Schedule" },
  { id: "conclusion", label: "15. Conclusion" },
  { id: "references", label: "References" },
];

export default function CalderaFusionWhitepaper() {
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
      <header className="relative overflow-hidden border-b border-white/5 px-6 pt-28 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(33,95%,50%)]/[0.04] blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[hsl(33,95%,55%)]">
            Technical Whitepaper
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-[hsl(33,95%,55%)] via-[hsl(20,90%,45%)] to-[hsl(33,95%,50%)] bg-clip-text text-transparent">
              Caldera Fusion
            </span>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-gray-400">
            A Protocol-Native DEX with Batch Auctions and Encrypted Intents
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>Basalt Foundation</span>
            <span className="text-white/20">|</span>
            <span>January 2026</span>
            <span className="text-white/20">|</span>
            <a
              href="https://caldera.basalt.foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[hsl(33,95%,55%)] transition-colors hover:text-white"
            >
              caldera.basalt.foundation &rarr;
            </a>
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
              Caldera Fusion is a decentralized exchange embedded directly into the Basalt Layer 1
              blockchain&apos;s execution layer. Unlike smart contract-based DEXes that inherit the MEV
              vulnerabilities of their host chains, Caldera Fusion operates as a first-class protocol
              feature with consensus-level batch auctions that eliminate front-running by design. The
              system combines four complementary mechanisms: constant-product AMM pools for passive
              liquidity, a limit order book for active market-making, concentrated liquidity positions
              for capital efficiency, and encrypted swap intents via EC-ElGamal threshold cryptography
              for information-theoretic MEV protection. A competitive solver network optimizes batch
              settlements for maximum user surplus. All operations execute directly against the Merkle
              state trie, providing atomic settlement, Merkle proof support, and RocksDB persistence
              without contract dispatch overhead.
            </p>
          </section>

          {/* ── 1. Introduction ── */}
          <section id="introduction" className="mb-20">
            <h2>1. Introduction</h2>

            <h3>1.1 The MEV Problem</h3>
            <p>
              Miner Extractable Value (MEV) represents the profit that block producers can extract by
              manipulating transaction ordering. On smart contract-based DEXes, this manifests as
              front-running, sandwich attacks, and just-in-time (JIT) liquidity manipulation.
              Conservative estimates place MEV extraction on Ethereum at over $600M annually,
              representing a direct tax on users.
            </p>
            <p>
              The root cause is architectural: when swaps execute sequentially and transaction ordering
              determines execution price, the party controlling ordering (the block producer) has an
              inherent advantage. Band-aid solutions (private mempools, MEV-share, flashbots)
              redistribute MEV rather than eliminating it.
            </p>

            <h3>1.2 Design Philosophy</h3>
            <p>
              Caldera Fusion eliminates MEV through a structural guarantee: all swap intents within a
              block are settled at a uniform clearing price determined by aggregate supply and demand.
              Individual transaction ordering within a batch has no effect on execution price. Combined
              with encrypted intents that prevent information leakage before settlement, the system
              provides the strongest MEV protection available on any production blockchain.
            </p>
            <p>The DEX operates at the protocol level rather than as a smart contract, providing several advantages:</p>
            <ul>
              <li><strong>No reentrancy risk:</strong> Direct state modification without contract dispatch</li>
              <li><strong>Atomic settlement:</strong> Batch results applied as a single state transition</li>
              <li><strong>Merkle proof support:</strong> DEX state lives in the main state trie, enabling light client verification</li>
              <li><strong>No dispatch overhead:</strong> Operations bypass the contract runtime entirely</li>
            </ul>
          </section>

          {/* ── 2. Architecture ── */}
          <section id="architecture" className="mb-20">
            <h2>2. Architecture</h2>

            <h3>2.1 System Address</h3>
            <p>
              All DEX state lives at a fixed system address (<code>0x...1009</code>) within the main
              state trie. This means DEX data is covered by the same Merkle root as account balances and
              contract storage, enabling unified state proofs.
            </p>

            <h3>2.2 Execution Phases</h3>
            <p>Transaction processing for each block proceeds in three phases:</p>
            <p>
              <strong>Phase A (Immediate):</strong> Pool creation, liquidity operations, limit orders,
              LP token transfers, and administrative actions execute sequentially as standard
              transactions.
            </p>
            <p>
              <strong>Phase B (Batch):</strong> Swap intents (both plaintext and encrypted) are
              collected into a batch. Encrypted intents are decrypted via threshold reconstruction.
              The batch auction solver computes the uniform clearing price. External solvers compete
              to optimize settlement.
            </p>
            <p>
              <strong>Phase C (Settlement):</strong> The winning solution is applied atomically: fills
              are executed, reserves are updated, TWAP accumulators are advanced, and solver rewards
              are distributed.
            </p>

            <h3>2.3 State Schema</h3>
            <p>DEX state is organized by 1-byte prefixes within 32-byte storage keys:</p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Prefix</th>
                    <th>Data</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>0x01</td><td>Pool metadata</td><td>Token addresses, fee tier (immutable)</td></tr>
                  <tr><td>0x02</td><td>Pool reserves</td><td>Reserve0, Reserve1, totalSupply, kLast</td></tr>
                  <tr><td>0x03</td><td>LP balances</td><td>Per-address LP share balances</td></tr>
                  <tr><td>0x04</td><td>Limit orders</td><td>Order details and remaining amounts</td></tr>
                  <tr><td>0x05</td><td>TWAP accumulators</td><td>Cumulative price data</td></tr>
                  <tr><td>0x09</td><td>Pool lookup</td><td>Canonical pair hash to pool ID</td></tr>
                  <tr><td>0x0A</td><td>Tick info</td><td>Concentrated liquidity tick data</td></tr>
                  <tr><td>0x0B</td><td>Positions</td><td>Concentrated liquidity positions</td></tr>
                  <tr><td>0x0C</td><td>Concentrated state</td><td>SqrtPrice, currentTick, totalLiquidity</td></tr>
                  <tr><td>0x0E</td><td>TWAP snapshots</td><td>Per-block accumulator values</td></tr>
                  <tr><td>0x0F</td><td>Tick bitmap</td><td>256-bit words for tick initialization</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              All integers are big-endian except UInt256 values (little-endian). Binary serialization
              throughout, no reflection, fully AOT-safe.
            </p>
          </section>

          {/* ── 3. Constant-Product AMM ── */}
          <section id="amm" className="mb-20">
            <h2>3. Constant-Product AMM</h2>

            <h3>3.1 Invariant</h3>
            <p>
              Pools maintain the constant-product invariant <code>k = reserve0 * reserve1</code>.
              Swaps preserve this invariant minus fees.
            </p>
            <p><strong>Swap formula (given input amount):</strong></p>
            <pre>
{`amountOut = (amountIn * (10000 - feeBps) * reserveOut) /
            (reserveIn * 10000 + amountIn * (10000 - feeBps))`}
            </pre>

            <h3>3.2 Fee Tiers</h3>
            <p>Four fee tiers are supported, selected at pool creation:</p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>Fee</th>
                    <th>Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1 bps</td><td>0.01%</td><td>Stablecoin pairs</td></tr>
                  <tr><td>5 bps</td><td>0.05%</td><td>Correlated assets</td></tr>
                  <tr><td>30 bps</td><td>0.30%</td><td>Standard pairs (default)</td></tr>
                  <tr><td>100 bps</td><td>1.00%</td><td>Exotic/volatile pairs</td></tr>
                </tbody>
              </table>
            </div>

            <h3>3.3 Liquidity Provision</h3>
            <p><strong>First deposit:</strong> <code>LP_shares = sqrt(amount0 * amount1) - 1000</code></p>
            <p>
              A minimum of 1,000 LP shares are permanently locked at the zero address to prevent
              first-depositor manipulation.
            </p>
            <p><strong>Subsequent deposits:</strong></p>
            <pre>
{`LP_shares = min(
    amount0 * totalSupply / reserve0,
    amount1 * totalSupply / reserve1
)`}
            </pre>

            <h3>3.4 Pool Creation Rate Limiting</h3>
            <p>
              To prevent DoS via mass pool creation, a governance-configurable limit (default 10)
              restricts the number of pools that can be created per block.
            </p>
          </section>

          {/* ── 4. Batch Auction ── */}
          <section id="batch-auction" className="mb-20">
            <h2>4. Batch Auction</h2>

            <h3>4.1 Maximum-Volume Clearing</h3>
            <p>
              The batch auction computes a uniform clearing price that maximizes total matched volume
              across all intents and orders.
            </p>
            <p><strong>Algorithm:</strong></p>
            <ol>
              <li>Collect all swap intents (plaintext and decrypted) and active limit orders for the pool.</li>
              <li>Filter expired intents (deadline &lt; current block).</li>
              <li>Enumerate critical prices: all intent limit prices, all order prices, and the AMM spot price.</li>
              <li>
                For each critical price P:
                <ul>
                  <li>Compute aggregate buy volume (intents and orders willing to buy at price &le; P)</li>
                  <li>Compute aggregate sell volume (intents, orders, and AMM liquidity available at price &ge; P)</li>
                  <li>Matched volume = min(buy volume, sell volume)</li>
                </ul>
              </li>
              <li>Select the price P* that maximizes matched volume. Ties broken by highest price (benefits LPs).</li>
              <li>Generate fills at P* for all participating intents and orders.</li>
            </ol>

            <h3>4.2 Price Representation</h3>
            <p>
              All prices use fixed-point arithmetic with denominator 2<sup>64</sup>, providing 18+
              decimal digits of precision without floating-point. Example: a price of 1.5 is stored
              as <code>1.5 * 2^64 = 27,670,116,110,564,327,424</code>.
            </p>

            <h3>4.3 AMM as Liquidity of Last Resort</h3>
            <p>
              After peer-to-peer matching at the clearing price, residual demand or supply is routed
              through the AMM. The AMM&apos;s contribution is computed from the constant-product
              formula. For concentrated liquidity pools, a read-only tick-walking simulation
              (<code>SimulateSwap</code>) computes available output without mutating state.
            </p>

            <h3>4.4 MEV Elimination Properties</h3>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Attack Vector</th>
                    <th>Defense</th>
                    <th>Mechanism</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Front-running</td><td>Uniform clearing price</td><td>Order within batch does not affect execution price</td></tr>
                  <tr><td>Sandwich</td><td>Batch settlement</td><td>All intents settle simultaneously</td></tr>
                  <tr><td>Backrunning</td><td>Aggregate pricing</td><td>Individual actions do not move price</td></tr>
                  <tr><td>JIT liquidity</td><td>Pre-batch lockout</td><td>No liquidity changes within batch window</td></tr>
                  <tr><td>Information leakage</td><td>Encrypted intents</td><td>EC-ElGamal threshold encryption</td></tr>
                  <tr><td>Proposer extraction</td><td>Solver competition</td><td>Multiple solvers compete; best surplus wins</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── 5. Order Book ── */}
          <section id="order-book" className="mb-20">
            <h2>5. Order Book</h2>

            <h3>5.1 Limit Orders</h3>
            <p>Users can place persistent limit orders that participate in future batch auctions:</p>
            <ul>
              <li><strong>Buy orders:</strong> Specify maximum price and token0 amount to acquire</li>
              <li><strong>Sell orders:</strong> Specify minimum price and token0 amount to sell</li>
              <li><strong>Expiry:</strong> Orders expire after a specified block number</li>
              <li><strong>Cancellation:</strong> Owner can cancel at any time, recovering escrowed tokens</li>
            </ul>

            <h3>5.2 Integration with Batch Auction</h3>
            <p>
              Limit orders are included alongside swap intents when computing the clearing price.
              Orders whose limit price is satisfied by the clearing price are filled at the uniform
              clearing price, not their individual limit prices. This ensures that all participants
              receive the same price regardless of whether they submitted a market intent or a limit
              order.
            </p>

            <h3>5.3 Order Indexing</h3>
            <p>
              Orders are stored in a per-pool linked list (head pointer at prefix <code>0x10</code>,
              next pointers at prefix <code>0x11</code>) with O(1) insertion and bounded traversal
              (10,000 orders per pool per batch scan).
            </p>
          </section>

          {/* ── 6. Concentrated Liquidity ── */}
          <section id="concentrated-liquidity" className="mb-20">
            <h2>6. Concentrated Liquidity</h2>

            <h3>6.1 Tick-Based Positions</h3>
            <p>
              Liquidity providers can concentrate their liquidity within specific price ranges,
              improving capital efficiency. Each position specifies a lower tick and upper tick
              (inclusive/exclusive), and liquidity is only active when the current price falls within
              the range.
            </p>
            <p><strong>Tick formula:</strong></p>
            <pre>
{`sqrt_ratio = 1.0001 ^ tick
sqrtPriceX96 = sqrt_ratio * 2^96`}
            </pre>
            <p>
              Tick bounds: [-887272, 887272], ensuring sqrtPriceX96 stays within safe Q64.96
              fixed-point bounds.
            </p>

            <h3>6.2 Position Lifecycle</h3>
            <p>
              <strong>Mint:</strong> Provider specifies pool, tick range, and desired token amounts.
              The system computes required liquidity, updates tick states and the tick bitmap, and
              stores the position.
            </p>
            <p>
              <strong>Burn:</strong> Provider specifies liquidity to remove. Accrued fees since the
              last update are computed and added to <code>TokensOwed</code>. If fully burned, the
              position is deleted.
            </p>
            <p>
              <strong>Collect fees:</strong> Fees accrue proportionally to liquidity within the active
              range. Fee growth is tracked per-tick, and each position stores its last-observed fee
              growth to compute owed amounts:
            </p>
            <pre>
{`FeesOwed = Liquidity * (FeeGrowthInside_now - FeeGrowthInside_last)`}
            </pre>

            <h3>6.3 Tick Bitmap</h3>
            <p>
              A space-efficient bitmap (256-bit words indexed by <code>wordPos = tick &gt;&gt; 8</code>)
              tracks which ticks have been initialized with liquidity. This enables O(1) lookup and
              efficient traversal during swaps.
            </p>
          </section>

          {/* ── 7. Encrypted Intents ── */}
          <section id="encrypted-intents" className="mb-20">
            <h2>7. Encrypted Intents</h2>

            <h3>7.1 Threat Model</h3>
            <p>
              Even with batch auctions, information leakage remains a concern: if a proposer can see
              pending swap intents before committing the batch, they can adjust their own positions or
              selectively include/exclude intents. Encrypted intents eliminate this vector entirely.
            </p>

            <h3>7.2 Encryption Scheme</h3>
            <p>
              Caldera Fusion uses EC-ElGamal combined with AES-256-GCM, providing IND-CCA2 semantic
              security with threshold decryption.
            </p>
            <p><strong>Encryption (user-side):</strong></p>
            <ol>
              <li>Generate random scalar r (masked: <code>r[0] &amp;= 0x3F</code>)</li>
              <li>Compute ephemeral public key: <code>C1 = r * G1</code> (48 bytes, compressed BLS12-381 G1)</li>
              <li>Derive shared point: <code>SharedPoint = r * GPK</code> (group public key from DKG)</li>
              <li>Derive AES key: <code>symKey = BLAKE3(&quot;basalt-ecies-v1&quot; || SharedPoint)</code> (32 bytes)</li>
              <li>Generate random 12-byte GCM nonce</li>
              <li>Encrypt intent payload: <code>(ciphertext, tag) = AES-256-GCM(intent, symKey, nonce)</code></li>
            </ol>
            <p><strong>Transaction format:</strong> <code>[8B epoch][48B C1][12B nonce][114B ciphertext][16B tag]</code> (198 bytes total)</p>

            <h3>7.3 Threshold Decryption</h3>
            <p>
              The validator set performs Distributed Key Generation (Feldman VSS) to generate a group
              secret <code>s</code> shared among validators. No single validator knows the full secret.
              During Phase B, the block proposer reconstructs <code>s</code> from validator shares and
              decrypts all encrypted intents. Decrypted intents are merged with plaintext intents for
              batch settlement.
            </p>

            <h3>7.4 Security Properties</h3>
            <ul>
              <li><strong>Confidentiality:</strong> Only the reconstructed group secret can decrypt; no individual validator can read intents alone</li>
              <li><strong>Authentication:</strong> GCM authentication tag prevents intent tampering</li>
              <li><strong>Non-repudiation:</strong> The sender&apos;s Ed25519 signature on the transaction proves submission</li>
              <li><strong>Forward secrecy:</strong> Each intent uses a fresh random scalar r; compromising one intent does not reveal others</li>
            </ul>
          </section>

          {/* ── 8. Solver Network ── */}
          <section id="solver-network" className="mb-20">
            <h2>8. Solver Network</h2>

            <h3>8.1 Competitive Settlement</h3>
            <p>
              External solvers compete to optimize batch settlements. Each solver receives the batch
              of intents and submits a signed solution specifying:
            </p>
            <ul>
              <li>Clearing price per pool</li>
              <li>Fill amounts per intent</li>
              <li>AMM routing quantities</li>
            </ul>

            <h3>8.2 Scoring: Surplus Maximization</h3>
            <p>Solutions are scored by total user surplus:</p>
            <pre>
{`Surplus = sum(fill.AmountOut - intent.MinAmountOut) for all fills`}
            </pre>
            <p>
              The solution with the highest surplus wins. Ties are broken by earliest submission
              timestamp. This mechanism ensures that solvers are incentivized to find the best possible
              execution for users, not to extract value.
            </p>

            <h3>8.3 Solver Rewards</h3>
            <p>Winning solvers receive a percentage of AMM fees generated by the batch:</p>
            <pre>
{`reward = (AmmVolume * feeBps / 10000) * SolverRewardBps / 10000`}
            </pre>
            <p>
              Default <code>SolverRewardBps</code> is 500 (5% of AMM fees), governance-configurable.
              Solver reputation is tracked: repeated settlement reverts increment a revert counter
              that degrades selection priority.
            </p>

            <h3>8.4 Fallback</h3>
            <p>
              When no external solvers are registered or all solutions are invalid, the built-in{" "}
              <code>BatchAuctionSolver</code> computes the settlement. No solver reward is paid in
              fallback mode.
            </p>
          </section>

          {/* ── 9. Dynamic Fees ── */}
          <section id="dynamic-fees" className="mb-20">
            <h2>9. Dynamic Fees</h2>

            <h3>9.1 Volatility-Responsive Pricing</h3>
            <p>
              The fee charged on swaps adjusts dynamically based on price volatility, measured as the
              deviation between the current spot price and the TWAP:
            </p>
            <pre>
{`volatilityBps = |spotPrice - twap| / twap * 10000

if volatilityBps <= threshold:
    effectiveFee = baseFee
else:
    excess = volatilityBps - threshold
    effectiveFee = baseFee + excess * growthFactor * baseFee / threshold
    effectiveFee = clamp(effectiveFee, minFee, maxFee)`}
            </pre>

            <h3>9.2 Default Parameters</h3>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Value</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>VolatilityThreshold</td><td>100 bps (1%)</td><td>Deviation that triggers fee increase</td></tr>
                  <tr><td>GrowthFactor</td><td>2</td><td>Fee doubles per threshold multiple</td></tr>
                  <tr><td>MaxFee</td><td>500 bps (5%)</td><td>Fee cap</td></tr>
                  <tr><td>MinFee</td><td>1 bps (0.01%)</td><td>Fee floor</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              This protects liquidity providers during volatile periods by increasing the cost of
              trading when prices are moving rapidly, while keeping fees minimal during stable
              conditions.
            </p>
          </section>

          {/* ── 10. TWAP Oracle ── */}
          <section id="twap-oracle" className="mb-20">
            <h2>10. TWAP Oracle</h2>

            <h3>10.1 Design</h3>
            <p>
              Each pool maintains a Time-Weighted Average Price oracle using cumulative price
              accumulators. Per-block snapshots are stored at prefix <code>0x0E</code>, enabling O(1)
              windowed queries:
            </p>
            <pre>
{`TWAP = (accumulator[end] - accumulator[start]) / (block[end] - block[start])`}
            </pre>

            <h3>10.2 Block Header Serialization</h3>
            <p>
              TWAP data is serialized into the block header&apos;s ExtraData field (up to 256 bytes):
            </p>
            <pre>
{`Per pool entry (72 bytes): [8B poolId][32B clearingPrice][32B twap]`}
            </pre>
            <p>
              This enables light clients to verify price data without processing the full state trie,
              providing manipulation-resistant price feeds for external contracts and applications.
            </p>

            <h3>10.3 Window Configuration</h3>
            <p>
              Default window: 7,200 blocks (~4 hours at 2-second block time).
              Governance-configurable via the <code>TwapWindowBlocks</code> parameter.
            </p>
          </section>

          {/* ── 11. LP Token Standard ── */}
          <section id="lp-token" className="mb-20">
            <h2>11. LP Token Standard</h2>

            <h3>11.1 BST-20 Compatibility</h3>
            <p>
              LP shares follow the BST-20 interface with transfer, approve, and transferFrom
              operations. LP balances are stored per-pool per-address, and allowances use a BLAKE3
              hash of (owner || spender) for compact storage.
            </p>

            <h3>11.2 BST-20 Token Integration</h3>
            <p>
              The DEX supports trading any BST-20 token pair. Token transfers during swaps are
              executed via cross-contract calls to the token contracts. Native BSLT (represented by
              the zero address) uses direct account balance modification without contract dispatch.
              Failed token transfers return a specific error code (10021) to distinguish from DEX
              logic failures.
            </p>
          </section>

          {/* ── 12. Governance ── */}
          <section id="governance" className="mb-20">
            <h2>12. Governance and Emergency Controls</h2>

            <h3>12.1 Emergency Pause</h3>
            <p>
              An admin-controlled pause mechanism (transaction type 19) halts all DEX operations.
              When paused, all operations (types 7-18) return error 10023. This provides a circuit
              breaker for critical vulnerabilities or market-wide events.
            </p>

            <h3>12.2 Governance Parameters</h3>
            <p>Four parameters are overridable on-chain via transaction type 20:</p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Parameter</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>0x01</td><td>SolverRewardBps</td><td>500</td><td>Solver reward as % of AMM fees</td></tr>
                  <tr><td>0x02</td><td>MaxIntentsPerBatch</td><td>500</td><td>Maximum swap intents per batch</td></tr>
                  <tr><td>0x03</td><td>TwapWindowBlocks</td><td>7,200</td><td>Oracle averaging window</td></tr>
                  <tr><td>0x04</td><td>MaxPoolCreationsPerBlock</td><td>10</td><td>Pool creation rate limit</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Parameters follow a fallback chain: governance override if set, otherwise chain
              parameter default.
            </p>
          </section>

          {/* ── 13. Security Analysis ── */}
          <section id="security" className="mb-20">
            <h2>13. Security Analysis</h2>

            <h3>13.1 Arithmetic Safety</h3>
            <p>
              All arithmetic uses checked operations (<code>UInt256.CheckedAdd</code>,{" "}
              <code>FullMath.MulDiv</code>) to prevent overflow. Concentrated liquidity values are
              validated to fit within <code>long</code> bounds. Fixed-point price representation
              (2<sup>64</sup> denominator) avoids floating-point entirely.
            </p>

            <h3>13.2 State Integrity</h3>
            <p>
              As a protocol-native feature (not a smart contract), the DEX is not subject to
              reentrancy attacks. All state changes within a batch are applied atomically. The
              linked-list order scan is bounded at 10,000 entries per pool to prevent gas exhaustion.
            </p>

            <h3>13.3 Cryptographic Guarantees</h3>
            <p>
              Encrypted intents use EC-ElGamal on BLS12-381 with AES-256-GCM authenticated
              encryption. The threshold DKG ensures that no single validator can decrypt intents
              independently. The BLAKE3-derived symmetric key provides domain separation
              (<code>&quot;basalt-ecies-v1&quot;</code> prefix).
            </p>
          </section>

          {/* ── 14. Gas Schedule ── */}
          <section id="gas-schedule" className="mb-20">
            <h2>14. Gas Schedule</h2>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Operation</th>
                    <th>Gas Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Create pool</td><td>100,000</td></tr>
                  <tr><td>Add liquidity</td><td>80,000</td></tr>
                  <tr><td>Remove liquidity</td><td>80,000</td></tr>
                  <tr><td>Swap intent (batched)</td><td>80,000</td></tr>
                  <tr><td>Limit order</td><td>60,000</td></tr>
                  <tr><td>Cancel order</td><td>40,000</td></tr>
                  <tr><td>Transfer LP</td><td>40,000</td></tr>
                  <tr><td>Approve LP</td><td>30,000</td></tr>
                  <tr><td>Mint concentrated position</td><td>120,000</td></tr>
                  <tr><td>Burn concentrated position</td><td>100,000</td></tr>
                  <tr><td>Collect fees</td><td>60,000</td></tr>
                  <tr><td>Encrypted swap intent</td><td>100,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── 15. Conclusion ── */}
          <section id="conclusion" className="mb-20">
            <h2>15. Conclusion</h2>
            <p>
              Caldera Fusion represents a fundamentally different approach to decentralized exchange
              design. By embedding the DEX directly into the protocol&apos;s execution layer and
              using batch auctions with uniform clearing prices, it eliminates MEV as a structural
              property rather than attempting to mitigate it through economic incentives or trusted
              intermediaries.
            </p>
            <p>
              The combination of constant-product AMM, limit order book, concentrated liquidity, and
              encrypted intents provides a complete trading infrastructure that serves both passive
              liquidity providers and active market makers. The competitive solver network ensures
              that settlement quality improves over time as more sophisticated solvers enter the
              market, while the built-in fallback guarantees that the DEX functions even without
              external solvers.
            </p>
            <p>
              For the Basalt ecosystem, Caldera Fusion provides the price discovery and liquidity
              infrastructure necessary for a functioning token economy, with the same compliance
              guarantees that characterize the rest of the protocol: every swap is subject to the
              same policy hooks and ZK compliance checks as any other transaction on the network.
            </p>
          </section>

          {/* ── References ── */}
          <section id="references" className="mb-20">
            <h2>References</h2>
            <ol>
              <li>Daian, P. et al. (2020). Flash Boys 2.0: Frontrunning in Decentralized Exchanges. IEEE S&amp;P 2020. <a href="https://ieeexplore.ieee.org/document/9152675" target="_blank" rel="noopener noreferrer">[PDF]</a></li>
              <li>Adams, H. et al. (2021). Uniswap v3 Core. <a href="https://app.uniswap.org/whitepaper-v3.pdf" target="_blank" rel="noopener noreferrer">[PDF]</a></li>
              <li>Budish, E. et al. (2015). The High-Frequency Trading Arms Race: Frequent Batch Auctions as a Market Design Response. QJE 2015. <a href="https://academic.oup.com/qje/article/130/4/1547/1916146" target="_blank" rel="noopener noreferrer">[PDF]</a></li>
              <li>Feldman, P. (1987). A Practical Scheme for Non-interactive Verifiable Secret Sharing. FOCS 1987. <a href="https://www.cs.umd.edu/~gasarch/TOPICS/secretsharing/feldmanVSS.pdf" target="_blank" rel="noopener noreferrer">[PDF]</a></li>
              <li>Buterin, V. et al. (2019). EIP-1559: Fee Market Change for ETH 1.0 Chain. <a href="https://eips.ethereum.org/EIPS/eip-1559" target="_blank" rel="noopener noreferrer">[Link]</a></li>
              <li>Groth, J. (2016). On the Size of Pairing-based Non-interactive Arguments. EUROCRYPT 2016. <a href="https://eprint.iacr.org/2016/260.pdf" target="_blank" rel="noopener noreferrer">[PDF]</a></li>
            </ol>
          </section>
        </article>
      </div>

      <Footer />
    </>
  );
}
