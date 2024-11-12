const express = require('express') // Importa o módulo Express, um framework que facilita a criação de servidores.
const app = express()              // Cria uma instância da aplicação Express.
const port = 3000                  // Define a porta em que o servidor vai escutar as requisições.

const path = require('path')       // Importa o módulo 'path', que facilita o trabalho com caminhos de arquivos e diretórios.

const basePath = path.join(__dirname, 'meusTemplates') 
// Define o caminho base para os templates. 
// '__dirname' representa o diretório atual, e 'path.join' cria um caminho completo para a pasta 'meusTemplates'.

// Função middleware para verificar autenticação do usuário
const checkAuth = function(req, res, next) {
    req.authStatus = true  // Define uma propriedade 'authStatus' no objeto 'req' indicando se o usuário está autenticado.

    if(req.authStatus) {   // Se o usuário estiver autenticado, exibe uma mensagem e chama 'next()' para continuar a requisição.
        console.log('Está logado')
        next()
    } else {               // Se o usuário não estiver autenticado, exibe uma mensagem e não prossegue com a requisição.
        console.log('Não está logado, faça login para continuar')
    }
}

// Aplica o middleware 'checkAuth' para todas as rotas, verificando a autenticação antes de processar cada requisição.
app.use(checkAuth)

app.get('/users/:id', (req, res) => {
    const id = req.params.id       // Extrai o parâmetro 'id' da URL, que identifica o usuário na rota.

    //leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando pelo usuário: ${id}`) // Exibe uma mensagem no console com o ID do usuário que está sendo buscado.

    res.sendFile(`${basePath}/users.html`) // Envia o arquivo 'users.html' localizado em 'meusTemplates' como resposta para requisições GET na rota '/users/:id'.
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`) // Envia o arquivo 'index.html' como resposta para requisições GET na rota raiz ('/').
})
// Define uma rota para o caminho raiz ('/'). 
// Quando uma requisição GET é feita na raiz ('/'), o servidor responde enviando o arquivo 'index.html' localizado em 'meusTemplates'.

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// Inicia o servidor na porta especificada. 
// Quando o servidor está ativo, exibe uma mensagem no console indicando que o servidor está rodando na porta especificada.


// req.params.id: Captura o id passado na URL da rota, permitindo manipular dados específicos de cada usuário.

// res.sendFile(...): Envia um arquivo HTML como resposta para a rota específica, seja a raiz (/) ou a rota de usuários (/users/:id).