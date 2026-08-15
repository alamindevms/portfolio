import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Work from "./components/sections/Work";
import Experience from "./components/sections/Experience";
import Strengths from "./components/sections/Strengths";
import Stack from "./components/sections/Stack";
import AiWorkflow from "./components/sections/AiWorkflow";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import { ScrollTrigger } from "./lib/gsap";

export default function App() {
  useEffect(() => {
    document.fonts.ready.then(() => ScrollTrigger.refresh()).catch(() => {});
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-on-accent"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <Strengths />
        <Stack />
        <AiWorkflow />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
