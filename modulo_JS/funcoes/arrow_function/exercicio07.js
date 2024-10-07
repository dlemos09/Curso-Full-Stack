// Usando arrow function e o método map, crie uma função que receba um array de números e retorne a soma de todos os valores.


const numeros = [10, 20, 30, 40];
const somaTotal = numeros.reduce((acc, num) => acc + num, 0);
console.log(somaTotal);  // Saída esperada: 100
