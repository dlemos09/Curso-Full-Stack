function executar() {
    console.log('cliquei no botao')
}

function executar2() {
    console.log('cliquei no body')
}

// const botao = document.getElementById('botao')
// const botao = document.querySelector('[botao-acao]')
// botao.onclick = executar
// botao.onclick = function(){executar()}


const botao = document.querySelector('[botao-acao]')
//const body = document.querySelector('body')
// botao.addEventListener('click', executar)
// botao.addEventListener('click', function(){
//     executar()
//     executar2()
// })


botao.addEventListener('click', executar)
//body.addEventListener('click', executar2, false) // troque para true

// Essa verificação é importante para versões antigas do Internet Explorer

// if (botao.addEventListener){
//     botao.addEventListener('click', executar)
// }else{
//     botao.attachEvent('click', executar)
// }