/*
EXERCÍCIOS DE FUNÇÕES - Nível Intermediário
Contexto: Sistema de Gerenciamento de Usuários
-------------------------------------
Objetivo: Trabalhar com objetos, arrays dentro de funções e composição.
*/

// ==========================================
// EXERCÍCIO 1 - Criar e Listar Usuários
// ==========================================
// Enunciado:
// Crie uma função 'criarUsuario' que receba nome e email.
// Retorne um objeto com id (gerado aleatoriamente), nome e email.
// Crie uma função 'listarUsuarios' que receba um array de usuários
// e retorne uma string com todos (formato: "- Nome: email").

function criarUsuario(nome, email) {
  return {
    id: Math.floor(Math.random() * 10000),
    nome: nome,
    email: email,
  };
}

function listarUsuarios(usuarios) {
  return usuarios.map((u) => `- ${u.nome}: ${u.email}`).join("\n");
}

// Testando:
const user1 = criarUsuario("Alice", "alice@mail.com");
const user2 = criarUsuario("Bob", "bob@mail.com");
const usuarios = [user1, user2];

console.log("Exercício 1 - Usuários:");
console.log(listarUsuarios(usuarios));
// Esperado:
// - Alice: alice@mail.com
// - Bob: bob@mail.com

// ==========================================
// EXERCÍCIO 2 - Buscar Usuário por Email
// ==========================================
// Enunciado:
// Crie uma função 'buscarPorEmail' que receba um array de usuários e um email.
// Retorne o usuário encontrado ou null se não encontrar.

function buscarPorEmail(usuarios, email) {
  return usuarios.find((u) => u.email === email) || null;
}

// Testando:
console.log(
  "Exercício 2 - Buscar Alice:",
  buscarPorEmail(usuarios, "alice@mail.com")
);
console.log(
  "Exercício 2 - Buscar inexistente:",
  buscarPorEmail(usuarios, "carlos@mail.com")
);
// Esperado: objeto do usuário ou null

// ==========================================
// EXERCÍCIO 3 - Atualizar Email do Usuário
// ==========================================
// Enunciado:
// Crie uma função 'atualizarEmail' que receba um array de usuários, um id e novo email.
// Atualize o usuário com o id fornecido e retorne true se sucesso, false se não encontrou.

function atualizarEmail(usuarios, id, novoEmail) {
  const usuario = usuarios.find((u) => u.id === id);
  if (usuario) {
    usuario.email = novoEmail;
    return true;
  }
  return false;
}

// Testando:
const sucesso = atualizarEmail(usuarios, user1.id, "alice.nova@mail.com");
console.log("Exercício 3 - Atualizar email:", sucesso); // Esperado: true
console.log("Exercício 3 - Email atualizado:", user1.email); // Esperado: alice.nova@mail.com

// ==========================================
// EXERCÍCIO 4 - Filtrar Usuários por Domínio
// ==========================================
// Enunciado:
// Crie uma função 'filtrarPorDominio' que receba um array de usuários
// e um domínio (ex: 'mail.com'). Retorne um novo array apenas com usuários
// daquele domínio.

function filtrarPorDominio(usuarios, dominio) {
  return usuarios.filter((u) => u.email.endsWith(`@${dominio}`));
}

// Testando:
const usuariosMailCom = filtrarPorDominio(usuarios, "mail.com");
console.log("Exercício 4 - Usuários de mail.com:", usuariosMailCom.length); // Esperado: 2

// ==========================================
// EXERCÍCIO 5 - Contar Usuários por Inicial
// ==========================================
// Enunciado:
// Crie uma função 'contarPorInicial' que receba um array de usuários
// e retorne um objeto contando quantos nomes começam com cada letra.
// Ex: { A: 1, B: 1 }

function contarPorInicial(usuarios) {
  const contagem = {};
  usuarios.forEach((u) => {
    const inicial = u.nome[0].toUpperCase();
    contagem[inicial] = (contagem[inicial] || 0) + 1;
  });
  return contagem;
}

