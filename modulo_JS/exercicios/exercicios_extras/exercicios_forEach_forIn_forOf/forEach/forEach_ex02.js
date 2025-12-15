// EXERCÍCIO 2: Imprimir elementos com seus índices
// Use forEach para imprimir cada fruta com seu índice no formato: "Índice 0: Maçã"

const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Manga'];

// Solução:
frutas.forEach(function(fruta, indice) {
  console.log(`Índice ${indice}: ${fruta}`);
});

// Ou usando arrow function:
// frutas.forEach((fruta, indice) => console.log(`Índice ${indice}: ${fruta}`));
