/*
EXERCÍCIOS DE FUNÇÕES - Nível Básico
Contexto: Sistema de Calculadora Simples
-------------------------------------
Objetivo: Dominar declaração, parâmetros, retorno e chamadas de função.
*/

// ==========================================
// EXERCÍCIO 1 - Função Básica de Soma
// ==========================================
// Enunciado:
// Crie uma função chamada 'somar' que receba dois números
// e retorne a soma deles. Após a função, chame-a com valores 5 e 3.

function somar(a, b) {
  return a + b;
}

// Testando:
console.log("Exercício 1 - Soma:", somar(5, 3)); // Esperado: 8

// ==========================================
// EXERCÍCIO 2 - Calculadora com Múltiplas Operações
// ==========================================
// Enunciado:
// Crie três funções separadas: subtrair, multiplicar e dividir.
// Cada uma recebe dois números. Chame as três com os valores 10 e 2.

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

// Testando:
console.log("Exercício 2 - Subtração:", subtrair(10, 2)); // Esperado: 8
console.log("Exercício 2 - Multiplicação:", multiplicar(10, 2)); // Esperado: 20
console.log("Exercício 2 - Divisão:", dividir(10, 2)); // Esperado: 5
console.log("Exercício 2 - Divisão por zero:", dividir(10, 0)); // Esperado: Erro

// ==========================================
// EXERCÍCIO 3 - Função com Valor Padrão
// ==========================================
// Enunciado:
// Crie uma função 'aplicarDesconto' que receba um preço e uma porcentagem.
// Se nenhuma porcentagem for informada, use 10% como padrão.

function aplicarDesconto(preco, porcentagem = 10) {
  const desconto = preco * (porcentagem / 100);
  return preco - desconto;
}

// Testando:
console.log("Exercício 3 - Desconto 10%:", aplicarDesconto(100)); // Esperado: 90
console.log("Exercício 3 - Desconto 25%:", aplicarDesconto(100, 25)); // Esperado: 75

// ==========================================
// EXERCÍCIO 4 - Função que Retorna Múltiplos Valores
// ==========================================
// Enunciado:
// Crie uma função 'calcularIMC' que receba peso (kg) e altura (m)
// e retorne um objeto com o IMC e a classificação (abaixo do peso, normal, sobrepeso).

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

// Testando:
console.log("Exercício 4 - IMC:", calcularIMC(70, 1.75)); // Esperado: {imc: 22.86, classificacao: "Peso normal"}

// ==========================================
// EXERCÍCIO 5 - Função com Validação
// ==========================================
// Enunciado:
// Crie uma função 'validarIdade' que receba uma idade.
// Retorne true se a idade for válida (entre 0 e 120), false caso contrário.
// Use a função para verificar várias idades: -5, 25, 150.

function validarIdade(idade) {
  return idade >= 0 && idade <= 120;
}

// Testando:
console.log("Exercício 5 - Idade -5:", validarIdade(-5)); // Esperado: false
console.log("Exercício 5 - Idade 25:", validarIdade(25)); // Esperado: true
console.log("Exercício 5 - Idade 150:", validarIdade(150)); // Esperado: false

// ==========================================
// EXERCÍCIO 6 - Função que Chama Outra Função
// ==========================================
// Enunciado:
// Crie uma função 'calcularFatura' que:
// 1. Recebe quantidade de itens e preço unitário.
// 2. Calcula o subtotal.
// 3. Aplica um desconto de 5% usando a função 'aplicarDesconto'.
// 4. Retorna o total final.

function calcularFatura(quantidade, precoUnitario) {
  const subtotal = quantidade * precoUnitario;
  const total = aplicarDesconto(subtotal, 5);
  return {
    subtotal: subtotal.toFixed(2),
    desconto: (subtotal * 0.05).toFixed(2),
    total: total.toFixed(2),
  };
}

// Testando:
console.log("Exercício 6 - Fatura:", calcularFatura(5, 50)); // Esperado: {subtotal: 250, desconto: 12.5, total: 237.5}

// ==========================================
// EXERCÍCIO 7 - Função Anônima Atribuída a Variável
// ==========================================
// Enunciado:
// Crie uma função anônima (sem nome) que calcula a área de um retângulo.
// Atribua-a a uma variável chamada 'areaRetangulo'.
// Chame a função usando a variável.

const areaRetangulo = function (largura, altura) {
  return largura * altura;
};

// Testando:
console.log("Exercício 7 - Área:", areaRetangulo(4, 6)); // Esperado: 24

// ==========================================
// EXERCÍCIO 8 - Arrow Function Simples
// ==========================================
// Enunciado:
// Reescreva o exercício 7 usando arrow function.
// Crie uma variável 'areaCirculo' que calcula área de círculo (π * r²).

const areaCirculo = (raio) => {
  return Math.PI * raio * raio;
};

// Versão comprimida (retorno implícito):
const areaCirculoCompacta = (raio) => Math.PI * raio * raio;

// Testando:
console.log("Exercício 8 - Área do círculo (r=5):", areaCirculo(5).toFixed(2)); // Esperado: 78.50

// ==========================================
// EXERCÍCIO 9 - Função que Trata Erros
// ==========================================
// Enunciado:
// Crie uma função 'calcularMedia' que receba três notas.
// Retorne a média. Se alguma nota for negativa ou maior que 10, retorne mensagem de erro.

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

// Testando:
console.log("Exercício 9 - Média válida:", calcularMedia(7, 8, 9)); // Esperado: 8.00
console.log("Exercício 9 - Média inválida:", calcularMedia(7, 15, 9)); // Esperado: Erro

// ==========================================
// EXERCÍCIO 10 - Função com Múltiplos Parâmetros
// ==========================================
// Enunciado:
// Crie uma função 'formatarDados' que receba nome, idade, profissão.
// Retorne uma string formatada: "Nome: fulano, Idade: 30, Profissão: engenheiro".

function formatarDados(nome, idade, profissao) {
  return `Nome: ${nome}, Idade: ${idade}, Profissão: ${profissao}`;
}

// Testando:
console.log("Exercício 10:", formatarDados("João", 30, "Engenheiro"));
// Esperado: "Nome: João, Idade: 30, Profissão: Engenheiro"

// ==========================================
// RESUMO DE CONCEITOS
// ==========================================
// 1. Função com retorno simples (exercícios 1-5)
// 2. Funções reutilizáveis (exercício 6)
// 3. Funções anônimas (exercício 7)
// 4. Arrow functions (exercício 8)
// 5. Tratamento de erros (exercício 9)
// 6. Template literals (exercício 10)
