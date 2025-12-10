// Exercícios 3 - Arrays (Resoluções)
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numeros.filter((n) => n % 2 === 0));
const nomes = ["ana", "bruno", "carla"];
console.log(nomes.map((n) => n.toUpperCase()));
const valores = [10, 5, 3, 7];
const soma = valores.reduce((a, v) => a + v, 0);
const media = valores.reduce((a, v, i, arr) => {
  a += v;
  return i === arr.length - 1 ? a / arr.length : a;
}, 0);
console.log({ soma, media });
const lista = [5, 12, 3, 19, 7, 1];
console.log(
  lista
    .filter((n) => n > 5)
    .map((n) => n * 2)
    .reduce((a, n) => a + n, 0)
);
const arr = [2, 4, 8, 16];
console.log(
  arr.every((n) => n > 0),
  arr.some((n) => n > 15)
);
