// EXERCÍCIO 3: Somar elementos de um array
// Use forEach para calcular a soma de todos os números do array

const numeros = [10, 20, 30, 40, 50];

// Solução:
let soma = 0;
numeros.forEach(function(numero) {
  soma += numero;
});

console.log(`A soma total é: ${soma}`); // Deve exibir: 150
