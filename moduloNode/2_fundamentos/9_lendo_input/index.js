// Importa o módulo 'readline' e cria uma interface para receber entrada e saída do terminal.
const readline = require('readline').createInterface({
    input: process.stdin, // Define que a entrada de dados será o terminal (stdin).
    output: process.stdout // Define que a saída de dados será o terminal (stdout).
})

// Usa o método 'question' da interface 'readline' para fazer uma pergunta ao usuário.
readline.question('Qual a sua linguagem preferida ?', (language) => {
    // Exibe a resposta fornecida pelo usuário no console.
    console.log(`A minha linguagem preferida é: ${language}`)

    // Fecha a interface 'readline', encerrando a interação.
    readline.close()
})
