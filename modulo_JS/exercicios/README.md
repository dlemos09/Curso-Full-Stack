# 📚 Exercícios - Curso Completo de JavaScript

Coleção completa de exercícios práticos organizados por tópico, com exemplos comentados e aplicações reais.

## 📋 Estrutura dos Exercícios

Cada arquivo contém **7-9 exercícios** progressivos (básico → intermediário → avançado) com:

- ✅ Código completo e executável
- ✅ Comentários detalhados em português
- ✅ Aplicações práticas do mundo real
- ✅ Exemplos de uso e output esperado

---

## 📂 Lista de Arquivos

### **01 - Fundamentos e Tipos de Dados**

`01_fundamentos_tipos_variaveis.js`

- Tipos primitivos (string, number, boolean, null, undefined, Symbol, BigInt)
- Variáveis (var, let, const) e escopo
- Operadores aritméticos, lógicos e de comparação
- Type coercion e conversões
- **Aplicação real**: Validação de formulários, calculadoras

### **02A - Condicionais (Decisão)**

`02a_condicionais_logica.js`

- if/else, switch, ternário, curto-circuito
- Guard clauses e tabelas de decisão
- Funções auxiliares para legibilidade
- **Aplicação real**: Validação de regras de negócio

### **02B - Funções (Abstração)**

`02b_funcoes_logica.js`

- Declaração vs expressão vs arrow
- Parâmetros padrão e rest
- Funções puras vs impuras
- Closure e composição
- **Aplicação real**: Pipelines de transformação

### **03 - Arrays e Métodos Funcionais**

`03_arrays_metodos_funcionais.js`

- Criação e manipulação de arrays
- Métodos funcionais (map, filter, reduce, forEach)
- Find, some, every, flat, flatMap
- Encadeamento de métodos
- **Aplicação real**: Processamento de listas, filtros, dashboards

### **04 - Objetos, JSON e Destructuring**

`04_objetos_json_destructuring.js`

- Criação de objetos (literal, constructor, factory)
- Métodos de objetos, getters/setters
- JSON (parse, stringify)
- Destructuring de objetos e arrays
- Spread e rest operators
- **Aplicação real**: APIs, configurações, manipulação de dados

### **05 - Funções Avançadas, This e Bind**

`05_funcoes_avancadas_this_bind.js`

- Contexto `this` e binding
- call(), apply(), bind()
- Currying e partial application
- Debounce e throttle
- Composição de funções
- **Aplicação real**: Event handlers, otimização de performance

### **06 - Módulos, NPM e Estrutura de Projeto**

`06_modulos_npm_estrutura.js`

- ES Modules (import/export)
- CommonJS (require/module.exports)
- package.json e dependências
- Scripts NPM
- Estrutura de projetos profissionais
- **Aplicação real**: Organização de código, build tools

### **07 - Assíncrono: Callbacks, Promises, Async/Await**

`07_assincrono_promises_async.js`

- Callbacks e callback hell
- Promises (then, catch, finally)
- async/await
- Promise.all, Promise.race, Promise.allSettled
- Tratamento de erros assíncronos
- **Aplicação real**: APIs, operações I/O, requisições HTTP

### **08 - DOM, Eventos e Manipulação de Página**

`08_dom_eventos_pagina.js`

- Seleção de elementos (querySelector, getElementById)
- Manipulação do DOM (createElement, innerHTML)
- Eventos (addEventListener, event delegation)
- Prevenção de comportamento padrão
- **Aplicação real**: Interfaces interativas, formulários dinâmicos

### **09 - Storage, HTTP e Fetch API**

`09_storage_http_fetch.js`

- localStorage e sessionStorage
- Fetch API (GET, POST, PUT, DELETE)
- Headers e autenticação
- Tratamento de erros HTTP
- Cache de requisições
- **Aplicação real**: PWAs, aplicações SPA, integração com backend

### **10 - Node.js, File System e Módulos Nativos**

`10_nodejs_fs_modulos_nativos.js`

- File System (fs/promises): leitura, escrita, manipulação
- Path: manipulação de caminhos cross-platform
- Process: argumentos CLI, variáveis de ambiente
- Streams: processamento eficiente de arquivos grandes
- CLI tools completos
- **Aplicação real**: Automação, DevOps, ferramentas de linha de comando

---

## 🎯 Como Usar

### **Exercícios de Browser (01-09)**

```bash
# Opção 1: Incluir em HTML
<script src="exercicios/01_fundamentos_tipos_variaveis.js"></script>

# Opção 2: Abrir console do navegador e copiar/colar trechos
```

### **Exercícios de Node.js (10)**

```bash
node exercicios/10_nodejs_fs_modulos_nativos.js
```

---

## 🔥 Tópicos Avançados Abordados

- ⚡ **Performance**: Memoização, debounce, throttle
- 🔄 **Programação Funcional**: Composição, currying, imutabilidade
- 🎭 **Padrões**: Factory, módulos, closures
- 🌐 **Assíncrono**: Promises, async/await, controle de concorrência
- 🛠️ **Ferramentas**: NPM, CLI tools, streams

---

## 📖 Relação com as Aulas

| Exercício | Aula Correspondente         | Duração Aula |
| --------- | --------------------------- | ------------ |
| 01        | Aula 01 - Fundamentos       | 3h           |
| 02        | Aula 02 - Controle de Fluxo | 3h           |
| 03        | Aula 03 - Arrays            | 3h           |
| 04        | Aula 04 - Objetos e JSON    | 3h           |
| 05        | Aula 05 - Funções Avançadas | 3h           |
| 06        | Aula 06 - Módulos e NPM     | 3h           |
| 07        | Aula 07 - Assíncrono        | 3h           |
| 08        | Aula 08 - DOM               | 3h           |
| 09        | Aula 09 - Storage e HTTP    | 3h           |
| 10        | Aula 10 - Node.js           | 3h           |

---

## 🎓 Nível de Dificuldade

Cada exercício segue a progressão:

1. **BÁSICO** 🟢: Conceitos fundamentais, sintaxe básica
2. **INTERMEDIÁRIO** 🟡: Combinação de conceitos, casos práticos
3. **AVANÇADO** 🔴: Padrões complexos, otimizações, aplicações reais

---

## 💡 Dicas de Estudo

1. **Execute o código**: Não apenas leia, teste cada exemplo
2. **Modifique**: Altere valores e veja o que acontece
3. **Experimente**: Crie variações dos exercícios
4. **Debugue**: Use `console.log()` e breakpoints
5. **Projetos**: Combine conceitos de múltiplos arquivos

---

## 🔗 Recursos Complementares

- **MDN Web Docs**: https://developer.mozilla.org/pt-BR/
- **Node.js Docs**: https://nodejs.org/docs/
- **JavaScript.info**: https://javascript.info/
- **Can I Use**: https://caniuse.com/

---

## ✨ Próximos Passos

Após completar estes exercícios básicos, explore:

- **Aula 11**: Testes com Jest
- **Aula 12**: TypeScript
- **Aula 13**: Padrões de Projeto (Singleton, Observer, Factory)
- **Aula 14**: Performance e Otimização
- **Aula 15**: Projeto Final Integrador

---

**Desenvolvido para o curso completo de JavaScript profissional** 🚀
