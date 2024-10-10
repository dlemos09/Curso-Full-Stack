const input = document.getElementById('number')
const output = document.getElementById('output')

let tabuadaHTML = ''

function mostrarTabuada() {
    const inputValue = parseFloat(input.value);

    limparTabuada();

    for (let i = 1; i < 10; i++) {
        tabuadaHTML += `${i} x ${inputValue} = ${(i * inputValue)} <br> `
    }

    output.innerHTML = tabuadaHTML
}

function limparTabuada() {
    tabuadaHTML = ''
    output.innerHTML = ''
}