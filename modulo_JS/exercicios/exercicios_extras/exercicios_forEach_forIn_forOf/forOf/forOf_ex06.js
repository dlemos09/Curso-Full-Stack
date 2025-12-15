// EXERCÍCIO 6: Verificar se existe valor específico
// Use for...of para verificar se existe o número 50 no array

const numeros = [10, 20, 30, 40, 50, 60, 70];

// Solução:
let encontrado = false;
for (let numero of numeros) {
  if (numero === 50) {
    encontrado = true;
    break; // Para a busca assim que encontrar
  }
}

console.log(`O número 50 está no array: ${encontrado}`);
