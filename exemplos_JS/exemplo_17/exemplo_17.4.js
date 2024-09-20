// Contar quantos números entre 1 e 100 são múltiplos de 3

let contadorMultiplosDeTres = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        contadorMultiplosDeTres++; // Conta os múltiplos de 3
    }
}
console.log("Há " + contadorMultiplosDeTres + " números múltiplos de 3 entre 1 e 100.");
