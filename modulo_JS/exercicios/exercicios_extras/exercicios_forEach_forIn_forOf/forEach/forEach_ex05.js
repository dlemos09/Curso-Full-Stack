// EXERCÍCIO 5: Contar números pares
// Use forEach para contar quantos números pares existem no array

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Solução:
let contadorPares = 0;
numeros.forEach(function (numero) {
  if (numero % 2 === 0) {
    contadorPares++;
  }
});

console.log(`Total de números pares: ${contadorPares}`); // Deve exibir: 5
