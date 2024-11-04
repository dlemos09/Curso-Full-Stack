// Importa o módulo 'http', que permite criar um servidor web simples.
const http = require("http")

// Define a porta onde o servidor vai escutar as requisições.
const port = 3000

// Cria o servidor usando o método 'createServer' do módulo 'http'.
// A função callback (setada como segundo argumento) é chamada toda vez que o servidor recebe uma requisição.
// Os parâmetros 'req' (requisição) e 'res' (resposta) representam, respectivamente, os dados da requisição e o objeto de resposta.
const server = http.createServer((req, res) => {
    
    // Escreve a mensagem "Oi http" no corpo da resposta.
    res.write('Oi http')
    
    // Finaliza a resposta. O servidor entende que não há mais dados a serem enviados.
    res.end()
})

// Faz o servidor escutar a porta definida (neste caso, a porta 3000).
// O segundo argumento é uma função callback que é executada assim que o servidor começa a escutar.
// Aqui, ele imprime no console uma mensagem indicando que o servidor está rodando e na qual porta.
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

// ctrl + c para parar o servidor