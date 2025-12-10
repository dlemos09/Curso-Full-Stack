// ========================================
// AULA 08: DOM, Eventos e Manipulação de Página
// Objetivo didático: Dominar manipulação do DOM, eventos, acessibilidade e interatividade em páginas web
// Por que importa: Interfaces ricas, usabilidade, aplicações modernas
// Sequência: seleção → criação → eventos → delegação → formulários → acessibilidade → app completo
// ========================================

/*
NOTA: Estes exercícios são para ambiente navegador.
Para executar, crie um arquivo HTML que importe este script.

Exemplo HTML:
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exercícios DOM</title>
</head>
<body>
    <div id="app"></div>
    <script src="08_dom_eventos.js"></script>
</body>
</html>
*/

console.log("=== AULA 08: DOM e Eventos ===\n");

// =====================================================
// EXERCÍCIO 1 - BÁSICO
// ENUNCIADO:
// Demonstre como selecionar elementos do DOM usando diferentes métodos e seletores CSS.
// a) Selecione por ID, classe, tag, querySelector e querySelectorAll
// b) Mostre exemplos de seletores CSS úteis
// Explique cada passo com comentários.
// =====================================================

console.log("=== EXERCÍCIO 1: Seleção de Elementos ===");

// Código para navegador:
/*
// Seleção por ID
const header = document.getElementById('header');

// Seleção por classe
const botoes = document.getElementsByClassName('btn');

// Seleção por tag
const paragrafos = document.getElementsByTagName('p');

// querySelector (mais moderno e flexível)
const primeiroBotao = document.querySelector('.btn');
const todosBotoes = document.querySelectorAll('.btn');

// Seletores complexos (CSS)
const linkAtivo = document.querySelector('nav a.active');
const itensLista = document.querySelectorAll('ul.menu > li');
const inputTexto = document.querySelector('input[type="text"]');

// Verificar existência
if (header) {
    console.log("Header encontrado:", header);
}

// Iterar sobre NodeList
todosBotoes.forEach(btn => {
    console.log("Botão:", btn.textContent);
});
*/

const codigoSelecao = `
Principais métodos de seleção:

  getElementById('id')              // Mais rápido, retorna 1
  getElementsByClassName('class')   // Retorna HTMLCollection (live)
  getElementsByTagName('tag')       // Retorna HTMLCollection
  querySelector('selector')         // Retorna primeiro elemento
  querySelectorAll('selector')      // Retorna NodeList (static)
  
Seletores CSS úteis:
  '.classe'                         // Por classe
  '#id'                             // Por ID
  'tag'                             // Por tag
  '[atributo]'                      // Por atributo
  'pai > filho'                     // Filho direto
  'ancestral descendente'           // Qualquer descendente
  ':hover, :focus, :nth-child(n)'   // Pseudo-classes
`;

console.log(codigoSelecao);

// =====================================================
// EXERCÍCIO 2 - BÁSICO
// ENUNCIADO:
// Demonstre como criar, inserir, remover e substituir elementos no DOM dinamicamente.
// a) Crie elementos com createElement
// b) Defina conteúdo e classes
// c) Adicione, remova e substitua elementos no DOM
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 2: Criação de Elementos ===");

/*
// ...existing code...
*/

const exemploCriacao = `
function criarCard(produto) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = \`
        <img src="\${produto.imagem}" alt="\${produto.nome}">
        <h3>\${produto.nome}</h3>
        <p class="preco">R$ \${produto.preco.toFixed(2)}</p>
        <button class="btn-comprar" data-id="\${produto.id}">
            Adicionar ao Carrinho
        </button>
    \`;
    return card;
}

const produtos = [
    { id: 1, nome: "Notebook", preco: 3500, imagem: "notebook.jpg" },
    { id: 2, nome: "Mouse", preco: 50, imagem: "mouse.jpg" }
];

const container = document.getElementById('produtos');
produtos.forEach(produto => {
    const card = criarCard(produto);
    container.appendChild(card);
});
`;

console.log("Exemplo de criação dinâmica:");
console.log(exemploCriacao);

