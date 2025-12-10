//✅ 1. Arrow Function
const verificarParImpar = (numero) => {
  return numero % 2 === 0 ? "Par" : "Ímpar";
};

//✅ 2. Function Declaration
function verificarParImpar(numero) {
  return numero % 2 === 0 ? "Par" : "Ímpar";
}

//✅ 3. Function Expression
const verificarParImpar = function(numero) {
  return numero % 2 === 0 ? "Par" : "Ímpar";
};

// 3. Arrow Function
const dividir = (a, b) => {
  if (b === 0) return "Divisão por zero!";
  return a / b;
};

function dividir(a, b) {
  if (b === 0) return "Divisão por zero!";
  return a / b;
}

const dividir = function(a, b) {
  if (b === 0) return "Divisão por zero!";
  return a / b;
};