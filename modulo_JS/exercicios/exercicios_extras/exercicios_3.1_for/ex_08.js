// Enunciado: A partir do array const notas = [6, 9, 4, 10, 7], crie outro array aprovados com as notas >= 7 usando for.

// Solução comentada
const notas = [6, 9, 4, 10, 7];
const aprovados = [];
for (let i = 0; i < notas.length; i++) {
  if (notas[i] >= 7) {
    aprovados.push(notas[i]); // adiciona no array aprovados
  }
}
console.log("Aprovados:", aprovados);
