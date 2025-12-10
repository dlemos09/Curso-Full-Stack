/*
EXERCÍCIOS DE FUNÇÕES - Desafios Práticos
Contexto: Aplicações Reais e Situações do Dia a Dia
-------------------------------------
Objetivo: Resolver problemas usando combinação de conceitos.
*/

// ==========================================
// DESAFIO 1 - Validador de CPF
// ==========================================
// Enunciado:
// Crie uma função que valide CPF (formato: 123.456.789-09).
// Dica: Verificar se tem 11 dígitos e padrão básico de formato.

function validarCPF(cpf) {
  if (!cpf) return false;

  // Remove caracteres não numéricos
  const numeros = cpf.replace(/\D/g, "");

  // Verifica se tem 11 dígitos
  if (numeros.length !== 11) return false;

  // Rejeita sequências repetidas (111.111.111-11, etc)
  if (/^(\d)\1{10}$/.test(numeros)) return false;

  return true;
}

// Testando:
console.log("Desafio 1 - CPF válido:", validarCPF("123.456.789-09")); // Esperado: true
console.log("Desafio 1 - CPF inválido:", validarCPF("111.111.111-11")); // Esperado: false
console.log("Desafio 1 - CPF inválido:", validarCPF("12345")); // Esperado: false

// ==========================================
// DESAFIO 2 - Conversor de Temperatura
// ==========================================
// Enunciado:
// Crie funções para converter entre Celsius, Fahrenheit e Kelvin.
// Use currying para criar conversores rápidos.

const celsius_para = (destino) => (temp) => {
  if (destino === "F") return (temp * 9) / 5 + 32;
  if (destino === "K") return temp + 273.15;
  return temp;
};

const fahrenheit_para = (destino) => (temp) => {
  if (destino === "C") return ((temp - 32) * 5) / 9;
  if (destino === "K") return ((temp - 32) * 5) / 9 + 273.15;
  return temp;
};

// Testando:
const c_para_f = celsius_para("F");
const c_para_k = celsius_para("K");

console.log("Desafio 2 - 0°C para Fahrenheit:", c_para_f(0).toFixed(2)); // Esperado: 32.00
console.log("Desafio 2 - 0°C para Kelvin:", c_para_k(0).toFixed(2)); // Esperado: 273.15

// ==========================================
// DESAFIO 3 - Análise de Frequência de Palavras
// ==========================================
// Enunciado:
// Dada um texto, conte a frequência de cada palavra.
// Retorne um objeto com palavras e suas contagens, ordenado pela frequência.

function analisarFrequencia(texto) {
  if (!texto) return {};

  const palavras = texto
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // Remove pontuação
    .split(/\s+/)
    .filter((p) => p.length > 0);

  const frequencia = {};
  palavras.forEach((palavra) => {
    frequencia[palavra] = (frequencia[palavra] || 0) + 1;
  });

  // Ordenar por frequência (maior primeiro)
  return Object.entries(frequencia)
    .sort((a, b) => b[1] - a[1])
    .reduce((obj, [palavra, count]) => {
      obj[palavra] = count;
      return obj;
    }, {});
}

// Testando:
const texto =
  "JavaScript é ótimo. JavaScript é versátil. JavaScript é poderoso.";
console.log("Desafio 3 - Frequência:", analisarFrequencia(texto));
// Esperado: {javascript: 3, é: 3, ótimo: 1, versátil: 1, poderoso: 1}

// ==========================================
// DESAFIO 4 - Calculadora de Média com Pesos
// ==========================================
// Enunciado:
// Crie uma função que calcule média ponderada.
// Receba array de {nota, peso} e retorne média.

function calcularMediaPonderada(avaliacoes) {
  if (!avaliacoes || avaliacoes.length === 0) return 0;

  const somaNotas = avaliacoes.reduce((sum, a) => sum + a.nota * a.peso, 0);
  const somaPesos = avaliacoes.reduce((sum, a) => sum + a.peso, 0);

  return somaPesos === 0 ? 0 : (somaNotas / somaPesos).toFixed(2);
}

// Testando:
const notas = [
  { nota: 8, peso: 2 },
  { nota: 9, peso: 3 },
  { nota: 7, peso: 1 },
];

console.log("Desafio 4 - Média ponderada:", calcularMediaPonderada(notas)); // Esperado: 8.33

// ==========================================
// DESAFIO 5 - Gerador de Senhas Seguras
// ==========================================
// Enunciado:
// Crie uma função que gere senha aleatória de tamanho especificado.
// Inclua maiúsculas, minúsculas, números e símbolos.

function gerarSenhaSegura(tamanho = 12) {
  const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const todos = maiusculas + minusculas + numeros + simbolos;
  let senha = "";

  for (let i = 0; i < tamanho; i++) {
    senha += todos.charAt(Math.floor(Math.random() * todos.length));
  }

  return senha;
}

// Testando:
console.log("Desafio 5 - Senha gerada:", gerarSenhaSegura(16));

// ==========================================
// DESAFIO 6 - Contador com Limite (Closure)
// ==========================================
// Enunciado:
// Crie uma função que retorne um contador com limite máximo.
// Incrementar volta a 0 quando atinge o limite.

