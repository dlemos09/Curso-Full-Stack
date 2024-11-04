// Importa o módulo 'http' para criar o servidor web.
const http = require('http')

// Importa o módulo 'fs' (File System) para ler e escrever arquivos.
const fs = require('fs')

// Define a porta onde o servidor vai escutar as requisições.
const port = 3000

// Cria o servidor usando 'createServer', onde 'req' representa a requisição e 'res' a resposta.
const server = http.createServer((req, res) => {

    // Analisa a URL da requisição para extrair parâmetros de consulta (query).
    // Aqui, o parâmetro 'name' é extraído da URL.
    const urlInfo = require("url").parse(req.url, true)
    const name = urlInfo.query.name

    // Verifica se o parâmetro 'name' foi passado na URL.
    if (!name) {
        // Se 'name' não estiver presente, lê o arquivo 'index.html' e envia seu conteúdo na resposta.
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-type': 'text/html' }) // Cabeçalho da resposta indicando que o conteúdo é HTML.
            res.write(data) // Escreve o conteúdo do arquivo na resposta.
            return res.end() // Finaliza e envia a resposta ao cliente.
        })
    } else {
        // Caso 'name' esteja presente, adiciona uma quebra de linha ('\r\n') para que cada nome seja gravado em uma nova linha no arquivo.
        const nameNewLine = name + ',\r\n'

        // Escreve o valor de 'name' com uma nova linha no final no arquivo 'arquivo.txt'.
        fs.appendFile("arquivo.txt", nameNewLine, function (err, data) {

            // Após escrever no arquivo, configura o cabeçalho da resposta para redirecionar o usuário para a URL raiz ('/').
            res.writeHead(302, {
                Location: '/', // Redireciona o usuário para a página principal.


                // O código de status 302 no HTTP significa "Found" ou "Movido Temporariamente".Ele indica ao navegador ou cliente que o recurso solicitado foi encontrado em uma URL diferente, mas apenas temporariamente.

                // Quando o servidor responde com um 302, ele também envia um cabeçalho Location, informando ao cliente para onde redirecionar.Assim, o navegador faz uma nova requisição para essa URL.Essa situação é diferente de um redirecionamento permanente(código 301), onde o redirecionamento é esperado para durar.
            })
            return res.end() // Finaliza a resposta após o redirecionamento.
        })
    }
})

// Faz o servidor escutar na porta especificada (neste caso, porta 3000).
// Exibe uma mensagem no console indicando que o servidor está rodando e em qual porta.
server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})
