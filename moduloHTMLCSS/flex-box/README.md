# 📦 MÓDULO FLEXBOX - Guia Completo

## 📋 Sobre Este Módulo

Este módulo apresenta uma progressão estruturada de exercícios sobre **CSS Flexbox**, um dos conceitos mais importantes para criar layouts responsivos e modernos.

A pasta foi reorganizada com foco em:

- ✅ **Progressão pedagógica**: Do básico ao avançado
- ✅ **Nomenclatura clara**: Nomes descritivos para cada exercício
- ✅ **Comentários detalhados**: Explicações em HTML e CSS
- ✅ **Exemplos práticos**: Aplicações reais de flexbox
- ✅ **Responsividade**: Media queries em todos os exemplos

---

## 🎯 Objetivos de Aprendizado

Ao completar este módulo, você será capaz de:

1. **Entender conceitos fundamentais** de flexbox
2. **Aplicar flexbox** em layouts simples e complexos
3. **Criar layouts responsivos** para diferentes tamanhos de tela
4. **Estruturar layouts** profissionais com navbar, cards e sidebars
5. **Implementar projetos completos** usando apenas flexbox

---

## 📚 Exercícios

### **Exercício 01: Fundamentos de Flexbox**

**Arquivo:** `ex01_basico.html`

**O que você vai aprender:**

- Propriedade `display: flex`
- `flex-direction` (row vs column)
- `justify-content` (espaçamento horizontal)
- `align-items` (alinhamento vertical)
- `flex-wrap` (quebra de linhas)
- `gap` (espaçamento entre items)
- `flex-grow` e `flex-shrink` (dimensionamento)
- `flex-basis` (tamanho base)
- Flexbox aninhado (nested)

**Conceitos-chave:**

```
┌─ Container Flex
│  ├─ Item 1
│  ├─ Item 2
│  └─ Item 3
└─ (Eixo principal e eixo transversal)
```

**Dica:** Abra este arquivo em seu navegador e observe cada container. Os comentários explicam cada conceito. Tente modificar os valores no CSS para entender o comportamento!

**Tempo sugerido:** 30-45 minutos

---

### **Exercício 02: Layout com Navbar + Cards**

**Arquivo:** `ex02_navbar.html`

**O que você vai aprender:**

- Estrutura navbar com logo e menu
- Posicionamento de elementos com `justify-content: space-between`
- Layout de cards com grid usando flexbox
- Propriedade `gap` para espaçamento consistente
- Hover effects e transições CSS

**Padrão típico:**

```
┌────────────────────────────────────┐
│  Logo      Menu 1   Menu 2   Menu 3│  (Navbar com flex)
├────────────────────────────────────┤
│  [Card] [Card] [Card]              │  (Cards com flex-wrap)
│  [Card] [Card] [Card]              │
└────────────────────────────────────┘
```

**Casos de uso:** Sites pessoais, portfólios, lojas online

**Tempo sugerido:** 20-30 minutos

---

### **Exercício 03: Layout com Cards + Sidebar**

**Arquivo:** `ex03_cards_sidebar.html`

**O que você vai aprender:**

- Layout em duas colunas (70% + 30%)
- Sidebar fixa ao lado do conteúdo principal
- Media queries para responsividade (breakpoint 768px)
- Transformação do layout em telas pequenas

**Padrão de layout:**

```
Desktop (>768px):
┌──────────────────────────────────┐
│ Header com Navbar                │
├──────────────────┬───────────────┤
│                  │               │
│  Cards (70%)     │  Sidebar      │
│                  │   (30%)       │
│                  │               │
└──────────────────┴───────────────┘

Mobile (<768px):
┌──────────────────┐
│     Header       │
├──────────────────┤
│  Cards (100%)    │
├──────────────────┤
│  Sidebar (100%)  │
└──────────────────┘
```

**Casos de uso:** Blogs, dashboards, portais de notícias

**Tempo sugerido:** 30-40 minutos

---

### **Exercício 04: Layout Avançado (3 Colunas)**

**Arquivo:** `ex04_layout_avancado.html`

**O que você vai aprender:**

- Layout em três colunas (20% + 60% + 20%)
- Múltiplos níveis de nesting com flexbox
- Grid de cards responsivo (2x3)
- Media queries para diferentes breakpoints

**Padrão de layout:**

```
Desktop (>1024px):
┌──────┬──────────────────┬──────┐
│      │                  │      │
│ Side │  Cards Grid      │ Side │
│ bar  │  (6 cards, 2x3)  │ bar  │
│      │                  │      │
└──────┴──────────────────┴──────┘

Tablet (768px-1024px):
┌──────────────────┐
│  Cards Grid      │
│  (3 cards, 1x3)  │
│  Sidebars abaixo │
└──────────────────┘

Mobile (<768px):
┌──────────────────┐
│  Cards Stack     │
│  (1 card por lin)│
└──────────────────┘
```

