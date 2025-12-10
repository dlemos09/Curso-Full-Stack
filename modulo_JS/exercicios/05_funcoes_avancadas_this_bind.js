// ========================================
// AULA 05: Funções Avançadas e This/Bind
// Objetivo didático: Dominar o contexto de execução, manipulação de funções e padrões funcionais
// Por que importa: Manipulação de eventos, composição, otimização e reutilização de código
// Sequência: this → bind/call/apply → arrow → currying → debounce/throttle → compose/pipe
// ========================================

// =====================================================
// EXERCÍCIO 1 - BÁSICO
// ENUNCIADO:
// Demonstre como o this funciona em métodos de objetos e o que acontece ao perder o contexto.
// a) Crie um objeto calculadora com métodos que usam this
// b) Mostre o problema ao extrair um método e perder o contexto
// Explique cada passo com comentários.
// =====================================================

console.log("=== EXERCÍCIO 1: This em Diferentes Contextos ===");

// a) Objeto com métodos que usam this
const calculadora = {
  valor: 0,
  somar(n) {
    this.valor += n;
    return this.valor;
  },
  subtrair(n) {
    this.valor -= n;
    return this.valor;
  },
  resetar() {
    this.valor = 0;
    return this.valor;
  },
  obterValor() {
    return this.valor;
  },
};

console.log("Somar 10:", calculadora.somar(10)); // 10
console.log("Somar 5:", calculadora.somar(5)); // 15
console.log("Subtrair 3:", calculadora.subtrair(3)); // 12

// b) Problema: perder contexto ao extrair método
const somar = calculadora.somar;
// somar(5); // Erro! this é undefined em modo estrito

// =====================================================
// EXERCÍCIO 2 - BÁSICO
// ENUNCIADO:
// Mostre como usar bind para preservar o contexto de this em métodos e callbacks.
// a) Crie um objeto com métodos que usam this
// b) Use bind para garantir o contexto correto
// c) Demonstre bind com argumentos pré-definidos (partial application)
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 2: Bind ===");

const usuario = {
  nome: "Ana Silva",
  idade: 28,
  apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  },
  aniversario() {
    this.idade++;
    console.log(
      `Feliz aniversário ${this.nome}! Agora tem ${this.idade} anos.`
    );
  },
};

console.log(usuario.apresentar());

// b) Criar versão bound do método
const apresentarBound = usuario.apresentar.bind(usuario);
console.log("Bound:", apresentarBound()); // Funciona!

// c) Usar bind em callbacks (ex: setTimeout)
setTimeout(usuario.aniversario.bind(usuario), 100);

// d) Bind com argumentos pré-definidos (partial application)
function multiplicar(a, b) {
  return a * b;
}

const dobrar = multiplicar.bind(null, 2); // Fixa primeiro argumento
console.log("Dobrar 5:", dobrar(5)); // 10
console.log("Dobrar 8:", dobrar(8)); // 16

// =====================================================
// EXERCÍCIO 3 - INTERMEDIÁRIO
// ENUNCIADO:
// Demonstre o uso de call e apply para invocar funções com contexto e argumentos diferentes.
// a) Use call/apply para reutilizar métodos entre objetos
// b) Use call/apply para passar argumentos
// c) Mostre uso prático com Math.max
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 3: Call e Apply ===");

const pessoa1 = {
  nome: "Carlos",
  saudar() {
    return `Olá, sou ${this.nome}`;
  },
};

const pessoa2 = {
  nome: "Diana",
};

// a) Usar método de pessoa1 com contexto de pessoa2
console.log(pessoa1.saudar.call(pessoa2)); // "Olá, sou Diana"

// b) Call com argumentos
function apresentarCompleto(idade, cidade) {
  return `${this.nome}, ${idade} anos, de ${cidade}`;
}

console.log(apresentarCompleto.call({ nome: "Eduardo" }, 30, "São Paulo"));

// c) Apply (argumentos em array)
console.log(
  apresentarCompleto.apply({ nome: "Fernanda" }, [25, "Rio de Janeiro"])
);

