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


