"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "abstract", label: "Abstract" },
  { id: "introduction", label: "1. Introduction" },
  { id: "architecture", label: "2. Architecture" },
  { id: "consensus", label: "3. Consensus" },
  { id: "cryptography", label: "4. Cryptography" },
  { id: "smart-contracts", label: "5. Smart Contracts" },
  { id: "token-standards", label: "6. Token Standards" },
  { id: "compliance", label: "7. Compliance Layer" },
  { id: "policy-hooks", label: "8. Policy Hooks" },
  { id: "dex", label: "9. Caldera Fusion DEX" },
  { id: "system-contracts", label: "10. System Contracts" },
  { id: "networking", label: "11. Networking" },
  { id: "storage", label: "12. Storage" },
  { id: "economics", label: "13. Economic Model" },
  { id: "testing", label: "14. Testing" },
  { id: "conclusion", label: "15. Conclusion" },
  { id: "references", label: "References" },
];

export default function BasaltWhitepaperToc() {
  const [active, setActive] = useState("abstract");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0% -60% 0%" }
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden xl:block sticky top-28 self-start w-56 shrink-0">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
        On this page
      </p>
      <ul className="space-y-1 border-l border-white/10">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`block border-l-2 py-1 pl-4 text-sm transition-colors ${
                active === s.id
                  ? "border-[#4a6fa5] text-white"
                  : "border-transparent text-gray-500 hover:text-gray-300"
              }`}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
