import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EditorialMarquee from "@/components/EditorialMarquee";
import Manifesto from "@/components/Manifesto";
import Products from "@/components/Products";
import Complementarity from "@/components/Complementarity";
import Expertise from "@/components/Expertise";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#020617] font-body text-slate-100 antialiased selection:bg-emerald-400 selection:text-slate-950">
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <EditorialMarquee />
        <Manifesto />
        <Products />
        <Complementarity />
        <Expertise />
        <Benefits />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
