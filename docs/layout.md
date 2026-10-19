# EMPREST.AI — Especificação de layout (v1)

Documento de handoff para reproduzir o layout do app de empréstimo de equipamentos de TI.
Base visual: **Professional Blue** (interface clara e atual, fundo frio neutro, texto azul-marinho e azul institucional usado para ação, foco e seleção — nunca como preenchimento em áreas grandes), com a paleta e a tipografia abaixo aplicadas à marca EMPREST.AI.

---

## 1. Cores

Paleta **Professional Blue**: base neutra clara,
com **azul institucional e branco em primeiro plano** e azul-marinho/ardósia
como contraste secundário.

### Tokens de base (fundo claro e quente)

| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | `#F4F7FB` (Azul muito claro) | **cor principal** — fundo de toda página, base dos layouts |
| `--color-surface` | `#FFFFFF` (Branco) | cards, tabela, modal, inputs — superfície de leitura |
| `--color-text` | `#172033` (azul-marinho) | texto principal — contraste forte e contemporâneo |
| `--color-divider` | `rgba(148,163,184,0.38)` | bordas funcionais e réguas, sem contorno escuro |
| `--color-neutral-900` | `#172033` (azul-marinho) | avatares neutros na tabela — peso visual |

### Acento da marca (prioridade: azul institucional e branco)

Primária: **`#2563EB`** (Azul institucional). Rampa 100→900:

```
100 #EFF6FF · 200 #DBEAFE · 300 #BFDBFE
500 #2563EB (base) · 700 #1D4ED8 · 800 #1E40AF · 900 #172554
```

Uso: 500 para foco, linhas e ícones; 700 para botões primários e texto de destaque sobre a base clara; 800/900 para preenchimentos de maior peso (avatar e toast).

Cores de apoio: teal `#247B78` para disponibilidade, azul ardósia `#5B6B84`
para empréstimos e âmbar `#9A6500` para manutenção. Essas cores aparecem
apenas em estados e detalhes informativos; rosa continua reservado à marca,
foco e ações principais.

Tints por transparência usados no layout: `rgba(220,161,161,0.14)` (chip de filtro ativo), `0.12` (hover do botão primário e fundo de pill "Disponível"), `0.22` (pressed).

### Cores semânticas de situação (pills, bordas, prazos)

| Estado | Texto (`fg`) | Fundo (`bg`) | Borda (`bd`) |
|---|---|---|---|
| Disponível / Em dia | `#185F5E` (teal escuro) | `#EAF8F7` | `rgba(36,123,120,0.32)` |
| Emprestado / a vencer | `#5B6B84` (azul ardósia) | `#EEF2F8` | `rgba(91,107,132,0.30)` |
| Em atraso / erro | `#B62C5B` (rosa 800) | `rgba(244,91,139,0.10)` | `rgba(182,44,91,0.35)` |
| Em manutenção / inativo | `#9A6500` (âmbar) | `#FFF5DF` | `rgba(154,101,0,0.28)` |

Banner de bloqueio por atraso: borda `#9E5F5F`, fundo `rgba(158,95,95,0.12)`, texto `#9E5F5F`.

### Cores secundárias (sempre em papel de apoio)

- **Ardósia `#64748B`** — contraste profissional: metadados, patrimônio, cabeçalhos de tabela, estado inativo e dicas de KPI.
- **Azul-marinho `#172554`** — contraste de maior peso: avatar, toast e ações de destaque.
- **Teal `#247B78`**, azul ardósia `#5B6B84` e âmbar `#9A6500` — estados informativos do catálogo.

### Texto secundário

Sempre por transparência sobre `--color-text`, nunca um cinza novo:

- 72% → texto de apoio em painéis
- 70% → labels de formulário
- 62% → corpo de diálogo
- 55% → subtítulos de página, metadados
- 45% → kickers, patrimônio, dicas de KPI
- 40% → rodapés discretos

### Regras de cor

