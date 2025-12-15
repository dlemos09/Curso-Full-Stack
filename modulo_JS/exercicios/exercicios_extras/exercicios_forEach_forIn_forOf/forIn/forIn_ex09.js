// EXERCÍCIO 9: Calcular média de notas em objeto
// Use for...in para calcular a média das notas armazenadas no objeto

const notas = {
  prova1: 7.5,
  prova2: 8.0,
  prova3: 6.5,
  prova4: 9.0,
};

// Solução:
let soma = 0;
let quantidade = 0;

for (let prova in notas) {
  soma += notas[prova];
  quantidade++;
}

const media = soma / quantidade;

console.log(`Média das notas: ${media.toFixed(2)}`);
