// Importa o módulo 'express', um framework para Node.js usado para construir aplicativos web e APIs.
const express = require('express');

// Importa o módulo 'express-handlebars', que é um mecanismo de template para renderizar HTML dinâmico.
const exphbs = require('express-handlebars');

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
app.get('/', (req, res) => {
    // Renderiza o template 'home.handlebars' localizado na pasta de visualizações (por padrão 'views').
    // O objeto `{layout: false}` indica que não será utilizado um layout externo.
    res.render('home');
});

// Inicia o servidor na porta 3000 e exibe uma mensagem no console para confirmar que o app está funcionando.
app.listen(3000, () => {
    console.log('App funcionando!');
});
