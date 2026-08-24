import { Reveal, Overline } from "@/components/Reveal";

const chapters = [
  {
    num: "01",
    title: "Nossa visão",
    text: "Uma administração pública moderna, orientada por dados e inteligência artificial, em que cada decisão municipal é tomada com clareza, evidência e responsabilidade. A Africon nasceu para tornar essa visão realidade nas prefeituras brasileiras.",
  },
  {
    num: "02",
    title: "O desafio",
    text: "Gestores públicos tomam decisões de alto impacto todos os dias, mas enfrentam dados dispersos, processos manuais e prazos de conformidade cada vez mais exigentes. Informação existe — o que falta é inteligência para transformá-la em ação.",
  },
  {
    num: "03",
    title: "A solução",
    text: "Combinamos IA, automação e software de gestão em plataformas que organizam indicadores, evidências e prazos, e recomendam caminhos. O gestor deixa de apagar incêndios e passa a planejar o futuro da sua cidade.",
  },
];

export default function Manifesto() {
  return (
    <section id="sobre" data-testid="manifesto-section" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Overline>Sobre a Africon</Overline>
          <h2 className="font-display mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
            Um manifesto pela gestão pública{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              inteligente
            </span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-20 lg:col-span-7">
            {chapters.map((c, i) => (
              <Reveal key={c.num} delay={i * 0.1}>
                <div className="grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-12">
                  <span className="text-stroke font-mono2 text-6xl font-bold sm:col-span-3 md:text-7xl">
                    {c.num}
                  </span>
                  <div className="sm:col-span-9">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
                      {c.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-slate-400 md:text-lg">{c.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1452696193712-6cabf5103b63?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBnZW9tZXRyaWMlMjBhcmNoaXRlY3R1cmUlMjBnbGFzc3xlbnwwfHx8fDE3ODMyMzIxMjN8MA&ixlib=rb-4.1.0&q=85"
                alt="Arquitetura moderna em vidro refletindo o céu, símbolo da administração pública contemporânea"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-emerald-400">
                  modernização · automação · IA
                </p>
                <p className="font-display mt-3 text-2xl font-bold leading-snug text-slate-50">
                  Tecnologia a serviço de quem governa para todos.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
