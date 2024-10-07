// Escreva uma arrow function que ordene um array de palavras pela quantidade de letras, do menor para o maior.

const palavras = ['banana', 'maçã', 'uva', 'abacaxi', 'laranja'];
const ordenadasPorTamanho = palavras.sort((a, b) => a.length - b.length);
console.log(ordenadasPorTamanho);  // Saída esperada: ['uva', 'maçã', 'banana', 'laranja', 'abacaxi']
