document.getElementById('formIdade').addEventListener('submit', function (event) {
    event.preventDefault();
    const anoNascimento = document.getElementById('anoNascimento').value;
    function calcularIdade(anoNascimento) {
        const anoAtual = new Date().getFullYear();
        return anoAtual - anoNascimento;
    }
    const resultadoIdade = calcularIdade(anoNascimento);
    document.getElementById('resultadoIdade').innerText = `Seu ano de nascimento é: ${resultadoIdade}`;
});