// d) Uso prático: Math.max com array
const numeros = [5, 10, 3, 8, 15];
const maximo = Math.max.apply(null, numeros);
console.log("Máximo:", maximo);

// =====================================================
// EXERCÍCIO 4 - INTERMEDIÁRIO
// ENUNCIADO:
// Mostre como arrow functions capturam o this léxico e compare com funções tradicionais.
// a) Demonstre diferença de this em setTimeout usando função tradicional e arrow
// b) Use arrow em métodos de array para manter o contexto
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 4: Arrow Functions e This ===");

const contador = {
  count: 0,
  incrementarTradicional: function () {
    // This aponta para contador
    setTimeout(
      function () {
        this.count++; // This aqui seria global/undefined!
        console.log("Tradicional:", this.count);
      }.bind(this),
      100
    );
  },
  incrementarArrow: function () {
    // Arrow captura this do escopo externo
    setTimeout(() => {
      this.count++;
      console.log("Arrow:", this.count);
    }, 100);
  },
};

contador.incrementarArrow();

// b) Métodos de array com arrow
const tarefas = [
  { titulo: "Estudar JS", concluida: false },
  { titulo: "Fazer exercícios", concluida: true },
  { titulo: "Revisar conteúdo", concluida: false },
];

const gerenciador = {
  usuario: "Ana",
  listarPendentes() {
    // Arrow mantém this do gerenciador
    return tarefas
      .filter((t) => !t.concluida)
      .map((t) => `${this.usuario}: ${t.titulo}`);
  },
};

setTimeout(() => {
  console.log("Pendentes:", gerenciador.listarPendentes());
}, 200);

// =====================================================
// EXERCÍCIO 5 - AVANÇADO
// ENUNCIADO:
// Demonstre currying: transformar funções de múltiplos argumentos em funções encadeadas.
// a) Implemente currying manualmente
// b) Implemente com arrow functions
// c) Crie uma função curry genérica
// d) Mostre uso prático para criar funções especializadas
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 5: Currying ===");

