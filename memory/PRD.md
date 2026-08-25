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
- 2026-08-24 (fase 2, frontend-only conforme AFRICON_Emergent_Frontend_Prompt.txt): React Router com rotas /produtos/xgovcontrol-iegm, /produtos/e-quidade, /beneficios, /comparar-solucoes, /compliance-integridade, /canal-de-etica. Menu "Produtos" com dropdown acessível (desktop) e acordeão (mobile). Páginas de produto animadas com hero, desafios, 9 funcionalidades, timeline de 8 etapas, rotina do gestor, benefícios, perfis de usuário, FAQ e CTA final. Página Benefícios com toggle animado Antes/Depois. Página Comparar Soluções com tabela responsiva (cards no mobile), capacidades comuns, diferenças e seletor interativo de 5 perguntas com recomendação indicativa. Página de Compliance com conteúdo original (10 princípios, 10 diretrizes, não retaliação). Canal de Ética com formulário multi-etapas (6 passos), validação inline, máscara de telefone BR, anexos simulados, revisão, protocolo simulado com botão de copiar — sem persistência. SEO/metadata por página. Arquivos: pages/*, components/ProductBlocks.jsx, ScrollToTop.jsx, usePageMeta.js, Header.jsx e Footer.jsx reescritos.

## Placeholders que exigem backend na próxima fase
- Formulário "Solicite uma demonstração" (home) — envio/persistência real
- Canal de Ética — envio seguro, armazenamento e upload real de evidências

## Backlog priorizado
- P0: Backend real para formulário de demonstração e Canal de Ética (envio seguro, armazenamento, upload de evidências)
- P1: Seção de cases/depoimentos de municípios (quando houver dados reais)
- P2: Blog/insights GovTech
- P2: Versão bilíngue (EN)

## Próximas tarefas
1. Persistir leads do formulário no backend
2. Envio real e armazenamento seguro do Canal de Ética
3. Área de login para gestores (dashboard demo)

## Kit LinkedIn (Junho/2026)
- `/app/africon_linkedin_logo_1200.png` — foto de perfil (1200x1200, quadrado, seguro para corte circular)
- `/app/africon_linkedin_capa_empresa_2256x382.png` — capa da página da empresa (1128x191 @2x)
- `/app/africon_linkedin_capa_perfil_1584x396.png` — capa de perfil pessoal (1584x396)
- Gerados via `/app/scripts/linkedin_assets.py` (SVG + cairosvg), paleta oficial (#020617, #34d399, #22d3ee)
