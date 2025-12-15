document.getElementById('formIdade').addEventListener('submit', function (event) {
    event.preventDefault();

    const anoNascimento = document.getElementById('anoNascimento').value;

    // Validação: mínimo 4 dígitos
    if (anoNascimento.length < 4) {
        alert('Por favor, digite o ano com no mínimo 4 dígitos.');
        return;
    }

    function calcularIdade(anoNascimento) {
        const anoAtual = new Date().getFullYear();
        return anoAtual - anoNascimento;
    }

    const resultadoIdade = calcularIdade(anoNascimento);
    document.getElementById('resultadoIdade').innerText = `Sua idade é: ${resultadoIdade} anos`;
});