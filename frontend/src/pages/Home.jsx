import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import EditorialMarquee from "@/components/EditorialMarquee";
import Manifesto from "@/components/Manifesto";
import Products from "@/components/Products";
import Complementarity from "@/components/Complementarity";
import Expertise from "@/components/Expertise";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import { scrollTo } from "@/components/Header";
import { usePageMeta } from "@/components/usePageMeta";

export default function Home() {
  const { hash } = useLocation();

  usePageMeta({
    title: "Africon — GovTech de Inteligência Artificial, Dados e Gestão Pública",
    description:
      "A Africon transforma informação em melhores decisões públicas com IA, dados e software de gestão. Conheça E-Quidade e XGovControl-IEG-M.",
  });

  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => scrollTo(hash), 450);
      return () => clearTimeout(t);
    }
  }, [hash]);

  return (
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
  );
}
