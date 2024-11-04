// Importa o módulo 'http', que permite criar um servidor web simples.
const http = require('http')

// Define a porta onde o servidor vai escutar as requisições.
const port = 3000

// Cria o servidor usando o método 'createServer' do módulo 'http'.
// A função callback recebe 'req' (requisição) e 'res' (resposta) como parâmetros.
const server = http.createServer((req, res) => {
    // Define o código de status da resposta HTTP como 200, indicando sucesso.
    res.statusCode = 200
    
    // Define o cabeçalho 'Content-Type' da resposta para 'text/html',
    // especificando que o conteúdo da resposta será HTML.
    res.setHeader('Content-Type', 'text/html')
    
    // Finaliza a resposta enviando um conteúdo HTML.
    // A resposta contém uma tag de título <h1> e um parágrafo <p>.
    res.end('<h1>Olá, este é meu primeiro server com html!</h1> <p>Testando atualização</p>')
})

// Faz o servidor escutar na porta definida (neste caso, porta 3000).
// A função callback imprime no console uma mensagem indicando que o servidor está em execução e em qual porta.
server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})
