// EXERCÍCIO 3: Somar valores numéricos de um objeto
// Use for...in para somar apenas os valores numéricos do objeto

const vendas = {
  janeiro: 5000,
  fevereiro: 6500,
  marco: 7200,
  abril: 5800,
};

// Solução:
let total = 0;
for (let mes in vendas) {
  total += vendas[mes];
}

console.log(`Total de vendas: R$ ${total}`); // Deve exibir: 24500
