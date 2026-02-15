const stats = [
  { value: "400ms", label: "Block Time" },
  { value: "1,380+", label: "Tests Passing" },
  { value: "1-Block", label: "Deterministic Finality" },
  { value: "30", label: "Modules" },
];

export default function Stats() {
  return (
    <section className="border-y border-white/5 bg-[#111111]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-bold text-white sm:text-4xl">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
