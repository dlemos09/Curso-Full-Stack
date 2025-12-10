// ========================================
// AULA: Funções (Básico → Avançado)
// Objetivo: definir, usar e compor funções de forma clara.
// Por que importa: funções são unidades de reuso e abstração.
// Sequência didática: declaração → expressão → arrow → parâmetros → pureza → composição.
// ========================================

console.log("=== Funções: Básico → Avançado ===\n");

// Exercício 1 (Básico): Declaração vs Expressão de função
// Por que: entender hoisting e formas de declarar.
// Tarefa: Implementar soma nas duas formas.
function somaDeclarada(a, b) {
  return a + b;
}
const somaExpressao = function (a, b) {
  return a + b;
};
console.log("soma:", somaDeclarada(2, 3), somaExpressao(2, 3));

// Exercício 2 (Básico): Arrow function e concisão
// Por que: sintaxe moderna, mais curta.
// Tarefa: Dobrar números de um array.
const dobrar = (n) => n * 2;
console.log("dobrar:", [1, 2, 3].map(dobrar));

// Exercício 3 (Intermediário): Parâmetros padrão e rest
// Por que: tornar funções flexíveis na entrada.
// Tarefa: Somar N números com valor base opcional.
function somatorio(base = 0, ...nums) {
  return nums.reduce((acc, n) => acc + n, base);
}
console.log("somatorio:", somatorio(10, 1, 2, 3), somatorio(0, 4, 5));

// Exercício 4 (Intermediário): Funções puras vs impuras
// Por que: previsibilidade e testabilidade.
// Tarefa: Normalizar string (pura) vs gerar id aleatório (impura).
function normalizar(str) {
  return str.trim().toLowerCase();
}
function gerarId() {
  return Math.random().toString(36).slice(2, 8); // impura
}
console.log("normalizar:", normalizar("  Olá Mundo "), "id:", gerarId());

// Exercício 5 (Avançado): Closure
// Por que: encapsular estado e criar funções especializadas.
// Tarefa: Factory de acumulador.
function criarAcumulador(inicial = 0) {
  let total = inicial;
  return {
    adicionar(valor) {
      total += valor;
      return total;
    },
    total() {
      return total;
    },
  };
}
const acc = criarAcumulador(5);
console.log("acc:", acc.adicionar(3), acc.adicionar(2), acc.total());

// Exercício 6 (Avançado): Composição de funções
// Por que: montar pipelines reutilizáveis.
// Tarefa: Limpar e transformar string com compose.
const compose =
  (...fns) =>
  (x) =>
    fns.reduce((v, fn) => fn(v), x);
const trim = (s) => s.trim();
const toLower = (s) => s.toLowerCase();
const slug = (s) => s.replace(/\s+/g, "-").replace(/-+/g, "-");
const pipeline = compose(trim, toLower, slug);
console.log("compose:", pipeline("  Olá Mundo  JS "));

console.log("\n✅ Funções organizadas e didáticas (com racional).\n");
