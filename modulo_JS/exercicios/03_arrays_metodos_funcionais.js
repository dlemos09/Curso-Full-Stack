// ========================================
// AULA 03: Arrays e Métodos Funcionais
// Objetivo didático: Dominar operações em listas de dados usando métodos funcionais
// Por que importa: Manipulação de coleções é essencial em qualquer aplicação real
// Sequência: map/filter/reduce → objetos → agrupamento → busca → sort → implementação
// ========================================

// =====================================================
// EXERCÍCIO 1 - BÁSICO
// ENUNCIADO:
// Dado um array de números de 1 a 10, aplique os métodos map, filter e reduce para:
// a) Dobrar todos os valores
// b) Calcular o quadrado de cada valor
// c) Filtrar apenas os números pares
// d) Filtrar números maiores que 5
// e) Calcular a soma total dos valores
// f) Calcular o produto de todos os valores
// Explique cada passo com comentários.
// =====================================================

console.log("=== EXERCÍCIO 1: Map, Filter, Reduce Básico ===");

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a) MAP: Dobrar todos os valores
// O método map percorre cada elemento e retorna um novo array com o resultado da função aplicada.
const dobrados = numeros.map((n) => n * 2); // Multiplica cada número por 2
console.log("Números dobrados:", dobrados);

// b) MAP: Quadrado de cada valor
const quadrados = numeros.map((n) => n ** 2); // Eleva cada número ao quadrado
console.log("Quadrados:", quadrados);

// c) FILTER: Apenas números pares
// O método filter retorna um novo array apenas com os elementos que passam na condição.
const pares = numeros.filter((n) => n % 2 === 0); // Seleciona apenas os pares
console.log("Números pares:", pares);

// d) FILTER: Números maiores que 5
const maioresQue5 = numeros.filter((n) => n > 5); // Seleciona números maiores que 5
console.log("Maiores que 5:", maioresQue5);

// e) REDUCE: Soma total
// O método reduce acumula os valores do array em um único resultado.
const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0); // Soma todos os números
console.log("Soma total:", soma);

// f) REDUCE: Produto de todos os valores
const produto = numeros.reduce((acumulador, atual) => acumulador * atual, 1); // Multiplica todos os números
console.log("Produto:", produto);

// =====================================================
// EXERCÍCIO 2 - INTERMEDIÁRIO
// ENUNCIADO:
// Dado um array de objetos representando produtos, faça:
// a) Gere um array apenas com os nomes dos produtos
// b) Filtre os produtos que estão em estoque (estoque > 0)
// c) Filtre os produtos da categoria "Eletrônicos" com preço acima de R$ 500
// d) Calcule o valor total do estoque (preço * quantidade de cada produto)
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 2: Arrays de Objetos ===");

const produtos = [
  {
    id: 1,
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônicos",
    estoque: 15,
  },
  { id: 2, nome: "Mouse", preco: 50, categoria: "Acessórios", estoque: 100 },
  { id: 3, nome: "Teclado", preco: 150, categoria: "Acessórios", estoque: 80 },
  { id: 4, nome: "Monitor", preco: 800, categoria: "Eletrônicos", estoque: 25 },
  { id: 5, nome: "Webcam", preco: 300, categoria: "Eletrônicos", estoque: 0 },
  { id: 6, nome: "Headset", preco: 200, categoria: "Acessórios", estoque: 45 },
];

// a) Extrair apenas nomes dos produtos
const nomes = produtos.map((p) => p.nome); // Cria novo array só com o campo nome
console.log("Nomes dos produtos:", nomes);

// b) Filtrar produtos em estoque
const emEstoque = produtos.filter((p) => p.estoque > 0); // Apenas produtos com estoque positivo
console.log("Produtos em estoque:", emEstoque.length);

// c) Filtrar eletrônicos caros (> 500)
const eletronicosCaros = produtos
  .filter((p) => p.categoria === "Eletrônicos") // Primeiro filtra por categoria
  .filter((p) => p.preco > 500); // Depois filtra por preço
