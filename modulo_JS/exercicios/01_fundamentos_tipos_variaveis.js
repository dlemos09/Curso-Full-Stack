// ========================================
// AULA 01: Fundamentos do JavaScript
// Objetivo didático: entender tipos, variáveis e operadores
// Por que importa: base para todas as estruturas do JS
// Sequência: tipos → conversões → escopo → comparações → boas práticas
// ========================================

// EXERCÍCIO 1 - BÁSICO: Declaração e Tipos
// Objetivo: Praticar declaração de variáveis e identificar tipos
// Aplicação real: Formulários, validação de dados de entrada

// Declare variáveis para armazenar informações de um produto
const nomeProduto = "Notebook Dell";
let precoProduto = 3500.0;
let emEstoque = true;
let desconto = null; // Nenhum desconto aplicado no momento
let categoria; // Ainda não definida

// Exiba o tipo de cada variável
console.log("=== EXERCÍCIO 1: Tipos de Dados ===");
console.log(`Nome: ${nomeProduto} - Tipo: ${typeof nomeProduto}`);
console.log(`Preço: ${precoProduto} - Tipo: ${typeof precoProduto}`);
console.log(`Em estoque: ${emEstoque} - Tipo: ${typeof emEstoque}`);
console.log(`Desconto: ${desconto} - Tipo: ${typeof desconto}`); // null é object (peculiaridade do JS)
console.log(`Categoria: ${categoria} - Tipo: ${typeof categoria}`);

// EXERCÍCIO 2 - BÁSICO: Conversão de Tipos (Coerção)
// Objetivo: Entender coerção implícita e explícita
// Aplicação real: Processar dados de formulários (strings) em cálculos

console.log("\n=== EXERCÍCIO 2: Coerção de Tipos ===");

const idadeString = "25";
const bonus = 5;

// Coerção implícita (concatenação)
console.log("Concatenação: " + idadeString + bonus); // "255"

// Coerção explícita (conversão para número)
const idadeNumero = Number(idadeString);
console.log("Soma correta: " + (idadeNumero + bonus)); // 30

// Validando se a conversão foi bem-sucedida
const entradaInvalida = "abc";
const resultado = Number(entradaInvalida);
console.log(`Conversão de "${entradaInvalida}": ${resultado}`); // NaN
console.log(`É NaN? ${Number.isNaN(resultado)}`); // true

// EXERCÍCIO 3 - INTERMEDIÁRIO: Comparação == vs ===
// Objetivo: Diferenciar comparação frouxa e estrita
// Aplicação real: Validações condicionais precisas

console.log("\n=== EXERCÍCIO 3: Comparação == vs === ===");

const numeroStr = "10";
const numeroNum = 10;

console.log(`"10" == 10: ${numeroStr == numeroNum}`); // true (coerção)
console.log(`"10" === 10: ${numeroStr === numeroNum}`); // false (tipos diferentes)

// Exemplo prático: validação de formulário
function validarIdade(idade) {
  // Uso de === para garantir tipo e valor corretos
  if (idade === "") {
    return "Idade não informada";
  }
  if (typeof idade !== "number") {
    return "Idade deve ser um número";
  }
  if (idade < 18) {
    return "Menor de idade";
  }
  return "Maior de idade";
}

console.log(validarIdade(25)); // "Maior de idade"
console.log(validarIdade("25")); // "Idade deve ser um número"
console.log(validarIdade("")); // "Idade não informada"

// EXERCÍCIO 4 - INTERMEDIÁRIO: Escopo var, let e const
// Objetivo: Compreender diferenças de escopo
// Aplicação real: Evitar bugs em loops e funções

console.log("\n=== EXERCÍCIO 4: Escopo de Variáveis ===");

// var: escopo de função (hoisting)
function testeVar() {
  if (true) {
    var x = 10; // Visível fora do bloco
  }
  console.log("var x dentro da função:", x); // 10
}
testeVar();

