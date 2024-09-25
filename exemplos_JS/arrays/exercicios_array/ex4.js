// Objetivo: Criar um novo array onde cada elemento é o dobro do valor do array original.



let numeros = [1, 2, 3, 4];
let dobrados = [];

for (let i = 0; i < numeros.length; i++) {
  dobrados.push(numeros[i] * 2);  // Multiplica cada valor por 2 e adiciona ao novo array
}

console.log(dobrados);  // Exibe [2, 4, 6, 8]
