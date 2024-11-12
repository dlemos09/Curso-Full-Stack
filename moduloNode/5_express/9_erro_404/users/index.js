const express = require('express')
const router = express.Router()

const path = require('path')       // Importa o módulo 'path', que facilita o trabalho com caminhos de arquivos e diretórios.

const basePath = path.join(__dirname, '../meusTemplates')
// Define o caminho base para os templates. 
// '__dirname' representa o diretório atual, e 'path.join' cria um caminho completo para a pasta 'meusTemplates'.

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`) // Envia o arquivo 'userform.html' para requisições GET em '/users/add'.
})

router.post('/save', (req, res) => {
    console.log(req.body)               // Exibe o conteúdo do corpo da requisição no console (contém os dados do formulário enviados pelo usuário).

    const name = req.body.name          // Extrai o valor do campo 'name' do corpo da requisição.
    const age = req.body.age            // Extrai o valor do campo 'age' do corpo da requisição.

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`) // Exibe os dados recebidos do usuário no console.

    res.sendFile(`${basePath}/userform.html`) // Após processar os dados, envia novamente o formulário ao usuário.
})

router.get('/:id', (req, res) => {

    const id = req.params.id            // Extrai o 'id' dos parâmetros da URL.

    //leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando pelo usuário: ${id}`) // Exibe uma mensagem no console indicando que o usuário com o 'id' fornecido está sendo buscado.

    res.sendFile(`${basePath}/users.html`) // Envia o arquivo 'users.html' como resposta para a requisição GET com um id na rota '/users/:id'.
})

module.exports = router