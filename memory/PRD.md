# PRD — Africon GovTech (Landing Page Institucional)

## Problema original
Criar o design e a estrutura do site institucional da Africon, GovTech brasileira especializada em Inteligência Artificial, dados e software de gestão para o setor público. Destacar os produtos E-Quidade (inteligência educacional: SAEB, PNEERQ, VAAR) e XGovControl-IEG-M (governança e controle municipal), transmitindo inovação, credibilidade e foco na modernização da administração pública. Todo o conteúdo em Português (pt-BR). Formulário de demonstração apenas visual (mockado). Direção visual: futurista, com gráficos animados, nível Awwwards (hero cinético com reveal mascarado linha a linha, capítulos de manifesto numerados, marquee editorial, framer-motion, lenis, parallax).

## Personas
- Prefeitos e secretários municipais (decisores buscando modernização)
- Secretários de Educação (interessados no E-Quidade)
- Controladorias e órgãos de auditoria (foco no XGovControl-IEG-M)
- Equipes técnicas e planejadores (usuários de dashboards e relatórios)

## Arquitetura
- Frontend: React 19 + Tailwind + framer-motion + lenis + react-fast-marquee + sonner
- Backend: FastAPI + MongoDB (template padrão, sem endpoints específicos do produto — site é estático/mocked)
- Componentes: Header, Hero, EditorialMarquee, Manifesto, Products, Complementarity, Expertise, Benefits, Contact, Footer, Reveal (utilitário de animação)

## Requisitos centrais (estáticos)
- Conteúdo 100% em pt-BR
- Paleta institucional azul/verde/cinza (tema escuro: #020617, esmeralda #34d399, ciano #22d3ee)
- Seções: Header, Hero, Sobre (manifesto), Produtos, Complementaridade, Áreas de Atuação, Benefícios, CTA/Contato, Footer
- Layout moderno, limpo, responsivo; ícones ligados a dados, tecnologia e gestão pública

## Implementado
- 2026-08-24: Landing page completa com hero cinético (reveal mascarado linha a linha), núcleo de dados animado em SVG (gráfico de linha, barras, chips flutuantes, anéis orbitais), parallax no scroll, marquee editorial, manifesto em capítulos numerados (01/02/03), showcase dos produtos E-Quidade e XGovControl-IEG-M com gráficos animados (barras, gauge IEG-M, barras de progresso), seção de complementaridade, grid bento de áreas de atuação, benefícios, formulário de demonstração MOCKED com toast de confirmação, footer com logotipo gigante. Scroll suave com Lenis. Todos os elementos interativos com data-testid.

## Backlog priorizado
- P0: Envio real do formulário de demonstração (salvar leads no MongoDB ou Resend)
- P1: Páginas de detalhe por produto (E-Quidade e XGovControl-IEG-M)
- P1: Seção de cases/depoimentos de municípios
- P2: Blog/insights GovTech
- P2: Versão bilíngue (EN)

## Próximas tarefas
1. Persistir leads do formulário no backend
2. Área de login para gestores (dashboard demo)
