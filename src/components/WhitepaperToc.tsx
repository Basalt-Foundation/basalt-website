"use client";

import { useState, useEffect } from "react";

interface TocSection {
  id: string;
  label: string;
}

export default function WhitepaperToc({ sections }: { sections: TocSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

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
  }, [sections]);

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
