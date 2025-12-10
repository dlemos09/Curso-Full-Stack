// 09.7 - Utilitário fetchJSON + Cache em Memória
// Objetivo: evitar duplicação de lógica de verificação de status e acelerar requisições repetidas.

console.log("[09.7] Utilitário fetchJSON + cache");

// ENUNCIADO:
// 1. Criar função fetchJSON(url, options) que valida status e retorna JSON.
// 2. Criar Map para cache simples (chave = url completa).
// 3. Criar função fetchComCache(url) que usa fetchJSON internamente.
// 4. Exibir quando resposta vem do cache.

async function fetchJSON(url, options) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error("HTTP " + res.status);
  return res.json();
}

const cache = new Map();

async function fetchComCache(url) {
  if (cache.has(url)) {
    console.log("📦 Cache HIT:", url);
    return cache.get(url);
  }
  console.log("🌐 Cache MISS:", url);
  const dados = await fetchJSON(url);
  cache.set(url, dados);
  return dados;
}

// Invalidação simples
function invalidate(urlPrefix) {
  for (const key of cache.keys()) {
    if (key.startsWith(urlPrefix)) cache.delete(key);
  }
}

// Limpeza completa
function clearCache() {
  cache.clear();
}

// Demonstração (descomente):
// fetchComCache('https://api.github.com/users/octocat').then(() => {
//   fetchComCache('https://api.github.com/users/octocat');
// });

// Resumo:
// - Cache reduz chamadas e melhora performance.
// - TTL não implementado aqui (poderia ser adicionado com timestamp).
