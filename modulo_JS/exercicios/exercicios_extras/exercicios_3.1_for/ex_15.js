// Enunciado: Faça uma função filtrarUsuariosPorIdade(usuarios, idadeMin) que, dado um array de objetos { nome, idade }, retorna os nomes dos usuários com idade >= idadeMin, ordenados por nome.
// Objetivos didáticos: trabalhar com for, if, manipulação de arrays, funções e push.

// Solução comentada
function filtrarUsuariosPorIdade(usuarios, idadeMin) {
  const resultado = [];
  // 1) percorrer array e filtrar
  for (let i = 0; i < usuarios.length; i++) {
    const user = usuarios[i];
    if (user.idade >= idadeMin) {
      resultado.push(user.nome);
    }
  }
  // 2) ordenar por nome (usar sort nativo aqui é ok)
  resultado.sort();
  return resultado;
}

// exemplo de uso
const usuarios = [
  { nome: "Ana", idade: 22 },
  { nome: "Bruno", idade: 18 },
  { nome: "Carlos", idade: 30 },
  { nome: "Diana", idade: 20 }
];
console.log(filtrarUsuariosPorIdade(usuarios, 21)); // ["Ana","Carlos"]
