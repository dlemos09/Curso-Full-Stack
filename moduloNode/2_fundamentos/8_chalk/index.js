const chalk = require('chalk')

const nota = 3



if(nota >= 7){
    console.log(chalk.green('Você passou'))
} else {
    console.log(chalk.bgRed('Você está em recuperação'))
}

// 1. Desinstale localmente a versão atual do Chalk usando npm uninstall chalk 



// 2. Instale localmente a versão anterior à 5 usando npm install chalk@4.1.2 

