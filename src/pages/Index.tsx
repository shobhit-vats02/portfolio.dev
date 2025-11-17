import { useState } from "react";
import Preloader from "@/components/Preloader";
import GlowOrbs from "@/components/GlowOrbs";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      {!showPreloader && (
        <div className="relative">
          <GlowOrbs />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
