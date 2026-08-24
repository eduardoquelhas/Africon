import { motion } from "framer-motion";
import {
  LayoutDashboard, Layers, FolderCheck, Users, Bell, ListChecks, FileBarChart,
  History, Compass, Crown, ShieldCheck, UserCog, UsersRound, Activity,
} from "lucide-react";
import { Reveal, Overline } from "@/components/Reveal";
import {
  ProductHero, Challenges, Capabilities, ProcessTimeline, RoutineChanges,
  Profiles, FAQ, FinalCTA,
} from "@/components/ProductBlocks";
import { usePageMeta } from "@/components/usePageMeta";

const ease = [0.22, 1, 0.36, 1];

function MockDashboard() {
  const r = 46;
  const c = 2 * Math.PI * r;
  return (
    <div className="glass relative rounded-3xl p-6 shadow-[0_0_80px_rgba(34,211,238,0.08)]">
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-slate-400">
          painel executivo · IEG-M
        </span>
        <Activity className="h-4 w-4 text-cyan-400" />
      </div>
      <div className="flex items-center gap-6">
        <div className="relative h-32 w-32 shrink-0">
          <svg viewBox="0 0 112 112" className="h-full w-full -rotate-90">
            <circle cx="56" cy="56" r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="9" />
            <motion.circle
              cx="56" cy="56" r={r} fill="none" stroke="#22d3ee" strokeWidth="9" strokeLinecap="round"
              strokeDasharray={c}
              initial={{ strokeDashoffset: c }}
              whileInView={{ strokeDashoffset: c * 0.18 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.8, ease }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-2xl font-black text-slate-50">82%</span>
            <span className="font-mono2 text-[9px] uppercase tracking-widest text-slate-400">conformidade</span>
          </div>
        </div>
        <div className="flex-1 space-y-3">
          {[
            { label: "Evidências validadas", v: 84 },
            { label: "Prazos em dia", v: 91 },
            { label: "Planos de ação ativos", v: 76 },
          ].map((b, i) => (
            <div key={b.label}>
              <div className="mb-1 flex justify-between text-[11px] text-slate-400">
                <span>{b.label}</span>
                <span className="font-mono2 text-cyan-400">{b.v}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${b.v}%` }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: 0.3 + i * 0.2, duration: 1, ease }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-5 flex items-center gap-3 rounded-xl border border-amber-400/20 bg-amber-400/5 px-4 py-3"
      >
        <Bell className="h-4 w-4 shrink-0 text-amber-400" />
        <p className="text-xs text-slate-300">
          <span className="font-semibold text-amber-300">Alerta de IA:</span> 2 evidências da
          dimensão Gestão Fiscal vencem em 7 dias.
        </p>
      </motion.div>
      <p className="mt-4 text-center font-mono2 text-[10px] uppercase tracking-[0.2em] text-slate-600">
        exemplo ilustrativo de interface
      </p>
    </div>
  );
}

const challenges = [
  "Informações dispersas entre planilhas, pastas e sistemas",
  "Falta de acompanhamento centralizado das dimensões do IEG-M",
  "Dificuldade para organizar evidências e comprovações",
  "Prazos e responsabilidades pouco visíveis para a equipe",
  "Planos de ação sem acompanhamento contínuo",
  "Dificuldade para transformar resultados do IEG-M em ações práticas",
];

const capabilities = [
  { icon: LayoutDashboard, title: "Painel executivo", text: "Visão consolidada das dimensões, indicadores e pendências do IEG-M em tempo real." },
  { icon: Layers, title: "Gestão das dimensões do IEG-M", text: "Cada dimensão organizada com seus indicadores, metas e situação atual." },
  { icon: FolderCheck, title: "Organização de evidências", text: "Documentos e comprovações vinculados a cada indicador, sempre auditáveis." },
  { icon: Users, title: "Controle de responsáveis e prazos", text: "Cada tarefa tem dono e data — nada fica sem acompanhamento." },
  { icon: Bell, title: "Alertas e notificações", text: "Alertas inteligentes antecipam vencimentos, pendências e riscos de conformidade." },
  { icon: ListChecks, title: "Planos de ação", text: "Criação e acompanhamento de planos de ação vinculados a cada oportunidade de melhoria." },
  { icon: FileBarChart, title: "Relatórios gerenciais", text: "Relatórios claros para prefeito, secretários e órgãos de controle." },
  { icon: History, title: "Histórico de evolução", text: "Linha do tempo da gestão: compare ciclos e mostre a evolução do município." },
  { icon: Compass, title: "Apoio à tomada de decisão", text: "Sínteses inteligentes que indicam onde agir primeiro para ganhar pontos no IEG-M." },
];

const steps = [
  "Importação e organização das informações do município",
  "Análise das dimensões do IEG-M",
  "Identificação de pendências e oportunidades",
  "Distribuição de responsabilidades entre as equipes",
  "Criação dos planos de ação",
  "Acompanhamento dos prazos com alertas automáticos",
  "Monitoramento da evolução dos indicadores",
  "Apoio à decisão do gestor com evidências",
];

const routine = [
  { title: "Reuniões com pauta pronta", text: "O painel mostra o que avançou, o que travou e o que vence — a reunião começa sabendo onde agir." },
  { title: "Fim da caça às evidências", text: "Documentos ficam vinculados aos indicadores certos, prontos para auditoria ou prestação de contas." },
  { title: "Responsabilidades visíveis", text: "Cada secretaria sabe exatamente o que precisa entregar e até quando." },
  { title: "IEG-M como rotina, não como correria", text: "A preparação deixa de ser um esforço concentrado antes da avaliação e vira um processo contínuo." },
];

const municipioBenefits = [
  "Gestão municipal organizada e orientada por evidências",
  "Maior previsibilidade no acompanhamento de prazos e obrigações",
  "Evolução consistente nos indicadores do IEG-M",
  "Transparência e prestação de contas fortalecidas",
  "Redução de retrabalho e de processos manuais",
  "Cultura de dados instalada entre as secretarias",
];

const profiles = [
  { icon: Crown, title: "Prefeito(a)", text: "Acompanha a gestão por painéis executivos e toma decisões com evidências." },
  { icon: ShieldCheck, title: "Controladoria", text: "Audita evidências, prazos e responsabilidades com rastreabilidade." },
  { icon: UserCog, title: "Secretários", text: "Gerenciam suas dimensões, planos de ação e entregas." },
  { icon: UsersRound, title: "Equipes técnicas", text: "Alimentam indicadores e evidências em fluxo simples e guiado." },
];

const faq = [
  { q: "O que é o IEG-M?", a: "O IEG-M (Índice de Efetividade da Gestão Municipal) é uma avaliação que mede a qualidade da gestão dos municípios em diversas dimensões, como planejamento, finanças e governança. O XGovControl-IEG-M organiza todo o trabalho de preparação e evolução nesse índice." },
  { q: "A plataforma substitui os sistemas que já usamos?", a: "Não. O XGovControl-IEG-M atua como uma camada de inteligência e governança sobre as informações do município, organizando indicadores, evidências e prazos em um único ambiente." },
  { q: "Quem alimenta as informações na plataforma?", a: "As próprias equipes municipais, de forma distribuída: cada responsável registra suas evidências e entregas, enquanto a gestão acompanha tudo de forma centralizada." },
  { q: "Como os alertas inteligentes funcionam?", a: "A plataforma monitora prazos, pendências e indicadores e notifica os responsáveis antes dos vencimentos, ajudando a evitar perdas de prazo e não conformidades." },
];

export default function ProductXGov() {
  usePageMeta({
    title: "XGovControl-IEG-M — Governança e controle para a gestão municipal | Africon",
    description:
      "Centralize indicadores, responsáveis, documentos, prazos e planos de ação do IEG-M em uma única plataforma de inteligência e governança municipal.",
  });

  return (
    <main>
      <ProductHero
        testid="xgov-hero"
        overline="XGovControl-IEG-M · Gestão Municipal"
        title="Transforme a gestão do IEG-M em um processo"
        highlight="contínuo e orientado por evidências."
        subtitle="Centralize indicadores, responsáveis, documentos, prazos e planos de ação em uma única plataforma para apoiar a evolução da gestão municipal."
        accent="cyan"
        visual={<MockDashboard />}
      />
      <Challenges items={challenges} accent="cyan" />
      <Capabilities items={capabilities} accent="cyan" />
      <ProcessTimeline steps={steps} accent="cyan" />
      <RoutineChanges items={routine} accent="cyan" />

      <section data-testid="xgov-municipio-benefits" className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <Overline accent="cyan">Benefícios para o município</Overline>
            <h2 className="font-display mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
              Uma gestão mais organizada, transparente e eficiente
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {municipioBenefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.06}>
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900/40 px-5 py-4 transition-[border-color] duration-300 hover:border-cyan-400/40">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                  <p className="text-sm text-slate-300 md:text-base">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Profiles items={profiles} accent="cyan" />
      <FAQ items={faq} accent="cyan" />
      <FinalCTA
        testid="xgov-final-cta"
        title="Leve o IEG-M para a rotina da sua gestão"
        text="Veja na prática como o XGovControl-IEG-M organiza indicadores, evidências e prazos do seu município em uma demonstração guiada."
        accent="cyan"
      />
    </main>
  );
}
