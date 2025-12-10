// ========================================
// EXERCÍCIOS - AULA 02: Controle de Fluxo e Funções
// Tema: Estruturas condicionais, loops e funções
// ========================================

// EXERCÍCIO 1 - BÁSICO: Estruturas Condicionais
// Objetivo: Praticar if/else e switch
// Aplicação real: Sistema de notas, classificação de produtos

console.log("=== EXERCÍCIO 1: Estruturas Condicionais ===");

function classificarNota(nota) {
  if (nota >= 90) {
    return "A - Excelente";
  } else if (nota >= 80) {
    return "B - Muito Bom";
  } else if (nota >= 70) {
    return "C - Bom";
  } else if (nota >= 60) {
    return "D - Regular";
  } else {
    return "F - Insuficiente";
  }
}

console.log("Nota 95:", classificarNota(95));
console.log("Nota 75:", classificarNota(75));
console.log("Nota 55:", classificarNota(55));

// Mesma lógica com switch
function obterDiaSemana(dia) {
  switch (dia) {
    case 1:
      return "Segunda-feira";
    case 2:
      return "Terça-feira";
    case 3:
      return "Quarta-feira";
    case 4:
      return "Quinta-feira";
    case 5:
      return "Sexta-feira";
    case 6:
      return "Sábado";
    case 7:
      return "Domingo";
    default:
      return "Dia inválido";
  }
}

console.log("Dia 3:", obterDiaSemana(3));
console.log("Dia 7:", obterDiaSemana(7));

// EXERCÍCIO 2 - BÁSICO: Loops e Iterações
// Objetivo: Dominar for, while, for...of, for...in
// Aplicação real: Processar listas, percorrer objetos

console.log("\n=== EXERCÍCIO 2: Loops ===");

// for tradicional
console.log("For tradicional - contagem:");
for (let i = 1; i <= 5; i++) {
  console.log(`  Número ${i}`);
}

// while
console.log("While - contagem regressiva:");
let contador = 5;
while (contador > 0) {
  console.log(`  ${contador}...`);
  contador--;
}
console.log("  🚀 Lançamento!");

// for...of (arrays)
const frutas = ["Maçã", "Banana", "Laranja"];
console.log("For...of - frutas:");
for (const fruta of frutas) {
  console.log(`  - ${fruta}`);
}

// for...in (objetos)
const pessoa = { nome: "Ana", idade: 28, cidade: "São Paulo" };
console.log("For...in - propriedades do objeto:");
for (const chave in pessoa) {
  console.log(`  ${chave}: ${pessoa[chave]}`);
}

// EXERCÍCIO 3 - INTERMEDIÁRIO: Funções (Declaration, Expression, Arrow)
// Objetivo: Criar funções com diferentes sintaxes
// Aplicação real: Callbacks, manipulação de arrays, eventos

console.log("\n=== EXERCÍCIO 3: Tipos de Funções ===");

// 1. Function Declaration
function somar(a, b) {
  return a + b;
}

// 2. Function Expression
const multiplicar = function (a, b) {
  return a * b;
};

// 3. Arrow Function
const dividir = (a, b) => {
  if (b === 0) return "Divisão por zero!";
  return a / b;
};

function dividir(a, b) {
  if (b === 0) return "Divisão por zero!";
  return a / b;
}

const dividir = function(a, b) {
  if (b === 0) return "Divisão por zero!";
  return a / b;
};






// Arrow function simplificada (uma expressão)
const quadrado = (x) => x * x;

console.log("Soma 5 + 3:", somar(5, 3));
console.log("Multiplicação 4 * 7:", multiplicar(4, 7));
console.log("Divisão 20 / 5:", dividir(20, 5));
console.log("Quadrado de 6:", quadrado(6));

// EXERCÍCIO 4 - INTERMEDIÁRIO: Parâmetros Default e Rest
// Objetivo: Trabalhar com parâmetros flexíveis
// Aplicação real: APIs, funções utilitárias

console.log("\n=== EXERCÍCIO 4: Parâmetros Default e Rest ===");

// Parâmetros com valores padrão
function saudar(nome = "visitante", hora = "dia") {
  return `Bom ${hora}, ${nome}!`;
}

console.log(saudar()); // Usa valores padrão
console.log(saudar("Carlos")); // Sobrescreve nome
console.log(saudar("Maria", "noite")); // Sobrescreve ambos

