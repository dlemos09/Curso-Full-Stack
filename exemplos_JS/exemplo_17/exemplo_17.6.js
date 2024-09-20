// Exemplo de for in
const frutas = ['Pera', 'Uva', 'Maçã'];

// for(let i = 0; i< frutas.length; i++){
//     console.log(frutas[i]);
// }

// o for a seguir não está realizando o incremento, apenas a leitura;
// 'indice' é a variável e pode ser informado qualquer nome 
// Retorna o índice  ou chave (string, array ou objetos)
for (let indice in frutas){
    console.log(indice);
}

console.clear()

// criando objeto
const pessoa = {
    nome: 'Douglas',
    sobrenome: 'Lemos',
    idade: 30
};

console.log(pessoa.nome)
console.log(pessoa['nome'])


// for (let i in pessoa){
//     console.log(i)
// }