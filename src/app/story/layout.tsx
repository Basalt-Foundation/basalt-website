import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story - Basalt",
  description:
    "Why Basalt? Why Caldera? The geological metaphor behind a blockchain built to be the bedrock of European digital infrastructure.",
  openGraph: {
    title: "Our Story - Basalt",
    description:
      "The geological metaphor behind a blockchain built to be the bedrock of European digital infrastructure.",
    type: "article",
  },
};

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}