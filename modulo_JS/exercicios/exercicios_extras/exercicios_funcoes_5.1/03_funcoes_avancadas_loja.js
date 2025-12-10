/*
EXERCÍCIOS DE FUNÇÕES - Nível Avançado
Contexto: Sistema de Loja Online com Carrinho de Compras
-------------------------------------
Objetivo: Callbacks, funções que retornam funções, composição avançada.
*/

// ==========================================
// EXERCÍCIO 1 - Criar Produto e Aplicar Callback
// ==========================================
// Enunciado:
// Crie uma função 'aplicarOperacao' que receba um preço e uma função (callback).
// Retorne o resultado da função aplicada ao preço.
// Use callbacks para aplicar desconto, acrescentar taxa e aplicar juros.

function aplicarOperacao(preco, operacao) {
  return operacao(preco);
}

const aplicarDesconto = (percentual) => {
  return (preco) => preco * (1 - percentual / 100);
};

const aplicarTaxa = (percentual) => {
  return (preco) => preco * (1 + percentual / 100);
};

const aplicarJuros = (percentual, meses) => {
  return (preco) => preco * Math.pow(1 + percentual / 100 / 12, meses);
};

// Testando:
console.log("Exercício 1 - Preço original: 100");
console.log("Com desconto de 10%:", aplicarOperacao(100, aplicarDesconto(10))); // Esperado: 90
console.log("Com taxa de 8%:", aplicarOperacao(100, aplicarTaxa(8))); // Esperado: 108
console.log(
  "Com juros 1% a.m. por 12 meses:",
  aplicarOperacao(100, aplicarJuros(1, 12))
); // Esperado: ~112.68

// ==========================================
// EXERCÍCIO 2 - Composição de Funções
// ==========================================
// Enunciado:
// Crie uma função 'compor' que receba duas funções e retorne uma nova função
// que aplica ambas em sequência (compose pattern).

function compor(fn1, fn2) {
  return (valor) => fn2(fn1(valor));
}

const duplicar = (x) => x * 2;
const elevarQuadrado = (x) => x * x;

const duplicarEElevar = compor(duplicar, elevarQuadrado);

// Testando:
console.log("Exercício 2 - Duplicar e elevar (5):", duplicarElevar(5)); // Esperado: (5*2)² = 100

// ==========================================
// EXERCÍCIO 3 - Curry (Função que Retorna Função)
// ==========================================
// Enunciado:
// Crie uma função 'curried_somar' que receba três números,
// mas permita aplicar um número por vez: somar(1)(2)(3) = 6

function somar_curried(a) {
  return (b) => {
    return (c) => a + b + c;
  };
}

// Testando:
console.log("Exercício 3 - Soma curried:", somar_curried(1)(2)(3)); // Esperado: 6

// ==========================================
// EXERCÍCIO 4 - Memoização (Cache de Resultados)
// ==========================================
// Enunciado:
// Crie uma função 'memoizar' que receba uma função.
// Retorne uma versão que cacheia resultados anteriores.
// Use uma função fibonacci como exemplo.

function memoizar(fn) {
  const cache = {};
  return (arg) => {
    if (arg in cache) {
      console.log(`  (retornado do cache)`);
      return cache[arg];
    }
    const resultado = fn(arg);
    cache[arg] = resultado;
    return resultado;
  };
}

const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const fibMemoizado = memoizar(fibonacci);

// Testando:
console.log("Exercício 4 - Fibonacci(5):", fibMemoizado(5));
console.log("Exercício 4 - Fibonacci(5) novamente:", fibMemoizado(5)); // Vem do cache

// ==========================================
// EXERCÍCIO 5 - Reduce com Função Callback
// ==========================================
// Enunciado:
// Crie um array de produtos {nome, preco, quantidade}.
// Use reduce para calcular:
// a) Valor total do carrinho
// b) Produto mais caro
// c) Quantidade total de itens

const carrinho = [
  { nome: "Notebook", preco: 3000, quantidade: 1 },
  { nome: "Mouse", preco: 50, quantidade: 2 },
  { nome: "Teclado", preco: 200, quantidade: 1 },
];

const valorTotal = carrinho.reduce(
  (total, item) => total + item.preco * item.quantidade,
  0
);
const produtoMaisCaro = carrinho.reduce((max, item) =>
  item.preco > max.preco ? item : max
);
const quantidadeTotal = carrinho.reduce(
  (total, item) => total + item.quantidade,
  0
);

// Testando:
console.log("Exercício 5 - Valor total:", valorTotal); // Esperado: 3300
console.log("Exercício 5 - Produto mais caro:", produtoMaisCaro.nome); // Esperado: Notebook
console.log("Exercício 5 - Quantidade total:", quantidadeTotal); // Esperado: 4

// ==========================================
// EXERCÍCIO 6 - Encadear Operações (Method Chaining)
// ==========================================
// Enunciado:
// Crie um objeto 'Carrinho' com métodos que retornam 'this'
// para permitir encadeamento: carrinho.adicionar().aplicarDesconto().calcularTotal()

