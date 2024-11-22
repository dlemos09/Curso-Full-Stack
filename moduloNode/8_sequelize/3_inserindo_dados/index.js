// Importa o módulo 'express', um framework para Node.js usado para construir aplicativos web e APIs.
const express = require('express');

// Importa o módulo 'express-handlebars', que é um mecanismo de template para renderizar HTML dinâmico.
const exphbs = require('express-handlebars');

// Importa moment para manipulação de datas
const moment = require('moment-timezone');  // Usando moment-timezone para garantir o fuso horário correto

// Cria uma instância da aplicação Express.
const app = express();

const conn = require('./db/conn');
const User = require('./models/User');

// Porta do servidor
const port = 3000;

// Configura o mecanismo de template Handlebars com a extensão '.handlebars'.
// 'exphbs.engine()' cria uma instância do motor do Handlebars.
app.engine('handlebars', exphbs.engine());

// Configura o middleware para interpretar dados de formulários (x-www-form-urlencoded).
app.use(
    express.urlencoded({
        extended: true,
    }),
);

// Configura o middleware para interpretar requisições JSON.
app.use(express.json());

// Define o mecanismo de visualização padrão como 'handlebars'.
app.set('view engine', 'handlebars');

// Permite trabalhar com arquivos estáticos.
app.use(express.static('public'));

// Rota para renderizar o formulário de criação de usuário
app.get('/users/create', (req, res) => {
    res.render('adduser');
});

app.post('/users/create', async (req, res) => {
    try {
        // Aqui estamos usando o moment-timezone para garantir que a data de nascimento
        // seja ajustada para o fuso horário de Brasília (UTC-3) antes de ser salva.
        const formattedDate = moment.tz(req.body.date_of_birth, 'YYYY-MM-DD', 'America/Sao_Paulo').toDate(); 

        const user = await User.create({
            name: req.body.name,
            occupation: req.body.occupation,
            date_of_birth: formattedDate, // Data formatada corretamente
            newsletter: req.body.newsletter === 'on',
        });
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao criar usuário');
    }
});


// Rota para a página inicial
app.get('/', (req, res) => {
    res.render('home');
});

// Inicia a aplicação após garantir que a conexão com o banco foi realizada
conn.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
}).catch((err) => {
    console.log(err);
});
