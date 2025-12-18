# 📑 ÍNDICE RÁPIDO - MÓDULO FLEXBOX

## 🚀 Acesso Rápido

### **Para Começar Agora:**

1. Abra [ex01_basico.html](ex01_basico.html) ← **COMECE AQUI**
2. Leia os comentários HTML
3. Inspecione com F12 (DevTools)
4. Modifique o CSS e veja as mudanças

### **Encontre o que Precisa:**

| Preciso...                  | Arquivo                      | Tempo     |
| --------------------------- | ---------------------------- | --------- |
| Aprender flexbox do zero    | ex01_basico.html             | 30-45 min |
| Criar uma navbar            | ex02_navbar.html             | 20 min    |
| Fazer layout com sidebar    | ex03_cards_sidebar.html      | 30 min    |
| Layout complexo (3 colunas) | ex04_layout_avancado.html    | 40 min    |
| Ver projeto completo        | ex05_projeto.html            | 30 min    |
| Referência rápida           | [README.md](README.md)       | 5 min     |
| Ver o que mudou             | [MELHORIAS.md](MELHORIAS.md) | 10 min    |

---

## 📚 Exercícios por Nível

### **Iniciante**

> Sem experiência com flexbox

```
ex01_basico.html      ← OBRIGATÓRIO
    ↓
ex02_navbar.html      ← Componente simples
    ↓
ex05_projeto.html     ← Projeto completo
```

⏱️ **Tempo:** ~1.5 horas

### **Intermediário**

> Conhecimento básico de CSS

```
ex01_basico.html      ← Revisão rápida
    ↓
ex02_navbar.html      ← Navbar
    ↓
ex03_cards_sidebar.html   ← Layout 2 colunas
    ↓
ex04_layout_avancado.html ← Layout 3 colunas
    ↓
ex05_projeto.html     ← Projeto integrado
```

⏱️ **Tempo:** ~2.5 horas

### **Avançado**

> Experiência com CSS

```
ex04_layout_avancado.html ← Desafio
    ↓
ex05_projeto.html     ← Melhorar/estender
    ↓
💡 Projeto próprio
```

⏱️ **Tempo:** ~1.5 horas + projeto

---

## 🎯 Encontre por Conceito

### **display e direção**

