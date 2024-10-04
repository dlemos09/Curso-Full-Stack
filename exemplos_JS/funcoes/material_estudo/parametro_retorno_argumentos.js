//Parâmetro -> informação externa !
//Argumento -> versão dos paramentros que serão informados!
//Retorno -> Entrega um resultado, um produto precisa ser retornado.


function fazerPizza(tipoDoQueijo, tipoDoRecheio){
    const pizza = `A pizza de ${tipoDoQueijo} com ${tipoDoRecheio}`
    return pizza;
}

const pizzaDoCliente = fazerPizza('Mussarela','Peperone');

console.log(pizzaDoCliente);