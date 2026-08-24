# AFRICON — Guia de Identidade Visual
### Referência para o SaaS E-Quidade · Versão 1.0 · Agosto/2026

Documento de handoff da identidade visual construída no site institucional da Africon. O objetivo é que o produto SaaS E-Quidade pareça parte do mesmo ecossistema: moderno, tecnológico, institucional e confiável para o setor público.

---

## 1. Conceito

**"Inteligência no escuro"** — um tema escuro profundo onde dados brilham. A interface é o "cenário noturno da sala de controle": superfícies de vidro, gráficos luminosos e tipografia grande e confiante. A luz (esmeralda e ciano) é sempre informação, nunca decoração.

Sensação-alvo: futurista, preciso, governamental, premium. Nada de gradientes roxos, sombras suaves genéricas ou cards uniformes de template.

---

## 2. Paleta de cores

| Papel | Token | Hex | Uso |
|---|---|---|---|
| Fundo principal | `bg-base` | `#020617` (slate-950) | Fundo de todas as telas |
| Superfície elevada | `bg-surface` | `#0f172a` (slate-900) | Cards, painéis, modais |
| Vidro | `glass` | `rgba(15,23,42,0.6)` + blur 18px + borda `rgba(255,255,255,0.08)` | Header, cards flutuantes, overlays |
| Primária (E-Quidade) | `accent-emerald` | `#34d399` (emerald-400) | CTAs, destaques, dados educacionais |
| Secundária (governança) | `accent-cyan` | `#22d3ee` (cyan-400) | Dados de gestão/IEG-M, foco de inputs |
| Gradiente de marca | — | `linear-gradient(90deg, #34d399 → #22d3ee)` | Palavras-chave em títulos, botões principais de formulário |
| Texto primário | `text-primary` | `#f8fafc` (slate-50) | Títulos e dados importantes |
| Texto secundário | `text-secondary` | `#94a3b8` (slate-400) | Parágrafos, labels |
| Texto terciário | `text-muted` | `#64748b` (slate-500/600) | Overlines, metadados |
| Borda padrão | `border` | `rgba(255,255,255,0.08–0.10)` | Divisores, contornos de card |
| Alerta | `amber-400` | `#fbbf24` | Alertas de IA, avisos |
| Erro | `red-400` | `#f87171` | Validação de formulário |

**Regra de acentos:** esmeralda = educação/equidade (E-Quidade) e ação principal; ciano = governança/gestão (XGovControl) e foco interativo. No SaaS E-Quidade, o esmeralda é dominante e o ciano aparece como contraste em dados secundários.

**Glows ambientes:** manchas radiais desfocadas (`blur 100–160px`) de emerald/cyan a 8–10% de opacidade, posicionadas fora do centro. Nunca usar gradientes de fundo em grandes áreas — o fundo é sólido escuro.

---

## 3. Tipografia

| Papel | Fonte | Pesos | Uso |
|---|---|---|---|
| Display/títulos | **Outfit** | 700–900 | H1–H3, números de destaque, logotipo |
| Corpo/UI | **Plus Jakarta Sans** | 300–700 | Parágrafos, labels, botões, tabelas |
| Dados/código | **JetBrains Mono** | 400–700 | Overlines, métricas, protocolos, labels técnicos |

Import (Google Fonts):
```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
```

**Escala:**
- H1: `text-5xl md:text-6xl lg:text-7xl`, Outfit 900, `tracking-tighter`, `leading-[1.02]`
- H2: `text-4xl md:text-5xl`, Outfit 700, `tracking-tight`
- H3: `text-2xl md:text-3xl`, Outfit 600
- Corpo: `text-base md:text-lg`, `leading-relaxed`, slate-400
- Overline (assinatura da marca): JetBrains Mono, `text-xs`, 700, UPPERCASE, `tracking-[0.25em–0.32em]`, em esmeralda ou ciano — ex.: `E-QUIDADE · EDUCAÇÃO PÚBLICA`

**Assinatura tipográfica:** texto vazado com contorno para números e elementos monumentais:
```css
.text-stroke { -webkit-text-stroke: 1px rgba(148,163,184,0.35); color: transparent; }
```

---

## 4. Superfícies e texturas

1. **Glassmorphism** (assinatura): `bg rgba(15,23,42,.6)` + `backdrop-blur 18px` + borda branca 8% + cantos `rounded-2xl/3xl`.
2. **Grid técnico de fundo:** linhas de 1px slate a 5% de opacidade, célula 72px, apenas em heros/destaques.
3. **Ruído sutil:** overlay fixo de ruído SVG a 3–4% de opacidade sobre o app inteiro (remove a "planicidade digital").
4. **Bordas finas:** 1px, cantos retos ou `rounded-xl/2xl`. **Proibido sombras suaves difusas** — profundidade vem de glow colorido (`box-shadow: 0 0 40px rgba(52,211,153,0.45)`), blur e camadas de z-index.
5. **Clip em cards de mídia:** canto cortado via `clip-path: polygon(...)` em frames de destaque (opcional no produto).

