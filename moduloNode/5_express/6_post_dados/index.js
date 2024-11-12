const express = require('express') // Importa o módulo Express, um framework que facilita a criação de servidores.
const app = express()              // Cria uma instância da aplicação Express.
const port = 3000                  // Define a porta em que o servidor vai escutar as requisições.

const path = require('path')       // Importa o módulo 'path', que facilita o trabalho com caminhos de arquivos e diretórios.


//ler body
app.use(
    express.urlencoded({
        extended: true,            // Configura o middleware para interpretar dados de formulários (x-www-form-urlencoded).
    }),
)

app.use(express.json())            // Configura o middleware para interpretar requisições JSON.

const basePath = path.join(__dirname, 'meusTemplates')
// Define o caminho base para os templates. 
// '__dirname' representa o diretório atual, e 'path.join' cria um caminho completo para a pasta 'meusTemplates'.

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`) // Envia o arquivo 'userform.html' para requisições GET em '/users/add'.
})

app.post('/users/save', (req, res) => {
    console.log(req.body)               // Exibe o conteúdo do corpo da requisição no console (contém os dados do formulário enviados pelo usuário).

    const name = req.body.name          // Extrai o valor do campo 'name' do corpo da requisição.
    const age = req.body.age            // Extrai o valor do campo 'age' do corpo da requisição.

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`) // Exibe os dados recebidos do usuário no console.

    res.sendFile(`${basePath}/userform.html`) // Após processar os dados, envia novamente o formulário ao usuário.
})

app.get('/users/:id', (req, res) => {

    const id = req.params.id            // Extrai o 'id' dos parâmetros da URL.

    //leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando pelo usuário: ${id}`) // Exibe uma mensagem no console indicando que o usuário com o 'id' fornecido está sendo buscado.

    res.sendFile(`${basePath}/users.html`) // Envia o arquivo 'users.html' como resposta para a requisição GET com um id na rota '/users/:id'.
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`) // Envia o arquivo 'index.html' como resposta para requisições GET na rota raiz ('/').
})
// Define uma rota para o caminho raiz ('/'). 
// Quando uma requisição GET é feita na raiz ('/'), o servidor responde enviando o arquivo 'index.html' localizado em 'meusTemplates'.

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// Inicia o servidor na porta especificada.
// Quando o servidor está ativo, exibe uma mensagem no console indicando que o servidor está rodando na porta especificada.


// express.urlencoded({ extended: true }): Middleware que permite processar dados codificados de formulários.

// express.json(): Middleware para processar dados enviados no formato JSON.

// Extração de parâmetros na URL (req.params): Facilita a captura de variáveis passadas diretamente na URL da rota, como id.