import { motion } from "framer-motion";
import { GraduationCap, Landmark, BarChart3, Bell, FileSearch, Sparkles } from "lucide-react";
import { Reveal, Overline } from "@/components/Reveal";
import { scrollTo } from "@/components/Header";

const ease = [0.22, 1, 0.36, 1];

function AnimatedBars({ color = "emerald", delay = 0 }) {
  const bars = [45, 70, 55, 88, 62, 95, 74, 60];
  return (
    <div className="flex h-24 items-end gap-2">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className={`flex-1 origin-bottom rounded-t-sm ${
            color === "emerald"
              ? "bg-gradient-to-t from-emerald-500/30 to-emerald-400/80"
              : "bg-gradient-to-t from-cyan-500/30 to-cyan-400/80"
          }`}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: delay + i * 0.09, duration: 0.7, ease }}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function AnimatedGauge({ delay = 0 }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-36 w-36">
      <svg viewBox="0 0 128 128" className="h-full w-full -rotate-90">
        <circle cx="64" cy="64" r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="10" />
        <motion.circle
          cx="64"
          cy="64"
          r={r}
          fill="none"
          stroke="#22d3ee"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c * (1 - 0.87) }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay, duration: 1.8, ease }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-3xl font-black text-slate-50">87</span>
        <span className="font-mono2 text-[10px] uppercase tracking-widest text-slate-400">IEG-M</span>
      </div>
    </div>
  );
}

const products = [
  {
    id: "equidade",
    testid: "product-equidade-card",
    icon: GraduationCap,
    accent: "emerald",
    tag: "Educação pública",
    name: "E-Quidade",
    headline: "Inteligência de dados aplicada à promoção da equidade e melhoria da educação pública",
    description:
      "Plataforma de inteligência educacional que consolida SAEB, PNEERQ e VAAR em dashboards vivos. A IA cruza indicadores, identifica desigualdades e recomenda ações concretas para elevar a aprendizagem em cada escola da rede.",
    features: [
      { icon: BarChart3, text: "Dashboards SAEB, PNEERQ e VAAR em tempo real" },
      { icon: Sparkles, text: "Recomendações de IA para reduzir desigualdades" },
      { icon: FileSearch, text: "Análise territorial por escola e por aluno" },
    ],
    image:
      "https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Interface digital futurista com gráficos de análise de dados educacionais",
  },
  {
    id: "xgov",
    testid: "product-xgov-card",
    icon: Landmark,
    accent: "cyan",
    tag: "Gestão municipal",
    name: "XGovControl-IEG-M",
    headline:
      "Inteligência, governança e controle para uma gestão municipal mais eficiente e preparada para o IEG-M",
    description:
      "Plataforma de gestão pública que organiza indicadores, evidências e prazos em um único painel. Alertas inteligentes de IA antecipam riscos de conformidade e mantêm o município permanentemente preparado para o IEG-M.",
    features: [
      { icon: BarChart3, text: "Indicadores e metas monitorados continuamente" },
      { icon: FileSearch, text: "Gestão de evidências e prazos automatizada" },
      { icon: Bell, text: "Alertas de IA para riscos e não conformidades" },
    ],
    image:
      "https://images.pexels.com/photos/27141314/pexels-photo-27141314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Interface tecnológica dinâmica com elementos interativos de governança de dados",
  },
];

function ProductPanel({ p, index }) {
  const reversed = index % 2 === 1;
  const accentText = p.accent === "emerald" ? "text-emerald-400" : "text-cyan-400";
  const accentBg = p.accent === "emerald" ? "bg-emerald-400" : "bg-cyan-400";
  const Icon = p.icon;

  return (
    <Reveal>
      <article
        data-testid={p.testid}
        className={`grid items-center gap-12 lg:grid-cols-12 lg:gap-16 ${
          index > 0 ? "mt-28 lg:mt-36" : ""
        }`}
      >
        <div className={`lg:col-span-6 ${reversed ? "lg:order-2" : ""}`}>
          <div className={`flex items-center gap-3 font-mono2 text-xs font-bold uppercase tracking-[0.25em] ${accentText}`}>
            <Icon className="h-4 w-4" />
            {p.tag}
          </div>
          <h3 className="font-display mt-5 text-4xl font-black tracking-tight text-slate-50 md:text-5xl">
            {p.name}
          </h3>
          <p className={`mt-4 text-lg font-semibold leading-snug md:text-xl ${accentText}`}>
            {p.headline}
          </p>
          <p className="mt-5 leading-relaxed text-slate-400 md:text-lg">{p.description}</p>
          <ul className="mt-8 space-y-4">
            {p.features.map((f, i) => (
              <Reveal key={i} delay={0.15 + i * 0.1} y={20}>
                <li className="flex items-start gap-4">
                  <span className={`mt-0.5 rounded-lg border border-white/10 bg-white/5 p-2 ${accentText}`}>
                    <f.icon className="h-4 w-4" />
                  </span>
                  <span className="text-slate-300">{f.text}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <button
            onClick={() => scrollTo("#contato")}
            data-testid={`${p.id}-demo-button`}
            className={`group mt-10 flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-bold text-slate-100 transition-[border-color,background-color,transform] duration-300 hover:scale-[1.03] ${
              p.accent === "emerald"
                ? "hover:border-emerald-400/60 hover:bg-emerald-400/10"
                : "hover:border-cyan-400/60 hover:bg-cyan-400/10"
            }`}
          >
            Quero conhecer o {p.name}
            <span className={`h-1.5 w-1.5 rounded-full ${accentBg} transition-transform duration-300 group-hover:scale-150`} />
          </button>
        </div>

        <div className={`relative lg:col-span-6 ${reversed ? "lg:order-1" : ""}`}>
          <div
            className={`pointer-events-none absolute -inset-10 rounded-full blur-[100px] ${
              p.accent === "emerald" ? "bg-emerald-500/10" : "bg-cyan-500/10"
            }`}
          />
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 [clip-path:polygon(0_0,100%_0,100%_calc(100%-3rem),calc(100%-3rem)_100%,0_100%)]">
            <img
              src={p.image}
              alt={p.imageAlt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
            <div className="glass absolute bottom-5 left-5 right-5 rounded-xl p-4">
              {p.id === "equidade" ? <AnimatedBars color="emerald" /> : (
                <div className="flex items-center justify-between gap-6">
                  <AnimatedGauge />
                  <div className="flex-1 space-y-2.5">
                    {["Metas no prazo", "Evidências validadas", "Alertas resolvidos"].map((label, i) => (
                      <div key={label}>
                        <div className="mb-1 flex justify-between text-[11px] text-slate-400">
                          <span>{label}</span>
                          <span className="font-mono2 text-cyan-400">{[92, 84, 97][i]}%</span>
                        </div>
                        <div className="h-1 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            className="h-full rounded-full bg-cyan-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${[92, 84, 97][i]}%` }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ delay: 0.3 + i * 0.15, duration: 1, ease }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Products() {
  return (
    <section id="produtos" data-testid="products-section" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Overline>Produtos</Overline>
          <h2 className="font-display mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
            Duas plataformas,{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              uma estratégia
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-slate-400 md:text-lg">
            Soluções complementares que levam inteligência artificial e dados para o centro da
            gestão pública municipal.
          </p>
        </Reveal>

        <div className="mt-20">
          {products.map((p, i) => (
            <ProductPanel key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
