// Exercícios Intermediários com Operador Ternário

// Verificar se um número está entre 10 e 20: Dado um número, determine se ele está no intervalo entre 10 e 20.

let numero = 15;
let dentroIntervalo = (numero >= 10 && numero <= 20) ? "Está no intervalo" : "Não está no intervalo";
console.log("O número " + numero + " " + dentroIntervalo);

//Determinar se um aluno passou ou não: Dada uma nota, determine se o aluno foi aprovado (nota maior ou igual a 60) ou reprovado.

let nota = 58;
let status = (nota >= 60) ? "Aprovado" : "Reprovado"; // Verifica se a nota é maior ou igual a 60
console.log("O aluno está: " + status);


// Verificar se uma pessoa pode votar: Dada a idade de uma pessoa, determine se ela pode votar(idade igual ou maior que 16).

let idade = 14;
let podeVotar = (idade >= 16) ? "Pode votar" : "Não pode votar"; // Verifica se a idade é maior ou igual a 16
console.log("Com a idade de " + idade + " anos, a pessoa " + podeVotar);