function criarContagemCircular(limite = 10) {
  let contador = 0;
  return {
    incrementar() {
      contador = (contador + 1) % limite;
      return contador;
    },
    decrementar() {
      contador = (contador - 1 + limite) % limite;
      return contador;
    },
    obter() {
      return contador;
    },
    resetar() {
      contador = 0;
    },
  };
}

// Testando:
const contador = criarContagemCircular(5);
console.log("Desafio 6 - Incrementar:", contador.incrementar()); // 1
console.log("Desafio 6 - Incrementar:", contador.incrementar()); // 2
console.log(
  "Desafio 6 - Incrementar x4:",
  [1, 2, 3, 4].map(() => contador.incrementar())
); // volta a 1
console.log("Desafio 6 - Atual:", contador.obter()); // 1

// ==========================================
// DESAFIO 7 - Organizador de Eventos (Pub/Sub)
// ==========================================
// Enunciado:
// Crie um sistema simples de publicação/subscrição (Observer Pattern).

function criarEventEmitter() {
  const listeners = {};

  return {
    on(evento, callback) {
      if (!listeners[evento]) listeners[evento] = [];
      listeners[evento].push(callback);
    },
    emit(evento, dados) {
      if (!listeners[evento]) return;
      listeners[evento].forEach((callback) => callback(dados));
    },
    off(evento, callback) {
      if (!listeners[evento]) return;
      listeners[evento] = listeners[evento].filter((cb) => cb !== callback);
    },
  };
}

// Testando:
const emitter = criarEventEmitter();

const logger = (dados) => console.log("  [Log]", dados);
const alertador = (dados) => console.log("  [Alerta]", dados);

emitter.on("usuario:criado", logger);
emitter.on("usuario:criado", alertador);

console.log('Desafio 7 - Emitindo evento "usuario:criado":');
emitter.emit("usuario:criado", { id: 1, nome: "João" });

// ==========================================
// DESAFIO 8 - Debounce (Limitar Frequência de Chamadas)
// ==========================================
// Enunciado:
// Crie uma função 'debounce' que atrasa a execução de uma função.
// Útil para campos de busca (não buscar a cada tecla).

function debounce(fn, delay = 300) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

// Testando (simulado):
const buscar = (termo) => console.log(`  Buscando: "${termo}"`);
const buscarDebounce = debounce(buscar, 500);

console.log(
  "Desafio 8 - Chamando 3x com debounce (verá apenas 1 busca após 500ms):"
);
buscarDebounce("java");
buscarDebounce("jav");
buscarDebounce("javascript");
// Esperado: Após 500ms, apenas "javascript" será buscado

// ==========================================
// DESAFIO 9 - Conversão de Números Romanos
// ==========================================
// Enunciado:
// Crie uma função que converta número arábico para romano (ex: 1994 = MCMXCIV).

function converterParaRomano(numero) {
  const mapeamento = [
    { valor: 1000, romano: "M" },
    { valor: 900, romano: "CM" },
    { valor: 500, romano: "D" },
    { valor: 400, romano: "CD" },
    { valor: 100, romano: "C" },
    { valor: 90, romano: "XC" },
    { valor: 50, romano: "L" },
    { valor: 40, romano: "XL" },
    { valor: 10, romano: "X" },
    { valor: 9, romano: "IX" },
    { valor: 5, romano: "V" },
    { valor: 4, romano: "IV" },
    { valor: 1, romano: "I" },
  ];

  let romano = "";
  for (const { valor, romano: r } of mapeamento) {
    while (numero >= valor) {
      romano += r;
      numero -= valor;
    }
  }
  return romano;
}

// Testando:
console.log("Desafio 9 - 1994 em Romano:", converterParaRomano(1994)); // Esperado: MCMXCIV
console.log("Desafio 9 - 58 em Romano:", converterParaRomano(58)); // Esperado: LVIII

// ==========================================
// DESAFIO 10 - Jogo de Adivinhação
// ==========================================
// Enunciado:
// Crie um gerador de jogo onde:
// - Gera número aleatório entre 1-100
// - Função para adivinhar (retorna "maior", "menor" ou "acertou")
// - Conta tentativas

function criarJogoAdivinhacao() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;

  return {
    adivinhar(palpite) {
      tentativas++;
      if (palpite === numeroSecreto) {
        return { resultado: "acertou", tentativas };
      }
      if (palpite < numeroSecreto) {
        return { resultado: "maior" };
      }
      return { resultado: "menor" };
    },
    dica() {
      return `O número está entre ${Math.max(
        1,
        numeroSecreto - 10
      )} e ${Math.min(100, numeroSecreto + 10)}`;
    },
  };
}

// Testando (simulado):
console.log("Desafio 10 - Jogo criado (teste manual no console)");

// ==========================================
// RESUMO DE DESAFIOS
// ==========================================
// 1. Validação com regex (CPF)
// 2. Currying e conversão
// 3. String parsing e objeto aggregation
// 4. Cálculos ponderados com reduce
// 5. Geração aleatória
// 6. Closure e estado privado
// 7. Observer Pattern
// 8. Debounce (timing)
// 9. Algoritmo iterativo
// 10. Gerador de estado com closure
