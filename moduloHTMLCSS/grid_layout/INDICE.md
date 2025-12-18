# 📑 ÍNDICE RÁPIDO - MÓDULO CSS GRID

## 🚀 Acesso Rápido

### **Para Começar Agora:**

1. Abra [ex01_basico.html](ex01_basico.html) ← **COMECE AQUI**
2. Leia os comentários HTML
3. Inspecione com F12 (DevTools)
4. Modifique o CSS e veja as mudanças

### **Encontre o que Precisa:**

| Preciso...                     | Arquivo                      | Tempo     |
| ------------------------------ | ---------------------------- | --------- |
| Aprender Grid do zero          | ex01_basico.html             | 30-45 min |
| Ver aplicação prática          | ex02_calculadora.html        | 20 min    |
| Layout completo (profissional) | ex03_projeto.html            | 40 min    |
| Referência rápida              | [README.md](README.md)       | 5 min     |
| Ver o que mudou                | [MELHORIAS.md](MELHORIAS.md) | 10 min    |

---

## 📚 Exercícios por Nível

### **Iniciante**

> Sem experiência com Grid

```
ex01_basico.html      ← OBRIGATÓRIO (9 conceitos)
    ↓
ex02_calculadora.html ← Aplicação prática
    ↓
ex03_projeto.html     ← Projeto completo
```

⏱️ **Tempo:** ~2 horas

### **Intermediário**

> Conhecimento básico de CSS

```
ex01_basico.html      ← Revisão rápida
    ↓
ex02_calculadora.html ← Entender span
    ↓
💡 Criar seu próprio layout
```

⏱️ **Tempo:** ~2.5 horas

### **Avançado**

> Experiência com CSS

```
ex03_projeto.html     ← Análise profunda
    ↓
💡 Estender projeto
    ↓
🎯 Projeto do zero
```

⏱️ **Tempo:** ~2 horas + projeto

---

## 🎯 Encontre por Conceito

### **display e grid-template-columns**

