// EXERCÍCIO 8: Verificar se objeto tem propriedade específica
// Use for...in para verificar se o objeto contém uma propriedade chamada 'email'

const usuario = {
  id: 123,
  nome: "Carlos",
  email: "carlos@email.com",
  senha: "******",
};

// Solução:
let temEmail = false;
for (let propriedade in usuario) {
  if (propriedade === "email") {
    temEmail = true;
    break; // Para a busca assim que encontrar
  }
}

console.log(`O objeto tem a propriedade 'email': ${temEmail}`);
