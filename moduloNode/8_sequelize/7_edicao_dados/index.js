// Importa o módulo 'express', um framework para Node.js usado para construir aplicativos web e APIs.
const express = require('express');

// Importa o módulo 'express-handlebars', que é um mecanismo de template para renderizar HTML dinâmico.
const exphbs = require('express-handlebars');

// Importa moment para manipulação de datas
const moment = require('moment-timezone');  // Usando moment-timezone para garantir o fuso horário correto

// Cria uma instância da aplicação Express.
const app = express();

// Importa a conexão com o banco de dados
const conn = require('./db/conn');

// Importa o modelo User que representa a tabela de usuários no banco de dados
const User = require('./models/User');

// Importa o método 'method-override', que permite usar métodos HTTP como DELETE em formulários HTML.
const methodOverride = require('method-override');

// Configura o 'method-override' para interpretar requisições com `_method` no corpo ou na query.
app.use(methodOverride('_method'));

// Porta do servidor
const port = 3000;

// Configura o mecanismo de template Handlebars com a extensão '.handlebars'.
// 'exphbs.engine()' cria uma instância do motor do Handlebars.
app.engine('handlebars', exphbs.engine());

// Configura o middleware para interpretar dados de formulários (x-www-form-urlencoded).
app.use(
    express.urlencoded({
        extended: true, // Permite codificação de dados complexos.
    }),
);

// Configura o middleware para interpretar requisições JSON.
app.use(express.json());

// Define o mecanismo de visualização padrão como 'handlebars'.
app.set('view engine', 'handlebars');

// Permite trabalhar com arquivos estáticos na pasta 'public'.
app.use(express.static('public'));

// Rota para renderizar o formulário de criação de usuário
app.get('/users/create', (req, res) => {
    res.render('adduser'); // Renderiza a página 'adduser.handlebars'
});

// Rota para criação de um novo usuário
app.post('/users/create', async (req, res) => {
    try {
        // Formata a data de nascimento para o fuso horário de Brasília
        const formattedDate = moment.tz(req.body.date_of_birth, 'YYYY-MM-DD', 'America/Sao_Paulo').toDate();

        // Captura os dados do formulário
        const name = req.body.name;
        const occupation = req.body.occupation;
        const date_of_birth = formattedDate; // Data formatada corretamente

        // Verifica se o checkbox foi marcado. Se não for enviado no body, considera como `false`.
        const newsletter = req.body.newsletter === 'on';

        // Cria o usuário no banco de dados
        await User.create({ name, occupation, date_of_birth, newsletter });

        console.log(req.body); // Loga os dados recebidos para depuração

        res.redirect('/users/listauser'); // Redireciona para a lista de usuários
    } catch (error) {
        console.error(error); // Loga o erro no console
        res.status(500).send('Erro ao criar usuário'); // Retorna uma mensagem de erro
    }
});

// Rota para listar todos os usuários
app.get('/users/listauser', async (req, res) => {
    try {
        // Recupera todos os usuários do banco de dados
        const users = await User.findAll({ raw: true }); // Recupera os dados como objetos simples

        // Renderiza a página e passa os usuários como contexto
        res.render('listauser', { users });
    } catch (error) {
        console.error('Erro ao buscar usuários:', error); // Loga o erro no console
        res.status(500).send('Erro ao carregar a lista de usuários'); // Retorna uma mensagem de erro
    }
});

// Rota para exibir os detalhes de um usuário específico
app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id; // Captura o id da URL

        // Verifica se o id é válido
        if (isNaN(id) || id <= 0) {
            return res.status(400).send('ID inválido'); // Retorna um erro se o ID for inválido
        }

        // Busca o usuário pelo ID
        const user = await User.findOne({ raw: true, where: { id: id } });

        if (!user) {
            return res.status(404).send('Usuário não encontrado'); // Retorna um erro se o usuário não existir
        }

        // Renderiza a página 'userunique' com os dados do usuário
        res.render('userunique', { user });
    } catch (error) {
        console.error('Erro ao buscar usuário:', error); // Loga o erro no console
        res.status(500).send('Erro ao carregar os dados do usuário'); // Retorna uma mensagem de erro
    }
});

// Rota para excluir um usuário específico
app.delete('/users/delete/:id', async (req, res) => {
    try {
        const id = req.params.id; // Captura o id da URL

        // Verifica se o id é válido
        if (!id || isNaN(id)) {
            return res.status(400).send('ID inválido.'); // Retorna um erro se o ID for inválido
        }

        // Busca o usuário pelo ID
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).send('Usuário não encontrado.'); // Retorna um erro se o usuário não existir
        }

        // Exclui o usuário
        await User.destroy({ where: { id: id } });
        res.redirect('/users/listauser'); // Redireciona para a lista de usuários
    } catch (error) {
        console.error('Erro ao excluir o usuário:', error); // Loga o erro no console
        res.status(500).send('Erro ao excluir o usuário.'); // Retorna uma mensagem de erro
    }
});

app.get('/users/edituser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log('ID capturado:', id); // Adicione esta linha para verificar o ID

        if (!id || isNaN(id)) {
            return res.status(400).send('ID inválido.');
        }

        const user = await User.findByPk(id, { raw: true });
        if (!user) {
            return res.status(404).send('Usuário não encontrado.');
        }

        res.render('edituser', { user });
    } catch (error) {
        console.error('Erro ao buscar usuário para edição:', error);
        res.status(500).send('Erro ao carregar o formulário de edição.');
    }
});

app.post('/users/update', async (req, res) => {
    try {
        const id = req.body.id;
        const name = req.body.name;
        const occupation = req.body.occupation;
        const date_of_birth = req.body.date_of_birth;
        let newsletter = req.body.newsletter === 'on';

        // Valida os dados
        if (!id || isNaN(id)) {
            return res.status(400).send('ID inválido.');
        }

        if (!name || !occupation || !date_of_birth) {
            return res.status(400).send('Todos os campos são obrigatórios.');
        }

        // Formata a data de nascimento
        const formattedDate = moment(date_of_birth, 'YYYY-MM-DD').toDate();

        // Atualiza o usuário no banco
        const userData = {
            id,
            name,
            occupation,
            date_of_birth: formattedDate,
            newsletter,
        };

        const [affectedRows] = await User.update(userData, {
            where: {
                id: id,
            },
        });

        if (affectedRows === 0) {
            return res.status(404).send('Usuário não encontrado ou nenhuma alteração realizada.');
        }

        res.redirect('/users/listauser');
    } catch (err) {
        console.error('Erro ao atualizar usuário:', err);
        res.status(500).send('Erro ao atualizar o usuário.');
    }
});




// Rota para a página inicial
app.get('/', (req, res) => {
    res.render('home'); // Renderiza a página 'home.handlebars'
});

// Inicia a aplicação após garantir que a conexão com o banco foi realizada

// conn.sync().then(() => {
//     app.listen(port, () => {
//         console.log(`Servidor rodando na porta ${port}`); // Loga que o servidor está rodando
//     });
// }).catch((err) => {
//     console.log(err); // Loga qualquer erro ao sincronizar com o banco de dados
// });


// O {force: true} força a exclusão dos dados no banco

// conn.sync({force: true}).then(() => {
//     app.listen(port, () => {
//         console.log(`Servidor rodando na porta ${port}`); // Loga que o servidor está rodando
//     });
// }).catch((err) => {
//     console.log(err); // Loga qualquer erro ao sincronizar com o banco de dados
// });