- 📍 ex01_basico.html (containers 1-3)
- 📍 [README.md#propriedades](README.md) - Tabela de referência

### **grid-template-rows**

- 📍 ex01_basico.html (container 4)
- 📍 ex03_projeto.html (header grid)

### **gap (espaçamento)**

- 📍 ex01_basico.html (todos os containers)
- 📍 ex02_calculadora.html (espaço entre botões)
- 📍 ex03_projeto.html (layout geral)

### **repeat()**

- 📍 ex01_basico.html (container 3)
- 📍 ex02_calculadora.html (grid de botões)

### **minmax() e auto-fit**

- 📍 ex01_basico.html (containers 6-7)
- 📍 ex03_projeto.html (atributos responsivos)

### **grid-column: span e grid-row: span**

- 📍 ex01_basico.html (container 5)
- 📍 ex02_calculadora.html (botão 0 e +)
- 📍 ex03_projeto.html (caracteristicas)

### **grid-template-areas**

- 📍 ex01_basico.html (container 8)
- 📍 ex03_projeto.html (layout principal)

### **Grid aninhado**

- 📍 ex01_basico.html (container 9)
- 📍 ex02_calculadora.html (display dentro de grid)
- 📍 ex03_projeto.html (múltiplos grids)

### **Responsividade**

- 📍 ex01_basico.html (conceitos de tamanho flexível)
- 📍 ex02_calculadora.html (breakpoint 450px)
- 📍 ex03_projeto.html (3 breakpoints: 1024px, 768px)

### **Layouts práticos**

- 🎨 Calculadora: ex02_calculadora.html
- 🎨 Website: ex03_projeto.html (header, sidenav, content, footer)

---

## 🔧 Como Usar

### **Estudando:**

```
1. Abra o arquivo em um navegador
2. Pressione F12 para abrir DevTools
3. Leia os comentários HTML
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

### **Grid básico (3 colunas):**

```css
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 1em;
```

### **Grid responsivo automático:**

```css
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

### **Item ocupa 2 colunas:**

```css
grid-column: span 2;
/* ou */
grid-column: 1 / 3;
```

### **Item ocupa 2 linhas:**

```css
grid-row: span 2;
```

### **Layout com áreas:**

```css
grid-template-areas:
  "header header header"
  "sidebar main sidebar"
  "footer footer footer";
```

### **Centralizar um elemento:**

```css
display: grid;
place-items: center;
height: 100vh;
```

---

## 🎯 Checklist de Aprendizado

Marque conforme aprende:

### **Conceitos Básicos:**

- [ ] Entendo `display: grid`
- [ ] Consigo definir colunas
- [ ] Consigo definir linhas
- [ ] Sei usar `gap`
- [ ] Entendo unidade `fr`

### **Conceitos Intermediários:**

- [ ] Consigo usar `repeat()`
- [ ] Entendo `minmax()`
- [ ] Consigo usar `grid-column: span`
- [ ] Consigo usar `grid-row: span`
- [ ] Consigo criar layouts 2 colunas

### **Conceitos Avançados:**

- [ ] Consigo usar `grid-template-areas`
- [ ] Entendo `auto-fit` / `auto-fill`
- [ ] Consigo criar grid aninhado
- [ ] Consigo fazer responsividade completa
- [ ] Consigo criar layouts profissionais

### **Aplicação Prática:**

- [ ] Consigo criar uma calculadora
- [ ] Consigo criar um layout com header/footer
- [ ] Consigo fazer layout responsivo
- [ ] Consigo combinar Grid + Flexbox
- [ ] Consigo criar um website do zero

---

## 🚀 Começar Agora

### **Opção 1: Iniciante**

➡️ Abra [ex01_basico.html](ex01_basico.html) agora mesmo!

### **Opção 2: Já conheço o básico**

➡️ Vá para [ex02_calculadora.html](ex02_calculadora.html)

### **Opção 3: Quer um layout profissional**

➡️ Abra [ex03_projeto.html](ex03_projeto.html)

### **Opção 4: Preciso de referência**

➡️ Consulte [README.md](README.md)

### **Opção 5: Quer entender o que foi melhorado**

➡️ Leia [MELHORIAS.md](MELHORIAS.md)

---

## 📊 Estrutura de Arquivos

```
grid_layout/
├── ex01_basico.html          [9 conceitos essenciais]
├── ex02_calculadora.html     [Aplicação prática com span]
├── ex03_projeto.html         [Layout profissional completo]
├── README.md                 [Guia completo] ← Leia isto
├── MELHORIAS.md              [O que mudou]
├── INDICE.md                 [Este arquivo]
└── RESUMO_FINAL.md           [Sumário executivo]
```

---

## 🆘 Precisa de Ajuda?

| Dúvida                         | Consulte                                    |
| ------------------------------ | ------------------------------------------- |
| "Como começar?"                | Comece por ex01_basico.html                 |
| "Qual é a progressão?"         | Veja tabela "Exercícios por Nível" acima    |
| "Onde encontro conceito X?"    | Veja tabela "Encontre por Conceito" acima   |
| "Como é responsividade?"       | Veja ex03_projeto.html (tem 3 breakpoints)  |
| "Preciso de referência rápida" | Consulte README.md - tabela de propriedades |
| "Como posso praticar?"         | Use exercícios propostos em README.md       |

---

## ⭐ Favoritos (Mais Usados)

```
1. ex01_basico.html      ← Padrão de referência
2. ex02_calculadora.html ← Padrão de aplicação
3. ex03_projeto.html     ← Padrão de layout profissional
```

---

## 🎓 Competências por Arquivo

### **ex01_basico.html**

✅ display: grid
✅ grid-template-columns (fr, repeat, minmax)
✅ grid-template-rows
✅ gap
✅ grid-column: span
✅ grid-row: span
✅ grid-template-areas
✅ auto-fit / auto-fill
✅ Grid aninhado

### **ex02_calculadora.html**

✅ Grid para interface
✅ grid-column: span (botão 0)
✅ grid-row: span (botão +)
✅ Estilo de componentes
✅ Transições e hover
✅ Responsividade mobile

### **ex03_projeto.html**

✅ Grid layout profissional
✅ grid-template-areas
✅ Nested grids (header, características, atributos)
✅ Múltiplos breakpoints
✅ Layout responsivo (3 breakpoints)
✅ Combinação Grid + Flexbox

---

**Última atualização:** 2024
**Versão:** 1.0

_Começe por [ex01_basico.html](ex01_basico.html) - não se arrependerá!_ 🚀
