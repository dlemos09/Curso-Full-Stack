const fs = require('fs') // file system -> serve para trabalhar com diretórios e arquivos, é armazenado em uma variável como boa prática

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(data)
});