// EXERCÍCIO 1: Iterar sobre propriedades de um objeto
// Use for...in para imprimir todas as propriedades e valores de um objeto

const pessoa = {
  nome: "João",
  idade: 25,
  cidade: "São Paulo",
  profissao: "Desenvolvedor",
};

// Solução:
for (let propriedade in pessoa) {
  console.log(`${propriedade}: ${pessoa[propriedade]}`);
}

/* Saída esperada:
nome: João
idade: 25
cidade: São Paulo
profissao: Desenvolvedor
*/
