// EXERCÍCIO 8: Converter nomes para maiúsculas
// Use forEach para criar um novo array com todos os nomes em maiúsculas

const nomes = ["pedro", "maria", "joão", "ana"];
const nomesMaiusculos = [];

// Solução:
nomes.forEach(function (nome) {
  nomesMaiusculos.push(nome.toUpperCase());
});

console.log("Nomes originais:", nomes);
console.log("Nomes em maiúsculas:", nomesMaiusculos);