// Testando:
console.log("Exercício 5 - Contagem por inicial:", contarPorInicial(usuarios));
// Esperado: { A: 1, B: 1 }

// ==========================================
// EXERCÍCIO 6 - Validar Dados do Usuário
// ==========================================
// Enunciado:
// Crie uma função 'validarUsuario' que receba um objeto usuário.
// Retorne um objeto {valido: true/false, erros: [...]}.
// Regras: nome deve ter 3+ caracteres, email deve ter '@'.

function validarUsuario(usuario) {
  const erros = [];

  if (!usuario.nome || usuario.nome.length < 3) {
    erros.push("Nome deve ter no mínimo 3 caracteres");
  }
  if (!usuario.email || !usuario.email.includes("@")) {
    erros.push("Email inválido (deve conter @)");
  }

  return {
    valido: erros.length === 0,
    erros: erros,
  };
}

// Testando:
console.log("Exercício 6 - Validar Alice:", validarUsuario(user1));
console.log(
  "Exercício 6 - Validar inválido:",
  validarUsuario({ nome: "X", email: "invalido" })
);
// Esperado: {valido: true, erros: []} e {valido: false, erros: [...]}

// ==========================================
// EXERCÍCIO 7 - Transformar Array com Map
// ==========================================
// Enunciado:
// Crie uma função 'extrairNomes' que receba um array de usuários
// e retorne um novo array apenas com os nomes (maiúsculos).

function extrairNomes(usuarios) {
  return usuarios.map((u) => u.nome.toUpperCase());
}

// Testando:
console.log("Exercício 7 - Nomes em maiúsculas:", extrairNomes(usuarios));
// Esperado: ['ALICE', 'BOB']

// ==========================================
// EXERCÍCIO 8 - Ordenar Usuários
// ==========================================
// Enunciado:
// Crie uma função 'ordenarPorNome' que receba um array de usuários
// e retorne um novo array ordenado alfabeticamente por nome.

function ordenarPorNome(usuarios) {
  return [...usuarios].sort((a, b) => a.nome.localeCompare(b.nome));
}

// Testando:
console.log(
  "Exercício 8 - Ordenado:",
  ordenarPorNome(usuarios).map((u) => u.nome)
);
// Esperado: ['Alice', 'Bob'] ou na ordem alfabética

// ==========================================
// EXERCÍCIO 9 - Resumo de Usuários
// ==========================================
// Enunciado:
// Crie uma função 'gerarRelatorio' que receba um array de usuários
// e retorne um string com informações: total, lista de nomes e emails.

function gerarRelatorio(usuarios) {
  const nomes = usuarios.map((u) => u.nome).join(", ");
  const emails = usuarios.map((u) => u.email).join(", ");
  return `Total de usuários: ${usuarios.length}\nNomes: ${nomes}\nEmails: ${emails}`;
}

// Testando:
console.log("Exercício 9 - Relatório:");
console.log(gerarRelatorio(usuarios));

// ==========================================
// EXERCÍCIO 10 - Remover Usuário por Email
// ==========================================
// Enunciado:
// Crie uma função 'removerPorEmail' que receba um array de usuários
// e um email. Remova o usuário e retorne o array atualizado.

function removerPorEmail(usuarios, email) {
  return usuarios.filter((u) => u.email !== email);
}

// Testando:
const usuariosRestantes = removerPorEmail(usuarios, "bob@mail.com");
console.log("Exercício 10 - Após remover Bob:", usuariosRestantes.length); // Esperado: 1

// ==========================================
// RESUMO DE CONCEITOS
// ==========================================
// 1. Criação de objetos (exercício 1)
// 2. Array.find() e Array.filter() (exercícios 2, 4)
// 3. Manipulação de arrays (exercícios 3, 8)
// 4. Transformação com map (exercício 7)
// 5. Validação de dados (exercício 6)
// 6. Composição de funções (vários exercícios)
