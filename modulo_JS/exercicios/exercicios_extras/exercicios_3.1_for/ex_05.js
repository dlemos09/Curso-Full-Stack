
// Enunciado: Some somente os números ímpares entre 1 e 50. Mostre o total.

// Solução comentada
let somaImpares = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    somaImpares += i;
  }
}
console.log("Soma dos ímpares 1..50:", somaImpares);


