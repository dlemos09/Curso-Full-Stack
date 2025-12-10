# GUIA DE EXERCÍCIOS DE FUNÇÕES EM JAVASCRIPT

Bem-vindo à pasta de exercícios focados em FUNÇÕES!
Aqui você encontrará uma progressão didática, do básico ao avançado,
com contextos reais e práticos.

---

## ESTRUTURA DA PASTA

01_funcoes_basicas_calculadora.js
Nível: BÁSICO
Contexto: Sistema de Calculadora
Foco: Função simples, parâmetros, retorno, validação
Conceitos: Declaração, chamada, parâmetros padrão, objeto retornado
10 exercícios progressivos

02_funcoes_intermediarias_usuarios.js
Nível: INTERMEDIÁRIO
Contexto: Sistema de Gerenciamento de Usuários
Foco: Manipulação de arrays, objetos, métodos funciais
Conceitos: Array.find(), Array.filter(), Array.map(), operações em lote
10 exercícios com busca, filtro, atualização de dados

03_funcoes_avancadas_loja.js
Nível: AVANÇADO
Contexto: Sistema de Loja Online com Carrinho
Foco: Callbacks, Higher-Order Functions, Closures, Padrões
Conceitos: Curry, Memoização, Composição, Encadeamento, Middleware
10 exercícios explorando padrões avançados

04_desafios_praticos.js
Nível: DESAFIOS / APLICAÇÃO REAL
Contexto: Problemas do Mundo Real
Foco: Integração de conceitos, Algoritmos, Padrões
Conceitos: Regex, Conversões, Observer Pattern, Debounce, etc.
10 desafios práticos para consolidar aprendizado

---

## COMO USAR ESTE MATERIAL

1. ORDEM RECOMENDADA:

   - Comece por 01_funcoes_basicas_calculadora.js
   - Progrida para 02_funcoes_intermediarias_usuarios.js
   - Continue com 03_funcoes_avancadas_loja.js
   - Finalize com 04_desafios_praticos.js

2. PARA CADA ARQUIVO:

   - Leia o enunciado do exercício
   - Tente resolver ANTES de ver a solução
   - Execute no Node.js ou no console do navegador
   - Estude a solução e entenda o conceito

3. PARA EXECUTAR NO NAVEGADOR:

   - Abra DevTools (F12)
   - Cole o conteúdo no console
   - Ou use: <script src="arquivo.js"></script>

4. PARA EXECUTAR NO NODE.JS:
   - Terminal: node 01_funcoes_basicas_calculadora.js
   - Veja a saída no console

---

## PRINCIPAIS CONCEITOS COBERTOS

NÍVEL BÁSICO (Arquivo 01):
✓ Declaração de funções
✓ Parâmetros e retorno
✓ Funções anônimas
✓ Arrow functions
✓ Tratamento de erros simples
✓ Template literals
✓ Valores padrão

NÍVEL INTERMEDIÁRIO (Arquivo 02):
✓ Criação e manipulação de objetos
✓ Array.find() - buscar elemento
✓ Array.filter() - filtrar elementos
✓ Array.map() - transformar elementos
✓ Validação de dados
✓ Ordenação (sort)
✓ Composição de funções

NÍVEL AVANÇADO (Arquivo 03):
✓ Callbacks e Higher-Order Functions
✓ Closures (funções que retornam funções)
✓ Currying (aplicação parcial)
✓ Composição de funções (compose)
✓ Memoização (cache)
✓ Encadeamento de métodos (method chaining)
✓ Side effects e forEach
✓ Reduce avançado
✓ Classes com método encadeado

DESAFIOS (Arquivo 04):
✓ Expressões regulares (regex)
✓ Conversões entre unidades
✓ Análise de frequência
✓ Cálculos ponderados
✓ Geração aleatória
✓ Closures com estado privado
✓ Observer Pattern
✓ Debounce (timing)
✓ Algoritmos iterativos
✓ Gerador de jogo

---

## PADRÕES IMPORTANTES A APRENDER

1. HIGHER-ORDER FUNCTION
   Função que recebe ou retorna outra função
   Exemplo: function aplicarOperacao(valor, operacao) { return operacao(valor); }

