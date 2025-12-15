// EXERCÍCIO 10: Concatenar strings com separador
// Use for...of para juntar todos os nomes em uma única string separada por vírgula

const nomes = ["Ana", "Bruno", "Carlos", "Diana"];

// Solução:
let resultado = "";
for (let nome of nomes) {
  if (resultado === "") {
    resultado = nome;
  } else {
    resultado += ", " + nome;
  }
}

console.log("Nomes concatenados:", resultado);
// Ou mais simples: console.log(nomes.join(', '));
