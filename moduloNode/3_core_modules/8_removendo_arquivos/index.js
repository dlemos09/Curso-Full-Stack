// Importa o módulo 'fs' (File System) para manipulação de arquivos.
const fs = require('fs')

// Usa a função 'unlink' do módulo 'fs' para excluir o arquivo 'arquivo.txt'.
// A função 'unlink' recebe o nome do arquivo e uma função de callback.
fs.unlink('arquivo.txt', function(err) {
    // Verifica se ocorreu algum erro durante a exclusão do arquivo.
    if (err) {
        // Se houve um erro, exibe o erro no console e encerra a execução da função.
        console.log(err)
        return
    }

    // Se o arquivo foi excluído com sucesso, exibe uma mensagem de confirmação no console.
    console.log('Arquivo removido')
});

//Atenção, para que o código funcione, é necessário ter o arquivo.txt, caso contrário só irá exibir o erro.