// Obtém referências para os elementos do HTML pelos seus IDs
const inputFilme = document.getElementById('inputFilme'); // Campo de entrada para o nome do filme
const inputTempo = document.getElementById('inputTempo'); // Campo de entrada para o tempo do filme (em minutos)
const btnConverter = document.getElementById('btnConverter'); // Botão para acionar a conversão
const outFilme = document.getElementById('outFilme'); // Área para exibir o nome do filme
const outTempo = document.getElementById('outTempo'); // Área para exibir o tempo convertido (em horas e minutos)

// Função que realiza a conversão do tempo de minutos para horas e minutos
function converterTempo() {
    
    // Captura o valor digitado no campo de nome do filme
    let nomeDoFilme = inputFilme.value;

    // Captura o valor do tempo digitado e converte para um número (minutos)
    let tempoDoFilme = Number(inputTempo.value);

    // Calcula a quantidade de horas dividindo o tempo por 60 e arredondando para baixo (ignora os minutos restantes)
    let horasDeDuração = Math.floor(tempoDoFilme / 60);

    // Calcula os minutos restantes utilizando o operador de módulo (%) para obter o resto da divisão
    let minutosDeDuração = tempoDoFilme % 60;

    // Exibe o nome do filme no elemento 'outFilme'
    outFilme.textContent = nomeDoFilme;

    // Exibe a duração convertida (horas e minutos) no elemento 'outTempo'
    outTempo.textContent = `${horasDeDuração} hora(s) e ${minutosDeDuração} minuto(s)`;
}

// Adiciona um evento 'click' ao botão. Quando clicado, chama a função 'converterTempo'
btnConverter.addEventListener('click', converterTempo);
