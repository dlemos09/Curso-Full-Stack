// Importa o módulo 'http' para criar o servidor web.
const http = require('http')

// Importa o módulo 'fs' (File System) para manipulação de arquivos.
const fs = require('fs')

// Importa o módulo 'url' para analisar e manipular URLs.
const url = require('url')

// Define a porta onde o servidor vai escutar as requisições.
const port = 3000

// Cria o servidor usando 'createServer', onde 'req' representa a requisição e 'res' a resposta.
const server = http.createServer((req, res) => {

    // Analisa a URL da requisição para extrair o caminho e os parâmetros da consulta (query).
    const q = url.parse(req.url, true)

    // Extrai o caminho do arquivo a ser carregado (retira a barra inicial).
    const filename = q.pathname.substring(1)

    // Verifica se o nome do arquivo contém "html" (se é uma página HTML).
    if (filename.includes('html')) {
        
        // Verifica se o arquivo especificado existe.
        if (fs.existsSync(filename)) {

            // Lê o conteúdo do arquivo e o envia na resposta.
            fs.readFile(filename, function (err, data) {
                res.writeHead(200, { 'Content-type': 'text/html' }) // Define o cabeçalho como HTML.
                res.write(data) // Escreve o conteúdo do arquivo na resposta.
                return res.end() // Finaliza a resposta.
            })
        } else {
            // Se o arquivo não existe, lê e retorna a página de erro '404.html'.
            fs.readFile('404.html', function (err, data) {
                res.writeHead(400, { 'Content-type': 'text/html' }) // Define o cabeçalho como HTML.
                res.write(data) // Escreve o conteúdo da página 404 na resposta.
                return res.end() // Finaliza a resposta.
            })
        }
    }
})

// Faz o servidor escutar na porta especificada (neste caso, porta 3000).
// Exibe uma mensagem no console indicando que o servidor está rodando e em qual porta.
server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})
