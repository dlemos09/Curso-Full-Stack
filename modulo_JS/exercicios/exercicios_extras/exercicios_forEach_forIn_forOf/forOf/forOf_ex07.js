// EXERCÍCIO 7: Criar array com números pares
// Use for...of para filtrar apenas os números pares

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];

// Solução:
for (let numero of numeros) {
  if (numero % 2 === 0) {
    pares.push(numero);
  }
}

console.log("Números originais:", numeros);
console.log("Números pares:", pares);