**Casos de uso:** Dashboards administrativos, galerias, plataformas de conteúdo

**Tempo sugerido:** 40-50 minutos

---

### **Exercício 05: Projeto Prático - Site SENAC**

**Arquivo:** `ex05_projeto.html` + `ex05_projeto.css`

**O que você vai aprender:**

- Estrutura completa de um website
- Header com navegação
- Hero section com imagem e texto lado-a-lado
- Seção de cursos com cards
- Footer
- Aplicação integrada de todos os conceitos anteriores

**Estrutura do projeto:**

```
┌────────────────────────────────┐
│  Header + Navbar (flex)        │
├────────────────────────────────┤
│  Hero Section                  │
│  ├─ Imagem (40%)              │
│  └─ Texto (60%)               │
├────────────────────────────────┤
│  Cursos Section                │
│  ├─ [Card] [Card] [Card]      │
│  └─ [Card] [Card] [Card]      │
├────────────────────────────────┤
│  Footer (flex)                 │
└────────────────────────────────┘
```

**Casos de uso:** Websites reais, landing pages, portais educacionais

**Tempo sugerido:** 30-40 minutos (inclui experimentação)

---

## 🎓 Progressão Recomendada

### **Nível Iniciante** (Sem experiência com flexbox)

1. ✅ Exercício 01 - Fundamentos (OBRIGATÓRIO)
2. ✅ Exercício 02 - Navbar + Cards
3. ✅ Exercício 05 - Projeto Prático

**Tempo total:** ~1.5 horas

### **Nível Intermediário** (Conhecimento básico de CSS)

1. ✅ Exercício 01 - Fundamentos (revisão rápida)
2. ✅ Exercício 02 - Navbar + Cards
3. ✅ Exercício 03 - Cards + Sidebar
4. ✅ Exercício 04 - Layout Avançado
5. ✅ Exercício 05 - Projeto Prático

**Tempo total:** ~2.5 horas

### **Nível Avançado** (Experiência com CSS)

1. ⚡ Exercício 04 - Layout Avançado (desafio)
2. ⚡ Exercício 05 - Projeto Prático (implementar melhorias)
3. 🎯 Projeto final: Criar seu próprio layout

**Tempo total:** ~1.5 horas + projeto pessoal

---

## 🔧 Como Usar Esta Pasta

### **Para Estudar:**

1. Abra `ex01_basico.html` em seu navegador
2. Leia os comentários HTML explicando cada conceito
3. Inspecione o CSS (F12 > Inspector)
4. Modifique os valores CSS e observe as mudanças
5. Passe para o próximo exercício

### **Para Ensinar:**

1. Use a progressão sugerida
2. Projete os arquivos em um projetor
3. Mostre o efeito de cada propriedade
4. Peça aos alunos para modificarem o CSS
5. Crie desafios baseados em cada exercício

### **Para Referenciar:**

- Procure pelo conceito que precisa na lista acima
- Use os arquivos como template para seus próprios projetos
- Copie e adapte o CSS conforme necessário

---

## 📌 Propriedades Flexbox Essenciais

### **Container**

| Propriedade       | Valores                                 | Efeito               |
| ----------------- | --------------------------------------- | -------------------- |
| `display`         | `flex`                                  | Ativa flexbox        |
| `flex-direction`  | `row`, `column`                         | Direção dos itens    |
| `justify-content` | `flex-start`, `center`, `space-between` | Espaço horizontal    |
| `align-items`     | `flex-start`, `center`, `stretch`       | Alinhamento vertical |
| `flex-wrap`       | `wrap`, `nowrap`                        | Quebra de linha      |
| `gap`             | `1em`, `2em`                            | Espaço entre items   |

### **Items**

| Propriedade   | Valores        | Efeito       |
| ------------- | -------------- | ------------ |
| `flex-grow`   | `0`, `1`, `2`  | Crescimento  |
| `flex-shrink` | `1`            | Encolhimento |
| `flex-basis`  | `100px`, `50%` | Tamanho base |

---

## 💡 Dicas Práticas

### **Dica 1: Debug com cores**

Adicione background colors temporários para visualizar o layout:

```css
.container {
  background-color: lightblue;
}
.item {
  background-color: lightcoral;
}
```

### **Dica 2: Use DevTools**

Pressione F12 → Inspecione elementos → Modifique CSS em tempo real

### **Dica 3: Mobile First**

Sempre comece com layout mobile, depois adicione media queries

### **Dica 4: Combine com Grid**

Flexbox é perfeito para componentes; use CSS Grid para layouts gerais

### **Dica 5: Documentação**

