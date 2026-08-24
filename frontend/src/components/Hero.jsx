import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Activity, TrendingUp, ShieldCheck } from "lucide-react";
import { scrollTo } from "@/components/Header";

const lines = [
  { before: "Transformamos ", accent: "informação", after: "" },
  { before: "em ", accent: "melhores decisões", after: "" },
  { before: "", accent: "públicas.", after: "" },
];

const ease = [0.22, 1, 0.36, 1];

function DataCore() {
  return (
    <div className="relative aspect-square w-full max-w-[520px]">
      {/* anéis orbitais */}
      <div className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-emerald-400/20" />
      <div className="animate-spin-slower absolute inset-[12%] rounded-full border border-cyan-400/15" />
      <div className="absolute inset-[24%] rounded-full border border-white/5" />

      {/* núcleo luminoso */}
      <div className="absolute inset-[30%] rounded-full bg-emerald-400/10 blur-2xl" />
      <div className="absolute inset-[38%] rounded-full bg-cyan-400/10 blur-xl" />

      {/* painel de gráfico animado */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 1, ease }}
        className="glass absolute left-[8%] top-[16%] w-[62%] rounded-2xl p-5 shadow-[0_0_60px_rgba(52,211,153,0.12)]"
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-slate-400">
            indicadores ao vivo
          </span>
          <Activity className="h-4 w-4 text-emerald-400" />
        </div>
        <svg viewBox="0 0 200 80" className="w-full">
          <motion.path
            d="M0 62 L28 54 L52 58 L78 38 L104 44 L130 24 L156 30 L200 10"
            fill="none"
            stroke="#34d399"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, delay: 1.3, ease: "easeInOut" }}
          />
          <motion.path
            d="M0 70 L28 66 L52 68 L78 60 L104 62 L130 52 L156 55 L200 44"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            className="animate-dash-flow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 2 }}
          />
          {[78, 130, 200].map((x, i) => (
            <motion.circle
              key={x}
              cx={x}
              cy={[38, 24, 10][i]}
              r="3.5"
              fill="#34d399"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.4, 1] }}
              transition={{ delay: 1.6 + i * 0.35, duration: 0.5 }}
            />
          ))}
        </svg>
        <div className="mt-3 flex gap-1.5">
          {[40, 65, 50, 80, 58, 92, 70].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 origin-bottom rounded-sm bg-gradient-to-t from-emerald-500/40 to-cyan-400/70"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1.4 + i * 0.12, duration: 0.6, ease }}
              style={{ height: `${h * 0.4}px` }}
            />
          ))}
        </div>
      </motion.div>

      {/* chips flutuantes */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.8, ease }}
        className="glass absolute bottom-[18%] right-[4%] flex items-center gap-3 rounded-xl px-4 py-3"
      >
        <TrendingUp className="h-5 w-5 text-emerald-400" />
        <div>
          <p className="font-display text-lg font-bold leading-none text-slate-50">+37%</p>
          <p className="text-[11px] text-slate-400">eficiência operacional</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8, ease }}
        className="glass absolute right-[16%] top-[6%] flex items-center gap-2.5 rounded-xl px-4 py-2.5"
      >
        <ShieldCheck className="h-4 w-4 text-cyan-400" />
        <p className="font-mono2 text-[11px] font-medium text-slate-200">IEG-M ready</p>
      </motion.div>

      {/* partículas */}
      {[
        { x: "12%", y: "70%", d: 0 },
        { x: "85%", y: "55%", d: 0.6 },
        { x: "55%", y: "88%", d: 1.2 },
      ].map((p, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400"
          style={{ left: p.x, top: p.y }}
          animate={{ y: [0, -14, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3.5, delay: p.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      data-testid="hero-section"
      className="bg-grid relative flex min-h-screen items-center overflow-hidden pt-[72px]"
    >
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-emerald-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-12 lg:px-10">
        <motion.div style={{ y: textY, opacity: fade }} className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="mb-8 font-mono2 text-xs font-bold uppercase tracking-[0.32em] text-emerald-400"
            data-testid="hero-overline"
          >
            Africon — GovTech · Inteligência Artificial · Dados
          </motion.p>

          <h1 className="font-display text-5xl font-black leading-[1.02] tracking-tighter text-slate-50 sm:text-6xl lg:text-7xl">
            {lines.map((l, i) => (
              <span key={i} className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.55 + i * 0.16, ease }}
                >
                  {l.before}
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {l.accent}
                  </span>
                  {l.after}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.25, ease }}
            className="mt-8 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg"
            data-testid="hero-subtitle"
          >
            GovTech de Inteligência Artificial, Dados e Software de Gestão para transformar
            informação em melhores decisões públicas — modernizando a administração municipal
            brasileira.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.45, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo("#produtos")}
              data-testid="hero-cta-solutions"
              className="group flex items-center gap-3 rounded-full bg-emerald-400 px-8 py-4 text-base font-bold text-slate-950 transition-[transform,box-shadow,background-color] duration-300 hover:scale-[1.04] hover:bg-emerald-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.5)]"
            >
              Conheça nossas soluções
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("#contato")}
              data-testid="hero-cta-demo"
              className="rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-slate-200 transition-[border-color,background-color,transform] duration-300 hover:scale-[1.03] hover:border-cyan-400/50 hover:bg-cyan-400/5"
            >
              Solicite uma demonstração
            </button>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: visualY, opacity: fade }} className="hidden justify-center lg:col-span-5 lg:flex">
          <DataCore />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono2 text-[10px] uppercase tracking-[0.3em] text-slate-500">explore</span>
        <motion.span
          className="h-10 w-px bg-gradient-to-b from-emerald-400 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
