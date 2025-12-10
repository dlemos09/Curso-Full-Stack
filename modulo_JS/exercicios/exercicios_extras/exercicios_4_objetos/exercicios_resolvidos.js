// Exercícios 4 - Objetos (Resoluções)
const pessoa = { nome: "João", idade: 32, ativo: true };
console.log(pessoa.nome, pessoa.idade, pessoa.ativo);
pessoa.email = "joao@example.com";
console.log("email" in pessoa);
delete pessoa.email;
console.log("email" in pessoa);
for (const chave in pessoa) {
  if (Object.prototype.hasOwnProperty.call(pessoa, chave)) {
    console.log(chave, pessoa[chave]);
  }
}
const clone = { ...pessoa, idade: pessoa.idade + 1 };
console.log(pessoa.idade, clone.idade);
const { nome, idade, ativo: status } = pessoa;
console.log(nome, idade, status);
