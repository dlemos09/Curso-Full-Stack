/*
SOLUÇÕES - EXERCÍCIOS DE FUNÇÕES INTERMEDIÁRIAS
Contexto: Sistema de Gerenciamento de Usuários
-------------------------------------
Todas as respostas com explicações detalhadas
*/

// ==========================================
// EXERCÍCIO 1 - Criar e Listar Usuários
// ==========================================
// SOLUÇÃO:

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

const user1 = criarUsuario("Alice", "alice@mail.com");
const user2 = criarUsuario("Bob", "bob@mail.com");
const usuarios = [user1, user2];

console.log("Exercício 1 - Usuários:");
console.log(listarUsuarios(usuarios));

// EXPLICAÇÃO:
// - criarUsuario: gera objeto com id aleatório (Math.random())
// - listarUsuarios: recebe array, usa map para transformar, join para concatenar
// - map: transforma cada usuário em string formatada
// - join: junta array em string com quebra de linha

// ==========================================
// EXERCÍCIO 2 - Buscar Usuário por Email
// ==========================================
// SOLUÇÃO:

function buscarPorEmail(usuarios, email) {
  return usuarios.find((u) => u.email === email) || null;
}

console.log(
  "Exercício 2 - Buscar Alice:",
  buscarPorEmail(usuarios, "alice@mail.com")
);
console.log(
  "Exercício 2 - Buscar inexistente:",
  buscarPorEmail(usuarios, "carlos@mail.com")
);

// EXPLICAÇÃO:
// - find(): retorna primeiro elemento que atende condição
// - Arrow function: u => u.email === email
// - || null: se não encontrar, retorna null explicitamente

// ==========================================
// EXERCÍCIO 3 - Atualizar Email do Usuário
// ==========================================
// SOLUÇÃO:

function atualizarEmail(usuarios, id, novoEmail) {
  const usuario = usuarios.find((u) => u.id === id);
  if (usuario) {
    usuario.email = novoEmail;
    return true;
  }
  return false;
}

const sucesso = atualizarEmail(usuarios, user1.id, "alice.nova@mail.com");
console.log("Exercício 3 - Atualizar email:", sucesso);
console.log("Exercício 3 - Email atualizado:", user1.email);

// EXPLICAÇÃO:
// - find: busca usuário pelo id
// - if (usuario): verifica se encontrou
// - Modifica propriedade do objeto encontrado
// - Retorna true/false para indicar sucesso

// ==========================================
// EXERCÍCIO 4 - Filtrar Usuários por Domínio
// ==========================================
// SOLUÇÃO:

function filtrarPorDominio(usuarios, dominio) {
  return usuarios.filter((u) => u.email.endsWith(`@${dominio}`));
}

const usuariosMailCom = filtrarPorDominio(usuarios, "mail.com");
console.log("Exercício 4 - Usuários de mail.com:", usuariosMailCom.length);

// EXPLICAÇÃO:
// - filter(): retorna novo array com elementos que atendem condição
// - endsWith(): verifica se string termina com valor específico
// - Template literal: `@${dominio}` cria string @mail.com

// ==========================================
// EXERCÍCIO 5 - Contar Usuários por Inicial
// ==========================================
// SOLUÇÃO:

function contarPorInicial(usuarios) {
  const contagem = {};
  usuarios.forEach((u) => {
    const inicial = u.nome[0].toUpperCase();
    contagem[inicial] = (contagem[inicial] || 0) + 1;
  });
  return contagem;
}

console.log("Exercício 5 - Contagem por inicial:", contarPorInicial(usuarios));

// EXPLICAÇÃO:
// - Cria objeto vazio contagem
// - forEach: itera cada usuário
// - nome[0]: primeiro caractere do nome
// - toUpperCase(): converte para maiúscula
// - || 0: se não existe contador, inicia com 0
// - Incrementa contador

// ==========================================
// EXERCÍCIO 6 - Validar Dados do Usuário
// ==========================================
// SOLUÇÃO:

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

console.log("Exercício 6 - Validar Alice:", validarUsuario(user1));
console.log(
  "Exercício 6 - Validar inválido:",
  validarUsuario({ nome: "X", email: "invalido" })
);

