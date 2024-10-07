// Dado um array de números, use uma arrow function em conjunto com o método filter para retornar apenas os números pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares);  // Saída esperada: [2, 4, 6, 8, 10]
