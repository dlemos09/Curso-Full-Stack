// Seleciona o campo de input e a lista de tarefas
const inputTarefa = document.getElementById('inputTarefa'); // Seleciona o input de onde o usuário digita a tarefa.
const listaTarefas = document.getElementsByClassName('listaTarefas')[0]; // Seleciona a primeira lista de tarefas (ul) pela classe 'listaTarefas'.

const btnClear = document.getElementById('btnClear');

// Função para adicionar tarefa na lista
function adicionarTarefa() {
    // Pega o valor do input
    const tarefa = inputTarefa.value.trim();
    // O método .trim() remove os espaços em branco no início e no fim da string.
    // Isso evita que o usuário adicione tarefas com apenas espaços.

    // Verifica se o input não está vazio
    if (tarefa !== "") {
        // Cria um novo item de lista (li)
        const li = document.createElement('li'); // Cria um elemento 'li' (item de lista) dinamicamente.
        li.textContent = tarefa; // Define o texto do 'li' com o valor digitado pelo usuário.

        //Função para remover uma tarefa por vez
        function removerTarefa(tarefa) {
            tarefa.remove(); // Remove o elemento <li> que foi clicado
        }

        li.addEventListener('click', function () {
            removerTarefa(li); // Chama a função que remove a tarefa ao clicar
        });


        // Adiciona o item na lista de tarefas
        listaTarefas.appendChild(li); // Adiciona o novo 'li' como um filho da lista de tarefas (ul).

        // Limpa o campo de input
        inputTarefa.value = ''; // Limpa o valor do input para que o usuário possa digitar outra tarefa.
    }
}

// Evento para detectar quando a tecla Enter for pressionada
inputTarefa.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') { // Verifica se a tecla pressionada é 'Enter'.
        adicionarTarefa(); // Se for, chama a função que adiciona a tarefa à lista.
    }
});

// Exemplo de uso de querySelectorAll: modifica o estilo de todos os itens de lista após a inserção de uma nova tarefa
inputTarefa.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') { // Verifica novamente se a tecla pressionada é 'Enter'.
        // Seleciona todos os itens de lista (li)
        const listaItens = document.querySelectorAll('li');
        // querySelectorAll seleciona todos os elementos 'li' (itens de lista) da página e retorna uma NodeList (similar a um array).

        // Altera o fundo de todos os itens da lista
        listaItens.forEach(function (item) { // forEach percorre todos os itens de lista (li) selecionados.
            item.style.backgroundColor = '#e0e0e0'; // Define a cor de fundo de cada item como cinza claro.
        });
    }
});

//Função de limpar todas as tarefas de uma vez
function limparTarefa() {
    listaTarefas.innerHTML = ''
}

//Evento chamando quando a função limparTarefa é acionada ao clicar no botão
btnClear.addEventListener('click', limparTarefa)

