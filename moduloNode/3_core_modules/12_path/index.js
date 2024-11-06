// Importa o módulo 'path', que fornece utilitários para manipulação de caminhos de arquivos.
const path = require('path')

// Define um caminho de arquivo de exemplo, que aponta para 'relatorio1.pdf' dentro de subdiretórios.
const customPath = "/relatorios/pasta1/relatorio1.pdf"

// Extrai e exibe o diretório do caminho especificado.
// 'path.dirname' retorna o caminho até o diretório do arquivo.
console.log(path.dirname(customPath)) // Saída: '/relatorios/pasta1'

// Extrai e exibe o nome do arquivo (incluindo sua extensão) do caminho especificado.
// 'path.basename' retorna apenas o nome do arquivo, excluindo o caminho do diretório.
console.log(path.basename(customPath)) // Saída: 'relatorio1.pdf'

// Extrai e exibe a extensão do arquivo do caminho especificado.
// 'path.extname' retorna a extensão do arquivo (incluindo o ponto '.').
console.log(path.extname(customPath)) // Saída: '.pdf'
