// filter -> sempre retorna um array, com a mesma quantidade de elementos ou menos


// const alunos = ['Joaquim, Maria, Jonathan']
// console.log(alunos) // Retorna -> [ 'Joaquim, Maria, Jonathan' ]


const numeros = [1, 10, 4, 20, 15, 8, 12, 27, 13, 8, 7];

// function callbackFilter(valor, indice, array) {
//     if (valor > 10) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function callbackFilter(valor) {
//     return (valor > 10)  
// }


// const filtro = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array)
//     return (valor > 10)
// });


const filtro = numeros.filter(valor => valor > 10);

console.log(filtro);