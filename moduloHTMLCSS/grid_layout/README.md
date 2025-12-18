# 📦 MÓDULO CSS GRID - Guia Completo

## 📋 Sobre Este Módulo

Este módulo apresenta uma progressão estruturada de exercícios sobre **CSS Grid**, o layout system mais poderoso e flexível do CSS moderno.

A pasta foi reorganizada com foco em:

- ✅ **Progressão pedagógica**: Do básico ao avançado
- ✅ **Nomenclatura clara**: Nomes descritivos para cada exercício
- ✅ **Comentários detalhados**: Explicações em HTML e CSS
- ✅ **Exemplos práticos**: Aplicações reais de grid
- ✅ **Responsividade**: Media queries em todos os exemplos

---

## 🎯 Objetivos de Aprendizado

Ao completar este módulo, você será capaz de:

1. **Entender conceitos fundamentais** de CSS Grid
2. **Aplicar grid** em layouts simples e complexos
3. **Usar grid-template-areas** para layouts semânticos
4. **Criar layouts responsivos** para diferentes tamanhos de tela
5. **Combinar Grid com Flexbox** para layouts profissionais
6. **Implementar projetos completos** usando CSS Grid

---

## 📚 Exercícios

### **Exercício 01: Fundamentos de CSS Grid**

**Arquivo:** `ex01_basico.html`

**O que você vai aprender:**

- Propriedade `display: grid`
- `grid-template-columns` (definir colunas)
- `grid-template-rows` (definir linhas)
- `gap` (espaçamento entre items)
- Unidade `fr` (fração flexível)
- Função `repeat()`
- Função `minmax()` (responsividade)
- `auto-fit` e `auto-fill` (responsividade automática)
- `grid-template-areas` (áreas nomeadas)
- Grid aninhado (nested grid)

**Conceitos-chave:**

```
┌─ Grid Container
│  ├─ Coluna 1  │  Coluna 2  │  Coluna 3
│  ├─ Item 1    │  Item 2    │  Item 3
│  └─ Item 4    │  Item 5    │  Item 6
└─ (Eixo horizontal e vertical)
```

**Dica:** Abra este arquivo em seu navegador e observe cada grid. Os comentários explicam cada conceito. Tente modificar os valores no CSS para entender o comportamento!

**Tempo sugerido:** 30-45 minutos

---

### **Exercício 02: Calculadora com CSS Grid**

**Arquivo:** `ex02_calculadora.html`

**O que você vai aprender:**

- Estrutura de grid para interface
- Posicionamento com `grid-column: span`
- Posicionamento com `grid-row: span`
- Estilo de botões e componentes
- Aplicação prática em calculadora
- Responsividade para mobile

**Padrão de layout:**

```
┌────────────────────────┐
│    Display (4 col)     │  (output ocupa 4 colunas)
├────┬────┬────┬────────┤
│ AC │  % │  X │   /    │
├────┼────┼────┼────────┤
│  7 │  8 │  9 │   =    │
├────┼────┼────┼────────┤
│  4 │  5 │  6 │   -    │
├────┼────┼────┼────────┤
│  1 │  2 │  3 │   +    │
│     (2) │  , │ (2lin) │
└────┴────┴────┴────────┘
```

**Casos de uso:** Interfaces, dashboards, layouts complexos

**Tempo sugerido:** 20-30 minutos

---

### **Exercício 03: Layout Projeto Completo com CSS Grid**

**Arquivo:** `ex03_projeto.html`

**O que você vai aprender:**

- Grid layout profissional
- Header com navegação
- Sidebar esquerda (menu)
- Conteúdo principal com múltiplos grids aninhados
- Sidebar direita (anúncios)
- Footer
- Media queries para responsividade (Desktop → Tablet → Mobile)
- `grid-template-areas` para layout semântico

**Padrão de layout:**

```
Desktop (>1024px):
┌──────────────────────────────────────┐
│           Header (3 col)             │
├──────────┬──────────────┬────────────┤
│ Sidenav  │              │  Anuncios  │
│ (200px)  │   Content    │  (250px)   │
│          │   (1fr)      │            │
├──────────┴──────────────┴────────────┤
│           Footer (3 col)             │
└──────────────────────────────────────┘

Tablet (768-1024px):
┌──────────────────────────┐
│      Header (2 col)      │
├───────────┬──────────────┤
│  Sidenav  │   Content    │
│ (150px)   │   (1fr)      │
├────────────────────────────┤
│    Anuncios (2 col)        │
├────────────────────────────┤
│        Footer (2 col)      │
└────────────────────────────┘

Mobile (<768px):
┌────────────────────┐
│     Header         │
├────────────────────┤
│    Sidenav         │
├────────────────────┤
│    Content         │
├────────────────────┤
│    Anuncios        │
├────────────────────┤
│     Footer         │
└────────────────────┘
```

