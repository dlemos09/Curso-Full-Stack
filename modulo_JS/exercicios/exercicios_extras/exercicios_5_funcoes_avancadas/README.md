# Exercícios 5 - Funções Avançadas

Cinco exercícios sobre contexto e padrões funcionais.

---

## Exercício 1: this em Método

Enunciado:
Crie objeto com método que usa `this.nome`. Teste perda de contexto.

Resolução:

```js
const usuario = {
  nome: "Maria",
  saudacao() {
    return `Olá, ${this.nome}`;
  },
};
console.log(usuario.saudacao()); // correto
const ref = usuario.saudacao;
console.log(ref()); // undefined (this perdido no modo estrito)
```

---

## Exercício 2: bind

Enunciado:
Use `bind` para corrigir contexto perdido.

Resolução:

```js
const corrigido = usuario.saudacao.bind(usuario);
console.log(corrigido()); // Olá, Maria
```

---

## Exercício 3: Closure Contador

Enunciado:
Função `contador()` retorna função que incrementa interno.

Resolução:

```js
function contador() {
  let n = 0;
  return function () {
    n++;
    return n;
  };
}
const c1 = contador();
const c2 = contador();
console.log(c1(), c1(), c2()); // 1 2 1
```

---

## Exercício 4: Currying

Enunciado:
Transforme soma(a,b,c) em soma(a)(b)(c).

Resolução:

```js
function somaNormal(a, b, c) {
  return a + b + c;
}
function somaCurried(a) {
  return (b) => (c) => a + b + c;
}
console.log(somaNormal(1, 2, 3));
console.log(somaCurried(1)(2)(3));
```

---

## Exercício 5: Debounce Manual

Enunciado:
Implemente `debounce(fn, delay)` que só executa após intervalo sem novas chamadas.

Resolução:

```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const log = debounce((msg) => console.log("Executou:", msg), 300);
log("A");
log("B");
log("C"); // Só este executa após 300ms
```
