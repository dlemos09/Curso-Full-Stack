// Importa o módulo 'fs' (File System) para manipulação de arquivos e diretórios.
const fs = require('fs')

// Verifica se o diretório 'minhapasta' não existe usando 'fs.existsSync'.
// 'fs.existsSync' retorna true se o diretório existir e false se não existir.
if (!fs.existsSync('./minhapasta')) {
    console.log('Não existe!') // Exibe uma mensagem indicando que o diretório não existe.
    
    // Cria o diretório 'minhapasta' usando 'fs.mkdirSync'.
    fs.mkdirSync("minhapasta") // Cria o diretório sincronicamente.
}

// Verifica novamente se o diretório 'minhapasta' existe.
if (fs.existsSync('./minhapasta')) {
    console.log('Existe!') // Exibe uma mensagem indicando que o diretório agora existe.
}
