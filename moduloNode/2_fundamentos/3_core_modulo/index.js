// O node já vem com vários módulos instalados

const path = require('path')
const { exit } = require('process')

const extension = path.extname("arquivo.php")

console.log(extension)