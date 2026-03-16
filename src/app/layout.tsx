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
  title: "Basalt — Compliance-Native Layer 1 Blockchain on .NET 9 AOT",
  description:
    "A Layer 1 blockchain with native zero-knowledge compliance, C# smart contracts, 4-second finality, and a protocol-native DEX. Built on .NET 9 Native AOT.",
  keywords: [
    "blockchain",
    "layer 1",
    ".NET",
    "C#",
    "smart contracts",
    "zero-knowledge",
    "compliance",
    "DEX",
    "BFT consensus",
    "AOT",
    "MiCA",
    "eIDAS",
  ],
  openGraph: {
    title: "Basalt — Compliance-Native Layer 1 Blockchain",
    description:
      "Zero-knowledge compliance, C# smart contracts, 4-second finality, and a protocol-native DEX. Built on .NET 9 Native AOT.",
    type: "website",
    url: "https://basalt.foundation",
    siteName: "Basalt",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basalt — Compliance-Native Layer 1 Blockchain",
    description:
      "Zero-knowledge compliance, C# smart contracts, 4-second finality, and a protocol-native DEX.",
    creator: "@basaltEU",
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
