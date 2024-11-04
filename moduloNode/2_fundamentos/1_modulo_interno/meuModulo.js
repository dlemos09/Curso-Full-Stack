// Exporta um objeto utilizando 'module.exports', o que torna este módulo reutilizável em outros arquivos.
module.exports = {
    // Define uma função chamada 'soma' no objeto exportado, que recebe dois parâmetros: 'a' e 'b'.
    soma(a, b) {
        // A função 'soma' exibe no console o resultado da soma de 'a' e 'b'.
        console.log(a + b)
    }
}
