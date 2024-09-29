// let a = 'A';
// let b = 'B';
// let c = 'C';

// const letras = [1, 2, 3]
// [a, b, c] = numeros;

// console.log(a, b, c)

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
// O '...resto' recebe todo o valor restante do Array

// const primeiroNumero = numeros[0]; Ao invés de armazenar um valor por variável, posso utilizar da desestruturação para armazenar os arrays de maneira melhor;

console.log(primeiroNumero, segundoNumero);
console.log(resto);

const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [lista1, lista2, lista3] = numeros2
console.log(lista3[2]);