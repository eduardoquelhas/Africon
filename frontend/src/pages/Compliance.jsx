import { useNavigate } from "react-router-dom";
import {
  Scale, HeartHandshake, Eye, HandHelping, Lock, ShieldCheck,
  UserX, Gavel, Landmark, Users, ArrowRight, Megaphone, FileWarning,
} from "lucide-react";
import { Reveal, Overline } from "@/components/Reveal";
import { usePageMeta } from "@/components/usePageMeta";

const principles = [
  { icon: Scale, title: "Integridade e honestidade", text: "Agimos com retidão em todas as relações, decisões e entregas, sem exceções." },
  { icon: HeartHandshake, title: "Respeito e diversidade", text: "Valorizamos as pessoas e promovemos um ambiente livre de discriminação." },
  { icon: Eye, title: "Transparência", text: "Comunicamos com clareza o que fazemos, como fazemos e por quê." },
  { icon: HandHelping, title: "Responsabilidade", text: "Assumimos o compromisso com os resultados e com o impacto do nosso trabalho." },
  { icon: Lock, title: "Proteção de dados e confidencialidade", text: "Tratamos dados e informações com sigilo, segurança e conformidade legal." },
  { icon: ShieldCheck, title: "Segurança da informação", text: "Protegemos sistemas e informações contra acessos e usos indevidos." },
  { icon: UserX, title: "Prevenção de conflitos de interesse", text: "Identificamos e declaramos situações que possam comprometer a imparcialidade." },
  { icon: Gavel, title: "Combate à fraude e à corrupção", text: "Repudiamos qualquer forma de fraude, corrupção ou vantagem indevida." },
  { icon: Landmark, title: "Relacionamento ético com o setor público", text: "Relacionamo-nos com agentes públicos de forma íntegra, formal e transparente." },
  { icon: Users, title: "Responsabilidade com a sociedade", text: "Prestamos contas a clientes, parceiros, fornecedores e à sociedade." },
];

const guidelines = [
  { title: "Relacionamento com clientes e municípios", text: "Atuamos com compromisso técnico, clareza nas propostas e respeito às regras de contratação pública, sem prometer o que não podemos entregar." },
  { title: "Relacionamento com agentes públicos", text: "Toda interação com agentes públicos segue princípios de legalidade, impessoalidade e formalidade, sem favorecimentos ou tratamentos diferenciados." },
  { title: "Brindes, presentes e hospitalidades", text: "Não oferecemos nem aceitamos brindes, presentes ou hospitalidades que possam influenciar decisões ou gerar conflito de interesse." },
  { title: "Conflitos de interesse", text: "Colaboradores e parceiros devem declarar qualquer situação pessoal que possa conflitar com os interesses da AFRICON ou de seus clientes." },
  { title: "Assédio e discriminação", text: "Não toleramos assédio moral, sexual ou qualquer forma de discriminação, dentro ou fora do ambiente de trabalho." },
  { title: "Proteção de informações confidenciais", text: "Informações de clientes, municípios e parceiros são tratadas com confidencialidade e utilizadas apenas para as finalidades contratadas." },
  { title: "Uso responsável de dados e inteligência artificial", text: "Desenvolvemos e aplicamos IA com responsabilidade, transparência e respeito à legislação de proteção de dados, mantendo o gestor humano no centro das decisões." },
  { title: "Segurança da informação", text: "Adotamos práticas de segurança para proteger dados, sistemas e acessos, e esperamos o mesmo compromisso de todos os colaboradores e parceiros." },
  { title: "Relacionamento com fornecedores e parceiros", text: "Selecionamos fornecedores e parceiros por critérios técnicos e éticos, e exigimos adesão aos mesmos princípios deste código." },
  { title: "Comunicação e uso da marca AFRICON", text: "A marca AFRICON deve ser utilizada de forma autorizada, verdadeira e condizente com os valores da empresa." },
];

