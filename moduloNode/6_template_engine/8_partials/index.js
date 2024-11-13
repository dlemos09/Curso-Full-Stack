// Importa o módulo 'express', um framework para Node.js usado para construir aplicativos web e APIs.
const express = require('express');

// Importa o módulo 'express-handlebars', que é um mecanismo de template para renderizar HTML dinâmico.
const exphbs = require('express-handlebars');

// Cria uma instância da aplicação Express.
const app = express();

// Configura o Handlebars com uma pasta personalizada para armazenar templates parciais.
const hbs = exphbs.create({
    partialsDir: ['views/partials'], // Define o diretório onde ficam os templates parciais.
});

// Configura o mecanismo de template Handlebars com a extensão '.handlebars'.
// 'hbs.engine' utiliza o Handlebars configurado acima com os partials.
app.engine('handlebars', hbs.engine);

// Define o mecanismo de visualização padrão como 'handlebars'.
// Isso permite que o Express entenda e renderize automaticamente arquivos '.handlebars'.
app.set('view engine', 'handlebars');

// Define uma rota GET para '/dashboard'.
app.get('/dashboard', (req, res) => {
    const itens = ['item a', 'item b', 'item c']; // Array de itens que será passado ao template.

    // Renderiza o template 'dashboard.handlebars' com o array 'itens' como contexto.
    res.render('dashboard', { itens });
});

// Define uma rota GET para '/post'.
app.get('/post', (req, res) => {
    const post = { // Objeto que representa um post de blog com dados fictícios.
        title: 'Aprender NODE.js',
        category: 'JavaScript',
        body: 'Este curso vai lhe auxiliar a entender NODE.js.',
        comments: 4,
    };

    // Renderiza o template 'blogpost.handlebars' e passa o objeto 'post' como contexto.
    res.render('blogpost', { post });
});

// Define uma rota GET para '/blog'.
app.get('/blog', (req, res) => {
    const posts = [ // Array de objetos representando múltiplos posts de blog.
        {
            title: 'Aprender NODE.js',
            category: 'JavaScript',
            body: 'Este curso vai lhe auxiliar a entender NODE.js.',
            comments: 4,
        },
        {
            title: 'Aprender React',
            category: 'JavaScript',
            body: 'Este curso vai lhe auxiliar a entender React',
            comments: 4,
        },
        {
            title: 'Aprender Django',
            category: 'Python',
            body: 'Este curso vai lhe auxiliar a entender Django.',
            comments: 4,
        }
    ];

    // Renderiza o template 'blog.handlebars' e passa o array 'posts' como contexto.
    res.render('blog', { posts });
});

// Define uma rota GET para a página inicial ('/').
app.get('/', (req, res) => {
    const user = { // Objeto representando um usuário fictício.
        name: "Douglas",
        surname: "Lemos",
        age: 28,
    };

    const auth = true; // Variável indicando se o usuário está autenticado.
    const approved = true; // Variável indicando se o usuário está aprovado.

    // Renderiza o template 'home.handlebars' localizado na pasta de visualizações.
    // O objeto passado contém 'user', 'auth' e 'approved', que serão usados no template.
    res.render('home', { user: user, auth, approved });
});

// Inicia o servidor na porta 3000 e exibe uma mensagem no console para confirmar que o app está funcionando.
app.listen(3000, () => {
    console.log('App funcionando!');
});
