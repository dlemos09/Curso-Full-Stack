// Callback é um conceito importante em JavaScript que envolve o uso de funções como argumentos de outras funções. Uma função callback é simplesmente uma função que é passada como argumento para outra função e é chamada de volta em algum momento dentro da função externa. O uso mais comum de callbacks é para lidar com operações assíncronas, como leituras de arquivos ou requisições a servidores.

function cumprimentar(nome, callback) {
    console.log("Olá, " + nome);
    callback();
  }
  
  function dizerTchau() {
    console.log("Até logo!");
  }
  
  cumprimentar("João", dizerTchau);
  