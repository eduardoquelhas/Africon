import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown, Landmark, GraduationCap } from "lucide-react";

export const scrollTo = (hash) => {
  if (window.__lenis) {
    window.__lenis.scrollTo(hash, { offset: -72, duration: 1.6 });
  } else {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }
};

const productLinks = [
  {
    to: "/produtos/xgovcontrol-iegm",
    icon: Landmark,
    name: "XGovControl-IEG-M",
    desc: "Governança, controle e evolução do IEG-M",
  },
  {
    to: "/produtos/e-quidade",
    icon: GraduationCap,
    name: "E-Quidade",
    desc: "Equidade e inteligência educacional",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [mobileProd, setMobileProd] = useState(false);
  const dropRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const close = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDrop(false);
    };
    const esc = (e) => {
      if (e.key === "Escape") setDrop(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", esc);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setDrop(false);
  }, [pathname]);

  const goAnchor = (e, hash) => {
    e.preventDefault();
    setOpen(false);
    if (pathname === "/") {
      scrollTo(hash);
    } else {
      navigate(`/${hash}`);
    }
  };

  const navCls = ({ isActive }) =>
    `relative whitespace-nowrap text-[13px] font-medium transition-colors duration-300 ${
      isActive ? "text-emerald-400" : "text-slate-300 hover:text-slate-50"
    }`;

  return (
    <motion.header
      data-testid="header-nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="glass fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link
          to="/"
          data-testid="header-logo"
          className="font-display shrink-0 text-xl font-black tracking-tight text-slate-50"
        >
          AFRI<span className="text-emerald-400">CON</span>
          <span className="ml-2 hidden font-mono2 text-[10px] font-medium uppercase tracking-[0.3em] text-slate-500 sm:inline">
            GovTech
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Navegação principal">
          <a href="/#inicio" onClick={(e) => goAnchor(e, "#inicio")} data-testid="nav-link-inicio" className={navCls({ isActive: pathname === "/" })}>
            Início
          </a>

          <div className="relative" ref={dropRef}>
            <button
              onClick={() => setDrop(!drop)}
              aria-expanded={drop}
              aria-controls="produtos-menu"
              aria-haspopup="true"
              data-testid="nav-produtos-dropdown"
              className={`flex items-center gap-1.5 text-[13px] font-medium transition-colors duration-300 ${
                pathname.startsWith("/produtos") ? "text-emerald-400" : "text-slate-300 hover:text-slate-50"
              }`}
            >
              Produtos
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${drop ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {drop && (
                <motion.div
                  id="produtos-menu"
                  role="menu"
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="glass absolute left-1/2 top-full mt-4 w-80 -translate-x-1/2 rounded-2xl p-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                >
                  {productLinks.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      role="menuitem"
                      data-testid={`dropdown-link-${p.to.split("/").pop()}`}
                      className="group flex items-start gap-4 rounded-xl p-4 transition-colors duration-200 hover:bg-white/5 focus:bg-white/5 focus:outline-none"
                    >
                      <span className="mt-0.5 rounded-lg border border-white/10 bg-white/5 p-2 text-emerald-400 transition-transform duration-300 group-hover:scale-110">
                        <p.icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-slate-100">{p.name}</span>
                        <span className="mt-0.5 block text-xs text-slate-400">{p.desc}</span>
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/beneficios" data-testid="nav-link-beneficios" className={navCls({ isActive: pathname === "/beneficios" })}>
            Benefícios
          </Link>
          <Link to="/comparar-solucoes" data-testid="nav-link-comparar" className={navCls({ isActive: pathname === "/comparar-solucoes" })}>
            Comparar Soluções
          </Link>
          <Link
            to="/compliance-integridade"
            data-testid="nav-link-compliance"
            className={navCls({ isActive: pathname === "/compliance-integridade" || pathname === "/canal-de-etica" })}
          >
            Código de Ética / Compliance e Integridade
          </Link>
          <a href="/#contato" onClick={(e) => goAnchor(e, "#contato")} data-testid="nav-link-contato" className={navCls({ isActive: false })}>
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={(e) => goAnchor(e, "#contato")}
            data-testid="header-cta-button"
            className="group hidden items-center gap-2 whitespace-nowrap rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition-[transform,box-shadow,background-color] duration-300 hover:scale-[1.04] hover:bg-emerald-300 hover:shadow-[0_0_28px_rgba(52,211,153,0.45)] sm:flex"
          >
            Solicitar Demonstração
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button
            onClick={() => setOpen(!open)}
            data-testid="mobile-menu-button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="rounded-md border border-white/10 p-2 text-slate-200 xl:hidden"
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
            className="glass max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/5 xl:hidden"
            aria-label="Navegação móvel"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              <a href="/#inicio" onClick={(e) => goAnchor(e, "#inicio")} data-testid="mobile-nav-link-inicio" className="rounded-md px-3 py-3.5 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-emerald-400">
                Início
              </a>

              <button
                onClick={() => setMobileProd(!mobileProd)}
                aria-expanded={mobileProd}
                aria-controls="mobile-produtos-accordion"
                data-testid="mobile-produtos-accordion"
                className="flex items-center justify-between rounded-md px-3 py-3.5 text-left text-base font-medium text-slate-200 transition-colors hover:bg-white/5"
              >
                Produtos
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileProd ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileProd && (
                  <motion.div
                    id="mobile-produtos-accordion"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {productLinks.map((p) => (
                      <Link
                        key={p.to}
                        to={p.to}
                        data-testid={`mobile-dropdown-link-${p.to.split("/").pop()}`}
                        className="flex items-center gap-3 rounded-md px-6 py-3.5 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-emerald-400"
                      >
                        <p.icon className="h-4 w-4 text-emerald-400" />
                        {p.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link to="/beneficios" data-testid="mobile-nav-link-beneficios" className="rounded-md px-3 py-3.5 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-emerald-400">
                Benefícios
              </Link>
              <Link to="/comparar-solucoes" data-testid="mobile-nav-link-comparar" className="rounded-md px-3 py-3.5 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-emerald-400">
                Comparar Soluções
              </Link>
              <Link to="/compliance-integridade" data-testid="mobile-nav-link-compliance" className="rounded-md px-3 py-3.5 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-emerald-400">
                Código de Ética / Compliance e Integridade
              </Link>
              <a href="/#contato" onClick={(e) => goAnchor(e, "#contato")} data-testid="mobile-nav-link-contato" className="rounded-md px-3 py-3.5 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-emerald-400">
                Contato
              </a>
              <button
                onClick={(e) => goAnchor(e, "#contato")}
                data-testid="mobile-cta-button"
                className="mt-2 rounded-full bg-emerald-400 px-5 py-3.5 text-sm font-bold text-slate-950"
              >
                Solicitar Demonstração
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