- Nunca preto puro nem branco puro.
- Azul muito claro é a base; branco veste as superfícies; o azul institucional é o acento — ardósia e cinza-azulado entram para texto, divisão e peso.
- Nunca inundar áreas grandes com o acento: botão primário é **contorno** de 1px sobre transparente.
- Cromia baixa fora do acento; superfícies e bordas vêm dos neutros.

---

## 2. Tipografia

- Família única: **Manrope** (Google Fonts, pesos 400/500/600/700/800), aplicada a `--font-heading` e `--font-body`.
- Peso de títulos: **600**. Corpo: 400.
- `line-height` de títulos ≈ 1.12, `letter-spacing: -0.015em`. Corpo: 1.55.
- `text-wrap: pretty` em títulos longos.

### Escala usada

| Elemento | Tamanho |
|---|---|
| H1 do login | 44px |
| H1 de tela interna | 30px |
| Número de KPI | 30px |
| H2 "Entrar" | 26px |
| Título de modal | 20px |
| Título de painel/seção | 17px |
| Título de card | 16.5px |
| Nome de item em lista | 16px |
| Subtítulo de página / lead do login | 14–16px |
| Corpo, célula de tabela, input, botão | 13.5–14px |
| Nota, metadado, chip | 12–13px |
| Kicker / cabeçalho de tabela | 11–11.5px, `letter-spacing: 0.08–0.09em`, `text-transform: uppercase` |
| Micro-rótulo (patrimônio, dica) | 11–12px |

Marca: `EMPREST` peso 700 + `.AI` no acento, `letter-spacing: 0.02em` — 17px na tela de login, 15px na barra de navegação.

---

## 3. Espaçamento, raios e elevação

Escala de densidade do design system (0.70×): `2.8 · 5.6 · 8.4 · 11.2 · 16.8 · 22.4px`.
Raios: `--radius-sm 8px`, `--radius-md 16px` (inputs, linhas e controles de superfície), `--radius-lg 20px` (cards, painéis, modal, moldura) e `--radius-button 10px` (ações, sem formato excessivamente arredondado).
Elevação: `--shadow-sm/md/lg` do sistema; cards usam `0 5px 12px rgba(125,29,66,0.15)` para um drop shadow curto e visível, sem borda escura e sem sombras empilhadas.

### Medidas aplicadas

- Padding de conteúdo das telas internas: `36px 40px 64px`.
- Larguras máximas de conteúdo: Catálogo 1240px · Meus empréstimos 1000px · Operações 1320px · Equipamentos 1160px.
- Login: `64px 56px` em ambas as colunas.
- Barra de navegação: altura **60px**, padding lateral 40px, `gap: 32px` entre marca e abas.
- Card do catálogo: padding 18px, `gap: 12px` interno.
- Grade do catálogo: `repeat(auto-fill, minmax(292px, 1fr))`, `gap: 16px`.
- Linha de "Meus empréstimos": padding `18px 20px`, `gap: 20px` entre colunas.
- Grade de KPIs: 4 colunas, `gap: 14px`, padding `16px 18px`.
- Tabela: cabeçalho `12px 18px`, célula `13px 18px`.
- Modal: largura **420px**, padding 26px.
- Formulário de cadastro: grade 2 colunas, `gap: 14px`; coluna direita de regras com 300px.
- Layout sempre em flex/grid com `gap` — nunca margens por elemento para espaçar irmãos.

### Alturas de controles

Input/select 36px (padding `6px 10px`) · botão padrão 36px · botão do login 40px · avatar 28px (26px na tabela) · pill de status 3px/9px, `border-radius: 999px` · traços do limite de 3 itens: 5px de altura, largura flex igual, `border-radius: 999px`.

---

## 4. Componentes (classes do design system)

