// Enunciado: Crie a função somaAte(n) que retorna a soma dos números de 1 até n usando for.
// Solução comentada
function somaAte(n) {
  let soma = 0;
  for (let i = 1; i <= n; i++) {
    soma += i;
  }
  return soma;
}
console.log(somaAte(10)); // 55
