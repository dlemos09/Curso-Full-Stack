// Enunciado: Crie function paresAte(n) que retorna um array com todos os números pares entre 1 e n.

// Solução comentada
function paresAte(n) {
  const pares = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) pares.push(i);
  }
  return pares;
}
console.log(paresAte(10)); // [2,4,6,8,10]
