# Exercícios forEach, for...in e for...of

Esta pasta contém exercícios didáticos sobre três formas importantes de iteração em JavaScript.

## 📚 Estrutura dos Exercícios

### forEach (10 exercícios)

Arquivos: `forEach_ex01.js` até `forEach_ex10.js`

O `forEach` é um método de arrays que executa uma função para cada elemento.

**Quando usar:**

- Quando você precisa iterar sobre elementos de um array
- Quando você quer executar uma operação para cada elemento
- Quando você NÃO precisa usar `break` ou `continue`

**Exercícios incluem:**

1. Imprimir elementos de um array
2. Imprimir elementos com índices
3. Somar elementos
4. Dobrar valores e criar novo array
5. Contar números pares
6. Criar lista HTML
7. Encontrar maior número
8. Converter para maiúsculas
9. Filtrar palavras longas
10. Calcular média de notas

---

### for...in (10 exercícios)

Arquivos: `forIn_ex01.js` até `forIn_ex10.js`

O `for...in` itera sobre as **propriedades enumeráveis** de um objeto.

**Quando usar:**

- Quando você precisa iterar sobre as chaves/propriedades de um objeto
- Quando você quer acessar tanto a chave quanto o valor
- Para contar propriedades ou verificar a estrutura de um objeto

**Exercícios incluem:**

1. Iterar sobre propriedades de um objeto
2. Contar propriedades
3. Somar valores numéricos
4. Criar array com chaves
5. Criar array com valores
6. Filtrar por tipo
7. Inverter chaves e valores
8. Verificar existência de propriedade
9. Calcular média de notas em objeto
10. Copiar objeto modificando valores

---

### for...of (10 exercícios)

Arquivos: `forOf_ex01.js` até `forOf_ex10.js`

O `for...of` itera sobre **valores** de objetos iteráveis (arrays, strings, Maps, Sets, etc).

**Quando usar:**

- Quando você precisa iterar sobre valores de um array
- Quando você quer usar `break` ou `continue` (diferente do forEach)
- Quando você trabalha com strings, Maps, Sets ou outros iteráveis
- Mais legível que o `for` tradicional para arrays

**Exercícios incluem:**

1. Iterar sobre valores de um array
2. Somar elementos
3. Encontrar maior valor
4. Contar palavras longas
5. Converter para maiúsculas
6. Verificar existência de valor
7. Criar array com números pares
8. Iterar sobre caracteres de string
9. Calcular produto de elementos
10. Concatenar strings

---

## 🎯 Comparação Rápida

| Característica       | forEach               | for...in         | for...of             |
| -------------------- | --------------------- | ---------------- | -------------------- |
| Itera sobre          | Elementos de array    | Chaves de objeto | Valores de iterável  |
| Usa break/continue   | ❌ Não                | ✅ Sim           | ✅ Sim               |
| Melhor para          | Arrays                | Objetos          | Arrays, Strings, etc |
| Retorna índice/chave | ✅ Sim (2º parâmetro) | ✅ Sim           | ❌ Não               |

## 💡 Dicas de Uso

1. **forEach**: Use quando você precisa fazer algo com cada elemento do array e não precisa parar no meio
2. **for...in**: Use para objetos quando precisa das chaves/propriedades
3. **for...of**: Use para arrays quando precisa dos valores e pode precisar usar break/continue

## 🚀 Como Executar

Para executar qualquer exercício, use o Node.js:

```bash
node forEach_ex01.js
node forIn_ex01.js
node forOf_ex01.js
```

Ou abra o arquivo e execute no navegador através do console.

---

## 📝 Observações Importantes

- Todos os exercícios vêm com **solução comentada**
- Os exercícios são progressivos em dificuldade
- Tente resolver antes de olhar a solução!
- Experimente modificar os exemplos para praticar mais

---

**Bons estudos! 🎓**
