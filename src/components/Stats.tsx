const stats = [
  { value: "~12,000", label: "TPS" },
  { value: "800ms", label: "Deterministic Finality" },
  { value: "400ms", label: "Block Time" },
  { value: "1,737+", label: "Tests Passing" },
  { value: "Live", label: "Testnet", href: "https://testnet.basalt.foundation" },
];

export default function Stats() {
  return (
    <section className="border-y border-white/5 bg-[#111111]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            {stat.href ? (
              <a
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="text-3xl font-bold text-green-400 sm:text-4xl">
                  <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-500 transition-colors group-hover:text-gray-300">
                  {stat.label} &rarr;
                </div>
              </a>
            ) : (
              <>
                <div className="text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
