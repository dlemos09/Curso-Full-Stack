// Importa o módulo 'path', que fornece utilitários para manipulação de caminhos de arquivos.
const path = require('path')

// Usa 'path.resolve' para obter o caminho absoluto de 'arquivo.txt' no sistema.
console.log(path.resolve('arquivo.txt')) // Exibe o caminho absoluto para 'arquivo.txt'.

// Define o nome de uma subpasta intermediária onde o arquivo será armazenado.
const midFolder = 'relatorios'

// Define o nome do arquivo.
const fileName = 'arquivo.txt'

// Usa 'path.join' para construir um caminho concatenado, juntando cada parte do caminho com o separador apropriado do sistema de arquivos.
const finalPath = path.join('/', 'arquivos', midFolder, fileName)

// Exibe o caminho completo resultante.
console.log(finalPath) // Exibe '/arquivos/relatorios/arquivo.txt'