- 📍 ex01_basico.html (containers 1-4)
- 📍 [README.md#propriedades](README.md) - Tabela de referência

### **justify-content** (espaço horizontal)

- 📍 ex01_basico.html (containers 2-3, 5-6)
- 📍 ex02_navbar.html (navbar com space-between)
- 📍 ex03_cards_sidebar.html (cards com center)

### **align-items** (alinhamento vertical)

- 📍 ex01_basico.html (containers 3-4)
- 📍 ex02_navbar.html (menu alinhado verticalmente)
- 📍 ex04_layout_avancado.html (sidebar com stretch)

### **flex-wrap** (quebra de linha)

- 📍 ex01_basico.html (container 7)
- 📍 ex02_navbar.html (cards responsivos)
- 📍 ex04_layout_avancado.html (grid 2x3)

### **gap** (espaçamento)

- 📍 ex01_basico.html (todos os containers)
- 📍 ex02_navbar.html (menu e cards)
- 📍 ex03_cards_sidebar.html (cards grid)

### **flex-grow / flex-shrink**

- 📍 ex01_basico.html (containers 8-9)
- 📍 ex03_cards_sidebar.html (cards que crescem)
- 📍 ex04_layout_avancado.html (sidebar 20%)

### **flex-basis**

- 📍 ex01_basico.html (container 9)
- 📍 ex02_navbar.html (menu items)
- 📍 ex04_layout_avancado.html (largura base dos cards)

### **Nested Flexbox**

- 📍 ex01_basico.html (container 9)
- 📍 ex02_navbar.html (navbar + cards)
- 📍 ex05_projeto.html (hero + cards)

### **Responsividade**

- 📍 ex03_cards_sidebar.html (breakpoint 768px)
- 📍 ex04_layout_avancado.html (breakpoints 1024px e 768px)
- 📍 ex05_projeto.html (hero responsivo)

### **Layouts práticos**

- 🎨 Navbar: ex02_navbar.html
- 🎨 Sidebar: ex03_cards_sidebar.html
- 🎨 Multi-coluna: ex04_layout_avancado.html
- 🎨 Website completo: ex05_projeto.html

---

## 🔧 Como Usar

### **Estudando:**

```
1. Abra o arquivo em um navegador
2. Pressione F12 para abrir DevTools
3. Leia os comentários HTML (seção <head>)
4. Inspecione os elementos CSS
5. Modifique valores e veja o resultado
6. Tente criar variações
```

### **Ensinando:**

```
1. Projete em telão (F11 - fullscreen)
2. Mostre o código no VS Code
3. Modifique propriedades em tempo real
4. Peça aos alunos para replicar
5. Incentive experimentação
```

### **Como Referência:**

```
1. Procure o conceito na tabela acima
2. Abra o arquivo sugerido
3. Copie o padrão CSS
4. Adapte para seu projeto
```

---

## 💡 Dicas Rápidas

### **Centralizar um elemento:**

```css
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
```

### **Navbar com logo + menu:**

```css
display: flex;
justify-content: space-between;
align-items: center;
```

### **Grid de cards responsivo:**

```css
display: flex;
flex-wrap: wrap;
gap: 2em;
justify-content: center;
```

### **Layout 2 colunas (70-30):**

```css
display: flex;
gap: 2em;

.main {
  flex: 70%;
}
.sidebar {
  flex: 30%;
}
```

### **Layout 3 colunas (20-60-20):**

```css
display: flex;
gap: 2em;

.left {
  flex: 0 0 20%;
}
.main {
  flex: 0 0 60%;
}
.right {
  flex: 0 0 20%;
}
```

### **Cards que crescem:**

```css
.card {
  flex: 1;
  min-width: 200px;
}
```

### **Responsividade (mobile first):**

```css
/* Mobile por padrão */
display: flex;
flex-direction: column;

/* Desktop */
@media (min-width: 768px) {
  flex-direction: row;
}
```

---

## 🎯 Checklist de Aprendizado

Marque conforme aprende:

### **Conceitos Básicos:**

- [ ] Entendo o que é `display: flex`
- [ ] Sei diferenciar row de column
- [ ] Consigo usar `justify-content`
- [ ] Consigo usar `align-items`
- [ ] Sei como funciona `gap`

### **Conceitos Intermediários:**

- [ ] Entendo `flex-wrap`
- [ ] Sei o que é `flex-basis`
- [ ] Consigo usar `flex-grow`
- [ ] Consigo usar `flex-shrink`
- [ ] Consigo criar layouts 2 colunas

### **Conceitos Avançados:**

- [ ] Consigo usar flexbox aninhado
- [ ] Sei como implementar media queries
- [ ] Consigo criar layouts 3+ colunas
- [ ] Entendo quando usar flexbox vs grid
- [ ] Consigo criar layouts responsivos completos

### **Aplicação Prática:**

- [ ] Consigo criar uma navbar
- [ ] Consigo criar um grid de cards
- [ ] Consigo criar um layout com sidebar
- [ ] Consigo fazer responsividade funcionar
- [ ] Consigo criar um website do zero com flexbox

---

## 🚀 Começar Agora

### **Opção 1: Iniciante**

➡️ Abra [ex01_basico.html](ex01_basico.html) agora mesmo!

### **Opção 2: Já conheço o básico**

➡️ Escolha um exercício da tabela acima

### **Opção 3: Preciso de uma referência**

➡️ Consulte [README.md](README.md) para referência completa

### **Opção 4: Quer entender o que foi melhorado**

➡️ Leia [MELHORIAS.md](MELHORIAS.md)

---

## 📊 Estrutura de Arquivos

```
flex-box/
├── ex01_basico.html          [9 conceitos básicos]
├── ex02_navbar.html          [Navbar + cards]
├── ex03_cards_sidebar.html   [Layout 70-30]
├── ex04_layout_avancado.html [Layout 20-60-20]
├── ex05_projeto.html         [Projeto SENAC]
├── ex05_projeto.css          [CSS separado]
├── README.md                 [Guia completo] ← Leia isto
├── MELHORIAS.md              [O que mudou]
└── INDICE.md                 [Este arquivo]
```

---

## 🆘 Precisa de Ajuda?

| Dúvida                         | Consulte                                     |
| ------------------------------ | -------------------------------------------- |
| "Como começar?"                | Comece por ex01_basico.html                  |
| "Qual é a progressão?"         | Veja tabela "Exercícios por Nível" acima     |
| "Onde encontro conceito X?"    | Veja tabela "Encontre por Conceito" acima    |
| "Como é responsividade?"       | Veja ex03 ou ex04 (tem media queries)        |
| "Preciso de referência rápida" | Consulte README.md - tabela de propriedades  |
| "Como posso melhorar?"         | Veja ex05_projeto.html como exemplo completo |

---

## ⭐ Favoritos (Mais Usados)

```
1. ex01_basico.html      ← Padrão de referência
2. ex02_navbar.html      ← Padrão navbar + cards
3. ex05_projeto.html     ← Padrão website completo
```

---

## 🎓 Competências por Arquivo

### **ex01_basico.html**

✅ display: flex
✅ flex-direction
✅ justify-content
✅ align-items
✅ flex-wrap
✅ gap
✅ flex-grow
✅ flex-shrink
✅ flex-basis

### **ex02_navbar.html**

✅ Navbar com flexbox
✅ justify-content: space-between
✅ flex-wrap para responsividade
✅ Hover effects
✅ Cards layout

### **ex03_cards_sidebar.html**

✅ Layout 2 colunas (70-30)
✅ Media queries (768px)
✅ Proporções com flex
✅ Cards responsivos

### **ex04_layout_avancado.html**

✅ Layout 3 colunas (20-60-20)
✅ Grid responsivo (2x3)
✅ Múltiplos breakpoints
✅ Nested flexbox
✅ Sidebar + main + sidebar

### **ex05_projeto.html**

✅ Website completo
✅ Hero section
✅ Cards layout
✅ Footer responsivo
✅ Aplicação integrada

---

**Última atualização:** 2024
**Versão:** 1.0

_Começe por [ex01_basico.html](ex01_basico.html) - não se arrependerá!_ 🚀