- `.btn` + `.btn-primary` (contorno acento) · `.btn-secondary` (contorno divider) · `.btn-ghost` (texto acento) · `.btn-block`.
- `.tag` + `.tag-outline` para etiquetas de papel/seção.
- `.card` (+ `.card-kicker`, `.card-title`) e `.elev-sm/md/lg`.
- `.field` + `label` + `.input` (inclui `select` e `textarea`).
- `.radio` + `.dot` para a situação inicial no cadastro.
- `.nav` + `.nav-brand` para a barra de topo.
- `.table` para a lista de Operações.
- `.dialog-backdrop` + `.dialog` (+ `-title`, `-body`, `-actions`).
- Estados: hover tintado do acento, pressed um passo além, foco `outline: 2px solid var(--color-accent); outline-offset: 2px`. Desabilitado: `opacity .45` + `cursor: not-allowed`.
- Ícones, quando houver: Phosphor Icons.
- Marca desenhada como quadrado de 22–26px com borda 1.5px do acento, raio 6–7px, e um quadradinho preenchido de 8–9px (raio 2px) centralizado.
- Régua de seção: `height:1px; background: linear-gradient(90deg, transparent, var(--color-divider) 48px, var(--color-divider) calc(100% - 48px), transparent)` — as réguas desaparecem nas pontas.

---

## 5. Páginas

### 5.1 Login
Grade `1.05fr 0.95fr`, altura mínima 820px.
- **Esquerda** (fundo `linear-gradient(160deg,#F2F0EF,#EAE0C8 60%)` + brilho radial `rgba(220,161,161,0.26)` de 520px, deslocado `left:-160px; top:120px`): marca no topo, título 44px em duas linhas, lead 16px em 60% de opacidade, e uma faixa de 3 estatísticas (`3 itens por pessoa`, `14 dias de prazo`, `0 linhas para preencher`) acima de uma borda superior; rodapé "Operações · TI interno" em 12px/40%.
- **Direita**: coluna de 340px centralizada verticalmente — H2 "Entrar", lead, campo E-mail, campo Senha, botão primário `btn-block` (40px), botão ghost "Entrar como Operações →", nota "Cada pessoa vê apenas os próprios empréstimos".

### 5.2 Catálogo
Cabeçalho: H1 "Catálogo" + contagem "X de Y equipamentos disponíveis agora"; busca de 260px alinhada à direita.
Banner de bloqueio (condicional). Linha de chips de filtro: Todos · Disponíveis · Emprestados · Em manutenção.
Grade de cards. Card = kicker de categoria (uppercase 11px) · nome 16.5px · patrimônio 12px · pill de situação à direita · linha de detalhe (min-height 18px: "Pronto para retirada no balcão" / "Com {pessoa} · devolver até {data}" / observação de manutenção) · botão de largura total.

### 5.3 Meus empréstimos
H1 + "N de 3 itens em seu nome · prazo padrão de 14 dias".
Barra de 3 traços (ocupados no acento, atraso em vermelho, vazios em `text 12%`).
Linhas de empréstimo com borda esquerda de 3px na cor do estado, em 5 colunas de flex: item (1.4) · Retirada (1) · Devolver até (1, na cor do estado) · pill (0.9) · botão "Devolver".
Estado vazio: caixa tracejada, padding 48px, centralizada, com botão "Ir ao catálogo".
Rodapé de regras em três itens de 12.5px.

### 5.4 Operações · empréstimos em aberto
H1 + lead; busca de 230px + botão primário "Cadastrar equipamento".
4 KPIs: Em aberto · Em atraso (rosa profundo `#9E5F5F`) · Disponíveis (acento rosa) · Manutenção (taupe `#947F6F`), cada um com rótulo uppercase, número 30px e dica.
Tabela dentro de contêiner com raio `lg` e overflow hidden: Pessoa (avatar + nome) · Equipamento · Patrimônio · Retirada · Prazo (na cor do estado) · Situação (pill) · ação "Registrar devolução" alinhada à direita. Cabeçalho com fundo `text 5%`; linhas separadas por borda superior de 1px.
Estado sem resultados: texto centralizado, padding 40px.

