document.getElementById('formParidade').addEventListener('submit', function (event) {
    event.preventDefault();
    const numeroPar = Number(document.getElementById('numeroPar').value);
    function ehPar(numero) {
        return numero % 2 === 0 ? 'É par' : 'É ímpar';
    }
    const resultadoParidade = ehPar(numeroPar);
    document.getElementById('resultadoParidade').innerText = `O número ${numeroPar} ${resultadoParidade}`;
});