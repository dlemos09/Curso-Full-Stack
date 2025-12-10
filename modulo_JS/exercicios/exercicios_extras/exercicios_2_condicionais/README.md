# Exercícios 2 - Condicionais e Funções

Cinco exercícios para reforçar controle de fluxo e funções.

---

## Exercício 1: Classificar Nota

Enunciado:
Implemente `classificarNota(n)` que retorna:

- "Excelente" se n >= 9
- "Bom" se n >= 7
- "Regular" se n >= 5
- "Insuficiente" se n < 5
  Use if/else ou switch.

Resolução:

```js
function classificarNota(n) {
  if (n >= 9) return "Excelente";
  if (n >= 7) return "Bom";
  if (n >= 5) return "Regular";
  return "Insuficiente";
}
console.log(classificarNota(9));
console.log(classificarNota(7.5));
console.log(classificarNota(5));
console.log(classificarNota(3));
```

---

## Exercício 2: Soma 1..N com Três Loops

Enunciado:
Calcule a soma de 1 até N (=50) usando for, while e do...while. Compare resultados.

Resolução:

```js
const N = 50;
let somaFor = 0;
for (let i = 1; i <= N; i++) somaFor += i;

let somaWhile = 0;
let j = 1;
while (j <= N) {
  somaWhile += j;
  j++;
}

let somaDo = 0;
let k = 1;
do {
  somaDo += k;
  k++;
} while (k <= N);

console.log({ somaFor, somaWhile, somaDo }); // Devem ser iguais
```

---

## Exercício 3: Iterar Nomes de Diferentes Formas

Enunciado:
Dado `['Ana','Bruno','Carla','Daniel']`, imprima índice + nome usando for tradicional, for...of e forEach.

Resolução:

```js
const nomes = ["Ana", "Bruno", "Carla", "Daniel"];
for (let i = 0; i < nomes.length; i++) {
  console.log(i, nomes[i]);
}
for (const nome of nomes) {
  console.log(nome); // sem índice direto
}
nomes.forEach((nome, i) => console.log(i, nome));
```

---

## Exercício 4: Função com Parâmetro Default

Enunciado:
Crie `saudar(nome = 'Visitante')` que retorna saudação.

Resolução:

```js
function saudar(nome = "Visitante") {
  return `Olá, ${nome}!`;
}
console.log(saudar("João"));
console.log(saudar());
```

---

## Exercício 5: Função Pura vs Impura

Enunciado:
Crie função impura que gera número aleatório e função pura que soma dois números. Comente diferença.

Resolução:

```js
function gerarAleatorio() {
  // impura: depende de estado externo (Math.random())
  return Math.random();
}
function somar(a, b) {
  // pura: mesmo inputs -> mesmo output
  return a + b;
}
console.log(gerarAleatorio());
console.log(gerarAleatorio()); // varia
console.log(somar(2, 3));
console.log(somar(2, 3)); // sempre 5
// Funções puras são previsíveis e fáceis de testar.
```
