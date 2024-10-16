// Referências aos elementos
const inputTarefa = document.getElementById('nova-tarefa');
const btnAdicionar = document.getElementById('adicionar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const mensagemErro = document.getElementById('mensagem-erro');

// Função para adicionar nova tarefa
btnAdicionar.addEventListener('click', function () {
    const tarefaTexto = inputTarefa.value.trim(); // Remove espaços desnecessários

    if (tarefaTexto === '') {
        mensagemErro.textContent = 'Por favor, insira uma tarefa!';
        return;
    }

    // Limpa mensagem de erro
    mensagemErro.textContent = '';

    // Cria novo item de lista <li>
    const novaTarefa = document.createElement('li');

    // Define o texto da tarefa
    novaTarefa.textContent = tarefaTexto;

    // Adiciona evento para marcar tarefa como concluída
    novaTarefa.addEventListener('click', function () {
        novaTarefa.classList.toggle('concluida'); // Alterna a classe "concluida"
    });

    // Cria botão de remover tarefa
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.classList.add('remover-btn');

    // Adiciona evento para remover a tarefa
    btnRemover.addEventListener('click', function (e) {
        e.stopPropagation(); // Evita que o clique no botão remova e marque como concluída
        listaTarefas.removeChild(novaTarefa);
    });

    // Adiciona o botão ao item da tarefa
    novaTarefa.appendChild(btnRemover);

    // Adiciona o item de tarefa à lista de tarefas
    listaTarefas.appendChild(novaTarefa);

    // Limpa o campo de entrada de texto
    inputTarefa.value = '';
});