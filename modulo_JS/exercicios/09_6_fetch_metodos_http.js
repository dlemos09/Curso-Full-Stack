// 09.6 - Métodos HTTP: POST, PUT, DELETE
// Objetivo: enviar e modificar recursos em API usando diferentes verbos.
// Contexto: JSONPlaceholder (API fake para testes)

console.log("[09.6] Métodos HTTP (POST / PUT / DELETE)");

// ENUNCIADO:
// 1. Função criarPost(dados) -> POST
// 2. Função atualizarPost(id, dados) -> PUT
// 3. Função deletarPost(id) -> DELETE
// 4. Cada função: validar response.ok e exibir resultado.

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

async function criarPost(dados) {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });
    if (!res.ok) throw new Error("Falha POST " + res.status);
    const criado = await res.json();
    console.log("POST criado ID:", criado.id, "Título:", criado.title);
    return criado;
  } catch (e) {
    console.error("Erro criarPost:", e.message);
    return null;
  }
}

async function atualizarPost(id, dados) {
  try {
    const res = await fetch(BASE_URL + "/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });
    if (!res.ok) throw new Error("Falha PUT " + res.status);
    const atualizado = await res.json();
    console.log(
      "PUT atualizado ID:",
      atualizado.id,
      "Título:",
      atualizado.title
    );
    return atualizado;
  } catch (e) {
    console.error("Erro atualizarPost:", e.message);
    return null;
  }
}

async function deletarPost(id) {
  try {
    const res = await fetch(BASE_URL + "/" + id, { method: "DELETE" });
    if (!res.ok) throw new Error("Falha DELETE " + res.status);
    console.log("DELETE removido ID:", id);
    return true;
  } catch (e) {
    console.error("Erro deletarPost:", e.message);
    return false;
  }
}

// Demonstração (descomente para testar individualmente):
// criarPost({ title: 'Novo', body: 'Conteúdo teste', userId: 1 });
// atualizarPost(1, { title: 'Alterado', body: 'Texto modificado', userId: 1 });
// deletarPost(1);

// Resumo:
// - Enviar JSON: headers + JSON.stringify.
// - PUT substitui recurso; PATCH (não mostrado) seria parcial.
// - DELETE não precisa body.
