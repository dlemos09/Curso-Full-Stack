// Importa o módulo 'http', que permite criar um servidor web.
const http = require('http')

// Define a porta onde o servidor vai escutar as requisições.
const port = 3000

// Cria o servidor usando 'createServer', onde 'req' é a requisição e 'res' é a resposta.
const server = http.createServer((req, res) => {

    // Analisa a URL da requisição para extrair parâmetros de consulta.
    // O parâmetro 'name' é extraído se estiver presente.
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    // Define o código de status HTTP como 200, indicando que a resposta é bem-sucedida.
    res.statusCode = 200

    // Define o cabeçalho 'Content-Type' da resposta como 'text/html' para indicar que o conteúdo será HTML.
    res.setHeader('Content-Type', 'text/html')

    // Verifica se o parâmetro 'name' foi passado na URL.
    // Se 'name' estiver ausente, exibe um formulário HTML pedindo ao usuário que preencha seu nome.
    if (!name) {
        res.end('<h1>Preencha o seu nome: </h1><form method="GET"> <input type="text" name="name"/> <input type="submit" value="Enviar">   </form>')
    } else {
        // Caso contrário, exibe uma mensagem de boas-vindas com o nome fornecido.
        res.end(`<h1> Seja bem-vindo ${name}! </h1>`)
    }
})

// Faz o servidor escutar na porta especificada (neste caso, 3000).
// Quando o servidor inicia, exibe uma mensagem no console indicando que está rodando e em qual porta.
server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})
