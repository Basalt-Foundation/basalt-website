import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Compliance from "@/components/Compliance";
import Privacy from "@/components/Privacy";
import Comparison from "@/components/Comparison";
import Technology from "@/components/Technology";
import CodePreview from "@/components/CodePreview";
import PolicyHooks from "@/components/PolicyHooks";
import Dex from "@/components/Dex";
import TokenStandards from "@/components/TokenStandards";
import Roadmap from "@/components/Roadmap";
import Ecosystem from "@/components/Ecosystem";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Compliance />
      <Privacy />
      <Comparison />
      <Technology />
      <CodePreview />
      <PolicyHooks />
      <Dex />
      <TokenStandards />
      <Roadmap />
      <Ecosystem />
      <Footer />
    </>
  );
}
