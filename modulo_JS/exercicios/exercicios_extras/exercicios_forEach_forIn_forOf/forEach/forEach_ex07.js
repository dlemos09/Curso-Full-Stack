// EXERCÍCIO 7: Encontrar o maior número
// Use forEach para encontrar o maior número do array

const numeros = [23, 45, 12, 67, 34, 89, 15];

// Solução:
let maior = numeros[0];
numeros.forEach(function (numero) {
  if (numero > maior) {
    maior = numero;
  }
});

console.log(`O maior número é: ${maior}`); // Deve exibir: 89