**Casos de uso:** Websites, blogs, portais, dashboards

**Tempo sugerido:** 40-50 minutos

---

## 🎓 Progressão Recomendada

### **Nível Iniciante** (Sem experiência com grid)

1. ✅ Exercício 01 - Fundamentos (OBRIGATÓRIO)
2. ✅ Exercício 02 - Calculadora
3. ✅ Exercício 03 - Projeto Completo

**Tempo total:** ~2 horas

### **Nível Intermediário** (Conhecimento básico de CSS)

1. ✅ Exercício 01 - Fundamentos (revisão rápida)
2. ✅ Exercício 02 - Calculadora (compreensão de span)
3. ✅ Exercício 03 - Projeto Completo (layout profissional)
4. 🎯 Criar seu próprio layout combinando grid + flexbox

**Tempo total:** ~2.5 horas

### **Nível Avançado** (Experiência com CSS)

1. ⚡ Exercício 03 - Projeto (análise profunda)
2. 🎯 Estender projeto: adicionar mais seções, animações
3. 🎯 Criar layout do zero para projeto pessoal

**Tempo total:** ~2 horas + projeto

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

## 📌 Propriedades CSS Grid Essenciais

### **Container**

| Propriedade             | Valores                         | Efeito             |
| ----------------------- | ------------------------------- | ------------------ |
| `display`               | `grid`                          | Ativa CSS Grid     |
| `grid-template-columns` | `1fr 2fr 1fr`, `repeat(3, 1fr)` | Colunas            |
| `grid-template-rows`    | `100px 200px`                   | Linhas             |
| `gap`                   | `1em`, `1em 2em`                | Espaço entre items |
| `grid-template-areas`   | `"a a" "b c"`                   | Áreas nomeadas     |

### **Items**

| Propriedade   | Valores             | Efeito                 |
| ------------- | ------------------- | ---------------------- |
| `grid-column` | `1 / 3`, `span 2`   | Posição/tamanho coluna |
| `grid-row`    | `1 / 3`, `span 2`   | Posição/tamanho linha  |
| `grid-area`   | `header`, `content` | Atribui área nomeada   |

### **Funções e Unidades**

| Função               | Descrição                         |
| -------------------- | --------------------------------- |
| `fr`                 | Unidade flexível (fraction)       |
| `repeat(3, 1fr)`     | Repete 3 colunas iguais           |
| `minmax(150px, 1fr)` | Mínimo e máximo                   |
| `auto-fit`           | Adapta número de colunas          |
| `auto-fill`          | Preenche com colunas mesmo vazias |

---

## 💡 Dicas Práticas

### **Dica 1: Usar fr em vez de px**

```css
/* Melhor: flexível */
grid-template-columns: 1fr 2fr 1fr;

/* Evitar: fixo */
grid-template-columns: 300px 600px 300px;
```

### **Dica 2: Responsividade com auto-fit**

```css
/* Adapta automaticamente à tela */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

### **Dica 3: Usar grid-template-areas para layouts**

```css
grid-template-areas:
  "header header header"
  "sidebar main aside"
  "footer footer footer";
