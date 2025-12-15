// EXERCÍCIO 4: Contar palavras com mais de 4 letras
// Use for...of para contar quantas palavras têm mais de 4 letras

const palavras = [
  "sol",
  "computador",
  "lua",
  "javascript",
  "ar",
  "desenvolvimento",
];

// Solução:
let contador = 0;
for (let palavra of palavras) {
  if (palavra.length > 4) {
    contador++;
  }
}

console.log(`Palavras com mais de 4 letras: ${contador}`);
