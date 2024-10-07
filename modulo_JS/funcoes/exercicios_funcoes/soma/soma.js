

document.getElementById('formSoma').addEventListener('submit', function (event) {
    event.preventDefault();
    const numero1 = Number(document.getElementById('numero1').value);
    const numero2 = Number(document.getElementById('numero2').value);
    function somar(a, b) {
        return a + b;
    }
    const resultadoSoma = somar(numero1, numero2);
    document.getElementById('resultadoSoma').innerText = `A soma é: ${resultadoSoma}`;
});