console.log("Eletrônicos caros:", eletronicosCaros);

// d) Calcular valor total do estoque
const valorTotal = produtos.reduce((total, p) => {
  // Para cada produto, multiplica preço pela quantidade em estoque e soma ao total
  return total + p.preco * p.estoque;
}, 0);
console.log("Valor total em estoque: R$", valorTotal.toFixed(2));

// =====================================================
// EXERCÍCIO 3 - INTERMEDIÁRIO
// ENUNCIADO:
// Com o array de produtos anterior, faça:
// a) Agrupe os produtos por categoria (objeto cujas chaves são as categorias)
// b) Calcule o preço médio dos produtos de cada categoria
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 3: Agrupamento e Estatísticas ===");

// a) Agrupar produtos por categoria
// Usamos reduce para criar um objeto onde cada chave é uma categoria e o valor é um array de produtos daquela categoria
const porCategoria = produtos.reduce((grupos, produto) => {
  const cat = produto.categoria;
  if (!grupos[cat]) {
    grupos[cat] = [];
  }
  grupos[cat].push(produto);
  return grupos;
}, {});

console.log("Produtos por categoria:", porCategoria);

// b) Calcular preço médio por categoria
function calcularMediaPorCategoria(produtos) {
  const grupos = {};

  // Primeiro, somamos os preços e contamos quantos produtos em cada categoria
  produtos.forEach((p) => {
    if (!grupos[p.categoria]) {
      grupos[p.categoria] = { soma: 0, count: 0 };
    }
    grupos[p.categoria].soma += p.preco;
    grupos[p.categoria].count++;
  });

  // Depois, calculamos a média para cada categoria
  const medias = {};
  for (const cat in grupos) {
    medias[cat] = grupos[cat].soma / grupos[cat].count;
  }

  return medias;
}

const medias = calcularMediaPorCategoria(produtos);
console.log("Preço médio por categoria:", medias);

// =====================================================
// EXERCÍCIO 4 - INTERMEDIÁRIO
// ENUNCIADO:
// Usando o array de produtos, faça:
// a) Encontre o primeiro produto esgotado (estoque === 0)
// b) Encontre o produto de id 3
// c) Verifique se existe algum produto esgotado
// d) Verifique se existe algum produto acima de R$ 1000
// e) Verifique se todos os produtos estão em estoque
// f) Verifique se todos os produtos têm preço positivo
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 4: Find, Some, Every ===");

// a) FIND: Encontrar primeiro produto esgotado
const produtoEsgotado = produtos.find((p) => p.estoque === 0); // Retorna o primeiro produto com estoque 0
console.log("Primeiro produto esgotado:", produtoEsgotado);

// b) FIND: Produto de id 3
const produtoPorId = produtos.find((p) => p.id === 3); // Busca pelo id
console.log("Produto ID 3:", produtoPorId);

// c) SOME: Existe algum produto esgotado?
const temEsgotado = produtos.some((p) => p.estoque === 0); // true se algum produto tem estoque 0
console.log("Tem produto esgotado?", temEsgotado);

// d) SOME: Algum produto acima de R$ 1000?
const temCaro = produtos.some((p) => p.preco > 1000); // true se algum produto tem preço > 1000
console.log("Tem produto acima de R$ 1000?", temCaro);

// e) EVERY: Todos em estoque?
const todosEmEstoque = produtos.every((p) => p.estoque > 0); // true se todos têm estoque > 0
console.log("Todos em estoque?", todosEmEstoque);

// f) EVERY: Todos com preço positivo?
const todosPositivos = produtos.every((p) => p.preco > 0); // true se todos têm preço > 0
console.log("Todos com preço positivo?", todosPositivos);

