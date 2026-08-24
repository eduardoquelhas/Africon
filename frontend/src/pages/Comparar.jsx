import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Landmark, GraduationCap, ArrowRight, Check, RotateCcw, Sparkles, Puzzle, Users,
} from "lucide-react";
import { Reveal, Overline } from "@/components/Reveal";
import { usePageMeta } from "@/components/usePageMeta";

const ease = [0.22, 1, 0.36, 1];

const dimensions = [
  { dim: "Propósito principal", xgov: "Gestão e evolução dos indicadores do IEG-M", equidade: "Diagnóstico e acompanhamento da equidade educacional" },
  { dim: "Público principal", xgov: "Prefeituras, gestores e equipes responsáveis pelo IEG-M", equidade: "Secretarias de Educação, gestores e equipes pedagógicas" },
  { dim: "Foco de gestão", xgov: "Governança municipal e desempenho no IEG-M", equidade: "Políticas educacionais e redução de desigualdades" },
  { dim: "Nível de informação", xgov: "Município, dimensões, indicadores e evidências", equidade: "Município, escolas e indicadores educacionais disponíveis" },
  { dim: "Recursos principais", xgov: "Evidências, prazos, responsáveis e planos de ação", equidade: "Diagnósticos, indicadores e priorização de ações educacionais" },
  { dim: "Dashboards", xgov: "Gestão executiva do IEG-M", equidade: "Equidade e desempenho educacional" },
  { dim: "Planos de ação", xgov: "Voltados à melhoria da gestão municipal", equidade: "Voltados às prioridades educacionais" },
  { dim: "Benefício esperado", xgov: "Maior organização e acompanhamento da gestão", equidade: "Maior clareza sobre desigualdades e prioridades" },
  { dim: "Podem ser usados juntos?", xgov: "Sim", equidade: "Sim" },
];

const common = [
  "Dashboards executivos com indicadores atualizados",
  "Inteligência artificial para análise e recomendações",
  "Planos de ação com responsáveis e prazos",
  "Relatórios gerenciais para prestação de contas",
  "Histórico de evolução e apoio à decisão do gestor",
];

const questions = [
  {
    q: "Qual é o principal desafio do seu município?",
    options: [
      { label: "Organizar a gestão e os indicadores do IEG-M", score: "xgov" },
      { label: "Entender e reduzir desigualdades educacionais", score: "equidade" },
      { label: "Os dois desafios", score: "ambas" },
    ],
  },
  {
    q: "Você precisa acompanhar indicadores do IEG-M?",
    options: [
      { label: "Sim, é uma prioridade", score: "xgov" },
      { label: "Não é o foco agora", score: "equidade" },
      { label: "Sim, junto com a educação", score: "ambas" },
    ],
  },
  {
    q: "Você precisa analisar desigualdades educacionais?",
    options: [
      { label: "Sim, é uma prioridade", score: "equidade" },
      { label: "Não é o foco agora", score: "xgov" },
      { label: "Sim, junto com a gestão municipal", score: "ambas" },
    ],
  },
  {
    q: "Precisa organizar evidências, responsáveis e prazos?",
    options: [
      { label: "Sim, principalmente da gestão", score: "xgov" },
      { label: "Sim, principalmente da educação", score: "equidade" },
      { label: "Sim, das duas áreas", score: "ambas" },
    ],
  },
  {
    q: "Sua prioridade está relacionada a qual área?",
    options: [
      { label: "Gestão municipal", score: "xgov" },
      { label: "Educação", score: "equidade" },
      { label: "Às duas áreas", score: "ambas" },
    ],
  },
];

