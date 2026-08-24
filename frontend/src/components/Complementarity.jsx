import { motion } from "framer-motion";
import { GraduationCap, Landmark, ArrowDown } from "lucide-react";
import { Reveal, Overline } from "@/components/Reveal";

export default function Complementarity() {
  return (
    <section
      data-testid="complementarity-section"
      className="relative overflow-hidden py-28 lg:py-36"
    >
      <img
        src="https://images.unsplash.com/photo-1683064325134-3acfdef9c6d7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHw0fHxmdXR1cmlzdGljJTIwZGF0YSUyMGFic3RyYWN0JTIwd2F2ZXN8ZW58MHx8fHwxNzg3NTkzNTgwfDA&ixlib=rb-4.1.0&q=85"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/70 to-[#020617]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Overline accent="cyan">Complementaridade</Overline>
          </div>
          <h2 className="font-display mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
            Educação e governança, conectadas pela mesma inteligência
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-400 md:text-lg">
            O E-Quidade cuida da equidade e do desempenho educacional. O XGovControl-IEG-M sustenta
            a governança e o controle municipal. Juntos, formam um ecossistema único de decisão
            pública baseada em dados.
          </p>
        </Reveal>

        <div className="mx-auto mt-20 grid max-w-4xl items-stretch gap-6 md:grid-cols-[1fr_auto_1fr]">
          <Reveal delay={0.1}>
            <div className="glass group h-full rounded-2xl p-8 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
              <GraduationCap className="h-8 w-8 text-emerald-400" />
              <h3 className="font-display mt-5 text-2xl font-bold text-slate-50">E-Quidade</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Foco na educação: equidade, aprendizagem e desempenho da rede escolar, do SAEB ao
                VAAR.
              </p>
            </div>
          </Reveal>

          <div className="flex items-center justify-center">
            <div className="relative flex h-16 w-16 items-center justify-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/20" />
              <span className="glass relative flex h-14 w-14 items-center justify-center rounded-full">
                <ArrowDown className="h-5 w-5 rotate-0 text-slate-200 md:-rotate-90" />
              </span>
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="glass group h-full rounded-2xl p-8 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
              <Landmark className="h-8 w-8 text-cyan-400" />
              <h3 className="font-display mt-5 text-2xl font-bold text-slate-50">XGovControl-IEG-M</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Foco na governança municipal: indicadores, evidências, prazos e conformidade com o
                IEG-M.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="mt-14 text-center">
          <p className="font-mono2 mx-auto max-w-xl text-sm leading-relaxed tracking-wide text-slate-300">
            <motion.span
              className="text-emerald-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              ●
            </motion.span>{" "}
            dados fluem entre as plataformas —{" "}
            <span className="text-slate-50">uma só visão do município</span>{" "}
            <motion.span
              className="text-cyan-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, delay: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              ●
            </motion.span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
