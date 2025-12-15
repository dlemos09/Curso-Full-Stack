// EXERCÍCIO 3: Encontrar o maior valor
// Use for...of para encontrar o maior número do array

const valores = [45, 78, 23, 91, 34, 67, 12];

// Solução:
let maior = valores[0];
for (let valor of valores) {
  if (valor > maior) {
    maior = valor;
  }
}

console.log(`O maior valor é: ${maior}`); // Deve exibir: 91
