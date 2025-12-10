// Exercícios 9 - Storage e HTTP (Resoluções)
function aplicarTema() {
  const tema = localStorage.getItem("tema") || "claro";
  document.documentElement.dataset.tema = tema;
}
function trocarTema() {
  const atual = localStorage.getItem("tema") === "escuro" ? "claro" : "escuro";
  localStorage.setItem("tema", atual);
  aplicarTema();
}
aplicarTema();
const visitas = Number(localStorage.getItem("visitas") || 0) + 1;
localStorage.setItem("visitas", visitas);
console.log("Visitas:", visitas);
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((r) => r.json())
  .then((d) => console.log(d.title))
  .catch((e) => console.error("Erro:", e));
fetch("https://jsonplaceholder.typicode.com/404")
  .then((r) => {
    if (!r.ok) throw new Error("Recurso não encontrado");
    return r.json();
  })
  .catch((e) => console.error("Falha:", e.message));
async function obterDados() {
  const cacheRaw = localStorage.getItem("dadosCache");
  if (cacheRaw) {
    const cache = JSON.parse(cacheRaw);
    if (Date.now() - cache.timestamp < 60000) {
      console.log("Usando cache:", cache.data);
      return cache.data;
    }
  }
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  const data = await resp.json();
  localStorage.setItem(
    "dadosCache",
    JSON.stringify({ timestamp: Date.now(), data })
  );
  console.log("Novo fetch:", data);
  return data;
}
obterDados();
