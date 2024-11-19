// Importa o módulo 'express', um framework para Node.js usado para construir aplicativos web e APIs.
const express = require('express');

// Importa o módulo 'express-handlebars', que é um mecanismo de template para renderizar HTML dinâmico.
const exphbs = require('express-handlebars');

// Importa o Pool do pacote pg. O Pool, no contexto do módulo pg (PostgreSQL para Node.js), é uma funcionalidade que gerencia um conjunto de conexões com o banco de dados. Em vez de abrir uma nova conexão a cada consulta, o Pool cria várias conexões e as reutiliza, ajudando a melhorar a performance e a escalabilidade da aplicação.
const { Pool } = require('pg');


// Cria uma instância da aplicação Express.
const app = express();

// Configura o mecanismo de template Handlebars com a extensão '.handlebars'.
// 'exphbs.engine()' cria uma instância do motor do Handlebars.
app.engine('handlebars', exphbs.engine());


//ler body
app.use(
    express.urlencoded({
        extended: true,            // Configura o middleware para interpretar dados de formulários (x-www-form-urlencoded).
    }),
)

app.use(express.json())            // Configura o middleware para interpretar requisições JSON.

// Define o mecanismo de visualização padrão como 'handlebars'.
// Isso permite que Express entenda e renderize arquivos '.handlebars' automaticamente.

app.set('view engine', 'handlebars');

// Define uma rota GET para a página inicial ('/').
// Quando o usuário acessa essa rota, a função de callback é executada.

app.use(express.static('public'))


app.get('/', (req, res) => {
    // Renderiza o template 'home.handlebars' localizado na pasta de visualizações (por padrão 'views').
    // O objeto `{layout: false}` indica que não será utilizado um layout externo.
    res.render('home');
});

// INSERE DADOS NA BIBLIOTECA
app.post('/books/insertbook', async (req, res) => {
    // Extrai os valores enviados pelo formulário
    const { title, author, publication_year } = req.body;

    // Query SQL parametrizada para evitar injeção de SQL e problemas de formatação
    const query = `INSERT INTO books (title, author, publication_year) VALUES ($1, $2, $3)`;

    try {
        // Executa a query de inserção com os valores fornecidos
        await pool.query(query, [title, author, publication_year]);
        res.redirect('/');
    } catch (err) {
        console.log('Erro ao inserir livro:', err);
        res.status(500).send('Erro ao inserir livro');
    }
});

// FILTRA TODOS OS LIVROS
app.get('/books', (req, res) => {
    // Query SQL para buscar todos os livros
    const query = 'SELECT * FROM books';

    // Executa a consulta no banco de dados
    pool.query(query, (err, data) => {
        if (err) {
            console.log('Erro ao executar a query SELECT:', err);
            res.status(500).send('Erro ao buscar livros');
            return;
        }

        // Armazena os resultados da consulta
        const books = data.rows; // "data.rows" contém as linhas retornadas pelo PostgreSQL

        // Renderiza a página com os dados dos livros
        res.render('books', { books });
    });
});

// FILTRA UM LIVRO ESPECÍFICO
app.get('/books/:id', (req, res) => {
    const id = req.params.id;

    // Utiliza parâmetros SQL para evitar injeção de SQL
    const query = `SELECT * FROM books WHERE idbooks = $1`;

    // Executa a query, substituindo $1 pelo valor de "id"
    pool.query(query, [id], (err, data) => {
        if (err) {
            console.log('Erro ao buscar livro:', err);
            res.status(500).send('Erro ao buscar livro');
            return;
        }

        // Garante que o livro existe antes de renderizar
        const book = data.rows[0];
        if (!book) {
            res.status(404).send('Livro não encontrado');
            return;
        }

        // Renderiza a view 'book' com os dados do livro
        res.render('book', { book });
    });
});

// EDIÇÃO DO LIVRO
app.get('/books/edit/:id', (req, res) => {
    // Extrai o ID do livro a partir dos parâmetros da URL
    const id = req.params.id;

    // Query parametrizada para buscar o livro pelo ID
    const query = `SELECT * FROM books WHERE idbooks = $1`;

    // Executa a query com o parâmetro fornecido
    pool.query(query, [id], (err, result) => {
        if (err) {
            // Se houver um erro durante a execução da query, loga o erro e envia uma resposta de erro ao cliente
            console.log('Erro ao buscar livro:', err);
            res.status(500).send('Erro ao buscar livro');
            return;
        }

        // Verifica se algum livro foi encontrado
        const book = result.rows[0]; // Usa 'result.rows' para acessar as linhas retornadas
        if (!book) {
            // Caso nenhum livro seja encontrado, retorna uma mensagem de erro
            res.status(404).send('Livro não encontrado');
            return;
        }

        // Se o livro for encontrado, renderiza a view 'editbook' com os dados do livro
        res.render('editbook', { book });
    });
});

// Envio de dados atualizado para o banco
app.post('/books/updatebook', (req, res) => {
    // Extrai os valores do corpo da requisição
    const { id, title, author, publication_year } = req.body;

    // Query SQL parametrizada para atualizar os valores de um livro com base no ID
    const query = `
        UPDATE books 
        SET title = $1, author = $2, publication_year = $3
        WHERE idbooks = $4
    `;

    // Executa a query com os valores fornecidos como parâmetros
    pool.query(query, [title, author, publication_year, id], (err, result) => {
        if (err) {
            // Loga o erro no console e retorna uma mensagem de erro
            console.log('Erro ao atualizar livro:', err);
            res.status(500).send('Erro ao tentar atualizar o livro');
            return;
        }

        // Verifica se algum registro foi atualizado
        if (result.rowCount === 0) {
            // Caso nenhum registro tenha sido atualizado, informa o usuário
            res.status(404).send('Livro não encontrado para atualização');
            return;
        }

        // Redireciona o usuário para a lista de livros após a atualização
        res.redirect('/books');
    });
});


// Rota para deletar um livro
app.post('/books/remove/:id', (req, res) => {
    // Extrai o ID do livro a partir dos parâmetros da URL
    const id = req.params.id;

    // Query parametrizada para excluir o livro pelo ID
    const query = `DELETE FROM books WHERE idbooks = $1`;

    // Executa a query com o parâmetro fornecido
    pool.query(query, [id], (err, result) => {
        if (err) {
            // Loga o erro e envia uma resposta de erro ao cliente
            console.log('Erro ao deletar livro:', err);
            res.status(500).send('Erro ao deletar livro');
            return;
        }

        // Verifica se algum registro foi deletado
        if (result.rowCount === 0) {
            res.status(404).send('Livro não encontrado para exclusão');
            return;
        }

        // Redireciona para a lista de livros após exclusão
        res.redirect('/books');
    });
});



// Configura as credenciais de conexão com o banco de dados
const pool = new Pool({
    user: 'postgres',         // substitua pelo seu usuário PostgreSQL
    host: 'localhost',        // endereço do servidor de banco de dados
    database: 'postgres',     // nome do banco de dados
    password: '',     // senha do usuário
    port: 5432,               // porta padrão do PostgreSQL
});

// Conecta ao banco e inicia o servidor
pool.connect((err) => {
    if (err) {
        console.log('Erro ao conectar com o Postgres:', err);
    } else {
        console.log('Conectou com o Postgres');
        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000');
        });
    }
});

// Exporta a constante pool para ser usada em outros módulos
module.exports = pool;