// =====================================================
// EXERCÍCIO 3 - INTERMEDIÁRIO
// ENUNCIADO:
// Demonstre como adicionar, remover e manipular eventos no DOM.
// a) Adicione listeners para diferentes eventos
// b) Use funções tradicionais e arrow
// c) Remova listeners e explique o objeto evento
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 3: Eventos ===");

/*
// ...existing code...
*/

const exemploEventos = `
// Exemplo completo: Contador
let count = 0;
const display = document.getElementById('contador');
const btnIncr = document.getElementById('incrementar');
const btnDecr = document.getElementById('decrementar');
const btnReset = document.getElementById('resetar');

function atualizarDisplay() {
    display.textContent = count;
    display.className = count > 0 ? 'positivo' : count < 0 ? 'negativo' : '';
}

btnIncr.addEventListener('click', () => {
    count++;
    atualizarDisplay();
});

btnDecr.addEventListener('click', () => {
    count--;
    atualizarDisplay();
});

btnReset.addEventListener('click', () => {
    count = 0;
    atualizarDisplay();
});
`;

console.log("Exemplo de eventos:");
console.log(exemploEventos);

// =====================================================
// EXERCÍCIO 4 - INTERMEDIÁRIO
// ENUNCIADO:
// Demonstre delegação de eventos para manipular muitos elementos de forma eficiente.
// a) Compare abordagem sem delegação e com delegação
// b) Use event.target e closest
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 4: Delegação de Eventos ===");

/*
// ...existing code...
*/

const exemploDelegacao = `
// Todo List com delegação
const todoList = document.getElementById('todo-list');
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-todo');

// Adicionar tarefa
addBtn.addEventListener('click', () => {
    const texto = input.value.trim();
    if (!texto) return;
    
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = \`
        <input type="checkbox" class="todo-check">
        <span class="todo-text">\${texto}</span>
        <button class="todo-delete">×</button>
    \`;
    
    todoList.appendChild(li);
    input.value = '';
});

// Delegação para todos os itens
todoList.addEventListener('click', (e) => {
    const item = e.target.closest('.todo-item');
    if (!item) return;
    
    // Checkbox: marcar/desmarcar
    if (e.target.classList.contains('todo-check')) {
        item.classList.toggle('completed');
    }
    
    // Botão delete: remover
    if (e.target.classList.contains('todo-delete')) {
        item.remove();
    }
});
`;

console.log("Exemplo de delegação:");
console.log(exemploDelegacao);

// =====================================================
// EXERCÍCIO 5 - AVANÇADO
// ENUNCIADO:
// Demonstre como validar e processar formulários no DOM.
// a) Implemente validação de campos e exibição de erros
// b) Faça envio assíncrono e validação em tempo real
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 5: Formulários ===");

const exemploFormulario = `
const form = document.getElementById('cadastro-form');
const erros = document.getElementById('erros');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Limpar erros anteriores
    erros.innerHTML = '';
    
    // Coletar dados do formulário
    const formData = new FormData(form);
    const dados = Object.fromEntries(formData);
    
    // Validar
    const validacao = validarFormulario(dados);
    if (!validacao.valido) {
        exibirErros(validacao.erros);
        return;
    }
    
    // Enviar
    try {
        const resposta = await fetch('/api/cadastro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });
        
        if (resposta.ok) {
            alert('Cadastro realizado com sucesso!');
            form.reset();
        }
    } catch (erro) {
        exibirErros(['Erro ao enviar formulário']);
    }
});

function validarFormulario(dados) {
    const erros = [];
    
    if (!dados.nome || dados.nome.length < 3) {
        erros.push('Nome deve ter no mínimo 3 caracteres');
    }
    
    if (!dados.email || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(dados.email)) {
        erros.push('Email inválido');
    }
    
    if (!dados.senha || dados.senha.length < 6) {
        erros.push('Senha deve ter no mínimo 6 caracteres');
    }
    
    if (dados.senha !== dados.confirmarSenha) {
        erros.push('Senhas não conferem');
    }
    
    return {
        valido: erros.length === 0,
        erros
    };
}

function exibirErros(listaErros) {
    erros.innerHTML = listaErros
        .map(erro => \`<li class="erro">\${erro}</li>\`)
        .join('');
}

// Validação em tempo real
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', () => {
    const valido = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(emailInput.value);
    emailInput.classList.toggle('invalido', !valido);
});
`;

