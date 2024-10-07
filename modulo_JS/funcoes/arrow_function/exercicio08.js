// Implemente uma arrow function que filtra todos os números primos de um array de inteiros. Um número primo é divisível apenas por 1 e por ele mesmo.

const isPrimo = (num, div = 2) =>
    num < 2 ? false : (div * div > num ? true : num % div === 0 ? false : isPrimo(num, div + 1));

const filtrarPrimos = arr => arr.filter(isPrimo);

console.log(filtrarPrimos([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// Saída: [11, 13, 17, 19]