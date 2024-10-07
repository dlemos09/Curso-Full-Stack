// Objetivo: Contar quantos elementos de um array são maiores que um determinado valor.



let valores = [3, 12, 5, 8, 20, 15];
let contador = 0;
let limite = 10;

for (let i = 0; i < valores.length; i++) {
  if (valores[i] > limite) {
    contador++;  // Incrementa o contador se o valor for maior que 10
  }
}

console.log("Valores maiores que " + limite + ": " + contador);
