
function calcularIMC(peso, altura) {
    if (peso === undefined || altura === undefined) {
        throw Error('São necessários dois parametros: peso e altura')
    }
    return peso / (altura * altura)
}

function classicaIMC(imc) {
    if (imc <= 16.9) {
        return 'Muito abaixo do peso';
    } else if (imc <= 18.4) {
        return 'abaixo do peso';
    } else if (imc <= 24.9) {
        return 'normal';
    } else if (imc <= 29.9) {
        return 'acima do peso';
    } else if (imc <= 34.9) {
        return 'obesidade 1';
    } else if (imc <= 40) {
        return 'obesidade 2';
    } else {
        return 'obesidade 3';
    }
}

let imc = calcularIMC(100, 1.76)
console.log(imc.toFixed(2))
console.log(classicaIMC(imc))