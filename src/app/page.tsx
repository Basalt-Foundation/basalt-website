import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import SectionDivider from "@/components/SectionDivider";
import Compliance from "@/components/Compliance";
import Privacy from "@/components/Privacy";
import Comparison from "@/components/Comparison";
import Technology from "@/components/Technology";
import Research from "@/components/Research";
import CodePreview from "@/components/CodePreview";
import PolicyHooks from "@/components/PolicyHooks";
import Dex from "@/components/Dex";
import TokenStandards from "@/components/TokenStandards";
import Roadmap from "@/components/Roadmap";
import Faq from "@/components/Faq";
import Ecosystem from "@/components/Ecosystem";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />

      <SectionDivider label="Trust & Compliance" />
      <Compliance />
      <Privacy />
      <Comparison />

      <Technology />
      <Research />

      <SectionDivider label="For Developers" />
      <CodePreview />
      <PolicyHooks />
      <Dex />
      <TokenStandards />

      <Roadmap />
      <Faq />
      <Ecosystem />
      <Footer />
      <BackToTop />
    </>
  );
}
