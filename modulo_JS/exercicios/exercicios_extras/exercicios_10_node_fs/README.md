# Exercícios 10 - Node.js e FS

Cinco exercícios sobre operações de arquivos e CLI.

---

## Exercício 1: Criar Arquivo

Enunciado:
Escreva texto em `dados.txt`.

Resolução:

```js
import { promises as fs } from "fs";
await fs.writeFile("dados.txt", "Linha inicial", "utf-8");
console.log("Criado");
```

---

## Exercício 2: Ler Arquivo

Enunciado:
Leia e imprima conteúdo de `dados.txt`.

Resolução:

```js
const conteudo = await fs.readFile("dados.txt", "utf-8");
console.log(conteudo);
```

---

## Exercício 3: Append

Enunciado:
Adicione nova linha ao arquivo.

Resolução:

```js
await fs.appendFile("dados.txt", "\nNova linha", "utf-8");
```

---

## Exercício 4: Listar Diretório

Enunciado:
Liste arquivos da pasta atual.

Resolução:

```js
const itens = await fs.readdir(".");
console.log(itens);
```

---

## Exercício 5: Argumento CLI

Enunciado:
Script recebe nome de arquivo (process.argv) e imprime tamanho.

Resolução:

```js
const nome = process.argv[2];
if (!nome) {
  console.log("Forneça nome de arquivo");
  process.exit(1);
}
const stats = await fs.stat(nome);
console.log("Tamanho (bytes):", stats.size);
```

---

## Execução

Salve como `node_fs_resolvido.mjs` e execute:

```bash
node node_fs_resolvido.mjs dados.txt
```