---

## 5. Componentes-chave

- **Botão primário:** pill (`rounded-full`), fundo `#34d399`, texto `#020617` 700, hover: `scale 1.04` + glow esmeralda + seta que desliza (`translate-x-1`).
- **Botão secundário:** pill, borda `white/15`, texto slate-200, hover: borda ciano 50% + fundo ciano 5%.
- **Card de funcionalidade:** vidro ou slate-900/40, ícone em chip quadrado (`border white/10` + `bg white/5`), hover: sobe 4–6px e borda acende na cor do acento.
- **Chip/tag de status:** pill pequeno em vidro, ícone 16px + JetBrains Mono 11px.
- **Input:** fundo slate-900/60, borda white/10, `rounded-xl`, foco: borda ciano + anel `0 0 0 3px rgba(34,211,238,0.12)`; erro: borda red-400 + mensagem inline em pt-BR.
- **Gráficos de dados (assinatura do produto):** linhas e barras com gradiente emerald→ciano sobre trilho `white/10`, animadas ao entrar na viewport (linha desenha via `pathLength`, barras crescem de baixo, medidor circular com `stroke-dashoffset`). Sempre rotulados "exemplo ilustrativo de interface" quando não forem dados reais.
- **Overlines + linha divisória:** toda seção abre com overline mono colorido seguido de título Outfit grande.

---

## 6. Movimento

- **Scroll suave:** Lenis (`lerp: 0.09`).
- **Easing padrão:** `cubic-bezier(0.22, 1, 0.36, 1)` — saída longa e elegante.
- **Entrada de seção:** fade + `y: 44px → 0`, 0.9s, `viewport margin -80px`, stagger de 60–100ms entre irmãos.
- **Hero:** reveal mascarado linha a linha (`overflow-hidden` + `y: 110% → 0`, stagger 160ms).
- **Micro-interações:** hover com transição apenas nas propriedades usadas (nunca `transition: all`), duração 300ms; ícones levantam/escalam 110%.
- **Marquee editorial:** texto vazado gigante rolando devagar (~32 speed).
- **Timeline de processo:** linha vertical gradiente que "desenha" (`scaleY 0→1`) ao entrar na viewport.
- **Acessibilidade de movimento:** respeitar `prefers-reduced-motion` (desligar spins, dash-flow e reveals).

---

## 7. Iconografia e logo

- Biblioteca: **lucide-react**, traço consistente, 16–28px, sempre na cor do acento da seção.
- Sem emojis. Ícones de dados, governança e educação (Gauge, GraduationCap, Landmark, BrainCircuit, FolderCheck…).
- **Logotipo:** wordmark `AFRICON` em Outfit 900 — "AFRI" slate-50 + "CON" esmeralda `#34d399`; descriptor "GOVTECH" em mono 10px tracking 0.3em ao lado.

---

## 8. Layout e espaçamento

- Container: `max-w-7xl`, padding lateral `px-6 lg:px-10`.
- Respiro generoso: seções `py-24 lg:py-32` (use 2–3x o espaçamento que parecer confortável).
- Alinhamento **à esquerda** por padrão; grids assimétricos (12 colunas, spans 5/7, 4/8) — evitar simetria de template.
- Grid bento para coleções (cards com spans variados).
- Breakpoints: mobile-first; nav completa só em `xl` (1280px+).

---

## 9. Voz e conteúdo

- **Idioma:** 100% português brasileiro, profissional e direto.
- **Tom:** institucional e confiável + inovador e tecnológico; termos técnicos sempre explicados (ex.: explicar o que é IEG-M na FAQ).
- **Integridade de conteúdo:** nunca afirmar clientes, resultados ou métricas como fatos reais; dados de interface de exemplo sempre rotulados como ilustrativos.

---

## 10. Acessibilidade

- Contraste: texto slate-400+ sobre `#020617`; overlay escuro sobre imagens.
- Foco visível (anel ciano), `aria-expanded/controls` em dropdowns/acordeões, `role=radio/progressbar` nos padrões criados, `data-testid` em todo elemento interativo (kebab-case).
- HTML semântico e hierarquia correta de headings.

---

## 11. Do's & Don'ts

**Faça:** dados luminosos sobre escuro, vidro, mono para metadados, movimento com propósito, esmeralda como cor do E-Quidade.
**Não faça:** gradientes roxos/rocho em fundos claros, fundo claro em geral, Inter/Roboto, cards iguais em grade simétrica, sombras cinzas difusas, `transition: all`, emojis como ícones.

---

### Stack de referência (já no projeto)
Tailwind CSS · framer-motion · lenis · react-fast-marquee · lucide-react · sonner (toasts)
