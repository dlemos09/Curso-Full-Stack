/*
SOLUÇÕES - EXERCÍCIOS DE FUNÇÕES AVANÇADAS
Contexto: Sistema de Loja Online com Carrinho
-------------------------------------
Todas as respostas com explicações detalhadas
*/

// ==========================================
// EXERCÍCIO 1 - Aplicar Operação com Callback
// ==========================================
// SOLUÇÃO:

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

console.log("Exercício 1 - Preço original: 100");
console.log("Com desconto de 10%:", aplicarOperacao(100, aplicarDesconto(10)));
console.log("Com taxa de 8%:", aplicarOperacao(100, aplicarTaxa(8)));
console.log(
  "Com juros 1% a.m. por 12 meses:",
  aplicarOperacao(100, aplicarJuros(1, 12))
);

// EXPLICAÇÃO:
// - Callback: função passada como parâmetro
// - aplicarOperacao: recebe função e aplica ao preço
// - Funções retornam funções (curry): primeiro parâmetro define operação
// - aplicarDesconto(10): retorna função que desconta 10%
// - aplicarJuros: usa Math.pow para juros compostos

// ==========================================
// EXERCÍCIO 2 - Composição de Funções
// ==========================================
// SOLUÇÃO:

function compor(fn1, fn2) {
  return (valor) => fn2(fn1(valor));
}

const duplicar = (x) => x * 2;
const elevarQuadrado = (x) => x * x;

const duplicarEElevar = compor(duplicar, elevarQuadrado);

console.log("Exercício 2 - Duplicar e elevar (5):", duplicarEElevar(5));

// EXPLICAÇÃO:
// - Composição: combinar duas funções
// - compor(fn1, fn2): retorna função que aplica fn1 depois fn2
// - Ordem importa: f(g(x)) ≠ g(f(x))
// - Exemplo: duplicarEElevar(5) = (5*2)² = 10² = 100

// ==========================================
// EXERCÍCIO 3 - Currying
// ==========================================
// SOLUÇÃO:

function somar_curried(a) {
  return (b) => {
    return (c) => a + b + c;
  };
}

console.log("Exercício 3 - Soma curried:", somar_curried(1)(2)(3));

// EXPLICAÇÃO:
// - Currying: converter função multi-argumento em sequência de funções
// - Cada nível retorna função esperando próximo argumento
// - somar_curried(1): retorna função esperando b
// - somar_curried(1)(2): retorna função esperando c
// - somar_curried(1)(2)(3): retorna resultado 6

// ==========================================
// EXERCÍCIO 4 - Memoização
// ==========================================
// SOLUÇÃO:

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

console.log("Exercício 4 - Fibonacci(5):", fibMemoizado(5));
console.log("Exercício 4 - Fibonacci(5) novamente:", fibMemoizado(5));

// EXPLICAÇÃO:
// - Memoização: cache de resultados anteriores
// - if (arg in cache): verifica se já foi calculado
// - cache[arg]: armazena resultado para futuro
// - Evita recálculos desnecessários
// - Melhora performance drasticamente

// ==========================================
// EXERCÍCIO 5 - Reduce com Função Callback
// ==========================================
// SOLUÇÃO:

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

console.log("Exercício 5 - Valor total:", valorTotal);
console.log("Exercício 5 - Produto mais caro:", produtoMaisCaro.nome);
console.log("Exercício 5 - Quantidade total:", quantidadeTotal);

// EXPLICAÇÃO:
// - reduce: acumula valor em um resultado
// - (acumulador, elemento) => novo_acumulador
// - Valor inicial: 0 ou {}
// - Exemplos:
//   - Soma: (total, item) => total + item
//   - Máximo: (max, item) => item > max ? item : max
//   - Contagem: (count, item) => count + item.quantidade

// ==========================================
// EXERCÍCIO 6 - Encadear Operações (Chaining)
// ==========================================
// SOLUÇÃO:

class CarrinhoCompras {
  constructor() {
    this.itens = [];
    this.desconto = 0;
  }

  adicionar(produto) {
    this.itens.push(produto);
    return this; // Retorna this para encadeamento
  }

