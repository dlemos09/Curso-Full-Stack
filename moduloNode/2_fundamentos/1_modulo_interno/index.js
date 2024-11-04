// Importa o módulo 'meuModulo' localizado no mesmo diretório do arquivo atual.
// Presume-se que 'meuModulo' exporte uma função chamada 'soma' ou um objeto que contém essa função.
const meuModulo = require("./meuModulo")

// Extrai a função 'soma' do objeto 'meuModulo' para facilitar o acesso a ela diretamente.
const soma = meuModulo.soma

// Chama a função 'soma' com os argumentos 2 e 3 e executa a soma desses valores.
soma(2, 3)

// Chama a função 'soma' novamente, agora com os argumentos 10 e 3.
soma(10, 3)