export default function Compliance() {
  const navigate = useNavigate();

  usePageMeta({
    title: "Código de Ética, Compliance e Integridade | Africon",
    description:
      "A AFRICON conduz suas relações com responsabilidade, transparência, respeito e compromisso com a integridade. Conheça nossos princípios e diretrizes de conduta.",
  });

  return (
    <main>
      <section data-testid="compliance-hero" className="bg-grid relative overflow-hidden pb-20 pt-40 lg:pt-48">
        <div className="pointer-events-none absolute -top-20 left-1/3 h-[400px] w-[500px] rounded-full bg-emerald-500/10 blur-[160px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal y={24}>
            <Overline>Ética · Compliance · Integridade</Overline>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display mt-6 max-w-4xl text-4xl font-black leading-[1.06] tracking-tighter text-slate-50 sm:text-5xl lg:text-6xl">
              Código de Ética,{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Compliance e Integridade
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-2xl leading-relaxed text-slate-400 md:text-lg">
              A AFRICON conduz suas relações com responsabilidade, transparência, respeito e
              compromisso com a integridade.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <button
              onClick={() => navigate("/canal-de-etica")}
              data-testid="compliance-cta-canal"
              className="group mt-10 flex items-center gap-3 rounded-full bg-emerald-400 px-8 py-4 text-base font-bold text-slate-950 transition-[transform,box-shadow] duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(52,211,153,0.5)]"
            >
              Acessar Canal de Ética
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>

      <section data-testid="compromisso-section" className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <Overline accent="cyan">Compromisso institucional</Overline>
            <h2 className="font-display mt-6 text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
              Integridade como fundamento
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 leading-relaxed text-slate-400 md:text-lg">
              <p>
                Como GovTech que atende o setor público, a AFRICON entende que a confiança é o seu
                ativo mais importante. Por isso, assumimos o compromisso de conduzir todas as nossas
                atividades com conduta ética, integridade e transparência.
              </p>
              <p>
                Cumprimos as leis e regulamentações aplicáveis, mantemos relações responsáveis e
                formais com o setor público, protegemos os dados que nos são confiados, respeitamos
                as pessoas com quem trabalhamos e atuamos ativamente na prevenção de fraudes e
                corrupção.
              </p>
              <p>
                Este código orienta colaboradores, parceiros e fornecedores da AFRICON e expressa,
                publicamente, o padrão de conduta que sustenta cada projeto que entregamos.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section data-testid="principios-section" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Overline>Princípios éticos</Overline>
            <h2 className="font-display mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
              Os valores que orientam cada decisão
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-white/10 bg-slate-900/40 p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
                  <p.icon className="h-6 w-6 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-display mt-5 text-lg font-bold text-slate-50">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="diretrizes-section" className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <Overline accent="cyan">Diretrizes de conduta</Overline>
            <h2 className="font-display mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
              Como agimos no dia a dia
            </h2>
          </Reveal>
          <div className="mt-14 space-y-4">
            {guidelines.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.04}>
                <div className="glass rounded-2xl p-7 transition-[border-color] duration-300 hover:border-white/20">
                  <h3 className="font-display flex items-center gap-3 text-lg font-bold text-slate-50">
                    <span className="font-mono2 text-sm text-cyan-400">{String(i + 1).padStart(2, "0")}</span>
                    {g.title}
                  </h3>
                  <p className="mt-3 pl-9 text-sm leading-relaxed text-slate-400 md:text-base">{g.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="denuncia-section" className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <div className="glass rounded-3xl p-10 md:p-14">
              <Megaphone className="h-9 w-9 text-emerald-400" />
              <h2 className="font-display mt-6 text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
                Relatos de boa-fé e não retaliação
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-slate-400 md:text-lg">
                <p>
                  Qualquer pessoa — colaborador, cliente, parceiro, fornecedor ou cidadão — pode
                  comunicar, de boa-fé, situações que estejam em desacordo com este código, com as
                  políticas internas ou com a legislação aplicável.
                </p>
                <p>
                  A AFRICON não tolera qualquer forma de retaliação contra quem relata uma
                  preocupação de boa-fé. Relatos podem ser feitos de forma identificada ou anônima.
                </p>
                <p className="flex items-start gap-3 rounded-xl border border-amber-400/20 bg-amber-400/5 px-5 py-4 text-sm text-slate-300">
                  <FileWarning className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                  Nesta etapa, o Canal de Ética é uma demonstração visual do fluxo de relato. O
                  envio definitivo e o armazenamento seguro serão habilitados após a integração com
                  o backend.
                </p>
              </div>
              <button
                onClick={() => navigate("/canal-de-etica")}
                data-testid="denuncia-cta-canal"
                className="group mt-8 flex items-center gap-3 rounded-full bg-emerald-400 px-8 py-4 text-base font-bold text-slate-950 transition-[transform,box-shadow] duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(52,211,153,0.5)]"
              >
                Registrar relato no Canal de Ética
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
