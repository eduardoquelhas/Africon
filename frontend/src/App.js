import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import ProductXGov from "@/pages/ProductXGov";
import ProductEQuidade from "@/pages/ProductEQuidade";
import Beneficios from "@/pages/Beneficios";
import Comparar from "@/pages/Comparar";
import Compliance from "@/pages/Compliance";
import CanalEtica from "@/pages/CanalEtica";
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
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen overflow-x-clip bg-[#020617] font-body text-slate-100 antialiased selection:bg-emerald-400 selection:text-slate-950">
        <div className="noise-overlay" aria-hidden="true" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos/xgovcontrol-iegm" element={<ProductXGov />} />
          <Route path="/produtos/e-quidade" element={<ProductEQuidade />} />
          <Route path="/beneficios" element={<Beneficios />} />
          <Route path="/comparar-solucoes" element={<Comparar />} />
          <Route path="/compliance-integridade" element={<Compliance />} />
          <Route path="/canal-de-etica" element={<CanalEtica />} />
        </Routes>
        <Footer />
        <Toaster theme="dark" position="bottom-right" />
      </div>
    </BrowserRouter>
  );
}
