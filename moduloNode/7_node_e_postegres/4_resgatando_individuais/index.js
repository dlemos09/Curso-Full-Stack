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


