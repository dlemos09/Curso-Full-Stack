const base = document.getElementById('base')
const altura = document.getElementById('altura')
const output = document.getElementById('output')

function mostrarArea() {
    let baseValue = base.value
    let alturaValue = altura.value

    let area = (baseValue * alturaValue) / 2

    output.innerHTML = `A área do triângulo de base ${baseValue} e altura ${alturaValue} é ${area}cm.`
}