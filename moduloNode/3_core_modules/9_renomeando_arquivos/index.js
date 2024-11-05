// Importa o módulo 'fs' (File System) para manipulação de arquivos.
const fs = require('fs')

// Define o nome do arquivo atual que será renomeado.
const arquivoAntigo = 'arquivo.txt'

// Define o novo nome que será atribuído ao arquivo.
const arquivoNovo = 'novoarquivo.txt'

// Usa a função 'rename' do módulo 'fs' para renomear o arquivo.
// A função 'rename' recebe o nome do arquivo atual, o novo nome desejado, e uma função de callback para tratar o resultado.
fs.rename(arquivoAntigo, arquivoNovo, function(err) {
    // Verifica se ocorreu algum erro durante a renomeação do arquivo.
    if (err) {
        // Se houve um erro, exibe o erro no console e encerra a execução da função.
        console.log(err)
        return
    }

    // Se o arquivo foi renomeado com sucesso, exibe uma mensagem de confirmação no console.
    console.log(`O arquivo ${arquivoAntigo} foi renomeado para ${arquivoNovo}`)
})
