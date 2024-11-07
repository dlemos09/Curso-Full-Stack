const fs = require('fs') // Importa o módulo do sistema de arquivos (fs).

// Usa o método 'stat' para obter informações sobre o arquivo 'novoarquivo.txt'.
// 'err' captura erros, e 'stats' contém as estatísticas do arquivo.
fs.stat('novoarquivo.txt', (err, stats) => {
    if(err){
        console.log(err) // Exibe o erro, caso ocorra, e interrompe a execução.
        return
    }

    console.log(stats.isFile()) // Verifica e exibe se 'novoarquivo.txt' é um arquivo regular.
    console.log(stats.isDirectory()) // Verifica e exibe se é um diretório.
    console.log(stats.isSymbolicLink()) // Verifica e exibe se é um link simbólico.
    console.log(stats.ctime) // Exibe a data e hora de criação do arquivo.
    console.log(stats.size) // Exibe o tamanho do arquivo em bytes.
})
