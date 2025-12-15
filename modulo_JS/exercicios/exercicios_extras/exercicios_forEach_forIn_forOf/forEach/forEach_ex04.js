// EXERCÍCIO 4: Dobrar valores e criar novo array
// Use forEach para criar um novo array com o dobro de cada número

const valores = [5, 10, 15, 20];
const dobrados = [];

// Solução:
valores.forEach(function (valor) {
  dobrados.push(valor * 2);
});

console.log("Array original:", valores);
console.log("Array dobrado:", dobrados);
