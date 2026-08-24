import { motion } from "framer-motion";
import {
  HeartPulse, LayoutDashboard, School, Search, GitCompareArrows, ListOrdered,
  FileBarChart, TrendingUp, Compass, Crown, GraduationCap, UserCog, UsersRound, Activity,
} from "lucide-react";
import { Reveal, Overline } from "@/components/Reveal";
import {
  ProductHero, Challenges, Capabilities, ProcessTimeline, RoutineChanges,
  Profiles, FAQ, FinalCTA,
} from "@/components/ProductBlocks";
import { usePageMeta } from "@/components/usePageMeta";

const ease = [0.22, 1, 0.36, 1];

function MockDashboard() {
  return (
    <div className="glass relative rounded-3xl p-6 shadow-[0_0_80px_rgba(52,211,153,0.08)]">
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-slate-400">
          equidade educacional · visão da rede
        </span>
        <Activity className="h-4 w-4 text-emerald-400" />
      </div>
      <svg viewBox="0 0 240 90" className="w-full">
        <motion.path
          d="M0 70 L34 62 L64 66 L96 46 L128 52 L160 30 L196 36 L240 14"
          fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 78 L34 74 L64 76 L96 68 L128 70 L160 60 L196 63 L240 52"
          fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="4 6"
          className="animate-dash-flow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4 }}
        />
      </svg>
      <div className="mt-5 space-y-2.5">
        {[
          { name: "Escola Municipal Horizonte", v: 92 },
          { name: "EM Prof.ª Aurora Lima", v: 71 },
          { name: "Escola do Campo Esperança", v: 48 },
        ].map((s, i) => (
          <div key={s.name}>
            <div className="mb-1 flex justify-between text-[11px] text-slate-400">
              <span>{s.name}</span>
              <span className="font-mono2 text-emerald-400">{s.v}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className={`h-full rounded-full ${s.v < 60 ? "bg-amber-400" : "bg-gradient-to-r from-emerald-500 to-cyan-400"}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${s.v}%` }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.3 + i * 0.2, duration: 1, ease }}
              />
            </div>
          </div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3"
      >
        <Compass className="h-4 w-4 shrink-0 text-emerald-400" />
        <p className="text-xs text-slate-300">
          <span className="font-semibold text-emerald-300">Recomendação de IA:</span> priorizar
          reforço em alfabetização na zona rural.
        </p>
      </motion.div>
      <p className="mt-4 text-center font-mono2 text-[10px] uppercase tracking-[0.2em] text-slate-600">
        exemplo ilustrativo de interface
      </p>
    </div>
  );
}

const challenges = [
  "Dados educacionais dispersos entre sistemas e planilhas",
  "Dificuldade para visualizar desigualdades entre escolas e territórios",
  "Indicadores pouco acessíveis aos gestores",
  "Falta de visão territorial e comparativa da rede",
  "Dificuldade para definir prioridades de investimento",
  "Necessidade de acompanhar a evolução das ações ao longo do tempo",
];

const capabilities = [
  { icon: HeartPulse, title: "Diagnóstico da equidade educacional", text: "Raio-x da rede: onde estão as maiores desigualdades de aprendizagem e acesso." },
  { icon: LayoutDashboard, title: "Painéis de indicadores", text: "SAEB, PNEERQ, VAAR e indicadores próprios em dashboards claros e atualizados." },
  { icon: School, title: "Análises por escola e município", text: "Recortes por escola, território e rede para enxergar cada realidade." },
  { icon: Search, title: "Identificação de desigualdades", text: "Cruzamentos inteligentes que revelam gaps entre regiões, escolas e perfis de alunos." },
  { icon: GitCompareArrows, title: "Comparação de resultados", text: "Compare ciclos, escolas e indicadores para medir evolução real." },
  { icon: ListOrdered, title: "Priorização de ações", text: "Recomendações de IA indicam onde cada real investido gera mais equidade." },
  { icon: FileBarChart, title: "Relatórios gerenciais", text: "Relatórios prontos para secretaria, prefeitura e conselhos." },
  { icon: TrendingUp, title: "Acompanhamento da evolução", text: "Monitore se as ações adotadas estão de fato reduzindo desigualdades." },
  { icon: Compass, title: "Apoio à tomada de decisão", text: "Sínteses objetivas para transformar diagnóstico em política educacional." },
];

const steps = [
  "Entrada dos dados educacionais do município",
  "Organização e validação das informações",
  "Processamento dos indicadores (SAEB, PNEERQ, VAAR)",
  "Identificação de desigualdades pela inteligência artificial",
  "Visualização por escola, território e município",
  "Priorização das necessidades da rede",
  "Definição das ações educacionais",
  "Monitoramento dos resultados ao longo do tempo",
];

const routine = [
  { title: "Diagnóstico sempre pronto", text: "O gestor abre o painel e vê a situação da equidade na rede sem esperar relatórios manuais." },
  { title: "Prioridades claras", text: "A IA aponta escolas e territórios que mais precisam de atenção, com justificativa nos dados." },
  { title: "Decisões com respaldo", text: "Cada ação educacional é definida sobre evidências, facilitando a defesa de investimentos." },
  { title: "Evolução visível", text: "O acompanhamento contínuo mostra se as ações estão funcionando — e onde ajustar a rota." },
];

const secretariaBenefits = [
  "Visão única da equidade educacional do município",
  "Indicadores oficiais (SAEB, PNEERQ, VAAR) organizados e acessíveis",
  "Identificação objetiva de desigualdades entre escolas e territórios",
  "Priorização de ações com recomendações de inteligência artificial",
  "Relatórios gerenciais prontos para prestação de contas",
  "Acompanhamento da evolução das políticas educacionais",
];

const profiles = [
  { icon: Crown, title: "Prefeito(a)", text: "Acompanha o desempenho da educação como política pública prioritária." },
  { icon: GraduationCap, title: "Secretário(a) de Educação", text: "Define prioridades e ações com base no diagnóstico de equidade." },
  { icon: UserCog, title: "Equipe pedagógica", text: "Analisa indicadores por escola e planeja intervenções direcionadas." },
  { icon: UsersRound, title: "Equipes técnicas", text: "Organizam dados, geram relatórios e monitoram a evolução dos indicadores." },
];

const faq = [
  { q: "Quais indicadores o E-Quidade utiliza?", a: "A plataforma trabalha com avaliações e indicadores oficiais da educação brasileira, como SAEB, PNEERQ e VAAR, além de dados próprios do município, sempre respeitando a disponibilidade das fontes." },
  { q: "O que significa 'equidade educacional' na prática?", a: "Equidade significa garantir que cada estudante receba o apoio necessário conforme sua realidade. O E-Quidade mostra onde estão as desigualdades — entre escolas, territórios e perfis de alunos — para que a gestão direcione recursos a quem mais precisa." },
  { q: "As recomendações de IA substituem a decisão do gestor?", a: "Não. A inteligência artificial organiza os dados, identifica desigualdades e sugere prioridades, mas a decisão final é sempre do gestor, com mais clareza e respaldo técnico." },
  { q: "É possível acompanhar a evolução das ações?", a: "Sim. A plataforma monitora indicadores ao longo do tempo, permitindo verificar se as ações adotadas estão reduzindo as desigualdades identificadas." },
];

export default function ProductEQuidade() {
  usePageMeta({
    title: "E-Quidade — Inteligência de dados para equidade na educação pública | Africon",
    description:
      "Reúna indicadores educacionais (SAEB, PNEERQ, VAAR), identifique desigualdades e apoie a gestão municipal na definição de ações educacionais mais direcionadas.",
  });

  return (
    <main>
      <ProductHero
        testid="equidade-hero"
        overline="E-Quidade · Educação Pública"
        title="Transforme dados educacionais em diagnósticos para promover"
        highlight="mais equidade."
        subtitle="Reúna indicadores, identifique desigualdades e apoie a gestão municipal na definição de ações educacionais mais direcionadas."
        accent="emerald"
        visual={<MockDashboard />}
      />
      <Challenges items={challenges} accent="emerald" />
      <Capabilities items={capabilities} accent="emerald" />
      <ProcessTimeline steps={steps} accent="emerald" />
      <RoutineChanges items={routine} accent="emerald" />

      <section data-testid="equidade-secretaria-benefits" className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <Overline>Benefícios para a Secretaria de Educação</Overline>
            <h2 className="font-display mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
              Educação pública com clareza, prioridade e propósito
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {secretariaBenefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.06}>
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900/40 px-5 py-4 transition-[border-color] duration-300 hover:border-emerald-400/40">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                  <p className="text-sm text-slate-300 md:text-base">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Profiles items={profiles} accent="emerald" />
      <FAQ items={faq} accent="emerald" />
      <FinalCTA
        testid="equidade-final-cta"
        title="Coloque a equidade no centro da sua política educacional"
        text="Conheça em uma demonstração guiada como o E-Quidade transforma os dados da sua rede em diagnósticos e prioridades de ação."
        accent="emerald"
      />
    </main>
  );
}
