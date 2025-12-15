// Array simples para armazenar apenas os nomes (sem objetos)
const nomes = [];

// Seleciona elementos do DOM que usaremos várias vezes
const form = document.getElementById("form-cadastro");
const inputNome = document.getElementById("nome");
const lista = document.getElementById("lista-nomes");
const contador = document.getElementById("contador");
const botaoLimpar = document.getElementById("limpar");

// Função principal: cadastra o nome quando o formulário é enviado
function cadastrarNome(event) {
  // Evita que a página recarregue ao submeter o form
  event.preventDefault();

  // Pega o valor do input e remove espaços nas extremidades
  const nome = inputNome.value.trim();

  // Validação simples: não permite nome vazio
  if (nome === "") {
    // alerta simples para manter didática (poderia mostrar mensagem na tela)
    alert("Por favor, digite um nome antes de cadastrar.");
    // focus(): move o cursor/foco para o campo input para o usuário digitar novamente
    // É uma experiência melhor que deixar o usuário procurando onde digitar
    inputNome.focus();
    return;
  }

  // Adiciona o nome ao array
  nomes.push(nome);

  // Atualiza a tela: adiciona apenas o novo item ao DOM (sem usar loops)
  adicionarNomeNaTela(nome);

  // Atualiza contador informativo
  atualizarContador();

  // Limpa o campo e mantém o foco para cadastrar outro rapidamente
  inputNome.value = "";
  // focus(): retorna o cursor para o input para facilitar próximo cadastro
  inputNome.focus();
}

// Função auxiliar: cria um <li> e adiciona à lista no DOM
function adicionarNomeNaTela(nome) {
  const li = document.createElement("li");
  li.textContent = nome;
  // anexa no final da lista; NÃO re-renderizamos a lista inteira (didático)
  lista.appendChild(li);
}

// Função para atualizar o texto do contador com base no tamanho do array
function atualizarContador() {
  // .length: propriedade que retorna a quantidade de elementos no array
  // É usada para: contar itens, validar se está vazio, ou exibir total
  const total = nomes.length;

  if (total === 0) {
    contador.textContent = "Nenhum usuário cadastrado.";
  } else if (total === 1) {
    contador.textContent = "1 usuário cadastrado.";
  } else {
    contador.textContent = total + " usuários cadastrados.";
  }
}

// Função limpa: esvazia o array e limpa a lista no DOM
function limparLista() {
  // .length = 0: esvaziando o array
  // Quando você atribui 0 a .length, todos os elementos são removidos
  // Alternativa: nomes = [] (mas isso cria novo array, não limpa o antigo)
  nomes.length = 0;

  // limpar elementos filhos da lista no DOM
  // enquanto houver primeiro filho, remove — sem usar for
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  atualizarContador();
  // focus(): retorna foco ao input para permitir novo cadastro
  inputNome.focus();
}

// Adiciona os listeners para o formulário e botão limpar
form.addEventListener("submit", cadastrarNome);
botaoLimpar.addEventListener("click", limparLista);

// Inicializa contador (útil se a página carregar com nomes previamente)
atualizarContador();
