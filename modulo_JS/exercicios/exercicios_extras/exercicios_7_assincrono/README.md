# Exercícios 7 - Assíncrono

Cinco exercícios sobre callbacks, Promises e async/await.

---

## Exercício 1: Callback Simples

Enunciado:
`obterMensagem(cb)` deve chamar cb com texto após 500ms.

Resolução:

```js
function obterMensagem(cb) {
  setTimeout(() => cb("Mensagem pronta"), 500);
}
obterMensagem((msg) => console.log(msg));
```

---

## Exercício 2: Promise delay

Enunciado:
Implemente `delay(ms)` retornando Promise que resolve após ms.

Resolução:

```js
function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
delay(300).then(() => console.log("300ms ok"));
```

---

## Exercício 3: Encadeamento de Promises

Enunciado:
Simule três passos sequenciais (carregar, processar, salvar).

Resolução:

```js
function passo(nome, tempo) {
  return new Promise((res) =>
    setTimeout(() => {
      console.log(nome);
      res(nome);
    }, tempo)
  );
}
passo("carregar", 300)
  .then(() => passo("processar", 200))
  .then(() => passo("salvar", 150));
```

---

## Exercício 4: async/await

Enunciado:
Reescreva encadeamento usando async/await.

Resolução:

```js
async function fluxo() {
  await passo("carregar", 300);
  await passo("processar", 200);
  await passo("salvar", 150);
  console.log("fluxo concluído");
}
fluxo();
```

---

## Exercício 5: Tratamento de Erro

Enunciado:
Promise que rejeita aleatoriamente. Use try/catch.

Resolução:

```js
function aleatorio() {
  return new Promise((res, rej) => {
    const ok = Math.random() > 0.5;
    setTimeout(() => (ok ? res("Sucesso") : rej(new Error("Falhou"))), 300);
  });
}
async function testar() {
  try {
    const r = await aleatorio();
    console.log(r);
  } catch (e) {
    console.error("Erro:", e.message);
  }
}
for (let i = 0; i < 3; i++) testar();
```
