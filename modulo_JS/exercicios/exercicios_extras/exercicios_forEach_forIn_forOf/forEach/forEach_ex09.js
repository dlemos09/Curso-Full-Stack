// EXERCÍCIO 9: Filtrar palavras longas
// Use forEach para criar um novo array apenas com palavras que tenham mais de 5 letras

const palavras = [
  "casa",
  "computador",
  "sol",
  "javascript",
  "lua",
  "desenvolvimento",
];
const palavrasLongas = [];

// Solução:
palavras.forEach(function (palavra) {
  if (palavra.length > 5) {
    palavrasLongas.push(palavra);
  }
});

console.log("Palavras longas (mais de 5 letras):", palavrasLongas);
