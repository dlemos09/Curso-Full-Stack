// Seleciona os elementos HTML que serão manipulados no código
const inputPaciente = document.getElementById('inputPaciente');
const btnConsulta = document.getElementById('btnConsulta');
const btnUrgencia = document.getElementById('btnUrgencia');
const btnAtender = document.getElementById('btnAtender');
const pacienteEmAtendimento = document.getElementById('pacienteEmAtendimento');
const outConsulta = document.getElementById('outConsulta');

// Inicializa uma lista para armazenar os pacientes
let todosPacientes = [];

/**
 * Função que adiciona um paciente à fila de consultas normais
 * O paciente é inserido no final da lista de pacientes.
 */
function marcarConsulta() {
    // Captura o valor digitado no campo de texto
    let nomePaciente = inputPaciente.value;

    // Verifica se o campo de nome está vazio
    if (nomePaciente == '') {
        alert('Digite seu nome !');  // Exibe um alerta se o campo estiver vazio
        inputPaciente.focus();  // Coloca o foco de volta no campo de texto
        return;  // Interrompe a execução da função
    }

    // Adiciona o nome do paciente à lista de pacientes
    todosPacientes.push(nomePaciente);
    
    // Cria uma string contendo a lista de todos os pacientes na fila
    let lista = '';
    for (let index = 0; index < todosPacientes.length; index++) {
        lista += `${(index + 1)}. ${todosPacientes[index]}\n`;  // Formata a lista com números de posição
    }

    // Atualiza o campo de saída para exibir a lista de pacientes
    outConsulta.textContent = lista;

    // Limpa o campo de texto e coloca o foco nele novamente
    inputPaciente.value = '';
    inputPaciente.focus();
}

// Associa a função 'marcarConsulta' ao clique no botão de marcar consulta
btnConsulta.addEventListener('click', marcarConsulta);

/**
 * Função que adiciona um paciente à fila como prioritário (urgência)
 * O paciente é inserido no início da lista.
 */
function atendimentoPrioritario() {
    // Captura o valor digitado no campo de texto
    let nomePaciente = inputPaciente.value;

    // Verifica se o campo de nome está vazio
    if (nomePaciente == '') {
        alert('Digite seu nome !');  // Exibe um alerta se o campo estiver vazio
        inputPaciente.focus();  // Coloca o foco de volta no campo de texto
        return;  // Interrompe a execução da função
    }

    // Adiciona o nome do paciente ao início da lista (prioridade)
    todosPacientes.unshift(nomePaciente);
    
    // Cria uma string contendo a lista atualizada de pacientes
    let lista = '';
    for (let index = 0; index < todosPacientes.length; index++) {
        lista += `${(index + 1)}. ${todosPacientes[index]}\n`;  // Formata a lista com números de posição
    }

    // Atualiza o campo de saída para exibir a lista de pacientes
    outConsulta.textContent = lista;

    // Limpa o campo de texto e coloca o foco nele novamente
    inputPaciente.value = '';
    inputPaciente.focus();
}

// Associa a função 'atendimentoPrioritario' ao clique no botão de atendimento prioritário
btnUrgencia.addEventListener('click', atendimentoPrioritario);

/**
 * Função que remove o primeiro paciente da fila para atendimento
 * O paciente é removido da lista e mostrado como "Em Atendimento".
 */
function atenderPaciente() {
    // Verifica se há pacientes na lista
    if (todosPacientes.length == 0) {
        alert('Não há pacientes para atender !');  // Exibe um alerta se a lista estiver vazia
        inputPaciente.focus();  // Coloca o foco de volta no campo de texto
        return;  // Interrompe a execução da função
    }

    // Remove o primeiro paciente da lista e guarda seu nome
    let atender = todosPacientes.shift();
    
    // Exibe o nome do paciente que está em atendimento
    pacienteEmAtendimento.textContent = atender;
    
    // Cria uma string com a lista atualizada de pacientes
    let lista = '';
    for (let index = 0; index < todosPacientes.length; index++) {
        lista += `${(index + 1)}. ${todosPacientes[index]}\n`;  // Formata a lista com números de posição
    }

    // Atualiza o campo de saída para exibir a lista atualizada de pacientes
    outConsulta.innerHTML = lista;
}

// Associa a função 'atenderPaciente' ao clique no botão de atendimento
btnAtender.addEventListener('click', atenderPaciente);
