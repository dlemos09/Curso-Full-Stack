// EXERCÍCIO 10: Calcular média de notas
// Use forEach para calcular a média das notas de um aluno

const notas = [7.5, 8.0, 6.5, 9.0, 7.0];

// Solução:
let soma = 0;
notas.forEach(function (nota) {
  soma += nota;
});

const media = soma / notas.length;

console.log("Notas:", notas);
console.log(`Média: ${media.toFixed(2)}`);
