// Exercícios Simples com operador Ternário

// Verificar se um número é par ou ímpar: Dado um número, determine se ele é par ou ímpar usando o operador ternário.

let numero = 7;
let resultado = (numero % 2 === 0) ? "Par" : "Ímpar"; // Verifica se o número é divisível por 2
console.log("O número " + numero + " é: " + resultado);

// Verificar se um número é positivo ou negativo: Dado um número, verifique se ele é positivo ou negativo usando o operador ternário.

let valor = -5;
let tipoNumero = (numero >= 0) ? "Positivo" : "Negativo"; // Verifica se o número é maior ou igual a 0
console.log("O número " + numero + " é: " + tipoNumero);


// Verificar a maioridade: Dada a idade de uma pessoa, determine se ela é maior de idade (18 anos ou mais).

let idade = 16;
let status = (idade >= 18) ? "Maior de idade" : "Menor de idade"; // Verifica se a idade é maior ou igual a 18
console.log("A pessoa é: " + status);
