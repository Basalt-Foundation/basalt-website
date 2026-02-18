import Reveal from "@/components/Reveal";

const rows = [
  {
    label: "Type",
    basalt: "Public L1",
    ethereum: "Public L1",
    solana: "Public L1",
    polygon: "L2",
    hyperledger: "Private",
  },
  {
    label: "Language",
    basalt: "C#",
    ethereum: "Solidity",
    solana: "Rust",
    polygon: "Solidity",
    hyperledger: "Go / Java",
  },
  {
    label: "TPS",
    basalt: "~12,000",
    ethereum: "~30",
    solana: "~4,000",
    polygon: "~7,000",
    hyperledger: "~3,000",
  },
  {
    label: "Finality",
    basalt: "800ms",
    ethereum: "15 min",
    solana: "13s",
    polygon: "2.3s",
    hyperledger: "Instant",
  },
  {
    label: "ZK Compliance",
    basalt: "Native",
    ethereum: "No",
    solana: "No",
    polygon: "No",
    hyperledger: "No",
    highlight: true,
  },
  {
    label: "ZK Privacy",
    basalt: "Groth16",
    ethereum: "No",
    solana: "No",
    polygon: "ZK Rollups",
    hyperledger: "Channels",
  },
  {
    label: "Developer TAM",
    basalt: "8M",
    ethereum: "200K",
    solana: "200K",
    polygon: "200K",
    hyperledger: "1M",
  },
  {
    label: "Node Memory",
    basalt: "< 2 GB",
    ethereum: "8-16 GB",
    solana: "128+ GB",
    polygon: "16-32 GB",
    hyperledger: "4-8 GB",
  },
];

export default function Comparison() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              How Basalt Compares
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              The only blockchain combining native .NET development, protocol-level
              ZK compliance, and deterministic finality at enterprise scale.
            </p>
          </div>
        </Reveal>

        <Reveal>
        <div className="overflow-x-auto rounded-xl border border-white/5">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="border-b border-white/5 bg-[#111111]">
                <th className="px-5 py-4 text-left font-medium text-gray-500" />
                <th className="px-5 py-4 text-left font-semibold text-[#6b9fd4]">
                  Basalt
                </th>
                <th className="px-5 py-4 text-left font-medium text-gray-500">
                  Ethereum
                </th>
                <th className="px-5 py-4 text-left font-medium text-gray-500">
                  Solana
                </th>
                <th className="px-5 py-4 text-left font-medium text-gray-500">
                  Polygon
                </th>
                <th className="px-5 py-4 text-left font-medium text-gray-500">
                  Hyperledger
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-white/5 ${
                    i % 2 === 0 ? "bg-[#0d0d0d]" : "bg-[#111111]"
                  }`}
                >
                  <td className="px-5 py-3.5 font-medium text-gray-400">
                    {row.label}
                  </td>
                  <td
                    className={`px-5 py-3.5 font-semibold ${
                      row.highlight
                        ? "text-green-400"
                        : "text-white"
                    }`}
                  >
                    {row.basalt}
                  </td>
                  <td className="px-5 py-3.5 text-gray-500">{row.ethereum}</td>
                  <td className="px-5 py-3.5 text-gray-500">{row.solana}</td>
                  <td className="px-5 py-3.5 text-gray-500">{row.polygon}</td>
                  <td className="px-5 py-3.5 text-gray-500">
                    {row.hyperledger}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