// Rest parameters (aceita quantidade variável)
function somarTodos(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log("Soma variável:", somarTodos(1, 2, 3, 4, 5)); // 15
console.log("Soma variável:", somarTodos(10, 20)); // 30

// Spread operator (expandir arrays)
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const combinado = [...nums1, ...nums2];
console.log("Arrays combinados:", combinado);

// EXERCÍCIO 5 - AVANÇADO: Closures
// Objetivo: Criar funções que "lembram" seu escopo
// Aplicação real: Encapsulamento, factories, contadores privados

console.log("\n=== EXERCÍCIO 5: Closures ===");

// Closure simples: contador
function criarContador() {
  let count = 0; // Variável privada

  return {
    incrementar: function () {
      count++;
      return count;
    },
    decrementar: function () {
      count--;
      return count;
    },
    obterValor: function () {
      return count;
    },
    resetar: function () {
      count = 0;
      return count;
    },
  };
}

const contador1 = criarContador();
console.log("Incrementar:", contador1.incrementar()); // 1
console.log("Incrementar:", contador1.incrementar()); // 2
console.log("Incrementar:", contador1.incrementar()); // 3
console.log("Decrementar:", contador1.decrementar()); // 2
console.log("Valor atual:", contador1.obterValor()); // 2
console.log("Resetar:", contador1.resetar()); // 0

// Cada contador é independente
const contador2 = criarContador();
console.log("Contador 2:", contador2.incrementar()); // 1
console.log("Contador 1 ainda é:", contador1.obterValor()); // 0

// EXERCÍCIO 6 - AVANÇADO: Memoização
// Objetivo: Cachear resultados de funções caras
// Aplicação real: Otimização de performance, cálculos pesados

console.log("\n=== EXERCÍCIO 6: Memoização ===");

function memoizar(fn) {
  const cache = new Map();

  return function (...args) {
    const chave = JSON.stringify(args);

    if (cache.has(chave)) {
      console.log(`  📦 Cache hit: ${chave}`);
      return cache.get(chave);
    }

    console.log(`  🔄 Calculando: ${chave}`);
    const resultado = fn(...args);
    cache.set(chave, resultado);
    return resultado;
  };
}

// Função cara: cálculo de Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibMemo = memoizar(fibonacci);

console.log("Fibonacci memoizado:");
console.log("fib(10):", fibMemo(10)); // Calcula
console.log("fib(10):", fibMemo(10)); // Usa cache
console.log("fib(15):", fibMemo(15)); // Calcula

// EXERCÍCIO 7 - AVANÇADO: Composição de Funções
// Objetivo: Combinar funções pequenas em pipelines
// Aplicação real: Processamento de dados, transformações

console.log("\n=== EXERCÍCIO 7: Composição de Funções ===");

// Compose: executa da direita para esquerda
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((v, f) => f(v), x);

// Pipe: executa da esquerda para direita
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

// Funções simples
const dobrar = (x) => x * 2;
const adicionar5 = (x) => x + 5;
const elevarAoQuadrado = (x) => x * x;

// Compor funções
const processar = pipe(
  dobrar, // 10 -> 20
  adicionar5, // 20 -> 25
  elevarAoQuadrado // 25 -> 625
);

console.log("Pipeline (10):", processar(10)); // 625

// String processing pipeline
const trim = (str) => str.trim();
const uppercase = (str) => str.toUpperCase();
const exclamar = (str) => `${str}!`;

const formatarGrito = pipe(trim, uppercase, exclamar);
console.log("Formatação:", formatarGrito("  olá mundo  ")); // "OLÁ MUNDO!"

// EXERCÍCIO 8 - APLICAÇÃO REAL: Validador de Formulário
// Objetivo: Combinar estruturas e funções em caso prático
// Aplicação real: Validação de cadastro, login

console.log("\n=== EXERCÍCIO 8: Validador de Formulário ===");

function validarFormulario(dados) {
  const erros = [];

  // Validar nome (mínimo 3 caracteres)
  if (!dados.nome || dados.nome.trim().length < 3) {
    erros.push("Nome deve ter no mínimo 3 caracteres");
  }

  // Validar email (regex simples)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!dados.email || !emailRegex.test(dados.email)) {
    erros.push("Email inválido");
  }

  // Validar senha (mínimo 6 caracteres)
  if (!dados.senha || dados.senha.length < 6) {
    erros.push("Senha deve ter no mínimo 6 caracteres");
  }

  // Validar idade (entre 18 e 120)
  if (!dados.idade || dados.idade < 18 || dados.idade > 120) {
    erros.push("Idade deve estar entre 18 e 120 anos");
  }

  return {
    valido: erros.length === 0,
    erros: erros,
  };
}

// Testes
const form1 = {
  nome: "Ana Silva",
  email: "ana@email.com",
  senha: "123456",
  idade: 25,
};
const form2 = { nome: "Jo", email: "invalido", senha: "123", idade: 15 };

console.log("Formulário 1:", validarFormulario(form1));
console.log("Formulário 2:", validarFormulario(form2));

console.log("\n✅ Exercícios de Controle de Fluxo e Funções concluídos!");
