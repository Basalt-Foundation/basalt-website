"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features", sections: ["features"] },
  {
    label: "Compliance",
    href: "#compliance",
    sections: ["compliance", "privacy"],
  },
  {
    label: "Technology",
    href: "#technology",
    sections: ["technology", "research"],
  },
  { label: "Roadmap", href: "#roadmap", sections: ["roadmap"] },
];

const allSectionIds = [
  "features",
  "compliance",
  "privacy",
  "technology",
  "research",
  "code",
  "policies",
  "dex",
  "standards",
  "roadmap",
  "ecosystem",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0% -60% 0%" }
    );

    for (const id of allSectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const isActive = (link: (typeof navLinks)[number]) =>
    link.sections.includes(activeSection);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-[#4a6fa5]/60 transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight text-white">
          Basalt
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                isActive(link)
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
              {isActive(link) && (
                <span className="mt-0.5 block h-0.5 rounded-full bg-[#4a6fa5]" />
              )}
            </a>
          ))}
          <Link
            href="/whitepapers"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Research
          </Link>
          <a
            href="https://basalt-foundation.github.io/basalt-docs/"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Docs
          </a>
          <a
            href="https://testnet.basalt.foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Testnet
          </a>
          <a
            href="https://github.com/basalt-foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            GitHub
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-400 md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/5 px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm transition-colors ${
                isActive(link)
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/whitepapers"
            onClick={() => setOpen(false)}
            className="block py-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            Research
          </Link>
          <a
            href="https://basalt-foundation.github.io/basalt-docs/"
            className="block py-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            Docs
          </a>
          <a
            href="https://testnet.basalt.foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            Testnet
          </a>
          <a
            href="https://github.com/basalt-foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block py-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
