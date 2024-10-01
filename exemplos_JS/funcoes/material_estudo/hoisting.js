// teste(); hoisting só funciona com function declaration!
// function teste(){
//     console.log('teste')
// }
// teste(); 

// ---------------------------

// Function expression

// teste(); hoisting não funciona nesse caso

const teste = function teste(){
    console.log('teste')
}
teste(); 