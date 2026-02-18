"use client";

import { useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Compliance", href: "#compliance" },
  { label: "Technology", href: "#technology" },
  { label: "Contracts", href: "#code" },
  { label: "Roadmap", href: "#roadmap" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
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
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
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
              className="block py-2 text-sm text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
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
