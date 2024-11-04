// Importa o módulo 'path', que fornece utilitários para manipulação de caminhos de arquivos.
const path = require('path')

// Importa a função 'exit' do módulo 'process', que permite encerrar o processo Node.js.
// (Aqui, essa função não está sendo usada, mas está importada caso precise.)
const { exit } = require('process')

// Usa a função 'extname' do módulo 'path' para obter a extensão do arquivo 'arquivo.php'.
// A função retorna uma string contendo a extensão do arquivo (por exemplo, '.php' no caso do arquivo).
const extension = path.extname("arquivo.php")

// Exibe a extensão obtida no console.
console.log(extension)
