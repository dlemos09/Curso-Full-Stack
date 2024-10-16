// Seleciona os elementos HTML que serão manipulados no código
const inputValorDoSaque = document.getElementById('inputValorDoSaque');  // Campo de entrada do valor do saque
const btnSaque = document.getElementById('btnSaque');  // Botão para realizar o saque
const outNotasDe100 = document.getElementById('outNotasDe100');  // Elemento para exibir a quantidade de notas de R$100
const outNotasDe50 = document.getElementById('outNotasDe50');  // Elemento para exibir a quantidade de notas de R$50
const outNotasDe10 = document.getElementById('outNotasDe10');  // Elemento para exibir a quantidade de notas de R$10

/**
 * Função para calcular a quantidade de notas que serão entregues com base no valor do saque.
 */
function calcularSaque() {

    // Converte o valor inserido no input para um número
    let valorDoSaque = Number(inputValorDoSaque.value);

    // Calcula a quantidade de notas de R$100
    let numeroDeNotas100 = Math.floor(valorDoSaque / 100);  // Divide o valor por 100 e arredonda para baixo
    let restanteDe100 = valorDoSaque % 100;  // Calcula o valor restante após retirar as notas de R$100

    // Calcula a quantidade de notas de R$50
    let numeroDeNotas50 = Math.floor(restanteDe100 / 50);  // Divide o restante por 50 e arredonda para baixo
    let restanteDe50 = restanteDe100 % 50;  // Calcula o valor restante após retirar as notas de R$50

    // Calcula a quantidade de notas de R$10
    let numeroDeNotas10 = Math.floor(restanteDe50 / 10);  // Divide o restante por 10 e arredonda para baixo

    // Verifica se o valor do input é válido
    if ((inputValorDoSaque.value == 0 || inputValorDoSaque.value == '') || isNaN(valorDoSaque)) {
        alert('Digite o valor á sacar !');  // Alerta caso o valor seja 0, vazio ou não seja um número
        inputValorDoSaque.focus();  // Foca novamente no campo de entrada
        return;  // Interrompe a execução da função
    }
    // Verifica se o valor do saque é múltiplo de 10
    else if (valorDoSaque % 10 !== 0) {
        alert('Esse caixa só possui notas de R$10, R$50 e R$100 !');  // Alerta caso o valor não seja múltiplo de 10
        inputValorDoSaque.value = '';  // Limpa o campo de entrada
        inputValorDoSaque.focus();  // Foca novamente no campo de entrada
        return;  // Interrompe a execução da função
    }
    // Exibe a quantidade de notas necessárias
    else {
        outNotasDe100.textContent = `Notas de R$100: ${numeroDeNotas100}`;  // Exibe o número de notas de R$100
        outNotasDe50.textContent = `Notas de R$50: ${numeroDeNotas50}`;  // Exibe o número de notas de R$50
        outNotasDe10.textContent = `Notas de R$10: ${numeroDeNotas10}`;  // Exibe o número de notas de R$10
    }
}

// Adiciona um evento de clique no botão de saque que chama a função 'calcularSaque'
btnSaque.addEventListener('click', calcularSaque);