Consulte [MDN Flexbox Playground](https://developer.mozilla.org/docs/) quando tiver dúvidas

---

## 🚀 Exercícios Propostos

### **Após Exercício 01:**

- Crie um container flexbox com 4 boxes que crescem igualmente
- Altere a direção para coluna
- Adicione gap entre eles

### **Após Exercício 02:**

- Modifique as cores da navbar
- Adicione mais cards
- Implemente diferentes tamanhos de cards

### **Após Exercício 03:**

- Altere o breakpoint de 768px para 992px
- Mude a proporção cards/sidebar para 80/20
- Adicione mais conteúdo na sidebar

### **Após Exercício 04:**

- Crie um grid de 4 colunas (em desktop)
- Reduza para 2 colunas em tablets
- Reduza para 1 coluna em mobile

### **Exercício Final:**

Crie um website completo com:

- Header + Navbar responsiva
- Hero section
- 3 seções de conteúdo
- Cards responsivos
- Footer
- Sem usar CSS Grid (apenas flexbox!)

---

## ❓ Troubleshooting

| Problema                | Solução                                     |
| ----------------------- | ------------------------------------------- |
| Items não alinham       | Verifique `align-items` e `justify-content` |
| Wrap não funciona       | Adicione `flex-wrap: wrap` ao container     |
| Muito espaço em branco  | Use `gap` em vez de margin                  |
| Items desaparecem       | Verifique `flex-shrink` e `min-width`       |
| Responsividade quebrada | Adicione `max-width: 100%` aos items        |

---

## 📊 Resumo de Conceitos

### **Eixos do Flexbox:**

- **Eixo Principal:** Controlado por `flex-direction`
- **Eixo Transversal:** Perpendicular ao eixo principal

### **Espaçamento:**

- `justify-content`: Espaço no eixo principal
- `align-items`: Alinhamento no eixo transversal
- `gap`: Espaço uniforme entre items

### **Dimensionamento:**

- `flex-grow`: Item cresce se houver espaço
- `flex-shrink`: Item encolhe se não houver espaço
- `flex-basis`: Tamanho inicial do item

---

## 🎯 Checklist de Competências

Ao completar este módulo, você deve conseguir fazer:

- [ ] Criar um layout flexbox básico com 3 colunas
- [ ] Implementar uma navbar responsiva com flexbox
- [ ] Posicionar elementos com `justify-content` e `align-items`
- [ ] Criar um grid de cards com flexbox e flex-wrap
- [ ] Implementar media queries para responsividade
- [ ] Usar `gap` para espaçamento consistente
- [ ] Aplicar flexbox em layouts aninhados
- [ ] Debugar layouts com DevTools
- [ ] Escolher entre flexbox e grid para diferentes casos
- [ ] Criar um website responsivo completo com flexbox

---

## 📚 Recursos Adicionais

### **Documentação Oficial:**

- [MDN Web Docs - Flexbox](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS Tricks - Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### **Ferramentas Interativas:**

- [Flexbox Playground](https://www.flexboxplayground.com/)
- [Flex Froggy Game](https://flexboxfroggy.com/)

### **Vídeos Recomendados:**

- Busque "Flexbox Tutorial" no YouTube
- "Web Design Responsivo com Flexbox"

---

## 📝 Registro de Mudanças

### **Versão 2.0 - Reorganização Completa**

**O que mudou:**

- ✅ Renomeação de arquivos para padrão lógico (ex01-ex05)
- ✅ Consolidação de 7+ arquivos originais em 5 exercícios estruturados
- ✅ Adição de comentários detalhados em HTML e CSS
- ✅ Implementação de media queries em todos os exemplos
- ✅ Melhoria de visual com hover effects e transições
- ✅ Remoção de dependências de arquivos locais (uso de placeholders)
- ✅ Criação desta documentação completa

**Arquivos originais consolidados:**

- `index.html` → `ex01_basico.html`
- `exemplo.html` + `exemplo.css` → `ex02_navbar.html`
- `exrev/` → `ex03_cards_sidebar.html`
- `exrev01/` → `ex04_layout_avancado.html`
- `exemplo_senac/` → `ex05_projeto.html` + `ex05_projeto.css`

---

## 👨‍🏫 Dúvidas Frequentes

**P: Qual a diferença entre Flexbox e Grid?**
R: Flexbox é 1D (linhas OU colunas), Grid é 2D (linhas E colunas). Use flexbox para componentes, Grid para layouts gerais.

**P: Quando usar `flex-basis` vs `width`?**
R: `flex-basis` é melhor com flexbox. `width` funciona, mas flexbox pode ignorar dependendo das outras propriedades.

**P: Como centralizar um elemento no flexbox?**
R: Use `justify-content: center` + `align-items: center` + `display: flex` + `height` definido.

**P: Media queries quebram meu layout. O que fazer?**
R: Sempre teste em diferentes tamanhos. Use DevTools para inspecionar breakpoints.

---

**Última atualização:** 2024
**Versão:** 2.0
**Status:** ✅ Pronto para uso

---

_Este módulo foi desenvolvido como material educacional para ensino de CSS Flexbox. Sinta-se livre para adaptar e melhorar conforme necessário._