// =====================================================
// EXERCÍCIO 5 - AVANÇADO
// ENUNCIADO:
// Usando o array de produtos, faça:
// a) Ordene os produtos por preço crescente
// b) Ordene por estoque decrescente
// c) Ordene alfabeticamente pelo nome
// d) Ordene por categoria e, dentro dela, por preço
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 5: Ordenação ===");

// a) Ordenar por preço (crescente)
// Usamos sort para comparar o campo preco
const porPreco = [...produtos].sort((a, b) => a.preco - b.preco);
console.log(
  "Por preço (crescente):",
  porPreco.map((p) => `${p.nome}: R$${p.preco}`)
);

// b) Ordenar por estoque (decrescente)
const porEstoque = [...produtos].sort((a, b) => b.estoque - a.estoque);
console.log(
  "Por estoque (decrescente):",
  porEstoque.map((p) => `${p.nome}: ${p.estoque} un`)
);

// c) Ordenação alfabética
const alfabetico = [...produtos].sort((a, b) => a.nome.localeCompare(b.nome));
console.log(
  "Alfabético:",
  alfabetico.map((p) => p.nome)
);

// d) Ordenação múltipla: categoria, depois preço
const multiplaCriterio = [...produtos].sort((a, b) => {
  // Primeiro compara categoria
  if (a.categoria < b.categoria) return -1;
  if (a.categoria > b.categoria) return 1;
  // Se mesma categoria, compara preço
  return a.preco - b.preco;
});
console.log(
  "Por categoria e preço:",
  multiplaCriterio.map((p) => `${p.categoria} - ${p.nome}`)
);

// =====================================================
// EXERCÍCIO 6 - AVANÇADO
// ENUNCIADO:
// Implemente manualmente os métodos map, filter e reduce no protótipo de Array.
// a) Crie Array.prototype.meuMap
// b) Crie Array.prototype.meuFilter
// c) Crie Array.prototype.meuReduce
// d) Teste cada método com exemplos
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 6: Implementar Métodos ===");

// a) Implementar map
Array.prototype.meuMap = function (callback) {
  // Cria um novo array para armazenar os resultados
  const resultado = [];
  // Percorre cada elemento do array original
  for (let i = 0; i < this.length; i++) {
    // Aplica a função callback e adiciona ao resultado
    resultado.push(callback(this[i], i, this));
  }
  return resultado;
};

// b) Implementar filter
Array.prototype.meuFilter = function (callback) {
  const resultado = [];
  for (let i = 0; i < this.length; i++) {
    // Se a função callback retornar true, adiciona ao resultado
    if (callback(this[i], i, this)) {
      resultado.push(this[i]);
    }
  }
  return resultado;
};

// c) Implementar reduce
Array.prototype.meuReduce = function (callback, valorInicial) {
  let acumulador = valorInicial;
  for (let i = 0; i < this.length; i++) {
    // Atualiza o acumulador com o retorno da função callback
    acumulador = callback(acumulador, this[i], i, this);
  }
  return acumulador;
};

// d) Testar implementações
const nums = [1, 2, 3, 4, 5];
console.log(
  "meuMap x2:",
  nums.meuMap((n) => n * 2)
); // Esperado: [2, 4, 6, 8, 10]
console.log(
  "meuFilter pares:",
  nums.meuFilter((n) => n % 2 === 0)
); // Esperado: [2, 4]
console.log(
  "meuReduce soma:",
  nums.meuReduce((acc, n) => acc + n, 0)
); // Esperado: 15

// =====================================================
// EXERCÍCIO 7 - AVANÇADO
// ENUNCIADO:
// Dado um array de pedidos, faça:
// a) Calcule o valor total dos pedidos pagos, aplicando 10% de desconto
// b) Liste os clientes que pagaram mais de R$ 100, em ordem alfabética
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 7: Encadeamento de Métodos ===");

