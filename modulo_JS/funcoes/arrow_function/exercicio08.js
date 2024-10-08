// Implemente uma arrow function que filtra todos os números primos de um array de inteiros. Um número primo é divisível apenas por 1 e por ele mesmo.



// const isPrimo = num => {
//     const verificarPrimo = (num, div = 2) => {
//       if (num < 2) return false; // Números menores que 2 não são primos
//       if (div * div > num) return true; // Nenhum divisor encontrado até a raiz quadrada
//       if (num % div === 0) return false; // Encontrou divisor, não é primo
//       return verificarPrimo(num, div + 1); // Continua verificando com o próximo divisor
//     };

//     return verificarPrimo(num);
//   };

//   const filtrarPrimos = arr => arr.filter(isPrimo);

//   console.log(filtrarPrimos([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
//   // Saída correta: [11, 13, 17, 19]

const isPrimo = num => {
    const verificarPrimo = (num, div = 2) =>
        num < 2
            ? false
            : div * div > num
                ? true
                : num % div === 0
                    ? false
                    : verificarPrimo(num, div + 1);

    return verificarPrimo(num);
};

const filtrarPrimos = arr => arr.filter(isPrimo);

console.log(filtrarPrimos([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// Saída: [11, 13, 17, 19]