### 5.5 Equipamentos (cadastro, Operações)
Grade `1fr 300px`, `gap: 34px`, alinhada ao topo.
- Formulário em card: Nome (2 colunas) · Categoria (select: Notebook, Monitor, Cabo, Câmera, Acessório) · Patrimônio · Observações (textarea, 2 colunas) · rádios de situação inicial (Disponível / Em manutenção) · rodapé com borda superior e ações "Cadastrar equipamento" (primário) + "Cancelar" (ghost).
- Coluna direita: painel "Regras em vigor" (4 itens com travessão no acento) e painel "Fora desta versão" (Reserva com data futura, Notificação por e-mail, Importação da planilha — em 42% de opacidade).

### 5.6 Sobreposições
- **Modal** (420px): título · corpo · bloco resumo com borda (raio `md`, padding `14px 16px`) contendo duas linhas rótulo/valor (o valor em destaque no acento) · ações à direita: "Cancelar" (secundário) + confirmação (primário). Backdrop `rgba(95,79,68,0.5)` (argila escurecida), clique fora fecha, clique dentro não propaga.
- **Toast**: fixo, `left:50%` com `translateX(-50%)`, `bottom: 28px`, padding `12px 20px`, `border-radius: 999px`, fundo `--color-accent-900`, borda `--color-accent-700`, texto `--color-accent-200`, 13.5px. Sai automaticamente em **2600ms**.

---

## 6. Navegação

- Papéis: **Colaborador** → abas `Catálogo`, `Meus empréstimos`. **Operações** → `Catálogo`, `Operações`, `Equipamentos`, `Meus empréstimos`.
- Aba ativa: `border-bottom: 2px solid var(--color-accent)` e texto em 100%; inativa: linha transparente e texto em 55%. Botões de aba com altura total da barra (60px), padding lateral 14px, sem raio.
- Barra é `position: sticky; top: 0`, fundo `--color-bg`, `z-index: 20`; à direita: etiqueta do papel (`.tag-outline`), avatar com iniciais (fundo `accent-900`, borda `accent-700`, texto `accent-300`), nome e "Sair".
- Entradas: "Entrar" → Catálogo (papel Colaborador); "Entrar como Operações" → Operações (papel Operações). "Sair" → Login.
- Atalhos internos: banner de atraso → Meus empréstimos; estado vazio → Catálogo; "Cadastrar equipamento" → Equipamentos; "Cancelar" no cadastro → Operações; após cadastrar → Operações + toast.
- Todas as transições são troca de tela na mesma janela; não há rotas aninhadas nem modais empilhados.

---

## 7. Interações e regras de negócio

1. **Solicitar empréstimo** (card disponível): abre modal com "Devolver até = hoje + 14 dias". Confirmar → item passa a `emprestado` com o nome da pessoa, sai do disponível, entra em Meus empréstimos e na tabela de Operações; toast de confirmação.
2. **Devolver** (Meus empréstimos): modal "Devolução em {hoje}". Confirmar → item volta a `disponivel`, libera um slot, sai da tabela de Operações; toast.
3. **Registrar devolução** (Operações, balcão): mesmo efeito, com "Pessoa" no lugar da data no resumo do modal.
4. **Limite de 3 itens**: com 3 empréstimos ativos, todo botão de solicitar fica desabilitado com o rótulo "Limite de 3 itens" e vira `btn-secondary`.
5. **Atraso bloqueia**: com qualquer item em atraso, os botões viram "Bloqueado por atraso" (desabilitados) e o banner vermelho aparece no topo do catálogo com atalho para o item pendente.
6. **Manutenção**: nunca conta como disponível; card com pill taupe, detalhe com a observação e botão "Indisponível" desabilitado.
7. **Item já com o usuário**: botão "Está com você" (desabilitado); com outra pessoa: "Emprestado" (desabilitado) e o detalhe mostra quem e o prazo.
8. **Busca**: catálogo filtra por nome + patrimônio; Operações filtra por pessoa + item; ambas case-insensitive, filtragem imediata a cada tecla, com estado vazio próprio.
9. **Filtros de situação**: exclusivos (Todos / Disponíveis / Emprestados / Em manutenção); ativo ganha borda e texto no acento e fundo `rgba(220,161,161,0.14)`.
10. **Cadastro**: nome obrigatório (sem nome → toast "Informe o nome do equipamento"); patrimônio vazio cai para `TI-—`; item entra no topo da lista.
11. **Escopo por pessoa**: cada usuário vê somente os próprios empréstimos; a visão completa existe apenas em Operações.

