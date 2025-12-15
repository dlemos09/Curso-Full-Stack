// EXERCÍCIO 5: Criar array com valores do objeto
// Use for...in para criar um array com todos os valores do objeto

const aluno = {
  nome: "Maria",
  nota1: 8.5,
  nota2: 7.0,
  nota3: 9.0,
  nota4: 8.0,
};

// Solução:
const valores = [];
for (let propriedade in aluno) {
  valores.push(aluno[propriedade]);
}

console.log("Valores do objeto:", valores);