console.log("Exemplo de formulário:");
console.log(exemploFormulario);

// =====================================================
// EXERCÍCIO 6 - AVANÇADO
// ENUNCIADO:
// Demonstre como criar componentes acessíveis usando ARIA e navegação por teclado.
// a) Implemente menu acessível com roles e atributos ARIA
// b) Permita navegação por teclado
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 6: Acessibilidade ===");

const exemploAcessibilidade = `
// Menu acessível com teclado
class MenuAcessivel {
    constructor(elemento) {
        this.menu = elemento;
        this.botao = elemento.querySelector('.menu-button');
        this.lista = elemento.querySelector('.menu-list');
        this.itens = [...elemento.querySelectorAll('.menu-item')];
        this.aberto = false;
        this.focoIndex = -1;
        
        this.inicializar();
    }
    
    inicializar() {
        // Configurar ARIA
        this.botao.setAttribute('aria-expanded', 'false');
        this.botao.setAttribute('aria-haspopup', 'true');
        this.lista.setAttribute('role', 'menu');
        this.itens.forEach(item => {
            item.setAttribute('role', 'menuitem');
            item.setAttribute('tabindex', '-1');
        });
        
        // Eventos
        this.botao.addEventListener('click', () => this.toggle());
        this.botao.addEventListener('keydown', (e) => this.handleBotaoKey(e));
        this.lista.addEventListener('keydown', (e) => this.handleListaKey(e));
        
        // Fechar ao clicar fora
        document.addEventListener('click', (e) => {
            if (!this.menu.contains(e.target)) {
                this.fechar();
            }
        });
    }
    
    abrir() {
        this.aberto = true;
        this.lista.classList.add('aberto');
        this.botao.setAttribute('aria-expanded', 'true');
        this.focarPrimeiro();
    }
    
    fechar() {
        this.aberto = false;
        this.lista.classList.remove('aberto');
        this.botao.setAttribute('aria-expanded', 'false');
        this.focoIndex = -1;
    }
    
    toggle() {
        this.aberto ? this.fechar() : this.abrir();
    }
    
    focarPrimeiro() {
        this.focoIndex = 0;
        this.itens[0].focus();
    }
    
    focarProximo() {
        this.focoIndex = (this.focoIndex + 1) % this.itens.length;
        this.itens[this.focoIndex].focus();
    }
    
    focarAnterior() {
        this.focoIndex = this.focoIndex <= 0 
            ? this.itens.length - 1 
            : this.focoIndex - 1;
        this.itens[this.focoIndex].focus();
    }
    
    handleBotaoKey(e) {
        switch(e.key) {
            case 'ArrowDown':
            case 'Enter':
            case ' ':
                e.preventDefault();
                this.abrir();
                break;
            case 'Escape':
                this.fechar();
                break;
        }
    }
    
    handleListaKey(e) {
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                this.focarProximo();
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.focarAnterior();
                break;
            case 'Escape':
                e.preventDefault();
                this.fechar();
                this.botao.focus();
                break;
            case 'Tab':
                this.fechar();
                break;
        }
    }
}

// Inicializar
const menu = new MenuAcessivel(document.getElementById('menu'));
`;

console.log("Exemplo de acessibilidade:");
console.log(exemploAcessibilidade);

// =====================================================
// EXERCÍCIO 7 - APLICAÇÃO REAL
// ENUNCIADO:
// Implemente uma Todo List completa aplicando seleção, criação, eventos, delegação, validação e acessibilidade.
// a) Estruture a aplicação com classes e métodos
// b) Implemente filtros, contadores e persistência local
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 7: Todo List Completo ===");

