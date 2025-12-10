# Exercícios 6 - Módulos e NPM

Cinco exercícios sobre organização e import/export.

---

## Exercício 1: Export Simples

Enunciado:
Crie arquivo `math.js` com funções `soma` e `subtrai` exportadas (ES Module). Importe em `index.js`.

Resolução (`math.js`):

```js
export function soma(a, b) {
  return a + b;
}
export function subtrai(a, b) {
  return a - b;
}
```

Resolução (`index.js`):

```js
import { soma, subtrai } from "./math.js";
console.log(soma(2, 3));
console.log(subtrai(5, 1));
```

---

## Exercício 2: Export Default + Nomeado

Enunciado:
Crie módulo que exporta default objeto e função nomeada.

Resolução (`config.js`):

```js
export default { apiUrl: "https://api.exemplo.com" };
export function versao() {
  return "1.0.0";
}
```

Uso:

```js
import config, { versao } from "./config.js";
console.log(config.apiUrl, versao());
```

---

## Exercício 3: Estrutura de Pastas

Enunciado:
Crie `src/utils/date.js` e `src/services/user.js`. Importe ambos em `src/main.js`.

Resolução (exemplo):

```js
// utils/date.js
export const hoje = () => new Date().toISOString();
// services/user.js
export const criarUser = (nome) => ({ id: Date.now(), nome });
// main.js
import { hoje } from "./utils/date.js";
import { criarUser } from "./services/user.js";
console.log(hoje(), criarUser("Ana"));
```

---

## Exercício 4: npm init

Enunciado:
Execute `npm init -y` (fora do código). Comente campos gerados principais.

Resolução (comentário):

```text
package.json campos:
- name: nome do pacote
- version: versão inicial
- main: ponto de entrada
- scripts: comandos (ex: start, test)
- license: licença do projeto
```

---

## Exercício 5: Script no package.json

Enunciado:
Adicione script `"start": "node src/main.js"` e explique execução.

Resolução (trecho package.json):

```json
{
  "scripts": {
    "start": "node src/main.js"
  }
}
```

Uso:

```bash
npm run start
```
