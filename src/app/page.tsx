import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Technology from "@/components/Technology";
import CodePreview from "@/components/CodePreview";
import Ecosystem from "@/components/Ecosystem";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Technology />
      <CodePreview />
      <Ecosystem />
      <Footer />
    </>
  );
}
