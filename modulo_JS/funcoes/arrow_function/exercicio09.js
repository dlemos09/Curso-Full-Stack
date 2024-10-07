// Implemente uma arrow function que ordena objetos com base em uma ou mais propriedades, usando uma função de comparação customizada.

const ordenarPor = prop => (a, b) =>
    a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0;

const pessoas = [
    { nome: 'Alice', idade: 25 },
    { nome: 'Bob', idade: 30 },
    { nome: 'Carlos', idade: 22 }
];

const ordenadoPorIdade = pessoas.sort(ordenarPor('idade'));
console.log(ordenadoPorIdade);
// Saída: [{nome: 'Carlos', idade: 22}, {nome: 'Alice', idade: 25}, {nome: 'Bob', idade: 30}]
