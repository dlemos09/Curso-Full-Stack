// Importa o módulo 'express', um framework para Node.js usado para construir aplicativos web e APIs.
const express = require('express');

// Importa o módulo 'express-handlebars', que é um mecanismo de template para renderizar HTML dinâmico.
const exphbs = require('express-handlebars');

// Cria uma instância da aplicação Express.
const app = express();

const conn = require('./db/conn')

const User = require('./models/User')

//Porta do servidor
const port = 3000;


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

//Permite trabalhar com arquivos estáticos
app.use(express.static('public'))

app.get('/', (req, res) => {
    // Renderiza o template 'home.handlebars' localizado na pasta de visualizações (por padrão 'views').
    // O objeto `{layout: false}` indica que não será utilizado um layout externo.
    res.render('home');
});

// Sincroniza os modelos definidos com o banco de dados.
// O método 'sync()' do Sequelize verifica se as tabelas correspondentes aos modelos existem.
// Caso não existam, ele cria essas tabelas automaticamente.
// Sugestão: Em produção, considere usar migrações em vez de 'sync()' para maior controle sobre alterações no banco.
conn.sync()
    .then(() => {
        // Inicia o servidor Express na porta especificada.
        // O servidor só começa a escutar requisições após a sincronização bem-sucedida com o banco.
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    })
    .catch((err) => {
        // Caso ocorra algum erro ao sincronizar os modelos com o banco de dados,
        // o erro será exibido no console, ajudando na depuração.
        console.log('Erro ao sincronizar com o banco de dados:', err);
    });
