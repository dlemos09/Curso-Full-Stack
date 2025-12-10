// ========================================
// AULA: Condicionais (Básico → Avançado)
// Objetivo: tomar decisões com clareza, previsibilidade e legibilidade.
// Por que importa: toda aplicação precisa decidir entre caminhos.
// Sequência didática: if/else → switch → operadores → guard clauses → padrões.
// ========================================

console.log("=== Condicionais: Básico → Avançado ===\n");

// Exercício 1 (Básico): if/else e comparações
// Por que: é a base de qualquer decisão.
// Tarefa: Classificar idade em faixas etárias.
function faixaEtaria(idade) {
  if (idade < 0) return "inválida"; // guard clause: falha cedo
  if (idade < 12) return "criança";
  if (idade < 18) return "adolescente";
  if (idade < 60) return "adulto";
  return "idoso";
}
console.log("faixaEtaria:", [5, 16, 30, 70, -1].map(faixaEtaria));

// Exercício 2 (Básico): if/else if vs switch
// Por que: switch deixa claro múltiplos casos de um mesmo valor.
// Tarefa: Traduzir status do pedido.
function traduzirStatus(status) {
  switch (status) {
    case "pending":
      return "Pendente";
    case "paid":
      return "Pago";
    case "shipped":
      return "Enviado";
    case "delivered":
      return "Entregue";
    case "canceled":
      return "Cancelado";
    default:
      return "Desconhecido";
  }
}
console.log("traduzirStatus:", ["pending", "paid", "x"].map(traduzirStatus));

// Exercício 3 (Intermediário): Operadores ternário e curto-circuito
// Por que: tornar decisões simples mais concisas (sem perder clareza).
// Tarefa: Mensagem de boas-vindas com fallback.
function boasVindas(nome) {
  const usuario = nome?.trim(); // optional chaining + trim
  const exibicao = usuario ? usuario : "Visitante"; // ternário
  return `Olá, ${exibicao}!`;
}
console.log("boasVindas:", ["Ana", "   ", null].map(boasVindas));

// Exercício 4 (Intermediário): Guard clauses
// Por que: reduzir nesting e tornar regras explícitas cedo.
// Tarefa: Calcular frete com regras e falhas antecipadas.
function calcularFrete(peso, regiao) {
  if (peso <= 0) return { ok: false, erro: "Peso inválido" };
  if (!["norte", "sul", "leste", "oeste"].includes(regiao))
    return { ok: false, erro: "Região inválida" };
  const base = regiao === "norte" ? 30 : 20; // decisão simples
  const adicional = peso > 10 ? 15 : 5; // outra decisão
  return { ok: true, valor: base + adicional };
}
console.log("calcularFrete:", [
  calcularFrete(12, "norte"),
  calcularFrete(3, "sul"),
  calcularFrete(0, "leste"),
  calcularFrete(5, "xyz"),
]);

// Exercício 5 (Avançado): Tabela de decisão (lookup)
// Por que: substituir múltiplos if/switch por mapa de configuração.
// Tarefa: Preço por plano com regra de fallback.
const precosPlano = {
  basico: 29.9,
  profissional: 59.9,
  empresarial: 129.9,
};
function precoPlano(nome) {
  return precosPlano[nome] ?? 39.9; // nullish coalescing para fallback
}
console.log(
  "precoPlano:",
  ["basico", "empresarial", "premium"].map(precoPlano)
);

// Exercício 6 (Avançado): Compor condições complexas com funções auxiliares
// Por que: legibilidade e reuso.
// Tarefa: Validar pedido (itens, total, status).
const ehPositivo = (n) => typeof n === "number" && n > 0;
const temItens = (pedido) =>
  Array.isArray(pedido.itens) && pedido.itens.length > 0;
const statusValido = (s) => ["pending", "paid", "canceled"].includes(s);
function validarPedido(p) {
  if (!temItens(p)) return "sem itens";
  if (!ehPositivo(p.total)) return "total inválido";
  if (!statusValido(p.status)) return "status inválido";
  return "ok";
}
console.log(
  "validarPedido:",
  [
    { itens: [1], total: 100, status: "pending" },
    { itens: [], total: 100, status: "pending" },
    { itens: [1], total: -1, status: "pending" },
    { itens: [1], total: 100, status: "xyz" },
  ].map(validarPedido)
);

console.log("\n✅ Condicionais organizadas e didáticas (com racional).\n");
