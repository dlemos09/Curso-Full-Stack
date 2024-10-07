//Declaração de função (Function hoisting)

function falaOi(){
    console.log('oi');
}
falaOi();

//First-class objects (Objetos de primeira classe)
//Function expression
const souUmDado = function(){
    console.log('Sou um dado');
};
souUmDado();

// function executaFuncao(funcao){
//     funcao();
// }
// executaFuncao(souUmDado);

// ------------------------

//Arrow funtion

const arrow = () => {
    console.log('Sou uma arrow function');
};
arrow();

// ------------------------

//Dentro de um objeto
const obj = {
    // falar: function(){
    //     console.log('Estou falando...')
    // }
    falar(){
        console.log('Estou falando...')
    }
};
obj.falar();