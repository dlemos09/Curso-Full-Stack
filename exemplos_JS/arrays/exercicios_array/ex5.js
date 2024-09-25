// Contar Números Pares no Array

let numeros = [3, 4, 7, 10, 15, 20];
let contagemPares = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    contagemPares++;  // Incrementa se o número for par
  }
}

console.log("Números pares: " + contagemPares);
