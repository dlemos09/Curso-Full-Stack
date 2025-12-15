// EXERCÍCIO 9: Calcular produto (multiplicação) de todos os elementos
// Use for...of para multiplicar todos os números do array

const numeros = [2, 3, 4, 5];

// Solução:
let produto = 1;
for (let numero of numeros) {
  produto *= numero;
}

console.log(`O produto de todos os números é: ${produto}`); // Deve exibir: 120
