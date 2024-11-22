// Importa o módulo 'express', um framework para Node.js usado para construir aplicativos web e APIs.
const express = require('express');

// Importa o módulo 'express-handlebars', que é um mecanismo de template para renderizar HTML dinâmico.
const exphbs = require('express-handlebars');

// Cria uma instância da aplicação Express.
const app = express();

const conn = require('./db/conn')

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


// inicia o servidor
app.listen(port, () => {
    console.log('App funcionando!');
});