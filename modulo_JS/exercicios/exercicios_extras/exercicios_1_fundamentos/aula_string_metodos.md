# Aula Extra - Métodos de String em JavaScript

## Objetivo

Dominar os principais métodos de manipulação de strings para análise, limpeza, formatação e transformação de texto.

## Conceitos Fundamentais

- Imutabilidade: Strings não são alteradas; métodos retornam novas strings.
- Indexação: Base zero. `str[0]` acessa primeiro caractere.
- Unicode: Alguns caracteres (como emojis) podem ocupar mais de 1 unidade UTF-16.

## Principais Propriedades

- `length`: quantidade de unidades UTF-16.

```js
const s = "JavaScript";
console.log(s.length); // 10
```

## Métodos Essenciais

### 1. Acesso e Extração

- `charAt(i)`: caractere na posição.
- `slice(inicio, fim?)`: fatia (aceita negativos).
- `substring(inicio, fim?)`: similar a slice (não aceita negativos).
- `substr(inicio, comprimento)`: obsoleto (evitar).

```js
const texto = "Fundamentos";
console.log(texto.charAt(0)); // 'F'
console.log(texto.slice(0, 4)); // 'Fund'
console.log(texto.slice(-4)); // 'entos'
console.log(texto.substring(0, 4)); // 'Fund'
```

### 2. Busca

- `indexOf(sub)`, `lastIndexOf(sub)`
- `includes(sub, posInicial?)`
- `startsWith(sub, pos?)`, `endsWith(sub, comprimento?)`

```js
const frase = "Aprender JavaScript é divertido";
console.log(frase.includes("Java")); // true
console.log(frase.startsWith("Aprender")); // true
console.log(frase.endsWith("divertido")); // true
console.log(frase.indexOf("Java")); // posição inicial
```

### 3. Transformação

- `toUpperCase()`, `toLowerCase()`
- `trim()`, `trimStart()`, `trimEnd()`
- `replace(busca, novo)`, `replaceAll(busca, novo)`
- `padStart(len, pad)`, `padEnd(len, pad)`
- `repeat(n)`

```js
const sujo = "   dado cru   ";
console.log(sujo.trim()); // 'dado cru'
console.log("js".padStart(5, "0")); // '000js'
console.log("teste".repeat(3)); // 'testetesteteste'
```

### 4. Conversão e Divisão

- `split(separador, limite?)`: divide em array
- `join(sep)`: (no array) recombina

```js
const csv = "Ana,Bruno,Carla";
const nomes = csv.split(",");
console.log(nomes); // ['Ana','Bruno','Carla']
console.log(nomes.join(" | ")); // 'Ana | Bruno | Carla'
```

### 5. Correspondência com Regex

- `match(regex)`, `matchAll(regex)`
- `search(regex)`
- `replace(regex, substituto)`

```js
const texto2 = "Pedido: #1234, #5678";
console.log(texto2.match(/#\d+/g)); // ['#1234','#5678']
```

### 6. Normalização

- `normalize(form)` => lida com composição Unicode.

```js
const acentuada = "é";
console.log(acentuada.normalize("NFD")); // 'e' + acento separado
```

## Exercícios Práticos

### Exercício 1: Inicial Maiúscula

Enunciado: Função que recebe frase e coloca primeira letra de cada palavra em maiúsculo.

```js
function capitalizar(frase) {
  return frase
    .toLowerCase()
    .split(/\s+/)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}
console.log(capitalizar("aprendENDO JAVAscript fUnDaMenToS"));
```

### Exercício 2: Contar Ocorrências

Enunciado: Contar quantas vezes a palavra "js" aparece (case-insensitive).

```js
function contarJS(str) {
  return (str.toLowerCase().match(/js/g) || []).length;
}
console.log(contarJS("JS ama javascript e js é legal"));
```

### Exercício 3: Mascara Documento

Enunciado: Converter `12345678901` em `123.456.789-01`.

```js
function mascararCPF(cpf) {
  const limpo = cpf.replace(/\D/g, "");
  return limpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}
console.log(mascararCPF("12345678901"));
```

### Exercício 4: Remover Acentos

Enunciado: Função que remove acentos (básico) para comparações.

```js
function removerAcentos(str) {
  return str.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}
console.log(removerAcentos("ação informação útil"));
```

### Exercício 5: Limitar Texto

Enunciado: Função que limita string a N chars e adiciona `...` se maior.

```js
function limitar(str, n) {
  return str.length > n ? str.slice(0, n) + "..." : str;
}
console.log(limitar("Texto muito longo para exibir", 15));
```

## Boas Práticas

- Evitar uso excessivo de concatenação simples: preferir template literals.
- Sanitizar entradas antes de processar.
- Cuidado com `length` em emojis (ex: "😀" pode parecer 1 char mas internamente usar 2 unidades).

## Desafio Extra

Transformar frases em slug de URL: "Aprendendo Métodos de String" => `aprendendo-metodos-de-string`.

```js
function slugify(str) {
  return removerAcentos(str.toLowerCase())
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
console.log(slugify("Aprendendo Métodos de String!!!"));
```

## Referências

- MDN: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
