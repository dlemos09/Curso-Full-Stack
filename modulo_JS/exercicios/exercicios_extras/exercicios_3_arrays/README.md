# Exercícios 3 - Arrays

Cinco exercícios focados em métodos de arrays.

---

## Exercício 1: Filtrar Pares

Enunciado:
Dado `[1,2,3,4,5,6,7,8]` gere novo array apenas com pares.

Resolução:

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const pares = numeros.filter((n) => n % 2 === 0);
console.log(pares); // [2,4,6,8]
```

---

## Exercício 2: Map para Uppercase

Enunciado:
Transforme array de nomes para maiúsculas.

Resolução:

```js
const nomes = ["ana", "bruno", "carla"];
const upper = nomes.map((n) => n.toUpperCase());
console.log(upper); // ['ANA','BRUNO','CARLA']
```

---

## Exercício 3: Soma e Média com Reduce

Enunciado:
Calcule soma e média de `[10,5,3,7]` usando reduce.

Resolução:

```js
const valores = [10, 5, 3, 7];
const soma = valores.reduce((acc, v) => acc + v, 0);
const media = valores.reduce((acc, v, i, arr) => {
  acc += v;
  if (i === arr.length - 1) return acc / arr.length;
  return acc;
}, 0);
console.log({ soma, media }); // { soma:25, media:6.25 }
```

---

## Exercício 4: Encadeamento

Enunciado:
Dado `[5,12,3,19,7,1]`: filtre >5, multiplique por 2 e some resultado.

Resolução:

```js
const lista = [5, 12, 3, 19, 7, 1];
const resultado = lista
  .filter((n) => n > 5)
  .map((n) => n * 2)
  .reduce((acc, n) => acc + n, 0);
console.log(resultado); // (12+19+7)*2 = 76
```

---

## Exercício 5: some vs every

Enunciado:
Teste se todos >0 (`every`) e se algum >15 (`some`). Explique diferença.

Resolução:

```js
const arr = [2, 4, 8, 16];
console.log(arr.every((n) => n > 0)); // true (todos satisfazem)
console.log(arr.some((n) => n > 15)); // true (pelo menos um)
// every exige que TODOS cumpram a condição.
// some verifica se AO MENOS UM cumpre.
```