// EXPLICAÇÃO:
// - Array erros acumula mensagens de erro
// - !usuario.nome: verifica se não existe ou é falsy
// - length < 3: verifica tamanho mínimo
// - includes('@'): verifica presença de caractere
// - push(): adiciona mensagem ao array
// - Retorna objeto com status e lista de erros

// ==========================================
// EXERCÍCIO 7 - Transformar Array com Map
// ==========================================
// SOLUÇÃO:

function extrairNomes(usuarios) {
  return usuarios.map((u) => u.nome.toUpperCase());
}

console.log("Exercício 7 - Nomes em maiúsculas:", extrairNomes(usuarios));

// EXPLICAÇÃO:
// - map(): transforma cada elemento em novo valor
// - toUpperCase(): converte nome para maiúsculas
// - Retorna novo array com nomes transformados

// ==========================================
// EXERCÍCIO 8 - Ordenar Usuários
// ==========================================
// SOLUÇÃO:

function ordenarPorNome(usuarios) {
  return [...usuarios].sort((a, b) => a.nome.localeCompare(b.nome));
}

console.log(
  "Exercício 8 - Ordenado:",
  ordenarPorNome(usuarios).map((u) => u.nome)
);

// EXPLICAÇÃO:
// - [...usuarios]: spread operator cria cópia do array
// - sort(): ordena array
// - localeCompare(): compara strings respeito alfabético
// - (a, b) => compare: se negativo, a vem antes; se positivo, b vem antes

// ==========================================
// EXERCÍCIO 9 - Resumo de Usuários
// ==========================================
// SOLUÇÃO:

function gerarRelatorio(usuarios) {
  const nomes = usuarios.map((u) => u.nome).join(", ");
  const emails = usuarios.map((u) => u.email).join(", ");
  return `Total de usuários: ${usuarios.length}\nNomes: ${nomes}\nEmails: ${emails}`;
}

console.log("Exercício 9 - Relatório:");
console.log(gerarRelatorio(usuarios));

// EXPLICAÇÃO:
// - Usa map para extrair propriedades
// - join(', '): junta com vírgula e espaço
// - \n: quebra de linha em template literal
// - Monta string de relatório

// ==========================================
// EXERCÍCIO 10 - Remover Usuário por Email
// ==========================================
// SOLUÇÃO:

function removerPorEmail(usuarios, email) {
  return usuarios.filter((u) => u.email !== email);
}

const usuariosRestantes = removerPorEmail(usuarios, "bob@mail.com");
console.log("Exercício 10 - Após remover Bob:", usuariosRestantes.length);

// EXPLICAÇÃO:
// - filter(): mantém apenas elementos que NÃO atendem condição
// - !== email: exclui o email procurado
// - Retorna novo array sem o usuário removido

// ==========================================
// COMPARATIVO: MÉTODOS DE ARRAY
// ==========================================

// map():     transforma cada elemento
// Exemplo: [1, 2, 3].map(x => x * 2) → [2, 4, 6]

// filter(): mantém apenas alguns elementos
// Exemplo: [1, 2, 3, 4].filter(x => x > 2) → [3, 4]

// find():   retorna primeiro elemento que atende
// Exemplo: [1, 2, 3].find(x => x > 1) → 2

// forEach(): itera sem retornar novo array
// Exemplo: [1, 2, 3].forEach(x => console.log(x))

// reduce():  acumula valor em um resultado
// Exemplo: [1, 2, 3].reduce((sum, x) => sum + x, 0) → 6

// ==========================================
// RESUMO DE TÉCNICAS USADAS
// ==========================================
// 1. Array.map(): transformar elementos
// 2. Array.filter(): selecionar elementos
// 3. Array.find(): buscar primeiro elemento
// 4. Array.forEach(): iterar com efeito colateral
// 5. Array.join(): concatenar array em string
// 6. String.endsWith(): verificar final
// 7. String.includes(): verificar presença
// 8. Array.sort(): ordenar
// 9. Spread operator [...]: copiar array
// 10. Acumulação em objeto/array
