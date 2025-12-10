# Exercícios 4 - Objetos

Cinco exercícios sobre criação e manipulação de objetos.

---

## Exercício 1: Criar Objeto Pessoa

Enunciado:
Crie objeto com propriedades: nome, idade, ativo. Imprima cada.

Resolução:

```js
const pessoa = { nome: "João", idade: 32, ativo: true };
console.log(pessoa.nome, pessoa.idade, pessoa.ativo);
```

---

## Exercício 2: Adicionar e Remover Propriedade

Enunciado:
Adicione `email` e depois remova. Verifique com `in` antes e depois.

Resolução:

```js
pessoa.email = "joao@example.com";
console.log("email" in pessoa); // true
delete pessoa.email;
console.log("email" in pessoa); // false
```

---

## Exercício 3: Loop Seguro de Propriedades

Enunciado:
Liste chaves e valores usando `for...in`, ignorando protótipo.

Resolução:

```js
for (const chave in pessoa) {
  if (Object.prototype.hasOwnProperty.call(pessoa, chave)) {
    console.log(chave, pessoa[chave]);
  }
}
```

---

## Exercício 4: Clonar e Modificar

Enunciado:
Clone objeto com spread, altere idade apenas no clone.

Resolução:

```js
const clone = { ...pessoa, idade: pessoa.idade + 1 };
console.log(pessoa.idade, clone.idade); // 32 vs 33
```

---

## Exercício 5: Destructuring com Renomeação

Enunciado:
Extraia nome e idade; renomeie ativo para status.

Resolução:

```js
const { nome, idade, ativo: status } = pessoa;
console.log(nome, idade, status);
```
