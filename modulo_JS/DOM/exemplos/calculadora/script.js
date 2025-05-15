// Função somar

function somar(){
    let tn1 = document.getElementById('txtn1')

    let tn2 = document.querySelector('input#txtn2')

    let res = document.getElementById('res')

    let n1 = Number(tn1.value)

    let n2 = Number(tn2.value)

    let s = n1 + n2

    res.innerHTML = `A soma entre ${n1} e ${n2} é igual à ${s}`

}

// Função subtração

function subtrair(){
    let tn1 = document.getElementById('txtn1')

    let tn2 = document.querySelector('input#txtn2')

    let res = document.getElementById('res')

    let n1 = Number(tn1.value)

    let n2 = Number(tn2.value)

    let s = n1 - n2

    res.innerHTML = `A subtração entre ${n1} e ${n2} é igual à ${s}`

}

// Função multiplicar

function multiplicar(){
    let tn1 = document.getElementById('txtn1')

    let tn2 = document.querySelector('input#txtn2')

    let res = document.getElementById('res')

    let n1 = Number(tn1.value)

    let n2 = Number(tn2.value)

    let s = n1 * n2

    res.innerHTML = `A multiplicação entre ${n1} e ${n2} é igual à ${s}`

}
// Função Dividir
function dividir(){
    let tn1 = document.getElementById('txtn1')

    let tn2 = document.querySelector('input#txtn2')

    let res = document.getElementById('res')

    let n1 = Number(tn1.value)

    let n2 = Number(tn2.value)

    let s = n1 / n2

    res.innerHTML = `A divisão entre ${n1} e ${n2} é igual à ${s}`

}