// a) Currying manual
function somarCurried(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log("Currying manual:", somarCurried(1)(2)(3)); // 6

// b) Arrow syntax (mais limpo)
const multiplicarCurried = (a) => (b) => (c) => a * b * c;
console.log("Currying arrow:", multiplicarCurried(2)(3)(4)); // 24

// c) Função curry genérica
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

// d) Aplicar curry
function calcular(a, b, c) {
  return (a + b) * c;
}

const calcularCurried = curry(calcular);
console.log("Curry genérico:", calcularCurried(2)(3)(4)); // 20
console.log("Curry parcial:", calcularCurried(2, 3)(4)); // 20
console.log("Curry completo:", calcularCurried(2, 3, 4)); // 20

// e) Uso prático: criar funções especializadas
const adicionar = (a, b) => a + b;
const adicionarCurried = curry(adicionar);
const adicionar10 = adicionarCurried(10);

console.log("Adicionar 10 a 5:", adicionar10(5)); // 15
console.log("Adicionar 10 a 20:", adicionar10(20)); // 30

// =====================================================
// EXERCÍCIO 6 - AVANÇADO
// ENUNCIADO:
// Implemente debounce para atrasar a execução de funções até uma pausa.
// a) Crie uma função debounce
// b) Simule busca enquanto digita
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 6: Debounce ===");

function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// b) Simular busca enquanto usuário digita
function buscarAPI(termo) {
  console.log(`🔍 Buscando por: "${termo}"`);
}

const buscaDebounced = debounce(buscarAPI, 500);

// Simular digitação rápida
console.log("Simulando digitação...");
buscaDebounced("j");
buscaDebounced("ja");
buscaDebounced("jav");
buscaDebounced("java");
buscaDebounced("javasc");
buscaDebounced("javascript"); // Apenas esta executa após 500ms

// =====================================================
// EXERCÍCIO 7 - AVANÇADO
// ENUNCIADO:
// Implemente throttle para limitar a frequência de execução de funções.
// a) Crie uma função throttle
// b) Simule evento de scroll contínuo
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 7: Throttle ===");

function throttle(func, limit) {
  let inThrottle;

  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// b) Simular evento de scroll
function onScroll(posicao) {
  console.log(`📜 Scroll na posição: ${posicao}`);
}

const scrollThrottled = throttle(onScroll, 1000);

// Simular scroll contínuo
let pos = 0;
const interval = setInterval(() => {
  pos += 10;
  scrollThrottled(pos);

  if (pos >= 50) {
    clearInterval(interval);
  }
}, 100); // A cada 100ms, mas throttle permite apenas a cada 1000ms

// =====================================================
// EXERCÍCIO 8 - AVANÇADO
// ENUNCIADO:
// Implemente compose e pipe para combinar funções pequenas em pipelines.
// a) Crie funções compose e pipe
// b) Mostre uso com funções matemáticas e de texto
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 8: Compose e Pipe ===");

// a) Compose: executa da direita para esquerda
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((v, f) => f(v), x);

// b) Pipe: executa da esquerda para direita
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

// Funções simples
const adicionar3 = (x) => x + 3;
const multiplicar2 = (x) => x * 2;
const subtrair5 = (x) => x - 5;

// Compose
const processar1 = compose(subtrair5, multiplicar2, adicionar3);
console.log("Compose(10):", processar1(10)); // (10+3)*2-5 = 21

// Pipe (mais intuitivo)
const processar2 = pipe(adicionar3, multiplicar2, subtrair5);
console.log("Pipe(10):", processar2(10)); // (10+3)*2-5 = 21

// Aplicação prática: processar texto
const trim = (str) => str.trim();
const uppercase = (str) => str.toUpperCase();
const addExclamation = (str) => `${str}!`;
const addPrefix = (str) => `>>> ${str}`;

const formatarMensagem = pipe(trim, uppercase, addExclamation, addPrefix);

console.log(formatarMensagem("  olá mundo  "));
// ">>> OLÁ MUNDO!"

// =====================================================
// EXERCÍCIO 9 - APLICAÇÃO REAL
// ENUNCIADO:
// Implemente um sistema de busca otimizada usando debounce.
// a) Crie uma classe SearchEngine simulando busca em banco de dados
// b) Use debounce para otimizar buscas enquanto digita
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 9: Sistema de Busca ===");

class SearchEngine {
  constructor() {
    this.database = [
      "JavaScript",
      "Java",
      "Python",
      "TypeScript",
      "Ruby",
      "Go",
      "Rust",
      "C++",
      "C#",
      "PHP",
    ];

    this.resultados = [];
    this.buscaEmAndamento = false;
  }

  buscar(termo) {
    if (!termo || termo.length < 2) {
      this.resultados = [];
      return [];
    }

    console.log(`🔍 Buscando: "${termo}"`);
    this.buscaEmAndamento = true;

    // Simular delay de API
    setTimeout(() => {
      this.resultados = this.database.filter((item) =>
        item.toLowerCase().includes(termo.toLowerCase())
      );
      this.buscaEmAndamento = false;
      console.log(`✅ Encontrado: ${this.resultados.length} resultado(s)`);
      console.log(`   ${this.resultados.join(", ")}`);
    }, 300);

    return this.resultados;
  }
}

const searchEngine = new SearchEngine();
const buscaOtimizada = debounce((termo) => searchEngine.buscar(termo), 500);

// Simular digitação
setTimeout(() => {
  console.log("\n--- Iniciando busca simulada ---");
  buscaOtimizada("j");
  buscaOtimizada("ja");
  buscaOtimizada("jav");
  buscaOtimizada("java");
  // Apenas "java" será executado após 500ms de pausa
}, 2000);

setTimeout(() => {
  console.log("\n✅ Exercícios de Funções Avançadas e This/Bind concluídos!");
}, 4000);
