import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, ChevronDown, ArrowRight, ArrowLeftRight } from "lucide-react";
import { Reveal, Overline } from "@/components/Reveal";

const ease = [0.22, 1, 0.36, 1];

export function ProductHero({ overline, title, highlight, subtitle, accent, testid, visual }) {
  const navigate = useNavigate();
  const isEmerald = accent === "emerald";
  return (
    <section data-testid={testid} className="bg-grid relative overflow-hidden pb-24 pt-40 lg:pb-32 lg:pt-48">
      <div
        className={`pointer-events-none absolute -top-20 left-1/3 h-[420px] w-[520px] rounded-full blur-[160px] ${
          isEmerald ? "bg-emerald-500/10" : "bg-cyan-500/10"
        }`}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <Reveal y={24}>
            <Overline accent={accent}>{overline}</Overline>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display mt-6 text-4xl font-black leading-[1.06] tracking-tighter text-slate-50 sm:text-5xl lg:text-6xl">
              {title}{" "}
              <span
                className={`bg-gradient-to-r bg-clip-text text-transparent ${
                  isEmerald ? "from-emerald-400 to-cyan-400" : "from-cyan-400 to-emerald-400"
                }`}
              >
                {highlight}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl leading-relaxed text-slate-400 md:text-lg">{subtitle}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/#contato")}
                data-testid={`${testid}-cta-demo`}
                className={`group flex items-center gap-3 rounded-full px-8 py-4 text-base font-bold text-slate-950 transition-[transform,box-shadow] duration-300 hover:scale-[1.04] ${
                  isEmerald
                    ? "bg-emerald-400 hover:shadow-[0_0_40px_rgba(52,211,153,0.5)]"
                    : "bg-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
                }`}
              >
                Solicitar demonstração
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate("/comparar-solucoes")}
                data-testid={`${testid}-cta-compare`}
                className="flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-slate-200 transition-[border-color,background-color,transform] duration-300 hover:scale-[1.03] hover:border-white/40 hover:bg-white/5"
              >
                <ArrowLeftRight className="h-4 w-4" />
                Comparar soluções
              </button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.25} className="lg:col-span-5">
          {visual}
        </Reveal>
      </div>
    </section>
  );
}

export function Challenges({ items, accent = "emerald" }) {
  return (
    <section data-testid="challenges-section" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Overline accent={accent}>O desafio</Overline>
          <h2 className="font-display mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
            Os obstáculos que o gestor enfrenta hoje
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c, i) => (
            <Reveal key={c} delay={i * 0.07}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-red-400/30">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400/80" />
                <p className="text-sm leading-relaxed text-slate-300 md:text-base">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Capabilities({ items, accent = "emerald", title = "O que a plataforma entrega" }) {
  return (
    <section data-testid="capabilities-section" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Overline accent={accent}>Funcionalidades</Overline>
          <h2 className="font-display mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
            {title}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                className={`group h-full rounded-2xl border border-white/10 bg-slate-900/40 p-7 transition-[border-color,background-color] duration-300 ${
                  accent === "emerald" ? "hover:border-emerald-400/40" : "hover:border-cyan-400/40"
                }`}
              >
                <span
                  className={`inline-flex rounded-xl border border-white/10 bg-white/5 p-3 ${
                    accent === "emerald" ? "text-emerald-400" : "text-cyan-400"
                  }`}
                >
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold text-slate-50">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessTimeline({ steps, accent = "emerald" }) {
  const line = accent === "emerald" ? "from-emerald-400 to-cyan-400" : "from-cyan-400 to-emerald-400";
  return (
    <section data-testid="process-section" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <Overline accent={accent}>Como funciona</Overline>
          <h2 className="font-display mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
            Uma jornada contínua, do dado à decisão
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute bottom-0 left-[22px] top-0 w-px bg-white/10 sm:left-1/2" />
          <motion.div
            className={`absolute left-[22px] top-0 w-px origin-top bg-gradient-to-b sm:left-1/2 ${line}`}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2.4, ease: "easeInOut" }}
            style={{ height: "100%" }}
          />
          <ol className="space-y-10">
            {steps.map((s, i) => (
              <Reveal key={s} delay={i * 0.08} y={26}>
                <li
                  className={`relative flex items-start gap-6 pl-16 sm:w-1/2 sm:pl-0 ${
                    i % 2 === 0 ? "sm:pr-14 sm:text-right" : "sm:ml-auto sm:pl-14"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-950 font-mono2 text-sm font-bold sm:left-auto ${
                      i % 2 === 0 ? "sm:-right-[22px]" : "sm:-left-[22px]"
                    } ${accent === "emerald" ? "text-emerald-400" : "text-cyan-400"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="glass w-full rounded-xl px-5 py-4 text-sm leading-relaxed text-slate-200 md:text-base">
                    {s}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function RoutineChanges({ items, accent = "emerald", title = "O que muda na rotina do gestor" }) {
  return (
    <section data-testid="routine-section" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Overline accent={accent}>Na prática</Overline>
          <h2 className="font-display mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
            {title}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {items.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-7">
                <h3 className="font-display text-lg font-bold text-slate-50">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400 md:text-base">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Profiles({ items, accent = "emerald" }) {
  return (
    <section data-testid="profiles-section" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Overline accent={accent}>Para quem é</Overline>
          <h2 className="font-display mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
            Perfis que usam a plataforma
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-slate-900/40 p-6 text-center transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-white/25">
                <span
                  className={`mx-auto inline-flex rounded-full border border-white/10 bg-white/5 p-3.5 ${
                    accent === "emerald" ? "text-emerald-400" : "text-cyan-400"
                  }`}
                >
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display mt-4 font-bold text-slate-50">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ({ items, accent = "emerald" }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section data-testid="faq-section" className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal>
          <Overline accent={accent}>Dúvidas frequentes</Overline>
          <h2 className="font-display mt-6 text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
            Perguntas e respostas
          </h2>
        </Reveal>
        <div className="mt-12 space-y-3">
          {items.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    data-testid={`faq-question-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/5"
                  >
                    <span className="font-display text-base font-semibold text-slate-100 md:text-lg">{f.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      } ${accent === "emerald" ? "text-emerald-400" : "text-cyan-400"}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-slate-400 md:text-base">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA({ title, text, accent = "emerald", testid = "final-cta" }) {
  const navigate = useNavigate();
  return (
    <section data-testid={testid} className="relative overflow-hidden py-24 lg:py-32">
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px] ${
          accent === "emerald" ? "bg-emerald-500/10" : "bg-cyan-500/10"
        }`}
      />
      <Reveal className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-slate-400 md:text-lg">{text}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate("/#contato")}
            data-testid={`${testid}-demo-button`}
            className={`group flex items-center gap-3 rounded-full px-8 py-4 text-base font-bold text-slate-950 transition-[transform,box-shadow] duration-300 hover:scale-[1.04] ${
              accent === "emerald"
                ? "bg-emerald-400 hover:shadow-[0_0_40px_rgba(52,211,153,0.5)]"
                : "bg-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
            }`}
          >
            Solicitar demonstração
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => navigate("/comparar-solucoes")}
            data-testid={`${testid}-compare-button`}
            className="rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-slate-200 transition-[border-color,background-color,transform] duration-300 hover:scale-[1.03] hover:border-white/40 hover:bg-white/5"
          >
            Comparar soluções
          </button>
        </div>
      </Reveal>
    </section>
  );
}
