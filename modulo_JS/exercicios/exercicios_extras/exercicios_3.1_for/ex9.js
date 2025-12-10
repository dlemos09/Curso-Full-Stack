// Enunciado: Dado um array de números, encontre o maior elemento usando for.   

// Solução comentada
const valores = [3, 17, 9, 24, 12];
let maior = valores[0]; // inicializa com o primeiro elemento
for (let i = 1; i < valores.length; i++) {
  if (valores[i] > maior) {
    maior = valores[i];
  }
}
console.log("Maior valor:", maior); // 24