const todoCompleto = `
class TodoApp {
    constructor() {
        this.tarefas = this.carregarTarefas();
        this.filtroAtual = 'todas';
        this.renderizar();
        this.inicializarEventos();
    }
    
    carregarTarefas() {
        const salvas = localStorage.getItem('tarefas');
        return salvas ? JSON.parse(salvas) : [];
    }
    
    salvarTarefas() {
        localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
    }
    
    adicionarTarefa(texto) {
        const tarefa = {
            id: Date.now(),
            texto: texto.trim(),
            concluida: false,
            criadaEm: new Date().toISOString()
        };
        this.tarefas.push(tarefa);
        this.salvarTarefas();
        this.renderizar();
    }
    
    removerTarefa(id) {
        this.tarefas = this.tarefas.filter(t => t.id !== id);
        this.salvarTarefas();
        this.renderizar();
    }
    
    toggleTarefa(id) {
        const tarefa = this.tarefas.find(t => t.id === id);
        if (tarefa) {
            tarefa.concluida = !tarefa.concluida;
            this.salvarTarefas();
            this.renderizar();
        }
    }
    
    filtrarTarefas() {
        switch(this.filtroAtual) {
            case 'ativas':
                return this.tarefas.filter(t => !t.concluida);
            case 'concluidas':
                return this.tarefas.filter(t => t.concluida);
            default:
                return this.tarefas;
        }
    }
    
    renderizar() {
        const lista = document.getElementById('todo-list');
        const tarefasFiltradas = this.filtrarTarefas();
        
        if (tarefasFiltradas.length === 0) {
            lista.innerHTML = '<li class="vazio">Nenhuma tarefa</li>';
            return;
        }
        
        lista.innerHTML = tarefasFiltradas.map(tarefa => \`
            <li class="todo-item \${tarefa.concluida ? 'concluida' : ''}" 
                data-id="\${tarefa.id}">
                <input type="checkbox" 
                       class="todo-check" 
                       \${tarefa.concluida ? 'checked' : ''}>
                <span class="todo-text">\${tarefa.texto}</span>
                <button class="todo-delete" aria-label="Remover tarefa">×</button>
            </li>
        \`).join('');
        
        this.atualizarContadores();
    }
    
    atualizarContadores() {
        const total = this.tarefas.length;
        const concluidas = this.tarefas.filter(t => t.concluida).length;
        const ativas = total - concluidas;
        
        document.getElementById('total').textContent = total;
        document.getElementById('ativas').textContent = ativas;
        document.getElementById('concluidas').textContent = concluidas;
    }
    
    inicializarEventos() {
        // Adicionar tarefa
        const form = document.getElementById('todo-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('todo-input');
            if (input.value.trim()) {
                this.adicionarTarefa(input.value);
                input.value = '';
            }
        });
        
        // Delegação para check e delete
        const lista = document.getElementById('todo-list');
        lista.addEventListener('click', (e) => {
            const item = e.target.closest('.todo-item');
            if (!item) return;
            
            const id = parseInt(item.dataset.id);
            
            if (e.target.classList.contains('todo-check')) {
                this.toggleTarefa(id);
            }
            
            if (e.target.classList.contains('todo-delete')) {
                this.removerTarefa(id);
            }
        });
        
        // Filtros
        document.querySelectorAll('.filtro').forEach(btn => {
            btn.addEventListener('click', () => {
                this.filtroAtual = btn.dataset.filtro;
                document.querySelectorAll('.filtro').forEach(b => 
                    b.classList.remove('ativo'));
                btn.classList.add('ativo');
                this.renderizar();
            });
        });
    }
}

// Inicializar aplicação
const app = new TodoApp();
`;

console.log("Todo List completo:");
console.log(todoCompleto);

console.log("\n✅ Exercícios de DOM e Eventos concluídos!");
console.log("\n💡 Para executar completamente:");
console.log("   1. Crie arquivo HTML com estrutura básica");
console.log("   2. Adicione elementos com IDs e classes corretos");
console.log("   3. Importe este script no HTML");
console.log("   4. Abra no navegador e teste interações");
