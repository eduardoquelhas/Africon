import {
  Scale,
  GraduationCap,
  Gauge,
  FolderCheck,
  FileSearch,
  BrainCircuit,
} from "lucide-react";
import { Reveal, Overline } from "@/components/Reveal";

const areas = [
  {
    icon: Scale,
    title: "Governança",
    text: "Estruturas de decisão, controle interno e accountability para prefeituras modernas.",
    span: "md:col-span-7",
  },
  {
    icon: GraduationCap,
    title: "Educação",
    text: "Equidade e desempenho escolar orientados por dados oficiais e inteligência territorial.",
    span: "md:col-span-5",
  },
  {
    icon: Gauge,
    title: "Indicadores municipais",
    text: "Painéis vivos de metas, resultados e desempenho — do IEG-M aos indicadores locais.",
    span: "md:col-span-4",
  },
  {
    icon: FolderCheck,
    title: "Gestão de evidências",
    text: "Documentos, comprovações e prazos organizados e auditáveis em um só lugar.",
    span: "md:col-span-4",
  },
  {
    icon: FileSearch,
    title: "Análise de documentos",
    text: "IA lê, classifica e extrai informações de grandes volumes documentais.",
    span: "md:col-span-4",
  },
  {
    icon: BrainCircuit,
    title: "Inteligência aplicada",
    text: "Agentes inteligentes que recomendam ações, antecipam riscos e automatizam rotinas.",
    span: "md:col-span-12",
  },
];

export default function Expertise() {
  return (
    <section id="atuacao" data-testid="expertise-section" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Overline>Áreas de atuação</Overline>
          <h2 className="font-display mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
            Onde a nossa inteligência{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              atua
            </span>
          </h2>
        </Reveal>

        <div data-testid="expertise-grid" className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-12">
          {areas.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.07} className={a.span}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-8 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-slate-900/70">
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-400/0 blur-3xl transition-[background-color] duration-500 group-hover:bg-emerald-400/15" />
                <a.icon className="h-7 w-7 text-emerald-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
                <h3 className="font-display mt-6 text-xl font-bold text-slate-50 md:text-2xl">
                  {a.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-400 md:text-base">
                  {a.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