const recommendations = {
  xgov: {
    name: "XGovControl-IEG-M",
    icon: Landmark,
    color: "cyan",
    text: "Seu perfil indica foco em governança, indicadores e conformidade do IEG-M. O XGovControl-IEG-M é a solução mais alinhada ao seu momento.",
    to: "/produtos/xgovcontrol-iegm",
  },
  equidade: {
    name: "E-Quidade",
    icon: GraduationCap,
    color: "emerald",
    text: "Seu perfil indica foco em equidade e desempenho educacional. O E-Quidade é a solução mais alinhada ao seu momento.",
    to: "/produtos/e-quidade",
  },
  ambas: {
    name: "As duas soluções",
    icon: Puzzle,
    color: "both",
    text: "Seu perfil combina desafios de governança municipal e de educação. XGovControl-IEG-M e E-Quidade foram desenhados para funcionar juntos.",
    to: null,
  },
};

function Selector() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({ xgov: 0, equidade: 0, ambas: 0 });
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  const answer = (s) => {
    const next = { ...scores, [s]: scores[s] + 1 };
    setScores(next);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const result = () => {
    if (scores.ambas >= 2 || (scores.xgov > 0 && scores.equidade > 0)) return recommendations.ambas;
    return scores.xgov >= scores.equidade ? recommendations.xgov : recommendations.equidade;
  };

  const reset = () => {
    setStep(0);
    setScores({ xgov: 0, equidade: 0, ambas: 0 });
    setDone(false);
  };

  const r = done ? result() : null;

  return (
    <div data-testid="solucao-selector" className="glass mx-auto max-w-3xl rounded-3xl p-8 md:p-12">
      <div className="mb-8 flex items-center justify-between">
        <span className="font-mono2 text-xs uppercase tracking-[0.2em] text-slate-400">
          <Sparkles className="mr-2 inline h-4 w-4 text-emerald-400" />
          Qual solução escolher?
        </span>
        {!done && (
          <span className="font-mono2 text-xs text-slate-500" aria-live="polite">
            {step + 1} / {questions.length}
          </span>
        )}
      </div>

      {!done && (
        <div className="mb-8 h-1 overflow-hidden rounded-full bg-white/10" role="progressbar" aria-valuenow={step + 1} aria-valuemax={questions.length}>
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
            animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      )}

      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35, ease }}
          >
            <h3 className="font-display text-xl font-bold text-slate-50 md:text-2xl">
              {questions[step].q}
            </h3>
            <div className="mt-6 space-y-3">
              {questions[step].options.map((o) => (
                <button
                  key={o.label}
                  onClick={() => answer(o.score)}
                  data-testid={`selector-option-${step}-${o.score}`}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-6 py-4 text-left text-sm font-medium text-slate-200 transition-[border-color,background-color,transform] duration-300 hover:scale-[1.01] hover:border-emerald-400/50 hover:bg-emerald-400/5 md:text-base"
                >
                  {o.label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease }}
            className="text-center"
            data-testid="selector-result"
          >
            <r.icon
              className={`mx-auto h-12 w-12 ${
                r.color === "cyan" ? "text-cyan-400" : r.color === "emerald" ? "text-emerald-400" : "text-emerald-400"
              }`}
            />
            <p className="font-mono2 mt-4 text-xs uppercase tracking-[0.25em] text-slate-400">
              recomendação indicativa
            </p>
            <h3 className="font-display mt-2 text-3xl font-black text-slate-50">{r.name}</h3>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-400">{r.text}</p>
            <p className="mt-3 text-xs text-slate-500">
              Esta é uma recomendação indicativa gerada no navegador, sem envio de dados.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {(r.to ? [r.to] : ["/produtos/xgovcontrol-iegm", "/produtos/e-quidade"]).map((to) => (
                <button
                  key={to}
                  onClick={() => navigate(to)}
                  data-testid={`selector-cta-${to.split("/").pop()}`}
                  className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-[border-color,background-color] duration-300 hover:border-emerald-400/50 hover:bg-emerald-400/5"
                >
                  {to.includes("xgov") ? "Conhecer XGovControl-IEG-M" : "Conhecer E-Quidade"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              ))}
              <button
                onClick={() => navigate("/#contato")}
                data-testid="selector-cta-demo"
                className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold text-slate-950 transition-[transform,box-shadow] duration-300 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(52,211,153,0.45)]"
              >
                Solicitar demonstração
              </button>
              <button
                onClick={reset}
                data-testid="selector-reset"
                className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-slate-400 transition-colors hover:text-slate-100"
              >
                <RotateCcw className="h-4 w-4" />
                Refazer
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Comparar() {
  const navigate = useNavigate();

  usePageMeta({
    title: "Comparar Soluções — XGovControl-IEG-M vs E-Quidade | Africon",
    description:
      "Compare XGovControl-IEG-M e E-Quidade: propósito, público, recursos e benefícios. Descubra qual solução Africon é ideal para o seu município.",
  });

  return (
    <main>
      <section data-testid="comparar-hero" className="bg-grid relative overflow-hidden pb-16 pt-40 lg:pt-48">
        <div className="pointer-events-none absolute -top-20 left-1/3 h-[400px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal y={24}>
            <Overline accent="cyan">Comparar Soluções</Overline>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display mt-6 max-w-4xl text-4xl font-black leading-[1.06] tracking-tighter text-slate-50 sm:text-5xl lg:text-6xl">
              Duas soluções,{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                um só ecossistema
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-2xl leading-relaxed text-slate-400 md:text-lg">
              Entenda as diferenças, os pontos em comum e descubra qual combinação atende melhor o
              seu município.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-2 lg:px-10">
          {[
            {
              icon: Landmark, name: "XGovControl-IEG-M", color: "cyan", to: "/produtos/xgovcontrol-iegm",
              desc: "Inteligência, governança e controle para uma gestão municipal mais eficiente e preparada para o IEG-M.",
              ideal: "Prefeituras e equipes que precisam organizar indicadores, evidências, responsáveis e prazos da gestão municipal.",
            },
            {
              icon: GraduationCap, name: "E-Quidade", color: "emerald", to: "/produtos/e-quidade",
              desc: "Inteligência de dados aplicada à promoção da equidade e melhoria da educação pública.",
              ideal: "Secretarias de Educação que precisam diagnosticar desigualdades e priorizar ações com base em dados.",
            },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12}>
              <div
                data-testid={`comparar-card-${p.name === "E-Quidade" ? "equidade" : "xgov"}`}
                className={`group h-full rounded-2xl border border-white/10 bg-slate-900/40 p-8 transition-[border-color,transform] duration-300 hover:-translate-y-1 ${
                  p.color === "cyan" ? "hover:border-cyan-400/40" : "hover:border-emerald-400/40"
                }`}
              >
                <p.icon className={`h-8 w-8 ${p.color === "cyan" ? "text-cyan-400" : "text-emerald-400"}`} />
                <h2 className="font-display mt-5 text-2xl font-black text-slate-50">{p.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">{p.desc}</p>
                <p className="mt-4 text-xs leading-relaxed text-slate-500">
                  <span className="font-bold uppercase tracking-wider text-slate-400">Ideal para: </span>
                  {p.ideal}
                </p>
                <button
                  onClick={() => navigate(p.to)}
                  data-testid={`comparar-card-cta-${p.name === "E-Quidade" ? "equidade" : "xgov"}`}
                  className={`mt-6 flex items-center gap-2 text-sm font-bold transition-colors ${
                    p.color === "cyan" ? "text-cyan-400 hover:text-cyan-300" : "text-emerald-400 hover:text-emerald-300"
                  }`}
                >
                  Ver página do produto
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section data-testid="comparacao-tabela-section" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Overline>Comparação detalhada</Overline>
            <h2 className="font-display mt-6 text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
              Lado a lado
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-12 hidden md:block">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm" data-testid="comparacao-tabela">
                <thead>
                  <tr className="border-b border-white/10 bg-slate-900/70">
                    <th scope="col" className="px-6 py-5 font-mono2 text-xs uppercase tracking-[0.2em] text-slate-400">
                      Dimensão
                    </th>
                    <th scope="col" className="px-6 py-5">
                      <span className="flex items-center gap-2 font-display text-base font-bold text-cyan-400">
                        <Landmark className="h-4 w-4" /> XGovControl-IEG-M
                      </span>
                    </th>
                    <th scope="col" className="px-6 py-5">
                      <span className="flex items-center gap-2 font-display text-base font-bold text-emerald-400">
                        <GraduationCap className="h-4 w-4" /> E-Quidade
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dimensions.map((d, i) => (
                    <tr key={d.dim} className={`border-b border-white/5 transition-colors hover:bg-white/[0.03] ${i % 2 ? "bg-slate-900/20" : ""}`}>
                      <th scope="row" className="px-6 py-4 font-semibold text-slate-200">{d.dim}</th>
                      <td className="px-6 py-4 text-slate-400">{d.xgov}</td>
                      <td className="px-6 py-4 text-slate-400">{d.equidade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <div className="mt-12 space-y-3 md:hidden" data-testid="comparacao-cards-mobile">
            {dimensions.map((d) => (
              <Reveal key={d.dim}>
                <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
                  <p className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-slate-500">{d.dim}</p>
                  <p className="mt-3 text-sm text-slate-300">
                    <span className="font-bold text-cyan-400">XGovControl-IEG-M: </span>
                    {d.xgov}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    <span className="font-bold text-emerald-400">E-Quidade: </span>
                    {d.equidade}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <Overline>Capacidades comuns</Overline>
            <h2 className="font-display mt-6 text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
              O que as duas compartilham
            </h2>
            <ul className="mt-8 space-y-4">
              {common.map((c, i) => (
                <Reveal key={c} delay={i * 0.06}>
                  <li className="flex items-start gap-3 text-sm text-slate-300 md:text-base">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    {c}
                  </li>
                </Reveal>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <Overline accent="cyan">Principais diferenças</Overline>
            <h2 className="font-display mt-6 text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
              Onde cada uma se destaca
            </h2>
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                <p className="font-display font-bold text-cyan-400">XGovControl-IEG-M</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Olha para a gestão municipal como um todo: dimensões do IEG-M, evidências, prazos,
                  responsáveis e planos de ação de todas as secretarias.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
                <p className="font-display font-bold text-emerald-400">E-Quidade</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Mergulha na educação: indicadores oficiais, desigualdades entre escolas e
                  territórios, e priorização de ações pedagógicas.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section data-testid="selector-section" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mb-12 text-center">
            <div className="flex justify-center">
              <Overline>Interativo</Overline>
            </div>
            <h2 className="font-display mx-auto mt-6 max-w-2xl text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
              Responda 5 perguntas e descubra a solução ideal
            </h2>
          </Reveal>
          <Selector />
        </div>
      </section>

      <section className="pb-24 pt-8 lg:pb-32">
        <Reveal className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4 px-6">
          <Link
            to="/produtos/xgovcontrol-iegm"
            data-testid="comparar-cta-xgov"
            className="flex items-center gap-2 rounded-full border border-cyan-400/40 px-7 py-3.5 text-sm font-bold text-cyan-300 transition-[background-color,transform] duration-300 hover:scale-[1.03] hover:bg-cyan-400/10"
          >
            <Landmark className="h-4 w-4" />
            XGovControl-IEG-M
          </Link>
          <Link
            to="/produtos/e-quidade"
            data-testid="comparar-cta-equidade"
            className="flex items-center gap-2 rounded-full border border-emerald-400/40 px-7 py-3.5 text-sm font-bold text-emerald-300 transition-[background-color,transform] duration-300 hover:scale-[1.03] hover:bg-emerald-400/10"
          >
            <GraduationCap className="h-4 w-4" />
            E-Quidade
          </Link>
          <button
            onClick={() => navigate("/#contato")}
            data-testid="comparar-cta-demo"
            className="rounded-full bg-emerald-400 px-8 py-3.5 text-sm font-bold text-slate-950 transition-[transform,box-shadow] duration-300 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(52,211,153,0.45)]"
          >
            Solicitar demonstração
          </button>
        </Reveal>
      </section>
    </main>
  );
}
