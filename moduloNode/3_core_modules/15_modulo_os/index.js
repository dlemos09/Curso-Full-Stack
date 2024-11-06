// Importa o módulo 'os', que fornece métodos para obter informações do sistema operacional.
const os = require('os')

// Exibe informações sobre cada núcleo da CPU do sistema.
console.log(os.cpus()) // Retorna uma lista de objetos contendo detalhes sobre cada núcleo, como modelo, velocidade e tempo de uso.

// Exibe a quantidade de memória livre (em bytes) no sistema.
console.log(os.freemem()) // Retorna a quantidade de memória RAM disponível.

// Exibe o diretório home do usuário atual.
console.log(os.homedir()) // Retorna o caminho do diretório pessoal do usuário.

// Exibe o tipo do sistema operacional.
console.log(os.type()) // Retorna o tipo de sistema operacional, como 'Linux', 'Windows_NT', ou 'Darwin' para macOS.
