# Exercícios 8 - DOM e Eventos

Cinco exercícios de manipulação de elementos (executar em navegador).

---

## Exercício 1: Seleção Múltipla

Enunciado:
Selecione todos parágrafos e altere cor do texto.

Resolução:

```js
const paragrafos = document.querySelectorAll("p");
paragrafos.forEach((p) => (p.style.color = "blue"));
```

---

## Exercício 2: Criar Elemento

Enunciado:
Crie `<li>` e adicione em `<ul id="lista">`.

Resolução:

```js
const ul = document.getElementById("lista");
const li = document.createElement("li");
li.textContent = "Item novo";
ul.appendChild(li);
```

---

## Exercício 3: Botão Toggle

Enunciado:
Botão alterna texto "Ligado"/"Desligado".

Resolução:

```html
<button id="btn">Ligado</button>
<script>
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    btn.textContent = btn.textContent === "Ligado" ? "Desligado" : "Ligado";
  });
</script>
```

---

## Exercício 4: Delegação em Lista

Enunciado:
Clique em qualquer `<li>` exibe seu texto.

Resolução:

```js
ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});
```

---

## Exercício 5: Classe Dinâmica em Input

Enunciado:
Se campo vazio adiciona classe `erro`, caso contrário remove.

Resolução:

```html
<input id="campo" />
<style>
  .erro {
    border: 1px solid red;
  }
</style>
<script>
  const campo = document.getElementById("campo");
  campo.addEventListener("input", () => {
    if (campo.value.trim() === "") campo.classList.add("erro");
    else campo.classList.remove("erro");
  });
</script>
```
