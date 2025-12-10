/*
SOLUÇÕES - DESAFIOS PRÁTICOS
Problemas Reais e Contextualizados
-------------------------------------
Todas as respostas com explicações detalhadas
*/

// ==========================================
// DESAFIO 1 - Validador de CPF
// ==========================================
// SOLUÇÃO:

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

console.log("Desafio 1 - CPF válido:", validarCPF("123.456.789-09"));
console.log("Desafio 1 - CPF inválido:", validarCPF("111.111.111-11"));
console.log("Desafio 1 - CPF inválido:", validarCPF("12345"));

// EXPLICAÇÃO:
// - /\D/g: regex que encontra tudo que NÃO é dígito
// - replace(): remove caracteres especiais
// - /^(\d)\1{10}$/: regex que detecta sequências repetidas
//   - (\d): captura um dígito
//   - \1{10}: se repetir 10 vezes = 11 dígitos iguais
// - Validação básica (para validação completa, seria necessário algoritmo específico)

// ==========================================
// DESAFIO 2 - Conversor de Temperatura
// ==========================================
// SOLUÇÃO:

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

const c_para_f = celsius_para("F");
const c_para_k = celsius_para("K");

console.log("Desafio 2 - 0°C para Fahrenheit:", c_para_f(0).toFixed(2));
console.log("Desafio 2 - 0°C para Kelvin:", c_para_k(0).toFixed(2));

// EXPLICAÇÃO:
// - Currying: primeira função retorna função
// - celsius_para('F'): retorna conversor de Celsius para Fahrenheit
// - Fórmulas:
//   - °F = (°C * 9/5) + 32
//   - K = °C + 273.15

// ==========================================
// DESAFIO 3 - Análise de Frequência de Palavras
// ==========================================
// SOLUÇÃO:

function analisarFrequencia(texto) {
  if (!texto) return {};

  const palavras = texto
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter((p) => p.length > 0);

  const frequencia = {};
  palavras.forEach((palavra) => {
    frequencia[palavra] = (frequencia[palavra] || 0) + 1;
  });

  return Object.entries(frequencia)
    .sort((a, b) => b[1] - a[1])
    .reduce((obj, [palavra, count]) => {
      obj[palavra] = count;
      return obj;
    }, {});
}

const texto =
  "JavaScript é ótimo. JavaScript é versátil. JavaScript é poderoso.";
console.log("Desafio 3 - Frequência:", analisarFrequencia(texto));

// EXPLICAÇÃO:
// - toLowerCase(): converte para minúsculas
// - /[^\w\s]/g: remove pontuação (tudo que não é letra/número/espaço)
// - split(/\s+/): divide por espaços (qualquer quantidade)
// - filter: remove strings vazias
// - Object.entries(): converte objeto em array [chave, valor]
// - sort: ordena por frequência (decrescente)
// - reduce: reconverte em objeto ordenado

// ==========================================
// DESAFIO 4 - Calculadora de Média Ponderada
// ==========================================
// SOLUÇÃO:

function calcularMediaPonderada(avaliacoes) {
  if (!avaliacoes || avaliacoes.length === 0) return 0;

  const somaNotas = avaliacoes.reduce((sum, a) => sum + a.nota * a.peso, 0);
  const somaPesos = avaliacoes.reduce((sum, a) => sum + a.peso, 0);

  return somaPesos === 0 ? 0 : (somaNotas / somaPesos).toFixed(2);
}

const notas = [
  { nota: 8, peso: 2 },
  { nota: 9, peso: 3 },
  { nota: 7, peso: 1 },
];

console.log("Desafio 4 - Média ponderada:", calcularMediaPonderada(notas));

// EXPLICAÇÃO:
// - Fórmula: soma(nota * peso) / soma(pesos)
// - reduce: acumula produto de nota × peso
// - reduce: acumula soma de pesos
// - Resultado: (8*2 + 9*3 + 7*1) / (2+3+1) = 50/6 = 8.33

// ==========================================
// DESAFIO 5 - Gerador de Senhas Seguras
// ==========================================
// SOLUÇÃO:

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

console.log("Desafio 5 - Senha gerada:", gerarSenhaSegura(16));

