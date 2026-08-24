import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio", id: "inicio" },
  { label: "Sobre", href: "#sobre", id: "sobre" },
  { label: "Produtos", href: "#produtos", id: "produtos" },
  { label: "Áreas de Atuação", href: "#atuacao", id: "atuacao" },
  { label: "Contato", href: "#contato", id: "contato" },
];

export const scrollTo = (hash) => {
  if (window.__lenis) {
    window.__lenis.scrollTo(hash, { offset: -72, duration: 1.6 });
  } else {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Header() {
  const [open, setOpen] = useState(false);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    scrollTo(href);
  };

  return (
    <motion.header
      data-testid="header-nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="glass fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#inicio"
          onClick={(e) => go(e, "#inicio")}
          data-testid="header-logo"
          className="font-display text-xl font-black tracking-tight text-slate-50"
        >
          AFRI<span className="text-emerald-400">CON</span>
          <span className="ml-2 hidden font-mono2 text-[10px] font-medium uppercase tracking-[0.3em] text-slate-500 sm:inline">
            GovTech
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              data-testid={`nav-link-${l.id}`}
              className="group relative text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-slate-50"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-emerald-400 transition-[width] duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={(e) => go(e, "#contato")}
            data-testid="header-cta-button"
            className="group hidden items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition-[transform,box-shadow,background-color] duration-300 hover:scale-[1.04] hover:bg-emerald-300 hover:shadow-[0_0_28px_rgba(52,211,153,0.45)] sm:flex"
          >
            Solicite uma demonstração
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button
            onClick={() => setOpen(!open)}
            data-testid="mobile-menu-button"
            aria-label="Abrir menu"
            className="rounded-md border border-white/10 p-2 text-slate-200 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="glass overflow-hidden border-t border-white/5 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  data-testid={`mobile-nav-link-${l.id}`}
                  className="rounded-md px-3 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-emerald-400"
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={(e) => go(e, "#contato")}
                data-testid="mobile-cta-button"
                className="mt-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950"
              >
                Solicite uma demonstração
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