Fora da v1: reserva com data futura, notificação por e-mail, importação de planilha.

---

## 8. Animações

Discretas e curtas — a interface é quieta.

```css
@keyframes fadeUp { from { opacity: 0; transform: translateY(6px) } to { opacity: 1; transform: none } }
```

- Cards do catálogo: `fadeUp .25s ease both` ao renderizar.
- Modal: `fadeUp .18s ease both`; backdrop aparece sem animação.
- Toast: `fadeUp .2s ease both` na entrada, remoção após 2600ms.
- Hover/pressed de botões e bordas de input: transição implícita do design system; nenhum efeito de escala, sombra pulsante ou parallax.
- Nada de animação em números de KPI, tabela ou navegação.

---

## 9. Dados de exemplo (para reproduzir as telas fielmente)

Usuário: **Ana Ribeiro** (iniciais AR). Data de referência: **31/08/2026**.

Equipamentos: Notebook Dell Latitude 5450 (TI-0142, disponível) · MacBook Pro 14 M3 (TI-0088, com Marcos Lemos até 07/09) · Monitor LG 27" 4K (TI-0231, disponível) · Monitor Dell 24" FHD (TI-0233, manutenção — "Painel com falha, retorna em 05/09") · Câmera Sony ZV-1 (TI-0301, com Ana até 12/09) · Cabo HDMI 2.1 3m (TI-0455, disponível) · Dock Thunderbolt 4 (TI-0512, com Ana até 05/09) · Tripé Manfrotto Befree (TI-0318, manutenção — "Trava do centro quebrada") · Headset Jabra Evolve2 (TI-0402, disponível).

Empréstimos em aberto: Ana Ribeiro/Sony ZV-1 (29/08→12/09) · Ana Ribeiro/Dock (22/08→05/09) · Marcos Lemos/MacBook (24/08→07/09) · Júlia Prado/Notebook Lenovo T14 TI-0119 (26/08→09/09) · Rafael Souza/Monitor AOC 24" TI-0244 (18/08→01/09) · Camila Nunes/Câmera GoPro Hero 12 TI-0307 (05/08→19/08, **em atraso**).

Assim, por padrão: 2 de 3 slots da Ana ocupados e em dia, 4 itens disponíveis, 2 em manutenção, 6 empréstimos em aberto, 1 em atraso.

---

## 10. Notas de implementação

- Uma única folha do design system + override de `:root` com a paleta Pink Contemporary (rosa, branco e ameixa na base) e Manrope; todos os valores restantes vêm de `var(--*)`.
- Estilos aplicados inline no markup (sem classes próprias além das do design system), o que mantém a estrutura legível e editável elemento por elemento.
- Estado da aplicação em memória: `view`, `role`, `query`, `opsQuery`, `filter`, `modal`, `toast`, `items[]`, `loans[]`, campos do formulário.
- Toda mudança de dados é derivada no render: contagens, KPIs, cores de estado, rótulo e habilitação de cada botão.
- Controles de protótipo úteis: `startView` (login, catalogo, meus, operações, cadastro) e `demoState` (none, modal-solicitar, modal-devolver, sem-emprestimos, atraso-bloqueado, toast).
- Altura mínima das telas: 820px; larguras de referência do desenho: 1360–1440px.
- Idioma da interface: português do Brasil; datas em `DD/MM/AAAA`; tom de copy direto e operacional, sem exclamações e sem emoji.
