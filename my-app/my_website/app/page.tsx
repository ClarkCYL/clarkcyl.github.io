import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#07090e] text-[#e2e8f0]">
      {/* Full-Width Sticky Glass Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Tech Stack Section */}
        <TechStack />
      </main>

      {/* Footer with Live Manila Clock */}
      <Footer />
    </div>
  );
}