// let: escopo de bloco
function testeLet() {
  if (true) {
    let y = 20; // Apenas dentro do bloco
    console.log("let y dentro do bloco:", y); // 20
  }
  // console.log(y); // Erro: y is not defined
}
testeLet();

// const: constante (não pode ser reatribuída)
const PI = 3.14159;
// PI = 3.14; // Erro: Assignment to constant variable

// Mas objetos const podem ter propriedades modificadas
const usuario = { nome: "Ana" };
usuario.nome = "Ana Silva"; // Permitido
console.log("Objeto const modificado:", usuario);

// EXERCÍCIO 5 - AVANÇADO: Detector de Tipo Robusto
// Objetivo: Criar função que identifica tipos com precisão
// Aplicação real: Validação de dados de API, debugging

console.log("\n=== EXERCÍCIO 5: Detector de Tipo Robusto ===");

function detectarTipo(valor) {
  // null é um caso especial (typeof null === 'object')
  if (valor === null) return "null";

  // Arrays
  if (Array.isArray(valor)) return "array";

  // Datas
  if (valor instanceof Date) return "date";

  // RegExp
  if (valor instanceof RegExp) return "regex";

  // Tipos primitivos
  return typeof valor;
}

// Testes
console.log("null:", detectarTipo(null)); // "null"
console.log("[]:", detectarTipo([])); // "array"
console.log("{}:", detectarTipo({})); // "object"
console.log("new Date():", detectarTipo(new Date())); // "date"
console.log("42:", detectarTipo(42)); // "number"
console.log("'texto':", detectarTipo("texto")); // "string"
console.log("/abc/:", detectarTipo(/abc/)); // "regex"

// EXERCÍCIO 6 - AVANÇADO: BigInt e Symbol
// Objetivo: Trabalhar com tipos modernos do JavaScript
// Aplicação real: IDs únicos, cálculos com números muito grandes

console.log("\n=== EXERCÍCIO 6: BigInt e Symbol ===");

// BigInt: números inteiros muito grandes
const numeroGrande = 9007199254740991n; // Limite do Number
const numeroMaior = numeroGrande + 1n;
console.log("BigInt:", numeroMaior);

// Operações com BigInt
const calcBig = BigInt(100) * BigInt(200);
console.log("Cálculo BigInt:", calcBig);

// Symbol: identificadores únicos
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log("Symbols iguais?", id1 === id2); // false (sempre únicos)

// Aplicação: propriedades privadas em objetos
const usuario2 = {
  nome: "Carlos",
  [Symbol("senha")]: "123456", // Não aparece em iterações normais
};

console.log("Usuário:", usuario2);
console.log("Chaves visíveis:", Object.keys(usuario2)); // ['nome']

// EXERCÍCIO 7 - APLICAÇÃO REAL: Mini CLI Detector de Tipo
// Objetivo: Simular entrada de usuário e processar
// Aplicação real: Scripts Node.js, processamento de argumentos

console.log("\n=== EXERCÍCIO 7: Mini CLI Detector ===");

function processarEntrada(entrada) {
  const tipo = detectarTipo(entrada);

  console.log(`Entrada: ${entrada}`);
  console.log(`Tipo detectado: ${tipo}`);

  // Processar de acordo com o tipo
  if (tipo === "number") {
    console.log(`Dobro: ${entrada * 2}`);
  } else if (tipo === "string") {
    console.log(`Maiúsculas: ${entrada.toUpperCase()}`);
    console.log(`Comprimento: ${entrada.length}`);
  } else if (tipo === "array") {
    console.log(`Elementos: ${entrada.length}`);
    console.log(`Primeiro: ${entrada[0]}`);
  }
  console.log("---");
}

// Simular diferentes entradas
processarEntrada(42);
processarEntrada("JavaScript");
processarEntrada([1, 2, 3, 4, 5]);
processarEntrada(true);

console.log("\n✅ Exercícios de Fundamentos concluídos!");