const pedidos = [
  { id: 1, cliente: "Ana", valor: 150, status: "pago" },
  { id: 2, cliente: "Bruno", valor: 200, status: "pendente" },
  { id: 3, cliente: "Carlos", valor: 80, status: "pago" },
  { id: 4, cliente: "Diana", valor: 300, status: "pago" },
  { id: 5, cliente: "Eduardo", valor: 120, status: "cancelado" },
  { id: 6, cliente: "Fernanda", valor: 250, status: "pago" },
];

// a) Pipeline: filtrar pagos, mapear valores, somar, aplicar desconto
const totalComDesconto =
  pedidos
    .filter((p) => p.status === "pago") // Filtra apenas pedidos pagos
    .map((p) => p.valor) // Extrai apenas o valor de cada pedido
    .reduce((total, valor) => total + valor, 0) * // Soma todos os valores
  0.9; // Aplica 10% de desconto

console.log("Total pago com desconto: R$", totalComDesconto.toFixed(2));

// b) Clientes que pagaram mais de 100, em ordem alfabética
const clientesVIP = pedidos
  .filter((p) => p.status === "pago") // Apenas pagos
  .filter((p) => p.valor > 100) // Valor acima de 100
  .map((p) => p.cliente) // Extrai nome do cliente
  .sort(); // Ordena alfabeticamente

console.log("Clientes VIP:", clientesVIP);

// =====================================================
// EXERCÍCIO 8 - APLICAÇÃO REAL
// ENUNCIADO:
// Simule o processamento de um arquivo CSV de pessoas (nome, idade, cidade, salário):
// a) Converta o CSV em um array de objetos
// b) Calcule estatísticas: total de pessoas, idade média, salário médio, quantos são de São Paulo
// c) Liste as pessoas com salário acima da média
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 8: Processador CSV ===");

// a) Simular dados CSV (em produção viria de arquivo)
const csvDados = `nome,idade,cidade,salario
Ana Silva,28,São Paulo,5000
Bruno Costa,35,Rio de Janeiro,7000
Carlos Souza,42,Belo Horizonte,6500
Diana Lima,31,São Paulo,8000
Eduardo Santos,29,Curitiba,5500
Fernanda Oliveira,38,São Paulo,9000`;

function processarCSV(csv) {
  // Divide o texto em linhas
  const linhas = csv.trim().split("\n");
  // A primeira linha é o cabeçalho
  const cabecalho = linhas[0].split(",");

  // Para cada linha (exceto o cabeçalho), cria um objeto
  const dados = linhas.slice(1).map((linha) => {
    const valores = linha.split(",");
    const obj = {};
    cabecalho.forEach((chave, i) => {
      // Se for número, converte; senão, mantém string
      const valor = valores[i];
      obj[chave] = isNaN(valor) ? valor : Number(valor);
    });
    return obj;
  });

  return dados;
}

const pessoas = processarCSV(csvDados);
console.log("Dados processados:", pessoas);

// b) Estatísticas
const totalPessoas = pessoas.length;
const idadeMedia = pessoas.reduce((acc, p) => acc + p.idade, 0) / totalPessoas;
const salarioMedio =
  pessoas.reduce((acc, p) => acc + p.salario, 0) / totalPessoas;
const deSaoPaulo = pessoas.filter((p) => p.cidade === "São Paulo").length;

console.log("\nEstatísticas:");
console.log(`  Total de pessoas: ${totalPessoas}`);
console.log(`  Idade média: ${idadeMedia.toFixed(1)} anos`);
console.log(`  Salário médio: R$ ${salarioMedio.toFixed(2)}`);
console.log(`  De São Paulo: ${deSaoPaulo}`);

// c) Pessoas com salário acima da média
const acimaDaMedia = pessoas
  .filter((p) => p.salario > salarioMedio)
  .map((p) => `${p.nome} (R$ ${p.salario})`);

console.log("Salários acima da média:", acimaDaMedia);

console.log("\n✅ Exercícios de Arrays e Métodos Funcionais concluídos!");