2. CALLBACK
   Função passada como parâmetro
   Exemplo: array.map(funcao_callback)

3. CLOSURE
   Função que "lembra" do escopo em que foi criada
   Exemplo: function criar() { let x = 10; return () => x; }

4. CURRYING
   Converter função com múltiplos parâmetros em sequência de funções
   Exemplo: function soma(a) { return b => a + b; }

5. COMPOSIÇÃO
   Combinar funções pequenas para criar funções maiores
   Exemplo: compose(fn1, fn2)(valor)

6. MEMOIZAÇÃO
   Cachear resultados para evitar recálculos
   Exemplo: if (cache[arg]) return cache[arg];

7. ENCADEAMENTO
   Métodos retornam 'this' para permitir .method1().method2()
   Exemplo: obj.add().apply().calculate()

8. MIDDLEWARE
   Função que envolve outra função adicionando funcionalidade
   Exemplo: addLogging(funcao_original)

---

## DICAS DE APRENDIZADO

• ESTUDE INCREMENTALMENTE: não pule níveis
• EXECUTE O CÓDIGO: vendo funcionar ajuda na compreensão
• MODIFIQUE OS EXEMPLOS: teste variações
• VEJA O CONSOLE: use console.log para rastrear execução
• LEIA A DOCUMENTAÇÃO: MDN Web Docs é seu amigo
• PRATIQUE REFATORAÇÃO: reescreva usando diferentes técnicas
• COMBINE CONCEITOS: misture o que aprende

---

## RECURSOS EXTERNOS

MDN Web Docs:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions

JavaScript.info:
https://javascript.info/function-basics

Eloquent JavaScript:
https://eloquentjavascript.net/

---

## PRÓXIMOS PASSOS APÓS COMPLETAR

1. Integre funções com DOM (08_dom_eventos_pagina.js)
2. Combine com Array/Objetos (03_arrays_metodos_funcionais.js, 04_objetos_json_destructuring.js)
3. Use em projetos (09_8_mini_projeto_storage_http.js)
4. Estude Async/Promises (07_assincrono_promises_async.js)
5. Explore Classes e POO

---

## GABARITO

Todos os exercícios já incluem a SOLUÇÃO comentada.
Não pule direto para a resposta — tente primeiro!

Para cada exercício:

1. Leia o enunciado
2. Tente resolver (5-10 min)
3. Veja a solução proposta
4. Execute e teste
5. Adapte e experimenta variações

---

## ESTRUTURA TÍPICA DE CADA EXERCÍCIO

/\*
// ==========================================
// EXERCÍCIO X - Nome do Exercício
// ==========================================
// Enunciado:
// Descrição clara do que fazer
// Dica (se houver)

// Sua função aqui:
// ...

// Testando:
console.log('Exercício X:', resultado);
// Esperado: valor esperado

\*/

---

## AVALIAÇÃO DO PROGRESSO

✓ Arquivo 01 (10 exercícios): Domina o básico?

- Consegue declarar e chamar funções
- Entende parâmetros e retorno
- Conhece as diferenças entre tipos de declaração

✓ Arquivo 02 (10 exercícios): Trabalha com coleções?

- Manipula objetos dentro de funções
- Usa find/filter/map corretamente
- Compõe funções para processar dados

✓ Arquivo 03 (10 exercícios): Domina padrões?

- Entende callbacks e closures
- Aplica curry e composição
- Usa encadeamento efetivamente

✓ Arquivo 04 (10 desafios): Resolve problemas reais?

- Combina conceitos para solucionar desafios
- Escolhe padrões apropriados
- Escreve código limpo e reutilizável

---

## CONCLUSÃO

Depois de completar estes exercícios, você terá:

1. Domínio completo de funções em JavaScript
2. Conhecimento de padrões profissionais
3. Capacidade de escrever código limpo e reutilizável
4. Entendimento de closures, callbacks e composição
5. Confiança para atacar problemas complexos

Sucesso na jornada! 🚀

---

Última atualização: Dezembro 2025
Material criado com foco em didática progressiva
