"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, visible } = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-16 border-l-4 border-[#4a6fa5] pl-6 py-2">
      <p className="text-xl font-medium leading-relaxed text-white/90 italic">
        {children}
      </p>
    </blockquote>
  );
}

function Divider() {
  return (
    <div className="my-20 flex items-center justify-center gap-3">
      <span className="h-1 w-1 rounded-full bg-[#4a6fa5]/40" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#4a6fa5]/60" />
      <span className="h-1 w-12 rounded-full bg-gradient-to-r from-[#4a6fa5]/60 to-transparent" />
      <span className="h-2 w-2 rounded-full bg-[#4a6fa5]" />
      <span className="h-1 w-12 rounded-full bg-gradient-to-l from-[#4a6fa5]/60 to-transparent" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#4a6fa5]/60" />
      <span className="h-1 w-1 rounded-full bg-[#4a6fa5]/40" />
    </div>
  );
}

export default function Story() {
  const { ref: heroRef, visible: heroVisible } = useInView(0.1);

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
      <header className="relative flex min-h-[70vh] items-center justify-center border-b border-white/5 px-6 pt-20">
        {/* Gradient blobs - absolutely positioned within hero, allowed to overflow into content */}
        <div className="pointer-events-none absolute -bottom-[300px] left-0 right-0 top-0 z-0 overflow-visible">
          <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#4a6fa5] opacity-[0.12] blur-[140px]" />
          <div className="absolute right-[20%] top-[40%] h-[400px] w-[400px] rounded-full bg-[#6b9fd4] opacity-[0.08] blur-[120px]" />
          <div className="absolute left-[15%] top-[60%] h-[350px] w-[350px] rounded-full bg-[#4a6fa5] opacity-[0.06] blur-[100px]" />
        </div>

        <div ref={heroRef} className="relative z-10 mx-auto max-w-3xl text-center">
          <p
            className={`mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#4a6fa5] transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            Our Story
          </p>
          <h1
            className={`mb-8 text-5xl font-bold tracking-tight text-white sm:text-6xl transition-all duration-700 delay-150 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Built from the{" "}
            <span className="gradient-animate bg-gradient-to-r from-[#4a6fa5] via-[#8fbde6] to-[#4a6fa5] bg-clip-text text-transparent">
              Earth Up
            </span>
          </h1>
          <p
            className={`mx-auto max-w-xl text-lg leading-relaxed text-gray-400 transition-all duration-700 delay-300 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Every name carries a reason. Ours comes from the rock beneath Europe -
            the most enduring foundation the continent has ever stood on.
          </p>
        </div>
      </header>

      {/* ── Content ── */}
      <main className="relative z-10 mx-auto max-w-3xl px-6 py-20">
        <article className="wp">

          {/* ── The Rock ── */}
          <Section>
            <section className="mb-8">
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
            </section>
          </Section>

          <Section>
            <section className="mb-8">
              <p>
                When basalt cools under the right conditions, it fractures into perfectly hexagonal
                columns - tens of thousands of them, tessellated with geometric precision. No architect
                designed them. No blueprint specified the angles. Just physics and thermodynamics,
                producing order from chaos.
              </p>
            </section>
          </Section>

          <Section>
            <PullQuote>
              Order from chaos. Structure from entropy. A foundation you can build on because the
              laws that created it are immutable.
            </PullQuote>
          </Section>

          <Section>
            <section className="mb-4">
              <p>
                That is what consensus does. Distributed nodes, each acting independently under
                protocol rules, producing deterministic agreement. Like basalt columns forming from
                cooling lava - no central coordinator, just the right conditions and the right physics.
              </p>
            </section>
          </Section>

          <Divider />

          {/* ── European Basalt ── */}
          <Section>
            <section className="mb-8">
              <h2>European Bedrock</h2>
              <p className="text-lg text-white/80">
                Europe is built on basalt.
              </p>
            </section>
          </Section>

          <Section>
            <section className="mb-8">
              <p>
                The 40,000 interlocking columns of the Giant&apos;s Causeway in Northern Ireland -
                formed 60 million years ago, still standing, still perfectly hexagonal. Fingal&apos;s
                Cave on the Scottish isle of Staffa, where basalt columns form a natural cathedral so
                precise that Mendelssohn composed a symphony after visiting it. The black cliffs of
                Vik in Iceland, where an entire island sits on a basalt foundation at the seam where
                tectonic plates pull apart.
              </p>
            </section>
          </Section>

          <Section>
            <div className="my-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { place: "Auvergne, France", detail: "Ancient volcanic basalt plateaus at the heart of the Massif Central" },
                { place: "Vogelsberg, Germany", detail: "One of the largest volcanic massifs in Central Europe" },
                { place: "Bohemia, Czech Republic", detail: "Basalt columns rising from the forests of central Europe" },
              ].map((item) => (
                <div
                  key={item.place}
                  className="rounded-xl border border-white/5 bg-[#111111] p-5 transition-all hover:border-[#4a6fa5]/20"
                >
                  <p className="mb-2 text-sm font-semibold text-[#6b9fd4]">{item.place}</p>
                  <p className="text-sm leading-relaxed text-gray-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section>
            <section className="mb-8">
              <p>
                The oldest Roman roads were paved with basalt. The harbor walls that protected
                Mediterranean trade were built on it. The cathedral foundations of medieval Europe rest
                on it. In Italy, Etna&apos;s lava flows have been cooling into basalt since before
                Rome was founded. Generation after generation chose the same material for the same
                reason: it endures.
              </p>
            </section>
          </Section>

          <Section>
            <PullQuote>
              We are building the digital infrastructure for Europe. We named it after the material
              Europe has always built its physical infrastructure on.
            </PullQuote>
          </Section>

          <Divider />

          {/* ── The Process ── */}
          <Section>
            <section className="mb-8">
              <h2>From Magma to Bedrock</h2>
              <p className="text-lg text-white/80">
                A blockchain is a geological process compressed into seconds.
              </p>
            </section>
          </Section>

          <Section>
            <div className="my-12 space-y-6">
              {[
                {
                  phase: "Accumulation",
                  icon: "01",
                  text: "Deep beneath the surface, raw material accumulates under pressure. Transactions gather in the mempool - unordered, unconfirmed, potential energy waiting to be released.",
                },
                {
                  phase: "Eruption",
                  icon: "02",
                  text: "The block proposer fires. Validators align. In a single irreversible moment, the lava flows - transactions are ordered, executed, and committed. There is no going back.",
                },
                {
                  phase: "Crystallization",
                  icon: "03",
                  text: "The lava cools. State crystallizes. What was volatile and uncertain becomes permanent and immutable - layer after layer, block after block, the bedrock grows.",
                },
              ].map((step) => (
                <div
                  key={step.phase}
                  className="flex gap-5 rounded-xl border border-white/5 bg-[#111111] p-6"
                >
                  <div className="flex-shrink-0">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4a6fa5]/10 text-sm font-bold text-[#6b9fd4]">
                      {step.icon}
                    </span>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-white">{step.phase}</p>
                    <p className="leading-relaxed text-gray-400">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section>
            <section className="mb-4">
              <p>
                BasaltBFT provides absolute finality: once a block is committed, it is committed
                forever. No reorganization. No probabilistic maybe. And like the basalt columns of
                the Giant&apos;s Causeway, the structure that emerges is not imposed from above. It
                arises from the protocol itself - deterministic, geometric, inevitable.
              </p>
            </section>
          </Section>

          <Divider />

          {/* ── The Caldera ── */}
          <Section>
            <section className="mb-8">
              <h2>Caldera</h2>
              <p>
                In 1600 BCE, the volcanic island of Thera erupted with a force that reshaped the
                Mediterranean. The explosion was so massive that the island collapsed into its own
                emptied magma chamber, leaving behind a vast, flooded crater - a caldera. Today, we
                call it Santorini. The white villages perched on its rim look down into the remnants
                of one of the most powerful geological events in European history.
              </p>
            </section>
          </Section>

          <Section>
            <section className="mb-8">
              <p>
                A caldera is not just a crater. It is the scar of transformation on a planetary scale.
                But before the eruption, it serves a different purpose entirely. It is the mixing
                chamber. Magma from different geological sources pools together, reaches thermal
                equilibrium, and combines into something new. Raw elements enter from every direction.
                They leave transformed.
              </p>
            </section>
          </Section>

          <Section>
            <div className="my-12 rounded-2xl border border-[hsl(33,95%,50%)]/20 bg-[hsl(33,95%,50%)]/[0.03] p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[hsl(33,95%,55%)]">
                Caldera Fusion
              </p>
              <p className="mb-4 leading-relaxed text-gray-300">
                Basalt&apos;s protocol-native decentralized exchange. Not a smart contract deployed on
                the chain - part of the chain itself, embedded in the execution layer with its own
                transaction types and a three-phase block production pipeline.
              </p>
              <p className="leading-relaxed text-gray-400">
                Swap intents, limit orders, and liquidity positions flow into the caldera from every
                direction. Inside, they mix: a batch auction collects all orders within a block and
                settles them at a single uniform clearing price. No front-running. No sandwich attacks.
                No advantage to speed. Just supply and demand reaching equilibrium - the same way
                magma from different sources reaches thermal equilibrium in a volcanic chamber.
              </p>
            </div>
          </Section>

          <Section>
            <section className="mb-8">
              <p>
                And like the caldera itself, the process is sealed. Encrypted intents mean that no
                one - not validators, not searchers, not other traders - can see what is inside the
                chamber until the moment of settlement. The mixing happens in the dark. The result
                emerges in the light.
              </p>
              <p>
                The Minoan eruption of Thera reshaped Mediterranean civilization. Trade routes
                shifted. Power structures changed. New systems emerged from the aftermath. Caldera
                Fusion is designed to do the same thing to financial infrastructure - eliminate the
                exploitative structures that exist today and replace them with something fairer, more
                transparent, and more resilient.
              </p>
            </section>
          </Section>

          <Divider />

          {/* ── The Layers ── */}
          <Section>
            <section className="mb-8">
              <h2>Layers of Strata</h2>
              <p>
                Geologists read the history of the Earth in layers of rock. Each stratum tells a
                story - what erupted, when it cooled, what pressure shaped it. The North Atlantic
                Igneous Province that connects Scotland, Iceland, and Greenland is read layer by
                layer, each one a record of a single event preserved forever.
              </p>
              <p>
                Basalt the blockchain is built in layers too:
              </p>
            </section>
          </Section>

          <Section>
            <div className="my-8 space-y-3">
              {[
                { geo: "Bedrock", layer: "Storage", desc: "RocksDB + Merkle Patricia Trie. The permanent record.", color: "bg-[#4a6fa5]/20" },
                { geo: "Mantle", layer: "Execution", desc: "Contract dispatch, Caldera Fusion, state transitions.", color: "bg-[#4a6fa5]/15" },
                { geo: "Tectonic Plates", layer: "Consensus", desc: "BasaltBFT. The force that orders everything above.", color: "bg-[#4a6fa5]/12" },
                { geo: "Mineral Veins", layer: "Compliance", desc: "ZK proofs, policy hooks, identity. Running through every layer.", color: "bg-[#4a6fa5]/10" },
                { geo: "Surface", layer: "API", desc: "gRPC, REST, WebSocket. Where the world interacts.", color: "bg-[#4a6fa5]/8" },
                { geo: "Plate Boundaries", layer: "Bridges", desc: "EVM bridge. Where different worlds meet and exchange.", color: "bg-[#4a6fa5]/6" },
              ].map((row) => (
                <div
                  key={row.layer}
                  className={`flex flex-col gap-1 rounded-xl border border-white/5 ${row.color} p-5 sm:flex-row sm:items-center sm:gap-6`}
                >
                  <div className="flex-shrink-0 sm:w-36">
                    <p className="text-xs font-medium uppercase tracking-wider text-[#6b9fd4]">{row.geo}</p>
                    <p className="font-semibold text-white">{row.layer}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-400">{row.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section>
            <section className="mb-4">
              <p>
                Each layer has its own properties, its own physics. But they are not independent -
                they are a single system, shaped by the same forces, producing a single coherent
                structure. Like the strata of a volcanic plateau, you cannot remove one layer without
                compromising the whole.
              </p>
            </section>
          </Section>

          <Divider />

          {/* ── MiCA and Europe ── */}
          <Section>
            <section className="mb-8">
              <h2>A European Foundation</h2>
              <p>
                Europe has always understood the value of foundations. Roman engineers spent more time
                on the substructure of a road than on its surface, because they knew the surface was
                only as good as what lay beneath it. Two thousand years later, you can still walk on
                their basalt-paved roads.
              </p>
            </section>
          </Section>

          <Section>
            <section className="mb-8">
              <p>
                The European Union, through MiCA, has laid the regulatory foundation for digital
                assets - the first comprehensive framework of its kind anywhere in the world. It
                defines what compliance means, what issuers must provide, what service providers must
                guarantee. It is the legal bedrock.
              </p>
              <p>
                Basalt is the technical bedrock underneath it. Validator-enforced compliance.
                Zero-knowledge identity verification. The Sovereign Trust Chain mapping the AMF,
                BaFin, CSSF, and every other EU competent authority onto on-chain trust hierarchies.
                Transfer policies that cannot be bypassed. Audit trails that regulators can query in
                real time.
              </p>
            </section>
          </Section>

          <Section>
            <PullQuote>
              MiCA provides the rules. Basalt provides the rock they stand on.
            </PullQuote>
          </Section>

          <Section>
            <section className="mb-4">
              <p>
                And just as European basalt was quarried from the Vogelsberg, cut in the Auvergne,
                and shipped across the continent to build infrastructure that would last centuries,
                Basalt the blockchain is built in Europe, designed for European regulatory reality,
                and engineered to be the foundation that the next generation of digital infrastructure
                stands on.
              </p>
            </section>
          </Section>

          <Divider />

          {/* ── Endurance ── */}
          <Section>
            <section className="mb-8">
              <h2>What Endures</h2>
              <p>
                Sandstone crumbles. Limestone dissolves. Granite cracks under frost. But basalt -
                dense, fine-grained, born from fire - endures. The basalt columns of the Giant&apos;s
                Causeway have stood for 60 million years. The basalt ocean floor carries the weight of
                every sea on Earth. The basalt foundations of Roman harbors still hold.
              </p>
            </section>
          </Section>

          <Section>
            <div className="my-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { property: "Absolute Finality", detail: "A committed block stands forever. No reorganization, no rollback." },
                { property: "Enforced Compliance", detail: "Validator-level rules that cannot be bypassed from any path." },
                { property: "Native AOT", detail: "No runtime surprises. No GC pauses. No hidden failures." },
              ].map((item) => (
                <div
                  key={item.property}
                  className="rounded-xl border border-white/5 bg-[#111111] p-5 transition-all hover:border-[#4a6fa5]/20"
                >
                  <p className="mb-2 text-sm font-semibold text-white">{item.property}</p>
                  <p className="text-sm leading-relaxed text-gray-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section>
            <section className="mb-4">
              <p>
                That is the property we named ourselves after. Not speed, though Basalt is fast. Not
                cleverness, though the architecture is sophisticated. Endurance. The kind of endurance
                that comes from being built correctly at the molecular level - where every component
                exists for a reason, every layer reinforces the next, and the whole structure is
                stronger than the sum of its parts.
              </p>
            </section>
          </Section>

          <Divider />

          {/* ── Closing ── */}
          <Section>
            <section className="mb-8">
              <h2>From Fire, Foundation</h2>
              <p>
                We did not choose the name Basalt because it sounds technical. We chose it because it
                describes exactly what we are building: the bedrock layer that everything else stands
                on. Infrastructure born from fire, crystallized into permanent structure, and built to
                carry the weight of what comes next.
              </p>
            </section>
          </Section>

          <Section>
            <section className="mb-8 text-center">
              <p className="text-lg text-gray-300">
                From the Giant&apos;s Causeway to the caldera of Santorini.
              </p>
              <p className="text-lg text-gray-300">
                From Roman roads to European regulation.
              </p>
              <p className="text-lg text-gray-300">
                From volcanic fire to digital foundation.
              </p>
            </section>
          </Section>

          <Section>
            <section className="mb-8 text-center">
              <p className="text-gray-400">
                Transactions pool. Pressure builds. The caldera fires.
              </p>
              <p className="text-gray-400">
                Lava flows, cools, and becomes the hardest foundation on Earth.
              </p>
              <p className="mt-4 text-gray-400">
                Block after block. Layer after layer.
              </p>
              <p className="mt-8 gradient-animate bg-gradient-to-r from-[#4a6fa5] via-[#8fbde6] to-[#4a6fa5] bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                Basalt.
              </p>
            </section>
          </Section>
        </article>
      </main>

      <Footer />
    </>
  );
}
