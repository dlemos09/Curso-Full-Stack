// Enunciado: De 1 a 100, para múltiplos de 3 imprima "Fizz", para múltiplos de 5 imprima "Buzz", para ambos imprima "FizzBuzz", senão o número.

// Solução comentada
for (let i = 1; i <= 100; i++) {
  let saida = "";
  if (i % 3 === 0) saida += "Fizz";
  if (i % 5 === 0) saida += "Buzz";
  console.log(saida || i); // se saida for "", imprime i
}