class CarrinhoCompras {
  constructor() {
    this.itens = [];
    this.desconto = 0;
  }

  adicionar(produto) {
    this.itens.push(produto);
    return this;
  }

  aplicarDesconto(percentual) {
    this.desconto = percentual;
    return this;
  }

  calcularTotal() {
    const subtotal = this.itens.reduce((total, item) => total + item.preco, 0);
    const desconto = subtotal * (this.desconto / 100);
    return subtotal - desconto;
  }

  obterResumo() {
    const total = this.calcularTotal();
    const desconto =
      this.itens.reduce((t, i) => t + i.preco, 0) * (this.desconto / 100);
    return `Total: R$ ${total.toFixed(2)} (desconto: R$ ${desconto.toFixed(
      2
    )})`;
  }
}

// Testando:
const meuCarrinho = new CarrinhoCompras()
  .adicionar({ nome: "Livro", preco: 50 })
  .adicionar({ nome: "Caneta", preco: 5 })
  .aplicarDesconto(10);

console.log("Exercício 6 - Carrinho:", meuCarrinho.obterResumo());
// Esperado: Total: R$ 49.50 (desconto: R$ 5.50)

// ==========================================
// EXERCÍCIO 7 - forEach com Efeito Colateral (Side Effect)
// ==========================================
// Enunciado:
// Crie um array de compras e uma função que registre cada uma em um "banco de dados" (simulado).
// Use forEach para processar efeitos colaterais (não retorna novo array).

const pedidos = [];

function registrarPedido(produto) {
  pedidos.push({
    id: pedidos.length + 1,
    produto: produto.nome,
    preco: produto.preco,
    data: new Date().toLocaleDateString(),
  });
}

const produtosComprados = [
  { nome: "Headphone", preco: 150 },
  { nome: "Webcam", preco: 200 },
];

// Testando:
console.log("Exercício 7 - Antes:", pedidos.length); // Esperado: 0
produtosComprados.forEach(registrarPedido);
console.log("Exercício 7 - Depois:", pedidos.length); // Esperado: 2
console.log("Exercício 7 - Primeiro pedido:", pedidos[0]);

// ==========================================
// EXERCÍCIO 8 - Filter com Validação
// ==========================================
// Enunciado:
// Crie uma função 'filtrar' que receba um array e uma função de validação.
// Retorne novo array apenas com elementos que passem na validação.

function filtrar(array, validacao) {
  return array.filter(validacao);
}

const precos = [10, 50, 100, 250, 30, 500];
const precosAltos = filtrar(precos, (preco) => preco > 100);

// Testando:
console.log("Exercício 8 - Preços > 100:", precosAltos); // Esperado: [250, 500]

// ==========================================
// EXERCÍCIO 9 - Map + Filter + Reduce (Encadeamento)
// ==========================================
// Enunciado:
// Crie um array de transações {tipo: 'venda' ou 'desconto', valor}.
// Use map/filter/reduce para:
// a) Filtrar apenas vendas
// b) Converter em valor positivo/negativo
// c) Calcular saldo final

const transacoes = [
  { tipo: "venda", valor: 100 },
  { tipo: "desconto", valor: 20 },
  { tipo: "venda", valor: 150 },
  { tipo: "desconto", valor: 30 },
];

const saldo = transacoes
  .map((t) => (t.tipo === "venda" ? t.valor : -t.valor))
  .reduce((acc, val) => acc + val, 0);

// Testando:
console.log("Exercício 9 - Saldo final:", saldo); // Esperado: 200 (100 + 150 - 20 - 30)

// ==========================================
// EXERCÍCIO 10 - Criar Middleware (Função que Modifica Função)
// ==========================================
// Enunciado:
// Crie uma função 'addLogging' que envole outra função
// e registra quando ela é chamada e qual foi o resultado.

function addLogging(fn) {
  return function (...args) {
    console.log(`  Chamando ${fn.name} com argumentos:`, args);
    const resultado = fn(...args);
    console.log(`  Resultado:`, resultado);
    return resultado;
  };
}

const somar = (a, b) => a + b;
const somarComLog = addLogging(somar);

// Testando:
console.log("Exercício 10 - Execução com log:");
somarComLog(5, 3);

// ==========================================
// RESUMO DE CONCEITOS
// ==========================================
// 1. Callbacks e Higher-Order Functions (exercício 1)
// 2. Composição de funções (exercício 2)
// 3. Currying (exercício 3)
// 4. Memoização (exercício 4)
// 5. Reduce avançado (exercício 5)
// 6. Encadeamento (exercício 6)
// 7. Efeitos colaterais controlados (exercício 7)
// 8. Abstração com callbacks (exercício 8)
// 9. Pipeline de transformações (exercício 9)
// 10. Middleware e decoradores (exercício 10)