```

### **Dica 4: Debug com cores**

Adicione background colors temporários para visualizar o layout:

```css
.container {
  background-color: lightblue;
}
.item {
  background-color: lightcoral;
}
```

### **Dica 5: Combine Grid + Flexbox**

- Use **Grid** para layout geral (header, sidebar, main, footer)
- Use **Flexbox** para componentes (navbar, cards)

---

## 🚀 Exercícios Propostos

### **Após Exercício 01:**

- Crie um grid 4x4 com items em cores diferentes
- Use `grid-column: span` para fazer alguns items ocuparem 2 colunas
- Use `grid-row: span` para fazer alguns items ocuparem 2 linhas

### **Após Exercício 02:**

- Estenda a calculadora com mais linhas
- Mude o layout para mobile (2x8 em vez de 4x5)
- Adicione funcionalidade com JavaScript

### **Após Exercício 03:**

- Crie uma página similar com seu próprio conteúdo
- Adicione mais seções (hero, cards, testimonials)
- Implemente animações CSS
- Melhore o visual com cores e tipografia

### **Exercício Final:**

Crie um website completo com:

- Header com navegação
- Hero section
- 3+ seções de conteúdo
- Sidebar
- Footer responsivo
- Sem usar Flexbox (apenas Grid!)

---

## ❓ Troubleshooting

| Problema                         | Solução                                             |
| -------------------------------- | --------------------------------------------------- |
| Items não alinham                | Verifique `grid-template-columns` e `gap`           |
| Muitos espaços em branco         | Use `1fr` em vez de `auto`                          |
| Layout quebrado em mobile        | Adicione media queries com `grid-template-areas`    |
| Grid-template-areas não funciona | Certifique-se de que todos os items têm `grid-area` |
| Items desaparecem                | Verifique `grid-column` e `grid-row`                |

---

## 📊 Diferenças: Grid vs Flexbox

| Aspecto     | Grid                  | Flexbox                 |
| ----------- | --------------------- | ----------------------- |
| Dimensões   | 2D (linhas + colunas) | 1D (linha OU coluna)    |
| Uso         | Layout geral          | Componentes             |
| Alinhamento | Horizontal + Vertical | Principalmente Flexível |
| Melhor para | Páginas inteiras      | Navbars, menus          |

**Regra de Ouro:** Use Grid para o layout geral, Flexbox para componentes!

---

## 🎯 Checklist de Competências

Ao completar este módulo, você deve conseguir fazer:

- [ ] Criar um grid básico com colunas e linhas
- [ ] Usar `grid-template-columns` com diferentes valores
- [ ] Posicionar items com `grid-column` e `grid-row`
- [ ] Usar `gap` para espaçamento
- [ ] Aplicar `grid-template-areas`
- [ ] Criar layouts responsivos
- [ ] Usar `repeat()` e `minmax()`
- [ ] Implementar `auto-fit` / `auto-fill`
- [ ] Criar grid aninhado
- [ ] Debugar layouts com DevTools
- [ ] Escolher entre Grid e Flexbox
- [ ] Criar layouts profissionais completos

---

## 📚 Recursos Adicionais

### **Documentação Oficial:**

- [MDN Web Docs - CSS Grid](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Tricks - Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

### **Ferramentas Interativas:**

- [CSS Grid Generator](https://cssgrid-generator.netlify.app/)
- [Grid Cheat Sheet](https://www.stickermule.com/marketplace/12659-css-grid-cheat-sheet)

### **Vídeos Recomendados:**

- Busque "CSS Grid Tutorial" no YouTube
- "CSS Grid Layout Complete Course"

---

## 📝 Registro de Mudanças

### **Versão 2.0 - Reorganização Completa**

**O que mudou:**

- ✅ Renomeação de arquivos para padrão lógico (ex01-ex03)
- ✅ Consolidação de arquivos originais
- ✅ Adição de comentários detalhados em HTML e CSS
- ✅ Implementação de media queries em todos os exemplos
- ✅ Melhoria de visual com cores e efeitos
- ✅ Uso de placeholders para imagens
- ✅ Criação de documentação completa

**Arquivos originais consolidados:**

- `grid.html` → `ex01_basico.html`
- `calculadora/` → `ex02_calculadora.html`
- `gridProjeto/` → `ex03_projeto.html`

---

## 👨‍🏫 Dúvidas Frequentes

**P: Qual a diferença entre Grid e Flexbox?**
R: Grid é 2D (linhas + colunas), Flexbox é 1D (linha OU coluna). Use Grid para layouts gerais, Flexbox para componentes.

**P: Quando usar `auto-fit` vs `auto-fill`?**
R: `auto-fit` redimensiona items para preencher; `auto-fill` cria colunas vazias. `auto-fit` é geralmente melhor.

**P: Como fazer um item ocupar múltiplas colunas?**
R: Use `grid-column: span 2` ou `grid-column: 1 / 3`

**P: Como centralizar um elemento em grid?**
R: Use `display: grid; place-items: center;` no container.

**P: Grid quebra meu layout em mobile. O que fazer?**
R: Use `grid-template-areas` diferentes em media queries.

---

## 🏆 Resultado Final

Você estará pronto para:

- ✅ Criar layouts profissionais com CSS Grid
- ✅ Combinar Grid e Flexbox efetivamente
- ✅ Implementar responsividade completa
- ✅ Debugar problemas de layout
- ✅ Ensinar outros sobre Grid

---

**Última atualização:** 2024
**Versão:** 2.0
**Status:** ✅ Pronto para uso

---

_Este módulo foi desenvolvido como material educacional para ensino de CSS Grid. Sinta-se livre para adaptar e melhorar conforme necessário._
