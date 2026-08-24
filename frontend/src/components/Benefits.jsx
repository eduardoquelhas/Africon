import { Eye, Target, Zap, BadgeCheck } from "lucide-react";
import { Reveal, Overline } from "@/components/Reveal";

const benefits = [
  {
    icon: Eye,
    title: "Visibilidade das operações públicas",
    text: "Todo o funcionamento do município em painéis claros, acessíveis e sempre atualizados.",
  },
  {
    icon: Target,
    title: "Monitoramento de metas e indicadores",
    text: "Acompanhamento contínuo de metas, prazos e resultados, sem planilhas soltas.",
  },
  {
    icon: Zap,
    title: "Decisões mais rápidas e seguras",
    text: "IA que sintetiza cenários e recomenda caminhos, reduzindo dúvida e retrabalho.",
  },
  {
    icon: BadgeCheck,
    title: "Eficiência operacional e conformidade",
    text: "Automação de rotinas e aderência permanente a exigências como o IEG-M.",
  },
];

export default function Benefits() {
  return (
    <section data-testid="benefits-section" className="relative py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Overline>Benefícios</Overline>
            <h2 className="font-display mt-6 text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
              O que muda quando a gestão ganha{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                inteligência
              </span>
            </h2>
            <p className="mt-6 leading-relaxed text-slate-400 md:text-lg">
              Prefeitos, secretários, controladorias e equipes técnicas passam a operar sobre a
              mesma base de dados confiável — com transparência e impacto mensurável.
            </p>
          </Reveal>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.1}>
                  <div className="group glass h-full rounded-2xl p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
                    <span className="font-mono2 text-xs text-slate-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <b.icon className="mt-4 h-7 w-7 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="font-display mt-4 text-lg font-bold leading-snug text-slate-50">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{b.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
