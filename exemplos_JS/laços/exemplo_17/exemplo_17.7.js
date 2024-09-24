//Exemplo de for off

const nomes = ['Douglas', 'Amanda', 'Tiago'];

// for (let i = 0; i < nomes.length; i++){
//     console.log(nomes[i]);
// }

// O for of não é iteravel, retorna o valor em si! 
for (let valor of nomes){
    console.log(valor);
}