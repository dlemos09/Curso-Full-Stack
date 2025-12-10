/*
SOLUÇÕES - EXERCÍCIOS DE FUNÇÕES BÁSICAS
Contexto: Sistema de Calculadora Simples
-------------------------------------
Todas as respostas com explicações detalhadas
*/

// ==========================================
// EXERCÍCIO 1 - Função Básica de Soma
// ==========================================
// SOLUÇÃO:

function somar(a, b) {
  return a + b;
}

console.log("Exercício 1 - Soma:", somar(5, 3)); // Resultado: 8

// EXPLICAÇÃO:
// - Função simples que recebe dois parâmetros (a, b)
// - Retorna a soma dos dois
// - Chamada: somar(5, 3)

// ==========================================
// EXERCÍCIO 2 - Calculadora com Múltiplas Operações
// ==========================================
// SOLUÇÃO:

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Erro: divisão por zero!";
  }
  return a / b;
}

console.log("Exercício 2 - Subtração:", subtrair(10, 2)); // 8
console.log("Exercício 2 - Multiplicação:", multiplicar(10, 2)); // 20
console.log("Exercício 2 - Divisão:", dividir(10, 2)); // 5
console.log("Exercício 2 - Divisão por zero:", dividir(10, 0)); // Erro

// EXPLICAÇÃO:
// - Três funções separadas para cada operação
// - Validação na divisão: verificar se divisor é zero
// - if (b === 0) retorna mensagem de erro em vez de resultado

// ==========================================
// EXERCÍCIO 3 - Função com Valor Padrão
// ==========================================
// SOLUÇÃO:

function aplicarDesconto(preco, porcentagem = 10) {
  const desconto = preco * (porcentagem / 100);
  return preco - desconto;
}

console.log("Exercício 3 - Desconto 10%:", aplicarDesconto(100)); // 90
console.log("Exercício 3 - Desconto 25%:", aplicarDesconto(100, 25)); // 75

// EXPLICAÇÃO:
// - Parâmetro com valor padrão: porcentagem = 10
// - Se não fornecido, usa 10%
// - Cálculo: desconto = preco * (porcentagem / 100)
// - Retorna preco - desconto

// ==========================================
// EXERCÍCIO 4 - Função que Retorna Múltiplos Valores
// ==========================================
// SOLUÇÃO:

function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  let classificacao;

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }

  return {
    imc: imc.toFixed(2),
    classificacao: classificacao,
  };
}

console.log("Exercício 4 - IMC:", calcularIMC(70, 1.75));

// EXPLICAÇÃO:
// - Retorna um OBJETO com múltiplas propriedades
// - imc: número formatado com 2 casas decimais (toFixed(2))
// - classificacao: string baseada em faixa de IMC
// - Vários if/else para classificar

// ==========================================
// EXERCÍCIO 5 - Função com Validação
// ==========================================
// SOLUÇÃO:

function validarIdade(idade) {
  return idade >= 0 && idade <= 120;
}

console.log("Exercício 5 - Idade -5:", validarIdade(-5)); // false
console.log("Exercício 5 - Idade 25:", validarIdade(25)); // true
console.log("Exercício 5 - Idade 150:", validarIdade(150)); // false

// EXPLICAÇÃO:
// - Retorna boolean (true ou false)
// - Valida se idade está entre 0 e 120
// - Operador && (E lógico): ambas as condições devem ser verdadeiras

// ==========================================
// EXERCÍCIO 6 - Função que Chama Outra Função
// ==========================================
// SOLUÇÃO:

function calcularFatura(quantidade, precoUnitario) {
  const subtotal = quantidade * precoUnitario;
  const total = aplicarDesconto(subtotal, 5); // Chama outra função
  return {
    subtotal: subtotal.toFixed(2),
    desconto: (subtotal * 0.05).toFixed(2),
    total: total.toFixed(2),
  };
}

console.log("Exercício 6 - Fatura:", calcularFatura(5, 50));

// EXPLICAÇÃO:
// - Função reutiliza 'aplicarDesconto' definida no exercício 3
// - Composição: uma função chama outra
// - Retorna objeto com 3 propriedades (subtotal, desconto, total)

// ==========================================
// EXERCÍCIO 7 - Função Anônima Atribuída a Variável
// ==========================================
// SOLUÇÃO:

const areaRetangulo = function (largura, altura) {
  return largura * altura;
};

console.log("Exercício 7 - Área:", areaRetangulo(4, 6)); // 24

// EXPLICAÇÃO:
// - Função SEM nome, atribuída a uma constante
// - Sintaxe: const nome = function(params) { ... }
// - Chamada: nome(argumentos)

// ==========================================
// EXERCÍCIO 8 - Arrow Function Simples
// ==========================================
// SOLUÇÃO:

const areaCirculo = (raio) => {
  return Math.PI * raio * raio;
};

// Versão comprimida (retorno implícito):
const areaCirculoCompacta = (raio) => Math.PI * raio * raio;

console.log("Exercício 8 - Área do círculo (r=5):", areaCirculo(5).toFixed(2)); // 78.50

// EXPLICAÇÃO:
// - Arrow function: (param) => { ... }
// - Versão comprimida: (param) => expressao (retorno implícito)
// - Math.PI: constante do JavaScript (3.14159...)
// - Fórmula: π * r²

// ==========================================
// EXERCÍCIO 9 - Função que Trata Erros
// ==========================================
// SOLUÇÃO:

function calcularMedia(nota1, nota2, nota3) {
  if (
    nota1 < 0 ||
    nota1 > 10 ||
    nota2 < 0 ||
    nota2 > 10 ||
    nota3 < 0 ||
    nota3 > 10
  ) {
    return "Erro: notas devem estar entre 0 e 10";
  }
  return ((nota1 + nota2 + nota3) / 3).toFixed(2);
}

console.log("Exercício 9 - Média válida:", calcularMedia(7, 8, 9)); // 8.00
console.log("Exercício 9 - Média inválida:", calcularMedia(7, 15, 9)); // Erro

// EXPLICAÇÃO:
// - Validação ANTES do cálculo
// - || (OU lógico): se qualquer nota inválida, retorna erro
// - Cálculo: (nota1 + nota2 + nota3) / 3
// - .toFixed(2): formata com 2 casas decimais

// ==========================================
// EXERCÍCIO 10 - Função com Múltiplos Parâmetros
// ==========================================
// SOLUÇÃO:

function formatarDados(nome, idade, profissao) {
  return `Nome: ${nome}, Idade: ${idade}, Profissão: ${profissao}`;
}

console.log("Exercício 10:", formatarDados("João", 30, "Engenheiro"));

// EXPLICAÇÃO:
// - Template literals: `texto ${variavel} texto`
// - Múltiplos parâmetros: (param1, param2, param3)
// - Retorna string formatada
// - Mais legível que concatenação com +

// ==========================================
// RESUMO DE TÉCNICAS USADAS
// ==========================================
// 1. Declaração de função: function nome() { }
// 2. Parâmetros e retorno: (a, b) => a + b
// 3. Valores padrão: (porcentagem = 10)
// 4. Retorno de objetos: return { prop1, prop2 }
// 5. Validação com if/else
// 6. Composição de funções
// 7. Funções anônimas
// 8. Arrow functions
// 9. Tratamento de erros
// 10. Template literals
