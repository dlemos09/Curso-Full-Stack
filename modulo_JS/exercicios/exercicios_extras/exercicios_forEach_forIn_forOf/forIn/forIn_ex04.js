// EXERCÍCIO 4: Criar array com chaves do objeto
// Use for...in para criar um array com todas as chaves (propriedades) do objeto

const produto = {
  nome: "Notebook",
  preco: 3500,
  marca: "Dell",
  estoque: 15,
  disponivel: true,
};

// Solução:
const chaves = [];
for (let chave in produto) {
  chaves.push(chave);
}

console.log("Chaves do objeto:", chaves);
