// Importa o módulo 'http', que permite criar um servidor web.
const http = require('http')

// Importa o módulo 'fs' (File System), que permite manipular arquivos no sistema.
const fs = require('fs')

// Define a porta onde o servidor vai escutar as requisições.
const port = 3000

// Cria o servidor usando 'createServer', onde 'req' representa a requisição e 'res' a resposta.
const server = http.createServer((req, res) => {
    
    // Lê o arquivo 'mensagem.html' usando o método 'readFile' do módulo 'fs'.
    // O callback recebe dois parâmetros: 'err' (erro, caso ocorra) e 'data' (conteúdo do arquivo).
    fs.readFile('mensagem.html', function (err, data) {
        
        // Define o cabeçalho da resposta como 200 (sucesso) e especifica o tipo de conteúdo como HTML.
        res.writeHead(200, { 'Content-type': 'text/html' })
        
        // Escreve o conteúdo do arquivo lido ('data') na resposta.
        res.write(data)
        
        // Finaliza a resposta e a envia ao cliente.
        return res.end()
    })
})

// Faz o servidor escutar na porta especificada (neste caso, porta 3000).
// Quando o servidor começa a escutar, exibe uma mensagem no console indicando que está rodando e em qual porta.
server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})
