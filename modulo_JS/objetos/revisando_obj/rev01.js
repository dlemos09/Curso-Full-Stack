const pessoa = {
    nome: 'Cebolinha',
    sobrenome: 'LinguaPresa'
};

// console.log(pessoa.nome)
// console.log(pessoa.sobrenome)

const chave = 'nome'
// também é possível usar essa notação usando []
console.log(pessoa[chave]); //é possível também atribuir uma variável para exibir o valor, mas não funciona com a notação com '.nome'
console.log(pessoa['sobrenome']);

console.clear()

// -------------------------------

// também é possível criar objeto com estrutura construtora 

const pessoa1 = new Object();
pessoa1.nome = 'Douglas';
pessoa1.sobrenome = 'Silva'
pessoa1.idade = 28;

// console.log(pessoa1.nome) 
// console.log(pessoa1.sobrenome) 

//delete pessoa1.nome; // Assim como no array, também é possível apagar no objeto usando o delete
//console.log(pessoa1);

// Objetos podem conter métodos, métodos são funções!

pessoa1.falarNome = function () {
    return (`${this.nome} está falando seu nome.`)
}

pessoa1.falarNome();

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1){
    console.log(pessoa1[chave]);
}
