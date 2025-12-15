// EXERCÍCIO 7: Criar novo objeto invertendo chaves e valores
// Use for...in para criar um novo objeto onde os valores viram chaves e vice-versa

const codigoProduto = {
  notebook: "NB001",
  mouse: "MS002",
  teclado: "TC003",
  monitor: "MN004",
};

// Solução:
const invertido = {};
for (let chave in codigoProduto) {
  const valor = codigoProduto[chave];
  invertido[valor] = chave;
}

console.log("Objeto original:", codigoProduto);
console.log("Objeto invertido:", invertido);
