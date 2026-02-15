const layers = [
  {
    name: "Cryptography",
    items: ["BLAKE3", "Ed25519", "BLS12-381", "Keccak-256"],
    color: "#4a6fa5",
  },
  {
    name: "Consensus",
    items: ["BasaltBFT", "Pipelining", "BLS Aggregation", "View Change"],
    color: "#527ab6",
  },
  {
    name: "Execution",
    items: ["BasaltVM", "C# AOT", "WASM", "Gas Metering"],
    color: "#5a82be",
  },
  {
    name: "Storage",
    items: ["Merkle Patricia Trie", "RocksDB", "State Proofs", "Pruning"],
    color: "#6b9fd4",
  },
  {
    name: "Network",
    items: ["TCP Transport", "Kademlia DHT", "Episub Gossip", "Peer Reputation"],
    color: "#82aedc",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="border-t border-white/5 bg-[#111111] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Technology Stack
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Five independent layers, each production-hardened and tested across
            1,380+ unit and integration tests.
          </p>
        </div>

        <div className="space-y-3">
          {layers.map((layer) => (
            <div
              key={layer.name}
              className="group flex flex-col gap-4 rounded-xl border border-white/5 bg-[#0a0a0a] p-5 transition-colors hover:border-[#4a6fa5]/20 sm:flex-row sm:items-center"
            >
              <div className="w-36 shrink-0">
                <span
                  className="text-sm font-semibold"
                  style={{ color: layer.color }}
                >
                  {layer.name}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/5 bg-white/5 px-3 py-1 text-sm text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