  aplicarDesconto(percentual) {
    this.desconto = percentual;
    return this; // Retorna this para encadeamento
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

const meuCarrinho = new CarrinhoCompras()
  .adicionar({ nome: "Livro", preco: 50 })
  .adicionar({ nome: "Caneta", preco: 5 })
  .aplicarDesconto(10);

console.log("Exercício 6 - Carrinho:", meuCarrinho.obterResumo());

// EXPLICAÇÃO:
// - Chaining: cada método retorna this
// - Permite: obj.metodo1().metodo2().metodo3()
// - Mais legível e fluente
// - Padrão conhecido como "fluent interface"

// ==========================================
// EXERCÍCIO 7 - forEach com Efeito Colateral
// ==========================================
// SOLUÇÃO:

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

console.log("Exercício 7 - Antes:", pedidos.length);
produtosComprados.forEach(registrarPedido);
console.log("Exercício 7 - Depois:", pedidos.length);
console.log("Exercício 7 - Primeiro pedido:", pedidos[0]);

// EXPLICAÇÃO:
// - forEach: executa função para cada elemento
// - Diferença de map: forEach não retorna novo array
// - Usado para efeitos colaterais (salvar, imprimir, etc)
// - Não retorna valor

// ==========================================
// EXERCÍCIO 8 - Filter com Validação
// ==========================================
// SOLUÇÃO:

function filtrar(array, validacao) {
  return array.filter(validacao);
}

const precos = [10, 50, 100, 250, 30, 500];
const precosAltos = filtrar(precos, (preco) => preco > 100);

console.log("Exercício 8 - Preços > 100:", precosAltos);

// EXPLICAÇÃO:
// - Abstração: função genérica que filtra
// - Validação é callback (pode ser qualquer condição)
// - Maior flexibilidade e reutilização

// ==========================================
// EXERCÍCIO 9 - Map + Filter + Reduce (Pipeline)
// ==========================================
// SOLUÇÃO:

const transacoes = [
  { tipo: "venda", valor: 100 },
  { tipo: "desconto", valor: 20 },
  { tipo: "venda", valor: 150 },
  { tipo: "desconto", valor: 30 },
];

const saldo = transacoes
  .map((t) => (t.tipo === "venda" ? t.valor : -t.valor))
  .reduce((acc, val) => acc + val, 0);

console.log("Exercício 9 - Saldo final:", saldo);

// EXPLICAÇÃO:
// - Pipeline: encadear operações de transformação
// - Ordem: map (transformar) → reduce (agregar)
// - Funcional, imutável, declarativo
// - Fácil de rastrear e entender

// ==========================================
// EXERCÍCIO 10 - Middleware (Decorador de Função)
// ==========================================
// SOLUÇÃO:

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

console.log("Exercício 10 - Execução com log:");
somarComLog(5, 3);

// EXPLICAÇÃO:
// - Middleware: envolve função original adicionando funcionalidade
// - ...args: rest parameters (aceita qualquer número de argumentos)
// - fn.name: acessa nome da função
// - Padrão Decorador: adiciona comportamento sem modificar original
// - Útil para: logging, validação, timing, cache

// ==========================================
// COMPARATIVO: TÉCNICAS AVANÇADAS
// ==========================================

// CALLBACK:     função como parâmetro
// CURRYING:     múltiplos parâmetros em sequência
// COMPOSIÇÃO:   combinar funções
// MEMOIZAÇÃO:   cache de resultados
// ENCADEAMENTO: cada método retorna this
// PIPELINE:     sequência de transformações
// MIDDLEWARE:   envolve função adicionando comportamento

// ==========================================
// RESUMO DE TÉCNICAS USADAS
// ==========================================
// 1. Higher-Order Functions: funções que recebem/retornam funções
// 2. Callbacks: função como parâmetro
// 3. Closures: função que lembra do escopo
// 4. Currying: múltiplos níveis de função
// 5. Composição: combinar funções
// 6. Memoização: cache com closure
// 7. Chaining: retornar this para encadear
// 8. Reduce avançado: acumular valores
// 9. Pipeline: encadear transformações
// 10. Decoradores: envolver funções
