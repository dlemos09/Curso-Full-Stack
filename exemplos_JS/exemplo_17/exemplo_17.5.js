// Números primos de 1 a 50 Verifique e imprima todos os números primos de 1 a 50. Um número primo é divisível apenas por 1 e por ele mesmo.

for (let i = 2; i <= 50; i++) {
    let primo = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            primo = false;
            break; // Se o número for divisível por outro, não é primo
        }
    }
    if (primo) {
        console.log(i + " é primo.");
    }
}
