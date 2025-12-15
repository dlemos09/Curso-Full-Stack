// EXERCÍCIO 6: Filtrar propriedades por tipo
// Use for...in para contar quantas propriedades são do tipo string

const dados = {
  nome: "Ana",
  idade: 30,
  email: "ana@email.com",
  ativo: true,
  telefone: "11-99999-9999",
  pontos: 150,
};

// Solução:
let contadorStrings = 0;
for (let propriedade in dados) {
  if (typeof dados[propriedade] === "string") {
    contadorStrings++;
  }
}

console.log(`Propriedades do tipo string: ${contadorStrings}`);
