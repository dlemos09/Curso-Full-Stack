// Importa o módulo 'http', que permite criar servidores web no Node.js.
import http from "http";

// Cria um servidor usando o método 'createServer', onde 'req' representa a requisição e 'res' a resposta.
const server = http.createServer((req, res) => {
    // Define o cabeçalho da resposta com o status 200 (OK) e o tipo de conteúdo como texto simples.
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Envia a mensagem "Curso de Node.js" como resposta e finaliza a resposta.
    res.end("Curso de Node.js")
})

// Faz o servidor escutar na porta 3000 e exibe uma mensagem no console indicando que o servidor está ativo.
server.listen(3000, () => {
    console.log('Servidor escutando!')
})
