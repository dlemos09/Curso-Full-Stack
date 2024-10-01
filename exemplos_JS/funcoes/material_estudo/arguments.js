// function somar(n1, n2){
//     return n1 + n2
// }

// console.log(somar(1,2))

// function somar(arr){
//     let total = 0;
//     for(let i = 0; i < arr.length; i++){
//         total += arr[i];
//     }
//     return total;
// }
// console.log(somar([1,2,3]));

// AS propriedades arguments permite ter acesso a todos os argumentos da função, mesmo que não tenha especificado. Mas, não funciona com o arrow function!
function somar(){
    console.log(arguments)
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
console.log(somar([1,2,3]));