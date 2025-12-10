// Enunciado: Dado const numeros = [10, 5, 8, 12], calcule a soma e a média.

// Solução comentada
const numeros = [10, 5, 8, 12];
let total = 0;
for (let i = 0; i < numeros.length; i++) {
  total += numeros[i];
}
const media = total / numeros.length;
console.log("Total:", total, "Média:", media);
