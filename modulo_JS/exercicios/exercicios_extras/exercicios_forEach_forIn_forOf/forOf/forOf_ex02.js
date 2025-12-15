// EXERCÍCIO 2: Somar elementos de um array
// Use for...of para somar todos os números do array

const numeros = [15, 23, 42, 8, 16, 30];

// Solução:
let soma = 0;
for (let numero of numeros) {
  soma += numero;
}

console.log(`A soma total é: ${soma}`); // Deve exibir: 134
