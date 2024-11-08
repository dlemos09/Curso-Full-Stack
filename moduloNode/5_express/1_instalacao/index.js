const express = require('express') // Importa o módulo Express, um framework que facilita a criação de servidores.
const app = express()              // Cria uma instância da aplicação Express.
const port = 3000                  // Define a porta em que o servidor vai escutar as requisições.

app.get('/', (req, res) => res.send('Hello World!')) 
// Define uma rota para o caminho raiz ('/'). 
// Quando uma requisição GET é feita na raiz ('/'), o servidor responde com "Hello World!".

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// Inicia o servidor na porta definida. 
// Quando o servidor está ativo, exibe uma mensagem no console indicando que o servidor está rodando na porta especificada.
