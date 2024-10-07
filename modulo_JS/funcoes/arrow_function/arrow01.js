// Arrow functions são uma maneira mais concisa de escrever funções em JavaScript. Introduzidas no ES6 (ECMAScript 2015), elas têm uma sintaxe mais compacta e oferecem comportamentos especiais, como o tratamento do this.


// Sintaxe básica de uma arrow function:

const nomeFuncao = (param1, param2) => {
    // corpo da função
    return param1 + param2;
};

// Diferença entre Function Declaration, Function Expression e Arrow Function

// Function Declaration

function soma(a, b) {
    return a + b;
};
soma(a, b);


function saudacao(nome) {
    return `Olá, ${nome}!`;
  }
  

// Function Expression:

const soma2 = function (a, b) {
    return a + b;
};

//   Arrow Function:

const soma3 = (a, b) => {
    return a + b;
};

const saudacao = (nome) => `Olá, ${nome}!`;


// A arrow function pode ser ainda mais simplificada quando:

// Há apenas um parâmetro: você pode omitir os parênteses.
// O corpo da função contém uma única linha de código: você pode omitir as chaves {} e o return.

//HOISTING!

// Funções declaradas com arrow functions são atribuídas a variáveis e não são elevadas. Portanto, elas só podem ser chamadas após a linha em que são definidas.

console.log(saudacao("João"));  // Funciona
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("João"));  // Erro: saudacao is not defined
const saudacao = (nome) => `Olá, ${nome}!`;

// Função tradicional:
const dobrar = function (x) {
    return x * 2;
};

// Arrow function
const dobrar2 = x => x * 2;


// Como redeclarar função usando arrow function

// Function Expression com vários parâmetros e várias linhas:

const saudacao = function (nome, idade) {
    console.log("Olá, " + nome);
    console.log("Você tem " + idade + " anos.");
};

// Transformação em Arrow Function:
const saudacao2 = (nome, idade) => {
    console.log("Olá, " + nome);
    console.log("Você tem " + idade + " anos.");
};

// Function Expression com um parâmetro e uma linha de retorno:
const quadrado = function (n) {
    return n * n;
};

// Transformação em Arrow Function (mais concisa):
const quadrado2 = n => n * n;


// conclusão

// As arrow functions são uma ferramenta poderosa para escrever código de forma concisa e simplificada.
// Elas são especialmente úteis em callbacks, métodos de array, e onde o comportamento do this precisa ser previsível.


