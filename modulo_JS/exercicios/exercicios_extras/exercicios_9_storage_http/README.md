# Exercícios 9 - Storage e HTTP

Cinco exercícios sobre localStorage e fetch.

---

## Exercício 1: Salvar Preferência de Tema

Enunciado:
Salvar "claro" ou "escuro" e aplicar ao carregar.

Resolução:

```js
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
```

---

## Exercício 2: Contador de Visitas

Enunciado:
Incrementar valor em localStorage cada carga.

Resolução:

```js
const visitas = Number(localStorage.getItem("visitas") || 0) + 1;
localStorage.setItem("visitas", visitas);
console.log("Visitas:", visitas);
```

---

## Exercício 3: Fetch GET

Enunciado:
Buscar JSON público e exibir título.

Resolução:

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((r) => r.json())
  .then((d) => console.log(d.title))
  .catch((e) => console.error("Erro:", e));
```

---

## Exercício 4: Tratamento de Erro

Enunciado:
Requisição para URL inválida com mensagem amigável.

Resolução:

```js
fetch("https://jsonplaceholder.typicode.com/404")
  .then((r) => {
    if (!r.ok) throw new Error("Recurso não encontrado");
    return r.json();
  })
  .catch((e) => console.error("Falha:", e.message));
```

---

## Exercício 5: Cache Simples

Enunciado:
Reutilizar dados se timestamp < 1 min.

Resolução:

```js
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
```
