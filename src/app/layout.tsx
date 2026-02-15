import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Basalt — Enterprise-Grade Blockchain on .NET 9 AOT",
  description:
    "A high-performance Layer 1 blockchain built on .NET 9 with Native AOT compilation. C# smart contracts, BFT consensus, built-in compliance, and EVM bridge.",
  openGraph: {
    title: "Basalt — Enterprise-Grade Blockchain on .NET 9 AOT",
    description:
      "A high-performance Layer 1 blockchain built on .NET 9 with Native AOT compilation.",
    type: "website",
    url: "https://basalt-foundation.github.io/basalt-website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
