# PRD — Escritório Jurídico Premium
### Product Requirements Document · v1.0 · 2026

---

## Índice

1. [Contexto do Produto](#1-contexto-do-produto)
2. [Objetivo do Site](#2-objetivo-do-site)
3. [Público-alvo](#3-público-alvo)
4. [Tom e Identidade Visual](#4-tom-e-identidade-visual)
5. [Stack Técnica](#5-stack-técnica)
6. [Design System & Tokens](#6-design-system--tokens)
7. [Mapa de Seções](#7-mapa-de-seções)
8. [Especificação Detalhada por Seção](#8-especificação-detalhada-por-seção)
9. [Sistema Global de CTA](#9-sistema-global-de-cta)
10. [Regras de Interação & Motion](#10-regras-de-interação--motion)
11. [Requisitos Funcionais](#11-requisitos-funcionais)
12. [Requisitos Não Funcionais](#12-requisitos-não-funcionais)
13. [Critérios de Aceitação](#13-critérios-de-aceitação)
14. [Riscos e Mitigação](#14-riscos-e-mitigação)

---

## 1. Contexto do Produto

Este documento especifica todos os requisitos de produto, design e implementação para o desenvolvimento de um site institucional de advocacia premium. O site é uma **single-page landing** com âncoras de navegação, desenvolvido para transmitir autoridade jurídica, seriedade e sofisticação através de uma experiência visual cinematográfica e dark.

O produto nasce da necessidade de diferenciar um escritório jurídico no mercado digital: ir além do institucional genérico e entregar uma experiência que converta visitantes qualificados em contatos reais, com o menor atrito possível.

---

## 2. Objetivo do Site

### Objetivo Primário
Gerar contatos qualificados via botão **"Falar com um especialista"** e via **WhatsApp**.

### Objetivos Secundários
- Construir percepção sólida de autoridade e confiança
- Reduzir atrito na decisão do usuário com clareza de processo e FAQ
- Aumentar tempo de permanência através de interações refinadas e fluidas
- Apresentar o escritório como referência premium e contemporânea

---

## 3. Público-Alvo

| Perfil | Característica |
|---|---|
| **Pessoa Física** | Busca atendimento jurídico confiável e acessível, mas não quer parecer desinformada |
| **Pessoa com urgência** | Situação jurídica em curso; precisa de clareza e segurança para agir |
| **Perfil premium** | Valoriza credibilidade, acabamento visual, e transparência no processo |

**O que todos têm em comum:** valorizam profissionalismo visível, linguagem clara sem juridiquês, e a sensação de que estão em boas mãos desde o primeiro clique.

---

## 4. Tom e Identidade Visual

### Tom de Conteúdo
- **Sério, objetivo, institucional e sofisticado**
- Voz confiante e técnica sem jargões excessivos
- Frases curtas e precisas
- Zero clichês jurídicos genéricos
- Linguagem de autoridade, não de marketing agressivo

### Identidade Visual
- **Estilo:** Dark Premium Legal — preto profundo, dourado refinado, glassmorphism, cinematográfico
- **Referências visuais:** mármore escuro, arquitetura imponente, sombras elegantes, luz lateral dramática, texturas sofisticadas
- **Anti-referências:** fotos de aperto de mãos genéricas, tribunais clichês, ícones baratos, stock photos com sorrisos artificiais

---

## 5. Stack Técnica

O Antigravity deve gerar o projeto usando **exatamente** a seguinte stack. Nenhum substituto deve ser aceito sem justificativa explícita.

```
Framework:        React 18+ (Vite como bundler)
Estilização:      Tailwind CSS v3+ (com configuração customizada)
Animações:        GSAP 3+ com ScrollTrigger plugin
Scroll suave:     Lenis (smooth scroll library)
Fontes:           Google Fonts — Playfair Display, Inter, JetBrains Mono
Ícones:           Lucide React (sem FontAwesome, sem icon packs genéricos)
Mapas:            Google Maps Embed API (dark style) ou Mapbox GL JS
Linting:          ESLint + Prettier
```

### Estrutura de Pastas Obrigatória

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── AreasAtuacao.jsx
│   │   ├── SobreEscritorio.jsx
│   │   ├── Equipe.jsx
│   │   ├── CasosResultados.jsx
│   │   ├── ProcessoTimeline.jsx
│   │   ├── Depoimentos.jsx
│   │   ├── CTAFinal.jsx
│   │   ├── FAQ.jsx
│   │   └── MapaContato.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── WhatsAppFAB.jsx
│       ├── NoiseOverlay.jsx
│       └── SectionWrapper.jsx
├── hooks/
│   ├── useLenis.js
│   └── useScrollTrigger.js
├── lib/
│   └── gsap.js          ← inicialização e registro de plugins
├── styles/
│   └── globals.css      ← CSS vars, reset, noise, glass
├── App.jsx
└── main.jsx
```

---

## 6. Design System & Tokens

> **Instrução para o Antigravity:** todos os valores abaixo devem ser declarados como variáveis CSS em `globals.css` e como extensão do `tailwind.config.js`. Nunca usar valores hardcoded no JSX.

### 6.1 Paleta de Cores

```css
/* globals.css */
:root {
  /* Backgrounds */
  --color-bg-primary:       #07070A;
  --color-bg-surface:       #0D0D12;
  --color-bg-elevated:      #111118;
  --color-bg-glass:         rgba(15, 15, 18, 0.62);
  --color-bg-glass-strong:  rgba(12, 12, 15, 0.82);

  /* Texto */
  --color-text-primary:     #F3F1EC;
  --color-text-secondary:   rgba(243, 241, 236, 0.72);
  --color-text-muted:       rgba(243, 241, 236, 0.52);

  /* Acento dourado */
  --color-accent:           #B89A5A;
  --color-accent-dark:      #8F7440;

  /* Bordas */
  --color-border-soft:      rgba(255, 255, 255, 0.08);
  --color-border-strong:    rgba(255, 255, 255, 0.14);

  /* Sombras */
  --color-shadow-deep:      rgba(0, 0, 0, 0.45);
}
```

```js
// tailwind.config.js — extend.colors
colors: {
  bg: {
    primary:      '#07070A',
    surface:      '#0D0D12',
    elevated:     '#111118',
  },
  text: {
    primary:  '#F3F1EC',
  },
  accent: {
    DEFAULT: '#B89A5A',
    dark:    '#8F7440',
  }
}
```

### 6.2 Tipografia

```css
/* Hierarquia tipográfica */
--font-display: 'Playfair Display', Georgia, serif;  /* hero drama, italic */
--font-heading: 'Inter', system-ui, sans-serif;      /* headlines, bold */
--font-mono:    'JetBrains Mono', monospace;         /* labels, steps, metadata */
--font-body:    'Inter', system-ui, sans-serif;      /* corpo de texto */
```

| Elemento | Fonte | Peso | Tamanho desktop | Tamanho mobile |
|---|---|---|---|---|
| Hero headline | Playfair Display | 700 italic | 64–72px | 40px |
| Section headline | Inter | 700 | 40–48px | 28px |
| Body | Inter | 400 | 16–18px | 15px |
| Label/step | JetBrains Mono | 400 | 12–13px | 12px |
| Button | Inter | 500 | 14–15px | 14px |

### 6.3 Spacing & Shape

```js
// tailwind.config.js — extend
borderRadius: {
  'default': '32px',
  'large':   '40px',
  'pill':    '9999px',
},
maxWidth: {
  'container': '1280px',
},
```

- **Section padding Y:** `96px` desktop / `72px` mobile
- **Section padding X:** `32px` desktop / `20px` mobile
- **Regra cardinal:** nenhum `border-radius: 0` em cards ou containers visuais

### 6.4 Glassmorphism Mixin

```css
/* Aplicar como classe utilitária: .glass */
.glass {
  background:     rgba(15, 15, 18, 0.62);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border:         1px solid rgba(255, 255, 255, 0.08);
  border-radius:  32px;
}

.glass-strong {
  background:     rgba(12, 12, 15, 0.82);
  backdrop-filter: blur(18px);
  border:         1px solid rgba(255, 255, 255, 0.08);
  border-radius:  32px;
}
```

### 6.5 Noise Overlay

```jsx
// NoiseOverlay.jsx
// Camada fixa, pointer-events: none, z-index: 9999
// SVG noise filter ou PNG noise com opacity 0.05
// Cobre todo o site — propósito: textura premium, quebra o "chapado digital"
```

---

## 7. Mapa de Seções

Ordem de renderização obrigatória no `App.jsx`:

```
1.  <Navbar />
2.  <Hero />               id="hero"
3.  <AreasAtuacao />       id="areas"
4.  <SobreEscritorio />    id="sobre"
5.  <Equipe />             id="equipe"
6.  <CasosResultados />    id="casos"
7.  <ProcessoTimeline />   id="processo"
8.  <Depoimentos />        id="depoimentos"
9.  <CTAFinal />           id="cta-final"
10. <FAQ />                id="faq"
11. <MapaContato />        id="mapa"
12. <Footer />
13. <WhatsAppFAB />        ← fora do fluxo, fixed
14. <NoiseOverlay />       ← fora do fluxo, fixed
```

---

## 8. Especificação Detalhada por Seção

---

### 8.1 Navbar

**Componente:** `Navbar.jsx`

**Comportamento:**
- Posição `fixed`, `top: 20px`, centralizado horizontalmente
- Largura `fit-content` (pill nav, não full-width)
- **Estado inicial (sobre o hero):** background `transparent`, sem borda
- **Estado scrollado:** glassmorphism ativado com `backdrop-filter: blur(16px)`, background `rgba(12,12,15,0.62)`, borda `1px solid rgba(255,255,255,0.08)`
- Transição de estado: `transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Trigger de transição: quando o hero sair do viewport (usar `IntersectionObserver` ou `ScrollTrigger`)

**Conteúdo:**
```
[Logo/Nome]   [Atuação]   [Equipe]   [Resultados]   [Contato]   [Falar com um especialista →]
```

**Links âncora:**
| Label | Âncora |
|---|---|
| Atuação | `#areas` |
| Equipe | `#equipe` |
| Resultados | `#casos` |
| Contato | `#mapa` |

**CTA Button:** fundo `var(--color-accent)`, texto escuro, border-radius `pill`, hover com `scale(1.03)` e leve brilho

**Mobile:**
- Condensar para: `[Nome]` + `[≡ menu]` + `[Especialista]`
- Menu dropdown com glassmorphism
- Manter o CTA visível no mobile sempre

---

### 8.2 Hero

**Componente:** `Hero.jsx`
**Altura:** `100dvh`

**Layout (desktop):**
- Copy alinhado à esquerda, posição no terço inferior esquerdo
- Visual (imagem/elemento cinematográfico) à direita
- `max-width` do bloco de copy: `620px`

**Background:**
- Banner gerado em estilo cinematográfico legal dark
- Elementos: fundo escuro profundo + balança da justiça à direita com leve movimento idle
- Overlay: gradiente da esquerda (escuro sólido) para transparente/preto, garantindo legibilidade do texto

**Copy:**
```
Headline:    "Defesa jurídica com rigor e excelência."
Subheadline: "Atuação jurídica precisa, com foco em resultado
              e segurança em cada decisão."

CTA Primário:   [Fale com um especialista]   ← accent_primary
CTA Secundário: [WhatsApp]                   ← secondary, mais discreto
```

**Animação de entrada:**
```js
// Sequência GSAP ao montar o componente
timeline
  .from(headline,    { opacity: 0, y: 30, duration: 1.0, ease: 'power3.out' })
  .from(subheadline, { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.6')
  .from(ctaGroup,    { opacity: 0, y: 16, duration: 0.7, ease: 'power3.out' }, '-=0.5')
```

**Motion contínuo:**
- Leve parallax no background ao scroll (translateY de ~15–20% do scroll)
- Idle motion nas balanças: `gsap.to(scales, { rotation: 2, yoyo: true, repeat: -1, duration: 4, ease: 'sine.inOut' })`

**Mobile:**
- Stack: copy → CTAs → visual
- Headline reduzido para `40px`
- Visual posicionado abaixo com `max-height: 300px`

---

### 8.3 Áreas de Atuação

**Componente:** `AreasAtuacao.jsx`
**ID:** `#areas`

**Headline:** `"Áreas de atuação"`
**Subheadline:** `"Atuação estratégica em frentes jurídicas selecionadas, com foco em precisão, clareza e solução."`

**Layout:**
- Desktop: `4 colunas` em grid
- Tablet: `2 colunas`
- Mobile: `1 coluna`

**Cards — especificação exata:**

Cada card deve ter:
- Imagem de fundo full-bleed (cobrir 100% do card)
- Overlay escuro sobre a imagem (gradient de baixo para cima, `rgba(7,7,10,0)` → `rgba(7,7,10,0.92)`)
- Conteúdo posicionado no canto inferior esquerdo
- `border-radius: 32px`
- `min-height: 380px` desktop

```jsx
// Hover state de cada card:
// 1. Leve zoom na imagem: scale(1.06), transition 600ms ease
// 2. Aumento de clareza (brightness filter: 1.1)
// 3. Card levanta: translateY(-6px), transition 400ms ease
// 4. Borda com accent glow: box-shadow com var(--color-accent) opacity 0.25
```

**Dados dos cards:**

| # | Título | Descrição |
|---|---|---|
| 1 | Direito Civil | Soluções jurídicas em conflitos, responsabilidades e relações civis com orientação segura. |
| 2 | Direito Trabalhista | Atuação estratégica em demandas trabalhistas, defesa de direitos e análise de riscos. |
| 3 | Direito Empresarial | Consultoria e suporte para empresas com foco em contratos, estrutura e prevenção de litígios. |
| 4 | Direito de Família | Condução sensível e técnica em demandas familiares com foco em proteção e equilíbrio. |

**Direção visual para imagens:**
- Texturas de mármore escuro
- Arquitetura imponente com luz lateral
- Elementos abstratos premium com sombras elegantes
- **Proibido:** aperto de mãos genérico, tribunal clichê, stock photos sorridentes

**Reveal animation:**
```js
// ScrollTrigger stagger nos cards
gsap.from(cards, {
  opacity: 0, y: 40,
  stagger: 0.15,
  duration: 0.9,
  ease: 'power3.out',
  scrollTrigger: { trigger: section, start: 'top 75%' }
})
```

---

### 8.4 Sobre o Escritório

**Componente:** `SobreEscritorio.jsx`

**Layout:** Split — copy à esquerda, visual à direita (com parallax)

**Headline:** `"Compromisso com a excelência jurídica."`
**Subheadline:** `"Atuamos com foco em soluções jurídicas eficazes, combinando conhecimento técnico e visão estratégica para proteger os interesses de nossos clientes."`

**Body blocks** (renderizar como lista elegante com accent line à esquerda):
```
— Atendimento personalizado e criterioso.
— Estratégia orientada a resultados.
— Atuação ética, transparente e precisa.
```

**Métricas (renderizar como grid horizontal abaixo do copy):**
```
+10         |    +500           |    Alta precisão
Anos de     |    Casos          |    Compromisso
experiência |    atendidos      |
```
- Número em `Playfair Display` tamanho grande, dourado
- Label em `JetBrains Mono`, muted

**Visual direito:**
- Conceito: abstrato arquitetônico — colunas, linhas geométricas, sombras profundas
- Motion: parallax sutil ao scroll (translateY ~20% negativo conforme scroll desce)
- Implementação: `gsap.to(visual, { yPercent: -20, ease: 'none', scrollTrigger: { scrub: true } })`

---

### 8.5 Equipe

**Componente:** `Equipe.jsx`
**ID:** `#equipe`

**Headline:** `"Especialistas comprometidos com o seu caso."`
**Subheadline:** `"Uma equipe preparada para atuar com precisão técnica e visão estratégica em cada situação."`

**Layout:**
- Desktop: `4 colunas`
- Tablet: `2 colunas`
- Mobile: carousel deslizável ou stack

**Cards de membro:**

Cada card contém:
- Foto do profissional (placeholder: foto premium em ambiente escuro, sem sorriso forçado)
- `border-radius: 32px`
- Overlay dark na parte inferior para legibilidade
- Nome em Inter bold
- Cargo em JetBrains Mono, texto muted + accent color
- Sem bio visível no card (reservar para expansão futura)

```jsx
// Hover behavior:
// 1. Leve zoom na foto: scale(1.04)
// 2. Redução do overlay (fica mais claro, revelando mais da foto)
// 3. Hint de "ver perfil" aparece no canto inferior
```

**Placeholder de profissionais:**

| Nome | Cargo |
|---|---|
| Profissional 01 | Direito Empresarial |
| Profissional 02 | Direito Trabalhista |
| Profissional 03 | Direito Civil |
| Profissional 04 | Direito de Família |

**Reveal:**
```js
// Staggered reveal idêntico ao AreasAtuacao, stagger: 0.15
```

---

### 8.6 Casos e Resultados

**Componente:** `CasosResultados.jsx`
**ID:** `#casos`

**Headline:** `"Casos reais. Resultados concretos."`
**Subheadline:** `"Cada caso é conduzido com estratégia e precisão, sempre buscando o melhor desfecho para nossos clientes."`

**Layout:**
- Desktop: cards horizontais side by side
- Mobile: stack vertical

**Dados dos cards:**

```
Card 1:
  Categoria: Direito Trabalhista
  Título:    Reversão de demissão por justa causa
  Resumo:    Atuação estratégica que garantiu a reversão da decisão
             e a preservação dos direitos do cliente.
  Resultados: [Direitos restabelecidos] [Indenização concedida]

Card 2:
  Categoria: Direito Empresarial
  Título:    Organização contratual e mitigação de risco
  Resumo:    Revisão estratégica de contratos para reduzir exposição
             jurídica e aumentar segurança operacional.
  Resultados: [Risco reduzido] [Contratos ajustados]

Card 3:
  Categoria: Direito Civil
  Título:    Resolução de conflito com acordo favorável
  Resumo:    Condução precisa do caso até a construção de solução
             equilibrada e segura para o cliente.
  Resultados: [Acordo favorável] [Conflito encerrado]
```

**Estrutura visual de cada card:**
- Background: `var(--color-bg-elevated)`
- Topo: badge de categoria em JetBrains Mono com accent color
- Título em Inter bold
- Resumo em Inter regular, text-secondary
- Tags de resultado: pills com borda accent, fundo sutil

```jsx
// Hover behavior:
// 1. Card levanta: translateY(-8px)
// 2. Borda accent acende: box-shadow accent 0.3 opacity
// 3. "Ver caso completo →" aparece com fade
```

---

### 8.7 Como Conduzimos Seu Caso (Timeline)

**Componente:** `ProcessoTimeline.jsx`
**ID:** `#processo`

**Headline:** `"Como conduzimos seu caso"`
**Subheadline:** `"Um fluxo claro, objetivo e transparente para que você entenda cada etapa do atendimento jurídico."`

**Layout:**
- Desktop: horizontal, scroll-driven pelo scroll vertical da página
- Mobile: stack vertical com animação de step

**Comportamento de scroll (desktop):**
```js
// Implementar com GSAP ScrollTrigger horizontal scroll
// A timeline avança horizontalmente conforme o usuário scrollar verticalmente
// A linha conectora vai se preenchendo com accent color progressivamente
// Cada step "ativa" (highlight) ao entrar no viewport central
// Usar: gsap.to(steps, { x: ..., scrollTrigger: { pin: true, scrub: 1 } })
```

**Passos:**

| Número | Título | Descrição |
|---|---|---|
| `01` | Análise inicial | Entendimento detalhado da situação e coleta de informações relevantes. |
| `02` | Definição de estratégia | Estruturação da melhor abordagem jurídica com base no objetivo do cliente. |
| `03` | Execução técnica | Atuação precisa com acompanhamento de todas as fases do caso. |
| `04` | Acompanhamento contínuo | Atualizações frequentes e comunicação clara durante o processo. |
| `05` | Conclusão e resultado | Finalização com foco no melhor desfecho possível. |

**Estilo visual:**
- Número do step: `JetBrains Mono`, grande, muted por padrão → accent quando ativo
- Linha conectora: `1px` fina, elegante, cor muted → preenche com accent ao avançar
- Nodes: círculo minimal, borda soft → accent ao ativar
- Estado ativo: highlight accent no número, título e node

---

### 8.8 Depoimentos

**Componente:** `Depoimentos.jsx`
**ID:** `#depoimentos`

**Headline:** `"A confiança de quem já contou com nossa atuação"`
**Subheadline:** `"Experiências reais de clientes que confiaram em nosso trabalho e obtiveram resultados concretos."`

**Comportamento do carousel:**
- Estilo: `center focus` — card central em destaque, laterais parcialmente visíveis e com opacity reduzida
- Autoplay: sim, velocidade lenta (intervalo de `5000ms`)
- Pause no hover: sim
- Navegação: apenas dots (sem arrows)
- Sem progress bar

**Depoimentos:**

```
1. "O atendimento foi extremamente profissional e transparente em todas as etapas."
   Carlos Andrade — Cliente · Direito Trabalhista

2. "Senti segurança e clareza desde o primeiro contato até a conclusão do caso."
   Marina Alves — Cliente · Direito Civil

3. "A postura técnica e o cuidado com os detalhes fizeram diferença na condução do caso."
   Rafael Menezes — Cliente · Direito Empresarial

4. "Uma experiência objetiva, séria e muito bem conduzida."
   Fernanda Rocha — Cliente · Direito de Família

5. "O suporte foi claro, rápido e transmitiu muita confiança."
   Paulo Henrique — Cliente · Atendimento jurídico
```

**Regras de estilo:**
- Sem fotos de clientes
- Card: glassmorphism (`.glass`), `border-radius: 32px`
- Citação em `Playfair Display italic`, tamanho médio
- Nome em Inter medium, accent color
- Contexto em JetBrains Mono, muted

---

### 8.9 CTA Final

**Componente:** `CTAFinal.jsx`
**ID:** `#cta-final`

> ⚠️ Esta seção deve aparecer **antes** do FAQ. Não inverter a ordem.

**Layout:** Split — copy à esquerda, visual abstrato à direita

**Copy:**
```
Headline:    "Pronto para resolver seu caso?"
Subheadline: "Entre em contato e receba uma análise inicial
              com total confidencialidade."

CTA Primário:   [Falar com um especialista]
CTA Secundário: [WhatsApp]

Microcopy:   Atendimento rápido · Total confidencialidade
```

**Visual direito:**
- Elemento arquitetônico abstrato ou massa de luz/sombra
- Deve manter coerência visual com o hero
- Motion: subtle parallax ao scroll

**Microcopy:** renderizar abaixo dos botões, em JetBrains Mono, texto muted, separado por `·`

---

### 8.10 FAQ

**Componente:** `FAQ.jsx`
**ID:** `#faq`

**Headline:** `"Dúvidas comuns sobre nossa atuação"`
**Subheadline:** `"Esclarecemos as principais dúvidas para que você tenha segurança ao iniciar seu atendimento."`

**Comportamento do accordion:**
- Apenas **um item aberto por vez** (abrir um fecha o anterior)
- Expand/collapse com animação suave: `max-height` transition + opacity
- Ícone: `+` → `−` com rotate `45deg` ao abrir

**5 itens obrigatórios:**

```
Q: Como funciona o primeiro atendimento?
A: O atendimento inicial é dedicado à análise do seu caso, entendendo
   sua situação e orientando sobre os próximos passos.

Q: Preciso ir até o escritório presencialmente?
A: Não necessariamente. O atendimento pode ocorrer online, com a mesma
   qualidade, segurança e discrição.

Q: Quais áreas do direito vocês atendem?
A: Atuamos em diferentes frentes jurídicas, sempre com foco em soluções
   estratégicas e personalizadas.

Q: Quanto tempo leva para resolver um caso?
A: O prazo varia conforme a complexidade, mas o acompanhamento é constante
   e transparente durante todo o processo.

Q: Como posso iniciar meu atendimento?
A: Basta utilizar o botão de WhatsApp ou o botão de contato com um
   especialista disponível no site.
```

---

### 8.11 Mapa e Contato

**Componente:** `MapaContato.jsx`
**ID:** `#mapa`

**Headline:** `"Presença física, contato direto e localização clara"`
**Subheadline:** `"Um espaço para localização e acesso rápido às informações essenciais do escritório."`

**Layout desktop:** mapa ao fundo (full-width), card de contato sobreposto à esquerda
**Layout mobile:** card acima, mapa abaixo

**Card de contato:**
```
Background: rgba(12, 12, 15, 0.82) + backdrop-filter: blur(16px)
Border-radius: 32px
Border: 1px solid rgba(255,255,255,0.08)

Conteúdo:
  Título:   "Nosso escritório"
  Endereço: [Endereço fictício a definir]
  Telefone: (00) 00000-0000
  Email:    contato@seudominio.com

  [Falar com um especialista]    ← accent
  [WhatsApp]                     ← secondary
```

**Mapa:**
- Tema escuro (Google Maps dark style ou Mapbox dark)
- Sem excesso de UI do maps (ocultar pontos genéricos)
- Marker customizado minimal (círculo accent pulsante)
- Motion: zoom sutil e leve parallax

**Animação de entrada do card:**
```js
gsap.from(card, {
  opacity: 0, x: -40,
  duration: 1.0,
  ease: 'power3.out',
  scrollTrigger: { trigger: section, start: 'top 70%' }
})
```

---

### 8.12 Footer

**Componente:** `Footer.jsx`

**Estilo:**
```css
background: #07070A;
border-radius: 40px 40px 0 0;  /* radius apenas no topo */
```

**Layout desktop:** grid 4 colunas
**Layout mobile:** stack vertical

**Conteúdo:**
```
Bloco Marca:
  Nome do Escritório
  "Defesa jurídica com rigor e excelência."

Navegação:
  Atuação · Equipe · Resultados · FAQ · Mapa

Links legais:
  Privacidade · Termos · Aviso legal

Widget de status:
  ● Sistema Operacional   ← ponto verde pulsante

Copyright:
  © 2026 Nome do Escritório. Todos os direitos reservados.
```

---

## 9. Sistema Global de CTA

### Hierarquia

| CTA | Prioridade | Estilo |
|---|---|---|
| Falar com um especialista | Máxima | Background accent `#B89A5A`, texto escuro, pill |
| WhatsApp | Alta | Fundo sutil/muted, borda soft, menos destaque visual |

### Regras globais

1. O botão do WhatsApp **nunca** deve competir visualmente com o CTA primário
2. O CTA secundário deve ter `opacity` ou peso visual menor em relação ao primário
3. Ambos os CTAs aparecem nas seções: Hero, CTA Final e Mapa/Contato
4. Âncora de CTA primário: `tel:` ou link para formulário de especialista
5. Âncora de WhatsApp: `https://wa.me/NUMERO`

---

### 9.1 WhatsApp FAB (Floating Action Button)

**Componente:** `WhatsAppFAB.jsx`

```jsx
// Posição: fixed, bottom: 24px, right: 24px
// Shape: pill com ícone WhatsApp + texto "WhatsApp" (desktop) / só ícone (mobile)
// Estilo: dark glass sutil (glass-strong)
// z-index: 9000

// Visibilidade:
// - Estado inicial: opacity: 0, translateY: 10px
// - Após scroll além do hero: fade in com translateY: 0
// - Trigger: IntersectionObserver no hero section

// Hover: scale(1.05) + subtle accent glow
```

---

## 10. Regras de Interação & Motion

### 10.1 Scroll Suave — Lenis

```js
// lib/gsap.js ou useLenis.js
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  duration: 1.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smooth: true,
})

// Conectar ao GSAP ticker
gsap.ticker.add((time) => { lenis.raf(time * 1000) })
gsap.ticker.lagSmoothing(0)
```

### 10.2 Easing Padrão

| Contexto | Easing |
|---|---|
| Entrance animations | `power3.out` |
| Transform/interações | `power2.inOut` |
| Hover transitions | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| Parallax scrub | `none` (linear) |

### 10.3 Stagger Padrão

| Contexto | Stagger |
|---|---|
| Texto/linhas | `0.08s` |
| Cards/grid | `0.15s` |

### 10.4 Regras Universais de Motion

- **Nunca** usar animação abrupta ou bounce que remeta a interfaces genéricas
- Todo elemento revelado por scroll usa `fade + translateY(20–40px)`
- Parallax máximo: `20%` do scroll height — nunca agressivo
- Respeitar `prefers-reduced-motion`: desligar todas as animações não-essenciais
- Hover transitions: duração entre `300–600ms`, nunca abaixo de `200ms`

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 11. Requisitos Funcionais

| ID | Requisito |
|---|---|
| RF-01 | Navbar fixa com transição de glassmorphism ao scroll |
| RF-02 | Links de navegação com smooth scroll até âncora |
| RF-03 | Hero com animação de entrada staggered |
| RF-04 | Cards de áreas com hover interativo e imagem full-bleed |
| RF-05 | Cards da equipe com hover e foto premium |
| RF-06 | Cards de casos com tags de resultado e hover elevado |
| RF-07 | Timeline horizontal scroll-driven (desktop) |
| RF-08 | Timeline vertical animada (mobile) |
| RF-09 | Carousel de depoimentos com autoplay e center focus |
| RF-10 | Accordion de FAQ com single-open e animação suave |
| RF-11 | Mapa escuro com marker pulsante e card de contato sobreposto |
| RF-12 | WhatsApp FAB que aparece após scroll do hero |
| RF-13 | Noise overlay fixo em todo o site |
| RF-14 | CTAs de WhatsApp e especialista funcionais com links reais |
| RF-15 | Footer com widget de status (ponto verde pulsante) |
| RF-16 | Scroll suave com Lenis ativo em toda a página |
| RF-17 | Todas as seções reveladas com ScrollTrigger |

---

## 12. Requisitos Não Funcionais

| ID | Requisito | Meta |
|---|---|---|
| RNF-01 | Performance (Lighthouse) | Score ≥ 85 em desktop |
| RNF-02 | Performance (Lighthouse) | Score ≥ 75 em mobile |
| RNF-03 | Responsividade | Funcional em 320px–1920px |
| RNF-04 | Acessibilidade | Contraste mínimo WCAG AA |
| RNF-05 | Acessibilidade | `prefers-reduced-motion` implementado |
| RNF-06 | SEO | Meta tags e Open Graph configurados |
| RNF-07 | Fontes | Google Fonts com `display=swap` (sem FOUT) |
| RNF-08 | Imagens | Lazy loading em todas as imagens |
| RNF-09 | Animações | Sem jank (60fps consistente) |
| RNF-10 | Build | Vite com tree-shaking ativo, sem deps desnecessárias |

---

## 13. Critérios de Aceitação

### Navbar
- [ ] Navbar está fixa no topo em todas as views
- [ ] Glassmorphism ativa corretamente ao sair do hero
- [ ] Todos os links navegam suavemente para as âncoras corretas
- [ ] CTA do navbar abre o fluxo de especialista
- [ ] Mobile: menu condensado funcional

### Hero
- [ ] Ocupa 100dvh sem overflow
- [ ] Animação de entrada completa (fade + translateY staggered)
- [ ] Dois CTAs visíveis e funcionais
- [ ] Parallax sutil no scroll
- [ ] Mobile: copy empilhado acima, visual abaixo

### Áreas de Atuação
- [ ] Grid 4-2-1 colunas responsivo
- [ ] Hover com zoom na imagem + borda accent
- [ ] Reveal staggered no scroll

### Sobre
- [ ] Split layout desktop, stack mobile
- [ ] 3 métricas visíveis com números em Playfair Display dourado
- [ ] Parallax no visual direito

### Equipe
- [ ] Grid 4-2-1 responsivo
- [ ] Hover correto em cada card
- [ ] Mobile em carousel ou stack

### Casos
- [ ] 3 cards com dados corretos
- [ ] Tags de resultado visíveis
- [ ] Hover com elevação e borda accent

### Timeline
- [ ] Desktop: scroll horizontal driven por scroll vertical
- [ ] Linha preenche com accent conforme avança
- [ ] Mobile: stack vertical animado
- [ ] Exatamente 5 steps com dados corretos

### Depoimentos
- [ ] Exatamente 5 depoimentos
- [ ] Autoplay lento funcionando
- [ ] Pause no hover
- [ ] Center focus com laterais parcialmente visíveis
- [ ] Sem fotos de clientes

### CTA Final
- [ ] Posicionado **antes** do FAQ
- [ ] Dois CTAs funcionais
- [ ] Microcopy visível abaixo dos botões

### FAQ
- [ ] Exatamente 5 perguntas
- [ ] Apenas uma questão aberta por vez
- [ ] Ícone anima corretamente ao abrir/fechar

### Mapa e Contato
- [ ] Tema escuro no mapa
- [ ] Card glassmorphism sobreposto à esquerda
- [ ] Marker pulsante no mapa
- [ ] Dois CTAs funcionais no card

### WhatsApp FAB
- [ ] Invisível sobre o hero
- [ ] Aparece com fade após scroll do hero
- [ ] Hover com scale e glow
- [ ] Link WhatsApp funcional

### Global
- [ ] Noise overlay presente e sutil
- [ ] Lenis scroll suave ativo
- [ ] Nenhuma animação abrupta
- [ ] `prefers-reduced-motion` respeitado
- [ ] Fontes carregadas: Playfair Display, Inter, JetBrains Mono
- [ ] Sem border-radius 0 em cards ou containers visuais

---

## 14. Riscos e Mitigação

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Timeline horizontal complexa no mobile | Alta | Médio | Fallback para stack vertical animado desde o início |
| Performance com GSAP + Lenis + imagens pesadas | Média | Alto | Lazy loading obrigatório + GSAP cleanup no unmount |
| Glassmorphism com Safari (backdrop-filter) | Média | Médio | Prefixo `-webkit-backdrop-filter` em todos os usos |
| Carousel de depoimentos sem library = complexo | Média | Baixo | Usar Embla Carousel ou implementação manual simples |
| Imagens placeholders genéricas | Alta | Alto | Definir direção visual rigorosa (seção 8.3 e 8.5) |
| Mapa dark sem API key real | Alta | Baixo | Placeholder editorial com CSS até integração real |
| Fontes causando FOUT | Baixa | Médio | `font-display: swap` + preconnect no `<head>` |

---

## Apêndice — Preconnects e Meta Tags

```html
<!-- index.html — dentro do <head> -->

<!-- Fontes -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

<!-- SEO base -->
<meta name="description" content="Defesa jurídica com rigor e excelência. Atuação precisa em Direito Civil, Trabalhista, Empresarial e de Família." />
<meta name="theme-color" content="#07070A" />

<!-- Open Graph -->
<meta property="og:title" content="Nome do Escritório — Advocacia Premium" />
<meta property="og:description" content="Defesa jurídica com rigor e excelência." />
<meta property="og:type" content="website" />
```

---

*PRD gerado a partir do blueprint v1.0. Qualquer modificação de escopo deve ser registrada como nova versão deste documento.*
