import { Linkedin, Instagram, Youtube, Mail } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollTo } from "@/components/Header";

const socials = [
  { icon: Linkedin, label: "LinkedIn", id: "linkedin" },
  { icon: Instagram, label: "Instagram", id: "instagram" },
  { icon: Youtube, label: "YouTube", id: "youtube" },
  { icon: Mail, label: "E-mail", id: "email" },
];

export default function Footer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goAnchor = (e, hash) => {
    e.preventDefault();
    if (pathname === "/") {
      scrollTo(hash);
    } else {
      navigate(`/${hash}`);
    }
  };

  return (
    <footer data-testid="footer" className="relative overflow-hidden border-t border-white/5 pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 pb-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-display text-2xl font-black tracking-tight text-slate-50">
              AFRI<span className="text-emerald-400">CON</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              GovTech brasileira especializada em Inteligência Artificial, dados e software de
              gestão para o setor público. Transformamos informação em melhores decisões públicas.
            </p>
            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href="/#contato"
                  onClick={(e) => goAnchor(e, "#contato")}
                  aria-label={s.label}
                  data-testid={`footer-social-${s.id}`}
                  className="rounded-full border border-white/10 p-2.5 text-slate-400 transition-[color,border-color,transform] duration-300 hover:scale-110 hover:border-emerald-400/50 hover:text-emerald-400"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
              Navegação
            </p>
            <ul className="mt-6 space-y-3">
              <li>
                <a href="/#inicio" onClick={(e) => goAnchor(e, "#inicio")} data-testid="footer-link-inicio" className="text-sm text-slate-400 transition-colors duration-300 hover:text-emerald-400">
                  Início
                </a>
              </li>
              <li>
                <Link to="/beneficios" data-testid="footer-link-beneficios" className="text-sm text-slate-400 transition-colors duration-300 hover:text-emerald-400">
                  Benefícios
                </Link>
              </li>
              <li>
                <Link to="/comparar-solucoes" data-testid="footer-link-comparar" className="text-sm text-slate-400 transition-colors duration-300 hover:text-emerald-400">
                  Comparar Soluções
                </Link>
              </li>
              <li>
                <a href="/#contato" onClick={(e) => goAnchor(e, "#contato")} data-testid="footer-link-contato" className="text-sm text-slate-400 transition-colors duration-300 hover:text-emerald-400">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
              Soluções
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li>
                <Link to="/produtos/xgovcontrol-iegm" data-testid="footer-link-xgov" className="transition-colors duration-300 hover:text-cyan-400">
                  <span className="text-cyan-400">XGovControl-IEG-M</span> — governança e controle
                  municipal
                </Link>
              </li>
              <li>
                <Link to="/produtos/e-quidade" data-testid="footer-link-equidade" className="transition-colors duration-300 hover:text-emerald-400">
                  <span className="text-emerald-400">E-Quidade</span> — inteligência de dados para
                  educação pública
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
              Institucional
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li>
                <Link to="/compliance-integridade" data-testid="footer-link-compliance" className="transition-colors duration-300 hover:text-emerald-400">
                  Código de Ética / Compliance e Integridade
                </Link>
              </li>
              <li>
                <Link to="/canal-de-etica" data-testid="footer-link-canal-etica" className="transition-colors duration-300 hover:text-emerald-400">
                  Canal de Ética
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pointer-events-none select-none overflow-hidden">
          <p
            aria-hidden="true"
            className="text-stroke font-display -mb-6 text-center text-[18vw] font-black leading-none tracking-tighter opacity-40 md:-mb-10"
          >
            AFRICON
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 py-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © 2026 Africon GovTech. Todos os direitos reservados.
          </p>
          <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-slate-600">
            IA · Dados · Gestão Pública
          </p>
        </div>
      </div>
    </footer>
  );
}
