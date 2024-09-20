// Exercícios Avançados com Operador Ternário

// Classificação de notas: Dada uma nota, determine o conceito correspondente (A, B, C, D, ou F) usando múltiplos operadores ternários.

let nota = 85;
let conceito = (nota >= 90) ? "A" : 
               (nota >= 80) ? "B" : 
               (nota >= 70) ? "C" : 
               (nota >= 60) ? "D" : "F";
console.log("O conceito para a nota " + nota + " é: " + conceito);

// Verificar se um número é divisível por 3 e por 5: Dado um número, determine se ele é divisível por 3 e por 5 ao mesmo tempo.

let numero = 15;
let divisivel = (numero % 3 === 0 && numero % 5 === 0) ? "Divisível por 3 e 5" : "Não divisível por 3 e 5";
console.log("O número " + numero + " é: " + divisivel);

// Verificar elegibilidade para desconto: Dado o valor total de uma compra, determine se a pessoa recebe desconto (caso a compra seja maior ou igual a R$100).

let valorCompra = 120;
let desconto = (valorCompra >= 100) ? "Você tem direito a um desconto!" : "Sem desconto";
console.log(desconto);
