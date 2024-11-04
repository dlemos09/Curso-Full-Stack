// Importa o módulo 'fs' (File System), que permite manipular arquivos no sistema.
const fs = require('fs')

// Imprime "inicio" no console.
console.log('inicio')

// Usa o método 'writeFile' do módulo 'fs' para criar (ou sobrescrever, se já existir) um arquivo chamado 'arquivo2.txt'.
// O conteúdo a ser escrito é "oi". Este processo é assíncrono, o que significa que ele é iniciado e o código continua sendo executado.
// O terceiro parâmetro é uma função de callback que será chamada quando a operação de escrita for concluída.
fs.writeFile('arquivo2.txt', "oi", function(err) {
    // O callback é executado quando a gravação no arquivo termina.
    // Um 'setTimeout' de 1 segundo é usado para simular um pequeno atraso antes de imprimir a mensagem no console.
    setTimeout(() => {
        // Exibe "arquivo criado!" no console após 1 segundo.
        console.log('arquivo criado!')
    }, 1000);
})

// Imprime "fim" no console logo após 'fs.writeFile' ser chamado, mas antes que o arquivo realmente seja criado.
// Isso acontece porque 'fs.writeFile' é assíncrono e o código não espera a conclusão da operação para continuar.
console.log('fim')
