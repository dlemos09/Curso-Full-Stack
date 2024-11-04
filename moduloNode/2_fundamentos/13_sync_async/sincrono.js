// Importa o módulo 'fs' (File System), que permite manipular arquivos no sistema.
const fs = require('fs')

// Imprime "Início" no console.
console.log('Início')

// Usa o método síncrono 'writeFileSync' do módulo 'fs' para criar (ou sobrescrever, se já existir) um arquivo chamado 'arquivo.txt'.
// O conteúdo a ser escrito é "oi". Como este método é síncrono, ele bloqueia a execução até que a gravação seja concluída.
fs.writeFileSync('arquivo.txt', 'oi')

// Imprime "fim" no console após a operação de escrita no arquivo ter sido concluída.
// Como `writeFileSync` é uma operação bloqueante, o código espera o término da escrita antes de continuar.
console.log('fim')