// EXPLICAÇÃO:
// - Combina 4 conjuntos de caracteres
// - Math.random(): número entre 0 e 1
// - Math.floor(): arredonda para baixo
// - charAt(): obtém caractere na posição
// - Loop: repete tamanho vezes
// - Resultado: senha com mix de tipos

// ==========================================
// DESAFIO 6 - Contador com Limite (Closure)
// ==========================================
// SOLUÇÃO:

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

const contador = criarContagemCircular(5);
console.log("Desafio 6 - Incrementar:", contador.incrementar());
console.log("Desafio 6 - Incrementar:", contador.incrementar());
console.log(
  "Desafio 6 - Incrementar x4:",
  [1, 2, 3, 4].map(() => contador.incrementar())
);
console.log("Desafio 6 - Atual:", contador.obter());

// EXPLICAÇÃO:
// - Closure: contador é privado dentro da função
// - % (módulo): retorna resto (garante volta a 0)
// - Objeto com múltiplos métodos compartilhando estado
// - Padrão: encapsulamento com closure

// ==========================================
// DESAFIO 7 - Organizador de Eventos (Pub/Sub)
// ==========================================
// SOLUÇÃO:

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

const emitter = criarEventEmitter();

const logger = (dados) => console.log("  [Log]", dados);
const alertador = (dados) => console.log("  [Alerta]", dados);

emitter.on("usuario:criado", logger);
emitter.on("usuario:criado", alertador);

console.log("Desafio 7 - Emitindo evento:");
emitter.emit("usuario:criado", { id: 1, nome: "João" });

// EXPLICAÇÃO:
// - Observer Pattern: múltiplos listeners para um evento
// - on(): registra listener
// - emit(): chama todos os listeners
// - off(): remove listener
// - listeners: objeto privado armazenando arrays de callbacks

// ==========================================
// DESAFIO 8 - Debounce
// ==========================================
// SOLUÇÃO:

function debounce(fn, delay = 300) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

const buscar = (termo) => console.log(`  Buscando: "${termo}"`);
const buscarDebounce = debounce(buscar, 500);

console.log("Desafio 8 - Debounce (vê apenas última chamada):");
buscarDebounce("java");
buscarDebounce("jav");
buscarDebounce("javascript");

// EXPLICAÇÃO:
// - Debounce: atrasa execução, cancela se chamada novamente
// - clearTimeout(): cancela timer anterior
// - setTimeout(): agenda novo timer
// - ...args: passa argumentos para função
// - Útil para: campo de busca, redimensionamento, etc

// ==========================================
// DESAFIO 9 - Conversão de Números Romanos
// ==========================================
// SOLUÇÃO:

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

console.log("Desafio 9 - 1994 em Romano:", converterParaRomano(1994));
console.log("Desafio 9 - 58 em Romano:", converterParaRomano(58));

// EXPLICAÇÃO:
// - Abordagem greedy: começa pelos maiores valores
// - While: enquanto número >= valor, adiciona romano
// - Destructuring: const {valor, romano: r}
// - Exemplo: 1994 = 1000 + 900 + 90 + 4 = M + CM + XC + IV

// ==========================================
// DESAFIO 10 - Jogo de Adivinhação
// ==========================================
// SOLUÇÃO:

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

console.log("Desafio 10 - Jogo criado (teste manual no console)");

// EXPLICAÇÃO:
// - Closure: numeroSecreto e tentativas são privados
// - Math.floor(Math.random() * 100) + 1: número entre 1-100
// - Retorna objeto com métodos adivinhar() e dica()
// - Compara palpite e retorna feedback

// ==========================================
// TÉCNICAS MAIS IMPORTANTES NESTA SEÇÃO
// ==========================================
// 1. Regex:         validação e processamento de strings
// 2. Currying:      conversores reutilizáveis
// 3. Frequência:    contagem e agregação
// 4. Reduce:        acumulação de valores
// 5. Aleatório:     Math.random() e geradores
// 6. Closure:       estado privado
// 7. Observer:      padrão de publicação/subscrição
// 8. Timing:        setTimeout e clearTimeout
// 9. Algoritmo:     lógica passo a passo
// 10. Encapsulação: dados e métodos juntos
