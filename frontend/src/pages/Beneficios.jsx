import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowLeftRight, Crown, UsersRound, Building2,
  ShieldCheck, Gauge, Eye,
} from "lucide-react";
import { Reveal, Overline } from "@/components/Reveal";
import { usePageMeta } from "@/components/usePageMeta";

const pairs = [
  { antes: "Informações dispersas", depois: "Dados organizados em um único ambiente" },
  { antes: "Acompanhamento manual", depois: "Visão centralizada da evolução" },
  { antes: "Dificuldade para definir prioridades", depois: "Indicadores que apoiam a priorização" },
  { antes: "Responsabilidades pouco claras", depois: "Responsáveis e atividades visíveis" },
  { antes: "Prazos acompanhados por planilhas", depois: "Acompanhamento estruturado de prazos" },
  { antes: "Decisões reativas", depois: "Decisões orientadas por evidências" },
  { antes: "Relatórios demorados", depois: "Informações gerenciais mais acessíveis" },
];

const audiences = [
  {
    icon: Crown,
    title: "Gestores estratégicos",
    items: ["Visão executiva da gestão em tempo real", "Prioridades claras para decidir com rapidez", "Evidências para defender investimentos"],
  },
  {
    icon: UsersRound,
    title: "Equipes técnicas",
    items: ["Menos trabalho manual e retrabalho", "Fluxos guiados para registrar evidências", "Relatórios gerados com poucos cliques"],
  },
  {
    icon: Building2,
    title: "Secretarias municipais",
    items: ["Responsabilidades e prazos visíveis", "Indicadores próprios organizados", "Colaboração entre áreas sobre a mesma base de dados"],
  },
];

const improvements = [
  { icon: ShieldCheck, title: "Governança", text: "Processos, responsáveis e evidências estruturados fortalecem o controle interno e a accountability." },
  { icon: Gauge, title: "Monitoramento", text: "Indicadores e prazos acompanhados continuamente, com alertas antes dos vencimentos." },
  { icon: Eye, title: "Transparência e accountability", text: "Prestação de contas mais clara para órgãos de controle e para a sociedade." },
];

export default function Beneficios() {
  const [view, setView] = useState("depois");
  const navigate = useNavigate();

  usePageMeta({
    title: "Benefícios — O que muda na rotina do gestor | Africon",
    description:
      "Veja o antes e depois de usar as soluções Africon: dados organizados, prazos visíveis, decisões orientadas por evidências e relatórios acessíveis.",
  });

  return (
    <main>
      <section data-testid="beneficios-hero" className="bg-grid relative overflow-hidden pb-16 pt-40 lg:pt-48">
        <div className="pointer-events-none absolute -top-20 left-1/3 h-[400px] w-[500px] rounded-full bg-emerald-500/10 blur-[160px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal y={24}>
            <Overline>Benefícios</Overline>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display mt-6 max-w-4xl text-4xl font-black leading-[1.06] tracking-tighter text-slate-50 sm:text-5xl lg:text-6xl">
              O que muda na{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                rotina do gestor
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-2xl leading-relaxed text-slate-400 md:text-lg">
              O antes e depois de quem passa a decidir com dados organizados, prazos visíveis e
              inteligência artificial ao lado.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-testid="antes-depois-section" className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal className="flex justify-center">
            <div
              role="tablist"
              aria-label="Alternar entre antes e depois"
              className="glass inline-flex rounded-full p-1.5"
            >
              {[
                { id: "antes", label: "Antes" },
                { id: "depois", label: "Com as soluções AFRICON" },
              ].map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={view === t.id}
                  onClick={() => setView(t.id)}
                  data-testid={`toggle-${t.id}`}
                  className={`relative rounded-full px-6 py-3 text-sm font-bold transition-colors duration-300 ${
                    view === t.id ? "text-slate-950" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {view === t.id && (
                    <motion.span
                      layoutId="antes-depois-pill"
                      className={`absolute inset-0 rounded-full ${t.id === "depois" ? "bg-emerald-400" : "bg-slate-500"}`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-14 space-y-3">
            {pairs.map((p, i) => (
              <Reveal key={p.antes} delay={i * 0.05} y={20}>
                <div className="grid items-stretch gap-3 sm:grid-cols-2">
                  <motion.div
                    animate={{
                      opacity: view === "antes" ? 1 : 0.35,
                      scale: view === "antes" ? 1 : 0.985,
                    }}
                    transition={{ duration: 0.4 }}
                    className="rounded-xl border border-white/10 bg-slate-900/40 px-6 py-5"
                  >
                    <p className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-slate-500">Antes</p>
                    <p className="mt-1.5 text-sm font-medium text-slate-300 md:text-base">{p.antes}</p>
                  </motion.div>
                  <motion.div
                    animate={{
                      opacity: view === "depois" ? 1 : 0.35,
                      scale: view === "depois" ? 1 : 0.985,
                    }}
                    transition={{ duration: 0.4 }}
                    className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-6 py-5"
                  >
                    <p className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-emerald-400">
                      Com as soluções AFRICON
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-slate-100 md:text-base">{p.depois}</p>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="audiencias-section" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Overline accent="cyan">Para cada perfil</Overline>
            <h2 className="font-display mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
              Benefícios para toda a estrutura municipal
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.1}>
                <div className="glass h-full rounded-2xl p-8 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-emerald-400/30">
                  <a.icon className="h-7 w-7 text-emerald-400" />
                  <h3 className="font-display mt-5 text-xl font-bold text-slate-50">{a.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {a.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="melhorias-section" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Overline>Impacto institucional</Overline>
            <h2 className="font-display mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
              Melhorias que vão além da operação
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {improvements.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-white/10 bg-slate-900/40 p-8 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
                  <m.icon className="h-7 w-7 text-cyan-400" />
                  <h3 className="font-display mt-5 text-xl font-bold text-slate-50">{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-16 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/comparar-solucoes")}
              data-testid="beneficios-cta-comparar"
              className="flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-slate-200 transition-[border-color,background-color,transform] duration-300 hover:scale-[1.03] hover:border-white/40 hover:bg-white/5"
            >
              <ArrowLeftRight className="h-4 w-4" />
              Comparar soluções
            </button>
            <button
              onClick={() => navigate("/#contato")}
              data-testid="beneficios-cta-demo"
              className="group flex items-center gap-3 rounded-full bg-emerald-400 px-8 py-4 text-base font-bold text-slate-950 transition-[transform,box-shadow] duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(52,211,153,0.5)]"
            >
              Solicitar demonstração
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
