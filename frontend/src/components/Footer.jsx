import { Linkedin, Instagram, Youtube, Mail } from "lucide-react";
import { scrollTo } from "@/components/Header";

const socials = [
  { icon: Linkedin, label: "LinkedIn", id: "linkedin" },
  { icon: Instagram, label: "Instagram", id: "instagram" },
  { icon: Youtube, label: "YouTube", id: "youtube" },
  { icon: Mail, label: "E-mail", id: "email" },
];

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Áreas de Atuação", href: "#atuacao" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="relative overflow-hidden border-t border-white/5 pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 pb-20 md:grid-cols-12">
          <div className="md:col-span-5">
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
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#contato");
                  }}
                  aria-label={s.label}
                  data-testid={`footer-social-${s.id}`}
                  className="rounded-full border border-white/10 p-2.5 text-slate-400 transition-[color,border-color,transform] duration-300 hover:scale-110 hover:border-emerald-400/50 hover:text-emerald-400"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
              Navegação
            </p>
            <ul className="mt-6 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(n.href);
                    }}
                    data-testid={`footer-link-${n.href.slice(1)}`}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-emerald-400"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
              Soluções
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li>
                <span className="text-emerald-400">E-Quidade</span> — inteligência de dados para
                equidade e educação pública
              </li>
              <li>
                <span className="text-cyan-400">XGovControl-IEG-M</span> — governança e controle
                para a gestão municipal
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
