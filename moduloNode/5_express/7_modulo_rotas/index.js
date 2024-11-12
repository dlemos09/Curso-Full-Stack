const express = require('express') // Importa o módulo Express, um framework que facilita a criação de servidores.
const app = express()              // Cria uma instância da aplicação Express.
const port = 3000                  // Define a porta em que o servidor vai escutar as requisições.

const path = require('path')

const basePath = path.join(__dirname, 'meusTemplates')
// Define o caminho base para os templates. 
// '__dirname' representa o diretório atual, e 'path.join' cria um caminho completo para a pasta 'meusTemplates'.



const users = require('./users')

//ler body
app.use(
    express.urlencoded({
        extended: true,            // Configura o middleware para interpretar dados de formulários (x-www-form-urlencoded).
    }),
)

app.use(express.json())            // Configura o middleware para interpretar requisições JSON.


app.use('/users', users)


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