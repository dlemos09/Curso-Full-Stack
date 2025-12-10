// 09.4 - Fetch GET Básico com Promises
// Objetivo: realizar requisição HTTP GET simples, interpretar status e tratar erros.
// Pré-requisito: entender promise then/catch.
// Atenção: executar em navegador ou ambiente com fetch.

console.log("[09.4] Fetch GET Básico");

// ENUNCIADO:
// 1. Fazer GET em API pública (GitHub Users).
// 2. Logar status e verificar response.ok.
// 3. Converter em JSON.
// 4. Exibir campo específico (login).
// 5. Tratar erro de rede ou status não OK.

function buscarUsuario(login) {
  return fetch("https://api.github.com/users/" + login)
    .then(function (res) {
      console.log("Status:", res.status);
      if (!res.ok) throw new Error("Falha HTTP " + res.status);
      return res.json();
    })
    .then(function (dados) {
      console.log("Login do usuário:", dados.login);
      return dados;
    })
    .catch(function (erro) {
      console.error("Erro na requisição:", erro.message);
      return null; // retorno seguro
    });
}

// Demonstração (descomente para testar):
// buscarUsuario('octocat');

// Resumo:
// - fetch retorna Promise.
// - response.ok indica status 200–299.
// - Sem ok: lançar erro para cair no catch.
