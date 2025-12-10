# Exercícios 1 - Fundamentos

Cinco exercícios para reforçar tipos, variáveis e operadores.

---

## Exercício 1: Tipos e typeof

Enunciado:
Crie 6 variáveis (string, number, boolean, undefined, null, symbol). Imprima valor e typeof de cada. Explique por que `typeof null` retorna "object".

Resolução:

```js
const texto = "Olá"; // string
const numero = 42; // number
const ativo = true; // boolean
let indefinido; // undefined
const vazio = null; // null
const id = Symbol("id_unico"); // symbol

console.log(texto, typeof texto);
console.log(numero, typeof numero);
console.log(ativo, typeof ativo);
console.log(indefinido, typeof indefinido);
console.log(vazio, typeof vazio); // null object (histórico da linguagem)
console.log(id, typeof id);
// typeof null === 'object' é um bug legado do JavaScript da primeira implementação.
```

---

## Exercício 2: Conversões Explícitas

Enunciado:
Dados `const entrada = "42"` e `const valor = "3.14"`, converta para inteiro, float, boolean e de volta para string. Verifique se são números válidos.

Resolução:

```js
const entrada = "42";
const valor = "3.14";

const inteiro = parseInt(entrada, 10);
const flutuante = parseFloat(valor);
const numeroDireto = Number(entrada);

const boolEntrada = Boolean(entrada); // true (string não vazia)
const boolVazio = Boolean(""); // false

console.log({ inteiro, flutuante, numeroDireto, boolEntrada, boolVazio });

console.log(Number.isNaN(inteiro)); // false
console.log(Number.isNaN(flutuante)); // false
console.log(Number.isNaN(Number("abc"))); // true

const deVoltaString = String(inteiro);
console.log(deVoltaString, typeof deVoltaString); // '42', string
```

---

## Exercício 3: Operadores Lógicos

Enunciado:
Crie três expressões usando `&&`, `||` e `!` que retornem verdadeiro e três que retornem falso. Explique curto‐circuito.

Resolução:

```js
// Verdadeiros
console.log(true && 5 > 3); // true
console.log(false || 10 === 10); // true
console.log(!false); // true

// Falsos
console.log(true && 2 > 5); // false
console.log(false || 3 > 10); // false
console.log(!true); // false

// Curto-circuito:
// Em A && B, se A for false, não avalia B.
// Em A || B, se A for true, não avalia B.
let contador = 0;
function incr() {
  contador++;
  return true;
}
console.log(false && incr()); // false, incr() não executa
console.log(true || incr()); // true, incr() não executa
console.log("contador:", contador); // 0
```

---

## Exercício 4: Template Literals

Enunciado:
Crie objeto `pessoa = { nome, idade, cidade }` e gere frase: "Meu nome é X, tenho Y anos e moro em Z" com quebra de linha e cálculo (idade + 5).

Resolução:

```js
const pessoa = { nome: "Ana", idade: 28, cidade: "Recife" };
const frase = `Meu nome é ${pessoa.nome},\ntenho ${
  pessoa.idade
} anos e moro em ${pessoa.cidade}.\nDaqui a 5 anos terei ${pessoa.idade + 5}.`;
console.log(frase);
```

---

## Exercício 5: Operadores Comparativos

Enunciado:
Liste resultados: `5 == "5"`, `5 === "5"`, `0 == false`, `0 === false`, `null == undefined`, `null === undefined`. Explique.

Resolução:

```js
console.log(5 == "5"); // true (coerção de tipo)
console.log(5 === "5"); // false (tipo diferente)
console.log(0 == false); // true (false vira 0)
console.log(0 === false); // false (number vs boolean)
console.log(null == undefined); // true (tratados como equivalentes na comparação abstrata)
console.log(null === undefined); // false (tipos diferentes)
/*
Tabela:
==  -> Compara após coerção (mais permissivo)
=== -> Compara valor e tipo (mais seguro)
Use === na maioria dos casos para evitar surpresas.
*/
```
