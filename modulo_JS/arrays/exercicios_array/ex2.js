// Objetivo: Somar todos os elementos de um array e exibir o resultado.

let numeros = [5, 10, 15, 20];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];  // Soma cada número
}

console.log("Soma total: " + soma);  // Exibe a soma
