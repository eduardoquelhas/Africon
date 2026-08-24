import Marquee from "react-fast-marquee";

const items = [
  "Inteligência Artificial",
  "Dados",
  "Software de Gestão",
  "Decisões Públicas",
  "Equidade",
  "Governança",
  "Transparência",
];

export default function EditorialMarquee() {
  return (
    <div
      data-testid="editorial-marquee"
      className="relative overflow-hidden border-y border-white/5 py-10"
    >
      <Marquee speed={32} gradient={false} pauseOnHover>
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-stroke font-display mx-8 text-4xl font-black uppercase tracking-tight md:text-6xl">
              {item}
            </span>
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
