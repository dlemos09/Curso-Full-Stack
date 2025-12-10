// 09.5 - Fetch GET com async/await
// Objetivo: simplificar fluxo de requisição usando try/catch.
// Diferença principal: sintaxe linear facilita leitura e tratamento.

console.log("[09.5] Fetch GET com async/await");

// ENUNCIADO:
// 1. Criar função async buscarUsuarioAsync(login).
// 2. Fazer fetch e validar status.
// 3. Retornar JSON em caso de sucesso.
// 4. Em erro, logar mensagem e retornar null.

async function buscarUsuarioAsync(login) {
  try {
    const res = await fetch("https://api.github.com/users/" + login);
    if (!res.ok) throw new Error("Falha HTTP " + res.status);
    const dados = await res.json();
    console.log("Nome:", dados.name, "| Login:", dados.login);
    return dados;
  } catch (e) {
    console.error("Erro ao buscar usuário:", e.message);
    return null;
  }
}

// Demonstração (descomente):
// buscarUsuarioAsync('octocat');

// Resumo:
// - async/await evita encadeamento de then.
// - try/catch unifica tratamento de erros.
