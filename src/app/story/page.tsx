import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Story - Basalt",
  description:
    "Why Basalt? Why Caldera? The geological metaphor behind a blockchain built to be the bedrock of European digital infrastructure.",
  openGraph: {
    title: "Our Story - Basalt",
    description:
      "The geological metaphor behind a blockchain built to be the bedrock of European digital infrastructure.",
    type: "article",
  },
};

export default function Story() {
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
      <header className="border-b border-white/5 px-6 pt-28 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#4a6fa5]">
            Our Story
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Built from the Earth Up
          </h1>
          <p className="text-lg leading-relaxed text-gray-400">
            Every name carries a reason. Ours comes from the rock beneath Europe -
            the most enduring foundation the continent has ever stood on.
          </p>
        </div>
      </header>

      {/* ── Content ── */}
      <main className="mx-auto max-w-3xl px-6 py-20">
        <article className="wp">

          {/* ── The Rock ── */}
          <section className="mb-24">
            <h2>Basalt</h2>
            <p>
              Basalt is the most abundant rock on Earth&apos;s surface. It forms the ocean floor. It
              builds volcanic islands. It is the literal bedrock of continents. When lava meets air or
              water, it cools rapidly - extreme heat and pressure producing something dense, ordered,
              and nearly indestructible.
            </p>
            <p>
              But the most remarkable thing about basalt is not its strength. It is its structure.
            </p>
            <p>
              When basalt cools under the right conditions, it fractures into perfectly hexagonal
              columns - tens of thousands of them, tessellated with geometric precision. No architect
              designed them. No blueprint specified the angles. Just physics and thermodynamics,
              producing order from chaos.
            </p>
            <p>
              That is what consensus does. Distributed nodes, each acting independently under
              protocol rules, producing deterministic agreement. Order from chaos. Structure from
              entropy. A foundation you can build on because the laws that created it are immutable.
            </p>
          </section>

          {/* ── European Basalt ── */}
          <section className="mb-24">
            <h2>European Bedrock</h2>
            <p>
              Europe is built on basalt.
            </p>
            <p>
              The 40,000 interlocking columns of the Giant&apos;s Causeway in Northern Ireland -
              formed 60 million years ago, still standing, still perfectly hexagonal. Fingal&apos;s
              Cave on the Scottish isle of Staffa, where basalt columns form a natural cathedral so
              precise that Mendelssohn composed a symphony after visiting it. The black cliffs of
              Vik in Iceland, where an entire island sits on a basalt foundation at the seam where
              tectonic plates pull apart.
            </p>
            <p>
              In the Auvergne, at the heart of France, ancient volcanic basalt plateaus shape the
              landscape of the Massif Central. In Germany, the basalt quarries of the Vogelsberg -
              one of the largest volcanic massifs in Central Europe - supplied the building material
              for roads, bridges, and foundations across the continent for centuries. In the Czech
              Republic, basalt columns rise from the forests of Bohemia. In Italy, Etna&apos;s lava
              flows have been cooling into basalt since before Rome was founded.
            </p>
            <p>
              The oldest Roman roads were paved with basalt. The harbor walls that protected
              Mediterranean trade were built on it. The cathedral foundations of medieval Europe rest
              on it. Generation after generation chose the same material for the same reason: it
              endures.
            </p>
            <p>
              We are building the digital infrastructure for Europe. We named it after the material
              Europe has always built its physical infrastructure on.
            </p>
          </section>

          {/* ── The Process ── */}
          <section className="mb-24">
            <h2>From Magma to Bedrock</h2>
            <p>
              A blockchain is a geological process compressed into seconds.
            </p>
            <p>
              Deep beneath the surface, raw material accumulates under pressure. Transactions gather
              in the mempool - unordered, unconfirmed, potential energy waiting to be released.
              Pressure builds with each new submission, each pending intent.
            </p>
            <p>
              Then: eruption. The block proposer fires. Validators align. In a single irreversible
              moment, the lava flows - transactions are ordered, executed, and committed. There is no
              going back. No reorganization. No probabilistic maybe. BasaltBFT provides absolute
              finality: once a block is committed, it is committed forever.
            </p>
            <p>
              The lava cools. State crystallizes. What was volatile and uncertain becomes permanent
              and immutable - layer after layer, block after block, the bedrock grows. And like the
              basalt columns of the Giant&apos;s Causeway, the structure that emerges is not imposed
              from above. It arises from the protocol itself - deterministic, geometric, inevitable.
            </p>
          </section>

          {/* ── The Caldera ── */}
          <section className="mb-24">
            <h2>Caldera</h2>
            <p>
              In 1600 BCE, the volcanic island of Thera erupted with a force that reshaped the
              Mediterranean. The explosion was so massive that the island collapsed into its own
              emptied magma chamber, leaving behind a vast, flooded crater - a caldera. Today, we
              call it Santorini. The white villages perched on its rim look down into the remnants
              of one of the most powerful geological events in European history.
            </p>
            <p>
              A caldera is not just a crater. It is the scar of transformation on a planetary scale.
              But before the eruption, it serves a different purpose entirely. It is the mixing
              chamber. Magma from different geological sources pools together, reaches thermal
              equilibrium, and combines into something new. Raw elements enter from every direction.
              They leave transformed.
            </p>
            <p>
              That is what Caldera Fusion does.
            </p>
            <p>
              Caldera Fusion is Basalt&apos;s protocol-native decentralized exchange. It is not a
              smart contract deployed on the chain - it is part of the chain itself, embedded in the
              execution layer with its own transaction types and a three-phase block production
              pipeline. Swap intents, limit orders, and liquidity positions flow into the caldera
              from every direction. Inside, they mix: a batch auction collects all orders within a
              block and settles them at a single uniform clearing price. No front-running. No
              sandwich attacks. No advantage to speed. Just supply and demand reaching equilibrium -
              the same way magma from different sources reaches thermal equilibrium in a volcanic
              chamber.
            </p>
            <p>
              And like the caldera itself, the process is sealed. Encrypted intents mean that no
              one - not validators, not searchers, not other traders - can see what is inside the
              chamber until the moment of settlement. The mixing happens in the dark. The result
              emerges in the light.
            </p>
            <p>
              The Minoan eruption of Thera reshaped Mediterranean civilization. Trade routes
              shifted. Power structures changed. New systems emerged from the aftermath. Caldera
              Fusion is, at a smaller scale, designed to do the same thing to financial
              infrastructure - eliminate the exploitative structures that exist today and replace
              them with something fairer, more transparent, and more resilient.
            </p>
          </section>

          {/* ── The Layers ── */}
          <section className="mb-24">
            <h2>Layers of Strata</h2>
            <p>
              Geologists read the history of the Earth in layers of rock. Each stratum tells a
              story - what erupted, when it cooled, what pressure shaped it. The basalt flows of
              the Deccan Traps in India, the Columbia River Plateau in North America, the North
              Atlantic Igneous Province that connects Scotland, Iceland, and Greenland - all of
              them are read layer by layer, each one a record of a single event preserved forever.
            </p>
            <p>
              Basalt the blockchain is built in layers too:
            </p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Geological Layer</th>
                    <th>Basalt Layer</th>
                    <th>What It Does</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bedrock</td>
                    <td>Storage</td>
                    <td>RocksDB + Merkle Patricia Trie. The permanent record.</td>
                  </tr>
                  <tr>
                    <td>Mantle</td>
                    <td>Execution</td>
                    <td>Contract dispatch, Caldera Fusion, state transitions.</td>
                  </tr>
                  <tr>
                    <td>Tectonic plates</td>
                    <td>Consensus</td>
                    <td>BasaltBFT. The force that orders everything above.</td>
                  </tr>
                  <tr>
                    <td>Mineral veins</td>
                    <td>Compliance</td>
                    <td>ZK proofs, policy hooks, identity. Running through every layer.</td>
                  </tr>
                  <tr>
                    <td>Surface</td>
                    <td>API</td>
                    <td>gRPC, REST, WebSocket. Where the world interacts.</td>
                  </tr>
                  <tr>
                    <td>Plate boundaries</td>
                    <td>Bridges</td>
                    <td>EVM bridge. Where different worlds meet and exchange.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Each layer has its own properties, its own physics. But they are not independent -
              they are a single system, shaped by the same forces, producing a single coherent
              structure. Like the strata of a volcanic plateau, you cannot remove one layer without
              compromising the whole.
            </p>
          </section>

          {/* ── MiCA and Europe ── */}
          <section className="mb-24">
            <h2>A European Foundation</h2>
            <p>
              Europe has always understood the value of foundations. Roman engineers spent more time
              on the substructure of a road than on its surface, because they knew the surface was
              only as good as what lay beneath it. Two thousand years later, you can still walk on
              their basalt-paved roads.
            </p>
            <p>
              The European Union, through MiCA, has laid the regulatory foundation for digital
              assets - the first comprehensive framework of its kind anywhere in the world. It
              defines what compliance means, what issuers must provide, what service providers must
              guarantee. It is the legal bedrock.
            </p>
            <p>
              Basalt is the technical bedrock underneath it. Validator-enforced compliance. Zero-
              knowledge identity verification. The Sovereign Trust Chain mapping the AMF, BaFin,
              CSSF, and every other EU competent authority onto on-chain trust hierarchies. Transfer
              policies that cannot be bypassed. Audit trails that regulators can query in real time.
            </p>
            <p>
              MiCA provides the rules. Basalt provides the rock they stand on.
            </p>
            <p>
              And just as European basalt was quarried from the Vogelsberg, cut in the Auvergne,
              and shipped across the continent to build infrastructure that would last centuries,
              Basalt the blockchain is built in Europe, designed for European regulatory reality,
              and engineered to be the foundation that the next generation of digital infrastructure
              stands on.
            </p>
          </section>

          {/* ── Endurance ── */}
          <section className="mb-24">
            <h2>What Endures</h2>
            <p>
              Sandstone crumbles. Limestone dissolves. Granite cracks under frost. But basalt -
              dense, fine-grained, born from fire - endures. The basalt columns of the Giant&apos;s
              Causeway have stood for 60 million years. The basalt ocean floor carries the weight of
              every sea on Earth. The basalt foundations of Roman harbors still hold.
            </p>
            <p>
              That is the property we named ourselves after. Not speed, though Basalt is fast. Not
              cleverness, though the architecture is sophisticated. Endurance. The kind of endurance
              that comes from being built correctly at the molecular level - where every component
              exists for a reason, every layer reinforces the next, and the whole structure is
              stronger than the sum of its parts.
            </p>
            <p>
              Absolute finality means a committed block stands forever. Validator-enforced compliance
              means the rules cannot be circumvented. Native AOT compilation means no runtime
              surprises, no garbage collector pauses, no hidden failures. These are not features
              bolted onto a foundation - they are the foundation itself. They are the crystal
              structure of the rock.
            </p>
          </section>

          {/* ── Closing ── */}
          <section className="mb-12">
            <h2>From Fire, Foundation</h2>
            <p>
              We did not choose the name Basalt because it sounds technical. We chose it because it
              describes exactly what we are building: the bedrock layer that everything else stands
              on. Infrastructure born from fire, crystallized into permanent structure, and built to
              carry the weight of what comes next.
            </p>
            <p>
              From the Giant&apos;s Causeway to the caldera of Santorini. From Roman roads to
              European regulation. From volcanic fire to digital foundation.
            </p>
            <p>
              Transactions pool. Pressure builds. The caldera fires. Lava flows, cools, and becomes
              the hardest foundation on Earth.
            </p>
            <p>
              Block after block. Layer after layer.
            </p>
            <p className="text-white font-semibold text-lg">
              Basalt.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
