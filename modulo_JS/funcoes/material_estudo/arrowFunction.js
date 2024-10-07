// Função anônima
let saudacao = function (nome) {
    return "Olá, " + nome + "!";
};

// Arrow function
let saudacaoArrow = (nome) => "Olá, " + nome + "!";

console.log(saudacao("Pedro")); // Olá, Pedro!
console.log(saudacaoArrow("Ana")); // Olá, Ana!


//Arrow Functions (ES6) são uma sintaxe mais curta para escrever funções.
//Funções anônimas não têm nome e são frequentemente usadas como callbacks.