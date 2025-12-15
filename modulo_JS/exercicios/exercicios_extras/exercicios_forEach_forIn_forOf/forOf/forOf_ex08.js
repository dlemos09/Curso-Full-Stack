// EXERCÍCIO 8: Iterar sobre caracteres de uma string
// Use for...of para contar quantas vogais existem em uma palavra

const palavra = "javascript";
const vogais = ["a", "e", "i", "o", "u"];

// Solução:
let contadorVogais = 0;
for (let letra of palavra) {
  if (vogais.includes(letra.toLowerCase())) {
    contadorVogais++;
  }
}

console.log(`A palavra "${palavra}" tem ${contadorVogais} vogais`);
